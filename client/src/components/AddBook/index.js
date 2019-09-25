import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import {
    getAuthorsQuery,
    addBookMutation,
    getBooksQuery
} from '../../queries/queries'

const displayAuthors = data => {
    if (data.loading) {
        return <option disabled>Loading Authors</option>
    } else {
        return data.authors.map(author => {
            return (
                <option key={author.id} value={author.id}>
                    {author.name}
                </option>
            )
        })
    }
}

const AddBook = props => {
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthor] = useState('')

    return (
        <div className='form-row mt-4'>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    props.addBookMutation({
                        variables: { name, genre, authorId },
                        refetchQueries: [{ query: getBooksQuery }]
                    })
                }}
            >
                <h2>Add Book</h2>
                <div className='form-group'>
                    <label htmlFor='formGroupExampleInput'>Book Name</label>
                    <input
                        onChange={e => setName(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Name of the book'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='formGroupExampleInput2'>Book Genre</label>
                    <input
                        onChange={e => setGenre(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ex: Fantasy, Adventure'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='inputState'>Author</label>
                    <select
                        className='form-control'
                        onChange={e => setAuthor(e.target.value)}
                    >
                        {displayAuthors(props.getAuthorsQuery)}
                    </select>
                </div>
                <button className='btn btn-primary'>Add Book</button>
            </form>
        </div>
    )
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
    graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook)
