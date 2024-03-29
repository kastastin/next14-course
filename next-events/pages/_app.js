import Head from "next/head";

import { NotificationContextProvider } from "../store/notification-context";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<NotificationContextProvider>
			<Layout>
				<Head>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<meta name="description" content="NextJS Events" />
					<title>NextJS Events</title>
				</Head>

				<Component {...pageProps} />
			</Layout>
		</NotificationContextProvider>
	);
}
