"use client"

import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';

console.log(process.env.NEXT_PUBLIC_APP_APIKEY);
console.log(process.env.NEXT_PUBLIC_APP_APITOKEN);
console.log(process.env.NEXT_PUBLIC_APP_APILIST);



const options = [
  { value: "line", label: "折れ線グラフ" },
  { value: "bar", label: "棒グラフ" },
  { value: "pie", label: "円グラフ" },
];

export default function Home() {
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
        </div>
      {/* react input セレクトボックス */}
        <button onClick={handleCreateCard}>送信</button>
      </div>
  );
}
