import React,{Component} from 'react';
import './App.css';

class App extends Component {
  
  state = {
    colors : [
      {id:1,c:'red',turn:'off'},
      {id:2,c:'green',turn:'off'},
      {id:3,c:'yellow',turn:'off'}
    ]
  }

  onClickListener= (key) =>{
    this.state.colors.map(color => {
      color.turn = 'off'
    })
    const index = this.state.colors.findIndex(i => {
      return i.id === key;
    })
    const color = {
      ...this.state.colors[index]
    };
    color.turn = 'on';
    const colors = [...this.state.colors];
    colors[index] = color;
    this.setState({colors: colors})
  }
   
  render(){
    
    let change = this.state.colors.map((color,key) => {
      key = color.id
      if(color.turn==='on'){
      return(
        <div key={color.id} id={color.c} onClick={()=>{this.onClickListener(key)}}>{color.c}</div>
      )
      } else {
        return(
          <div key={color.id} id="common" onClick={()=>{this.onClickListener(key)}}>{color.c}</div>
        )
      }
    })
  return (
    <div className="App">
     {change}
    </div>
  );
}
}

export default App;
