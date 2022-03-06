import Head from 'next/head'
import Image from 'next/image'
import SignupForm from '../components/Basic'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <h2>Jeep</h2>
      <div className='form-container'>
        <SignupForm />
      </div>
    </div>
  )
}

export default Home;