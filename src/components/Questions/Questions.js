import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import {
    Button,
    Header,
    Segment,
    Accordion,
    Icon,
    Input
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Questions = inject("store")(
    observer(props => {
        const { store } = props;
        const [question, setQuestion] = useState({});

        useEffect(() => {
            try {
                /*  store.itemStore.clearSelectedItems();
                ItemsStore.GetItems(params.categoryId).then(items => {
                    store.itemStore.addSelectedItems(items);
                    setItems(items);
                });*/
            } catch (error) {}
        }, []);

        const handleClick = (e, titleProps) => {};

        return (
            <React.Fragment>
                <Segment clearing attached="top">
                    <Header floated="right">
                        <Button
                            content={store.quizzesStore.quiz}
                            icon="plus"
                            label={{
                                basic: true,
                                content: store.quizzesStore.questions.length
                            }}
                            as={Link}
                        />
                    </Header>
                </Segment>
                <Segment attached></Segment>
            </React.Fragment>
        );
    })
);

export default Questions;
