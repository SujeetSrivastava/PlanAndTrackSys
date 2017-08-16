import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inprogressGoalsRef } from '../firebase';
import { setInProgress } from '../actions';
import GoalItemInProgress from './GoalItemInProgress';

class GoalListInProgress extends Component { 
    componentDidMount(){
        inprogressGoalsRef.on('value', snap => {
            let inprogressGoals = [];
            snap.forEach(inprogressGoal => {debugger
                //let goalObject = goal.val();
                const { email, title, items } = inprogressGoal.val();
                const serverKey = inprogressGoal.key;
                inprogressGoals.push({email, title, items, serverKey});
            })
            debugger
            this.props.setInProgress(inprogressGoals);
            console.log('GoalListInProgress> goals> ', inprogressGoals);
        })
    }
    render(){
        debugger
        console.log('GoalListInProgress > this.props.goals > ', this.props.inprogressGoals);
        return (
            <div>
                {
                    this.props.inprogressGoals.map((inprogressGoal, index) =>{
                        return (
                            //<div key={index}>{goal.title}</div>
                            <GoalItemInProgress key={index} inprogressGoal = {inprogressGoal} />
                        )
                    })
                }
            </div>
        ) 
        
    }
}

function mapStateToProps(state){
    const { inprogressGoals } = state;
    return{
        inprogressGoals
    }
}

export default connect(mapStateToProps, { setInProgress }) (GoalListInProgress);

