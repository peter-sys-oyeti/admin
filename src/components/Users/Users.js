import React from "react";
import { Card, Header, Label, Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

const Users = inject("store")(
    observer(props => {
        const { store } = props;

        return (
            <React.Fragment>
                <Header as="h4">
                    <Button
                        content="Users"
                        label={{
                            basic: true,
                            content: store.usersStore.users.length
                        }}
                    />
                </Header>
                <Divider />
                <Card.Group itemsPerRow={5}>
                    {store.userStore.OfflineUsers.map(user => (
                        <Card key={user.id} raised>
                            <Card.Content>
                                <Card.Header>{user.username}</Card.Header>
                                <Divider />
                                <Card.Description>
                                    {"Department : ???"}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </React.Fragment>
        );
    })
);
export default Users;
