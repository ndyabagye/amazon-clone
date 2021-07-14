const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { res } = require("express");
const stripe = require("stripe")(
    "sk_test_51JCVLuIYTMKq5viBbSxzBT99yVtq4LR0uIn55N9rx0cXOZpJLqekqhNCEzky8tXemuzKQT7NBqXWAbkPAcUF5US3001IvYag8g",
);

// api

// app config
const app = express();

// middleware
app.use(cors({origin: true}));
app.use(express.json());

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  // console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-66c2d/us-central1/api
