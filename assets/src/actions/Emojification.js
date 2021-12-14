import emojificator from '../tools/EmojiConvertor';

export default class Emojification {
    constructor() {
        this.blacklist = [
            HTMLScriptElement,
            HTMLTextAreaElement,
            HTMLInputElement,
            HTMLSelectElement,
            HTMLButtonElement,
        ];

        this.recursiveEmojification = this.recursiveEmojification.bind(this);
    }

    skip(node) {
        for (let cls of this.blacklist) {
            if (node instanceof cls) {
                return true;
            }
        }

        return false;
    }

    recursiveEmojification(node) {
        if (node.nodeType !== Node.TEXT_NODE) {
            if (node.nodeType === Node.ELEMENT_NODE && !this.skip(node)) {
                node.childNodes.forEach(this.recursiveEmojification);
            }

            return;
        }
        const emojified = emojificator(node.nodeValue);
        if (emojified === node.nodeValue) {
            return;
        }

        let replacement = document.createElement('span');
        replacement.classList.add('js-emojified');
        replacement.innerHTML = emojified;
        node.parentNode.insertBefore(replacement, node);
        node.parentNode.removeChild(node);
    }

    async act() {
        document
            .querySelectorAll('.js-emojify')
            .forEach(this.recursiveEmojification);
    }
}
