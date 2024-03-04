import Head from "next/head";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Next.js blog" />
				<title>Next Blog</title>
			</Head>

			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
