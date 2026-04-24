const POSTS = [
  { title: "How to Post Blank Status and Send Invisible Messages on WhatsApp", date: "Apr 14 2026", href: "https://www.invisible-character.net/blog/how-to-post-blank-status-and-send-invisible-messages-on-whatsapp", gradient: "bg-gradient-mint", icon: "✉" },
  { title: "Creative Ways to Use Invisible Characters on Social Media", date: "Apr 13 2026", href: "https://www.invisible-character.net/blog/creative-ways-to-use-invisible-characters-on-social-media", gradient: "bg-gradient-peach", icon: "✦" },
  { title: "How to Hide Your Name on Social Media Platforms?", date: "Apr 02 2026", href: "https://www.invisible-character.net/blog/how-to-hide-your-name-on-social-media-platforms", gradient: "bg-gradient-soft", icon: "◐" },
];

export default function BlogCards() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-block rounded-full bg-surface-rose ring-hairline px-3 py-1 text-[11px] font-medium text-primary uppercase tracking-wider">Journal</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
            Read our <span className="text-gradient">blogs</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5" id="blogsRoot">
          {POSTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group rounded-3xl bg-white ring-hairline overflow-hidden ease-smooth transition-all hover:-translate-y-1 hover:shadow-card flex flex-col"
            >
              <div className={`${p.gradient} aspect-[16/10] flex items-center justify-center relative overflow-hidden`}>
                <span aria-hidden className="absolute inset-0 bg-dot-grid opacity-50"></span>
                <span className="relative font-display text-5xl text-foreground/20 ease-smooth transition-transform group-hover:scale-110">{p.icon}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-semibold leading-snug group-hover:text-primary ease-smooth transition-colors">{p.title}</h3>
                <div className="mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground uppercase tracking-wider">
                  <span>{p.date}</span>
                  <span className="ease-smooth transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
