export default class Utils {
    static delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    static random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
