import { db } from "../db.js";

export const getEmployee = (_, res) => {
  const q = "SELECT * FROM Employees";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addEmployee = (req, res) => {
  const q =
    "INSERT INTO Employees(`id`, `name`) VALUES(?)";

  const values = [
    req.body.id,
    req.body.name,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário criado com sucesso.");
  });
};

export const updateEmployee = (req, res) => {
  const q =
    "UPDATE Employees SET `id` = ?, `name` = ?";

  const values = [
    req.body.id,
    req.body.name,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário atualizado com sucesso.");
  });
};

export const deleteEmployee = (req, res) => {
  const q = "DELETE FROM Employees WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário deletado com sucesso.");
  });
};