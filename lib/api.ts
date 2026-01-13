import axios from "axios";
import { Note, NoteData, NoteTag } from "../types/note";

axios.defaults.baseURL = "https://notehub-public.goit.study/api";

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface fetchNotesParams {
  searchText?: string;
  page: number;
  tag?: NoteTag;
}

export const fetchNotes = async ({
  searchText,
  page,
  tag,
}: fetchNotesParams): Promise<FetchNotesResponse> => {
  console.log(tag);
  const { data } = await axios.get<FetchNotesResponse>("/notes", {
    params: {
      search: searchText,
      page,
      perPage: 12,
      tag,
    },
  });

  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await axios.get<Note>(`/notes/${id}`);

  return data;
};

export const createNote = async (note: NoteData): Promise<Note> => {
  const { data } = await axios.post<Note>("/notes", note);

  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await axios.delete<Note>(`/notes/${id}`);

  return data;
};
