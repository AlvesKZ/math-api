import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001;

import app from './app';

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});