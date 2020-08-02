import React from "react";
import { connect } from "react-redux";
import { searchUpdate } from "./actions/searchboxAction";
import { fetchProducts } from "./actions/productAction";

class SearchBox extends React.Component {
  handleSearch = value => {
    this.props.searchUpdate(value);
    this.props.fetchProducts(value);
  };

  render() {
    const { query_value } = this.props;
    let input;
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.handleSearch(input.value);
          }}
        >
          <input ref={node => (input = node)} defaultValue={query_value} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  query_value: state.searchbox.query_value
});

const mapDIspatchToProps = {
  searchUpdate,
  fetchProducts
};

export default connect(
  mapStateToProps,
  mapDIspatchToProps
)(SearchBox);
