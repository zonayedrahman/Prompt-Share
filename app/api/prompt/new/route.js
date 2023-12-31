import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
    const {userId, prompt, tag} = await req.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();

        return new Response(JSON.stringify(prompt), {status: 201})

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Unable to connect to database"});
    }
}