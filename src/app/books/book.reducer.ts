import { createReducer, on } from '@ngrx/store';
import {
  AddBook,
  RemoveBook,
  AddBookFailure,
  AddBookSuccess,
} from './book.actions';
import { Book } from '../model/book';

export const initialstate: Book[] = [];

export const BookReducer = createReducer(
  initialstate,
  on(AddBook, (state, { id, title, author }) => {
    return state;
  }),
  on(AddBookSuccess, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(AddBookFailure, (state, { error }) => {
    console.error(error);
    return state;
  }),
  on(RemoveBook, (state, { bookId }) =>
    state.filter((book) => book.id !== bookId)
  )
);
