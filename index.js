const router = new Router({hash: true});
const factory = new DOMElementsFactory();
const switcher = new RouterSwitcher(document.getElementById('main'));

const home = factory.create('div', ['page']);
home.textContent = 'home';

const account = factory.create('div', ['page']);
account.textContent = 'account';

const root = factory.create('div', ['page']);
root.textContent = 'Root';

switcher.push({
    path: '/',
    component: root
});

switcher.push({
    path: '/home',
    component: home
});

switcher.push({
    path: '/account',
    component: account
});

router.subscribe((url) => {
    switcher.render(url);
});

/***********************/

document.addEventListener('click', ({ target: element }) => {
    if (element.hasAttribute('router-link')) {
        router.push(element.getAttribute('router-link'))
    }
})