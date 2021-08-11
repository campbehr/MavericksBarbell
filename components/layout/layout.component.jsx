import Navbar from "./navbar.component";
import Footer from "./footer.component";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Navbar />
			<main className=" grid grid-cols-none p-5 mt-20 h-full xl:grid-cols-3 bg-letters-light">
				<div className="xl:col-start-2">
					{children}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
