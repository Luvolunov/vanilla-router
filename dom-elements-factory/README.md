# DOM-elements Factory

Factory has only one method `create()` which create DOM-elements (It's so logical).

## Example

```js
const factory = new DOMElementsFactory();

const component = factory.create('div', ['component', 'align-right'])
```

## About methods

1. `create('div', ['component'])` - this code create div element with 'component' class