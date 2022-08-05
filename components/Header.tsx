import { FC } from 'react'
import Head from 'next/head'

type HeaderProps = {
  scroll: (() => void)
}

const Header:FC<HeaderProps> = ({scroll}) => {
  return (
<>
<Head>
  <title>ShortN</title>
  <meta name="description" content="A free URL Shortener by MarvelXCodes" />
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</Head>
<header className='h-16 shadow-2xl relative w-full flex items-center px-8 md:px-20'>
  <img src="/favicon.ico" height={30} className="mr-3" width={30} alt="" />
  <h1 className='text-xl font-bold select-none'>ShortN</h1>
  <div className="absolute right-5 md:right-20 flex items-center">
    <h1 className='font-bold mr-3 select-none hidden md:flex'>Shorten your URL &gt;</h1>
    <button onClick={scroll} className='bg-purple-600 text-white font-semibold text-sm px-5 py-3 rounded transition hover:opacity-80 active:bg-purple-900'>Shorten</button>
  </div>
</header>
</>
)}

export default Header