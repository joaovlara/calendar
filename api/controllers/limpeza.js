import { db } from "../db.js";

export const saveFridayPairs = (req, res) => {
    const q = "INSERT INTO `smar0081_calendar`.`limpeza`(`data`)(`nome`) VALUES (?)";
    const values = [
      req.body.data,
      req.body.nome,
    ];
  
    db.query(q, values, (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Duplas salvas com sucesso.");
    });
  };
  