import { ReactNode } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloClientProvider,
} from "@apollo/client";

import env from "./env";

interface ApolloProviderProps {
  children: ReactNode;
}

const client = new ApolloClient({
  uri: env.REACT_APP_APOLLO_URL,
  cache: new InMemoryCache(),
});

export default function ApolloProvider({ children }: ApolloProviderProps) {
  return (
    <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
  );
}
