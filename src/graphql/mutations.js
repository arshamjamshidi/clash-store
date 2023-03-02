import { gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String!
    $level: String!
    $gem: String!
    $heroSkinCount: String!
    $changeName: String!
    $supercellId: String!
    $price: String!
    $slug: String!
    $description: String!
    $fileName: String!
    $handle: String!
  ) {
    createProduct(
      data: {
        name: $name
        level: $level
        gem: $gem
        heroSkinCount: $heroSkinCount
        changeName: $changeName
        supercellId: $supercellId
        price: $price
        slug: $slug
        description: $description
        image: { create: { fileName: $fileName, handle: $handle } }
      }
    ) {
      id
    }
  }
`;

const CREATE_COMMENT = gql`
  mutation sendComment(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        product: { connect: { slug: $slug } }
      }
    ) {
      id
      name
    }
  }
`;

export { CREATE_PRODUCT, CREATE_COMMENT };
