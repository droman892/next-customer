import Head from 'next/head'
import Image from 'next/image'
import FeedbackForm from '../components/FeedbackForm'
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
        p-9
        bg-gradient-radial
        from-zinc-50
        to-zinc-800'
    >
      <div className='
        min-h-fit 
        w-w-min 
        max-w-[700px]
        p-5
        bg-glassy 
        rounded-[16px]
        border-solid
        border-ice
        border-[1px]
        shadow-glass
        backdrop-blur-[5px]
      '>
        <h2 className='flex justify-center mb-2'>
          Customer Feedback Form
        </h2>
        <h3 className='flex justify-center mb-2'>
          Please take a few minutes to provide us some feedback on the form below.  Our Customer
          Success Managers make sure to review each and every submission as your opinion greatly matters
          to us.
        </h3>
        <h3 className='flex justify-center mb-6'>
          We thank you for your participation, and hope you will continue to enjoy our services
          for many years to come.
        </h3>
        <FeedbackForm />
      </div>
    </div>
  )
}

export default Home;
