
import React, { Component } from 'react';

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

export default CreateTodo;
