import React from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import { reset } from "../styles/reset";
import Header from "./header";
import Footer from "../components/footer";

const Wrapper = styled("div")`
  padding: 10px;
`;

const Layout = (props) => {
  return (
    <Wrapper>
      <Global styles={reset} />
      <Header />
      {props.children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
