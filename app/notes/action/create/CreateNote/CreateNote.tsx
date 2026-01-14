import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";
import { getTags } from "@/lib/api";

export default function CreateNote() {
  const tags = getTags();

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm tags={tags} />
      </div>
    </main>
  );
}
