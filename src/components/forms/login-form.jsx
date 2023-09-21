import styles from "../../styles/components/forms/login-form.module.css";
import  '../../css/login.css';
const LoginForm = () => {
    return (
        <div>
        <div className="login-container">
              <div className="login-box">
                <h2 className="login-title">INFRASIGHT</h2>
                <form className="login-form">
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" className="login-button">
                    Login
                  </button>
                </form>
              </div>
            </div>            
        </div>
    );
}

export default LoginForm;
