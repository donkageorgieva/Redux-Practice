const initialState = {
  counter: 0,
  results: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "SUBSTRACT":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "STORE":
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}),
      };
      case 'DELETE':
          const newResults = state.results.filter(result=> result.id !== action.resultElId)
          return{
              ...state,
              results: newResults,
          }
  }
  // if(action.type === "INCREMENT"){
  //     return {
  //         counter: state.counter + 1,
  //     }
  // }
  // if(action.type==="DECREMENT"){
  //     return {
  //         counter: state.counter - 1,
  //     }
  // }
  // if(action.type==="ADD"){
  //     return{
  //         counter: state.counter + action.value,
  //     }
  // }
  // if(action.type === "SUBSTRACT"){
  //     return {
  //         counter: state.counter - action.value,
  //     }
  // }
  return state;
};

export default reducer;
