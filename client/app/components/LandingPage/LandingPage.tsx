import Image from 'next/image'
import React from 'react'
import Lot from "@/app/assets/Recipe book.gif"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const LandingPage = () => {
  return (
    <main className='max-w-screen-2xl mx-auto w-full h-screen  flex justify-between p-7 flex-col-reverse items-center md:flex-row-reverse'>
        <aside className='mr-1 w-full md:w-1/2'>
        <Image className="w-full" src={Lot} alt=''/>
        </aside>
        <main className='w-full md:w-1/2'>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Delish with <span className='text-purple-950'>Greenish</span></h1>
          <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>Keeping up your healthy body with healthy but delicious foods</p>

          <div className="flex">
          <Input 
          type='text'
          placeholder='Search menu, recipe etc.'
          className='h-14 w-1/2'/>
          <Button className='h-14 px-10 ml-3 bg-purple-950'>Search</Button>
          </div>
        </main>
    </main>
  )
}

export default LandingPage