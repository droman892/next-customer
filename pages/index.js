import Head from 'next/head'
import Image from 'next/image'
import SignupForm from '../components/Basic'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div 
      id='homeContainer' 
      className='
        flex 
        justify-center 
        items-center 
        h-screen 
        bg-gradient-radial
        from-zinc-50
        to-zinc-900'
    >
      <div className='h-96 w-96 bg-indigo-500 rounded-[30px]'>
        <h2 className='flex justify-center'>Jeep</h2>
        <p>placeholder...</p>
        <p>placeholder...</p>
        <p>placeholder...</p>
        <p>placeholder...</p>
        <p>placeholder...</p>
        <p>placeholder...</p>
      </div>
    </div>
  )
}

export default Home;