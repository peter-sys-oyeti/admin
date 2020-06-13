import { types } from "mobx-state-tree";

export const User = types
    .model("User", {
        id: types.string,
        email: types.string,
        username: types.string,
        status: types.string
    })
    .views(self => ({
        get isOnline() {
            return self.status.includes("online");
        },
        get isOffline() {
            return self.status.includes("offline");
        }
    }));

export const UserStore = types
    .model("UserStore", {
        isLoaded: true,
        users: types.array(User)
    })
    .views(self => ({
        get OnlineUsers() {
            return self.users.filter(user => user.isOnline);
        },
        get OnlineUsersCount() {
            return self.users.filter(user => user.isOnline).length;
        },
        get OfflineUsers() {
            return self.users.filter(user => user.isOffline);
        },
        get OfflineUsersCount() {
            return self.users.filter(user => user.isOffline).length;
        }
    }))
    .actions(self => ({
        addUser(user) {
            self.users.push(user);
        }
    }));
