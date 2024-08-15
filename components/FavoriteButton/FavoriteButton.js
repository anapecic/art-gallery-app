import styled from "styled-components";
import Image from "next/image";

const StyledImageContainer = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;
  border-radius: 50%; /* This ensures the container is a perfect circle */
  background: white;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  height: 20px;
  width: 20px;
  object-fit: contain;
  color: #0f5855;
`;

export default function FavoriteButton({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  function onToggleFavorite(event, slug) {
    event.preventDefault();
    handleToggleFavorite(slug);
  }

  const correctArtPiecesInfo = artPiecesInfo?.find(
    (artPiece) => artPiece.id === piece.slug
  );

  const favorite = correctArtPiecesInfo?.isFavorite;
  return (
    <StyledImageContainer
      onClick={(event) => onToggleFavorite(event, piece.slug)}
    >
      <StyledImage
        src={favorite ? "/heart.svg" : "heart-outline.svg"}
        alt="favorite button"
        width={20}
        height={20}
      />
    </StyledImageContainer>
  );
}
