import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import {
    Button,
    Header,
    Segment,
    Accordion,
    Icon,
    Input,
    Popup,
    Dimmer,
    Loader,
    Form,
    Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Questions = inject("store")(
    observer(props => {
        const { store } = props;
        const [question, setQuestion] = useState({ quizId: "", content: "" });
        const [isDimmed, setDimmer] = useState(false);

        useEffect(() => {
            try {
                /*  store.itemStore.clearSelectedItems();
                ItemsStore.GetItems(params.categoryId).then(items => {
                    store.itemStore.addSelectedItems(items);
                    setItems(items);
                });*/
            } catch (error) {}
        }, []);
        const handleChange = e => {
            /*let value = e.target.value;
            let field = e.target.id;
            setQuiz(quiz => ({ ...quiz, [field]: value }));*/
        };

        return (
            <React.Fragment>
                <Segment clearing attached="top">
                    <Header>
                        <Popup
                            trigger={
                                <Button
                                    content={
                                        store.quizzesStore.quiz.name + " Quiz"
                                    }
                                    icon="plus"
                                    label={{
                                        as: "a",
                                        basic: true,
                                        content:
                                            store.questionsStore.questions
                                                .length
                                    }}
                                />
                            }
                            position="bottom left"
                            on="click"
                        >
                            <Dimmer active={isDimmed} inverted>
                                <Loader inverted>Saving</Loader>
                            </Dimmer>
                            <Form>
                                <Form.Field>
                                    <label>New Quiz</label>
                                    <input
                                        value={question.content}
                                        id="name"
                                        placeholder="New Quiz"
                                        onChange={handleChange}
                                    />
                                </Form.Field>
                                <Divider />
                                <Button
                                    onClick={() => {
                                        if (quiz.name == "") {
                                        } else {
                                            setDimmer(true);
                                            /* saveQuiz(quiz).then(
                                                result => {
                                                    setDimmer(false);
                                                    reset();
                                                },
                                                err => {
                                                    console.log(
                                                        "failed to save"
                                                    );
                                                }
                                            );*/
                                        }
                                    }}
                                >
                                    Save
                                </Button>
                            </Form>
                        </Popup>
                    </Header>
                </Segment>
                <Segment attached></Segment>
            </React.Fragment>
        );
    })
);

export default Questions;
