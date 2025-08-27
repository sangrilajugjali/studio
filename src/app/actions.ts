
"use server";

import { generateExperienceSummary } from "@/ai/flows/generate-experience-summary";
import type { GenerateExperienceSummaryInput } from "@/ai/flows/generate-experience-summary";

export async function getExperienceSummaryAction(
  input: GenerateExperienceSummaryInput
) {
  try {
    const result = await generateExperienceSummary(input);
    return { success: true, summary: result.summary };
  } catch (error) {
    console.error("AI summary generation failed:", error);
    // In a real app, you might want to log this error to a monitoring service.
    return { success: false, error: "Failed to generate summary due to a server error." };
  }
}
