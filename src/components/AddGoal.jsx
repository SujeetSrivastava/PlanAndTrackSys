import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends Component { 
    constructor(props){
        super(props);
        this.state = {
            title: '',
            items: [{ name: '' }]
        }
    }

    addGoal(){
        const { title, items } = this.state;
        const { email } = this.props.user;
        goalRef.push({email, title, items});
    }
    handleAddItem = () => {
        this.setState({ items: this.state.items.concat([{ name: '' }]) });
    }
  
    handleRemoveItem = (idx) => () => {
        this.setState({ items: this.state.items.filter((s, sidx) => idx !== sidx) });
    }
    handleItemNameChange = (idx) => (evt) => {
        const newItems = this.state.items.map((item, sidx) => {
        if (idx !== sidx) return item;
        return { ...item, name: evt.target.value };
        });
        
        this.setState({ items: newItems });
    }
    
    handleSubmit = (evt) => {
        const { name, items } = this.state;
        alert(`Incorporated: ${name} with ${items.length} items`);
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
                <div className="form-group row" style={{width:'80%', margin:'10px', textAlign:'left'}}>
                    <div className="col-sm-12">
                        <button className="btn btn-success" onClick={ this.handleAddItem }>+ Sub Topic</button>
                    </div>
                </div>
                <div className="form-group row" style={{width:'80%', border:'1px solid lightgray', position:'relative', left:'70px'}}>
                <div>  
                    {this.state.items.map((item, idx) => (
                    <div>
                        <input
                        className="form-control"
                        style={{width:'90%', margin:'5px'}}
                        type="text"
                        placeholder={`content #${idx + 1}`}
                        value={item.name}
                        onChange={this.handleItemNameChange(idx)}
                        />
                        <button className="btn btn-default" type="button" onClick={this.handleRemoveItem(idx)}>-</button>
                    </div>
                    ))}
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
