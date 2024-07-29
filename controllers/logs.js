import connection from "../config.js";

export const addLog = (req, res) => {
  const q =
    "INSERT INTO logs(`track_id`, `username`, `date`, `rating`, `comment`,`selected_date`,`liked`, `listened`) VALUES(?)";

  const values = [
    req.body.track_id,
    req.body.username,
    req.body.date,
    req.body.rating,
    req.body.comment,
    req.body.selected_date,
    req.body.liked,
    req.body.listened,
  ];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Log adicionado com sucesso.");
  });
};

export const getLog = (req, res) => {
  let q;
  let queryParams = [];
  //change
  if (req.params.username && req.params.trackid) {
    q = "SELECT * FROM logs WHERE `username` = ? AND `track_id` = ?";
    queryParams.push(req.params.username, req.params.trackid);
  } else if (req.params.trackid) {
    q = "SELECT * FROM logs WHERE `track_id` = ?";
    queryParams.push(req.params.trackid);
  } else if (req.params.username) {
    q = "SELECT * FROM logs WHERE `username` = ?";
    queryParams.push(req.params.username);
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
    "UPDATE logs SET `track_id` = ?, `username` = ?, `date` = ?, `rating` = ?, `comment` = ?,`selected_date` = ?,`liked` = ?, `listened` = ? WHERE `id` = ?";

  const values = [
    req.body.track_id,
    req.body.username,
    req.body.date,
    req.body.rating,
    req.body.comment,
    req.body.selected_date,
    req.body.liked,
    req.body.listened,
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
