import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const FILTER_CHARACTER_ID = gql`
  query getCharacter($idcharacter: ID!) {
    character(id: $idcharacter) {
      id
      image
      name
      species
      status
      type
      gender
      created
    }
  }
`;
