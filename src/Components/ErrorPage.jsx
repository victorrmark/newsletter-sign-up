import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <img src='../images/404-image.jpg'/>
            <div className={styles.content}>
                <h1>404</h1>
                <p>The requested Page cannot be found</p>
            </div>
            <Link to="/" className={styles.button}>Go Home</Link>
        </div>
    )
}

export default ErrorPage