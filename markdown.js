(function(){
 const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 window.YYGMarkdown={
  render(source){
   if(!window.marked||!window.DOMPurify)return '<p>'+escape(source).replace(/\n/g,'<br>')+'</p>';
   const html=DOMPurify.sanitize(marked.parse(String(source),{gfm:true,breaks:false}),{
    ALLOWED_TAGS:['p','br','hr','h1','h2','h3','h4','h5','h6','strong','em','del','blockquote','ul','ol','li','pre','code','a','img','table','thead','tbody','tr','th','td','input'],
    ALLOWED_ATTR:['href','src','alt','title','class','start','type','checked','disabled','align'],
    ALLOW_DATA_ATTR:false,ALLOW_ARIA_ATTR:false
   });
   const template=document.createElement('template');template.innerHTML=html;
   template.content.querySelectorAll('a[href]').forEach(link=>{
    const url=link.getAttribute('href');
    if(!/^\.?\/?attachments\/[a-f0-9]{32}\.pdf$/.test(url))return;
    link.target='_blank';link.rel='noopener';
    const box=document.createElement('details');box.className='pdf-preview';
    const label=document.createElement('summary');label.textContent=window.YYGUI?.locale==='zh-Hans'?'预览 PDF':'Preview PDF';box.append(label);
    const frame=document.createElement('iframe');frame.title=link.textContent||'PDF';frame.loading='lazy';
    frame.src=url;box.append(frame);
    const open=document.createElement('a');open.href=url;open.target='_blank';open.rel='noopener';open.textContent=window.YYGUI?.locale==='zh-Hans'?'在新标签页中打开 PDF':'Open PDF in a new tab';box.append(open);
    const download=document.createElement('a');download.href=url;download.download='document.pdf';download.textContent=window.YYGUI?.locale==='zh-Hans'?'下载 PDF':'Download PDF';box.append(download);
    (link.closest('p')||link).after(box);
   });
   return template.innerHTML;
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
