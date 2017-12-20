import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser } from '../action'



class Display extends Component{
    createItems(){
        return this.props.users.map((user)=>{
            return(
                <li key={user.id}
                onClick={()=>this.props.selectUser(user)}
                >{user.first}</li>
            )
        })
    }
    render(){
        return(
            <div>
             <ul>
                 {this.createItems()}
             </ul>
            </div>
        )
    }
};

function mapStateToProps(state){
    return{
        users:state.users
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Display);