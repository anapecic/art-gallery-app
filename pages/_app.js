import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

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

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={pieces}
          artPiecesInfo={artPiecesInfo}
          handleToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
