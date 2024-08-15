import { useRouter } from "next/router";
import Image from "next/image";
import CommentSection from "@/components/CommentSection/CommentSection.js";
import { uid } from "uid";
import Comments from "@/components/Comments/Comments";
import styled from "styled-components";

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h2`
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

const StyledAuthor = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
  padding-bottom: 1rem;
`;

const StyledInfo = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  font-weight: bold;
`;

const StyledImage = styled(Image)`
  max-height: 45vh;
  object-fit: contain;
  width: 70vw;
`;

const FlexWrapColor = styled(FlexWrap)`
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
`;

export default function ArtPieceDetails({
  pieces,
  artPiecesInfo,
  handleAddComment,
}) {
  const router = useRouter();
  const dynamicSlug = router.query.slug;
  const currentPiece = pieces.find((piece) => piece.slug === dynamicSlug);

  if (!currentPiece) return null;

  return (
    <FlexWrap>
      <StyledTitle>{currentPiece.name}</StyledTitle>
      <StyledAuthor>by {currentPiece.artist}</StyledAuthor>
      <StyledImage
        src={currentPiece.imageSource}
        alt={currentPiece.name}
        width={currentPiece.dimensions.width * 0.3}
        height={currentPiece.dimensions.height * 0.3}
      />
      <FlexWrapColor>
        {currentPiece.colors.map((color) => {
          return <Color key={uid()} color={color} />;
        })}
      </FlexWrapColor>
      <StyledInfo>Further Information:</StyledInfo>
      <ul>
        <li>Year: {currentPiece.year}</li>
        <li>Genre: {currentPiece.genre}</li>
      </ul>
      <Comments artPiecesInfo={artPiecesInfo} currentPiece={currentPiece} />
      <CommentSection
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        handleAddComment={(newComment, currentDate) => {
          handleAddComment(newComment, currentDate, currentPiece.slug);
        }}
      />
    </FlexWrap>
  );
}

function Color({ color }) {
  return (
    <div
      style={{
        background: color,
        borderRadius: "50%",
        width: "50px",
        height: "50px",
      }}
    ></div>
  );
}
