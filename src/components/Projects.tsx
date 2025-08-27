import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process, built with a modern MERN stack.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'e-commerce website',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Next.js'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool that allows users to create projects, assign tasks, and track progress with an intuitive drag-and-drop interface.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'task manager',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Personal Portfolio & Blog',
    description: 'The very site you are on now! A personal space to showcase my work and share my thoughts on technology and development.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'portfolio website',
    tags: ['Next.js', 'GenAI', 'Shadcn/UI', 'Vercel'],
    liveLink: '#',
    codeLink: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <div className="flex flex-1 flex-col p-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="flex-grow">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
              <CardFooter className="p-6 pt-0">
                <div className="flex w-full items-center gap-4">
                  <Button asChild className="w-full">
                    <Link href={project.liveLink}>Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.codeLink}>View Code</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
