import { ContactLinks, SocialLinks } from "@/components/contact-form"

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto w-full max-w-[1400px] scroll-mt-24 px-5 py-16 sm:py-24 md:px-12 md:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-8">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">Get in touch</p>
            <h2
              id="contact-heading"
              className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              Let&apos;s connect.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-foreground/75">
              A project to talk about, an open-source idea, or a shared curiosity about software? I&apos;d love to hear from you.
            </p>
          </div>
          <SocialLinks />
        </div>
        <ContactLinks />
      </div>
    </section>
  )
}
