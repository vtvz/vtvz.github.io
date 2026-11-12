import{n as e}from"./rolldown-runtime.WkwZ5CU-.js";import{n as t,r as n,t as r}from"./jsx-runtime.9DXTT_dF.js";import{t as i}from"./Html.astro_astro_type_script_index_0_lang.Chf18oy_.js";import{n as a}from"./EmojiConvertor.XvU_XB7m.js";var o=e(n(),1),s=t(),c=r(),l=class e extends o.Component{constructor(...e){super(...e),this.state={link:``,text:``,tweet:``,tags:``}}static inject(t,n){(0,s.render)((0,c.jsx)(e,{data:n}),t)}componentDidMount(){this.applyCollection(`posts`)}applyCollection(e){let t=this.props.data[e],n=this.normalizeText(t.excerpt),r=this.normalizeText(t.description);this.setState({link:t.link,text:n,tweet:r,tags:t.tags.join(` `)},this.recalculateHeights)}normalizeText(e){let t=e=>e.replace(/[\s]+/g,` `).trim();return $(`<div>${e}</div>`).find(`> *`).map((e,n)=>t($(n).text())).toArray().join(`
`).trim()||t(e.trim())}recalculateHeights(){$(`.article-post-generator-textarea`).each(function(e,t){t.style.height=`auto`,t.style.height=t.scrollHeight+10+`px`})}handleCollectionChange(e){let t=e.target.value;t&&this.applyCollection(t)}handleChange(e,t){let n=t.target.value,r={[e]:n};e===`text`&&this.state.text===this.state.tweet&&(r.tweet=n),this.setState(r,this.recalculateHeights)}textareaSelect(e){e.target.select()}ucfirst(e){return e.charAt(0).toUpperCase()+e.slice(1)}camelize(e){return e.split(`-`).map((e,t)=>t?this.ucfirst(e):e).join(``)}compileTags(){return this.state.tags.split(/[\s,]/).filter(e=>e).map(e=>`#`+e.replace(/^#/g,``)).map(e=>this.camelize(e)).join(` `)}compileLink(e){try{let t=new URL(this.state.link);return t.searchParams.append(`utm`,e),t.toString()}catch{return this.state.link}}compileText(e){return a(e.trim().split(`
`).map(e=>e.trim()).join(`
`))}generateGeneric(e){return this.compileText(`
            ${this.state.text}
            
            ${this.compileLink(e)}
            
            P.S. Подписывайтесь на канал в Telegram https://t.me/vtvz_dev

            ${this.compileTags()}
        `)}generateVKPage(){return this.compileText(`
            ${this.state.text}
            
            ${this.compileLink(i.vkPage)}
            
            P.S. Подписывайтесь на канал в Telegram https://t.me/vtvz_dev и *blog_vtvz (страницу в ВК)
            
            ${this.compileTags()}
        `)}generateVKGroup(){return this.generateGeneric(i.vkGroup)}generateLinkedIn(){return this.generateGeneric(i.linkedIn)}generateFacebook(){return this.generateGeneric(i.facebook)}generateTelegram(){return this.compileText(`
            ${this.state.text}
            
            ${this.compileLink(i.telegram)}
            
            ${this.compileTags()}
        `)}generateTwitter(){return this.compileText(`
            ${this.state.tweet}

            ${this.compileLink(i.twitter)}
            
            ${this.compileTags()}
        `)}render(){let e=this.generateLinkedIn(),t=this.generateTwitter(),n=1300-[...e].length,r=280-[...t].length+this.compileLink(`twitter`).length-23;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsx)(`label`,{children:`Применить`}),(0,c.jsxs)(`select`,{onChange:this.handleCollectionChange.bind(this),value:``,children:[(0,c.jsx)(`option`,{value:``,children:`Применить последний пост из коллекции`}),Object.keys(this.props.data).map(e=>(0,c.jsx)(`option`,{value:e,children:this.ucfirst(e)},e))]})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsx)(`label`,{children:`Ссылка`}),(0,c.jsx)(`input`,{type:`text`,value:this.state.link,onChange:this.handleChange.bind(this,`link`)})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsxs)(`label`,{children:[`Содержание`,` `,(0,c.jsxs)(`small`,{className:n>=0?`text-muted`:`text-danger`,children:[`(`,n,`)`]})]}),(0,c.jsx)(`textarea`,{value:this.state.text,onChange:this.handleChange.bind(this,`text`)})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsxs)(`label`,{children:[`Твит`,` `,(0,c.jsxs)(`small`,{className:r>=0?`text-muted`:`text-danger`,children:[`(`,r,`)`]})]}),(0,c.jsx)(`textarea`,{value:this.state.tweet,onChange:this.handleChange.bind(this,`tweet`)})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsx)(`label`,{children:`Теги`}),(0,c.jsx)(`input`,{type:`text`,value:this.state.tags,onChange:this.handleChange.bind(this,`tags`)})]}),(0,c.jsx)(`hr`,{}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsx)(`label`,{children:`Telegram`}),(0,c.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:this.generateTelegram()})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsx)(`label`,{children:`ВКонтакте (группа)`}),(0,c.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:this.generateVKGroup()})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsx)(`label`,{children:`ВКонтакте (страница)`}),(0,c.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:this.generateVKPage()})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsx)(`label`,{children:`Facebook`}),(0,c.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:this.generateFacebook()})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsx)(`label`,{children:`Twitter`}),(0,c.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:t})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsx)(`label`,{children:`LinkedIn`}),(0,c.jsx)(`textarea`,{onClick:this.textareaSelect,className:`article-post-generator-textarea`,readOnly:!0,value:e})]})]})}};export{l as default};