class RouterSwitcher {
    routes = [];

    constructor(rootElement) {
        this.root = rootElement;
        this.clearRoot();
    }

    push(route) {
        this.routes.push(route);
    }

    render(path) {
        this.clearRoot();
        const route = this.routes.find(route => route.path === path);
        if (route) {
            this.root.appendChild(route.component);
        }
    }

    clearRoot() {
        for (let i = 0; i < this.root.children.length; ++i) {
            this.root.removeChild(this.root.children[i]);
        }
    }
}