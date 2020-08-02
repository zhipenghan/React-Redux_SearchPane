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
        <div>
          {results.map(product => (
            <div key={product["id"]}>
              <div>
                <a href={product["url"]}>{product["name"].substring(0, 50)}</a>
              </div>
              <div>
                <a href={product["url"]}>
                  {product["displayUrl"].substring(0, 50)}
                </a>
              </div>
              <div>{product["snippet"].substring(0, 100)}</div>
            </div>
          ))}
        </div>
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
