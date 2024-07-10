import connection from "../config.js";

export const addSpotifyData = (req, res) => {
  const q =
    "INSERT INTO spotifydata(`LAST_FM_API_KEY`, `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`,`SPOTIFY_TOKEN`) VALUES(?)";

  const values = [
    req.body.LAST_FM_API_KEY,
    req.body.SPOTIFY_CLIENT_ID,
    req.body.SPOTIFY_CLIENT_SECRET,
    req.body.SPOTIFY_TOKEN,
  ];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("SpotifyData adicionado com sucesso.");
  });
};

export const getSpotifyData = (_, res) => {
  const q = "SELECT * FROM spotifydata";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const updateSpotifyData = (req, res) => {
  const q =
    "UPDATE spotifydata SET `LAST_FM_API_KEY` = ?, `SPOTIFY_CLIENT_ID` = ?, `SPOTIFY_CLIENT_SECRET`= ?, `SPOTIFY_TOKEN` = ?  WHERE `id` = ?";

  const values = [
    req.body.LAST_FM_API_KEY,
    req.body.SPOTIFY_CLIENT_ID,
    req.body.SPOTIFY_CLIENT_SECRET,
    req.body.SPOTIFY_TOKEN,
    req.params.id,
  ];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("SpotifyData alterado com sucesso.");
  });
};

export const deleteSpotifyData = (req, res) => {
  const q = "DELETE FROM spotifydata WHERE `id` = ?";

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("SpotifyData deletado com sucesso.");
  });
};
