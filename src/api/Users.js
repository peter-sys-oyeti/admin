import InitApi from "./InitApi";

export const getUser = () => {
    const Users = InitApi.parse.Object.extend("Users");
    const users = new InitApi.parse.Query(Users);
    return users.limit(500).find();
};

export const usersLiveQuery = () => {
    let query = new InitApi.parse.Query("Users");
    let subscription = InitApi.client.subscribe(query);
    return subscription;
};
