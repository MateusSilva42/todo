import express from 'express';
import cors from 'cors';
import routes from './src/routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Seja bem vindo à API TODO ;)');
});

app.listen(3333, () => {
    console.log('Servidor rodando: http://localhost:3333');
    }
);

app.use('/api', routes.router);


