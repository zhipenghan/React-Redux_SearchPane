import React from "react";
import { connect } from "react-redux";
import { searchUpdate } from "./actions/searchboxAction";
import { fetchProducts } from "./actions/productAction";
import { fetchRelated } from "./actions/relatedsearchesAction";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";

class SearchBoxWrapper extends React.Component {
    handleSearch = value => {
        this.props.searchUpdate(value);
        this.props.fetchProducts(value);
        this.props.fetchRelated(value);
    };

    render() {
        return (
            <div className="searchbox_wrapper">
                <h2>Search</h2>
                <SearchBox
                    placeholder="hachthon"
                    value={this.props.query_value}
                    onSearch={newValue => this.handleSearch(newValue)}
                />
                {/* <form
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
        </form> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    query_value: state.searchbox.query_value
});

const mapDIspatchToProps = {
    searchUpdate,
    fetchProducts,
    fetchRelated
};

export default connect(
    mapStateToProps,
    mapDIspatchToProps
)(SearchBoxWrapper);
