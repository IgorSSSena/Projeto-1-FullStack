const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// 1. Carregar variáveis de ambiente
dotenv.config();

// 2. Conectar ao Banco de Dados
connectDB(); // <-- Chamada da função de conexão

const app = express();
const PORT = process.env.PORT || 3001;

// 3. Middlewares essenciais
app.use(express.json());

// 4. Rotas
app.get('/', (req, res) => {
    res.status(200).send({ message: "Servidor Express em execução!" });
});

// 5. Iniciar o servidor (somente após a conexão ser tentada)
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});