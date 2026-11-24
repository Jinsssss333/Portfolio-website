import { ContactLinks, SocialLinks } from "@/components/contact-form"

export default function ContactClient() {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className="relative mx-auto w-full max-w-[1400px] px-5 pb-24 pt-32 md:px-12 md:pb-32 md:pt-40"
      style={{ fontFamily: "var(--font-google-sans-flex), sans-serif" }}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-10">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
            <h1
              id="contact-page-heading"
              className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              Good things start with a conversation.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">
              Talk software, explore an idea, or connect over open source. You can reach me directly by email or phone, and follow my work on the platforms below.
            </p>
          </div>
          <SocialLinks />
        </div>
        <div className="lg:pt-10">
          <ContactLinks />
        </div>
      </div>
    </section>
  )
}
