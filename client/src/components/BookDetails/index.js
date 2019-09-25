import React from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../../queries/queries'

const BookDetails = ({ selected, data }) => {
    console.log(data)

    return (
        <div className='my-3'>
            <h5>Book Info:</h5>
            {!data.loading && selected !== '' ? (
                <div>
                    <h6>Book Name:</h6>
                    <p>{data.book.name}</p>
                    <h6>Book Genre:</h6>
                    <p>{data.book.genre}</p>
                    <h5>Book Author:</h5>
                    <p>{data.book.author.name}</p>
                    <p>{data.book.author.age} years old</p>
                    <p>
                        Also writeen:{' '}
                        {data.book.author.books.map(book => {
                            return `${book.name}, `
                        })}
                    </p>
                </div>
            ) : (
                'No book selected'
            )}
        </div>
    )
}

export default graphql(getBookQuery, {
    options: props => {
        return {
            variables: {
                id: props.selected
            }
        }
    }
})(BookDetails)
