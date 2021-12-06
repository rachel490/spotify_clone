import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import '../styles/globalStyle.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</SessionProvider>
	);
}

export default MyApp;
