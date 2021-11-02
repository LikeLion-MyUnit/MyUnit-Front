import React from 'react';
import '../common/TextArea.module.scss'
import { textbutton } from '../componants/TextButton';

const Signup = ({history}) => {
    return (
        <div className="container">
            <img src="img/logo.png" alt="logo" className="logo" />
            
            <form className="column">
                <div className="input-id">
                    <input name="id" type="text" placeholder="아이디"/>
                </div>
                <div className="input-password">
                    <input name="password" type="password" placeholder="비밀번호"/>
                </div>
                <div className="input-password">
                    <input name="rePassword" type="password" placeholder="비밀번호 확인"/>
                </div>
            <button className="btn-signup">회원가입</button>
            </form>
            
            

            <textbutton className="btn-login"  onClick={()=>history.push('/')}>이미 가입하셨나요?</textbutton>
        </div>
    );
};

export default Signup;