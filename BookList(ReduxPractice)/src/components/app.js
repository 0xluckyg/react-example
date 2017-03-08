import React, { Component } from 'react';
import BookList from '../containers/bookList';
import BookDetail from '../containers/bookDetail';

class App extends Component {
  render() {
    return (
        <div>
            <BookDetail/>
            <BookList/>
        </div>
    );
  }
}

export default App;
