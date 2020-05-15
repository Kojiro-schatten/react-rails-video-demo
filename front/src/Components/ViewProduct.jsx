import React from "react";
import { StyledViewProduct } from "./styles/StyledViewProduct";

class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateText: "",
    };
  }

  handleDelete = () => {
    this.props.onDelete(this.props.data.id);
  };

  handleUpdate = () => {
    this.props.onUpdate(this.props.data.id, this.state.updateText);
  };

  handleInput = (e) => {
    this.setState({ updateText: e.target.value });
  };

  render() {
    return (
      <StyledViewProduct>
        <span>{this.props.data.product}</span>
        <button type="button" className="deleteButton" onClick={this.handleDelete}>
          delete
        </button>
        <span>
          <input
            className="updateTextButton"
            type="text"
            value={this.state.updateText}
            onChange={(e) => this.handleInput(e)}
          />
        </span>
        <span>
          <button type="submit" className="updateButton" onClick={this.handleUpdate}>
            update
          </button>
        </span>
      </StyledViewProduct>
    );
  }
}

export default ViewProduct;
