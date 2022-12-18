import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Faniloniaina RAMILISON</title>
        <meta name="description" content="I’m a Junior web developer specializing in building (and occasionally designing) exceptional digital experiences." />  
      </Head>
    <Main />
    <About />
    <Skills />
    <Contact />
    </div>
  )
}
