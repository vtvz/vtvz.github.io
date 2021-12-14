const postRelated = (url, source) => {
    const [ collection, slug ] = url.pathname.split('/').filter(_ => _);

    const data = {
        source: source,
        medium: 'social-post'
    }

    collection && (data.campaign = collection);
    slug && (data.content = slug);

    return data;
}

const profileLink = (source, campaign = 'generic', content = null) => {
    return {
        source,
        campaign,
        medium: 'profile-link',
        ...(content ? { content } : {})
    }
}

const postsInternal = (url, source) => {
    const [ collection, slug ] = url.pathname.split('/').filter(_ => _);

    const data = {
        source: source,
        medium: 'internal'
    }

    collection && (data.campaign = collection);
    slug && (data.content = slug);

    return data;
}

export const SourcesEnum = {
    telegram: '_telegram',
    vkPage: '_vk-page',
    vkGroup: '_vk-group',
    facebook: '_facebook',
    linkedIn: '_linked-in',
    twitter: '_twitter',
    habr: '_habr',
};

export const SourcesShortEnum = {
    telegram: 'tg',
    vkPage: 'vkp',
    vkGroup: 'vkg',
    facebook: 'fb',
    linkedIn: 'lin',
    twitter: 'twtr',
    habr: 'habr'
}


const strategies = {
    // Post
    [SourcesShortEnum.telegram]: url => postRelated(url, SourcesEnum.telegram),
    [SourcesShortEnum.vkPage]: url => postRelated(url, SourcesEnum.vkPage),
    [SourcesShortEnum.vkGroup]: url => postRelated(url, SourcesEnum.vkGroup),
    [SourcesShortEnum.facebook]: url => postRelated(url, SourcesEnum.facebook),
    [SourcesShortEnum.linkedIn]: url => postRelated(url, SourcesEnum.linkedIn),
    [SourcesShortEnum.twitter]: url => postRelated(url, SourcesEnum.twitter),
    [SourcesShortEnum.habr]: url => postRelated(url, SourcesEnum.habr),

    // Profile
    'pf-tg': _ => profileLink(SourcesEnum.telegram),
    'pf-vkp': _ => profileLink(SourcesEnum.vkPage),
    'pf-vkg': _ => profileLink(SourcesEnum.vkGroup),
    'pf-vkg-a': _ => profileLink(SourcesEnum.vkGroup, 'action-button'),
    'pf-vkg-lc': _ => profileLink(SourcesEnum.vkGroup, 'links-section', 'contacts'),
    'pf-vkg-lb': _ => profileLink(SourcesEnum.vkGroup, 'links-section', 'blog'),
    'pf-vkg-lcv': _ => profileLink(SourcesEnum.vkGroup, 'links-section', 'cv'),
    'pf-fb': _ => profileLink(SourcesEnum.facebook),
    'pf-lin': _ => profileLink(SourcesEnum.linkedIn),
    'pf-twtr': _ => profileLink(SourcesEnum.twitter),
    'pf-habr': _ => profileLink(SourcesEnum.habr),

    // Internal
    '_latest': url => postsInternal(url, 'latest'),
    '_next': url => postsInternal(url, 'next'),
    '_prev': url => postsInternal(url, 'previous'),
    '_more': url => postsInternal(url, 'more'),
};

/**
 * @param {Window} w
 * @param {Document} d
 */
export default (w, d) => {
    const url = new URL(w.location.toString());
    const utm = url.searchParams.get('utm');

    if (null === utm || '' === utm) {
        return;
    }

    let strategy = strategies[utm];
    if (undefined === strategy) {
        return;
    }

    const {
        source,
        medium,
        campaign,
        content,
    } = strategy(url);

    url.searchParams.delete('utm');
    url.searchParams.append('utm_source', source);
    url.searchParams.append('utm_medium', medium);
    url.searchParams.append('utm_campaign', campaign);
    content && url.searchParams.append('utm_content', content);

    w.history
        ? w.history.replaceState({}, d.title, url.toString())
        : w.location.replace(url.toString());
}
