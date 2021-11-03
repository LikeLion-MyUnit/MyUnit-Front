import React from 'react';

import styles from './login.module.scss';
import '../common/Common.scss';
import { textbutton } from '../components/TextButton';


const Login = ({history}) => {
    return (
        <div className={styles.container}>
            <img src="img/logo.png" alt="logo" className={styles.logo} />
            
            <form className={styles.column}>
                <input name="id" type="text" placeholder="아이디"/>
                <input name="password" type="password" placeholder="비밀번호"/>
                <button className="btn-login btn-main">로그인</button>
            </form>
            <div className={styles.column}>
            
            <textbutton onClick={()=>history.push('/signup')}>처음이신가요?</textbutton>
                <textbutton>비밀번호를 잊으셨나요?</textbutton>
                </div>
        </div>
    );
};

export default Login;