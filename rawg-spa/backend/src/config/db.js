const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('📦 Conexão com MongoDB estabelecida com sucesso!');
    } catch (error) {
        console.error('❌ Falha ao conectar com o MongoDB:', error.message);
        // Encerrar processo com falha
        process.exit(1);
    }
};

module.exports = connectDB;