import Link from 'next/link';

/**
 * Footer — Premium cream/ochre theme
 * Content & i18n (t.footer.*) preserved 1:1 from original. Only styling changed.
 */
export default function Footer({ lang, t }) {
  return (
    <footer className="relative bg-gradient-to-b from-[#fdf6e8] to-[#f7f1e3] border-t border-stone-200/80 mt-20 overflow-hidden">
      {/* Soft amber glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-amber-200/40 blur-3xl opacity-60 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#26241f] text-[#fafaf7] font-bold shadow-sm">
                ⌬
              </span>
              <span className="font-semibold tracking-tight text-[15px] text-[#26241f]">
                Invisible Character
              </span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#26241f] mb-4">
              {t.footer.resources}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${lang}`} className="text-stone-600 hover:text-[#b8821a] transition-colors">
                  Invisible Character
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/invisible-character-for-discord`} className="text-stone-600 hover:text-[#b8821a] transition-colors">
                  Invisible Character for Discord
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/blank-text-instagram`} className="text-stone-600 hover:text-[#b8821a] transition-colors">
                  Blank Text Instagram
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/empty-name-pubg`} className="text-stone-600 hover:text-[#b8821a] transition-colors">
                  Empty Name PUBG
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#26241f] mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${lang}`} className="text-stone-600 hover:text-[#b8821a] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-stone-600 hover:text-[#b8821a] transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-stone-600 hover:text-[#b8821a] transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-stone-600 hover:text-[#b8821a] transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500">{t.footer.copyright}</p>
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span>🌐</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
