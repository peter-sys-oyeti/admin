import { types } from "mobx-state-tree";

export const User = types.model("User", {
    id: types.string,
    username: types.string
});

export const UserStore = types
    .model("UserStore", {
        isLoaded: true,
        users: types.array(User)
    })
    .actions(self => ({
        addUser(user) {
            self.users.push(user);
        }
    }));
