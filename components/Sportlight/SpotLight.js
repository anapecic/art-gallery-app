import Image from "next/image";
import { uid } from "uid";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

function randomSpotLight({ piece }) {
  if (!piece || piece.lenght === 0) return null;
  const randomIndex = Math.floor(Math.random() * piece.length);
  return piece[randomIndex];
}

export function SpotLight({ pieces }) {
  const randomPiece = randomSpotLight();
  if (!randomPiece) return null;

  return (
    <div>
      <h1>Spotlight</h1>
      <SpotLight
        title={randomPiece.title}
        artist={randomPiece.artist}
        imageSrc={randomPiece.imageSrc}
      />
    </div>
  );
}
