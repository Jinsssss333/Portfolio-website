import type { Metadata } from "next"
import ContactClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Jins Jose, a software developer from CUSAT. Find email, phone, GitHub, LinkedIn, and X links.",
}

export default function ContactPage() {
  return <ContactClient />
}
