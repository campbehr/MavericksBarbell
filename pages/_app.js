import Layout from "../components/layout/layout.component";
import { ToastProvider } from "react-toast-notifications";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const styles = {
		toastBox:
			"p-5 w-auto sm:w-96 min-h-20  mt-20 md:mt-24 border-4  flex justify-center items-center bg-letters-light rounded-md text-lg md:text-xl font-sans",
		toastSuccess: "border-secondary text-secondary",
		toastError: "border-red text-red",
	};

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
			placement="top-right"
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ToastProvider>
	);
}

export default MyApp;
