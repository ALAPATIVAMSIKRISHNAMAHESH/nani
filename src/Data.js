import React from 'react';




class Data extends React.Component{
    constructor()
    {
              super();
              this.state={
              count:97
              }
    } 
    countIncrement=()=>
    {
        this.setState({count:this.state.count+1}.toString()})
    }
    countDecrement=()=>
    {
        this.setState({count:this.state.count-1})  
    }
    render()
    {
        return(
            <div>
                        
                <h2>{this.state.count}</h2>
                <button onClick={ this.countIncrement}>clickMe increment </button>
                <button onClick={ this.countDecrement}>clickMe decrement</button>
            </div>
        )
        
    }
}
export default Data;