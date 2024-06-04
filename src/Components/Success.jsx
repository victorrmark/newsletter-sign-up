import { useLocation, Link } from "react-router-dom";
import styles from './Success.module.css'

function Success() {
    const location = useLocation()
    
  return (
    <div className={styles.container}>
      <div>
        <img alt='' src='../images/icon-success.svg'/>
        <h1>Thanks for subscribing!</h1>
        <p className={styles.text}>  
          A confirmation email has been sent to <span>{location.state}</span>. Please open
          it and click the button inside to confirm your subscription.
        </p>
      </div>
      <Link to='/'>
        <button className={styles.button}>Dismiss message</button>
      </Link>

      <div className="attribution">
        Challenge by 
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        <p>Coded by <a href="https://www.github.com/victorrmark" target="_blank">Victor Mark</a>.</p>
      </div> 
    </div>
  );
}

export default Success;
