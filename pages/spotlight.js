import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  max-height: 50vh;
  object-fit: cover;
  width: 95vw;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInfo = styled.h2`
  background-color: #0f5855;
  color: white;
  width: 95vw;
  margin: 0;
  padding: 0.8rem;
  text-align: center;
  font-size: 1.3rem;
`;

function randomSpotLight(pieces) {
  if (!pieces) return null;
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function Spotlight({ pieces }) {
  const randomPiece = randomSpotLight(pieces);
  if (!randomPiece) return null;

  return (
    <FlexWrap>
      <StyledImage
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={randomPiece.dimensions.width}
        height={randomPiece.dimensions.height}
      />
      <StyledInfo>{randomPiece.artist}</StyledInfo>
    </FlexWrap>
  );
}
