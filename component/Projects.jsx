import Section from './Section'
import Reveal from './Reveal'
import { profile, projects } from './data'
import { ArrowIcon, GitHubIcon } from './Icons'

const Projects = () => {
  return (
    <Section id='projects' index='04' eyebrow='projects' title='Selected projects'>
      <div className='grid gap-5 md:grid-cols-2'>
        {projects.map((p, i) => {
          const Wrapper = p.link ? 'a' : 'div'
          return (
            <Reveal key={p.title} delay={(i % 2) * 80}>
              <Wrapper
                {...(p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {})}
                className={`card card-hover group flex h-full flex-col p-6 sm:p-7 ${p.featured ? 'ring-1 ring-accent/20' : ''}`}
              >
                <div className='flex items-start justify-between gap-4'>
                  <p className='font-mono text-xs uppercase tracking-wider text-accent'>{p.domain}</p>
                  {p.link && (
                    <span className='flex items-center gap-1.5 text-xs text-muted transition group-hover:text-accent'>
                      <GitHubIcon width={15} height={15} />
                      Code
                      <ArrowIcon width={14} height={14} className='transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </span>
                  )}
                </div>
                <h3 className='mt-3 text-lg font-semibold text-fg'>{p.title}</h3>
                <p className='mt-3 flex-1 text-[15px] leading-relaxed text-muted'>{p.summary}</p>
                <ul className='mt-5 flex flex-wrap gap-2'>
                  {p.stack.map((s) => (
                    <li key={s} className='chip font-mono text-xs'>{s}</li>
                  ))}
                </ul>
              </Wrapper>
            </Reveal>
          )
        })}
      </div>

      <Reveal className='mt-10 text-center'>
        <a
          href={profile.github}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent'
        >
          <GitHubIcon width={16} height={16} /> More on GitHub <ArrowIcon width={14} height={14} />
        </a>
      </Reveal>
    </Section>
  )
}

export default Projects
