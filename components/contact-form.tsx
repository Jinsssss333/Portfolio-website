import { Mail, MessageCircle, Phone } from "lucide-react"
import { SITE } from "@/lib/site"

/** Direct contact channels; no form submission or email service is needed. */
export function ContactLinks() {
  const links = [
    { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, Icon: Mail, external: false },
    { label: "Phone", value: SITE.phoneDisplay, href: SITE.phoneHref, Icon: Phone, external: false },
    { label: "WhatsApp", value: "Start a conversation", href: SITE.whatsappHref, Icon: MessageCircle, external: true },
  ]

  return (
    <div className="flex flex-col gap-4">
      {links.map(({ label, value, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group flex min-w-0 items-center gap-5 rounded-2xl border border-foreground/10 p-5 transition-colors hover:border-accent/50 hover:bg-accent/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-6"
        >
          <Icon size={24} className="shrink-0 text-accent" aria-hidden />
          <span className="min-w-0">
            <span className="block text-sm text-foreground/60">{label}</span>
            <span className="mt-1 block break-words text-base font-medium text-foreground sm:text-lg">{value}</span>
          </span>
        </a>
      ))}
    </div>
  )
}

export function SocialLinks() {
  return (
    <div>
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-foreground/55">Elsewhere on the web</p>
      <div className="flex flex-wrap gap-3">
        {SITE.socials.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/15 px-5 py-3 text-base text-foreground/80 transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
