import {Outlet, Link} from "react-router-dom";
import styles from "../css/my-style.module.css";
import '../css/my-sass.scss';

const Layout = () => {
    return(
        <div>
            <h1>Hey</h1>
            <nav className={styles.text}>
                <ul>
                    <li>
                        <Link style={{color: 'red', textDecoration: 'none'}} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={styles.text} to="/app">App</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
};

export default Layout;