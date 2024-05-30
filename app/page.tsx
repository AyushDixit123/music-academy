
import { Hero } from "@/components/Herosection";
import Featuredcourses from "@/components/Featured-courses";
export default function Home() {
  return (
    <>
     <main className="min-h-screen bg-black/[0.9]">
      <Hero />
      <Featuredcourses />
     </main>

    </>
  );
}
