import Head from 'next/head';
import StandardPage from '../layout/StandardPage';

const Acknowledgement = () => {
    return (
        <>
            <Head>
                <title>404: Page Not Found</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <StandardPage>
                <h1>404: Page Not Found</h1>
            </StandardPage>
        </>
    )
}

export default Acknowledgement;