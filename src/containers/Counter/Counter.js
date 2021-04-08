import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.substractFive}  />
              < hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
    {this.props.storedResults.map(strResult=> (
        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
    ))}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {

    return {
   ctr: state.counter,
   storedResults: state.results,
    }
    
}

const mapToDispatch = dispatch => {
    return {
        onIncrementCounter: () => {
            dispatch({type: "INCREMENT"})
        },
        onDecrementCounter: () => {
            dispatch({type: "DECREMENT"})
        },
        onStoreResult: () => {
           
            dispatch({type: 'STORE'})
        },
        onDeleteResult: (id) => {
            dispatch({type: 'DELETE', resultElId: id})
        },
        onAddFive: () => {
            dispatch({type: "ADD",
        value: 5})
        },
        substractFive: () => {
            dispatch({type: "SUBSTRACT",
        value: 5})
        },
     
    }
}
export default connect(mapStateToProps, mapToDispatch)(Counter);