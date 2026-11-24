/** Shared identity, contact details, and navigation for Jins Jose's portfolio. */
export const SITE = {
  name: "JINS JOSE",
  role: "Software Developer",
  location: "Kalamassery, Kochi",
  email: "jinsjose284@gmail.com",
  phoneDisplay: "+91 96561 52501",
  phoneHref: "tel:+919656152501",
  whatsappNumber: "919656152501",
  whatsappHref: "https://wa.me/919656152501",
  githubHref: "https://github.com/Jinsssss333",
  linkedinHref: "https://www.linkedin.com/in/jinssssss333/",
  xHref: "https://x.com/Jins2202",
  socials: [
    { label: "GitHub", href: "https://github.com/Jinsssss333" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jinssssss333/" },
    { label: "X", href: "https://x.com/Jins2202" },
  ],
} as const

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#work" },
  { label: "Contact", href: "/contact" },
] as const
