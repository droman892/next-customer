import Head from 'next/head';
import FeedbackForm from '../components/FeedbackForm';

const Home = () => {
  return (
    <>
      <Head>
        <title>Customer Feedback Form</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div 
          id='homeContainer' 
          className='
            flex 
            justify-center 
            items-center  
            px-5
            py-16
            bg-gradient-radial
            from-yellow-50
            to-yellow-500'
        >
        <div className='
          max-h-full
          max-w-[100%]
          p-5
          bg-glassy 
          rounded-[16px]
          border-solid
          border-ice
          border-[1px]
          shadow-glass
          backdrop-blur-[5px]
          md:max-w-[50%]

        '>

          <h2 className='flex justify-center mb-4 text-xl font-bold'>
            Customer Feedback Form
          </h2>
          <h3 className='flex justify-center mb-2 text-center'>
            Please take a few minutes to provide us some feedback on the form below.  Our Customer
            Success Managers make sure to review each and every submission as your opinion greatly matters
            to us.
          </h3>
          <h3 className='flex justify-center mb-6 text-center'>
            We thank you for your participation, and hope you will continue to enjoy our services
            for many years to come.
          </h3>
          <FeedbackForm />

        </div>
      </div>
    </>
  )
}

export default Home;
