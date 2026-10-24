'use client'
import { useState } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { profile } from './data'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, Icon: PhoneIcon },
  { label: 'LinkedIn', value: 'vivek-singh-817a77195', href: profile.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', value: 'VivekSinghK14', href: profile.github, Icon: GitHubIcon },
]

const input =
  'w-full rounded-lg border border-line bg-bg/60 px-4 py-3 text-sm text-fg placeholder:text-slate-500 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend: compose the message in the visitor's own email client.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id='contact' index='06' eyebrow='contact' title="Let's talk">
      <div className='grid gap-8 lg:grid-cols-[1fr_1.2fr]'>
        <Reveal>
          <p className='max-w-md text-base leading-relaxed text-muted sm:text-lg'>
            I'm looking for Werkstudent and internship roles in data analytics, BI, machine learning or
            automation. Email is the fastest way to reach me.
          </p>
          <ul className='mt-8 space-y-3'>
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel='noreferrer'
                  className='card card-hover flex items-center gap-4 px-5 py-4'
                >
                  <span className='grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent'>
                    <Icon width={18} height={18} />
                  </span>
                  <span>
                    <span className='block text-xs text-muted'>{label}</span>
                    <span className='block text-sm font-medium text-fg break-all'>{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className='card space-y-4 p-6 sm:p-8'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='block'>
                <span className='mb-1.5 block text-xs text-muted'>Name</span>
                <input name='name' value={form.name} onChange={onChange} required className={input} placeholder='Jane Doe' />
              </label>
              <label className='block'>
                <span className='mb-1.5 block text-xs text-muted'>Email</span>
                <input type='email' name='email' value={form.email} onChange={onChange} required className={input} placeholder='jane@company.com' />
              </label>
            </div>
            <label className='block'>
              <span className='mb-1.5 block text-xs text-muted'>Message</span>
              <textarea name='message' rows={6} value={form.message} onChange={onChange} required className={`${input} resize-none`} placeholder='Role, team and what you are looking for…' />
            </label>
            <button
              type='submit'
              className='w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition hover:brightness-110'
            >
              Send message
            </button>
            <p className='text-center text-xs text-slate-500'>Opens your email app with the message pre-filled.</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

export default Contact
