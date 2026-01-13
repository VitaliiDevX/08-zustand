import type { Note } from "../../types/note";
import css from "./NoteList.module.css";
import NoteItem from "../NoteItem/NoteItem";

interface NoteListProps {
  noteList: Note[];
}

function NoteList({ noteList }: NoteListProps) {
  return (
    <ul className={css.list}>
      {noteList.map((note) => (
        <li className={css.listItem} key={note.id}>
          <NoteItem note={note} />
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
