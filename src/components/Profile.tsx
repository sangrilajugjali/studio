import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Profile() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <Avatar className="h-48 w-48 md:h-64 md:w-64">
              <AvatarImage src="https://picsum.photos/300/300" data-ai-hint="professional headshot" alt="Jane Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Jane Doe
              </h1>
              <h2 className="text-xl font-medium text-primary md:text-2xl">
                Full-Stack Developer
              </h2>
              <p className="text-muted-foreground md:text-lg">
                I am a passionate computer science professional with expertise in building modern, responsive, and scalable web applications. My goal is to leverage technology to solve real-world problems and create meaningful user experiences.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="mailto:jane.doe@example.com">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#">Download Resume</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="mailto:jane.doe@example.com" aria-label="Email">
                <Mail className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
