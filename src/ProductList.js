import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./actions/productAction";

import { Card } from "@uifabric/react-cards";
import { FontWeights } from "@uifabric/styling";
import { Icon, Text } from "office-ui-fabric-react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { DefaultPalette } from "office-ui-fabric-react/lib/Styling";

class ProductList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    alertClicked = () => {
        alert("Clicked");
    };

    render() {
        const siteTextStyles = {
            root: {
                color: "#025F52",
                fontWeight: FontWeights.semibold
            }
        };
        const descriptionTextStyles = {
            root: {
                color: "#333333",
                fontWeight: FontWeights.regular
            }
        };
        const iconStyles = {
            root: {
                color: "#0078D4",
                fontSize: 16,
                fontWeight: FontWeights.regular
            }
        };
        const footerCardSectionStyles = {
            root: {
                alignSelf: "stretch",
                borderLeft: "1px solid #F3F2F1"
            }
        };

        const stackStyles = {
            root: {
                background: DefaultPalette.neutralLighter
            }
        };

        const cardTokens = { childrenMargin: 12 };
        const footerCardSectionTokens = {
            padding: "0px 0px 0px 12px"
        };
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
                    <h3>Web</h3>
                    <Stack styles={stackStyles}>
                        {results.map((product, index) => (
                            <div key={"card-" + index}>
                                <Card
                                    aria-label="Clickable horizontal card "
                                    horizontal
                                    onClick={e => this.alertClicked()}
                                    tokens={cardTokens}
                                >
                                    <Card.Section>
                                        <Text styles={siteTextStyles}>
                                            <a href={product["url"]}>
                                                {product["name"].substring(
                                                    0,
                                                    50
                                                )}
                                            </a>
                                        </Text>
                                        <Text
                                            variant="small"
                                            styles={siteTextStyles}
                                        >
                                            <a href={product["url"]}>
                                                {product[
                                                    "displayUrl"
                                                ].substring(0, 50)}
                                            </a>
                                        </Text>
                                        <Text styles={descriptionTextStyles}>
                                            {product["snippet"].substring(
                                                0,
                                                100
                                            )}
                                        </Text>
                                    </Card.Section>
                                    <Card.Section
                                        styles={footerCardSectionStyles}
                                        tokens={footerCardSectionTokens}
                                    >
                                        <Icon
                                            iconName="SingleBookmark"
                                            styles={iconStyles}
                                        />
                                        <Stack.Item grow={1}>
                                            <span />
                                        </Stack.Item>
                                        <Icon
                                            iconName="More"
                                            styles={iconStyles}
                                        />
                                    </Card.Section>
                                </Card>
                            </div>
                        ))}
                    </Stack>
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
