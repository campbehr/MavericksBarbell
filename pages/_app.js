import Layout from "../components/layout/layout.component";
import { ToastProvider } from "react-toast-notifications";
import "../styles/globals.css";

const styles = {
	toastBox:
		"w-64 md:w-96 h-14 md:h-20 lg mt-20 lg:mt-40 border-2 border-primary flex justify-center items-center bg-secondary rounded-md text-lg md:text-2xl font-medium text-letters ",
	toastSuccess: "bg-secondary",
	toastError: "bg-red",
};
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
