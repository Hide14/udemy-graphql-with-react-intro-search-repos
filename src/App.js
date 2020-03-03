import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ggl from 'graphql-tag'
import { Query } from 'react-apollo'
import client from './client'

const ME = ggl`
	query me {
		user(login:"iteachonudemy"){
			name
			avatarUrl
		}
	}
`
class App extends React.Component  {
	render() {
  return(
	  <ApolloProvider client={client}>
	  	<div>Hi,GraphQL</div>
	  	<Query query={ME}>
	  		{
				({ loading, error,data}) =>{
					if (loading) return 'Loading..'
					if (error) return `Error! ${error.message}`
					return <div>{data.user.name}</div>
				}
			}
	  	</Query>
	  </ApolloProvider>
  )
}
}

export default App
