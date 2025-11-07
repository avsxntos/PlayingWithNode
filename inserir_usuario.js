const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'senha',
    database:'teste',
});

const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
const valores = [ 'Arthur', 'thur.vitalino@gmail.com'];

conexao.query(sql, valores, (err, res) => {
    if (err) throw err;
    console.log('Usuário inserido com sucesso');
});