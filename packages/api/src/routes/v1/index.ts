import express from "express";
import Authentication from "./auth/auth";

export default (app: express.Application) => {
    app.use("/", Authentication);
};
