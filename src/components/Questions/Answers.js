import React, { useState, useEffect } from "react";
import {
    Button,
    Header,
    Segment,
    Popup,
    Form,
    Divider,
    Accordion,
    Icon,
    Table
} from "semantic-ui-react";
import { observer, inject } from "mobx-react";

const Answers = inject("store")(
    observer(props => {
        const { store } = props;

        useEffect(() => {
            try {
            } catch (error) {}
        }, []);
        return (
            <React.Fragment>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Answer</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {store.answersStore.answers.map(answer => {
                            try {
                                if (
                                    store.questionsStore.question.id ===
                                    answer.questionId
                                ) {
                                    return (
                                        <Table.Row key={answer.id}>
                                            <Table.Cell>
                                                {answer.content}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {answer.type}
                                            </Table.Cell>
                                        </Table.Row>
                                    );
                                }
                            } catch (error) {}
                        })}
                    </Table.Body>
                </Table>
            </React.Fragment>
        );
    })
);

export default Answers;
