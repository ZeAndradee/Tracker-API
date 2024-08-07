import connection from "../config.js";

export const addUser = (req, res) => {
  const q =
    "INSERT INTO user(`username`, `email`, `password`, `name`, `userbio`, `userimage`) VALUES(?)";

  const values = [
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.name,
    req.body.userbio,
    req.body.userimage,
  ];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario adicionado com sucesso.");
  });
};

export const getUser = (req, res) => {
  if (req.params.id) {
    q = "SELECT * FROM user WHERE `id` = ?";
    queryParams.push(req.params.id);
  } else {
    q = "SELECT * FROM user";
  }

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE user SET `username` = ?, `email` = ?, `password` = ?, `name` = ?, `userimage` = ?, `userbio` = ?  WHERE `id` = ?";

  const values = [
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.name,
    req.body.userimage,
    req.body.userbio,
    req.params.id,
  ];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuario alterado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM user WHERE `id` = ?";

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario deletado com sucesso.");
  });
};
