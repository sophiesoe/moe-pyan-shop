import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const config = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(config);

const router = express.Router();
router.route("/").get((req, res, next) => {
  res.status(200).json({ message: "Hello from DALL-E AI" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024 x 1024",
      response: "base64_json",
    });
    const image = response.data.data[0].b64_json;

    res.status(201).json({ photo: image });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});
export default router;
