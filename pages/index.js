import Head from 'next/head'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="flex">
        <Sidebar />
        <Content />
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  )
}
