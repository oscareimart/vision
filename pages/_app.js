import React, { useState, useEffect } from "react"

import { AppSettings } from "../settings/app-settings"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./../styles/style.css"
import "./../styles/global.scss"
import Layout from "../components/Layout"

function App({ Component, pageProps }) {
	const [appSidebar, setAppSidebar] = useState(false)
	const [appFooter, setAppFooter] = useState(false)

	const disableScrollY = () => {
		document.body.style.overflowY = "hidden"
	}

	const enableScrollY = () => {
		document.body.style.overflowY = "visible"
	}

	useEffect(() => {
		let isSubscribed = true

		if (isSubscribed) {
			require("bootstrap/dist/js/bootstrap.bundle.min.js")
		}

		return () => {
			isSubscribed = false
		}
	}, [])

	return (
		<AppSettings.Provider
			value={{
				appSidebar: appSidebar,
				appSidebarFunc: (dat) => setAppSidebar(dat),
				appFooter: appFooter,
				appFooterFunc: (dat) => setAppFooter(dat),
				disableScrollY: () => disableScrollY(),
				enableScrollY: () => enableScrollY(),
			}}
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppSettings.Provider>
	)
}

export default App
