import {combineReducers} from 'redux';
import BooksReducer from './reducerBooks';
import ActiveBookReducer from './reducerActiveBooks'

const rootReducer = combineReducers({
    //Adds BooksReducer to global key called books
    books: BooksReducer,
    activeBook: ActiveBookReducer
});

export default rootReducer;
