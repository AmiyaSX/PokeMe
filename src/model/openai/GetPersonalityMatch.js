import OpenAI from "openai";

export const callChatGPT = async (userAnswers) => {
  let requestPrompt =
    "Questions are answered using a Likert scale, where 7 is agree, 1 is disagree, and 4 is neutral. These questions are designed to test the responder’s personality. Please match the responder’s personality to a Pokemon based on the answer provided below. Reply in this JSON structure: {“pokemon”: …, “reason”: …}. Here is the questions asked and the user's response: ";

  let gptPrompt = requestPrompt + "...";

  console.log(gptPrompt);

  let openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  let response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: gptPrompt }],
  });

  console.log("gpt response: ", response.choices[0].message);
};
