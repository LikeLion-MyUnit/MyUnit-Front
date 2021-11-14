import React,{useEffect,useState} from 'react'
import Navbar from "../components/Navbar";
import styles from "./PostWrite.module.scss";

function PostWrite() {
    const [selectedFile,setSelectedFile] = useState(null);
    const handleFileChnage = (event)=>{
        setSelectedFile(event.target.files);
    }
    let newDate = new Date();
    let date =''
    let getdate = ()=>{
        if(newDate.getDate()<10){
            date =`0${newDate.getDate()}`}
        else{
            date = newDate.getDate();
    }};
    getdate();
    let month = newDate.getMonth()+1;
    let year = newDate.getFullYear();

    return (
        <div>
            <Navbar/>
            <div className={styles.container}>
            모집글 작성페이지.
            <form>
                <input type="text" placeholder="제목"/>
                <input type="text" placeholder="대회명"/>
                <textarea rows="10" cols="40" placeholder="내용"/>
                <label for="마감기한">마감기한</label>
                <input id="마감기한" type="date" min={`${year}-${month}-${date}`} />
                <br/>
                <label for="지역">지역</label>
                <select id="지역">
                    <option value="서울">서울</option>
                    <option value="부산">부산</option>
                    <option value="인천">인천</option>
                    <option value="대구">대구</option>
                    <option value="울산">울산</option>
                    <option value="대전">대전</option>
                    <option value="세종">세종</option>
                    <option value="강원">강원</option>
                    <option value="경기">경기</option>
                    <option value="충청">충청</option>
                    <option value="경상">경상</option>
                    <option value="전라">전라</option>
                    <option value="제주">제주</option>
                </select>
                <br/>
                <label for="대회분류">대회분류</label>
                <select id="대회분류">
                    <option value="기획/아이디어">기획/아이디어</option>
                    <option value="사진/영상">사진/영상</option>
                    <option value="디자인">디자인</option>
                    <option value="광고/마케팅">광고/마케팅</option>
                    <option value="과학/공학">과학/공학</option>
                    <option value="창업">창업</option>
                    <option value="기타">기타</option>
                </select>
                
                <input type="file" accept="image/jpg,image/png,image/jpeg,image/gif" onChange={handleFileChnage}/>
                
                <button type="submit" className="btn-main">작성완료</button>
            </form>
            </div>
        </div>
    )
}

export default PostWrite
