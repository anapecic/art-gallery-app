import Image from "next/image";

export default function ArtPiecePreview({ piece }) {
  return (
    <ul>
      <li>
        <Image
          src={piece.imageSource}
          alt={piece.name}
          width={piece.dimensions.width * 0.3}
          height={piece.dimensions.height * 0.3}
        />
        <h2>
          {piece.name} by {piece.artist}
        </h2>
      </li>
    </ul>
  );
}
