import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
      .then(response => {
        setBooks(response.data.books);
      })
      .catch(error => {
        setError('Error fetching book data');
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <div id='book-data'>
              <h2>{book.title}</h2>
              <div id='book-imp'>
              <img id='book-img' src={book.imageLinks.thumbnail} alt="Book Cover" />
              <p id='desc'>{book.description}</p>
              </div>
              <p>Authors: {book.authors.join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
