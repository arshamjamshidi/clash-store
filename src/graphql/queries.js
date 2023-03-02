import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query {
    products {
      id
      image {
        url
      }
      level
      price
      slug
    }
  }
`;

const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    product(where: { slug: $slug }) {
      id
      changeName
      datePublished
      description
      gem
      heroSkinCount
      image {
        url
      }
      level
      name
      price
      supercellId
    }
  }
`;

const GET_COMMENTS = gql`
  query getComments($slug: String!) {
    comments(where: { product: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export { GET_PRODUCTS, GET_PRODUCT, GET_COMMENTS };
