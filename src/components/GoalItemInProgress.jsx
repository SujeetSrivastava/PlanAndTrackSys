import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, inprogressGoalsRef } from '../firebase'; 

class GoalItemInProgress extends Component {
    completeGoal(){
        //add to complete goal on the database
        //Remove this goal from the goal reference
        const {email} = this.props.user;
        const {title, items, serverKey} = this.props.inprogressGoal;
        inprogressGoalsRef.child(serverKey).remove();
        completeGoalRef.push({email, title, items});
    }
    render(){
        console.log('this.props.inprogressGoal', this.props.inprogressGoal);
        const{ email, title, items } = this.props.inprogressGoal;
        return(
            <div className="row" style={{border: '1px solid lightgray'}}>
                <div className="col-sm-6" style={{ margin: '5px'}}>
                    <strong>{title}</strong>
                    <div>
                        {
                            items.map((item, idx) =>(
                                <div key={idx}>{item.name}</div>
                            ))   
                        }
                    </div>
                </div>
                
                <div className="col-sm-3" style={{ margin: '5px'}}>
                    <span style={{marginRight: '10px'}}> - submitted by: <em>{email}</em></span>
                </div>
                <div className="col-sm-2" style={{ margin: '5px'}}>
                    <button
                        className="btn btn-sm btn-link" style={{textDecoration: 'none'}}
                        onClick={()=> this.completeGoal()}>
                            <span style={{fontSize: '30px'}}>&#x2705;</span>
                    </button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {user} = state;
    return {
        user
    }
}
export default connect(mapStateToProps, null) (GoalItemInProgress);