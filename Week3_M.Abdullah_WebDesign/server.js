const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

const readBooks = () => {
  const data = fs.readFileSync('books.json');
  return JSON.parse(data);
};

const writeBooks = (books) => {
  fs.writeFileSync('books.json', JSON.stringify(books, null, 2));
};

// GET all books
app.get('/books', (req, res) => {
  const books = readBooks();
  res.json(books);
});

// POST a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: 'Title and author are required' });

  const books = readBooks();
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author
  };

  books.push(newBook);
  writeBooks(books);
  res.status(201).json(newBook);
});

// GET a book by ID
app.get('/books/:id', (req, res) => {
  const books = readBooks();
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
  const books = readBooks();
  const updatedBooks = books.filter(b => b.id !== parseInt(req.params.id));
  if (books.length === updatedBooks.length) return res.status(404).json({ error: 'Book not found' });

  writeBooks(updatedBooks);
  res.json({ success: true, message: 'Book deleted' });
});

app.listen(PORT, () => console.log(`Bookstore API running on http://localhost:${PORT}`));
