const AWS = require("aws-sdk")
const documentClient = new AWS.DynamoDB.DocumentClient({region:'eu-west-3'});

exports.handler = (event, context, callback) => {

const data = JSON.parse(event.Records[0].body);
  Promise.all([
    // promise che scriva nella table cryptomon-shop-env (monsterId)
    documentClient.put({
        TableName: 'cryptomon-shop-staging',
        Item: {
            monsterId: data._id,
            price: data._price,
            owner: data._player
        }
    }).promise().catch(console.error),
    // promise che segni l'evento nella table cryptomon-events come processato
    documentClient.put({
        TableName: 'cryptomon-events-staging',
        Item: {
            transactionId: data.eventId,
            type: 'forSale',
            processed: true
        }
    }).promise().catch(console.error)
  ])
    .then(() => callback(null, event))
}
