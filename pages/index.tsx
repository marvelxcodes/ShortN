import type { NextPage } from 'next'
import Axios from 'axios'
import { useRef, useState } from 'react'
import Header from '@components/Header'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const URLInputRef = useRef<HTMLInputElement>(null)
  const FormRef = useRef<HTMLDivElement>(null)
  const [urlId, setUrlId] = useState<string>()
  const URLValue = URLInputRef.current?.value
  const { push } = useRouter()

  const Shorten = async (e:any) => {
    e.preventDefault()
    const random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6)
    setUrlId(random)
    await Axios.post(`/api/create`, {
        id: random,
        url: URLValue
    })
  }

  const CopyToClipboard = () => {
    window.navigator.clipboard.writeText(`${window.location.href}${urlId}`)
  }
  
  const ScrollDown = () => {
    FormRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
<div className='flex items-center flex-col w-full '>
  <Header scroll={ScrollDown} />
  <div className="from-purple-600 flex flex-col select-none justify-center items-center bg-gradient-to-b h-[calc(100vh-4rem)] w-full">
    <h1 className='text-6xl text-center text-white md:text-8xl font-extrabold'>ShortN</h1>
    <h1 className='text-3xl text-center text-white md:text-6xl font-extrabold'>Don&apos;t share huge URLs anymore!</h1>
    <div className="mt-8">
      <button onClick={ScrollDown} className='h-14 active:bg-gray-400 px-6 mr-3 rounded font-bold transition hover:opacity-80 bg-white'>Get Started</button>
      <button onClick={() => push(process.env.WHOAMI!)} className='h-14 px-6 active:bg-purple-900 ml-3 rounded font-bold transition hover:opacity-80 bg-purple-600 text-white'>Whoami</button>
    </div>
  </div>
  <div ref={FormRef} className="h-screen w-full flex items-center justify-center">
    <div className="flex flex-col outline-purple-600 outline-1 outline rounded-lg items-center justify-center md:m-14 w-10/12 md:w-5/6 h-3/6 shadow-2xl">
      <h1 className='mb-8 font-extrabold text-purple-600 text-center px-3 text-3xl'>Shorten your Links!</h1>
      <form onSubmit={Shorten} className="flex w-5/6 md:flex-row flex-col items-center justify-center mb-5">
        <input ref={URLInputRef} type="text" placeholder='Enter a URL...' className='active:opacity-80 overflex-hidden font-medium outline-none border-none rounded-l py-3 px-6 w-full max-w-[340px] bg-gray-200' />
        <button onClick={Shorten} className='bg-purple-600 md:m-0 mt-5 transition hover:opacity-80 select-none active:bg-purple-800 text-white font-bold px-6 py-3 rounded-r'>Shorten</button>
      </form>
        {
          urlId && <h1 className='select-none text-center font-semibold'>Your Shrinked is <code title='Copy' onClick={CopyToClipboard} className='bg-purple-300 active:bg-purple-500 cursor-pointer text-sm p-1 rounded transition hover:opacity-80'>{`short-n.vercel.app/${urlId}`}</code></h1>
        }
    </div>
  </div>
</div>
)}

export default Home