import Instructor from "@/components/instructor";
import { Hero } from "@/components/Herosection";
import Featuredcourses from "@/components/Featured-courses";
import { Testimonals } from "@/components/Testimonals";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.9]">
            <Hero />
            <Featuredcourses />
            <Testimonals />
            <Instructor />
            <Footer />
        </main>
    );
}
