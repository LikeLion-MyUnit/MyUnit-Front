import React from 'react';
import '../common/textArea.scss';

const Signup = () => {
    return (
        <div className="container">
            <img src="img/logo.png" alt="logo" className="logo" />
            <form className="authForm">
                <div className="input-id">
                    <input name="id" type="text" placeholder="아이디"/>
                </div>
                <div className="input-password">
                    <input name="password" type="password" placeholder="비밀번호"/>
                </div>
                <div className="input-password">
                    <input name="rePassword" type="password" placeholder="비밀번호 확인"/>
                </div>
            </form>
            <div className="btn-signup">회원가입</div>

            <div className="btn-login">이미 가입하셨나요?</div>
        </div>
    );
};

export default Signup;