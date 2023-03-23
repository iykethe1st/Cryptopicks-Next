import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Media from "@/components/Media";
import Bottom from "@/components/Bottom";

export default function Home() {
  return (
    <div className="bg-color flex flex-col">
      <NavBar />
      <Hero />
      <Media />
      <Bottom />
    </div>
  );
}
