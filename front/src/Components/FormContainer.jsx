import React from 'react'
import {Button,FormGroup,FormControl} from 'react-bootstrap'
import styled from 'styled-components'
import { StyledFormContainer } from './styles/StyledFormContainer';
class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: ''
    }
  }

  onChangetext(e) {
    this.setState({product: e.target.value})
  }

  hundleSubmit = () => {
    this.props.createProduct(this.state.product)
    this.setState({product:''})
  }

  render(){
    return(
      <StyledFormContainer>
        <form>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              value={this.state.product}
              placeholder="Enter text"
              onChange={ e => this.onChangetext(e)}
            />
          </FormGroup>

        </form>
        <Button className="tweetButton" type="submit" onClick={this.hundleSubmit}>Tweet!</Button>
      </StyledFormContainer>
    )
  }
}

export default FormContainer