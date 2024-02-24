"use client"

import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';



export default function Home() {
  const [cardName, setCardName] = useState('');

  const handleCreateCard = async () => {
    try {
      const response = await axios.post(
        'https://api.trello.com/1/cards?key=process.env.REACT_APP_APIKEY&token=process.env.REACT_APP_APITOKEN&idList=process.envREACT_APP_APILIST',
        {}
      );

      console.log('Card created successfully:', response.data);
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };
  return (
      <div style={{textAlign:"center"}}>
        <h1>さたやす</h1>
        {/* 行を合わせたいぜ*/}
        <label>日付<input type="text" style={{padding:"7px"}}></input></label><br/>
        <label>教科<input type="text" style={{padding:"7px",marginTop:"4px"}}></input></label><br/>
        <label>理由<input type="text" style={{padding:"7px",marginTop:"4px"}}></input></label><br/>
        <button>送信</button>

      </div>
  );
}
