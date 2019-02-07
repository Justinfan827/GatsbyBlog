import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import headshot from "../assets/headshot.png";
import favicon from "../assets/favicon.ico";
import right from "../assets/right.png";
import { AboutButton } from "../components/AboutButton";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div
        css={css`
          margin-top: -60px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <img
            css={css`
              height: 400px;
              border-radius: 50%;
              z-index: 200;
            `}
            src={headshot}
            alt="Logo"
          />
          <h1
            css={css`
              border-bottom: 1px solid;
              margin-top: 0px;
            `}
          >
            Welcome!
          </h1>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              width: 90%;
            `}
          >
            <p>
              Welcome to my blog! My name is Justin Fan and I'm a senior @{" "}
              <b>Rice University</b> currently pursuing a B.A. in Computer
              Science. I'm an aspiring product manager and have always loved
              tinkering with different technologies. I also enjoy designing
              things myself so rather than using your typical CMS, I built this
              blog using <b>Gatsby</b>, a static site generator that combines the latest
              web technologies such as Webpack, React, GraphQL.
            </p>
            <div
              css={css`
                display: flex;
                flex-direction: flex-row;
                width: 100%;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding-bottom: 1rem;
              `}
            >
              <AboutButton link="https://www.gatsbyjs.org/" class="contact2">
                <div
                  css={css`
                    display: flex;
                    flex-direction: flex-row;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                  `}
                >
                  <img
                    css={css`
                      height: 30px;
                      margin: 0px;
                      padding-right: 1rem;
                    `}
                    src={favicon}
                    alt="Logo"
                  />
                  Check out Gatsby!
                </div>
              </AboutButton>
            </div>
            <p align="center">
              This is just version 1 but be on the lookout for new changes as I
              continue to iterate and explore Gatsby's rich plugin ecosystem!
              For the best performance, please view this site on a{" "}
              <b>tablet or a laptop using Chrome.</b>
            </p>
          </div>
        </div>

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div class="blogEntry" key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt} </p>
            <a
              class="next"
              css={css`
                background-image: none;
              `}
              href={`/headspace_review`}
            >
              <img
                css={css`
                  height: 50px;
                  border-radius: 50%;
                `}
                src={right}
                alt="Logo"
              />
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
