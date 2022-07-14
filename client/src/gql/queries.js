import { gql } from '@apollo/client'

export const ALL_LINKS_QUERY = gql`
query LinksQuery(
    $take: Int
    $skip: Int
    $orderBy: LinkOrderByInput
  ) {
    allLinks(take: $take, skip: $skip, orderBy: $orderBy) {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
      count
    }
  }
`

export const FEED_SEARCH_QUERY = gql`
query SearchFilter(
    $filter: String!
) {
    allLinks(filter: $filter) {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
}
`

export const SINGLE_LINK_QUERY = gql`
query SingleLink(
    $id: Int!
) {
    findLink(id: $id) {
        id
        url
        description
    }
}
`