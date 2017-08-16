import { SET_INPROGRESS } from '../constants';

export default (state = [], action) => {
    switch (action.type){
        case SET_INPROGRESS:
            const {inprogressGoals } = action;
            return inprogressGoals;
        default:
            return state;
    }
}