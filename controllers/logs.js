import connection from "../config.js";

export const addLog = (req, res) => {
  const q =
    "INSERT INTO logs(`track_id`, `username`, `date`, `rating`, `comment`,`selected_date`) VALUES(?)";

  const values = [
    req.body.track_id,
    req.body.username,
    req.body.date,
    req.body.rating,
    req.body.comment,
    req.body.selected_date,
  ];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Log adicionado com sucesso.");
  });
};

export const addLogUser = (req, res) => {
  const q =
    "INSERT INTO usertracks( `username`, `trackname`, `trackid`, `rating`,`listened`,`liked`) VALUES(?)";

  const values = [
    req.body.username,
    req.body.trackname,
    req.body.trackid,
    req.body.rating,
    req.body.listened,
    req.body.liked,
  ];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Log user adicionado com sucesso.");
  });
};

export const getLog = (req, res) => {
  let q;
  let queryParams = [];

  if (req.params.username && req.params.trackid) {
    q = "SELECT * FROM usertracks WHERE `username` = ? AND `trackid` = ?";
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
    "UPDATE usertracks SET `track_id` = ?, `username` = ?, `date` = ?, `rating` = ?, `comment` = ?,`selected_date` = ? WHERE `id` = ?";

  const values = [
    req.body.track_id,
    req.body.username,
    req.body.date,
    req.body.rating,
    req.body.comment,
    req.body.selected_date,
    req.params.id,
  ];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Log alterado com sucesso.");
  });
};

export const updateLogUser = (req, res) => {
  const q =
    "UPDATE logs SET `username` = ?, `trackname` = ?, `trackid` = ?, `rating` = ?, `listened` = ?,`liked` = ? WHERE `id` = ?";

  const values = [
    req.body.username,
    req.body.trackname,
    req.body.trackid,
    req.body.rating,
    req.body.listened,
    req.body.liked,
    req.params.id,
  ];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Log user alterado com sucesso.");
  });
};

export const deleteLog = (req, res) => {
  const q = "DELETE FROM logs WHERE `id` = ?";

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Log deletado com sucesso.");
  });
};

export const deleteLogUser = (req, res) => {
  const q = "DELETE FROM usertracks WHERE `id` = ?";

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Log User deletado com sucesso.");
  });
};
