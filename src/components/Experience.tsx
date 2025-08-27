"use client";

import { useState } from 'react';
import { Loader, Sparkles, Briefcase } from 'lucide-react';
import { getExperienceSummaryAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const experienceData = [
  {
    company: "Tech Corp",
    title: "Senior Software Engineer",
    period: "2020 - Present",
    description: "Led the development of a new microservices-based architecture, improving system scalability by 40%. Mentored junior engineers and conducted code reviews to maintain high-quality standards. Spearheaded the integration of a CI/CD pipeline, reducing deployment time by 75%.",
  },
  {
    company: "Innovate LLC",
    title: "Software Engineer",
    period: "2018 - 2020",
    description: "Developed and maintained features for a high-traffic e-commerce application using React and Node.js. Collaborated with product managers and designers to translate requirements into functional user-facing features. Refactored legacy code, resulting in a 20% performance improvement.",
  },
  {
    company: "Data Solutions",
    title: "Junior Developer",
    period: "2016 - 2018",
    description: "Assisted in the development of data processing tools using Python and SQL. Wrote and maintained unit tests to ensure code reliability. Participated in an agile development process, contributing to daily stand-ups and sprint planning.",
  },
];

type SummaryState = {
  loading: boolean;
  summary: string | null;
  error: string | null;
};

export function Experience() {
  const [summaries, setSummaries] = useState<Record<number, SummaryState>>({});
  const { toast } = useToast();

  const handleGenerateSummary = async (index: number) => {
    const experience = experienceData[index];
    setSummaries(prev => ({
      ...prev,
      [index]: { loading: true, summary: null, error: null },
    }));

    const result = await getExperienceSummaryAction({
      companyName: experience.company,
      jobTitle: experience.title,
      datesOfEmployment: experience.period,
      responsibilitiesAndAchievements: experience.description,
    });

    if (result.success) {
      setSummaries(prev => ({
        ...prev,
        [index]: { loading: false, summary: result.summary, error: null },
      }));
    } else {
      const errorMessage = result.error || "An unknown error occurred.";
      setSummaries(prev => ({
        ...prev,
        [index]: { loading: false, summary: null, error: errorMessage },
      }));
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMessage,
      });
    }
  };

  return (
    <section id="experience" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Work Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key contributions at each stage.
            </p>
          </div>
        </div>
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-border"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="relative mb-8 flex w-full items-center justify-between">
              <div className={`order-1 w-5/12 ${index % 2 === 0 ? '' : 'lg:order-3'}`}></div>
              <div className="z-20 flex h-10 w-10 items-center order-2 rounded-full bg-primary shadow-xl">
                 <Briefcase className="mx-auto h-5 w-5 text-primary-foreground" />
              </div>
              <div className={`order-3 w-5/12 rounded-lg bg-background p-4 shadow-md transition-all hover:shadow-xl ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <h4 className="font-semibold">{item.company}</h4>
                <p className="mb-3 text-sm text-muted-foreground">{item.period}</p>
                <p className="text-sm leading-snug tracking-wide text-foreground">
                  {item.description}
                </p>
                <div className="mt-4">
                  <Button
                    size="sm"
                    onClick={() => handleGenerateSummary(index)}
                    disabled={summaries[index]?.loading}
                  >
                    {summaries[index]?.loading ? (
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    Generate AI Summary
                  </Button>
                  {summaries[index] && !summaries[index].loading && (summaries[index].summary || summaries[index].error) && (
                    <div className="mt-4">
                        <Alert variant={summaries[index].error ? 'destructive' : 'default'}>
                            <AlertTitle className="font-semibold">{summaries[index].error ? 'Error' : 'AI Generated Summary'}</AlertTitle>
                            <AlertDescription>
                            {summaries[index].summary || summaries[index].error}
                            </AlertDescription>
                        </Alert>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
