const express = require('express');
const app = express();
app.use(express.json());


// Rota simples 
app.get('/',(req, res) => {
    res.send('Servidor rodando!');
});

app.listen(3000, () => {
    console.log('Servidor iniciando na porta 3000');
});


// ONDE VOU CRIAR A FUNÇÃO QUE ME PERMITE QUE EU CONSIGA ADICIOANR INFO NO MEU BANCO DE DADOS
app.post('/usuarios', (req, res) => {
    const {nome, email} = req.body;
    conexao.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email], (err) => {
        if (err) throw err;
        res.send('Usuário foi adicionado');
    });
});

//  UM READ, OU SEJA UM TIPO DE LISTAR, ONDE VOU PODER VER AS INFOS QUE FORAM COLOCADS, REMOVIDAS OU ALTERADAS DO BANCO DE DADOS
app.get('/usuarios', (req, res) => {
    const {nome, email} = req.body;
    conexao.query('SELECT * FROM usuarios', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/inserir', (req, res) => {
    const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
    const valores = [ 'Giovanna', "gi.vitalino@gmail.com"];

    conexao.query(sql, valores, (err, res) => {
        if (err) throw err;
        console.log('Usuário inserido com sucesso')
    });
});