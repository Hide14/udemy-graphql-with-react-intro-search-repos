import ggl from 'graphql-tag'


export const SEARCH_REPOSITORIES = ggl`
  query searchRepositries($first:Int,$after:String,$before:String,$last:Int,$query:String!){
      search(first:$first,before:$before,after:$after,last:$last,query:$query,type:REPOSITORY){
        pageInfo{
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        repositoryCount
        edges{
          node{
            ... on Repository{
              id
              name
              url
              stargazers{
                totalCount
              }
              viewerHasStarred
            }
          }
          cursor
        }
      }
    }
`
export const ME = ggl`
	query me {
		user(login:"iteachonudemy"){
			name
			avatarUrl
		}
	}
`