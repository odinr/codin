(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/low-res.751d76cb.jpg"},314:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"inline",(function(){return inline})),__webpack_require__.d(__webpack_exports__,"FromSource",(function(){return FromSource})),__webpack_require__.d(__webpack_exports__,"HighlightLines",(function(){return HighlightLines})),__webpack_require__.d(__webpack_exports__,"Theming",(function(){return Theming}));var dist=__webpack_require__(4),tslib_es6=__webpack_require__(1),lit_element=__webpack_require__(3),unsafe_html=__webpack_require__(153),prism=__webpack_require__(94),prism_default=__webpack_require__.n(prism),lit_html=(__webpack_require__(662),__webpack_require__(28));const dependencies={javascript:"clike",actionscript:"javascript",arduino:"cpp",aspnet:["markup","csharp"],bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup-templating",ejs:["javascript","markup-templating"],etlua:["lua","markup-templating"],erb:["ruby","markup-templating"],fsharp:"clike","firestore-security-rules":"clike",flow:"javascript",ftl:"markup-templating",glsl:"clike",gml:"clike",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup-templating",haxe:"clike",java:"clike",javadoc:["markup","java","javadoclike"],jolie:"clike",jsdoc:["javascript","javadoclike"],"js-extras":"javascript","js-templates":"javascript",jsonp:"json",json5:"json",kotlin:"clike",latte:["clike","markup-templating","php"],less:"css",lilypond:"scheme",markdown:"markup","markup-templating":"markup",n4js:"javascript",nginx:"clike",objectivec:"c",opencl:"cpp",parser:"markup",php:["clike","markup-templating"],phpdoc:["php","javadoclike"],"php-extras":"php",plsql:"sql",processing:"clike",protobuf:"clike",pug:["markup","javascript"],qml:"javascript",qore:"clike",jsx:["markup","javascript"],tsx:["jsx","typescript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java","shell-session":"bash",smarty:"markup-templating",solidity:"clike",soy:"markup-templating",sparql:"turtle",sqf:"clike",swift:"clike",tap:"yaml",textile:"markup",tt2:["clike","markup-templating"],twig:"markup",typescript:"javascript","t4-cs":["t4-templating","csharp"],"t4-vb":["t4-templating","visual-basic"],vala:"clike",vbnet:"basic",velocity:"markup",wiki:"markup",xeora:"markup",xquery:"markup"},resolveAlias=alias=>aliases[alias]||alias,aliases={html:"markup",xml:"markup",svg:"markup",mathml:"markup",js:"javascript",g4:"antlr4",adoc:"asciidoc",shell:"bash",rbnf:"bnf",cs:"csharp",dotnet:"csharp",coffee:"coffeescript",jinja2:"django","dns-zone":"dns-zone-file",dockerfile:"docker",gamemakerlanguage:"gml",hs:"haskell",tex:"latex",context:"latex",ly:"lilypond",emacs:"lisp",elisp:"lisp","emacs-lisp":"lisp",md:"markdown",moon:"moonscript",n4jsd:"n4js",objectpascal:"pascal",px:"pcaxis",py:"python",robot:"robotframework",rb:"ruby",rq:"sparql",trig:"turtle",ts:"typescript",t4:"t4-cs",vb:"visual-basic",xeoracube:"xeora",yml:"yaml"};function templateLoader(config){const{cdn:cdn,attr:attr}=Object.assign(Object.assign({},config),{cdn:"https://unpkg.com/prismjs",attr:"data-prism-language"});return language=>Object(tslib_es6.a)(this,void 0,void 0,(function*(){const loader=((cdn,attr)=>language=>new Promise(resolve=>{const template=prism_default.a.languages[language];if(template||document.head.querySelector(`[${attr}="[${language}]"`))resolve(template);else{const el=document.createElement("script");el.setAttribute(attr,language),el.setAttribute("src",`${cdn}/components/prism-${language}.min.js`),el.addEventListener("load",()=>resolve(prism_default.a.languages[language])),document.head.appendChild(el)}}))(cdn,attr);return yield Promise.all((language=>[language].concat(dependencies[language]))(resolveAlias(language)).filter(lang=>!!lang).map(loader)),prism_default.a.languages[language]}))}const previousValues=new WeakMap,loadTemplate=templateLoader({cdn:"https://unpkg.com/prismjs@1.20.0"}),tokenizeMarkup=Object(lit_html.b)((code,language)=>part=>{const current=previousValues.get(part);previousValues.set(part,Object.assign(Object.assign({},current),{code:code,language:language})),current&&code===current.code&&language===current.language||loadTemplate(language).then((part=>template=>{const{code:code,language:language}=previousValues.get(part),tokens=prism_default.a.highlight(code,template,language);part.setValue(Object(unsafe_html.a)(tokens)),part.commit()})(part))});const styles=[lit_element.b`
  :host {
    display: block;
  }

  ::selection {
    text-shadow: none;
    background-color: var(--code-selection-background, rgba(179, 212, 252, 0.5));
  }

  pre {
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
  }

  pre, code {
    font-family: var(--code-font-family, "Fira Code", "Ubuntu Mono", monospace);
    line-height: var(--code-line-height, 1.4);
    z-index: 1;
  }

  code {
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    hyphens: none;

    overflow: scroll;
    
    color: var(--code-color, #555);
    tab-size: var(--code-tab-size, 4);
    white-space: var(--code-line-wrap, pre);
  }
`,lit_element.b`

  :host([plain]) #index {
    flex: 0 0 0 !important;
    width: 0;
    margin: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  #index {
    color: var(--code-index-color, #777);
    background-color: var(--code-index-background, rgba(150, 150, 150, 0.1));
    padding: 0 .5rem;
  }

  #index {
    display: flex;
    flex-flow: column;
    margin-right: 1rem;
    counter-reset: linenumber;
    justify-content: space-evenly;
  }

  #index > span {
    counter-increment: linenumber;
    position: relative;
  }

  #index > span:before {
    content: counter(linenumber);
    display: block;
    text-align: right;
  }
