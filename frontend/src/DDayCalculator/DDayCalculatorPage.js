import React, {useState} from 'react';
import axios from 'axios';

function DDayCalculatorPage() {
    const [targetDate, setTargetDate] =useState('');
    const [daysLeft, setDaysLeft] = useState(null);
    const [error, setError] = useState(null);

    const calculateDday = async () => {
        try{
            const response = await axios.post('http://localhost:8000/api/calculate_dday/', {
                target_date: targetDate
            });
            setDaysLeft(response.data.days_left);
            setError(null);
        } catch(err) {
            setError(err.response.data.error);
            setDaysLeft(null);
        }
    };

    return(
        <div>
            <h1>디데이 계산기</h1>
            <input 
                type="date" 
                value={targetDate} 
                onChange={(e) => setTargetDate(e.target.value)}
            />
            <button onClick={calculateDday}>계산</button>
            {daysLeft !== null && <h2>남은 날짜 : {daysLeft}</h2>}
            {error && <h2>에러: {error}</h2>}
        </div>
    );
}

export default DDayCalculatorPage;