import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtPieceDetails({ pieces }) {
  const router = useRouter();
  const dynamicSlug = router.query.slug;
  const currentPiece = pieces.find((piece) => piece.slug === dynamicSlug);

  if (!currentPiece) return null;

  return (
    <div>
      <button onClick={() => router.push("/")}>⬅️Back to Overview</button>
      <h1>{currentPiece.name}</h1>
      <h2>by {currentPiece.artist}</h2>
      <ul>
        <li>Year: {currentPiece.year}</li>
        <li>Genre: {currentPiece.genre}</li>
      </ul>
      <Image
        src={currentPiece.imageSource}
        alt={currentPiece.name}
        width={currentPiece.dimensions.width * 0.3}
        height={currentPiece.dimensions.height * 0.3}
      />
    </div>
  );
}