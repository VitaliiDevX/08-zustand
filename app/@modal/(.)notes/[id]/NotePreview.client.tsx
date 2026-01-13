"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import NotePreview from "@/components/NotePreview/NotePreview";
import RouteModal from "@/components/RouteModal/RouteModal";

export default function NotePreviewClient() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fetchNoteById", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const handleClose = () => {
    router.back();
  };

  return (
    <RouteModal onClose={handleClose}>
      {isLoading ? (
        <p>Loading, please wait...</p>
      ) : error || !note ? (
        <p>Something went wrong.</p>
      ) : (
        <NotePreview note={note} />
      )}
    </RouteModal>
  );
}
