import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

interface User {
  username: string;
  password: string;
}

// for now this stores data of users and their passwords.
const users: User[] = [
  { username: 'admin', password: 'password' },
  { username: 'user', password: '123456' }
];

app.use(bodyParser.json());

app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Find the user with the given username
  const user = users.find(user => user.username === username);

  if (user && user.password === password) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
