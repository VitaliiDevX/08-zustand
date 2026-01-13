import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Vitalii Ishchenko</p>
          <p>
            Contact us:
            <a href="mailto:vitalii.dev.1k@gmail.com">
              vitalii.dev.1k@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
