// src/components/misEquipos/MyTeamsPage.tsx
"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { TeamCard } from "./TeamCard";
import { supabase } from "@/lib/supabase"; // Import Supabase client
import { TeamForm } from "../../components/forms/TeamForm"; // Import the TeamForm component

// Define interfaces for data structures
interface Team {
  id: number;
  nombre: string;
  fecha_creacion: string;
  created_by_user_id: string; // Assuming a user ID for the creator
  memberCount?: number; // Optional, will be added after fetching
  createdByName?: string; // Optional, will be added after fetching
  createdAt: string; // Formatted date string, required for TeamCard
}

export function MyTeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeamIdForEdit, setSelectedTeamIdForEdit] = useState<number | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [selectedTeamForDetails, setSelectedTeamForDetails] = useState<Team | null>(null);

  // Function to fetch all teams with their details
  const fetchTeamsData = async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Fetch all teams
      const { data: teamsData, error: teamsError } = await supabase
        .from("equipo")
        .select("id, nombre, fecha_creacion"); // Include created_by_user_id

      if (teamsError) {
        throw teamsError;
      }

      // 2. Fetch member count and creator name for each team
      const teamsWithDetails = await Promise.all(
        teamsData.map(async (team) => {
          // Fetch member count for the current team
          const { count: memberCount, error: memberCountError } = await supabase
            .from("miembroequipo")
            .select("*", { count: "exact", head: true })
            .eq("equipos_id", team.id); // Ensure this matches your foreign key

          let memberCountValue = 0;
          if (memberCountError) {
            console.error(`Error fetching member count for team ${team.id}:`, memberCountError);
            // Default to 0 members if there's an error
            memberCountValue = 0;
          } else {
            memberCountValue = memberCount || 0;
          }

          // Fetch creator's name
          let createdByName = "Desconocido"; // Default value
          if (team.nombre) {
            const { data: userData, error: userError } = await supabase
              .from("usuario")
              .select("nombre")
              .eq("id", team.id)
              .single(); // Use created_by_user_id

            if (userError) {
              console.error(`Error fetching user data for ID ${team.id}:`, userError);
            } else if (userData) {
              createdByName = userData.nombre;
            }
          }

          // Format the creation date
          const createdAt = new Date(team.fecha_creacion).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return {
            ...team,
            memberCount: memberCountValue,
            createdByName,
            createdAt,
          } as Team;
        })
      );

      setTeams(teamsWithDetails);
    } catch (err: any) {
      console.error("Error fetching teams data:", err.message);
      setError(`Error al cargar los equipos: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch data on component mount
  useEffect(() => {
    fetchTeamsData();
  }, []);

  // Handler for "Ver" button
  const handleViewDetails = (teamId: number) => {
    const team = teams.find((t) => t.id === teamId);
    if (team) {
      setSelectedTeamForDetails(team);
      setShowDetailsModal(true);
    }
  };

  // Handler for "Modificar" button
  const handleModifyTeam = (teamId: number) => {
    setSelectedTeamIdForEdit(teamId);
  };

  // Handler to close the TeamForm (after saving or canceling)
  const handleCloseEdit = () => {
    setSelectedTeamIdForEdit(null);
    fetchTeamsData(); // Re-fetch data to reflect any changes
  };

  if (loading) {
    return (
      <main className="flex-1 p-5 overflow-auto h-screen flex justify-center items-center">
        <p className="text-xl text-black">Cargando equipos...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1 p-5 overflow-auto h-screen flex justify-center items-center">
        <p className="text-xl text-red-600">Error: {error}</p>
      </main>
    );
  }

  // Conditional rendering: Show TeamForm if a team is selected for edit, otherwise show team cards
  if (selectedTeamIdForEdit !== null) {
    return (
      <main className="flex-1 p-5 overflow-auto h-screen">
        <h2 className="text-3xl font-bold text-black mb-6">Modificar Equipo</h2>
        <TeamForm teamIdToEdit={selectedTeamIdForEdit} onCancel={handleCloseEdit} onSave={handleCloseEdit} />
      </main>
    );
  }

  return (
    <main className="flex-1 p-5 overflow-auto h-screen">
      <section className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between font-medium max-md:max-w-full">
          <h2 className="text-3xl font-bold text-black mb-6">Mis Equipos</h2>
        </header>
        {teams.length === 0 ? (
          <p className="text-black text-opacity-70">No hay equipos disponibles para mostrar.</p>
        ) : (
          teams.map((team) => (
            <TeamCard
              key={team.id}
              team={{ ...team, memberCount: team.memberCount ?? 0, createdByName: team.createdByName ?? "Desconocido" }}
              onView={handleViewDetails}
              onModify={handleModifyTeam}
            />
          ))
        )}
      </section>

      {/* Team Details Modal */}
      {showDetailsModal && selectedTeamForDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4">Detalles del Equipo: {selectedTeamForDetails.nombre}</h3>
            <p>
              <strong>ID:</strong> {selectedTeamForDetails.id}
            </p>
            <p>
              <strong>Miembros:</strong> {selectedTeamForDetails.memberCount}
            </p>
            <p>
              <strong>Creado por:</strong> {selectedTeamForDetails.createdByName}
            </p>
            <p>
              <strong>Fecha de Creación:</strong> {selectedTeamForDetails.createdAt}
            </p>
            {/* Add more team details here if available in the team object */}
            <button
              onClick={() => setShowDetailsModal(false)}
              className="mt-6 bg-slate-400 bg-opacity-70 rounded-md h-[40px] px-4 text-medium text-white"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}