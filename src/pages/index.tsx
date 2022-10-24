import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../Components/Footer';
import Toggle from '../Components/Toggle';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Layout from '../Components/Layout';

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <div className='body'>
        <Head>
          <title>Todo App</title>
          <meta name="description" content="Todo App - It is a challenge from devchallenges.io" />
        </Head>

        <main className='container'>
          <h1 className='title'>#todo</h1>

          <Toggle/>

          <Layout/>
        </main>

        <Footer/>
      </div>
    </Provider>
  )
}

export default Home
