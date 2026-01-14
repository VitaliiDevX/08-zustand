import type { Metadata } from "next";
import CreateNote from "./CreateNote/CreateNote";

export const metadata: Metadata = {
  title: "Create Note | NoteHub",
  description: "Create a new note in the NoteHub application.",
  openGraph: {
    title: "Create Note | NoteHub",
    description: "Create a new note in the NoteHub application.",
    url: "https://notehub.app/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Create a new note in NoteHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Note | NoteHub",
    description: "Create a new note in the NoteHub application.",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default async function CreateNotePage() {
  return <CreateNote />;
}
