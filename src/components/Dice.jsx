import React from "react";
import './Dice.css';

class Dice extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (  
           <div className="dice">
               <p className="dice-face">{this.props.face}</p>
           </div>
        );
    }
}
 
export default Dice;