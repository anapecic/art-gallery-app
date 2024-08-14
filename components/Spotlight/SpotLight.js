import Image from "next/image";

function randomSpotLight(pieces) {
  if (!pieces) return null;
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function Spotlight({ pieces }) {
  const randomPiece = randomSpotLight(pieces);
  console.log(randomSpotLight);
  if (!randomPiece) return null;

  return (
    <div>
      <h1>Spotlight</h1>
      <Image
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={randomPiece.dimensions.width * 0.3}
        height={randomPiece.dimensions.height * 0.3}
      />
      <h2>By {randomPiece.artist}</h2>
    </div>
  );
}
