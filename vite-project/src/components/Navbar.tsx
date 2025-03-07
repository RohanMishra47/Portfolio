import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar: React.FC = () => {
    return(
        <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Navbar;