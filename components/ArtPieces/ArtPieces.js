import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import { uid } from "uid";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => {
        return <ArtPiecePreview key={uid()} piece={piece} />;
      })}
    </div>
  );
}
