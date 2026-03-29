import styled from "styled-components";
import Link from "next/link";

const Div = styled.div`
  text-align: center;
  font-size: clamp(1.4rem, 1.6vw, 1.8rem);
  margin: clamp(1rem, 1.6vw, 2vw);
  color: rgba(68, 35, 59, 0.8);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(68, 35, 59, 0.8);
  font-weight: 600;
`;

export function AllRightsReserved() {
  const companyName = "Yugen India";
  const currentYear = new Date().getFullYear();

  return (
    <Div>
      &copy; {currentYear} All rights Reserved by{" "}
      <StyledLink href="/">{companyName}</StyledLink>
    </Div>
  );
}
