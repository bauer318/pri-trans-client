import React, {useEffect, useState} from 'react';

const TimerComponent = ({expireAt, callBack}) => {
    const calculateTimeLeft = () => {
        const currentTime = Date.now();
        const difference = expireAt - currentTime;

        return difference > 0 ? Math.floor(difference / 1000) : 0;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        if (timeLeft === 0) {
            callBack();
            return;
        }

        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft, expireAt]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;
        return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
    };

    return (
        <i>   {formatTime(timeLeft)}   </i>
    );
};

export default TimerComponent;