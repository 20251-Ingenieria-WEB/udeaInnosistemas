"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; // Import Supabase client

// Assuming this component exists or you can create a simple one
// to display a member's name and role, and a delete button
interface TeamMemberRowProps {
  name: string;
  role: string;
  showDelete: boolean;
  onDelete: () => void;
}

// A placeholder for TeamMemberRow if you don't have it
// You'll need to style this appropriately if you use it.
const TeamMemberRow: React.FC<TeamMemberRowProps> = ({ name, role, showDelete, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
      <span>{name} - {role}</span>
      {showDelete && (
        <button
          onClick={onDelete}
          className="ml-4 text-red-500 hover:text-red-700 font-bold"
        >
          X
        </button>
      )}
    </div>
  );
};

interface TeamMember {
  id: string; // This will be the student's ID, converted to string
  name: string;
  role: string; // Placeholder role, as not present in DB schema provided
}

interface Team {
  id: number;
  nombre: string;
}

interface Student {
  id: number;
  nombre: string;
  matricula: string;
}

interface TeamFormProps {
    teamIdToEdit: number | null; // The ID of the team to edit, or null for a new team
    onCancel: () => void; // Callback when cancel button is clicked
    onSave: () => void; // Callback when save button is clicked
}


export const TeamForm: React.FC<TeamFormProps> = ({ teamIdToEdit, onCancel, onSave }) => {
  const [teams, setTeams] = useState<Team[]>([]); // This will hold all teams for the dropdown
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(teamIdToEdit);
  const [selectedTeamName, setSelectedTeamName] = useState("Nombre del equipo");
  const [newMemberName, setNewMemberName] = useState("");
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [availableStudents, setAvailableStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Effect to fetch all teams on component mount or when teamIdToEdit changes
  useEffect(() => {
    const fetchAllTeams = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: fetchError } = await supabase
          .from("equipo")
          .select("id, nombre");

        if (fetchError) {
          throw fetchError;
        }

        if (data && data.length > 0) {
          setTeams(data);
          // If editing a specific team, select it
          if (teamIdToEdit !== null) {
            const teamFound = data.find(t => t.id === teamIdToEdit);
            if (teamFound) {
                setSelectedTeamId(teamFound.id);
                setSelectedTeamName(teamFound.nombre);
            } else {
                setError("Equipo no encontrado para editar.");
                setSelectedTeamId(null);
                setSelectedTeamName("Equipo no encontrado");
            }
          } else if (data.length > 0) { // Default to first team if not editing and teams exist
            setSelectedTeamId(data[0].id);
            setSelectedTeamName(data[0].nombre);
          }
        } else {
          setTeams([]);
          setSelectedTeamId(null);
          setSelectedTeamName("No hay equipos disponibles");
        }
      } catch (err: any) {
        console.error("Error fetching teams:", err.message);
        setError(`Error al cargar equipos: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchAllTeams();
  }, [teamIdToEdit]); // Re-run if teamIdToEdit changes

  // Effect to fetch team members and available students when selectedTeamId changes
  useEffect(() => {
    if (selectedTeamId) {
      fetchTeamMembers(selectedTeamId);
      fetchAvailableStudents(selectedTeamId);
    } else {
      setMembers([]); // Clear members if no team is selected
      setAvailableStudents([]); // Clear available students if no team is selected
    }
  }, [selectedTeamId]);

  const fetchTeamMembers = async (teamId: number) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabase
        .from("miembroequipo")
        .select(
          `
          estudiante_id,
          estudiante (
            id,
            usuario (
              nombre
            )
          )
          `
        )
        .eq("equipos_id", teamId);

      if (fetchError) {
        throw fetchError;
      }

      // Filter out records where nested relations are null/undefined
      const fetchedMembers: TeamMember[] =
        data
          ?.filter(
            (member: any) =>
              member.estudiante &&
              member.estudiante.usuario &&
              member.estudiante.usuario.nombre
          )
          .map((member: any) => ({
            id: member.estudiante_id.toString(),
            name: member.estudiante.usuario.nombre,
            role: "Miembro", // Default role
          })) || [];
      setMembers(fetchedMembers);
    } catch (err: any) {
      console.error("Error fetching team members:", err.message);
      setError(`Error al cargar miembros: ${err.message}`);
      setMembers([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailableStudents = async (teamId: number) => {
    setLoading(true);
    setError(null);
    try {
      // Fetch all students with their associated user names
      const { data: allStudentsData, error: allStudentsError } = await supabase
        .from("estudiante")
        .select(
          `
          id,
          usuario (
            nombre
          ),
          matricula
          `
        );

      if (allStudentsError) {
        throw allStudentsError;
      }

      // Fetch IDs of students already in the current team
      const { data: teamMembersData, error: teamMembersError } = await supabase
        .from("miembroequipo")
        .select("estudiante_id")
        .eq("equipos_id", teamId);

      if (teamMembersError) {
        throw teamMembersError;
      }

      const currentMemberIds = new Set(teamMembersData?.map((m) => m.estudiante_id));      

      // Filter for students not in the current team and who have valid usuario.nombre
      const available =
        allStudentsData
          ?.filter(
            (student: any) =>
              student.usuario && // Ensure student.usuario exists
              typeof student.usuario.nombre === 'string' && // Ensure student.usuario.nombre exists and is a string
              !currentMemberIds.has(student.id)
          )
          .map((student: any) => ({
            id: student.id,
            nombre: student.usuario.nombre,
            matricula: student.matricula,
          })) || [];
      setAvailableStudents(available);
    } catch (err: any) {
      console.error("Error fetching available students:", err.message);
      setError(`Error al cargar estudiantes disponibles: ${err.message}`);
      setAvailableStudents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTeamId = parseInt(e.target.value);
    setSelectedTeamId(newTeamId);
    const selectedTeam = teams.find((team) => team.id === newTeamId);
    setSelectedTeamName(selectedTeam ? selectedTeam.nombre : "Nombre del equipo");
    setNewMemberName(""); // Clear new member input on team change
  };

  const handleAddMember = async () => {
    if (!newMemberName.trim() || !selectedTeamId) {
      alert("Por favor, selecciona un equipo y escribe el nombre del miembro.");
      return;
    }

    if (members.length >= 3) {
      alert("Se permite un máximo de 3 miembros por equipo.");
      return;
    }

    const studentToAdd = availableStudents.find(
      (student) => student.nombre.toLowerCase() === newMemberName.trim().toLowerCase()
    );

    if (!studentToAdd) {
      alert(
        "Estudiante no encontrado o ya es miembro del equipo. Por favor, asegúrate de escribir el nombre completo del estudiante como aparece en las sugerencias."
      );
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const { error: insertError } = await supabase.from("miembroequipo").insert([
        {
          equipos_id: selectedTeamId, // Changed to equipos_id to match fetchTeamMembers
          estudiante_id: studentToAdd.id,
        },
      ]);

      if (insertError) {
        throw insertError;
      }

      setNewMemberName(""); // Clear input after adding
      // Re-fetch members and available students to update UI
      await fetchTeamMembers(selectedTeamId);
      await fetchAvailableStudents(selectedTeamId);
    } catch (err: any) {
      console.error("Error adding member:", err.message);
      setError(`Error al añadir miembro: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMember = async (studentIdString: string) => {
    if (!selectedTeamId) return;

    // Find the member's name for the confirmation message
    const memberToDelete = members.find(member => member.id === studentIdString);
    const memberName = memberToDelete ? memberToDelete.name : "este miembro";

    const confirmDelete = window.confirm(
      `¿Estás seguro de que quieres eliminar a ${memberName} del equipo?`
    );

    if (!confirmDelete) {
      return; // User cancelled the deletion
    }

    const studentId = parseInt(studentIdString); // Convert back to number for DB operation

    setLoading(true);
    setError(null);
    try {
      const { error: deleteError } = await supabase
        .from("miembroequipo")
        .delete()
        .eq("equipos_id", selectedTeamId)
        .eq("estudiante_id", studentId);

      if (deleteError) {
        throw deleteError;
      }

      // Re-fetch members and available students to update UI
      await fetchTeamMembers(selectedTeamId);
      await fetchAvailableStudents(selectedTeamId);
    } catch (err: any) {
      console.error("Error deleting member:", err.message);
      setError(`Error al eliminar miembro: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    // For this implementation, member additions/deletions are direct DB operations.
    // This button could be used for other form-wide saves if applicable (e.g., team name change).
    // For now, it just logs.
    console.log("Guardando cambios del equipo...", {
      teamName: selectedTeamName,
      members: members,
    });
    alert("Cambios guardados (operaciones de añadir/eliminar son instantáneas).");
    onSave(); // Trigger the onSave callback to refresh parent component
  };

  const handleCancel = () => {
    // Optionally re-fetch data to revert any unsaved client-side changes
    // (though in this case, member changes are immediate).
    if (selectedTeamId) {
      fetchTeamMembers(selectedTeamId);
      fetchAvailableStudents(selectedTeamId);
    }
    setNewMemberName(""); // Clear any pending new member input
    console.log("Cambios cancelados.");
    onCancel(); // Trigger the onCancel callback to return to parent component
  };

  if (loading && teams.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-xl text-black">
        Cargando equipos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-xl text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <form className="flex flex-col space-y-8 w-full max-w-[1005px] mx-auto p-4 md:p-0">
      <div>
        <label className="block text-xl font-bold text-black mb-2 md:text-3xl max-sm:text-2xl">
          Nombre del equipo
        </label>
        <div className="relative">
          <select
            value={selectedTeamId || ""}
            onChange={handleTeamChange}
            className="w-full h-[58px] px-4 text-xl text-black border border-solid border-stone-300 rounded-md outline-none md:text-3xl max-sm:text-2xl bg-white"
            disabled={loading} // Disable dropdown while loading
          >
            {teams.length === 0 ? (
              <option value="" disabled>
                No hay equipos disponibles
              </option>
            ) : (
              teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.nombre}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      <section>
        <h3 className="block text-xl font-bold text-black mb-4 md:text-3xl max-sm:text-2xl">
          Miembros
        </h3>
        <div className="flex flex-col space-y-3">
          {members.length === 0 && selectedTeamId && !loading ? (
            <p className="text-black text-opacity-70">No hay miembros en este equipo.</p>
          ) : (
            members.map((member) => (
              <TeamMemberRow
                key={member.id}
                name={member.name}
                role={member.role}
                showDelete={true}
                onDelete={() => handleDeleteMember(member.id)}
              />
            ))
          )}
        </div>
      </section>

      <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Añadir miembro..."
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            className="w-full h-[58px] px-4 text-xl text-black text-opacity-30 border border-solid border-stone-300 rounded-md outline-none md:text-3xl max-sm:text-2xl"
            list="available-students" // Link to datalist for suggestions
            disabled={!selectedTeamId || members.length >= 3 || loading}
          />
          <datalist id="available-students">
            {availableStudents.map((student) => (
              <option key={student.id} value={student.nombre} />
            ))}
          </datalist>
        </div>
        <button
          type="button"
          onClick={handleAddMember}
          className="bg-transparent border border-solid border-slate-400 rounded h-[58px] px-6 text-xl font-medium text-black text-opacity-50 md:w-[121px] max-sm:text-xl
                       disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedTeamId || members.length >= 3 || !newMemberName.trim() || loading}
        >
          Añadir
        </button>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mt-8">
        <button
          type="button"
          onClick={handleSave}
          className="bg-slate-400 bg-opacity-70 rounded-md h-[62px] px-6 text-xl font-medium text-white md:w-[268px] max-sm:text-2xl
                       disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          Guardar cambios
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-transparent border border-solid border-slate-400 rounded-md h-[62px] px-6 text-xl font-medium text-black md:w-[172px] max-sm:text-2xl
                       disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};