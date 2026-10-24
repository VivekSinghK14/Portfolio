import Section from './Section'
import Reveal from './Reveal'
import { languages, profile } from './data'

const facts = [
  { k: 'Based in', v: profile.location },
  { k: 'Studying', v: 'M.Sc. Digital Engineering, OVGU (grade 1.7)' },
  { k: 'Looking for', v: 'Werkstudent / internship — data, BI, ML, automation' },
  { k: 'Work authorisation', v: profile.workAuth },
  { k: 'Languages', v: languages.map((l) => `${l.name} (${l.level})`).join(' · ') },
]

const About = () => {
  return (
    <Section id='about' index='01' eyebrow='about' title='From business problems to working data products'>
      <div className='grid gap-10 lg:grid-cols-[1.4fr_1fr]'>
        <Reveal className='space-y-5 text-base leading-relaxed text-muted sm:text-lg'>
          <p>{profile.summary}</p>
          <p>
            Before moving into data, I spent two years in business development at BYJU'S, leading a sales team
            and tracking conversion funnels in Salesforce. That background shapes how I work: I start from the
            decision someone needs to make, then build the pipeline, model or dashboard that supports it.
          </p>
          <p>
            Most recently I worked as a Research Assistant at Otto-von-Guericke University, authoring course
            modules on data science, APIs and automation, and running exercise classes. I document what I build
            and explain it clearly to technical and non-technical stakeholders.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <dl className='card divide-y divide-line'>
            {facts.map(({ k, v }) => (
              <div key={k} className='px-5 py-4'>
                <dt className='font-mono text-xs uppercase tracking-wider text-accent'>{k}</dt>
                <dd className='mt-1 text-sm text-fg'>{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}

export default About
