import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../Components/Footer'
import Toggle from '../Components/Toggle'
import Todos from '../modules/Todos'
import CompletedTodos from '../modules/CompletedTodos'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo App - It is a challenge from devchallenges.io" />
      </Head>

      <main className='container'>
        <h1 className='title'>#todo</h1>

        <Toggle/>

        <Todos/>
        {/* <CompletedTodos/> */}
      </main>

      <Footer/>
    </div>
  )
}

export default Home
