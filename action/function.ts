"use server";

import Replicate from "replicate";

const replicate = new Replicate({
  // get your token from https://replicate.com/account
  auth: process.env.REPLICATE_API_TOKEN, // defaults to process.env.REPLICATE_API_TOKEN
});

export async function getListCollections() {
  return replicate.collections.get("text-to-image");
}
