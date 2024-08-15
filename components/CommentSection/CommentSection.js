import { useState, useEffect } from "react";
import { uid } from "uid";

export default function CommentSection({ handleAddComment, artPiecesInfo }) {
  function handleSubmit(event) {
    event.preventDefault();
    const date = new Date();
    const currentDate = date.toLocaleString();
    const newComment = event.target.elements.input.value;
    handleAddComment(newComment, currentDate);
    event.target.reset();
    event.target.elements.input.focus();
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
