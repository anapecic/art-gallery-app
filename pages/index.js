import ArtPiecesPage from "./art-pieces";
import Spotlight from "./spotlight";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function HomePage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <MainWrapper>
      <Spotlight pieces={pieces} />
      <ArtPiecesPage
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </MainWrapper>
  );
}
