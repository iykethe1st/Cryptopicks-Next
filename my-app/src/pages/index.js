import Hero from "@/components/Hero";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="bg-color flex flex-col">
      <NavBar />
      <Hero />
    </div>
  );
}
