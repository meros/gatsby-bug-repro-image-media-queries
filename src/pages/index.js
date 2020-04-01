import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Img
    fluid={[
      {
        ...data.phone.childImageSharp.fluid,
        media: `(max-width: 480px)`,
      },
      {
        ...data.tablet.childImageSharp.fluid,
        media: `(max-width: 768px)`,
      },
      {
        ...data.computer.childImageSharp.fluid,
        media: `(min-width: 769px)`,
      },
    ]}
  />
)

export default IndexPage

export const query = graphql`
  query {
    computer: file(relativePath: { eq: "computer.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tablet: file(relativePath: { eq: "tablet.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    phone: file(relativePath: { eq: "phone.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
