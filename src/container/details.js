import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component{
    render(){
        if(!this.props.user){
            return (<p>Select a user..</p>)
          }
        return(
            <div>
                Details{this.props.user.first} and {this.props.user.last}
            </div>
        )
    }
};

function mapStateToProps(state){
    return{ user: state.active}

}

export default connect(mapStateToProps)(Details);