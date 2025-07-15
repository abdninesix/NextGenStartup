import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Helper functions
const readJSON = (filename) => {
  const filePath = path.join(__dirname, filename);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const writeJSON = (filename, data) => {
  const filePath = path.join(__dirname, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// ====== Book Store Routes ======
app.get('/books', (req, res) => {
  const books = readJSON('books.json');
  res.json(books);
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: 'Title and author are required' });

  const books = readJSON('books.json');
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    date: new Date().toISOString()
  };
  books.push(newBook);
  writeJSON('books.json', books);
  res.status(201).json(newBook);
});

app.get('/books/:id', (req, res) => {
  const books = readJSON('books.json');
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

app.delete('/books/:id', (req, res) => {
  const books = readJSON('books.json');
  const updatedBooks = books.filter(b => b.id !== parseInt(req.params.id));
  if (books.length === updatedBooks.length) return res.status(404).json({ error: 'Book not found' });

  writeJSON('books.json', updatedBooks);
  res.json({ success: true, message: 'Book deleted' });
});

// ====== Feedback Routes ======
app.get('/submit-feedback', (req, res) => {
    const feedback = readJSON('feedback.json');
    res.json(feedback);
  });

app.post('/submit-feedback', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  const feedbacks = readJSON('feedback.json');
  feedbacks.push({ name, email, message, date: new Date().toISOString() });

  writeJSON('feedback.json', feedbacks);
  res.json({ success: true, message: 'Feedback saved!' });
});

// ====== Start Server ======
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
