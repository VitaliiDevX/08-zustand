"use client";

import { useState } from "react";
import css from "./NotesPage.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";
import { Toaster } from "react-hot-toast";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import EmptyMessage from "@/components/EmptyMessage/EmptyMessage";
import { fetchNotes } from "@/lib/api";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import NoteList from "@/components/NoteList/NoteList";
import { NoteTag } from "@/types/note";
import Link from "next/link";

type NotesClientProps = {
  tag?: NoteTag;
};

export default function NotesClient({ tag }: NotesClientProps) {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["fetchNotes", searchText, page, tag],
    queryFn: () => fetchNotes({ searchText, page, tag }),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  const handleChange = useDebouncedCallback((text: string) => {
    setSearchText(text);
    setPage(1);
  }, 500);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox text={searchText} onChange={handleChange} />
        {data && data.totalPages > 1 && (
          <Pagination
            totalPages={data.totalPages}
            page={page}
            onPageChange={setPage}
          />
        )}
        <Link className={css.button} href="/notes/action/create">
          Create note +
        </Link>
      </header>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {data && data.notes.length === 0 && <EmptyMessage />}
      {data && data.notes.length > 0 && <NoteList noteList={data.notes} />}
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#ffffff",
              color: "#000000",
            },
            iconTheme: {
              primary: "#4caf50",
              secondary: "#ffffff",
            },
          },
          error: {
            style: {
              background: "#ffffff",
              color: "#000000",
            },
            iconTheme: {
              primary: "#e53935",
              secondary: "#ffffff",
            },
          },
        }}
      />
    </div>
  );
}
