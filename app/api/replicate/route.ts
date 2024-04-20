import { NextResponse } from "next/server";
import Replicate, { Model } from "replicate";

export async function POST(req: Request, res: Response) {
  try {
    const {
      prompt,
      collection,
      height,
      width,
    }: { prompt: string; collection: Model; width: number; height: number } =
      await req.json();
    const replicate = new Replicate({
      // get your token from https://replicate.com/account
      auth: process.env.REPLICATE_API_TOKEN, // defaults to process.env.REPLICATE_API_TOKEN
    });
    const output = await replicate.run(
      `${collection.owner}/${collection.name}:${collection.latest_version?.id}`,
      { input: { prompt, width, height } }
    );

    return NextResponse.json({ message: output }, { status: 201 });
  } catch (error) {
    console.log("ERROR FROM POST:REPLICATE");
    console.error(error);
  }
}
