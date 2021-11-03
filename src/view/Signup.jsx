import React from 'react';

import '../common/Common.scss';
import styles from './login.module.scss';
const Signup = ({history}) => {
    return (
        <div className={styles.container}>
            <img src="img/logo.png" alt="logo" className={styles.logo} />
            <form className={styles.column}>
                    <input name="id" type="text" placeholder="아이디"/>
                    <input name="password" type="password" placeholder="비밀번호"/>
                    <input type="password" placeholder="비밀번호 확인"/>
            <button className="btn-main">회원가입</button>
            </form>
            <div className="btn-text"  onClick={()=>history.push('/login')}>이미 가입하셨나요?</div>
        </div>
    );
};

export default Signup;