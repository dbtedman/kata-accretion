import { gql } from "graphql-request";
import { client } from "@/api/GraphQL/client";

export const hello = async (): Promise<{
    hello: string;
}> => {
    return await client().request(
        gql`
            {
                hello
            }
        `
    );
};
