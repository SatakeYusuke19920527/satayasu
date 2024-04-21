"use client"
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';
import React, { Component } from "react";
import Select from "react-select";
import { createCard } from "./models/api/createCardApplicationService";
import { serializePageInfos } from "next/dist/build/utils";


export default function Home() {
  const [cardName, setCardName] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [day, setDay] = useState('');
  const [reason, setReason] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');
  const sendCardName = day + " " + cardName + " " + subject + " " 
  const sendDescName = reason + '\n' + grade + '\n' + schoolName;

  const handleCreateCard = async () => {
    if(day == "" || cardName == "" || subject == "" || reason == "" || grade == "" || schoolName == ""){
      setSuccessText("")
      setErrorText("全て入力してください")
    }else{
    console.log(sendCardName,sendDescName)
    createCard({sendCardName,sendDescName})
    setErrorText("")
    setSuccessText("送信しました")
    }
  };

  return (
      <div className="da" style={{textAlign:'center'}}>
        <h1 className="sa">佐竹塾欠席連絡サイト</h1>
        <h3 className="sa">さたやす</h3>
        {/* 行を合わせたいぜ*/}

      <label>学校<input type="text" style={{ padding: "7px" ,marginTop:"4px"}} value={schoolName} onChange={(e) => setSchoolName(e.target.value)}></input></label><br />
      <label>学年<input type="text" style={{ padding: "7px" ,marginTop:"4px"}} value={grade} onChange={(e) => setGrade(e.target.value)}></input></label><br />
      <label>名前<input type="text" style={{padding:"7px" ,marginTop:"4px"}} value={cardName} onChange={(e) => setCardName(e.target.value)}></input></label><br/>
      <label>日付<input type="text" style={{ padding: "7px" ,marginTop:"4px"}} value={day} onChange={(e) => setDay(e.target.value)}></input></label><br />
      <label>教科<input type="text" style={{padding:"7px",marginTop:"4px"}} value={subject} onChange={(e) => setSubject(e.target.value)}></input></label><br/>
      <label>理由<input type="text" style={{ padding: "7px", marginTop: "4px" }} value={reason} onChange={(e) => setReason(e.target.value)}></input></label><br />
      
        <p>{errorText}{successText}</p>
        <button className="button" onClick={handleCreateCard}>送信</button>
    </div>
  );
}
