'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { supportedLangs, getLangName, getLangSlug, langSlugs } from '@/lib/i18n';

export default function Header({ lang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  const homeHref = `/${lang}/${getLangSlug(lang)}`;

  const navLinks = [
    { href: homeHref, label: t.nav.home },
    { href: `/${lang}/blog`, label: t.nav.blog },
    { href: `/${lang}/invisible-character-for-discord`, label: 'Discord' },
    { href: `/${lang}/blank-text-instagram`, label: 'Instagram' },
  ];

  /**
   * Build the correct URL when switching languages.
   *
   * Strategy:
   * - If the current page is a homepage slug (any value in langSlugs),
   *   swap it for the target lang's homepage slug.
   * - Otherwise, only swap the /{lang}/ prefix — keep the rest of the path.
   *   This handles /en/blog → /es/blog, /en/invisible-character-for-discord → /es/... etc.
   */
  function getTargetHref(targetLang) {
    const allSlugs = Object.values(langSlugs);
    const currentSlug = pathname.split('/')[2]; // e.g. "invisible-character" or "blog"

    if (allSlugs.includes(currentSlug)) {
      // We're on a homepage slug — go to the target lang's homepage slug
      return `/${targetLang}/${getLangSlug(targetLang)}`;
    }

    // We're on another page (blog, discord, etc.) — swap lang prefix only
    return pathname.replace(`/${lang}`, `/${targetLang}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#fafaf7]/85 backdrop-blur-md border-b border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo → always links to this lang's homepage */}
          <Link href={homeHref} className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#26241f] text-[#fafaf7] font-bold shadow-sm transition-transform group-hover:scale-105">
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
              ⌬
            </span>
            <span className="font-semibold tracking-tight text-[15px] text-[#26241f]">
              invisible<span className="text-[#b8821a]">.</span>character
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-stone-600 hover:text-[#26241f] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language Switcher + Mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-[13px] font-medium text-stone-700 hover:text-[#26241f] border border-stone-200 bg-white/60 rounded-full px-3.5 py-1.5 hover:border-stone-300 hover:bg-white transition-all"
              >
                <span>🌐</span>
                <span className="uppercase">{lang}</span>
                <span className={`transition-transform duration-200 text-stone-400 ${langOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-stone-200/80 overflow-hidden z-50 max-h-80 overflow-y-auto">
                  {supportedLangs.map((l) => (
                    <Link
                      key={l}
                      href={getTargetHref(l)}
                      onClick={() => setLangOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        l === lang
                          ? 'bg-[#fdf6e8] text-[#b8821a] font-semibold'
                          : 'text-stone-700 hover:bg-stone-50 hover:text-[#26241f]'
                      }`}
                    >
                      {getLangName(l)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              className="md:hidden p-2 text-stone-700 hover:text-[#26241f] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200/70">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-stone-700 hover:text-[#26241f] hover:bg-[#fdf6e8] rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
