// action (what to do) reducer (how to do, reduce all actions into one)
 const changeNum = (state=0, action) => {
    switch(action.type) {
        case 'increment' : return state+1;
        case 'decrement' : return state-1;
        default : return state;
    }
}

export default changeNum;