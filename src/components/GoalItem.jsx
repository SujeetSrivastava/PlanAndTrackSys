import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase'; 

class GoalItem extends Component {
    completeGoal(){
        //add to complete goal on the database
        //Remove this goal from the goal reference
        const {email} = this.props.user;
        const {title, serverKey} = this.props.goal;
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email, title});
    }
    render(){
        //console.log('this.props.goal', this.props.goal);
        const{ email, title } = this.props.goal;
        return(
            <div className="row">
                <div className="col-sm-6" style={{ margin: '5px'}}>
                    <strong>{title}</strong>
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
export default connect(mapStateToProps, null) (GoalItem);