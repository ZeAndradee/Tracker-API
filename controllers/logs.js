import connection from "../config.js";

export const addLog = (req, res) => {
  const q =
    "INSERT INTO logs(`track_url`, `username`, `date`, `rating`, `comment`) VALUES(?)";

  const values = [
    req.body.track_url,
    req.body.username,
    req.body.date,
    req.body.rating,
    req.body.comment,
  ];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Log adicionado com sucesso.");
  });
};

export const getLog = (req, res) => {
  let q;
  let queryParams = [];

  if (req.params.trackurl) {
    q = "SELECT * FROM logs WHERE `track_url` = ?";
    queryParams.push(req.params.trackurl);
  } else {
    q = "SELECT * FROM logs";
  }

  connection.query(q, queryParams, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const updateLog = (req, res) => {
  const q =
    "UPDATE logs SET `track_url` = ?, `username` = ?, `date` = ?, `rating` = ?, `comment` = ? WHERE `id` = ?";

  const values = [
    req.body.track_url,
    req.body.username,
    req.body.date,
    req.body.rating,
    req.body.comment,
    req.params.id,
  ];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Log alterado com sucesso.");
  });
};

export const deleteLog = (req, res) => {
  const q = "DELETE FROM logs WHERE `id` = ?";

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Log deletado com sucesso.");
  });
};
