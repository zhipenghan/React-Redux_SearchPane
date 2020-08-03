import React from "react";
import { connect } from "react-redux";
import { fetchRelated } from "./actions/relatedsearchesAction";

class RelatedSearchesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRelated());
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
        {/* <div>{JSON.stringify(results)}</div> */}
        <div>
          {results.map(word => (
            <div key={word["query"]}>
              <span>{word["query"].substring(0, 20)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.related.items,
  loading: state.related.loading,
  error: state.related.error
});

export default connect(mapStateToProps)(RelatedSearchesList);
