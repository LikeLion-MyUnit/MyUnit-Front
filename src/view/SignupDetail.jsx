import React from 'react';


import './signupDetail.scss';

const SignupDetail = ({history}) => {
    return (
        <div className="container">
            <p className="alert">프로필을 자세히 쓸수록 모집 / 초대 확률이 높아져요</p>
            <div className="profile-box">
                <div className="profile-box__pic">
                    <img src="http://placehold.jp/50x50.png" alt="" />
                </div>
                
        <button>닉네임 변경</button>
            </div>
            <div className="select-container">
                <select name="age" className="select-box">
                    <option value="" disabled selected>나이</option>
                    {/* 나이 셀렉트 */}
                </select>
                <select name="gender" className="select-box">
                <option value="" disabled selected>성별</option>
                    {/* 성별 셀렉트 */}
                </select>
                <select name="area" className="select-box">
                <option value="" disabled selected>지역</option>
                    {/* 지역 셀렉트 */}
                </select>
                <select name="interest" className="select-box">
                <option value="" disabled selected>관심 분야</option>
                    {/* 관심 분야 셀렉트 */}
                </select>
            </div>
            <div className="input-container">
                <div className="input-box">
                    <p>자기소개</p>
                    <hr />
                    <textarea name="intro" cols="30" rows="10"></textarea>
                </div>
                <div className="input-box">
                    <p>가능한 역할 / 기술</p>
                    <hr />
                    <textarea name="stack" cols="30" rows="10"></textarea>
                </div>
                <div className="input-box">
                    <p>포트폴리오</p>
                    <hr />
                    <textarea name="portfolio" cols="30" rows="10"></textarea>
                </div>
                <div className="add-box">
                    <p>수상/자격증/어학</p>
                    <hr />
                    <button className="btn-add">추가</button>
                </div>
            </div>
            <hr />
            <button className="btn-later" onClick={()=>history.push('/welcome')}>나중에 할게요</button>
            <button className="btn-finish">작성완료</button>
        </div>
    );
};

export default SignupDetail;