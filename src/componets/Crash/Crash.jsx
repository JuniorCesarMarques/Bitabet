import styles from './Crash.module.css';
import background from '../../Crash/img/background.svg';
import rocket from '../../Crash/img/foguete.svg';
import explodedRocket from '../../Crash/img/explodedrocket.png';
import elements from '../../Crash/img/elements.svg';
import fire from '../../Crash/img/fire.gif';
import bang from '../../Crash/img/bang.gif';

import { useContext, useState, useEffect } from 'react';
import CountDown from './Count_down/CountDown';
import Chronometer from './Chronometer/Chronometer';
import Container from '../Crash/container/Container'
import Controls from './Controls/Controls';
import { HeaderContext } from '../../contexts/HeaderContext';

const Crash = () => {

    // Header context
    const {totalValue, setTotalValue} = useContext(HeaderContext);

    // States of chronometer
    const [condition, setCondition] = useState(true);
    const [intervalTime, setIntervalTime] = useState(166);
    const [stylesChronometer, setStylesChronometer] = useState({display: "none"})
    const [integer, setInteger] = useState(1);
    const [decimal, setDecimal] = useState(0);

    // States of countdown
    const [seconds, setSeconds] = useState(5);
    const [milisseconds, setMilisseconds] = useState(59);
    const [countDisplay, setCountDisplay] = useState("block");

    const [animationState, setAnimationState] = useState("");

    const [animationColor, setAnimationColor] = useState("");
    const [animationRocket, setAnimationRocket] = useState("");
    const [animationElements, setAnimationElements] = useState("");
    const [animationBackground, setAnimarionbackgound] = useState("")

    const [rocketDisplay, setRocketDisplay] = useState("block");
    const [explodedRocketDisplay, setExplodedRocketDisplay] = useState("none");

    const [explosionDisplay, setExplosionDisplay] = useState("none");

    const explodeRocket = () => {

        // Set chronometer styles
        setStylesChronometer({color: "red"})

        // Stop chronometer
        setCondition(false);

        // Add explosion gif
        setExplosionDisplay("block");

        // Pause animations
        setAnimationState("paused");

        // Change rockets after half a second
        setTimeout(() => {
            setRocketDisplay("none");
            setExplodedRocketDisplay("block");
        }, 500);

        // remove explosion gif after 1 second
        setTimeout(() => {
            setExplosionDisplay("none");
        }, 1000);

        // Reset everything after 3 seconds
        setTimeout(() => {

            // Add countdown
            setCountDisplay("block");
            setSeconds(5);

            // Reset Animations
            setAnimationColor("");
            setAnimationRocket("");
            setAnimationElements("");
            setAnimarionbackgound("");

            // Unchange rockets
            setRocketDisplay("block");
            setExplodedRocketDisplay("none");

            // Hide chronometer
            setStylesChronometer({display: "none"});

        // Call function to restart the game after 5 seconds
        setTimeout(() => {
            startGame();
        }, 5000);

        }, 3000);

    }


    const startGame = () => {

        // 
        setTimeout(() => {
            explodeRocket();
        }, 15000)


        // Reset animation's state
        setAnimationState("running");

        // Add all animations to restart 
        setAnimationColor("animation_color");
        setAnimationRocket("animation_rocket");
        setAnimationElements("animation_elements");
        setAnimarionbackgound("animation_background");

            // Start chronometer
            setCondition(true);

            // Reset chronometer
            setInteger(1);
            setDecimal(0);

            // Reset speed's chronometer
            setIntervalTime(166);

            // Reset color's chronometer
            setStylesChronometer({color: "white"});
            setStylesChronometer({display: "flex"});
    }

    return ( 
        <div 
        style={{animationPlayState: animationState}}
        className={`${styles.container} ${styles[animationColor]}`}>

            <Container customClass="countdown">
                <CountDown
                onCountDownFinish={startGame}
                setMilisseconds={setMilisseconds}
                setSeconds={setSeconds}
                onFinish={startGame}
                seconds={seconds}
                milisseconds={milisseconds}
                setCountDisplay={setCountDisplay}
                countDisplay={countDisplay}/>
            </Container>

            <img 
            style={{display: explosionDisplay}}
            className={styles.bang} src={bang} alt="" />

            <img 
            style={{animationPlayState: animationState}}
            className={`${styles.elements} ${styles[animationElements]}`} src={elements} alt="" />

            <div 
            style={{animationPlayState: animationState}}  
            className={`${styles.container_rocket} ${styles[animationRocket]}`}>
                <img 
                style={{display: explodedRocketDisplay}}
                className={styles.rocket} src={explodedRocket} alt="" />
                <img 
                style={{display: rocketDisplay}}
                className={styles.rocket} src={rocket} alt="" />

                {animationState === "running" ? (<img 
                className={styles.fire} src={fire} alt="" />) : null}
            </div>
            <img 
            style={{animationPlayState: animationState}}
            className={`${styles.background} ${styles[animationBackground]}`} src={background} alt="" />

                <Container customClass="chronometer">
                    <Chronometer
                    stylesChronometer={stylesChronometer}
                    condition={condition}
                    integer={integer}
                    setInteger={setInteger}
                    intervalTime={intervalTime}
                    setIntervalTime={setIntervalTime}
                    decimal={decimal}
                    setDecimal={setDecimal}/>
                </Container>

                <Container customClass="controls">
                    <Controls 
                    setTotalValue={setTotalValue}
                    totalValue={totalValue}/>
                </Container>
        </div>
     );
}
 
export default Crash;