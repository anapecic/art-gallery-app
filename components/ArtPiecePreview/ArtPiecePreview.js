import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ piece, handleToggleFavorite }) {
  return (
    <ul>
      <li>
        <FavoriteButton
          piece={piece}
          handleToggleFavorite={handleToggleFavorite}
        />
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

function FavoriteButton({ piece, handleToggleFavorite }) {
  function onToggleFavorite(slug) {
    console.log("on toggle is function", slug);
    handleToggleFavorite(slug);
  }

  return (
    <Image
      src="/heart.svg"
      alt="favorite button"
      width={30}
      height={30}
      onClick={() => onToggleFavorite(piece.slug)}
    />
  );
}
