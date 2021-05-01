import 'tailwindcss/tailwind.css'
import MenuComp from './Menu'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (

    <div>
      
    
      <MenuComp />

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
