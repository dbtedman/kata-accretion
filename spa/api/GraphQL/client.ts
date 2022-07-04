import { GraphQLClient } from "graphql-request";

export const client = () => {
    return new GraphQLClient("http://localhost:3000/query", {
        headers: {
            authorization: "Bearer MY_TOKEN", // Just a placeholder for now
        },
    });
};
