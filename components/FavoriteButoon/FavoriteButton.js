import Image from "next/image";

export default function FavoriteButton({ piece, handleToggleFavorite }) {
  function onToggleFavorite(event, slug) {
    event.preventDefault();
    handleToggleFavorite(slug);
  }

  return (
    <Image
      src="/heart.svg"
      alt="favorite button"
      width={30}
      height={30}
      onClick={(event) => onToggleFavorite(event, piece.slug)}
    />
  );
}
