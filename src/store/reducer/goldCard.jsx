const initialstate = {
  user: "han",
  cash: 5000,
}

export function goldCardreduser(state = initialstate, action) {
  switch (action.type) {
    case "ADD CASH":
      return { ...state, cash: state.cash + action.payload };
    case "REMOVE CASH ":
      return { ...state, cash: state.cash - action.payload };
    case "IZMENIT":
      return action.payload 
    default: 
      return state;
  }
}
  