import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Note } from "../../types/note";
import css from "./NoteItem.module.css";
import toast from "react-hot-toast";
import { deleteNote } from "@/lib/api";
import Link from "next/link";

interface NoteItemProps {
  note: Note;
}

function NoteItem({ note }: NoteItemProps) {
  const queryClient = useQueryClient();

  const deleteNoteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetchNotes"],
      });
      toast.success(`Note "${note.title}" deleted`);
    },
    onError: () => {
      toast.error("Failed to delete note. Try again.");
    },
  });

  const handleDeleteNote = (id: string) => {
    deleteNoteMutation.mutate(id);
  };

  return (
    <>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
      <div className={css.footer}>
        <span className={css.tag}>{note.tag}</span>
        <Link href={`/notes/${note.id}`}>View details</Link>
        <button
          className={css.button}
          onClick={() => handleDeleteNote(note.id)}
          disabled={deleteNoteMutation.isPending}
        >
          {deleteNoteMutation.isPending ? "Deleting..." : "Delete"}
        </button>
      </div>
    </>
  );
}

export default NoteItem;
