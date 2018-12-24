import React, {Component} from 'react';

class Item extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li>{this.props.itemText}</li>
        );
    }
}

class MakeItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ol>
                    {this.props.itemList.map(item => <Item key = {item} itemText= {item} />)}    
                </ol>
            </div>
        );
    }
}

class FormElement extends Component{
    constructor(props){
        super(props);
        this.state = {
            itemList : [],
            value : "",
        }
    }

    changeValue = (event) => {
        this.setState({value: event.target.value});
    }
    

    handleAdd = () => {
        this.setState(state => {
            const list = state.itemList.push(state.value);
            return {list, value:""}; 
        });
    }

    handleClearList = () => {
        this.setState({itemList: []});
    }

    render(){
        return(
            <div>
                <label>Todo &nbsp;
                    <input type = "text" id = "task" value = {this.state.value} onChange={this.changeValue}/>
                    <button onClick = {this.handleAdd}>Add</button>
                </label>
                <button onClick = {this.handleClearList}>Reset</button>
                <MakeItem itemList = {this.state.itemList}/>
            </div>
        );
    }
}

export default FormElement;