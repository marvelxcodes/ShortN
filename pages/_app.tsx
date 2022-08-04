import type { AppProps } from 'next/app'
import "../libs/Tailwind.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}