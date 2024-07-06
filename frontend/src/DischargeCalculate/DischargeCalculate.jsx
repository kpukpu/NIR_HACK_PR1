import React, { useState } from 'react';
import axios from 'axios';

function DischargeCalculate() {
  const [startDate, setStartDate] = useState('');
  const [result, setResult] = useState('');

  const calculateDischargeDate = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/dischargedate/', {
        start_date: startDate
      });
      setResult(`예상 전역일: ${response.data.start_date}`);
    } catch (error) {
      console.error('There was an error!', error);
      setResult('전역일 계산 중 오류가 발생했습니다.');
    }
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
      <div id="result">{result}</div>
    </div>
  );
}

export default DischargeCalculate;