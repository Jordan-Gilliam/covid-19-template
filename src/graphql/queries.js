import gql from 'graphql-tag';

export const GET_US_CURRENT = gql`
  query getUSCurrent {
    country(name: "US") {
      name
      mostRecent {
        date(format: "yyyy-MM-dd")
        confirmed
        deaths
        recovered
      }
    }
  }
`;
