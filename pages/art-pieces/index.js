import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ArtPiecesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <FlexWrap>
      {pieces.map((piece) => (
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
