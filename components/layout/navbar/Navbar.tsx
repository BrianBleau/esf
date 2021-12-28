import styles from './Navbar.module.scss'
import {slide as Menu} from 'react-burger-menu';
import Link from 'next/link';

export default function Navbar(props: any) {

    return(
        <nav className={styles.navContainer}>
            <span className={styles.navTitle}>ESF</span>
            <Menu right {...props}>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
                <Link href={'/services'}>
                    <a>Services</a>
                </Link>
            </Menu>
        </nav>
    )
}