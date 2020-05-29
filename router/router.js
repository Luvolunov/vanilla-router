class Router {
    subscribers = [];
    constructor(options = {}) {
        if (Router.exists) {
            return Router.instance;
        }

        Router.exists = true;
        Router.instance = this;


        this.hash = options.hash || false;

        this.url = window.location.pathname;

        if (this.hash) {
            window.location.hash = window.location.hash || '/';
            this.url = window.location.hash.slice(1)
        }

        setTimeout(() => this.publish());
    }

    getUrl() {
        return this.url;
    }

    push(url) {
        this.url = url;
        this.publish();

        if (this.hash) {
            return window.location.hash = url;
        }

        window.history.pushState({}, document.title, url);
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    publish() {
        this.subscribers.forEach((cb) => cb(this.url));
    }
}