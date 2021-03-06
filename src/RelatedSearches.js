import React from "react";
import { connect } from "react-redux";

import { searchUpdate } from "./actions/searchboxAction";
import { fetchRelated } from "./actions/relatedsearchesAction";
import { fetchProducts } from "./actions/productAction";

import { Link } from "office-ui-fabric-react/lib/Link";
import { Card } from "@uifabric/react-cards";
import { Stack } from "office-ui-fabric-react";
import { DefaultPalette } from "office-ui-fabric-react/lib/Styling";

class RelatedSearchesList extends React.Component {
    componentDidMount() {
        this.props.fetchRelated();
    }

    handleClickSearch = value => {
        this.props.searchUpdate(value);
        this.props.fetchProducts(value);
        this.props.fetchRelated(value);
    };

    render() {
        const { error, loading, results, query_value } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
        //
        const sectionStackTokens = {
            childrenGap: 20,
            background: DefaultPalette.neutralLighter
        };
        const cardTokens = {
            childrenMargin: 0,
            maxWidth: "500px"
        };

        return (
            <div>
                <h3>Related Searches</h3>
                <Stack tokens={sectionStackTokens}>
                    <Card
                        aria-label="Related Searches card"
                        tokens={cardTokens}
                    >
                        <Card.Item>
                            {results.map((word, index) => {
                                if (word["query"] !== query_value) {
                                    return (
                                        <div key={"key-" + index}>
                                            {/* */}
                                            <Link
                                                onClick={e =>
                                                    this.handleClickSearch(
                                                        word["query"]
                                                    )
                                                }
                                            >
                                                {word["query"]}
                                            </Link>
                                        </div>
                                    );
                                }
                            })}
                        </Card.Item>
                    </Card>
                </Stack>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    query_value: state.searchbox.query_value,
    results: state.related.items,
    loading: state.related.loading,
    error: state.related.error
});

const mapDIspatchToProps = {
    searchUpdate,
    fetchProducts,
    fetchRelated
};

export default connect(
    mapStateToProps,
    mapDIspatchToProps
)(RelatedSearchesList);
