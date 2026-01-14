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

  const handleDeleteNote = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    deleteNoteMutation.mutate(id);
  };

  return (
    <Link href={`/notes/${note.id}`} className={css.card}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
      <div className={css.footer}>
        <span className={css.tag}>{note.tag}</span>
        <button
          className={css.button}
          onClick={(e) => handleDeleteNote(e, note.id)}
          disabled={deleteNoteMutation.isPending}
        >
          {deleteNoteMutation.isPending ? "Deleting..." : "Delete"}
        </button>
      </div>
    </Link>
  );
}

export default NoteItem;
