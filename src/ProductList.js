import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./actions/productAction";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, results } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    //

    return (
      <div>
        {/* <div>{JSON.stringify(results.webPages.value)}</div> */}
        <ul>
          {results.map(product => (
            <li key={product["name"]}>{product["name"]}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductList);
