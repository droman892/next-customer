import Head from 'next/head';
import Image from 'next/image';
import FeedbackForm from '../components/FeedbackForm';
import styles from '../styles/Home.module.css';
import Table from '@mui/material/Table';
import StandardPage from '../layout/StandardPage';
import FormContainer from '../layout/FormContainer';

const Home = () => {
  return (
    <StandardPage>
      <FormContainer>

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

      </FormContainer>
    </StandardPage>
  )
}

export default Home;
