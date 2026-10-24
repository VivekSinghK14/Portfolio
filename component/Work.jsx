import Section from './Section'
import Reveal from './Reveal'
import { experience } from './data'

const Work = () => {
  return (
    <Section id='experience' index='03' eyebrow='experience' title='Where I have worked'>
      <ol className='relative space-y-8 border-l border-line pl-6 sm:pl-10'>
        {experience.map((job, i) => (
          <li key={job.role} className='relative'>
            <span className='absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-accent ring-4 ring-bg sm:-left-[47px]' />
            <Reveal delay={i * 80}>
              <article className='card card-hover p-6 sm:p-8'>
                <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between'>
                  <h3 className='text-xl font-semibold text-fg'>
                    {job.role} <span className='text-accent'>· {job.org}</span>
                  </h3>
                  <p className='font-mono text-sm text-muted'>{job.period}</p>
                </div>
                <p className='mt-1 text-sm text-muted'>{job.location}</p>

                <ul className='mt-5 space-y-2.5'>
                  {job.points.map((p) => (
                    <li key={p} className='flex gap-3 text-[15px] leading-relaxed text-slate-300'>
                      <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70' />
                      {p}
                    </li>
                  ))}
                </ul>

                <ul className='mt-5 flex flex-wrap gap-2'>
                  {job.tags.map((t) => (
                    <li key={t} className='chip font-mono text-xs'>{t}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Work
