import OpenAI from "openai";
import { buildSystemPrompt, buildUserPrompt, buildDocsSystemPrompt } from "./prompt"
import type { DietPlanRequest } from "./types";

export async function generateDietPlan(input: DietPlanRequest){

    console.log(input)

    return input;
}