import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDB();
    const result = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await result.save();
    return new Response(JSON.stringify(result), { statusCode: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      statusCode: 500,
    });
  }
};
