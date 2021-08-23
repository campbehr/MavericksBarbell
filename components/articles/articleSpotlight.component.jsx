import React from "react";
import Link from "next/dist/client/link";

const styles = {
	hidden: "md:hidden",
};

const Spotlight = ({ props, feat = true }) => {
	return (
		<div className="w-full  h-full  sm:rounded-xl sm:shadow-lg sm:hover:shadow-2xl ">
			<Link
				href={`/${props.uri.split("/")[1]}/${
					props.slug
				}`}
			>
				<div
					key={props.id}
					className="cursor-pointer flex flex-col  sm:flex-row-reverse md:flex-col space-y-2"
				>
					<div className="sm:w-1/2 md:w-full ">
						<figure className="">
							<img
								src={
									props.extraPostInfo
										.thumbImage
										.mediaItemUrl
								}
								alt={props.title}
								className=" rounded-xl sm:rounded-l-none md:rounded-t-xl md:rounded-b-none object-contain"
							/>
						</figure>
					</div>
					<div className="flex flex-col space-y-2  sm:w-1/2 sm:pr-2 sm:pl-2  md:w-full md:justify-c">
						{/* <Link
						href={`/${
							props.uri.split("/")[1]
						}/${props.slug}`}
					> */}
						<a className="w-full font-sans font-medium text-xl xs:text-2xl md:pt-2 text-letters-dark">
							{props.title}
						</a>
						{/* </Link> */}

						<p
							className={`${
								!feat ? styles.hidden : ""
							}  text-letters-grey text-sm md:text-xl lg:pr-28 `}
						>
							{
								props.extraPostInfo
									.authorExcerpt
							}
						</p>
						{/* <Link
						href={`/${
							props.uri.split("/")[1]
						}/${props.slug}`}
					> */}
						<p
							className={`${
								!feat ? styles.hidden : ""
							} font-bold underline text-letters-grey md:text-2xl`}
						>
							Read more{" "}
						</p>
						{/* </Link> */}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Spotlight;
