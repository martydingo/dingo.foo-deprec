import React from 'react'
import logo from "../../../public/images/site/logo-256x256.png"
import Image from 'next/image'

const Home = () => {
  return (
    <main className="xl:container xl:max-w-5xl container max-w-2xl">
      <div className="flex flex-col-reverse my-auto md:flex-row justify-center h-[80vh] items-center">
        <div>
          <h1 className="scroll-m-20 text-3xl md:text-4xl tracking-tight lg:text-5xl font-titillium">
            dingo.foo
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-muted-foreground indent-2 mt-1">
            Yet another mix of a personal website, a blog, and a portfolio.
          </p>
        </div>
        <div>
          <Image className='antialiased' alt="logo" src={logo} />
        </div>
      </div>
    </main>
  )
}

export default Home