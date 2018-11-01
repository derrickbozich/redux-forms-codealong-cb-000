
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

 constructor() {
   super();
   this.state = {
     text: '',
   };
 }

 handleChange = event => {
   this.setState({
     text: event.target.value
   });
 }

 render() {
   return(
     <div>
       <form>
         <p>
           <label>add todo</label>
           <input
         type="text"
         onChange={(event) => this.handleChange(event)} value={this.state.text}/>
         </p>
         <input type="submit" />
      </form>
      {this.state.text}
    </div>
  );
 }
};

mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  }


export default CreateTodo;
export default connect(null, mapDispatchToProps)(CreateTodo);
