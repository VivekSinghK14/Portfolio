'use client'
import { useEffect, useState } from 'react'
import { profile } from './data'
import { CloseIcon, DownloadIcon, MenuIcon } from './Icons'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Highlight the nav link of the section currently in view.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-bg/80 backdrop-blur-lg border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav className='container-x flex h-16 items-center justify-between'>
        <a href='#top' className='flex items-center gap-2.5 font-semibold tracking-tight'>
          <span className='grid h-8 w-8 place-items-center rounded-lg bg-accent/15 font-mono text-sm text-accent ring-1 ring-accent/30'>
            VS
          </span>
          <span className='hidden sm:inline'>{profile.name}</span>
        </a>

        <ul className='hidden lg:flex items-center gap-1 text-sm'>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`rounded-md px-3 py-2 transition-colors ${
                  active === href ? 'text-accent' : 'text-muted hover:text-fg'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-2'>
          <a
            href={profile.cv}
            download
            className='hidden sm:inline-flex items-center gap-2 rounded-lg border border-accent/40 px-3.5 py-2 text-sm font-medium text-accent transition hover:bg-accent/10'
          >
            <DownloadIcon width={16} height={16} /> CV
          </a>
          <button
            className='lg:hidden rounded-md p-2 text-fg hover:bg-white/5'
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className='lg:hidden border-t border-line'>
          <ul className='container-x flex flex-col py-3'>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className='block py-3 text-muted hover:text-fg'>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.cv} download className='mt-2 inline-flex items-center gap-2 py-3 font-medium text-accent'>
                <DownloadIcon width={16} height={16} /> Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
