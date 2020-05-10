import React, { useState, useEffect } from 'react';
import './styles/Timer.css';

const Timer = (props) => {
    const usePreciseTimer = (handler, periodInMilliseconds, activityFlag) => {
        const [timeDelay, setTimeDelay] = useState(1);
        const savedCallback = useRef();
        const initialTime = useRef();
      
        useEffect(() => {
          savedCallback.current = handler;
        }, [handler]);
      
        useEffect(() => {
          if (activityFlag) {
            initialTime.current = new Date().getTime();
            const id = setInterval(() => {
              const currentTime = new Date().getTime();
              const delay = currentTime - initialTime.current;
              initialTime.current = currentTime;
              setTimeDelay(delay / 1000);
              savedCallback.current(timeDelay);
            }, periodInMilliseconds);
      
            return () => {
              clearInterval(id);
            };
          }
        }, [periodInMilliseconds, activityFlag, timeDelay]);
      };
      
    const CLASS_INIT = "mode-init";
    const CLASS_COUNTDOWN = "mode-ct";
    const CLASS_ON = "mode-on";
    const CLASS_OFF = "mode-off";
    const CLASS_END = "mode-end";
    

    /* timer parameters */
    const totalTime = (props.tOn + props.tOff) * props.nRep + 3;
    const [currentInfo, setCurrentInfo] = useState(0);
    const [currentRep, setCurrentRep] = useState(props.nRep);
    const [intervalId, setIntervalId] = useState('');
    const [timerClass, setTimerClass] = useState(CLASS_INIT);

    const [isActive, setIsActive] = useState(false);

    /* Reset effect, if u change exercise */
    // useEffect(() => {
    //     setCurrentInfo(0);
    //     setCurrentRep(props.nRep);
    //     setIntervalId('');
    //     setTimerClass(CLASS_INIT);
    // }, []);

    const init = () => {
        setCurrentInfo(5);
        setIsActive(true);
        setTimerClass(CLASS_COUNTDOWN);
        usePreciseTimer(preciseTimer, 1000, true);
    }

    const preciseTimer = () => {
        setCurrentInfo(currentInfo - 1);
        if(currentInfo == 0){
            setIsActive(false);
        }
    }

    const initialCountdown = () => {
        console.log(typeof(currentInfo));
        console.log(currentInfo);
        let ci, tc;
        if(currentInfo > 0){
            console.log('currentInfo > 0')
            ci = currentInfo - 1;
            tc = CLASS_COUNTDOWN;
        }else{
            console.log('else')
            clearInterval(intervalId);
            //Sound-here

            //setIntervalId(setInterval(timerOn, 1000));
            ci = totalTime;
            tc = CLASS_ON;
        }
        setCurrentInfo(ci);
        setTimerClass(tc);
    }

    const timerOn = () => {
        console.log('timerOn');
        let timeToOff = currentInfo - ((currentRep * (props.tOn + props.tOff)) - props.tOn);

        //Change to Off
        if(timeToOff <= 0){
            clearInterval(intervalId);
            //Sound-here
            setCurrentRep(currentRep - 1);
            setTimerClass(CLASS_OFF);
            setIntervalId(setInterval(timerOff, 1000));
        }
        setCurrentInfo(currentInfo - 1);
    }

    const timerOff = () => {
        console.log('timerOff');
        let ci, tc;
        let timeToOn = currentInfo - (currentRep * (props.tOn + props.tOff));

        //Continue
        if(timeToOn > 3){
            ci = currentInfo - 1;
            tc = CLASS_OFF;
        }
        
        //Begin Countdown to On
        else if(timeToOn > 0){
            //Sound-here
            ci = currentInfo - 1;
            tc = CLASS_COUNTDOWN;
        }
        
        //Change to On or change to End
        else{
            clearInterval(intervalId);
            let id;

            //Change to On
            if(currentInfo > 0){
                //Sound-here
                ci = currentInfo - 1;
                tc = CLASS_ON;
                id = setInterval(timerOn, 1000);
            }
            
            //Change to End
            else{
                //Sound-here
                ci = 0;
                tc = CLASS_END;
                id = setInterval(timerEnd, 5000);
            }
            setIntervalId(id);
        }
        setCurrentInfo(ci);
        setTimerClass(tc);
    }

    const timerEnd = () => {
        console.log('timerEnd');
        clearInterval(intervalId);

        setCurrentInfo('Volver a realizar Rutina');
        setCurrentRep(props.nRep);
        setIntervalId('');
        setTimerClass(CLASS_INIT);
    }

    return (
        <div className="timer">
            <div className={timerClass}>{currentInfo}</div>
            <button onClick={init}>Realizar rutina</button>
        </div>
    );
}

export default Timer;