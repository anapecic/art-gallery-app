import styled from "styled-components";

const CommentInput = styled.input`
  background: #e8f4f3;
  width: 50vw;
  padding: 10px;
  border-radius: 5px;
  border: 1.5px solid #0f5855;
`;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: center;
`;

const StyledButton = styled.button`
  margin-top: 15px;
  background: #0f5855;
  color: #e8f4f3;
  border-radius: 5px;
  border: 1.5px solid #0f5855;
  padding: 5px;
  width: 50%;
`;

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
      <FlexForm style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
        <CommentInput
          placeholder="Add a comment..."
          type="text"
          name="input"
        ></CommentInput>
        <StyledButton type="submit">Add Comment</StyledButton>
      </FlexForm>
    </>
  );
}
