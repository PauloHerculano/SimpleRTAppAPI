require('dotenv').load();

var Twitter = require('twitter');
var text;

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

client.get('search/tweets', req.params.text, function(error, tweets, response) {
   tweets.statuses.forEach(function(tweet) {
   	console.log("tweet: " + tweet.text)
   });
});
