import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';  
import productRoutes from './routes/productRoutes.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(process.env.URI)

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Product API');
});

app.use('/', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
