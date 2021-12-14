import React, { Component } from 'react';
import { SourcesShortEnum } from '../tools/UtmResolver';
import { unified } from '../tools/EmojiConvertor';
import {render} from 'react-dom';

type Props = {
    data: {
        [string]: {
            link: string,
            title: string,
            excerpt: string,
            description: string,
            tags: string[],
        }
    }
};

type State = {
    link: string,
    text: string,
    tweet: string,
    tags: string,
};

export default class PostGenerator extends Component<Props, State> {
    constructor(...args) {
        super(...args);

        this.state = {
            link: '',
            text: '',
            tweet: '',
            tags: '',
        };
    }

    static inject(root, data) {
        render(<PostGenerator data={data}/>, root);
    }

    componentDidMount() {
        this.applyCollection('posts');
    }

    applyCollection(collection) {
        const data = this.props.data[collection];

        let text = this.normalizeText(data.excerpt);
        let tweet = this.normalizeText(data.description);


        this.setState(
            {
                link: data.link,
                text: text,
                tweet: tweet,
                tags: data.tags.join(' '),
            }, this.recalculateHeights
        );
    }

    normalizeText(text) {
        const sanitizeText = _ => _.replace(/[\s]+/g, ' ').trim();

        return $(`<div>${text}</div>`)
            .find('> *')
            .map((key, elem) => sanitizeText($(elem).text()))
            .toArray()
            .join('\n')
            .trim() || sanitizeText(text.trim());
    }

    recalculateHeights() {
        $('.article-post-generator-textarea').each(
            function (index, element) {
                element.style.height = 'auto';
                element.style.height = element.scrollHeight + 10 + 'px';
            }
        )
    }

    handleCollectionChange(event) {
        const value = event.target.value;

        if (value) {
            this.applyCollection(value);
        }
    }

    handleChange(field, event) {
        const value = event.target.value;
        const newState = {
            [field]: value,
        };

        if (field === 'text' && this.state.text === this.state.tweet) {
            newState.tweet = value;
        }

        this.setState(newState, this.recalculateHeights);
    }

    textareaSelect(event) {
        event.target.select()
    }

    ucfirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    camelize(str) {
        let arr = str.split('-');
        let capital = arr.map((item, index) => index ? this.ucfirst(item) : item);

        return capital.join("");
    }

    compileTags() {
        return this.state.tags
            .split(/[\s,]/)
            .filter(_ => _)
            .map(_ => '#' + _.replace(/^#/g, ''))
            .map(_ => this.camelize(_))
            .join(' ');
    }

    compileLink(source) {
        try {
            const url = new URL(this.state.link);
            url.searchParams.append('utm', source);

            return url.toString();
        } catch (e) {
            return this.state.link;
        }
    }

    compileText(text) {
        return unified(
            text.trim()
                .split('\n')
                .map(_ => _.trim())
                .join('\n')
        );
    }

    generateGeneric(source) {
        return this.compileText(`
            ${this.state.text}
            
            ${this.compileLink(source)}
            
            P.S. Подписывайтесь на канал в Telegram https://t.me/blog_vtvz
            
            ${this.compileTags()}
        `);
    }

    generateVKPage() {
        return this.compileText(`
            ${this.state.text}
            
            ${this.compileLink(SourcesShortEnum.vkPage)}
            
            P.S. Подписывайтесь на канал в Telegram https://t.me/blog_vtvz и *blog_vtvz (страницу в ВК)
            
            ${this.compileTags()}
        `);
    }

    generateVKGroup() {
        return this.generateGeneric(SourcesShortEnum.vkGroup);
    }

    generateLinkedIn() {
        return this.generateGeneric(SourcesShortEnum.linkedIn);
    }

    generateFacebook() {
        return this.generateGeneric(SourcesShortEnum.facebook);
    }

    generateTelegram() {
        return this.compileText(`
            ${this.state.text}
            
            ${this.compileLink(SourcesShortEnum.telegram)}
            
            ${this.compileTags()}
        `);
    }

    generateTwitter() {
        return this.compileText(`
            ${this.state.tweet}

            ${this.compileLink(SourcesShortEnum.twitter)}
            
            ${this.compileTags()}
        `);
    }

    render() {
        const linkedIn = this.generateLinkedIn();
        const tweet = this.generateTwitter();

        const linkedInRemain = 1300 - [ ...linkedIn ].length;
        const tweetRemain = 280 - [ ...tweet ].length + this.compileLink('twitter').length - 23;

        return <>
            <div className="form-group">
                <label>Применить</label>
                <select onChange={this.handleCollectionChange.bind(this)} value="">
                    <option value="">Применить последний пост из коллекции</option>
                    {Object.keys(this.props.data).map((key) => <option key={key}
                                                                       value={key}>{this.ucfirst(key)}</option>)}
                </select>
            </div>

            <div className="form-group">
                <label>Ссылка</label>
                <input type="text" value={this.state.link} onChange={this.handleChange.bind(this, 'link')}/>
            </div>

            <div className="form-group">
                <label>Содержание <small
                    className={linkedInRemain >= 0 ? 'text-muted' : 'text-danger'}>({linkedInRemain})</small></label>
                <textarea value={this.state.text} onChange={this.handleChange.bind(this, 'text')}/>
            </div>

            <div className="form-group">
                <label>Твит <small
                    className={tweetRemain >= 0 ? 'text-muted' : 'text-danger'}>({tweetRemain})</small></label>
                <textarea value={this.state.tweet} onChange={this.handleChange.bind(this, 'tweet')}/>
            </div>

            <div className="form-group">
                <label>Теги</label>
                <input type="text" value={this.state.tags} onChange={this.handleChange.bind(this, 'tags')}/>
            </div>

            <hr/>

            <div className="form-group">
                <label>Telegram</label>
                <textarea onClick={this.textareaSelect} className="article-post-generator-textarea" readOnly={true}
                          value={this.generateTelegram()}/>
            </div>

            <div className="form-group">
                <label>ВКонтакте (группа)</label>
                <textarea onClick={this.textareaSelect} className="article-post-generator-textarea" readOnly={true}
                          value={this.generateVKGroup()}/>
            </div>

            <div className="form-group">
                <label>ВКонтакте (страница)</label>
                <textarea onClick={this.textareaSelect} className="article-post-generator-textarea" readOnly={true}
                          value={this.generateVKPage()}/>
            </div>

            <div className="form-group">
                <label>Facebook</label>
                <textarea onClick={this.textareaSelect} className="article-post-generator-textarea" readOnly={true}
                          value={this.generateFacebook()}/>
            </div>

            <div className="form-group">
                <label>Twitter</label>
                <textarea onClick={this.textareaSelect} className="article-post-generator-textarea" readOnly={true}
                          value={tweet}/>
            </div>

            <div className="form-group">
                <label>LinkedIn</label>
                <textarea onClick={this.textareaSelect} className="article-post-generator-textarea" readOnly={true}
                          value={linkedIn}/>
            </div>
        </>;
    }
}
