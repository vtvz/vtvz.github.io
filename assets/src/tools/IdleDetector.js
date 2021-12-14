import Cookie from 'js-cookie';

const COOKIE_KEY = 'global_activity_time';

export default class IdleDetector {

    constructor(timeout = 5000) {
        this.timeout = timeout;
        this.lastActivity = new Date();

        this._detectActivity = this._detectActivity.bind(this);

        this.idleHandlers = [];
        this.activeHandlers = [this._detectGlobalActivity.bind(this)];

        this._setupTimers();
    }

    _detectActivity() {
        this.lastActivity = new Date();
    }

    _detectGlobalActivity() {
        Cookie.set(COOKIE_KEY, 1000 + this.getGlobalActivity());
    }

    registerIdleHandler(handler) {
        this.idleHandlers.push(handler);

        return this;
    }

    registerActiveHandler(handler) {
        this.activeHandlers.push(handler);

        return this;
    }

    getGlobalActivity() {
        return parseInt(Cookie.get(COOKIE_KEY)) || 0;
    }

    _setupTimers() {
        document.addEventListener('scroll', this._detectActivity, false);
        document.addEventListener('load', this._detectActivity, false);
        document.addEventListener('mousemove', this._detectActivity, false);
        document.addEventListener('mousedown', this._detectActivity, false);
        document.addEventListener('keypress', this._detectActivity, false);
        document.addEventListener('touchmove', this._detectActivity, false);

        setInterval(() => {
            const idled = (new Date).getTime() - this.lastActivity.getTime();

            if (idled > this.timeout) {
                this.idleHandlers.forEach((handler) => handler(idled));
            } else {
                this.activeHandlers.forEach((handler) => handler(idled));
            }
        }, 1000);
    }
}
