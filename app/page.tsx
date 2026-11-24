import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Bio from "@/components/sections/bio";
import FeaturedWork from "@/components/sections/featured-work";
import TechStack from "@/components/sections/tech-stack";
import Contact from "@/components/sections/contact";
import { SITE_URL } from "@/lib/metadata";
export const metadata: Metadata = {
  ...(SITE_URL ? { alternates: { canonical: SITE_URL } } : {}),
};
export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <Hero /><Bio /><FeaturedWork /><TechStack /><Contact />
    </div>
  );
}
