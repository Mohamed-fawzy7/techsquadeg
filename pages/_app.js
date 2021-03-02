import Nav from '../components/Nav';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
