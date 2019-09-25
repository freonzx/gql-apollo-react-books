import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../../queries/queries'

class BookList extends Component {
    render() {
        const { books } = this.props.data
        const { loading } = this.props.data
        return (
            <div>
                <ul id='book-list' className='list-group'>
                    {loading
                        ? 'Loading'
                        : books.map(book => {
                              return (
                                  <li key={book.id} className='list-group-item'>
                                      {book.name}
                                  </li>
                              )
                          })}
                </ul>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList)
