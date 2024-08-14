import { useRouter } from "next/router";
import Image from "next/image";
import CommentSection from "@/components/CommentSection/CommentSection.js";
import { uid } from "uid";

export default function ArtPieceDetails({
  pieces,
  artPiecesInfo,
  handleAddComment,
}) {
  const router = useRouter();
  const dynamicSlug = router.query.slug;
  const currentPiece = pieces.find((piece) => piece.slug === dynamicSlug);
  console.log(artPiecesInfo);
  if (!currentPiece) return null;

  return (
    <div>
      <button onClick={() => router.push("/")}>⬅️Back to Overview</button>
      <h1>{currentPiece.name}</h1>
      <h2>by {currentPiece.artist}</h2>
      <ul>
        <li>Year: {currentPiece.year}</li>
        <li>Genre: {currentPiece.genre}</li>
      </ul>
      <Image
        src={currentPiece.imageSource}
        alt={currentPiece.name}
        width={currentPiece.dimensions.width * 0.3}
        height={currentPiece.dimensions.height * 0.3}
      />
      <Comments artPiecesInfo={artPiecesInfo} currentPiece={currentPiece} />
      <CommentSection
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        handleAddComment={(newComment, currentDate) => {
          handleAddComment(newComment, currentDate, currentPiece.slug);
        }}
      />
    </div>
  );
}

function Comments({ artPiecesInfo, currentPiece }) {
  console.log(artPiecesInfo);
  const currentArt = artPiecesInfo.find(
    (piece) => currentPiece.slug === piece.id
  );
  console.log(currentArt?.comments);
  const comments = currentArt?.comments;

  return (
    <>
      <h3>Comments</h3>
      {comments?.map((comment) => (
        <>
          <Comment key={uid()} comment={comment} />
        </>
      ))}
    </>
  );
}

function Comment({ comment }) {
  return (
    <>
      <p style={{ fontWeight: "bold", fontSize: "10px" }}>
        placeholder for time and date
      </p>
      <p>{comment}</p>
    </>
  );
}
