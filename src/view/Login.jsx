import React from 'react';

import '../common/Button.module.scss'
import '../common/Input.module.scss'
import { textbutton } from '../componants/TextButton';
import './login.scss';

const Login = ({history}) => {
    return (
        <div className="container">
            <img src="img/logo.png" alt="logo" className="logo" />
            
            <form className="column">
                <div className="input-box">
                    <input name="id" type="text" placeholder="아이디"/>
                </div>
                <div className="input-box">
                    <input name="password" type="password" placeholder="비밀번호"/>
                </div>
                <button className="btn-login">로그인</button>
            </form>
            <div className="column">
                
            <textbutton className="text-btn-signup" onClick={()=>history.push('/signup')}>처음이신가요?</textbutton>
                <textbutton className="text-btn-forgottenpwd">비밀번호를 잊으셨나요?</textbutton>
                </div>
        </div>
    );
};

export default Login;