import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../../queries/queries'
import BookDetails from './../BookDetails/index'

class BookList extends Component {
    state = {
        book: ''
    }
    render() {
        const { books } = this.props.data
        const { book } = this.state
        const { loading } = this.props.data
        return (
            <div>
                <ul id='book-list' className='list-group'>
                    {loading
                        ? 'Loading'
                        : books.map(book => {
                              return (
                                  <li
                                      key={book.id}
                                      onClick={e =>
                                          this.setState({ book: book.id })
                                      }
                                      className='list-group-item'
                                  >
                                      {book.name}
                                  </li>
                              )
                          })}
                </ul>

                <BookDetails selected={book} />
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList)
