import React, { useState } from "react";
import {
    Button,
    Header,
    Segment,
    Popup,
    Form,
    Divider,
    Card,
    Dimmer,
    Loader
} from "semantic-ui-react";
import { observer, inject } from "mobx-react";
import { saveQuiz } from "../../api/Quizzes";

const Quizzes = inject("store")(
    observer(props => {
        const [quiz, setQuiz] = useState({ name: "" });
        const [isDimmed, setDimmer] = useState(false);
        const { store } = props;

        const handleChange = e => {
            let value = e.target.value;
            let field = e.target.id;
            setQuiz(quiz => ({ ...quiz, [field]: value }));
        };

        const reset = () => {
            setQuiz(quiz => ({ ...quiz, name: "" }));
        };

        return (
            <React.Fragment>
                <Header as="h2" attached="top">
                    <Popup
                        trigger={
                            <Button
                                content="Categories"
                                icon="plus"
                                label={{
                                    as: "a",
                                    basic: true,
                                    content: store.quizzesStore.quizzes.length
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
                                    value={quiz.name}
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
                                        saveQuiz(quiz).then(
                                            result => {
                                                setDimmer(false);
                                                reset();
                                            },
                                            err => {
                                                console.log("failed to save");
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
                <Segment attached>
                    <Card.Group itemsPerRow={3}>
                        {store.quizzesStore.quizzes.map(quiz => (
                            <Card key={quiz.id} raised>
                                <Card.Content>
                                    <Card.Header>{quiz.name}</Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button basic color="green">
                                            Add Question
                                        </Button>
                                        <Button basic color="blue">
                                            View Marketers
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        ))}
                    </Card.Group>
                </Segment>
            </React.Fragment>
        );
    })
);

export default Quizzes;
