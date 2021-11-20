import React from "react";
import Dice from './Dice';
import './RollDice.css';
import diceImg from '../img/dice-logo.png';

class RollDice extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            noOfDices:1,
            noOfSides:6,
            sumOfDices:0,
            ele:[],
            RollBtnclicked:false
        };

        this.handleDiceRolling = this.handleDiceRolling.bind(this);
        this.handleIncreaseNoOfDices = this.handleIncreaseNoOfDices.bind(this);
        this.handleDecreaseNoOfDices = this.handleDecreaseNoOfDices.bind(this);
        this.handleNoofDices = this.handleNoofDices.bind(this);
        this.handleNoofSides = this.handleNoofSides.bind(this);
    }

    handleNoofDices(event){
        //update only if the no od dices are 1 or above
       if(event.target.value >=1){
        this.setState({noOfDices:parseInt(event.target.value)});
       }
    }

    handleNoofSides(event){
       if(event.target.value >=2){
        this.setState({noOfSides:parseInt(event.target.value)});
       }
    }

    //increase the number of dices
    handleIncreaseNoOfDices(){
        this.setState({ 
            noOfDices:this.state.noOfDices+1,
            noOfSides:this.state.noOfSides+1
        })
    }

    //decrease the no of dices
    handleDecreaseNoOfDices(){
       if(this.state.noOfDices>1 ){
            this.setState({ 
                noOfDices:this.state.noOfDices-1
            })
        }
        if(this.state.noOfSides>2){
            this.setState({ 
                noOfSides:this.state.noOfSides-1
            })
        }
       
    }

    //handle rolling
    handleDiceRolling(event){
        event.preventDefault();
        this.setState({
            RollBtnclicked:true
        })
        var elements =[];
        var sum=0;
        for(var i=0; i<this.state.noOfDices;i++){
            var val=Math.floor( Math.random()*(this.state.noOfSides))+1;
            sum +=val;
            elements.push(<Dice face={val}/>)
        }

        this.setState({ele:elements});
        this.setState({sumOfDices:sum});

        setTimeout(()=>{
                this.setState({
                    RollBtnclicked:false
                })
        },1000)
      
       
       
    }
    render() { 
        return (  
            <>
                <div className="alert alert-danger" role="alert">
                    <div className="dice-app-body">
                        <form onSubmit={this.handleDiceRolling}>
                                <div className="dice-input alert-warning">
                                    <div className="form-group row">
                                        <label className=" col-form-label"> Number of dices: </label>
                                        <input className="form-control" type="number" name="noOfDices" value={this.state.noOfDices} onChange={this.handleNoofDices}/>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label"> Number of sides:</label>
                                        <input className="form-control" type="number" name="noOfSides" value={this.state.noOfSides} onChange={this.handleNoofSides}/>                             
                                    </div>
                                </div>
                                <div className="dice-btn alert-warning">
                                    <div className="increment-changer">
                                        <button className="btn btn-lg btn-success" onClick={this.handleIncreaseNoOfDices} >
                                            Increment
                                        </button>
                                        <button className="btn btn-lg btn-danger" onClick={this.handleDecreaseNoOfDices} >
                                            Decrement
                                        </button>
                                    </div>
                                    <button className="btn-lg btn-warning" type="submit" >
                                        {this.state.RollBtnclicked? 'Rolling...' : "ROLL"}
                                    </button>
                                    <img src={diceImg} className={` ${this.state.RollBtnclicked && "shaking"}`}/>
                                </div>
                                <div className="dice-instructions alert-warning">
                                    <h3>INSTRUCTIONS</h3>
                                    <ul>
                                        <li><p>Select one more dices.</p></li>
                                        <li><p>Select two or more no of sides for a dice</p></li>
                                        <li><p>Click 'Increment' to increase the no of dices and sides </p></li>
                                        <li><p>Click 'Decrement' to increase the no of dices and sides </p></li>
                                        <li><p>Finally click 'ROLL' to roll the dices</p></li>
                                    </ul>
                                </div>
                        </form>
                    </div>
                </div>
                <div className="alert alert-success" role="alert">
                        <div className="dice-results">
                            <div className="dice-text">
                                <p>The No. of dices are : {this.state.noOfDices}</p>
                                <p>The total of dices values are : {this.state.sumOfDices}</p>
                            </div>
                            <div className="dices-output">
                                <div className="alert alert-success" role="alert">
                                    {this.state.ele}
                                </div>
                            </div>
                        </div>
                </div>   
            </>
        );
    }
}
 
export default RollDice;