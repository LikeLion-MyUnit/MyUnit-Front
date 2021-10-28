import React from 'react';

const Welcome = () => {
    return (
        <div className="container">
            {/* 로고 short version 넣기 */}
            <h1 className="welcome">에 오신 것을 환영합니다!</h1>
            <button className="btn-findteam">팀원 찾기</button>
        </div>
    );
};

export default Welcome;