"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { TeamCard } from "./TeamCard";
import { supabase } from "@/lib/supabase";
import { TeamForm } from "../../components/forms/TeamForm";

interface Team {
  id: number;
  nombre: string;
  fecha_creacion: string;
  created_by_user_id: string;
  memberCount?: number;
  createdByName?: string;
  createdAt: string;
}

export function MyTeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeamIdForEdit, setSelectedTeamIdForEdit] = useState<number | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [selectedTeamForDetails, setSelectedTeamForDetails] = useState<Team | null>(null);

  const fetchTeamsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data: teamsData, error: teamsError } = await supabase
        .from("equipo")
        .select("id, nombre, fecha_creacion");

      if (teamsError) throw teamsError;

      const teamsWithDetails = await Promise.all(
        teamsData.map(async (team) => {
          const { count: memberCount } = await supabase
            .from("miembroequipo")
            .select("*", { count: "exact", head: true })
            .eq("equipos_id", team.id);

          let createdByName = "Desconocido";
          if (team.nombre) {
            const { data: userData } = await supabase
              .from("usuario")
              .select("nombre")
              .eq("id", team.id)
              .single();

            if (userData) createdByName = userData.nombre;
          }

          const createdAt = new Date(team.fecha_creacion).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return {
            ...team,
            memberCount: memberCount || 0,
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

  useEffect(() => {
    fetchTeamsData();
  }, []);

  const handleViewDetails = (teamId: number) => {
    const team = teams.find((t) => t.id === teamId);
    if (team) {
      setSelectedTeamForDetails(team);
      setShowDetailsModal(true);
    }
  };

  const handleModifyTeam = (teamId: number) => {
    setSelectedTeamIdForEdit(teamId);
  };

  const handleCloseEdit = () => {
    setSelectedTeamIdForEdit(null);
    fetchTeamsData();
  };

  if (loading) {
    return (
      <main className="flex-1 p-5 overflow-auto h-screen flex justify-center items-center ml-[322px] mt-[88px]">
        <p className="text-xl text-black">Cargando equipos...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1 p-5 overflow-auto h-screen flex justify-center items-center ml-[322px] mt-[88px]">
        <p className="text-xl text-red-600">Error: {error}</p>
      </main>
    );
  }

  if (selectedTeamIdForEdit !== null) {
    return (
      <main className="flex-1 p-5 overflow-auto h-screen ml-[322px] mt-[88px]">
        <h2 className="text-3xl font-bold text-black mb-6">Modificar Equipo</h2>
        <TeamForm teamIdToEdit={selectedTeamIdForEdit} onCancel={handleCloseEdit} onSave={handleCloseEdit} />
      </main>
    );
  }

  return (
    <main className="flex-1 p-5 overflow-auto h-screen ml-[322px] mt-[88px]">
      <section className="max-w-6xl mx-auto">
        <header className="flex flex-wrap gap-5 justify-between font-medium">
          <h2 className="text-3xl font-bold text-black mb-6">Mis Equipos</h2>
        </header>
        
        <div className="grid gap-6">
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
        </div>
      </section>

      {showDetailsModal && selectedTeamForDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4">Detalles del Equipo: {selectedTeamForDetails.nombre}</h3>
            <p><strong>ID:</strong> {selectedTeamForDetails.id}</p>
            <p><strong>Miembros:</strong> {selectedTeamForDetails.memberCount}</p>
            <p><strong>Creado por:</strong> {selectedTeamForDetails.createdByName}</p>
            <p><strong>Fecha de Creación:</strong> {selectedTeamForDetails.createdAt}</p>
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