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
import { saveQuestion } from "../../api/Questions";
import { saveAnswer } from "../../api/Answers";
import Answers from "./Answers";
const Questions = inject("store")(
    observer(props => {
        const { store, history } = props;

        const [activeIndex, setActiveIndex] = useState(-1);
        const [isLoading, setIsLoading] = useState(false);
        const [question, setQuestion] = useState({
            quizId: store.quizzesStore.quiz.id,
            content: ""
        });

        const [answer, setAnswer] = useState({
            questionId: "",
            content: "",
            type: ""
        });

        const [isDimmed, setDimmer] = useState(false);

        const handleChange = e => {
            let value = e.target.value;
            let field = e.target.id;
            setQuestion(question => ({ ...question, [field]: value }));
        };

        const handleAnswerChange = e => {
            let value = e.target.value;
            let field = e.target.id;
            setAnswer(answer => ({ ...answer, [field]: value }));
        };

        const resetQuestion = () => {
            setQuestion(question => ({ ...question, content: "" }));
        };

        const resetAnswer = () => {
            setAnswer(answer => ({ ...answer, content: "" }));
        };

        const handleClick = (e, titleProps) => {
            const { index, itemID } = titleProps;
            const newIndex = activeIndex === index ? -1 : index;
            setActiveIndex(newIndex);
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
                                        if (question.name === "") {
                                        } else {
                                            setDimmer(true);
                                            saveQuestion(question).then(
                                                result => {
                                                    setDimmer(false);
                                                    resetQuestion();
                                                },
                                                err => {
                                                    console.log(
                                                        "failed to save"
                                                    );
                                                }
                                            );
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
                            (question, index) => {
                                if (
                                    question.quizId ===
                                    store.quizzesStore.quiz.id
                                ) {
                                    return (
                                        <React.Fragment key={question.id}>
                                            <Accordion.Title
                                                active={activeIndex === index}
                                                itemID={question.id}
                                                index={index}
                                                onClick={handleClick}
                                            >
                                                <Icon
                                                    name="dropdown"
                                                    onClick={() => {
                                                        store.questionsStore.selectedQuestion(
                                                            {
                                                                id: question.id,
                                                                quizId:
                                                                    question.quizId,
                                                                content:
                                                                    question.content
                                                            }
                                                        );
                                                    }}
                                                />
                                                <Popup
                                                    trigger={
                                                        <Button
                                                            content={
                                                                question.content
                                                            }
                                                            icon="question"
                                                            label={{
                                                                as: "a",
                                                                basic: true,
                                                                content:
                                                                    "Add Answer"
                                                            }}
                                                            onClick={() => {
                                                                setAnswer(
                                                                    answer => ({
                                                                        ...answer,
                                                                        questionId:
                                                                            question.id
                                                                    })
                                                                );
                                                                store.questionsStore.selectedQuestion(
                                                                    {
                                                                        id:
                                                                            question.id,
                                                                        quizId:
                                                                            question.quizId,
                                                                        content:
                                                                            question.content
                                                                    }
                                                                );
                                                            }}
                                                        />
                                                    }
                                                    position="bottom left"
                                                    on="click"
                                                >
                                                    <Dimmer
                                                        active={isDimmed}
                                                        inverted
                                                    >
                                                        <Loader inverted>
                                                            Saving
                                                        </Loader>
                                                    </Dimmer>
                                                    <Form>
                                                        <Form.Field>
                                                            <label>
                                                                New Answer
                                                            </label>
                                                            <input
                                                                value={
                                                                    answer.content
                                                                }
                                                                id="content"
                                                                placeholder="New Answer"
                                                                onChange={
                                                                    handleAnswerChange
                                                                }
                                                            />
                                                        </Form.Field>
                                                        <Form.Field>
                                                            <label>
                                                                Answer Type
                                                            </label>
                                                            <input
                                                                value={
                                                                    answer.type
                                                                }
                                                                id="type"
                                                                placeholder="Answer Type"
                                                                onChange={
                                                                    handleAnswerChange
                                                                }
                                                            />
                                                        </Form.Field>

                                                        <Divider />
                                                        <Button
                                                            onClick={() => {
                                                                if (
                                                                    answer.content ===
                                                                    ""
                                                                ) {
                                                                } else {
                                                                    setDimmer(
                                                                        true
                                                                    );
                                                                    saveAnswer(
                                                                        answer
                                                                    ).then(
                                                                        result => {
                                                                            setDimmer(
                                                                                false
                                                                            );
                                                                            resetAnswer();
                                                                        },
                                                                        err => {
                                                                            console.log(
                                                                                "failed to save"
                                                                            );
                                                                        }
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            Save
                                                        </Button>
                                                    </Form>
                                                </Popup>
                                            </Accordion.Title>
                                            <Accordion.Content
                                                active={activeIndex === index}
                                            >
                                                <Answers props={props} />
                                            </Accordion.Content>
                                        </React.Fragment>
                                    );
                                }
                            }
                        )}
                    </Accordion>
                </Segment>
            </React.Fragment>
        );
    })
);

export default Questions;
