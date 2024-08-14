import { useState, useEffect } from "react";

export default function CommentSection({ artPieceId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${artPieceId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [artPieceId]);

  useEffect(() => {
    localStorage.setItem(`comments-${artPieceId}`, JSON.stringify(comments));
  }, [comments, artPieceId]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const commentToAdd = {
      text: newComment,
      timestamp: new Date().toLocaleString(),
    };

    setComments([...comments, commentToAdd]);
    setNewComment("");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <p>{comment.text}</p>
              <small>{comment.timestamp}</small>
            </li>
          ))}
        </ul>
      )}
      <textarea
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        style={{ width: "100%", height: "80px", marginTop: "10px" }}
      ></textarea>
      <button onClick={handleAddComment} style={{ marginTop: "10px" }}>
        Add Comment
      </button>
    </div>
  );
}
