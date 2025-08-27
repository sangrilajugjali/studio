'use server';

/**
 * @fileOverview Experience summary generator.
 *
 * - generateExperienceSummary - A function that generates a professional summary from the data in each experience entry.
 * - GenerateExperienceSummaryInput - The input type for the generateExperienceSummary function.
 * - GenerateExperienceSummaryOutput - The return type for the generateExperienceSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExperienceSummaryInputSchema = z.object({
  companyName: z.string().describe('The name of the company.'),
  jobTitle: z.string().describe('The job title.'),
  datesOfEmployment: z.string().describe('The dates of employment.'),
  responsibilitiesAndAchievements: z
    .string()
    .describe('A description of responsibilities and achievements.'),
});
export type GenerateExperienceSummaryInput = z.infer<
  typeof GenerateExperienceSummaryInputSchema
>;

const GenerateExperienceSummaryOutputSchema = z.object({
  summary: z.string().describe('A professional summary of the experience.'),
});
export type GenerateExperienceSummaryOutput = z.infer<
  typeof GenerateExperienceSummaryOutputSchema
>;

export async function generateExperienceSummary(
  input: GenerateExperienceSummaryInput
): Promise<GenerateExperienceSummaryOutput> {
  return generateExperienceSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateExperienceSummaryPrompt',
  input: {schema: GenerateExperienceSummaryInputSchema},
  output: {schema: GenerateExperienceSummaryOutputSchema},
  prompt: `You are a professional resume writer. Generate a concise and impactful summary of the following experience entry.

Company: {{{companyName}}}
Title: {{{jobTitle}}}
Dates: {{{datesOfEmployment}}}
Responsibilities and Achievements: {{{responsibilitiesAndAchievements}}}

Summary:`,}
);

const generateExperienceSummaryFlow = ai.defineFlow(
  {
    name: 'generateExperienceSummaryFlow',
    inputSchema: GenerateExperienceSummaryInputSchema,
    outputSchema: GenerateExperienceSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
