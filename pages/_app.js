import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  console.log(artPiecesInfo);

  if (error) return <div>Failed to Load.</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(clickedSlug) {
    const newPiece = artPiecesInfo.find(
      (artPiece) => artPiece.id === clickedSlug
    );
    console.log(newPiece);
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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
