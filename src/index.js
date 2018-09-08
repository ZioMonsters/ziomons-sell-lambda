const AWS = require("aws-sdk")

exports.handler = (event, context, callback) => {
  Promise.all([
    // promise che scriva nella table cryptomon-shop-env (monsterId)
    // promise che segni l'evento nella table cryptomon-events come processato
  ])
    .then(() => callback(null, event))
}
