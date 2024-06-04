import { useState } from "react";
import styles from './SignUp.module.css'
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const naviagate = useNavigate();

  const benefits = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  function handleSubmit(e){
    e.preventDefault()
    let input = e.target.elements[0]

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if(!regex.test(mail)){
      setValidMail(true)
      input.style.color = 'red';
      input.style.backgroundColor = 'hsla(4, 100%, 67%, 0.295)'
      input.style.outline = '1px solid red'
      return
      
    }else{
      setValidMail(false)
      const data = mail;
      setMail('')
      input.style.color = '';
      input.style.backgroundColor = ''
      input.style.outline = ''
      naviagate("/success",{state: data})
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header_image}></div>
      <div className={styles.signup_body}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          {benefits.map((benefit, index) => {
            return (
              <li key={index}>
                <img alt="" src="../images/icon-list.svg" />
                {benefit}
              </li>
            );
          })}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className={styles.labels}>
            <span>Email Address</span>
            {validMail && (
              <span style={{ color: "red" }}>Valid email required</span>
            )}
          </div>
          <input 
            type="email" 
            placeholder="email@company.com" 
            value={mail}
            onChange={(e)=>setMail(e.target.value)}
          />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </div>

    </div>
  );
}

export default SignUp;
