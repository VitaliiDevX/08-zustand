import css from "./EmptyMessage.module.css";

export default function EmptyMessage() {
  return <p className={css.text}>No notes match your search...</p>;
}
