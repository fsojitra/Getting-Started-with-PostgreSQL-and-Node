const pool = require("./config");
pool
  .connect()
  .then(() => {
    createTables();
    console.log("connected");
  })
  .catch(err => console.error("connection error", err.stack));

const createTables = () => {
  const migrateTableAndBasicDatail = `CREATE TABLE IF NOT EXISTS
        users(
          id SERIAL PRIMARY KEY,
          name VARCHAR(128) NOT NULL,
          email VARCHAR(128) NOT NULL,
          contact_number VARCHAR(128) NOT NULL,
          city INT NOT NULL
        ); 
        CREATE TABLE IF NOT EXISTS
        city(
          id SERIAL PRIMARY KEY,
          name VARCHAR(128) NOT NULL
        );
        INSERT INTO city(id, name)VALUES (1, 'city1');
        INSERT INTO city(id, name)VALUES (2, 'city2');
        INSERT INTO city(id, name)VALUES (3, 'city3');
        INSERT INTO city(id, name)VALUES (4, 'city5');`;
  pool
    .query(migrateTableAndBasicDatail)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};
