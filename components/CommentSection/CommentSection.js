import { useState, useEffect } from "react";
import { uid } from "uid";

export default function CommentSection({ handleAddComment, artPiecesInfo }) {
  function onAddComment(event, newComment) {
    event.preventDefault();
    handleAddComment(newComment);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = event.target.elements.input.value;
    handleAddComment(newComment);
  }

  return (
    <>
      <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
        <input
          placeholder="Add a comment..."
          type="text"
          name="input"
          style={{ width: "100%", height: "80px", marginTop: "10px" }}
        ></input>
        <button type="submit" style={{ marginTop: "10px" }}>
          Add Comment
        </button>
      </form>
    </>
  );
}
