import React,{Component} from 'react';
class App extends Component{
  constructor(){
    super()
    this.state = {ready:false,products:[]}
  }
  componentDidMount(){
    fetch(`https://c73803c8-75ca-41b5-885b-3a733bf5738a.mock.pstmn.io/products`)
      .then(res => res.json())
      .then(
       data => {const products = data; console.log(products);this.setState({products,ready:true})}
      )
    }
      render(){
        if(this.state.ready){
        return this.state.products.map((prod,i)=>{
          return <p>product name: {prod.Name}</p>
        })}else
        return <p>loading</p>
      }      
}
export default App;
