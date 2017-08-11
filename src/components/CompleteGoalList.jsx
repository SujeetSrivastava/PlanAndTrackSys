import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';


class CompletedGoalList extends Component{
    componentDidMount(){
        completeGoalRef.on('value', snap => {
            let completeGoals =[];
            snap.forEach(completeGoal => {
                const { email, title } = completeGoal.val();
                completeGoals.push({email, title})
            })
            this.props.setCompleted(completeGoals);
        })
    }

    clearCompleted(){
        completeGoalRef.set([]);
    }
    render(){
        console.log('this.props.completeGoals', this.props.completeGoals);
        return(
            <div>
                {
                    this.props.completeGoals.map((completeGoal, index) => {
                        const { email, title} = completeGoal;
                        return (
                            <div key={index}>
                                <strong>{title}</strong> - Achieved by <em>{email}</em>
                            </div>
                        )
                    })
                }
                <button
                    className="btn btn-primary"
                    style={{position: 'relative', float:'right', marginBottom: '5px'}}
                    onClick={() => this.clearCompleted()}
                >
                &#x2717; All
                </button>
            </div>
        )
    }

}

function mapStateToProps(state){
    const { completeGoals } =state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps, { setCompleted }) (CompletedGoalList);