import React, { useState } from 'react';

function DischargeCalculate() {
  const [startDate, setStartDate] = useState('');
  const [result, setResult] = useState('');

  const calculateDischargeDate = () => {
    const startDateObj = new Date(startDate);
    const serviceMonths = 18; // 육군 복무 기간

    const dischargeDate = new Date(startDateObj.setMonth(startDateObj.getMonth() + serviceMonths));
    const today = new Date();
    const remainingDays = Math.ceil((dischargeDate - today) / (1000 * 60 * 60 * 24));

    const formattedToday = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    const formattedDischargeDate = `${dischargeDate.getFullYear()}년 ${dischargeDate.getMonth() + 1}월 ${dischargeDate.getDate()}일`;

    setResult(`오늘날짜: ${formattedToday}<br>예상 전역일: ${formattedDischargeDate}<br>남은 복무일수: ${remainingDays}일`);
  };
 
  return (
    <div>
      <p><b>전역일 계산기</b></p>
      <label htmlFor="startDate">복무 시작일:</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <button
        style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}
        onClick={calculateDischargeDate}
      >
        전역일 계산하기
      </button>
      <div id="result" dangerouslySetInnerHTML={{ __html: result }}></div>
    </div>
  );
}

export default DischargeCalculate;
