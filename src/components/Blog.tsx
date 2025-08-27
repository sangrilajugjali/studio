import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'A Deep Dive into React Hooks',
    description: 'Explore the power and flexibility of React Hooks, and how they can help you write cleaner, more maintainable code for your functional components.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'react code',
    link: '#',
  },
  {
    title: 'Effortless Deployments with Vercel',
    description: 'Learn how to deploy your Next.js applications seamlessly with Vercel, from connecting your Git repository to configuring custom domains.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'cloud deployment',
    link: '#',
  },
  {
    title: 'My Top 5 VS Code Extensions for 2024',
    description: 'Discover the Visual Studio Code extensions that have transformed my development workflow, boosting productivity and code quality.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'code editor',
    link: '#',
  },
];

export function Blog() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              From My Blog
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sharing my thoughts and discoveries in the world of software development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
               <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                  data-ai-hint={post.aiHint}
                />
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <CardTitle className="mb-2">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline">
                  <Link href={post.link}>Read More <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
