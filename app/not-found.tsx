import { Metadata } from "next";
import css from "./Home.module.css";

export const metadata: Metadata = {
  title: "Page Not Found | NoteHub",
  description:
    "The page you are looking for does not exist in the NoteHub application.",
  openGraph: {
    title: "Page Not Found | NoteHub",
    description:
      "The page you are looking for does not exist in the NoteHub application.",
    url: "https://notehub.app/not-found",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub Not Found page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | NoteHub",
    description:
      "The page you are looking for does not exist in the NoteHub application.",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default function NotFound() {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
}
