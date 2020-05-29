# Router Switcher

Switcher is for some root-elements, changes component by url

## Example

```js
const switcher = new RouterSwitcher(document.getElementById('main'));

switcher.push({
    path: '/',
    component: root
})

```

## About methods

1. `push(route)` - pushes route to array of routes
2. `render(url)` - renders component by url
3. `clearRoot()` - private method, remove root children

## About properties

1. `root` - root element which will get component
2. `routes` - array of routes

## About route's properties

1. `path` - path of page for rendering
2. `component` - component for rendering by path (DOM-element)

