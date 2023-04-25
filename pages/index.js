import React, { useEffect, useContext } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { AppSettings } from "../settings/app-settings"
import { Inter } from "@next/font/google"
import styles from "./../scss/style.module.scss"

const inter = Inter({ subsets: ["latin"] })

export default function Home(props) {
	const appSettings = useContext(AppSettings)
	// console.log(appSettings)
	const router = useRouter()

	useEffect(() => {
		let isSubscribed = true

		const initApp = () => {
			appSettings.appSidebarFunc(false)
			appSettings.appFooterFunc(false)
			appSettings.disableScrollY()
		}

		if (isSubscribed) {
			initApp()
		}

		return () => {
			isSubscribed = false
			appSettings.appSidebarFunc(true)
			appSettings.appFooterFunc(true)
			appSettings.enableScrollY()
		}
	}, [])

	return (
		<>
			<main className={`mx-auto bg-white ${styles.mainLogoContainer}`}>
				<div
					className={`${styles.containerLogoVM}`}
					onClick={() => {
						router.push("/home")
					}}
					role="button"
				>
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						// width="700px"
						// height="300px"
						viewBox="0 0 1024 272"
						className={`svg_title ${styles.svgTitleLogo}`}
					>
						<g id="Layer_1">
							<g>
								<g>
									<path
										className="path_try_1m"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M580,36c-8.4,4.1-12.1,12.5-16.9,19.6c-16.4,24.4-31.9,49.4-48.2,73.8c-12.3,18.3-24.9,36.4-38.8,53.7
				c-8.8,10.9-18.2,21.2-28.2,30.8c-5.6,5.3-11.8,9.8-18.9,13.1c-15.6,7.1-27.9-1.8-31-17.5c-2.9-14.4-2-28.7,0.1-43
				c2.1-13.9,4.6-27.7,9.5-41"
									/>
									<path
										className="path_try_2v"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M343.5,15c-9.9-11.4-22.4-10.1-35-6.4c-17.3,5.1-32.3,14.8-47,24.9c-19.3,13.3-37,28.5-54.6,43.9c-25.4,22.2-49.2,46.1-72.9,70.1
				c-12.7,12.9-25.2,26.1-37.5,39.5c-13.9,15.1-27.4,30.6-41.1,45.9c-1.9,2.1-3.9,4.2-7,4.5"
									/>
									<path
										className="path_try_2m"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M579.5,37.5c2.3,3.2,1,6.8,0.4,10c-3.9,19.6-8.1,39-12.4,58.5c-3.7,17-7.9,34-11.4,51c-1.7,8.4-3.6,16.8-3.6,25.5
				c0,2.4-0.3,5.3,2.1,6.3c2.1,0.9,4.4-0.3,6.5-1.8c9.3-7.1,16.7-16.1,23.9-25.1c20.4-25.4,40.7-51,61-76.5c2.1-2.6,3.9-5.4,6-8
				c1.5-1.8,3.3-3.5,6-3.5"
									/>
									<path
										className="path_try_1v"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M32.5,261.5c1-4.1,4.2-6.8,6.6-9.9c2.9-3.9,5.3-8,7.9-12.1c0.4-0.7,1-1.1,1-2c-0.4-13.5,5-26.1,5.5-39.5
				c0.3-7.8,1.5-15.7,1.9-23.5c0.9-17.9,0.4-35.7-1.5-53.5c-1.3-12.5-3.4-24.9-8.4-36.5c-0.9-2.1-2.1-4.2-3.5-6
				c-4.2-5.4-10.2-6-15.4-1.5c-7.5,6.4-12.1,14.9-16.5,23.5c-0.6,1.1-1.3,2-2,3"
									/>
									<path
										className="path_try_3m"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M664.7,62c-1.1,2-2.1,4.1-3.3,6c-1.9,3.1-3.7,5.8-3.3,10c0.3,3.2-1.8,6.7-3.2,10c-6.9,15.8-13,32-18,48.5
				c-3.3,10.8-5.8,21.7-6.5,33c-0.6,9.8,5.6,17.9,13,16.4c5.6-1.1,11.3-2.6,16.5-5c14.3-6.6,27.1-15.8,39.6-25.3
				c2.4-1.8,4.9-4.2,8.5-2.5"
									/>
									<path
										className="path_try_1d"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M722,160.5c-2.8-2-6.1-3.3-7.5-7c-1.1-3-4.1-1.8-5.3-0.9c-2.4,1.8-2.5,5.2-2.4,7.8c0.1,2.7,2.4,4.4,5.3,4.5c3.8,0.1,7.5,0,10-3.5
				c1.7-2.3,3.7-3.3,6.5-2c1.7,0.7,3.3,0.2,5,0.1c6.4-0.2,11.4-2.6,15.1-8c1.3-2,3.7-3.5,5.9-4.5c3.5-1.5,7-2.7,11-0.2
				c4.3,2.7,8.7,0.7,11.9-2.5c8.6-8.8,16.5-18.2,22.5-28.9c1.8-3.2,3.9-6.4,3.6-10.5c-0.3-4.9-2.9-6.8-7.6-5.5
				c-6.3,1.7-10.7,6.3-13.8,11.2c-6.8,11-12,22.8-10.7,36.4"
									/>
									<path
										className="path_try_1n"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M349,154c-4.1,2.5-7.4,6-11.9,8.2c-6.6,3.2-11.5,3-14.6-5.6c-2.3-6.5-2.9-6.4-9.5-3.6c-6.9,2.9-12.2,8.1-18.9,11.2
				c-7,3.2-8,2.8-8-4.6"
									/>
									<path
										className="path_try_2n"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M961.5,152c-2.7-7.8-5.5-6.8-13.5-4c-6.6,2.3-10.7,7.6-15.5,12c-3.2,2.9-7.5,3.4-11.5,3.9c-5.4,0.7-7.2-3.3-8.6-7.8
				c-1.6-5.1-3.8-5.6-8.9-3.6c-5.1,2-9.4,5.3-14,8.1c-2.1,1.2-3.9,2.8-6,3.9c-5.2,2.7-6.6,2.1-9-3.5"
									/>
									<path
										className="path_try_1er"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M848.5,153c-10,7.5-21,12.7-33.5,13.9c-9.2,0.9-10-0.2-12.5-7.4"
									/>
									<path
										className="path_try_1de"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M808.5,155c5.4,3.5,11,3.6,16.5,0.5c2-1.1,3.4-3.3,2.4-5.4c-0.9-1.8-2.8-3.4-5.4-3.1c-5,0.8-10,1.5-13.5,6
				c-4.3,5.6-10.5,8.6-17,9.8c-9.7,1.8-13.6-1-18-7.8c-0.8-1.2-1.7-2.3-2.5-3.5"
									/>
									<path
										className="path_try_1a"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M995,154c-4.9,2.8-9,6.8-14.4,9.2c-6.1,2.7-10.8-2.1-10.1-7.2c0.6-4.4-0.3-4.7-4.5-4.1c-7.1,1-11.5,7-18,9.2
				c-3.6,1.2-7,3-10.5,4.4c-3.1,1.3-5.6,0.8-6.5-3"
									/>
									<path
										className="path_try_1io"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M268,160.5c-2.9-2.2-6.9-3.3-7.5-7.7c-6.9-0.9-13.1,0.1-18.6,5.1c-2.8,2.5-6.4,4.3-10.3,5.3c-6.2,1.6-7.2,1.5-10-4.1"
									/>
									<path
										className="path_try_2d"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M769,152.5c-5.5,4.4-10.7,9.3-17.5,12.1c-7,2.9-9.6,2-10.5-5.1"
									/>
									<path
										className="path_try_1vi"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M201.5,146.5c-0.8,0.8-1.9,1.5-2.5,2.5c-3.3,6.3-12.9,14-19.6,14.9c-2.4,0.3-5.3,1-7-1.9c-1.3-2.1-0.8-3.9,0.4-6.1
				c0.6-1,1.1-2.3,1.7-3.4"
									/>
									<path
										className="path_try_1on"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M254,153.5c-0.2,0.7-0.4,1.3-0.5,2c-0.5,3.3-2.5,6.8,2,9c2.5,1.2,10.3,0.4,11.9-2.1c2.3-3.6,4.8-3.5,8.6-3.1
				c6.4,0.7,13.2,0.8,16.5-6.8"
									/>
									<path
										className="path_try_1rn"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M859.5,153.5c-4.8,0.9-2.3,4.7-2.3,7c0,2.2,2.1,3.9,4.8,3.5c8.3-1.2,15.9-3.7,20.5-11.5"
									/>
									<path
										className="path_try_2si"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M224.5,153.5c-2.8,7.4-10.5,6.9-16,10c-5.1,2.9-12,3.4-13.9,10.6c1.5,1.7,2.7,4.3,5.9,2.4c4.3-2.5,5.2-4.7,4-10"
									/>
									<path
										className="path_try_1si"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M198,154.5c3.1,2.7,5.3,6.1,7.5,9.5"
									/>
									<path
										className="path_try_1r"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M849.5,147.5c-1.5,1.3-0.8,2.9-1.1,4.6c3,0.8,5.8,1.6,8.6,2.4"
									/>
									<path
										className="path_try_1o"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M261.5,152c2-3.9,6-3.9,8.9-2.8c3.6,1.4,2.5,5.6,2.6,8.8"
									/>
									<path
										className="path_try_2o"
										fill="transparent"
										stroke="#000000"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit="10"
										d="
				M715.5,152c1-0.8,1.9-1.9,3-2.5c4.9-2.4,8.5-0.1,8.5,5.5c0,1.2,0,2.3,0,3.5"
									/>
								</g>
							</g>
						</g>
					</svg>
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1280 720"
						className={styles.svgTriangleLogo}
					>
						<line
							fill="none"
							stroke="#c7f2fd"
							strokeWidth="8"
							strokeMiterlimit="10"
							x1="429.4"
							y1="143.8"
							x2="813.6"
							y2="143.8"
						/>
						<line
							fill="none"
							stroke="#c7f2fd"
							strokeWidth="8"
							strokeMiterlimit="10"
							x1="429.4"
							y1="143.8"
							x2="620.9"
							y2="480.6"
						/>
						<line
							fill="none"
							stroke="#c7f2fd"
							strokeWidth="8"
							strokeMiterlimit="10"
							x1="813.6"
							y1="143.8"
							x2="620.9"
							y2="480.6"
						/>
					</svg>
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						// width="1300px"
						// height="700px"
						viewBox="0 0 1280 720"
						className={styles.svgTriangleLogo2}
					>
						<line
							fill="none"
							stroke="#e6e6e6"
							strokeWidth="3"
							strokeMiterlimit="10"
							x1="429.4"
							y1="143.8"
							x2="813.6"
							y2="143.8"
						/>
						<line
							fill="none"
							stroke="#e6e6e6"
							strokeWidth="3"
							strokeMiterlimit="10"
							x1="429.4"
							y1="143.8"
							x2="620.9"
							y2="480.6"
						/>
						<line
							fill="none"
							stroke="#e6e6e6"
							strokeWidth="3"
							strokeMiterlimit="10"
							x1="813.6"
							y1="143.8"
							x2="620.9"
							y2="480.6"
						/>
					</svg>
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						// width="1400px"
						// height="750px"
						viewBox="0 0 1280 720"
						className={styles.svgTriangleLogo3}
					>
						<line
							fill="none"
							stroke="#e6e6e6"
							strokeWidth="3"
							strokeMiterlimit="10"
							x1="429.4"
							y1="143.8"
							x2="813.6"
							y2="143.8"
						/>
						<line
							fill="none"
							stroke="#e6e6e6"
							strokeWidth="3"
							strokeMiterlimit="10"
							x1="429.4"
							y1="143.8"
							x2="620.9"
							y2="480.6"
						/>
						<line
							fill="none"
							stroke="#e6e6e6"
							strokeWidth="3"
							strokeMiterlimit="10"
							x1="813.6"
							y1="143.8"
							x2="620.9"
							y2="480.6"
						/>
					</svg>
				</div>
				<div className={styles.socialNetworkIndex}>
					<Link href="https://www.facebook.com/visionmoderna">
						<i className="fa-brands fa-facebook-f"></i>
					</Link>
					<br />
					<Link href="https://web.whatsapp.com/">
						<i className="fa-brands fa-whatsapp"></i>
					</Link>
					<br />
					<Link href="https://www.instagram.com/visionmoderna_vm">
						<i className="fa-brands fa-instagram"></i>
					</Link>
				</div>
			</main>
		</>
	)
}
