const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'senha',
    database: 'teste',
});

conexao.connect((err) => {
    if (err) throw err;
    console.log("Graças a Deus conectou no SQL!");
})