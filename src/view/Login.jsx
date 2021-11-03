import React from 'react';

import styles from './login.module.scss';
import '../common/Common.scss';


const Login = ({history}) => {
    return (
        <div className={styles.container}>
            <img src="img/logo.png" alt="logo" className={styles.logo} />
            
            <form className={styles.column}>
                <input name="id" type="text" placeholder="아이디"/>
                <input name="password" type="password" placeholder="비밀번호"/>
                <button className="btn-main btn-login">로그인</button>
            </form>
            <div className={styles.column}>
            
            <div className={`${styles.btnText} btn-text`} onClick={()=>history.push('/signup')}>처음이신가요?</div>
                <div className={`${styles.btnText} btn-text`}>비밀번호를 잊으셨나요?</div>
                </div>
        </div>
    );
};

export default Login;