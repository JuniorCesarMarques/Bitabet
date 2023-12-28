import { useEffect } from 'react';
import styles from './Chronometer.module.css';

const Chronometer = ({ integer, decimal, setInteger, setDecimal, intervalTime, condition, setIntervalTime, stylesChronometer }) => {


    useEffect(() => {
        if(intervalTime > 30) {
            const intervalIntervalTime = setInterval(() => {
                setIntervalTime(intervalTime - 15)
            }, 5000);

            return () => clearInterval(intervalIntervalTime);
        }
    }, [intervalTime]);

    useEffect(() => {
        if(condition){
            const intervalDecimal = setInterval(() => {
                setDecimal(decimal + 1)
            }, intervalTime)
    
            return () => clearInterval(intervalDecimal);
        }
        
    }, [decimal]);

    useEffect(() => {
        if(decimal === 99) {
            setDecimal(0)
            setInteger(integer + 1);
        }
    }, [decimal])

    let formatedDecimal = decimal.toString().padStart(2, '0');

    return ( 
            <div
            style={stylesChronometer}
             className={styles.container_chronometer}>
                <h1 className={styles.title}>Pagamento autal</h1>
                 <div className={styles.chronometer}>
                    {integer},{formatedDecimal}X
                </div>
            </div>
     );
}
 
export default Chronometer;