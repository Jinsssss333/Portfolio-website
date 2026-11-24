import type { Metadata } from "next";
import { SITE_URL } from "@/lib/metadata";
export const metadata: Metadata = {
  title: "About",
  description: "Meet JINS JOSE, a software developer focused on backend systems, AI integration, and open source, with a Computer Science background at SOE CUSAT.",
  ...(SITE_URL ? { alternates: { canonical: SITE_URL + "/about" } } : {}),
};
export default function AboutLayout({ children }: { children: React.ReactNode }) { return children; }
