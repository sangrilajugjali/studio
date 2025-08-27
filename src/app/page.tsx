import { Blog } from '@/components/Blog';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Profile } from '@/components/Profile';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Profile />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
