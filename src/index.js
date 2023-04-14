import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import {
    split,
    HttpLink,
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { getMainDefinition } from "@apollo/client/utilities"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { createClient } from "graphql-ws"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"

const httpLink = new HttpLink({
    uri: "http://localhost:8000/graphql",
})

const wsLink = new GraphQLWsLink(
    createClient({
        url: "ws://localhost:8000/graphql",
    })
)

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        )
    },
    wsLink,
    httpLink
)

// // create HttpLink , websockets link
// const httpLink = new HttpLink({
//     uri : 'http://localhost:8080/graphql'
// });

// const wsLink = new WebSocketLink({
//     uri : 'http://localhost:8080/graphql',
//     option: {
//         reeconnect: true
//     }
// });

const root = ReactDOM.createRoot(document.getElementById("root"))

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})
// const client = ...

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ApolloProvider client={client}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ApolloProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
