import React from 'react'
import ViewProduct from './ViewProduct'
import { StyledProductsContainer } from './styles/StyledProductsContainer';
class ProductsContainer extends React.Component {
  render() {
    return(
      <StyledProductsContainer>
        <div className='productList'>
          {this.props.productData.map((data) => {
            return(
              <ViewProduct data={data} key={data.id} onDelete={this.props.deleteProduct} onUpdate={this.props.updateProduct}/>
            )
          })}
        </div>
      </StyledProductsContainer>
    )
  }
}

export default ProductsContainer