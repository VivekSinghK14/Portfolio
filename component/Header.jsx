import Image from 'next/image'
import { profile, stats } from './data'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './Icons'

const Header = () => {
  return (
    <section id='top' className='relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24'>
      <div className='bg-grid pointer-events-none absolute inset-0 -z-10' />

      <div className='container-x grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]'>
        <div>
          <p className='inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-accent' />
            </span>
            {profile.availability}
          </p>

          <h1 className='mt-6 text-4xl font-bold tracking-tight sm:text-6xl'>
            {profile.name}
          </h1>
          <p className='mt-3 text-2xl font-semibold sm:text-3xl text-gradient'>{profile.role}</p>

          <p className='mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
            I turn messy data into validated pipelines, dashboards and machine-learning applications —
            with Python, SQL, PostgreSQL and Power BI. Currently doing an MSc in Digital Engineering at
            Otto-von-Guericke University Magdeburg.
          </p>

          <p className='mt-4 flex items-center gap-2 text-sm text-muted'>
            <PinIcon width={16} height={16} className='text-accent' /> {profile.location}
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <a
              href={profile.cv}
              download
              className='inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition hover:brightness-110'
            >
              <DownloadIcon width={16} height={16} /> Download CV
            </a>
            <a
              href='#projects'
              className='inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-fg transition hover:border-accent/50 hover:text-accent'
            >
              View projects
            </a>
            <div className='ml-1 flex items-center gap-1'>
              {[
                { href: profile.github, label: 'GitHub', Icon: GitHubIcon },
                { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
                { href: `mailto:${profile.email}`, label: 'Email', Icon: MailIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel='noreferrer'
                  aria-label={label}
                  className='rounded-lg p-2.5 text-muted transition hover:bg-white/5 hover:text-accent'
                >
                  <Icon width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='relative order-first mx-auto w-full max-w-[220px] sm:max-w-xs lg:order-none lg:max-w-sm'>
          <div className='absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent-2/20 to-transparent blur-2xl' />
          <div className='relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-2'>
            <Image
              src='/Asset/portrait.jpg'
              alt={`Portrait of ${profile.name}`}
              width={800}
              height={1000}
              priority
              className='h-auto w-full rounded-[1.4rem] object-cover'
            />
          </div>
        </div>
      </div>

      <div className='container-x mt-16'>
        <dl className='grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4'>
          {stats.map((s) => (
            <div key={s.label} className='bg-surface px-5 py-6'>
              <dt className='text-xs text-muted'>{s.label}</dt>
              <dd className='mt-1 text-3xl font-bold tracking-tight text-fg'>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Header
