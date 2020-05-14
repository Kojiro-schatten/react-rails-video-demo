import React from 'react'
import ViewProduct from './ViewProduct'

class ProductsContainer extends React.Component {
  render() {
    return(
      <div className='productList'>
         {this.props.productData.map((data) => {
           return(
            <ViewProduct data={data} key={data.id} onDelete={this.props.deleteProduct} onUpdate={this.props.updateProduct}/>
           )
         })}
      </div>
    )
  }
}

// const ProductsContainer = props => {
//   const [productData, setProductData] = useState(null) 
//   useEffect(() => {
//   function 
// })
//   return(
//     <ViewProduct data={data} key={data.id} onDelete={this.props.deleteProduct} onUpdate={this.props.updateProduct}/>
//   )
// }

export default ProductsContainer