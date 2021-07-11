import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { SHeader, Nav, Logo } from "./styled";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <SHeader>
      <Logo>
        <img src="/static/icon/bulldog.svg" />
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </Logo>
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </Nav>
    </SHeader>
  );
};

export default Header;
