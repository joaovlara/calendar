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

export const getLimpeza = (_, res) => {
  const q = "SELECT * FROM smar0081_calendar.limpeza";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const saveFridayPairs = (req, res) => {
  const q = "INSERT INTO `smar0081_calendar`.`limpeza` (`data`, `funcionario1_id`, `funcionario2_id`) VALUES (?, ?, ?)";
  const values = [
    req.body.data,
    req.body.funcionario1_id,
    req.body.funcionario2_id
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dados de limpeza adicionados com sucesso.");
  });
};