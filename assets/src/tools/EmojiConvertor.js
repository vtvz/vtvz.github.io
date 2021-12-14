import { EmojiConvertor } from 'emoji-js';

const emojificator = new EmojiConvertor();
emojificator.img_sets.apple.path = '/assets/images/emoji/';
emojificator.include_title = true;
emojificator.include_text = true;
emojificator.replace_mode = 'css';
emojificator.allow_native = true;

emojificator.addAliases({
    'fox': '1f98a',
});

export default (_) => emojificator.replace_unified(emojificator.replace_emoticons(_));

const unifiedEmojificator = Object.assign(new EmojiConvertor(), emojificator);
unifiedEmojificator.replace_mode = 'unified';
unifiedEmojificator.allow_native = true;

export const unified = (_) => unifiedEmojificator.replace_colons(_);
