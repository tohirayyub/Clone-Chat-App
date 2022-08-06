const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const postgres = require("pg");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { Client } = postgres;

app.post("/message-save", async (req, res) => {
  const clientmessage = new Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "981013200",
    database: "postgres",
  });
  await clientmessage.connect();
  await clientmessage.query(
    "INSERT INTO message(text, sender, receiver) VALUES ($1,$2,$3)",
    [req.body.text, req.body.sender, req.body.receiver]
  );
  await clientmessage.end();

  res.send("Send message to save in /message-list");
});

app.get("/message-list", async (req, res) => {
  const clientmessage = new Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "981013200",
    database: "postgres",
  });
  await clientmessage.connect();
  const resultmessage = await clientmessage.query("SELECT * FROM message");
  await clientmessage.end();
  res.send(resultmessage.rows);
});

///////////////////////////////////////////////////////////////////////////////Contact


app.get("/contacts-save", async (req, res) => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "981013200",
    database: "postgres",
  });
  await client.connect();
  await client.query(
    `INSERT INTO contact(name, surname, phone) VALUES ($1, $2, $3)`,
    [req.query.name, req.query.surname, req.query.phone]
  );
  await client.end();

  res.send("Add Contact to save");
});

app.get("/contacts-list", async (req, res) => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "981013200",
    database: "postgres",
  });
  await client.connect();
  const result = await client.query('SELECT * FROM "contact"');
  await client.end();
  res.send(result.rows);
});


const port = 3001;
app.listen(port, () => {
  console.log(`EXpres rfmorinforinf ${port}`);
});
