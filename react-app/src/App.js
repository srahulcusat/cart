import React from 'react';
import Cart from './Cart';
import NavbarHeader from './NavbarHeader';


class App extends React.Component {

  constructor () {
    super();
    this.state = {
            products:[
                {
                    price: 1999,
                    title: 'T-Shirt',
                    qty: 2,
                    img:'data:image/jpeg;base64,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',
                    id:1
               },
               {
                    price: 20999,
                    title: 'Laptop',
                    qty: 4,
                    img: 'https://m.media-amazon.com/images/I/71nvo2MHezL._AC_SL1500_.jpg',
                    id:2
                },
                {
                    price: 999,
                    title: 'Apple',
                    qty: 1,
                    img:'https://www.bigbasket.com/media/uploads/p/l/40128384_2-fresho-apple-pink-lady.jpg',
                    id:3
                }
            ]
        }
    }
handleIncreaseQuantity = (product)=>{
    console.log("Function is call to increase the qty:",product)
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
        products:products
    })
}

handleDecreaseQuantity = (product)=>{
    console.log("Function is call to increase the qty:",product)
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;
    
    this.setState({
        products:products
    })
}

handleDelete=(id)=>{
    const {products} = this.state;
    const items = products.filter(prd => prd.id!==id); // return all id which is not mataching with argument id

    this.setState({
        products:items
    })
}

getProductCount = () =>{
      const {products} = this.state;
      let count=0;
      products.forEach(p =>{
        count += p.qty;
      })
      return count;
}

render(){
    const {products} = this.state;
  return (    
       <div className="App">
      <NavbarHeader
        count = {this.getProductCount()}
      />
      <Cart
        products={products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteQuantity = {this.handleDelete}
      />

    </div>
  );
  }
}

export default App;