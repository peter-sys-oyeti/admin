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
import Answers from "./Answers";
const Questions = inject("store")(
    observer(props => {
        const { store } = props;

        const [activeIndex, setActiveIndex] = useState(-1);
        const [isLoading, setIsLoading] = useState(false);
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

        const handleClick = (e, titleProps) => {
            const { index, itemID } = titleProps;
            const newIndex = activeIndex === index ? -1 : index;
            setActiveIndex(newIndex);
            /*  store.stockStore.removeStock();
            StockStore.GetStock(itemID).then(results => {
                results.forEach(result => {
                    store.stockStore.addStock(result);
                });
            });*/
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
                                    <label>New Question</label>
                                    <input
                                        value={question.content}
                                        id="content"
                                        placeholder="New Question"
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
                <Segment attached>
                    <Accordion fluid styled>
                        {store.questionsStore.questions.map(
                            (question, index) => (
                                <React.Fragment key={item.id}>
                                    <Accordion.Title
                                        active={activeIndex === index}
                                        itemID={question.id}
                                        index={index}
                                        onClick={handleClick}
                                    >
                                        <Icon name="dropdown" />
                                        <Button content={question.content} />
                                    </Accordion.Title>
                                    <Accordion.Content
                                        active={activeIndex === index}
                                    >
                                        <Answers
                                            questionId={question.id}
                                            props={props}
                                        />
                                    </Accordion.Content>
                                </React.Fragment>
                            )
                        )}
                    </Accordion>
                </Segment>
            </React.Fragment>
        );
    })
);

export default Questions;
