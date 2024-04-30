import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'br404.hostgator.com.br',
  user: 'smar0081_calendar_admin',
  password: 'V._PfIFBgjz&R95Q',
  database: 'smar0081_calendar'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão realizada com o banco de dados');
});

//BANCO DE DADOS LOCAL

// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "smar0081_calendar"
// })
