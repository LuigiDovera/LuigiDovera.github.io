import express from "express";
import db from "./services/db";
import routes from "./routes";
import app from "./services/server";

app.listen(7500, () => {
  console.log("Rodando");
});
