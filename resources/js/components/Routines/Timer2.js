import React from 'react';
import './styles/Timer.css';

class Timer extends React.Component {
    constructor(props){
        super(props);

        //Constantes
        this.CLASS_INIT = "mode-init";
        this.CLASS_COUNTDOWN = "mode-ct";
        this.CLASS_ON = "mode-on";
        this.CLASS_OFF = "mode-off";
        this.CLASS_END = "mode-end";

        this.audioCountdown = new Audio("/audio/countdown1.mp3");
        this.audioOn = new Audio("/audio/on1.mp3");
        this.audioOff = new Audio("/audio/off1.mp3");
        this.audioEnd = new Audio("/audio/finish1.mp3");

        this.totalTime = (props.tOn + props.tOff) * props.nRep;


        //estado
        this.state = {
            currentInfo: 'Empezar rutina',
            currentRep: props.nRep,
            intervalId: '',
            timerClass: this.CLASS_INIT
        }
        

        //binds
        this.handleStartButton = this.handleStartButton.bind(this);
        this.initialCountdown = this.initialCountdown.bind(this);
        this.timerOn = this.timerOn.bind(this);
        this.timerOff = this.timerOff.bind(this);
        this.timerEnd = this.timerEnd.bind(this);
    }


    
    componentDidUpdate(prevProps, prevState){
        let {currentKey, tOn, tOff, nRep} = this.props;

        if(currentKey !== prevProps.currentKey){
            //Limpia el timer si lo hubiera
            if(prevState.intervalId != '')
                clearInterval(prevState.intervalId);

            this.setState({
                ...prevState,
                currentInfo: 'Empezar rutina',
                currentRep: nRep,
                intervalId: '',
                timerClass: this.CLASS_INIT
            });

            this.totalTime = (tOn + tOff) * nRep;
        }
    }

    handleStartButton(){
        let id = setInterval(this.initialCountdown, 1000);
        this.setState({
            currentInfo: 3,
            intervalId: id,
            timerClass: this.CLASS_COUNTDOWN
        });
        this.audioCountdown.play();
    }

    initialCountdown(){
        let { currentInfo, intervalId } = this.state;

        if(currentInfo > 1){
            this.setState({ currentInfo: currentInfo - 1 });
            this.audioCountdown.play();
        }else{
            clearInterval(intervalId);
            let id = setInterval(this.timerOn, 1000);

            this.setState({
                currentInfo: this.totalTime,
                intervalId: id,
                timerClass: this.CLASS_ON
            });

            this.audioOn.play();
        }
    }

    timerOn(){
        const { currentInfo, currentRep, intervalId } = this.state;
        const { tOn, tOff } = this.props;
        let timeToOff = currentInfo - ((currentRep * (tOn + tOff)) - tOn);

        if(timeToOff <= 0){
            clearInterval(intervalId);
            let id = setInterval(this.timerOff, 1000);

            this.setState({
                currentRep: currentRep - 1,
                intervalId: id,
                timerClass: this.CLASS_OFF
            });

            this.audioOff.play();
        }

        this.setState({ currentInfo: currentInfo - 1 });
    }

    timerOff(){
        const { tOn, tOff } = this.props;
        const { currentInfo, currentRep, intervalId } = this.state;
        let timeToOn = currentInfo - (currentRep * (tOn + tOff));

        //Change background
        if((timeToOn == 3) && (currentRep > 0))
            this.setState({ timerClass: this.CLASS_COUNTDOWN });

        //Display sound
        if((tOn > 3) && (currentRep > 0) && ((timeToOn <= 3) && (timeToOn > 0)))
            this.audioCountdown.play();



        if(timeToOn > 0){
            this.setState({ currentInfo: currentInfo - 1 });
        }else{
            clearInterval(intervalId);

            if(currentInfo > 0){
                let id = setInterval(this.timerOn, 1000);
                this.setState({
                    currentInfo: currentInfo - 1,
                    intervalId: id,
                    timerClass: this.CLASS_ON
                });
                this.audioOn.play();
            }

            else{
                let id = setInterval(this.timerEnd, 5000);
                this.setState({
                    currentInfo: 'FIN',
                    intervalId: id,
                    timerClass: this.CLASS_END
                });
                this.audioEnd.play();
            }
        }
    }

    timerEnd(){
        clearInterval(this.state.intervalId);
        this.setState({
            ...this.state,
            currentInfo: 'Volver a empezar rutina',
            currentRep: this.props.nRep,
            intervalId: '',
            timerClass: this.CLASS_INIT
        });
    }

    render(){
        return(
            <div className="Timer">
                <div className={`info ${this.state.timerClass}`}>{this.state.currentInfo}</div>
                <button className="start" onClick={this.handleStartButton}>
                    Start
                </button>
            </div>
        )
    }
}

export default Timer;