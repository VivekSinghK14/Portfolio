import { profile } from './data'

const Footer = () => (
  <footer className='border-t border-line py-8'>
    <div className='container-x flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row'>
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p className='font-mono text-xs'>Built with Next.js & Tailwind CSS</p>
    </div>
  </footer>
)

export default Footer
