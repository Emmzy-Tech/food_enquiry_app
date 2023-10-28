import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './components/NavMenu/NavMenu'
import LandingPage from './components/LandingPage/LandingPage'

export default function Home() {
  return (
   <main>
    <NavMenu />
    <LandingPage />
   </main>
  )
}
