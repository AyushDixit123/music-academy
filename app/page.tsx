import Instructor from "@/components/instructor";
import { Hero } from "@/components/Herosection";
import Featuredcourses from "@/components/Featured-courses";
import { Testimonals } from "@/components/Testimonals";


export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.9]">
            <Hero />
            <Featuredcourses />
            <Testimonals />
            <Instructor />
        </main>
    );
}
