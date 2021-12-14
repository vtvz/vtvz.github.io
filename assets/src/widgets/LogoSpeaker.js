import Utils from '../tools/Utils';
import Cookie from 'js-cookie';

const COOKIE_KEY = 'subscribe_button_clicked';
const COOKIE_VALUE = 'yes';

export default class LogoSpeaker {
    constructor(rootClass = 'navbar-subscribe') {
        this.rootClass = rootClass;

        this.root = $(`.${this.rootClass}`);

        this.link = this.root.find(`.${this.rootClass}__link`);

        this.content = this.root.find(`.${this.rootClass}__content`);
        this.wide = this.content.filter(`.${this.rootClass}__content--wide`);
        this.narrow = this.content.filter(`.${this.rootClass}__content--narrow`);

        this.current = (new Map())
            .set(this.wide, '')
            .set(this.narrow, '');

        this.registerLinkHandling();
    }

    show() {
        this.root.removeClass(`${this.rootClass}--hidden`);
    }

    isShown() {
        return !this.root.hasClass(`${this.rootClass}--hidden`)
    }

    hide() {
        this.root.addClass(`${this.rootClass}--hidden`);
    }

    isHidden() {
        return !this.isShown();
    }

    registerLinkHandling() {
        this.link.click(this.handleClick.bind(this));
    }

    async handleClick(e) {
        await Promise.all([
            this.typedeleter(this.current.get(this.wide), (slice) => this.say(this.wide, slice)),
            this.typedeleter(this.current.get(this.narrow), (slice) => this.say(this.narrow, slice)),
        ]);

        this.hide();

        Cookie.set(COOKIE_KEY, COOKIE_VALUE);
    }

    isClicked() {
        return COOKIE_VALUE === Cookie.get(COOKIE_KEY);
    }

    textCompile(slice) {
        const replacer = `<span class="${this.rootClass}__subscribe"><wbr>$1</span>`;
        const fox = `<span class="emoji emoji-sizer ${this.rootClass}__fox" style="background-image:url(/assets/images/emoji/1f98a.png)" />`;

        return slice
            .replace(/\*(.*?)\*/, replacer)
            .replace(/\*(.*)$/, replacer)
            .replace('#', fox) || slice[0];
    }

    async typewriter(phrase, callback) {
        let slice = '';
        while (slice !== phrase) {
            slice = phrase.slice(0, slice.length + 1);

            callback(slice);
            await Utils.delay(Utils.random(15, 30));
        }
    }

    async typedeleter(phrase, callback) {
        let slice = phrase;
        const delay = 400 / phrase.length;
        while (slice !== '') {
            callback(slice);

            slice = phrase.slice(0, slice.length - 1);

            await Utils.delay(delay);
        }
    }

    async loading(timeout) {
        const dots = 3;
        const empty = '<i class="far fa-circle" />';
        const filled = '<i class="fas fa-circle" />';

        let time = 0;
        let i = 0;
        while (time < timeout) {
            let items = new Array(dots).fill(empty);
            items[i] = filled;
            i = (i + 1) % dots;

            this.content.html(items.join(' '));

            await Utils.delay(300);
            time += 300;
        }
    }

    say(container, phrase) {
        this.current.set(container, phrase);

        container.html(this.textCompile(phrase));
    }

    async type(container, ...phrases) {
        const lastPhrase = phrases.pop();

        for (const phrase of phrases) {
            await this.typewriter(phrase, (slice) => this.say(container, slice));

            await Utils.delay(3000);

            await this.typedeleter(phrase, (slice) => this.say(container, slice));
        }

        await this.typewriter(lastPhrase, (slice) => this.say(container, slice));
    }
}
