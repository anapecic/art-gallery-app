import { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

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
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.text}</p>
            <small>{comment.timestamp}</small>
          </li>
        ))}
      </ul>

      <textarea
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}
