import styles from './CountDown.module.css';
import { useEffect } from 'react';

const CountDown = ({ seconds, milisseconds, setSeconds, setMilisseconds, setCountDisplay, countDisplay, onCountDownFinish }) => {


    useEffect(() => {
        const countDownSec = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds > 0 ? prevSeconds -1 : 0)
        }, 1000)

        return () => {
            clearInterval(countDownSec)
        }
    }, [])

    useEffect(() => {

        if(seconds > 0) {
            const countDownMSec = setInterval(() => {
                setMilisseconds(prevMSeconds => prevMSeconds > 0 ? prevMSeconds - 1 : 59)
            }, 17)
    
            return () => {
                clearInterval(countDownMSec)
    
            }
        }else {
            setCountDisplay("none");
                
            onCountDownFinish();

        }

    }, [seconds])

    return ( 
        <div
            style={{display: countDisplay}} 
            className={styles.count_down}>{seconds}:{milisseconds}
        </div>
     );
}
 
export default CountDown;