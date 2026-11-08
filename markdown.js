(function(){
 const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 window.YYGMarkdown={
  render(source){
   if(!window.marked||!window.DOMPurify)return '<p>'+escape(source).replace(/\n/g,'<br>')+'</p>';
   return DOMPurify.sanitize(marked.parse(String(source),{gfm:true,breaks:false}),{
    ALLOWED_TAGS:['p','br','hr','h1','h2','h3','h4','h5','h6','strong','em','del','blockquote','ul','ol','li','pre','code','a','img','table','thead','tbody','tr','th','td','input'],
    ALLOWED_ATTR:['href','src','alt','title','class','start','type','checked','disabled','align'],
    ALLOW_DATA_ATTR:false,ALLOW_ARIA_ATTR:false
   });
  },
  post(post){return post.format==='markdown'?this.render(post.body.join('\n\n')):post.body.map(t=>'<p>'+escape(t)+'</p>').join('')}
 };
})();

window.YYGLanguages={
 names:{en:'English','zh-Hans':'简体中文','zh-Hant':'繁體中文',ja:'日本語',ko:'한국어',es:'Español',fr:'Français',de:'Deutsch',pt:'Português',ru:'Русский',ar:'العربية'},
 name(code){try{return this.names[code]||new Intl.DisplayNames([code],{type:'language'}).of(code)}catch{return code}},
 versions(p){if(!p.translations&&p.sample!==false&&window.YYG_SAMPLE_ZH?.[p.id])return {en:{title:p.title,excerpt:p.excerpt,body:p.body,format:p.format},'zh-Hans':window.YYG_SAMPLE_ZH[p.id]};return p.translations&&Object.keys(p.translations).length?p.translations:{[p.language||'en']:{title:p.title,excerpt:p.excerpt,body:p.body,format:p.format}}},
 select(p,code){const versions=this.versions(p),keys=Object.keys(versions);const selected=Object.hasOwn(versions,code)?code:(p.language&&Object.hasOwn(versions,p.language)?p.language:keys[0]);return {...p,...versions[selected],language:selected}},
 direction(code){return /^(ar|he|fa|ur)(-|$)/i.test(code)?'rtl':'ltr'}
};
