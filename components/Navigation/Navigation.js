import Link from "next/link";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    text-decoration: underline dotted;
    text-decoration-thickness: 3px;
    text-decoration-color: #0f5855;
  }
`;

const StyledAppName = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

const StyledTitle = styled(Link)`
  color: black;
  text-decoration: underline dotted;
  text-decoration-thickness: 5px;
  text-decoration-color: #0f5855;
  padding: 0;
`;

export default function Navigation() {
  return (
    <>
      <StyledAppName>
        <StyledTitle href="/">Art Gallery</StyledTitle>
      </StyledAppName>
      <StyledNavBar>
        <StyledLink href="/spotlight">Spotlight</StyledLink>
        <StyledLink href="/art-pieces">Pieces</StyledLink>
        <StyledLink href="/favorites">Favorites</StyledLink>
      </StyledNavBar>
    </>
  );
}
