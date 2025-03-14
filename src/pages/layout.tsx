import "../styles/globals.css";

import { Navbar, Footer } from "../components";
import { Hero, Clients, Services } from "@/sections";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
        <Hero />
        <Clients />
        <Services />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
