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

const Departments = inject("store")(
    observer(props => {
        const [isDimmed, setDimmer] = useState(false);
        const { store, history } = props;

        const navigateToQuestions = selectedQuiz => {
            // console.log(store.quizzesStore);

            store.quizzesStore.selectedQuiz(selectedQuiz);
            console.log(store.quizzesStore.quiz);
        };

        return (
            <React.Fragment>
                <Header as="h2" attached="top">
                    <Button
                        content="Quizzes"
                        icon="home"
                        label={{
                            as: "a",
                            basic: true,
                            content: store.departmentsStore.departments.length
                        }}
                    />
                </Header>
                <Segment attached>
                    <Card.Group itemsPerRow={3}>
                        {store.departmentssStore.departments.map(department => (
                            <Card key={department.id} raised>
                                <Card.Content>
                                    <Card.Header>{department.name}</Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button
                                            basic
                                            color="green"
                                            onClick={() => {
                                                /*store.quizzesStore.selectedQuiz(
                                                    {
                                                        id: quiz.id,
                                                        name: quiz.name
                                                    }
                                                );

                                                history.push("/questions");*/
                                            }}
                                        >
                                            Quizzes
                                        </Button>

                                        <Button basic color="blue">
                                            Users
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

export default Departments;
