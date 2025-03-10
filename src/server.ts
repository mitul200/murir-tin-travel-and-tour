import app from "./app";
import mongoose from "mongoose";
import config from "./config";

// const port = 3000;

// getting-started.js

async function main() {
  try {
    await mongoose.connect(`${config.database_url}`);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main().catch((err) => console.log(err));
