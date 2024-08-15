import Comment from "../Comment/Comment";
import { uid } from "uid";
import styled from "styled-components";

const CommentCard = styled.div`
  background: #e8f4f3;
  width: 50vw;
  padding: 10px;
  border-radius: 5px;
`;

const StyledHeading = styled.h3`
  text-decoration: underline dotted;
  text-decoration-thickness: 5px;
  text-decoration-color: #0f5855;
  margin-bottom: 1.5rem;
`;

export default function Comments({ artPiecesInfo, currentPiece }) {
  const currentArt = artPiecesInfo.find(
    (piece) => currentPiece.slug === piece.id
  );
  const comments = currentArt?.comments;
  console.log(comments);
  return (
    <>
      <hr />
      <StyledHeading key={uid()}>Comments</StyledHeading>
      {comments?.map((comment) => (
        <CommentCard key={uid()}>
          <Comment key={uid()} comment={comment} />
        </CommentCard>
      ))}
    </>
  );
}
