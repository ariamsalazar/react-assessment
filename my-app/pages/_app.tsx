import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../assets/styles/global.scss';
import '../components/User/User.scss';
import '../components/DefaultLayout/DefaultLayout.scss';
import '../components/LegDetail/LegDetail.scss';
import '../components/ComponentList/Component.scss';
import '../components/Itineraries/Itineraries.scss';

// App main on application
const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Auxo Front-end React Assessment</title>
				<meta name='description' content='React Assessment' />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
