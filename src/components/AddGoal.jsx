import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends Component { 
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    addGoal(){
        console.log('this', this);
        const { title } = this.state;
        const { email } = this.props.user;

        goalRef.push({email, title});
    }

    render(){
        return (
            <div className="form-inline">
                <div className="form-group row" style={{width:'100%'}}>
                    <div className="col-sm-12">
                        <span style={{paddingRight: '20px'}}>Topic</span> 
                        <input
                            type="text"
                            placeholder="Add Your Plan"
                            className="form-control"
                            style={{marginRight: '5px', width:'80%'}}
                            onChange={event => this.setState({title: event.target.value})}
                        />
                        <button
                        className="btn btn-success"
                        type="button"
                        onClick={()=> this.addGoal()}
                        >+</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {user}=state;
    return {
        user
    }
}

export default connect(mapStateToProps,null) (AddGoal);