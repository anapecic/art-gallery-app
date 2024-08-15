import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  if (error) return <div>Failed to Load.</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(clickedSlug) {
    const newPiece = artPiecesInfo.find(
      (artPiece) => artPiece.id === clickedSlug
    );

    if (!newPiece) {
      const newObject = { id: clickedSlug, isFavorite: true };
      setArtPiecesInfo([...artPiecesInfo, newObject]);
    } else {
      setArtPiecesInfo(
        artPiecesInfo.map((artPiece) =>
          artPiece.id === clickedSlug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : artPiece
        )
      );
    }
  }
  //here
  const handleAddComment = (newComment, currentDate, id) => {
    const artPiece = artPiecesInfo.find((piece) => piece.id === id);
    const updatedWithNewComment = artPiecesInfo.map((piece) =>
      piece.id === id
        ? {
            ...artPiece,
            comments: artPiece?.comments
              ? [
                  ...artPiece.comments,
                  { comment: newComment, date: currentDate },
                ]
              : [{ comment: newComment }],
          }
        : piece
    );
    if (!artPiece) {
      setArtPiecesInfo([
        ...artPiecesInfo,
        {
          id: id,
          isFavorite: false,
          comments: [{ comment: newComment, date: currentDate }],
        },
      ]);
    } else {
      setArtPiecesInfo([...updatedWithNewComment]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={pieces}
          artPiecesInfo={artPiecesInfo}
          handleToggleFavorite={handleToggleFavorite}
          handleAddComment={handleAddComment}
        />
      </Layout>
    </>
  );
}
