import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to the world of only kk fans!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the world of Only KK Fans!" />
        <p className="description">
          Get started by uploading... 
        </p>
       <p>
       <img> src="next-netlify-starter/public/kk.jpeg"</img>
       </p>
      </main>

      <Footer />
    </div>
  )
}
