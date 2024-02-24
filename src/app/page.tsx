import Image from "next/image";

const options = [
  { value: "line", label: "折れ線グラフ" },
  { value: "bar", label: "棒グラフ" },
  { value: "pie", label: "円グラフ" },
];

export default function Home() {
  return (
      <div style={{textAlign:'center'}}>
        <h1 className="sa">さたやす</h1>
        {/* 行を合わせたいぜ*/}
      <label>学年<input type="text" style={{ padding: "7px" }}></input></label><br />
      <label>名前<input type="text" style={{padding:"7px"}}></input></label><br/>
      <label>日付<input type="text" style={{ padding: "7px" }}></input></label><br />
      <label>教科<input type="text" style={{padding:"7px",marginTop:"4px"}}></input></label><br/>
      <label>理由<input type="text" style={{ padding: "7px", marginTop: "4px" }}></input></label><br />
      <div className="select">
      <select name="kyouka" id="pet-select">
        <option selected disabled>選んでね</option>
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
        <button>送信</button>
      </div>
  );
}
