import { NoteData } from "@/types/note";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NoteStore {
  draft: NoteData;
  setDraft: (note: NoteData) => void;
  clearDraft: () => void;
}

const initialDraft: NoteData = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "note-draft",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
