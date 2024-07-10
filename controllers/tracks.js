import connection from "../config.js";

export const addTrack = (req, res) => {
  const q =
    "INSERT INTO tracks(`track_url`, `rating`, `total_reviews`) VALUES(?)";

  const values = [req.body.track_url, req.body.rating, req.body.total_reviews];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Track adicionado com sucesso.");
  });
};

export const getTrack = (_, res) => {
  const q = "SELECT * FROM tracks";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const updateTrack = (req, res) => {
  const q =
    "UPDATE tracks SET `track_url` = ?, `rating` = ?, `total_reviews` = ? WHERE `id` = ?";

  const values = [
    req.body.track_url,
    req.body.rating,
    req.body.total_reviews,
    req.params.id,
  ];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Track alterado com sucesso.");
  });
};

export const deleteTrack = (req, res) => {
  const q = "DELETE FROM tracks WHERE `id` = ?";

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Track deletado com sucesso.");
  });
};
