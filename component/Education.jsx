import Section from './Section'
import Reveal from './Reveal'
import { certifications, education } from './data'

const Education = () => {
  return (
    <Section id='education' index='05' eyebrow='education' title='Education & certifications'>
      <div className='grid gap-5 lg:grid-cols-2'>
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 80}>
            <div className='card card-hover h-full p-6'>
              <p className='font-mono text-sm text-muted'>{e.period}</p>
              <h3 className='mt-2 text-lg font-semibold text-fg'>{e.degree}</h3>
              <p className='mt-1 text-muted'>{e.school}</p>
              <p className='mt-4 inline-block rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent'>{e.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className='mt-5'>
        <div className='card p-6'>
          <h3 className='font-semibold text-fg'>Certifications</h3>
          <ul className='mt-4 space-y-3'>
            {certifications.map((c) => (
              <li key={c.name} className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
                <span className='text-[15px] text-slate-300'>{c.name}</span>
                <span className='font-mono text-xs text-muted'>{c.issuer} · {c.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}

export default Education
