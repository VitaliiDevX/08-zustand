import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <span className={css.spinnerWrapper}>
      <InfinitySpin width="200" color="#0d6efd" ariaLabel="page-loader" />
    </span>
  );
}
