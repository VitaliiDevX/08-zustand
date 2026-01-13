import type { DebouncedState } from "use-debounce";
import css from "./SearchBox.module.css";

interface SearchBoxProps {
  text: string;
  onChange: DebouncedState<(text: string) => void>;
}

function SearchBox({ text, onChange }: SearchBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={css.input}
      type="text"
      defaultValue={text}
      placeholder="Search notes"
      onChange={handleChange}
    />
  );
}

export default SearchBox;
