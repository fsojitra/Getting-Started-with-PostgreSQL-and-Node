# Getting Started with PostgreSQL and Node
> An PostgreSQL + Node/Express + EJS example you can add, update and delete user data.

## Prerequisites
Below listed things you need to have in your system to run this code

```
- Node.js & NPM
- PostgreSQL
```

## To Setup
* Clone or download this repository

* OK, so i am assuming that you already have prerequisites mentioned above and also know how to use psql from command line :thinking:, if you are new and don't know much about PostgreSQL than follow link below. If you don't like command line that much than you can totally use pgAdmin.

    [PSQL - Commands](https://www.postgresqltutorial.com/psql-commands/)
    [To download and install PostgreSQL and pgAdmin](https://www.guru99.com/download-install-postgresql.html)

* Creting Database

    ```
    CREATE DATABASE userdb;
    ```

* Now that db is created follw below steps to setup

    1. `cd PostgreSQL-and-Node`
    2. `npm install`
    3. `node db/db_setup.js` (this will setup basic table and add some dummy data to start with)
    4. `npm start`

![And, it's Done](https://media.giphy.com/media/3oKIPf3C7HqqYBVcCk/giphy.gif)
### And it's running on
http://localhost:3000

:sparkles: