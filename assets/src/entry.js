import '@babel/polyfill';
import 'core-js/features/url';
import 'core-js/features/url-search-params';

export { default as resolveUtm } from './tools/UtmResolver';

export const calculator = async (root, data) => {
    const { default: Widget } = await import('./widgets/Calculator');

    Widget.inject(root, data);
};

export const postGenerator = async (root, data) => {
    const { default: Widget } = await import('./widgets/PostGenerator');

    Widget.inject(root, data);
};

$(window).load(async () => {
    const { default: Actor } = await import('./actions/Emojification');

    await (new Actor()).act();
});

$(window).load(async () => {
    const { default: Actor } = await import('./actions/LogoBlinking');

    await (new Actor()).act();
});

$(window).load(async () => {
    const { default: Actor } = await import('./actions/LogoSpeaking');

    await (new Actor()).act();
});
