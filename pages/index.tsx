import type { NextPage } from 'next'
import Axios from 'axios'
import Head from 'next/head'
import { useRef, useState } from 'react'

const Home: NextPage = () => {
  const UrlInputRef = useRef<HTMLInputElement>(null)
  const [urlId, setUrlId] = useState<string>()
  
  const Shorten = () => {

  }
  return (
    <div className='flex flex-col w-screen'>
      <Head>
        <title>ShortN</title>
        <meta name="description" content="A free URL Shortener by MarvelXCodes" />
      </Head>
      <header className='h-16 shadow-2xl relative flex items-center px-8'>
        <h1 className='text-xl font-bold select-none'>ShortN</h1>
        <div className="absolute right-5 flex items-center">
          <h1 className='font-bold mr-3 select-none'>Shorten your URL &gt;</h1>
        <button className='bg-purple-600 text-white font-semibold text-sm px-5 py-3 rounded'>Shorten</button>
        </div>
      </header>
      <div className="mt-8 py-12 h-60 flex flex-col items-center mx-14 w-5/6 shadow-2xl">
        <div className="flex w-5/6 items-center justify-center mb-5">
          <input ref={UrlInputRef} type="text" placeholder='Enter a URL...' className='active:opacity-80 overflex-hidden font-medium outline-none border-none rounded-l-sm py-3 px-6 w-full max-w-[340px] bg-gray-200' />
          <button onClick={Shorten} className='bg-purple-600 hover:opacity-80 active:bg-purple-800 text-white font-bold px-6 py-3 rounded-r-sm'>Shorten</button>
        </div>
          {
            urlId && <h1 className='font-semibold'>Your Shortenend is <code className='bg-purple-300 text-sm p-1 rounded'>shortn.vercel.app/{urlId}</code></h1>
          }
      </div>
      <div className="flex flex-col "></div>
    </div>
  )
}

export default Home