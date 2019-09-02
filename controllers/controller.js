var pool = require("../db/config");

module.exports = {
  user: (user = (req, res) => {
    try {
      pool.connect(async (err, client, done) => {
        const query = `SELECT * FROM city`;
        const result = await client.query(query);
        res.render("addUser", { city: result.rows });
      });
    } catch (err) {
      res.status(400).json({ err });
    }
  }),

  getUser: (getUser = (req, res) => {
    try {
      pool.connect(async (err, client, done) => {
        const query = `SELECT us.id, us.name, us.email, us.contact_number, ct.name as city
         FROM users as us JOIN city as ct ON (us.city = ct.id)`;
        const result = await client.query(query);
        res.render("userList", { user: result.rows });
      });
    } catch (err) {
      res.status(400).json({ err });
    }
  }),

  addUser: (addUser = (req, res) => {
    try {
      pool.connect(async (err, client, done) => {
        const query = `INSERT INTO users(name, email, contact_number, city)
          VALUES ($1,$2,$3,$4)  RETURNING *`;
        const values = [
          req.body.name,
          req.body.email,
          req.body.phone,
          req.body.city
        ];
        const result = await client.query(query, values);
        res.redirect('/getUser');
      });
    } catch (err) {
      res.status(400).json({ err });
    }
  }),

  getUpdateUser: (getUpdateUser = (req, res) => {
    try {
      pool.connect(async (err, client, done) => {
        const queryUser = `SELECT * FROM users WHERE id = $1`
        const queryCity = `SELECT * FROM city`;
        const resultUser = await client.query(queryUser, [req.body.id]);
        const resultCity = await client.query(queryCity);

        res.render("addUser", {user:resultUser.rows, city: resultCity.rows });
      });
    } catch (err) {
      res.status(400).json({ err });
    }
  }),

  updateUser: (updateUser = (req, res) => {
    try {
      pool.connect(async (err, client, done) => {
        const query = `UPDATE users
        SET name=$1, email=$2, contact_number=$3, city=$4 WHERE id = $5`;
        const value = [req.body.name, req.body.email, req.body.phone, req.body.city, req.body.id];
        const result = await client.query(query, value);
        res.redirect('/getUser');
      });
    } catch (err) {
      res.status(400).json({ err });
    }
  }),

  deleteUser: (deleteUser = (req, res) => {
    try {
      pool.connect(async (err, client, done) => {
        const query = `DELETE FROM users WHERE id = $1`;
        const value = [req.body.id];
        const result = await client.query(query, value);
        res.redirect('/getUser');
      });
    } catch (err) {
      res.status(400).json({ err });
    }
  })
};
