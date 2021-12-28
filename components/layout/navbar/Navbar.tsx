import styles from './Navbar.module.scss'
import {slide as Menu} from 'react-burger-menu';

export default function Navbar(props: any) {

    return(
        <nav className={styles.navContainer}>
            <span className={styles.navTitle}>ESF</span>
            <Menu right {...props}>
                <a href="/">Home</a>
                <a href="/services">Services</a>
            </Menu>
        </nav>
    )
}