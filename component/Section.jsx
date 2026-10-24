import Reveal from './Reveal'

export default function Section({ id, index, eyebrow, title, children }) {
  return (
    <section id={id} className='scroll-mt-24 py-20 sm:py-28'>
      <div className='container-x'>
        <Reveal>
          <p className='font-mono text-sm text-accent'>
            <span className='text-muted'>{index}.</span> {eyebrow}
          </p>
          <h2 className='mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-fg'>{title}</h2>
        </Reveal>
        <div className='mt-12'>{children}</div>
      </div>
    </section>
  )
}
