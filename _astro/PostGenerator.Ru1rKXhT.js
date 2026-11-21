import{n as e,r as t,t as n}from"./jsx-runtime.3MCoZBjG.js";import{t as r}from"./Html.astro_astro_type_script_index_0_lang.PifiIvL8.js";var i=t(),a=e(),o=n(),s=class e extends i.Component{constructor(e){super(e),this.state={link:``,text:``,tweet:``,tags:``}}static inject(t,n){(0,a.render)((0,o.jsx)(e,{data:n}),t)}componentDidMount(){this.applyCollection(`posts`)}applyCollection(e){let t=this.props.data[e],n=this.normalizeText(t.excerpt),r=this.normalizeText(t.description);this.setState({link:t.link,text:n,tweet:r,tags:t.tags.join(` `)},this.recalculateHeights)}normalizeText(e){let t=e=>e.replace(/[\s]+/g,` `).trim(),n=new DOMParser().parseFromString(e,`text/html`).body;return Array.from(n.children).map(e=>t(e.textContent)).join(`
`).trim()||t(e.trim())}recalculateHeights(){let e=document.querySelectorAll(`.article-post-generator-textarea`);for(let t of e)t.style.height=`auto`,t.style.height=t.scrollHeight+10+`px`}handleCollectionChange(e){let t=e.target.value;t&&this.applyCollection(t)}handleChange(e,t){let n=t.target.value,r={[e]:n};e===`text`&&this.state.text===this.state.tweet&&(r.tweet=n),this.setState(r,this.recalculateHeights)}textareaSelect(e){e.target.select()}ucfirst(e){return e.charAt(0).toUpperCase()+e.slice(1)}camelize(e){return e.split(`-`).map((e,t)=>t?this.ucfirst(e):e).join(``)}compileTags(){return this.state.tags.split(/[\s,]/).filter(e=>e).map(e=>`#`+e.replace(/^#/g,``)).map(e=>this.camelize(e)).join(` `)}compileLink(e){try{let t=new URL(this.state.link);return t.searchParams.append(`utm`,e),t.toString()}catch{return this.state.link}}compileText(e){return e.trim().split(`
`).map(e=>e.trim()).join(`
`)}generateGeneric(e){return this.compileText(`
            ${this.state.text}
            
            ${this.compileLink(e)}
            
            P.S. Подписывайтесь на канал в Telegram https://t.me/vtvz_dev

            ${this.compileTags()}
        `)}generateVKPage(){return this.compileText(`
            ${this.state.text}
            
            ${this.compileLink(r.vkPage)}
            
            P.S. Подписывайтесь на канал в Telegram https://t.me/vtvz_dev и *blog_vtvz (страницу в ВК)
            
            ${this.compileTags()}
        `)}generateVKGroup(){return this.generateGeneric(r.vkGroup)}generateLinkedIn(){return this.generateGeneric(r.linkedIn)}generateFacebook(){return this.generateGeneric(r.facebook)}generateTelegram(){return this.compileText(`
            ${this.state.text}
            
            ${this.compileLink(r.telegram)}
            
            ${this.compileTags()}
        `)}generateTwitter(){return this.compileText(`
            ${this.state.tweet}

            ${this.compileLink(r.twitter)}
            
            ${this.compileTags()}
        `)}render(){let e=this.generateLinkedIn(),t=this.generateTwitter(),n=1300-[...e].length,r=280-[...t].length+this.compileLink(`twitter`).length-23;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Применить`}),(0,o.jsxs)(`select`,{onChange:this.handleCollectionChange.bind(this),value:``,children:[(0,o.jsx)(`option`,{value:``,children:`Применить последний пост из коллекции`}),Object.keys(this.props.data).map(e=>(0,o.jsx)(`option`,{value:e,children:this.ucfirst(e)},e))]})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Ссылка`}),(0,o.jsx)(`input`,{type:`text`,value:this.state.link,onChange:this.handleChange.bind(this,`link`)})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsxs)(`label`,{children:[`Содержание`,` `,(0,o.jsxs)(`small`,{className:n>=0?`text-muted`:`text-danger`,children:[`(`,n,`)`]})]}),(0,o.jsx)(`textarea`,{value:this.state.text,onChange:this.handleChange.bind(this,`text`)})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsxs)(`label`,{children:[`Твит`,` `,(0,o.jsxs)(`small`,{className:r>=0?`text-muted`:`text-danger`,children:[`(`,r,`)`]})]}),(0,o.jsx)(`textarea`,{value:this.state.tweet,onChange:this.handleChange.bind(this,`tweet`)})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Теги`}),(0,o.jsx)(`input`,{type:`text`,value:this.state.tags,onChange:this.handleChange.bind(this,`tags`)})]}),(0,o.jsx)(`hr`,{}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Telegram`}),(0,o.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:this.generateTelegram()})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`ВКонтакте (группа)`}),(0,o.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:this.generateVKGroup()})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`ВКонтакте (страница)`}),(0,o.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:this.generateVKPage()})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Facebook`}),(0,o.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:this.generateFacebook()})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Twitter`}),(0,o.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:t})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`LinkedIn`}),(0,o.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:e})]})]})}};export{s as default};