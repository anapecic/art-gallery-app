import Comment from "../Comment/Comment";
import { uid } from "uid";

export default function Comments({ artPiecesInfo, currentPiece }) {
  const currentArt = artPiecesInfo.find(
    (piece) => currentPiece.slug === piece.id
  );
  const comments = currentArt?.comments;

  return (
    <>
      <h3 key={uid()}>Comments</h3>
      {comments?.map((comment) => (
        <>
          <Comment key={uid()} comment={comment} />
        </>
      ))}
    </>
  );
}
