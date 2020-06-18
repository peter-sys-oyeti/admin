import React from "react";
import { Header, Menu, Container } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import { Route, Switch, Link } from "react-router-dom";
import Quizzes from "./Quizzes/Quizzes";
import Questions from "./Questions/Questions";

const styles = {
    root: {
        display: "flex",
        minHeight: "100vh"
    },
    appContent: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
    },
    mainContent: {
        flex: 1,
        padding: "48px 36px 0",
        background: "#eaeff1",
        position: "relative"
    }
};

class App extends React.Component {
    state = { activeItem: "quizzes" };
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    };

    render() {
        const { children, store } = this.props;

        return (
            <div className={styles.root}>
                <div className={styles.appContent}>
                    <Menu pointing fixed="top">
                        <Menu.Item>
                            <Header size="small">Quizzes Admin</Header>
                        </Menu.Item>
                        <Menu.Item
                            name="quizzes"
                            active={this.state.activeItem === "quizzes"}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/quizzes"
                        />

                        <Menu.Menu position="right">
                            <Menu.Item
                                name="reports"
                                active={this.state.activeItem === "reports"}
                                onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu>
                    <main className={styles.mainContent}>
                        <React.Fragment>
                            <Container style={{ marginTop: "5em" }}>
                                <Switch>
                                    <Route
                                        path="/quizzes"
                                        component={Quizzes}
                                    />

                                    <Route
                                        path="/questions"
                                        component={Questions}
                                    />
                                </Switch>
                            </Container>
                        </React.Fragment>
                    </main>
                </div>
            </div>
        );
    }
}
export default compose(observer, inject("store"))(App);
