class DOMElementsFactory {
    create(name, classes) {
        const element = document.createElement(name);

        if (Array.isArray(classes)) {
            element.classList.add(...classes);
        }
        return element;
    }
}