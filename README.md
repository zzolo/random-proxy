# Random Proxy

A dead simple node.js server for proxying random.org API into JSON(P) output.

For example, here is the Random.org call to get an random integer between 1 and 6:
* http://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new

The proxied JSON version:
* http://localhost:5000/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new

The proxied JSONP version:
* http://localhost:5000/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new&callback=jsonp_is_great

Please note that Random.org does throttle its API and may ban the IP address you use so try not to abuse it.

## Install

```npm install```

## Run

```node server.js```

## Deploy on Heroku

    heroku create
    git push heroku master
    heroku open