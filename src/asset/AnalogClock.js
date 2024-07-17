import React, { useEffect, useState, useRef } from 'react';
import './speed-slider.css';

const AnalogClock = ({ speed }) => {
    const [time, setTime] = useState(() => {
        const now = new Date();
        return new Date(now.getTime() - 120 * 60 * 1000); // Start 120 minutes before current time
    });
    const intervalRef = useRef(null);
  
    useEffect(() => {
        const startTime = new Date(new Date().getTime() - 120 * 60 * 1000); // 120 minutes before current time
        const targetTime = new Date(); // Current time
        setTime(startTime);
    
        const tick = () => {
            setTime((prevTime) => {
                const newTime = new Date(prevTime.getTime() + 1000 * speed);
                if (newTime >= targetTime) {
                    clearInterval(intervalRef.current);
                    return targetTime;
                }
                return newTime;
            });
        };
    
        intervalRef.current = setInterval(tick, 1000 / speed);
        return () => clearInterval(intervalRef.current);
    }, [speed]);
  
    const getClockHands = () => {
        const seconds = time.getSeconds();
        const minutes = time.getMinutes();
        const hours = time.getHours();
        return {
            secondHand: 360 - (seconds / 60) * 360,
            minuteHand: 360 - ((minutes / 60) * 360 + (seconds / 60) * 6),
            hourHand: 360 - ((hours % 12 / 12) * 360 + (minutes / 60) * 30),
        };
    };
  
    const { secondHand, minuteHand, hourHand } = getClockHands();
  
    const numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  
    return (
        <div className="clock">
            {numbers.map((number, index) => (
                <div key={index} className="number">{number}</div>
            ))}
            <div className="hand hour" style={{ transform: `rotate(${hourHand}deg)` }} />
            <div className="hand minute" style={{ transform: `rotate(${minuteHand}deg)` }} />
            <div className="hand second" style={{ transform: `rotate(${secondHand}deg)` }} />
        </div>
    );
};
  
export default AnalogClock;