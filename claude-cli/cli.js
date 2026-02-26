import Anthropic from "@anthropic-ai/sdk";
import readline from "readline";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function chat() {
  rl.question("Te: ", async (input) => {
    const res = await anthropic.messages.create({
      model: "claude-3-5-sonnet-latest",
      max_tokens: 1000,
      messages: [{ role: "user", content: input }],
    });

    console.log("\nClaude:", res.content[0].text, "\n");
    chat();
  });
}

chat();