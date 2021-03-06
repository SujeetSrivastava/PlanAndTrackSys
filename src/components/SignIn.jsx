import React,{Component} from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignIn extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      email:'',
      password:'',
      error:''
    };
  }
  SignIn(){
    console.log('this.state', this.state);
    const {email,password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email,password)
    .catch(error =>{
      this.setState({error});
    });

  }
    render() {
        return (
            <div className="form-inline" style={{margin: '5%', textAlign:'center', color: 'gray'}}>
                <h2>Plan and Track</h2>
                <div className="form-group" style={{border:'1px solid lightgray', margin:'20px', padding:'20px'}}>
                <h4>Login to go Dashboard</h4>
                  <input
                    className="form-control"
                    style={{margin: '5px'}}
                    type="text"
                    placeholder="email"
                    onChange ={event => this.setState({email: event.target.value})}
                     />
                  <input
                    className="form-control"
                    style={{margin: '5px'}}
                    type="password"
                    placeholder="password"
                    onChange = {event => this.setState({password: event.target.value})}
                    />
                  <button
                    className="btn btn-primary"
                    onClick={() => this.SignIn()}
                    > Sign In</button>
                </div>
                <div>{this.state.error.message}</div>
                <div>Create an Account -> 
                  <Link
                    to={'/signup'}> Sign Up Instead</Link>
                </div>
            </div>
        )
    }
}

export default SignIn;
