import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ piece }) {
  return (
    <ul>
      <li>
        <Link href={`/ArtPieces/${piece.slug}`}>
          <Image
            src={piece.imageSource}
            alt={piece.name}
            width={piece.dimensions.width * 0.25}
            height={piece.dimensions.height * 0.25}
          />
        </Link>
        <h2>
          {piece.name} by {piece.artist}
        </h2>
      </li>
    </ul>
  );
}
