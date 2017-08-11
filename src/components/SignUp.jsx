import React,{Component} from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      email:'',
      password:'',
      error:''
    };
  }
  SignUp(){
    console.log('this.state', this.state);
    const {email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email,password)
    .catch(error => {
      this.setState({error});
    })
  }
    render() {
        return (
            <div className="form-inline" style={{margin: '5%', textAlign:'center', color: 'gray'}}>
                <h2>Plan and Track</h2>
                <div className="form-group" style={{border:'1px solid lightgray', margin:'20px', padding:'20px'}}>
                <h4>Please Register New Account...</h4>
                  <input
                    className="form-control"
                    style = {{margin: '5px'}}
                    type="text"
                    placeholder = "email"
                    onChange = {event => this.setState({email: event.target.value})}
                     />
                  <input
                    className = "form-control"
                    style = {{margin: '5px'}}
                    type ="password"
                    placeholder="password"
                    onChange = {event => this.setState({password: event.target.value})}
                    />
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick = {() => this.SignUp()}>
                    Sign Up
                  </button>
                </div>
                <div>{this.state.error.message}</div>
                <div>
                Already a user? 
                  <Link
                    to={'/signin'}> Sign in Instead</Link>
                </div>
            </div>
        )
    }
}

export default SignUp;
