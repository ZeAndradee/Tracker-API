import connection from "../config.js";

export const addSpotifyData = (req, res) => {
  const q =
    "INSERT INTO SpotifyData(`VITE_LAST_FM_API_KEY`, `VITE_SPOTIFY_CLIENT_ID`, `VITE_SPOTIFY_CLIENT_ID`, `name`, `userbio`, `userimage`) VALUES(?)";

  const values = [
    req.body.VITE_LAST_FM_API_KEY,
    req.body.VITE_SPOTIFY_CLIENT_ID,
    req.body.VITE_SPOTIFY_CLIENT_ID,
  ];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("SpotifyData adicionado com sucesso.");
  });
};

export const getSpotifyData = (_, res) => {
  const q = "SELECT * FROM SpotifyData";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const updateSpotifyData = (req, res) => {
  const q =
    "UPDATE SpotifyData SET `VITE_LAST_FM_API_KEY` = ?, `VITE_SPOTIFY_CLIENT_ID` = ?, `password` = ?, `name` = ?, `userimage` = ?, `userbio` = ?  WHERE `id` = ?";

  const values = [
    req.body.VITE_LAST_FM_API_KEY,
    req.body.VITE_SPOTIFY_CLIENT_ID,
    req.body.VITE_SPOTIFY_CLIENT_ID,
  ];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("SpotifyData alterado com sucesso.");
  });
};

export const deleteSpotifyData = (req, res) => {
  const q = "DELETE FROM SpotifyData WHERE `id` = ?";

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("SpotifyData deletado com sucesso.");
  });
};
