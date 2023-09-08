import logo from '../Navbar/Airbnb-logo.jpg'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav>
      <img className={styles.nav} src={logo} alt="" />
    </nav>
  );
}