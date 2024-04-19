"use server";

import Replicate from "replicate";

const replicate = new Replicate({
  // get your token from https://replicate.com/account
  auth: "r8_7JV3FqUMfzzjcY91HqurFkzczFbH0Rp2QueyZ", // defaults to process.env.REPLICATE_API_TOKEN
});

export async function getListCollections() {
  return replicate.collections.get("text-to-image");
}
