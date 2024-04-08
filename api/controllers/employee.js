import { db } from "../db.js";

export const getMember = (_, res) => {
  const q = "SELECT * FROM Employees";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addMember = (req, res) => {
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


export const deleteMember = (req, res) => {
  const q = "DELETE FROM Employees WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário deletado com sucesso.");
  });
};