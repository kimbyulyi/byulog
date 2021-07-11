import styled from "@emotion/styled";

export const SHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }

  a {
    align-items: center;
  }
`;

export const Nav = styled.ul`
  display: flex;

  li:first-child {
    margin-right: 5px;
  }
`;
