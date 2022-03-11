import Head from 'next/head';
import StandardPage from '../layout/StandardPage';

const Acknowledgement = () => {
    return (
        <>
            <Head>
                <title>Form Submission Acknowledgement</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <StandardPage>
                <h1>The trees are alive</h1>
            </StandardPage>
        </>
    )
}

export default Acknowledgement;
