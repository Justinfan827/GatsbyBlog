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
              Welcome to my blog! My name is Justin Fan and I'm a recent
              graduate from <b>Rice University</b> with a B.A. in Computer
              Science. I'm an aspiring product manager and an entrepreneur at
              heart. I spend my days honing my technical knowledge as a backend
              developer, as well as working on launching a new messaging + event
              planning platform driven by the concept of time-well spent. I love
              talking about the intersection of technology and human behavior,
              so reach out if you ever want to talk about the topics of humane
              design, building community through technology, and mindful tech!
            </p>
            <p>
              I can't help but tinker with different technologies, so I built
              this blog using <b>Gatsby</b>, a static site generator that
              combines the latest and greastest web technologies such as
              Webpack, React, GraphQL.
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
            <p
              css={css`
                padding: 1rem;
              `}
              align="center"
            >
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
