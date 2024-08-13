import ArtPiecePreview from "../../components/ArtPiecePreview/ArtPiecePreview";
import { uid } from "uid";

export default function ArtPieces({ pieces, handleToggleFavorite }) {
  return (
    <div>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={uid()}
            piece={piece}
            handleToggleFavorite={handleToggleFavorite}
          />
        );
      })}
    </div>
  );
}
