import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";
import { handleClientScriptLoad } from "next/script";

export default function ArtPiecesPage({ pieces, handleToggleFavorite }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          piece={piece}
          handleToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
}
