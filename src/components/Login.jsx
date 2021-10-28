import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <img src="img/logo.png" alt="logo" className="logo" />
            <form className="authForm">
                <div className="input-id">
                    <input name="id" type="text" placeholder="아이디"/>
                </div>
                <div className="input-password">
                    <input name="password" type="text" placeholder="비밀번호"/>
                </div>
            </form>
            <div className="btn-login">로그인</div>

            <div className="btn-signup">처음이신가요?</div>
            <div className="btn-forgottenpwd">비밀번호를 잊으셨나요?</div>
        </div>
    );
};

export default Login;