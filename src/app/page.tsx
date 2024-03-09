"use client"
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';


import Image from "next/image";
import React, { Component } from "react";
import Select from "react-select";

export default function Home() {
  const optiongakunen = [
    { value: "syouiti", label: "小学1年生" },
    { value: "syouni", label: "小学2年生" },
    { value: "syousan", label: "小学3年生" },
    { value: "syouyon", label: "小学4年生" },
    { value: "syougo", label: "小学5年生" },
    { value: "syouroku", label: "小学6年生" },
    { value: "tyuuiti", label: "中学1年生" },
    { value: "tyuuni", label: "中学2年生" },
    { value: "tyuusan", label: "中学3年生" },
    { value: "kouiti", label: "高校1年生" },
    { value: "kouni", label: "高校2年生" },
    { value: "kousan", label: "高校3年生" },
    { value: "syakaizin", label: "社会人" }
  ];
  const optiontuki = [
    { value: "itigatu", label: "1月" },
    { value: "nigatu", label: "2月" },
    { value: "sangatu", label: "3月" },
    { value: "sigatu", label: "4月" },
    { value: "gogatu", label: "5月" },
    { value: "rokugatu", label: "6月" },
    { value: "nanagatu", label: "7月" },
    { value: "hatigatu", label: "8月" },
    { value: "kugatu", label: "9月" },
    { value: "juugatu", label: "10月" },
    { value: "juuitigatu", label: "11月" },
    { value: "juunigatu", label: "12月" }
  ];
   const optionhi = [
    { value: "iti", label: "1" },
    { value: "ni", label: "2" },
    { value: "san", label: "3" },
    { value: "yon", label: "4" },
    { value: "go", label: "5" },
    { value: "roku", label: "6" },
    { value: "nana", label: "7" },
    { value: "hati", label: "8" },
    { value: "kyuu", label: "9" },
    { value: "juu", label: "10" },
    { value: "juuiti", label: "11" },
    { value: "juuni", label: "12" },
    { value: "juusan", label: "13" },
    { value: "juuyon", label: "14" },
    { value: "juugo", label: "15" },
    { value: "juuroku", label: "16" },
    { value: "juunana", label: "17" },
    { value: "juuhati", label: "18" },
    { value: "juukyuu", label: "19" },
    { value: "nijuu", label: "20" },
    { value: "nijuuiti", label: "21" },
    { value: "nijuuni", label: "22" },
    { value: "nijuusan", label: "23" },
    { value: "nijuuyon", label: "24" },
    { value: "nijuugo", label: "25" },
    { value: "nijuuroku", label: "26" },
    { value: "nijuunana", label: "27" },
    { value: "nijuuhati", label: "28" },
    { value: "nijuukyu", label: "29" },
    { value: "sanjuu", label: "30" },
    { value: "sanjuuiti", label: "31" }
  ];
  const optionkyouka = [
    { value: "kokugo", label: "国語" },
    { value: "sannsuu", label: "算数" },
    { value: "suugaku", label: "数学" },
    { value: "eigo", label: "英語" },
    { value: "rika", label: "理科" },
    { value: "syakai", label: "社会" },
    { value: "puroguraminngu", label: "プログラミング" },

  ];
  const [cardName, setCardName] = useState('');
  const [grade, setGrade] = useState('');
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [reason, setReason] = useState('');



  const handleCreateCard = async () => {
    
    try {
      setCardName(cardName + grade + name + day + reason)
      const response = await axios.post(
        `https://api.trello.com/1/cards?key=${process.env.NEXT_PUBLIC_APP_APIKEY}&token=${process.env.NEXT_PUBLIC_APP_APITOKEN}&name=${cardName}&idList=${process.env.NEXT_PUBLIC_APP_APILIST}`
,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
        }
    });

      console.log('Card created successfully:', response.data);
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  return (
      <div style={{textAlign:'center'}}>
        <h1 className="sa">さたやす</h1>
        {/* 行を合わせたいぜ*/}

      <label>学年<input type="text" style={{ padding: "7px" }} value={grade} onChange={(e) => setGrade(e.target.value)}></input></label><br />
      <label>名前<input type="text" style={{padding:"7px"}} value={name} onChange={(e) => setName(e.target.value)}></input></label><br/>
      <label>日付<input type="text" style={{ padding: "7px" }} value={day} onChange={(e) => setDay(e.target.value)}></input></label><br />
      <label>教科<input type="text" style={{padding:"7px",marginTop:"4px"}}></input></label><br/>
      <label>理由<input type="text" style={{ padding: "7px", marginTop: "4px" }} value={reason} onChange={(e) => setReason(e.target.value)}></input></label><br />
      <div className="select">

      <select name="kyouka" id="pet-select">
        <option disabled>選んでね</option>
        <option value="kokugo">国語</option>
        <option value="sannsuu">算数</option>
        <option value="suugaku">数学</option>
        <option value="rika">理科</option>
        <option value="syakai">社会</option>
        <option value="eigo">英語</option>
        <option value="eiken">英検</option>
        <option value="programing">プログラミング</option>
        </select>
        <select name="gakunen" id="pet-select">
        <option selected disabled>選んでね</option>
        <option value="kokugo">小学1年生</option>
        <option value="sannsuu">小学2年生</option>
        <option value="suugaku">小学3年生</option>
        <option value="rika">小学4年生</option>
        <option value="syakai">小学5年生</option>
        <option value="eigo">小学6年生</option>
        <option value="eiken">小学1年生</option>
        <option value="programing">プログラミング</option>
        </select>
      </div> */}
      <div className="wa">
      <div><label>名前</label><input type="namae" className="namae" placeholder="名前を入力してください"/></div>
        <div><label>学年<Select options={optiongakunen} className="gakunen" placeholder="学年を入力してください"/></label></div>
        
        {/* <div><label>日付<Select options={optiontuki} className="tuki" placeholder="日付を入力してください" /><Select options={optionhi} className="hi" placeholder="教科を入力してください" /></label></div> */}
        <div><label>日付<div className='hizuke'>
          <Select options={optiontuki} className="hizukee" placeholder="日付" />
          <Select options={optionhi} className="hizukee" placeholder="日" /></div></label></div>
        <div><label>教科<div className='kyoukaa'><Select options={optionkyouka} className="kyouka" placeholder="教科を入力してください" /></div></label></div>
        <div><label>理由<div><input type="namae" className="riyuu" placeholder="理由を入力してください" /></div></label></div>
      {/* react input セレクトボックス */}

        <button onClick={handleCreateCard}>送信</button>

      {/* いい感じのサイト　https://qiita.com/Hitomi_Nagano/items/c00df24dc24e0329167d */}
        </div>

      </div>
  );
}
