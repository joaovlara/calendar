import { db } from "../db.js";

export const getFuncionario = (_, res) => {
  const q = "SELECT * FROM smar0081_calendar.funcionarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addFuncionario = (req, res) => {
  const q = "INSERT INTO `smar0081_calendar`.`funcionarios` (`nome`) VALUES (?)";
  const values = [
    req.body.nome,
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário criado com sucesso.");
  });
};

export const deleteFuncionario = (req, res) => {
  const q = "DELETE FROM `smar0081_calendar`.`funcionarios` WHERE (`id` = ?)";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário deletado com sucesso.");
  });
};

//Duplas da limpeza

export const getFridayPairs = (_, res) => {
  const q = "SELECT * FROM smar0081_calendar.limpeza";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const saveFridayPairs = (req, res) => {
  const { data, funcionario1, funcionario2 } = req.body;

  if (
    !data ||
    !funcionario1 ||
    !funcionario2
  ) {
    return res.status(400).json({ error: 'Dados incompletos para inserção na limpeza.' });
  }

  const q = "INSERT INTO `smar0081_calendar`.`limpeza` (`data`, `funcionario1`, `funcionario2`) VALUES (?, ?, ?)";
  const values = [
      req.body.data,
      req.body.funcionario1,
      req.body.funcionario2
    ];

  db.query(q, values, (err) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ error: 'Erro ao salvar os pares de sexta-feira.' });
    }

    console.log('Dados inseridos com sucesso!');
    return res.status(200).json("Dados de limpeza adicionados com sucesso.");
  });
};
