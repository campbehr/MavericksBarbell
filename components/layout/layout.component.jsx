import Navbar from "./navbar.component";
import Footer from "./footer.component";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col justify-between min-h-screen ">
			<Navbar />
			<main className=" grid grid-cols-none  mt-20 h-full  lg:grid-cols-3 bg-letters-light">
				<div className="lg:col-start-2">
					{children}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
