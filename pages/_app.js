import Layout from "../components/layout/layout.component";
import { ToastProvider } from "react-toast-notifications";
import { styles } from "../styles/tailwindGlobals";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const CustomToast = ({ appearance, children }) => (
		<div
			className={`${
				appearance === "error"
					? styles.toastError
					: styles.toastSuccess
			} ${styles.toastBox}`}
		>
			{children}
		</div>
	);

	return (
		<ToastProvider
			components={{ Toast: CustomToast }}
			autoDismiss={true}
			autoDismissTimeout="4000"
			transitionDuration="500"
			placement="top-right"
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ToastProvider>
	);
}

export default MyApp;
