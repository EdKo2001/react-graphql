import { ReactNode } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloClientProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

import env from "./env";
import { getAccessToken, isLoggedIn } from "./auth";

interface ApolloProviderProps {
  children: ReactNode;
}

const authLink = new ApolloLink((operation, forward) => {
  if (isLoggedIn()) {
    operation.setContext({
      headers: {
        authorization: "Bearer " + getAccessToken(),
      },
    });
  }
  return forward(operation);
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    new HttpLink({ uri: env.REACT_APP_APOLLO_URL }),
  ]),
  cache: new InMemoryCache(),
});

export default function ApolloProvider({ children }: ApolloProviderProps) {
  return (
    <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
  );
}
