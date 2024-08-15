import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <FlexWrap>
      {favoritedArtPiecesData.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          piece={piece}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      ))}
    </FlexWrap>
  );
}
