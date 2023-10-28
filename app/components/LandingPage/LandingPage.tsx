import Image from 'next/image'
import React from 'react'
import * as LottiePlayer from "@lottiefiles/lottie-player";
import Lottie from '../Lotties/Lotties';

const LandingPage = () => {
  return (
    <main className='max-w-screen-2xl mx-auto w-full h-screen bg-purple-950'>
        <aside className='mr-1'>
        {/* <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
    {/* <lottie-player
    autoplay
    controls
    loop
    mode="normal"
    src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
    style="width: 320px"
></lottie-player> */}
<Lottie source="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json" />
        </aside>
        <main>

        </main>
    </main>
  )
}

export default LandingPage