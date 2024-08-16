import styled from "styled-components";

const StyledComment = styled.p``;

export default function Comment({ comment }) {
  return (
    <>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "10.5px",
          color: "#0f5855",
        }}
      >
        {comment.date}
      </p>
      <StyledComment>{comment.comment}</StyledComment>
    </>
  );
}
