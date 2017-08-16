import React,{Component} from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import GoalListInProgress from './GoalListInProgress'
import CompletedGoalList from './CompleteGoalList';

class App extends Component {

  signOut(){
    firebaseApp.auth().signOut();
  }
    render() {
        return (
            <div className="form-inline" style={{margin: '5px', textAlign:'center', color: 'gray'}}>
                <div className="row"style={{border: '1px solid lightgray'}}>
                    <div className="col-sm-9" style={{position: 'relative', bottom: '5px', textAlign: 'left'}}>
                        <h3> Welcome to Plan and Track <span style={{fontSize:'11px'}}> - This application will help you to track your action plan and give you the direction to complete!!!</span></h3>
                        
                    </div>
                    <div className="col-sm-3" style={{position: 'relative', textAlign: 'right'}}>
                        <button className="btn btn-link" onClick={() => this.signOut()}>
                            Sign Out
                        </button>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-sm-12" style={{margin: '20px', position:'relative', textAlign:'left'}}>
                            <AddGoal />
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: '20px', border: '1px solid lightgray'}}>
                        <div className="col-sm-4" style={{border: '1px solid lightgray', borderBottom:'none'}}>
                            <h4>Target</h4>
                            <hr />
                            <GoalList />
                        </div> 
                        <div className="col-sm-4" style={{border: '1px solid lightgray', borderBottom:'none'}}>
                            <h4>Progress</h4>
                            <hr />
                            <GoalListInProgress />
                        </div> 
                        <div className="col-sm-4" style={{border: '1px solid lightgray', borderBottom:'none'}}>
                        <h4> Achieved</h4>
                        <hr/>
                        <CompletedGoalList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    //console.log('state', state);
    return {};
}
export default connect (mapStateToProps, null) (App);
