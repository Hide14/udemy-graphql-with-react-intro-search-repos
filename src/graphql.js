import ggl from 'graphql-tag'

export const ME = ggl`
	query me {
		user(login:"iteachonudemy"){
			name
			avatarUrl
		}
	}
`