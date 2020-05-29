# Router

Router was created as singleton, 'cause only one router should be in app

## Example

```js
const router1 = new Router({hash: true});
const router2 = new Router();

console.log(router1 === router2); // true, cause constructor returns instance if it exists

router.push('/my-url');

router.subscribe(url => {
    console.log(url); // '/my-url'
})

```

## Options

1. `hash` - boolean. It tells router to navigating in app with hash
    example: `my-site.com/#/home`, `my-site.com/#/account`;

## About methods

1. `getUrl()` - returns url
2. `push(url)` - pushes url to browser history, and change state of app
3. `subscribe(callback)` - subscribes to url changes, callback gets only one parametr - url
4. `publish()` - private method, trigger all subscribers and give them url

## About properties

1. `hash` - is hashed router
2. `url` - current url
3. `subscribers` - array of subscribers