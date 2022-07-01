import Head from 'next/head'
import '../styles/globals.css'
import '../styles/theme.css'
import App from 'next/app'
import { useEffect, useRef } from 'react'
import Router, { useRouter } from 'next/router'
// import FullPageLoader from '../components/loader/FullPageLoader'
function MyApp({ Component, pageProps }) {
  // const loaderRef = useRef()
	// useEffect(() => {
	// 	loaderRef.current.loader(false)
	// }, [])
	// Router.onRouteChangeStart = (url, pageProps) => {
	// 	loaderRef.current.loader(true)	
	// };
	
	// Router.onRouteChangeComplete = (url) => {
	// 	loaderRef.current.loader(false)
	// }

    return (
        <>
            <Head>
                <title>My Resume</title>
                <meta name="Description" content="APP" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="" /> */}
            </Head>
            <Component {...pageProps} />
            {/* <FullPageLoader ref={loaderRef}/> */}
        </>
    )
}

export default MyApp