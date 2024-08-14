import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";

export default function Favorites({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const favoritedArtPieces = artPiecesInfo.filter((piece) => {
    return piece.isFavorite === true;
  });

  const favoritedIds = favoritedArtPieces.map((piece) => {
    return piece.id;
  });

  const favoritedArtPiecesData = pieces.filter((piece) =>
    favoritedIds.includes(piece.slug)
  );

  return (
    <div>
      {favoritedArtPiecesData.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          piece={piece}
          handleToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
}

// beim styling beachten: favorite button im active zustand stylen
