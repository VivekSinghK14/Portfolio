import Section from './Section'
import Reveal from './Reveal'
import { skills } from './data'

const Skills = () => {
  return (
    <Section id='skills' index='02' eyebrow='skills' title='Technical toolkit'>
      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 70} className={i === skills.length - 1 ? 'lg:col-span-2' : ''}>
            <div className='card card-hover h-full p-6'>
              <h3 className='font-semibold text-fg'>{s.group}</h3>
              <ul className='mt-4 flex flex-wrap gap-2'>
                {s.items.map((item) => (
                  <li key={item} className='chip'>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Skills
