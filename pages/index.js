import ArtPieces from "./ArtPieces";
import ArtPieceDetails from "./ArtPieces/[slug]";

export default function HomePage({ pieces }) {
  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
