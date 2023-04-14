import { gql, useSubscription } from "@apollo/client"

const CONTACT_SUBSCRIPTION = gql`
    subscription Subscription {
        newContact {
            createdAt
            name
        }
    }
`

function CommentSubscription() {
    const { data, loading } = useSubscription(CONTACT_SUBSCRIPTION, {
        onSubscriptionData: (data) => {
            const message = data.subscriptionData.data.newContact
            console.log(message)
            console.log("contact created")
            window.alert(
                "New contact created by: " +
                    message.name +
                    " at  " +
                    message.createdAt
            )
        },
    })
}
export default CommentSubscription
