import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return <h1 title={`${title} | ${data.site.siteMetadata.title}`} />;
};
export default Head;
