import Link from 'next/link';
import styles from '../styles/Nav.module.css'
export default function Nav() {
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-success">
            <div className="container">
                <Link href="/"><a className="navbar-brand">Newsbuzz</a></Link>
                
                <form className={ `form-inline my-2 my-lg-0 ${styles['search-form']}`}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search league or team" aria-label="Search" />
                </form>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item`}>
                            <Link href="/login"><a className={`nav-link ${styles.login}`}>login</a></Link>
                        </li>
                        <li className="nav-item register">
                            <Link href="/register"><a className={`nav-link ${styles.register}`}>register</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