`,lit_element.b`
  :host {
    --code-t-text: rgba(0,0,0,.5);
    --code-t-number: #905;
    --code-t-selector: #690;
    --code-t-operator: #9a6e3a;
    --code-t-keyword: #c792ec;
    --code-t-variable: #e90;
    --code-t-function: #dd4a68;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.comment{
    color: var(--code-token-comment-color, var(--code-t-text));
  }
  .token.prolog {
    color: var(--code-token-prolog-color, var(--code-t-text));
  }
  .token.doctype {
    color: var(--code-token-doctype-color, var(--code-t-text));
  }
  .token.cdata {
    color: var(--code-token-cdata-color, var(--code-t-text));
  }
  .token.punctuation {
    color: var(--code-token-punctuation-color, #07a);
  }

  .token.property {
    color: var(--code-token-property-color, var(--code-t-number));
  }
  .token.tag {
    color: var(--code-token-tag-color, var(--code-t-number));
  }
  .token.boolean {
    color: var(--code-token-boolean-color, var(--code-t-number));
  }
  .token.property {
    color: var(--code-token-property-color, var(--code-t-number));
  }
  .token.number {
    color: var(--code-token-number-color, var(--code-t-number));
  }
  .token.constant {
    color: var(--code-token-constant-color, var(--code-t-number));
  }
  .token.symbol {
    color: var(--code-token-symbol-color, var(--code-t-number));
  }
  .token.deleted {
    color: var(--code-token-deleted-color, var(--code-t-number));
  }

  .token.selector {
    color: var(--code-token-selector-color, var(--code-t-selector));
  }
  .token.attr-name {
    color: var(--code-token-attr-name-color, var(--code-t-selector));
  }
  .token.string {
    color: var(--code-token-string-color, var(--code-t-selector));
  }
  .token.char {
    color: var(--code-token-char-color, var(--code-t-selector));
  }
  .token.inserted {
    color: var(--code-token-inserted-color, var(--code-t-selector));
  }
  .token.builtin {
    color: var(--code-token-builtin-color, #ecaa5a);
  }

  .token.operator {
    color: var(--code-token-operator-color, var(--code-t-operator));
  }
  .token.entity {
    color: var(--code-token-entity-color, var(--code-t-operator));
  }
  .token.url {
    color: var(--code-token-url-color, var(--code-t-operator));
  }

  .token.atrule {
    color: var(--code-token-atrule-color, var(--code-t-keyword));
  }
  .token.attr-value {
    color: var(--code-token-attr-value-color, var(--code-t-keyword));
  }
  .token.keyword {
    color: var(--code-token-function-color, var(--code-t-keyword));
  }

  .token.function {
    color: var(--code-token-function-color, var(--code-t-function));
  }
  .token.class-name {
    color: var(--code-token-class-name-color, var(--code-t-function));
  }

  .token.regex {
    color: var(--code-token-regex-color, var(--code-t-variable));
  }
  .token.important {
    color: var(--code-token-important-color, var(--code-t-variable));
  }
  .token.variable {
    color: var(--code-token-class-name-color, var(--code-t-variable));
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`,lit_element.b`
  :host([theme='light']) {
    background: #fff;
  }

  :host([theme='dark']) {
    background: #212b31;
    --code-color: #eee;

    --code-t-text: rgba(255,255,255,.2);

    --code-highlight-background: rgba(0,200,200,.2);

    --code-token-builtin-color: #fcca5b;
    --code-token-string-color: #bce089;
    --code-token-punctuation-color: #bbb;
    --code-token-number-color: #1EA7FD;
  }
`,lit_element.b`
    .highlight {
        position: absolute;
        width: 100%;
        background-color: var(--code-highlight-background, rgba(100, 200, 100, .25));
  }
`];const languageConverter={fromAttribute:resolveAlias},rangeConverter={fromAttribute:value=>value.split(",").map(s=>s.split("-").map(Number))};(()=>{let CodeHighlightElement=class CodeHighlightElement extends lit_element.a{constructor(){super(...arguments),this.plain=!1}get codeElement(){let el=this.querySelector("code");return!el&&this.appendChild(el=document.createElement("code")),el}get source(){return this.codeElement.innerHTML.replace(/&nbsp;/gim," ").replace(/&amp;/gim,"&").replace(/&quot;/gim,'"').replace(/&lt;/gim,"<").replace(/&gt;/gim,">").replace(/<br>/gm,"\n")}connectedCallback(){super.connectedCallback(),new MutationObserver(records=>{const{codeElement:codeElement}=this;!!records.find(record=>record.target===codeElement)&&this.requestUpdate()}).observe(this,{attributes:!1,childList:!0,subtree:!0})}render(){var _a;const{language:language="clike",source:source}=this;return lit_element.d`
    <pre>
      <span id="index">${this._renderIndex()}</span>
      <code>${tokenizeMarkup(source,language)}</code>
      ${null===(_a=this.highlight)||void 0===_a?void 0:_a.map(([start,end])=>this._renderHighlight(start,end))}
    </pre>
    `}_renderIndex(){const lines=this.source.split(/\n/gm);return Object(unsafe_html.a)(new Array(lines.length+1).join("<span></span>"))}_renderHighlight(start,end=start){var _a;const elements=null===(_a=this._index)||void 0===_a?void 0:_a.children;if(!elements||elements.length<end)return;const startElement=elements[start-1];if(!(startElement instanceof HTMLElement))return;const endElement=elements[end-1];if(!(endElement instanceof HTMLElement))return;const top=startElement.offsetTop,bottom=endElement.offsetTop+endElement.clientHeight;return lit_element.d`<span class="highlight" style="top: ${top}px; height: ${bottom-top}px"></span>`}attributeChangedCallback(name,old,value){var src;super.attributeChangedCallback(name,old,value),"src"===name&&value&&(src=value,Object(tslib_es6.a)(void 0,void 0,void 0,(function*(){const response=yield fetch(src);if(!response||!response.ok)throw new Error("bad response");const content=yield response.text();if(!content)throw new Error("bad content");return content.trim()}))).then(code=>{this.language=value.split(".").pop(),this.codeElement.innerText=code}).catch(console.error)}};CodeHighlightElement.styles=styles,Object(tslib_es6.b)([Object(lit_element.e)()],CodeHighlightElement.prototype,"src",void 0),Object(tslib_es6.b)([Object(lit_element.e)({reflect:!0,converter:languageConverter})],CodeHighlightElement.prototype,"language",void 0),Object(tslib_es6.b)([Object(lit_element.e)({reflect:!0})],CodeHighlightElement.prototype,"theme",void 0),Object(tslib_es6.b)([Object(lit_element.e)({reflect:!0})],CodeHighlightElement.prototype,"cdn",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:Boolean,reflect:!0})],CodeHighlightElement.prototype,"plain",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:Array,converter:rangeConverter})],CodeHighlightElement.prototype,"highlight",void 0),Object(tslib_es6.b)([Object(lit_element.f)("#index")],CodeHighlightElement.prototype,"_index",void 0),CodeHighlightElement=Object(tslib_es6.b)([Object(lit_element.c)("cwc-code-highlight")],CodeHighlightElement)})();var lit_html_lit_html=__webpack_require__(18);const defaultValues_src="static/code-highlight/test.ts",sourceSelector=defaultValue=>Object(dist.select)("Source",{TypeScript:"static/code-highlight/test.ts","C#":"static/code-highlight/test.cs"},defaultValue||defaultValues_src,"Source"),lineSelector=defaultValue=>Object(dist.text)("Lines",defaultValue||"","Highlight"),main=()=>{return{plain:Object(dist.boolean)("Plain",!1,"General"),theme:Object(dist.select)("Theme",{None:"",Dark:"dark",Light:"light"},defaultValue||"none","General")};var defaultValue};const inline=()=>{const{theme:theme,plain:plain}=main();return lit_html_lit_html.html`
  <style>
  cwc-code-highlight{
  }
  </style>
    <cwc-code-highlight language="typescript" theme="${theme}" ?plain="${plain}">
      <code>

class Foo extends Bar {

  private _value: any;

  @property({ type: String })
  public get myProperty;

  constructor(public txt: string, value: any) {
    this._value = value;
  }

  protected someFunction(arg: Array&lt;any|unknown&gt;){
    const [ x, y ] = [ "double", 'signle', \`literal\`, 2, null, undefined ];
    const { w } = { w: () => throw Error('error') };
    return { x, y, w };
  }
}

export default Foo;
      </code>
    </cwc-code-highlight>
  `};const FromSource=()=>{const src=sourceSelector(),highlight=lineSelector(),{theme:theme,plain:plain}=main();return lit_html_lit_html.html` <cwc-code-highlight theme="${theme}" ?plain="${plain}" src="${src}" highlight="${highlight}" /> `};const HighlightLines=()=>{const highlight=lineSelector("6,10-13"),{theme:theme,plain:plain}=main(),src=defaultValues_src;return lit_html_lit_html.html` <cwc-code-highlight theme="${theme}" ?plain="${plain}" src="${src}" highlight="${highlight}" /> `};const Theming=()=>{const style=lit_html_lit_html.html`<style>
  cwc-code-highlight {
    --code-color: ${Object(dist.color)("code-color","#555","Theme")};
    --code-td-text: ${Object(dist.color)("code-t-text","#555","Theme")};
  }
  </style>`,{theme:theme,plain:plain}=main(),src=sourceSelector(),highlight=lineSelector("15-19");return lit_html_lit_html.html`${style}<cwc-code-highlight theme="${theme}" ?plain="${plain}" src="${src}" highlight="${highlight}" /> `};__webpack_exports__.default={title:"CODE|Code highlighter Element",decorators:[dist.withKnobs]}},315:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"picture",(function(){return index_stories_picture}));var dist=__webpack_require__(4),lit_html=__webpack_require__(18),tslib_es6=__webpack_require__(1),lit_element=__webpack_require__(32),style_map=__webpack_require__(320),repeat=__webpack_require__(321);__webpack_require__(317);class PictureEvent extends CustomEvent{constructor(type,eventInit){super(type,eventInit)}}var picture_event=PictureEvent;var picture_element_css=lit_element.b`
  :host {
    display: block;
  }

  svg {
    height: 100%;
    width: 100%;
    fill: rgba(0, 0, 0, 0.25);
  }

  picture,
  img {
    display: block;
  }

  picture {
    background-repeat: no-repeat;
    height: 100%;
  }

  img {
    visibility: hidden;
    height: 100%;
    width: 100%;
  }
`;(()=>{let PictureElement=class PictureElement extends lit_element.a{constructor(){super(...arguments),this.src="//:0",this.position="center",this._mediaMap=new WeakMap}get srcSets(){return[...this.querySelectorAll("source")].concat([...this.renderRoot.querySelectorAll("source")])}render(){return this.lazy?lit_element.e`<cwc-intersection @intersect-in="${()=>this.lazy=!1}"></cwc-intersection>`:this._renderPicture()}_renderPicture(){!("HTMLPictureElement"in window)&&this._polyfillPicture();const picture={"background-image":`url(${this.src})`,"background-position":this.position||"","background-size":this.cover?"cover":"contain"};return lit_element.e`
      <picture style="${Object(style_map.a)(picture)}">
        ${Object(repeat.a)(this.srcSets,src=>src.srcset||src.src,src=>src)}
        <img
          src="${this.src}"
          height="${this.width}"
          width="${this.height}"
          @load="${this._onSourceChange}"
        />
      </picture>
    `}_onSourceChange(e){const img=e.target,{naturalHeight:naturalHeight,naturalWidth:naturalWidth,currentSrc:currentSrc}=img;this.src!==currentSrc&&this._emitChange(img)&&(this.src=currentSrc,this.height=naturalHeight,this.width=naturalWidth,this.setAttribute("loaded",""))}_emitChange(img,args){const{naturalHeight:naturalHeight,naturalWidth:naturalWidth,currentSrc:currentSrc}=img,detail={naturalHeight:naturalHeight,naturalWidth:naturalWidth,currentSrc:currentSrc},event=new picture_event("picture-load",Object.assign(Object.assign({},args),{detail:detail}));return this.dispatchEvent(event),!event.defaultPrevented}_polyfillPicture(){this.srcSets.reverse().forEach(srcset=>{let mql=this._mediaMap.get(srcset);mql instanceof MediaQueryList||(mql=window.matchMedia(srcset.media),mql.matches&&(this.src=srcset.srcset),mql.addListener(()=>this.src=srcset.srcset),this._mediaMap.set(srcset,mql))})}};PictureElement.styles=[picture_element_css],Object(tslib_es6.b)([Object(lit_element.f)()],PictureElement.prototype,"src",void 0),Object(tslib_es6.b)([Object(lit_element.f)()],PictureElement.prototype,"position",void 0),Object(tslib_es6.b)([Object(lit_element.f)({type:Boolean})],PictureElement.prototype,"cover",void 0),Object(tslib_es6.b)([Object(lit_element.f)({type:Number,reflect:!0})],PictureElement.prototype,"height",void 0),Object(tslib_es6.b)([Object(lit_element.f)({type:Number,reflect:!0})],PictureElement.prototype,"width",void 0),Object(tslib_es6.b)([Object(lit_element.f)({type:Boolean})],PictureElement.prototype,"lazy",void 0),Object(tslib_es6.b)([Object(lit_element.d)({passive:!0})],PictureElement.prototype,"_onSourceChange",null),PictureElement=Object(tslib_es6.b)([Object(lit_element.c)("cwc-picture")],PictureElement)})();var low_res=__webpack_require__(208),low_res_default=__webpack_require__.n(low_res),high_res=__webpack_require__(322),high_res_default=__webpack_require__.n(high_res);__webpack_exports__.default={title:"Graphic|Picture Element",decorators:[dist.withKnobs]};const index_stories_picture=()=>{const height=Object(dist.number)("height",200,{range:!0,min:100,max:1e3,step:100}),width=Object(dist.number)("width",1e3,{range:!0,min:100,max:2e3,step:100}),cover=Object(dist.boolean)("cover",!0),position=Object(dist.select)("align",{center:"center",top:"top",bottom:"bottom",left:"left",right:"right"},"center");return lit_html.html`
    <style>
      cwc-picture {
        background: rgba(255, 255, 255, 0.25);
        margin: 2rem 0;
        max-height: 100%;
        max-width: 100%;
      }
      </style>
      <cwc-picture
      src="${low_res_default.a}"
      ?cover=${cover}
      position="${position}"
      style="height:${height}px; width:${width}px"
      @picture-load="${console.log}"
      lazy
    >
      <source media="(min-width: 500px)" srcset="${high_res_default.a}" />
      <source srcset="${low_res_default.a}" />
    </cwc-picture>
  `}},316:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"inline",(function(){return inline}));var lit_html=__webpack_require__(18),tslib_es6=__webpack_require__(1),lit_element=__webpack_require__(3);const RunKit=new Promise(resolve=>{const src="https://embed.runkit.com",loaded=()=>resolve(window.RunKit);if(document.head.querySelector(`[src="${src}"]`))loaded();else{const el=document.createElement("script");el.setAttribute("src",src),el.addEventListener("load",loaded,{once:!0}),document.head.appendChild(el)}}),getFileContent=src=>Object(tslib_es6.a)(void 0,void 0,void 0,(function*(){const response=yield fetch(src);if(!response||!response.ok)throw new Error("bad response");const content=yield response.text();if(!content)throw new Error("bad content");return content.trim()}));const style=lit_element.b`
:host{
    display: block;
    padding: 0 1.5rem;
}
`;(()=>{let RunKitElment=class RunKitElment extends lit_element.a{initialize(){const _super=Object.create(null,{initialize:{get:()=>super.initialize}});return Object(tslib_es6.a)(this,void 0,void 0,(function*(){_super.initialize.call(this),this.source=this.textContent,this.textContent=""}))}connectedCallback(){const _super=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return Object(tslib_es6.a)(this,void 0,void 0,(function*(){_super.connectedCallback.call(this);const runkit=yield RunKit,{source:source,minHeight:minHeight,gutterStyle:gutterStyle,evaluateOnLoad:evaluateOnLoad,nodeVersion:nodeVersion,readOnly:readOnly,title:title}=this;this.notebook=runkit.createNotebook({element:this,source:source,minHeight:minHeight,gutterStyle:gutterStyle,evaluateOnLoad:evaluateOnLoad,nodeVersion:nodeVersion,readOnly:readOnly,title:title})}))}render(){return lit_element.d`<slot></slot>`}evaluate(){var _a;null===(_a=this.notebook)||void 0===_a||_a.evaluate()}updated(_changedProperties){var _a,_b,_c,_d,_e;return Object(tslib_es6.a)(this,void 0,void 0,(function*(){_changedProperties.has("src")&&this.src&&(this.source=yield getFileContent(this.src)),_changedProperties.has("source")&&this.source&&(null===(_a=this.notebook)||void 0===_a||_a.setSource(this.source)),_changedProperties.has("minHeight")&&this.minHeight&&(null===(_b=this.notebook)||void 0===_b||_b.setMinHeight(this.minHeight)),_changedProperties.has("gutterStyle")&&this.gutterStyle&&(null===(_c=this.notebook)||void 0===_c||_c.setGutterStyle(this.gutterStyle)),_changedProperties.has("readOnly")&&(null===(_d=this.notebook)||void 0===_d||_d.setReadOnly(!!this.readOnly)),_changedProperties.has("nodeVersion")&&this.nodeVersion&&(null===(_e=this.notebook)||void 0===_e||_e.setNodeVersion(this.nodeVersion))}))}};RunKitElment.styles=[style],Object(tslib_es6.b)([Object(lit_element.e)({type:String,attribute:!1})],RunKitElment.prototype,"source",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:Object,attribute:!1})],RunKitElment.prototype,"notebook",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:String})],RunKitElment.prototype,"src",void 0),Object(tslib_es6.b)([Object(lit_element.e)({reflect:!1})],RunKitElment.prototype,"minHeight",void 0),Object(tslib_es6.b)([Object(lit_element.e)({reflect:!1})],RunKitElment.prototype,"gutterStyle",void 0),Object(tslib_es6.b)([Object(lit_element.e)({reflect:!1})],RunKitElment.prototype,"nodeVersion",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:Boolean,reflect:!1})],RunKitElment.prototype,"evaluateOnLoad",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:Boolean,reflect:!1})],RunKitElment.prototype,"readOnly",void 0),RunKitElment=Object(tslib_es6.b)([Object(lit_element.c)("cwc-runkit")],RunKitElment)})(),__webpack_exports__.default={title:"Code|Runkit"};const inline=()=>lit_html.html`<cwc-runkit>console.log("ok");</cwc-runkit>`},317:function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(1),lit_element=__webpack_require__(95);__webpack_require__(663);class IntersectionEvent extends CustomEvent{constructor(type,eventInit){super(type,eventInit)}}__webpack_require__(664);const converter=s=>null==s?void 0:s.split(",").map(v=>parseFloat(v));(()=>{let IntersectionElement=class IntersectionElement extends lit_element.a{get intersected(){return this.hasAttribute("intersected")}get options(){const{margin:rootMargin,threshold:threshold}=this;return{rootMargin:rootMargin,threshold:threshold}}createRenderRoot(){return this}connectedCallback(){super.disconnectedCallback(),this.disabled||this._createAdapter()}disconnectedCallback(){super.disconnectedCallback(),this.setAttribute("intersected",""),this._removeAdapter()}attributeChangedCallback(name,old,value){super.attributeChangedCallback(name,old,value),["disabled","margin","threshold"].includes(name)&&old!==value&&(this.disabled?this._removeAdapter():this._createAdapter())}_createAdapter(){this.observer&&this._removeAdapter(),this.observer=new IntersectionObserver(this._onIntersection.bind(this),this.options),this.observer.observe(this)}_removeAdapter(){this.observer instanceof IntersectionObserver&&(this.removeAttribute("intersecting"),this.observer.disconnect(),delete this.observer)}_onIntersection(entries){const[entry]=entries;if(this._emitEntryEvent(entry,{bubbles:!0})){const{isIntersecting:isIntersecting}=entry;this.toggleAttribute("intersecting",isIntersecting),isIntersecting&&(isIntersecting&&this.setAttribute("intersected",""),this.once&&(this.disabled=!0))}}_emitEntryEvent(entry,args){const{isIntersecting:isIntersecting}=entry,type=isIntersecting?"intersect-in":"intersect-out",eventInit=Object.assign(Object.assign({},args),{detail:{entry:entry}}),event=new IntersectionEvent(type,eventInit);return this.dispatchEvent(event),!event.defaultPrevented}};Object(tslib_es6.b)([Object(lit_element.c)({type:Boolean,reflect:!0})],IntersectionElement.prototype,"disabled",void 0),Object(tslib_es6.b)([Object(lit_element.c)({type:Boolean})],IntersectionElement.prototype,"once",void 0),Object(tslib_es6.b)([Object(lit_element.c)()],IntersectionElement.prototype,"margin",void 0),Object(tslib_es6.b)([Object(lit_element.c)({type:Array,converter:converter})],IntersectionElement.prototype,"threshold",void 0),IntersectionElement=Object(tslib_es6.b)([Object(lit_element.b)("cwc-intersection")],IntersectionElement)})();var lit_html=__webpack_require__(34);const equal=__webpack_require__(665),observerCache=new WeakMap;Object(lit_html.c)(({cb:cb,disabled:disabled,opt:opt})=>part=>{var _a;if(!(part instanceof lit_html.a)||part instanceof lit_html.b||"intersection"!==part.committer.name||part.committer.parts.length>1)throw new Error("The `observeIntersection` directive must be used in the style attribute and must be the only part in the attribute.");const element=part.committer.element;if(observerCache.has(element)&&(!disabled||equal(part.value,opt)))return;if(null===(_a=observerCache.get(element))||void 0===_a||_a.disconnect(),disabled)return;const observer=new IntersectionObserver(cb,opt);observer.observe(element),observerCache.set(element,observer),part.setValue(opt)})},318:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"intersectionElement",(function(){return intersection_element}));var dist=__webpack_require__(4),lit_html=__webpack_require__(18),intersection_element=(__webpack_require__(317),()=>{const treshold=Object(dist.number)("treshold",1),disabled=Object(dist.boolean)("disabled",!1);return lit_html.html`
    <style>
      .wrapper {
        height: 200px;
        overflow: auto;
        border: 1px solid darkgray;
      }
      cwc-intersection {
        display: flex;
        opacity: 0.5;
        transition: 0.5s linear;
        justify-content: center;
        margin: 250px 0;
      }

      cwc-intersection[intersecting] {
        opacity: 1;
      }

      cwc-intersection p {
        background: red;
        padding: 2rem 5rem;
        text-align: center;
      }
      cwc-intersection[intersected] p {
        background: cornflowerblue;
      }
    </style>
    <h1>Scroll downs</h1>
    <div class="wrapper">
      <cwc-intersection threshold="${treshold}" .disabled="${disabled}">
        <p>dssdsadas</p>
      </cwc-intersection>
    </div>
  `});__webpack_exports__.default={title:"Misc|Intersection",decorators:[dist.withKnobs]}},319:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"fileSource",(function(){return fileSource}));var dist=__webpack_require__(4),lit_html=__webpack_require__(18);const defaultValues_src="static/runkit/test.js",attributes={src:(defaultValue=defaultValues_src)=>Object(dist.select)("src",{Test:"static/runkit/test.js"},defaultValue,"attributes"),minHeight:(defaultValue="73px")=>Object(dist.text)("minHeight",defaultValue,"attributes"),gutterStyle:(defaultValue="outside")=>Object(dist.select)("gutterStyle",{outside:"outside",inside:"inside",none:"none"},defaultValue,"attributes"),readOnly:(defaultValue=!1)=>Object(dist.boolean)("readOnly",defaultValue,"attributes")},functions={evaluate:cb=>Object(dist.button)("evaluate",cb,"functions")},{src:file_source_stories_src,minHeight:file_source_stories_minHeight,gutterStyle:file_source_stories_gutterStyle,readOnly:file_source_stories_readOnly}=attributes,{evaluate:file_source_stories_evaluate}=functions,fileSource=()=>{const markup=lit_html.html`
        <cwc-runkit
            src="${file_source_stories_src()}"
            minHeight="${file_source_stories_minHeight()}" 
            gutterStyle="${file_source_stories_gutterStyle()}"
            ?readOnly="${file_source_stories_readOnly()}"
        ></cwc-runkit>`;return file_source_stories_evaluate(()=>{var _a;return null===(_a=document.querySelector("cwc-runkit"))||void 0===_a?void 0:_a.evaluate()}),markup};__webpack_exports__.default={title:"Code|Runkit",decorators:[dist.withKnobs]}},322:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/high-res.b28fcd14.jpg"},323:function(module,exports,__webpack_require__){__webpack_require__(324),__webpack_require__(470),__webpack_require__(471),module.exports=__webpack_require__(666)},388:function(module,exports){},471:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_web_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(152),_customElementsDefine=window.customElements.define;window.customElements.define=function(name,cl,conf){customElements.get(name)?console.warn("".concat(name," has been defined twice")):_customElementsDefine.call(window.customElements,name,cl,conf)};var req=__webpack_require__(652);Object(_storybook_web_components__WEBPACK_IMPORTED_MODULE_0__.configure)(req,module)}.call(this,__webpack_require__(252)(module))},652:function(module,exports,__webpack_require__){var map={"./code-highlight/index.stories.ts":314,"./intersection/index.stories.ts":318,"./picture/index.stories.ts":315,"./runkit/file-source.stories.ts":319,"./runkit/inline-source.stories.ts":316};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=652},666:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_web_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(152);module._StorybookPreserveDecorators=!0,Object(_storybook_web_components__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(667)],module)}.call(this,__webpack_require__(252)(module))},667:function(module,exports,__webpack_require__){var map={"./code-highlight/index.stories.ts":314,"./intersection/index.stories.ts":318,"./picture/index.stories.ts":315,"./runkit/file-source.stories.ts":319,"./runkit/inline-source.stories.ts":316};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=667}},[[323,1,2]]]);
//# sourceMappingURL=main.a3bec97049b1446083ae.bundle.js.map