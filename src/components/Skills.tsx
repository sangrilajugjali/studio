import { Code, Database, Dna, GitBranch, Server } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillsData = [
  {
    category: 'Languages',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'JavaScript / TypeScript', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'HTML / CSS', level: 98 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Node.js / Express', level: 90 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Flask / Django', level: 80 },
    ],
  },
  {
    category: 'Databases & Tools',
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'PostgreSQL / MySQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Docker / Kubernetes', level: 75 },
      { name: 'Git & GitHub', level: 95 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technical Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A snapshot of the technologies I work with. I'm always learning and expanding my toolbox.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category) => (
            <Card key={category.category} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <div className="grid gap-1">
                  <CardTitle>{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
