import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

const StyledArtPiece = styled.li`
  list-style: none;
`;

const StyledInfo = styled.h2`
  background-color: #0f5855;
  color: white;
  width: 50vw;
  margin: 0;
  padding: 0.5rem;
  text-align: center;
  font-size: 1rem;
`;

const StyledImage = styled(Image)`
  max-height: 45vh;
  object-fit: cover;
  width: 50vw;
`;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledMargins = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export default function ArtPiecePreview({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <StyledMargins>
      <StyledArtPiece>
        <StyledWrapper>
          <FavoriteButton
            piece={piece}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
          <Link href={`/art-pieces/${piece.slug}`}>
            <StyledImage
              src={piece.imageSource}
              alt={piece.name}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
            />
          </Link>
        </StyledWrapper>
        <StyledInfo>
          {piece.name} by {piece.artist}
        </StyledInfo>
      </StyledArtPiece>
    </StyledMargins>
  );
}
