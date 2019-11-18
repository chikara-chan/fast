import { storiesOf } from "@storybook/react";
import React from "react";
import ViewportVirtualizer, { ViewportVirtualizerProps } from "./";
import { ViewportContext } from "../viewport-positioner";
import Foundation from "@microsoft/fast-components-foundation-react";
import { background } from "@storybook/theming";

class TestViewport extends React.Component<{}, {}> {
    private rootElement: React.RefObject<HTMLDivElement> = React.createRef<
        HTMLDivElement
    >();

    constructor(props: {}) {
        super(props);

        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <ViewportContext.Provider
                value={{
                    viewport: this.rootElement,
                }}
            >
                <div
                    ref={this.rootElement}
                    style={{
                        height: "400px",
                        width: "400px",
                        margin: "50px",
                        overflow: "scroll",
                    }}
                >
                    {this.props.children}
                </div>
            </ViewportContext.Provider>
        );
    }
}

storiesOf("Viewport Virtualizer", module).add("Default", () => (
    <TestViewport>
        <div
            style={{
                height: "1200px",
                width: "1200px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gridTemplateRows: "1fr 1fr 1fr 1fr",
                gridColumnGap: "100px",
                gridRowGap: "100px",
                padding: "100px",
            }}
        >
            <ViewportVirtualizer
                style={{
                    gridRow: "1",
                    gridColumn: "1",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "1",
                    gridColumn: "2",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "1",
                    gridColumn: "3",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "1",
                    gridColumn: "4",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "2",
                    gridColumn: "1",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "2",
                    gridColumn: "2",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "2",
                    gridColumn: "3",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "2",
                    gridColumn: "4",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "3",
                    gridColumn: "1",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "3",
                    gridColumn: "2",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "3",
                    gridColumn: "3",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "3",
                    gridColumn: "4",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "4",
                    gridColumn: "1",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "4",
                    gridColumn: "2",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "4",
                    gridColumn: "3",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
            <ViewportVirtualizer
                style={{
                    gridRow: "4",
                    gridColumn: "4",
                    background: "red",
                }}
            >
                <div
                    style={{
                        background: "green",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </ViewportVirtualizer>
        </div>
    </TestViewport>
));
