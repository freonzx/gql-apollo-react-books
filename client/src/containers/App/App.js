import React from 'react'
import BookList from '../../components/BookList'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './App.css'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

function App() {
    return (
        <ApolloProvider client={client}>
            <div className='App container'>
                <h1>Book List</h1>
                <div>
                    <BookList />
                </div>
            </div>
        </ApolloProvider>
    )
}

export default App
