(this.webpackJsonprspec=this.webpackJsonprspec||[]).push([[0],{309:function(e,t,r){},317:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(0),c=r.n(n),o=r(13),s=r.n(o),i=(r(93),r(373)),l=r(375),u=r(360),d=Object(u.a)((function(e){return{root:{textAlign:"left",backgroundColor:"white"},appBarSpacer:e.mixins.toolbar}})),j=r(29),h=r(14),b=r(63),p=r(12),g=r(365),O=r(319),m=r(376),f=r(364),x=r(362),v=r(73),S=r.n(v),R=r(60),A=r.n(R),C=r(74);function y(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2?arguments[2]:void 0,a=c.a.useState(null),n=Object(p.a)(a,2),o=n[0],s=n[1],i=c.a.useState(null),l=Object(p.a)(i,2),u=l[0],d=l[1],j=c.a.useState(!0),h=Object(p.a)(j,2),b=h[0],g=h[1];return c.a.useEffect((function(){(function(){var a=Object(C.a)(A.a.mark((function a(){var n,c;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e,r);case 3:if(n=a.sent,c=null,!t){a.next=11;break}return a.next=8,n.json();case 8:c=a.sent,a.next=14;break;case 11:return a.next=13,n.text();case 13:c=a.sent;case 14:s(c),g(!1),a.next=21;break;case 18:a.prev=18,a.t0=a.catch(0),d(a.t0);case 21:case"end":return a.stop()}}),a,null,[[0,18]])})));return function(){return a.apply(this,arguments)}})()()}),[e,r,t]),[o,u,b]}var L=new Map(Object.entries({abap:["ABAP"],apex:["APEX"],cfamily:["CPP","C","OBJC"],cobol:["COBOL"],csharp:["CSH"],vbnet:["VBNET"],css:["CSS"],flex:["FLEX"],kotlin:["KOTLIN"],scala:["SCALA"],ruby:["RUBY"],go:["GO"],java:["JAVA"],javascript:["JAVASCRIPT","JS","TYPESCRIPT"],php:["PHP"],pli:["PLI"],plsql:["PLSQL"],python:["PY"],rpg:["RPG"],secrets:["SECRETS"],swift:["SWIFT"],tsql:["TSQL"],vb6:["VB"],WEB:["WEB"],xml:["XML"],html:["HTML"],cloudformation:["CLOUDFORMATION"],terraform:["TERRAFORM"],common:["COMMON"]}));function P(){var e=y("".concat("/rspec","/covered_rules.json")),t=Object(p.a)(e,3),r=t[0],a=t[1],n=t[2];function c(e,t,c){if(a)return"Failed Loading";if(n)return"Loading";if(!r)throw new Error("coveredRules is empty");var o=[];return e.forEach((function(e){t.forEach((function(t){e in r&&t in r[e]&&o.push(c(e,r[e][t]))}))})),o.length>0?o:"Not Covered"}return{ruleCoverage:function(e,t,r){var a=L.get(e);return a?c(a,t,r):"Nonsupported language"},allLangsRuleCoverage:function(e,t){return c(Array.from(L.values()).flat(),e,t)},ruleStateInAnalyzer:function(e,t){var c=L.get(e);if(!c||a||n)return console.error("Failed to retrieve coverage for following languages: ".concat(c)),"targeted";if(!r)throw new Error("coveredRules is empty");var o=[];return c.forEach((function(e){return t.forEach((function(t){e in r&&t in r[e]&&o.push(r[e][t])}))})),o.length>0?o.some((function(e){return"string"===typeof e}))?"covered":"removed":"targeted"}}}var N={color:"#4c9bd6",darker:"#25699d"},E={color:"#FD7D20",darker:"#E26003"},T={color:"#C72B28",darker:"#8D1B19"},k=(r(309),Object(u.a)((function(e){return{ruleBar:{borderBottom:"1px solid lightgrey"},ruleid:{textAlign:"center",marginTop:e.spacing(3),marginBottom:e.spacing(3)},ruleidLink:{color:"inherit"},title:{textAlign:"justify",marginTop:e.spacing(4),marginBottom:e.spacing(4)},coverage:{marginBottom:e.spacing(3)},description:{textAlign:"justify"},tabRoot:{justifyContent:"center"},tabScroller:{flexGrow:0},unimplemented:{color:"red"},tab:{display:"flex","&::before":{content:'""',display:"block",width:e.spacing(1),height:e.spacing(1),marginRight:e.spacing(1),borderRadius:e.spacing(1)},"& > .MuiTab-wrapper":{width:"auto"}},coveredTab:{"&::before":{backgroundColor:N.color}},targetedTab:{"&::before":{backgroundColor:E.color}},removedTab:{"&::before":{backgroundColor:T.color}}}}))),B=new Map(Object.entries({PYTHON:"SONARPY",ABAP:"SONARABAP",CFAMILY:"CPP",JAVA:"SONARJAVA",COBOL:"SONARCOBOL",FLEX:"SONARFLEX",HTML:"SONARHTML",PHP:"SONARPHP",PLI:"SONARPLI",PLSQL:"SONARPLSQL",RPG:"SONARRPG",APEX:"SONARSLANG",RUBY:"SONARSLANG",KOTLIN:"SONARKT",SCALA:"SONARSLANG",GO:"SONARSLANG",SECRETS:"SECRETS",SWIFT:"SONARSWIFT",TSQL:"SONARTSQL",VB6:"SONARVBSIX",XML:"SONARXML",CLOUDFORMATION:"SONARIAC",TERRAFORM:"SONARIAC",COMMON:"SONARCOMMON"})),I=new Map(Object.entries({ABAP:"sonar-abap",CSHARP:"sonar-dotnet",VBNET:"sonar-dotnet",JAVASCRIPT:"SonarJS",TYPESCRIPT:"SonarJS",SWIFT:"sonar-swift",KOTLIN:"sonar-kotlin",GO:"slang-enterprise",SCALA:"slang-enterprise",RUBY:"slang-enterprise",APEX:"slang-enterprise",HTML:"sonar-html",COBOL:"sonar-cobol",VB6:"sonar-vb",JAVA:"sonar-java",PLI:"sonar-pli",CFAMILY:"sonar-cpp",CSS:"sonar-css",FLEX:"sonar-flex",PHP:"sonar-php",PLSQL:"sonar-plsql",PYTHON:"sonar-python",RPG:"sonar-rpg",TSQL:"sonar-tsql",XML:"sonar-xml",CLOUDFORMATION:"sonar-iac",TERRAFORM:"sonar-iac",SECRETS:"sonar-secrets",COMMON:"sonar-text"}));function M(e){var t=e.match.params.ruleid,r=e.match.params.language;document.title=t;var n=Object(h.f)();var c,o=k(),s="master",i="/rspec/rules/"+t+"/"+(null!==r&&void 0!==r?r:"default")+"-metadata.json",u=y("/rspec/rules/"+t+"/"+(null!==r&&void 0!==r?r:"default")+"-description.html",!1),d=Object(p.a)(u,3),v=d[0],R=d[1],A=d[2],C=y(i),L=Object(p.a)(C,3),N=L[0],E=L[1],T=L[2],M=P(),w=M.ruleCoverage,F=M.allLangsRuleCoverage,q=M.ruleStateInAnalyzer,U="Loading...",H="Loading...",D=null,Q=void 0;if(N&&!T&&!E){H=N.title,"prUrl"in N&&(Q=N.prUrl),s=N.branch,N.all_languages.sort(),D=N.all_languages.map((function(e){var t=q(e,N.allKeys),r=o.tab+" "+o[t+"Tab"];return Object(a.jsx)(f.a,{label:e,value:e,className:r})})),c=JSON.stringify(N,null,2);var Y=function(e,t){return"string"===typeof t?Object(a.jsxs)("li",{children:[e,": ",t]}):Object(a.jsxs)("li",{children:["Not covered for ",e," anymore. Was covered from ",t.since," to ",t.until,"."]})};U=r?w(r,N.allKeys,Y):F(N.allKeys,Y)}"Not Covered"!==U&&(Q=void 0,s="master");var G="https://github.com/SonarSource/rspec/blob/"+s+"/rules/"+t+(r?"/"+r:""),V=Object(a.jsx)("div",{children:"Loading..."});null===v||A||R||(V=Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:v}}),Object(a.jsx)("hr",{}),Object(a.jsx)("a",{href:G,children:"Edit on Github"}),Object(a.jsx)("br",{}),Object(a.jsx)("hr",{}),Object(a.jsx)(S.a,{className:"json",children:c})]}));var W=Object(a.jsx)(a.Fragment,{});Q&&(W=Object(a.jsx)("div",{children:Object(a.jsxs)("span",{className:o.unimplemented,children:["Not implemented (see ",Object(a.jsx)("a",{href:Q,children:"PR"}),")"]})}));var J=t.substring(1),X=Object(a.jsx)(x.a,{href:'https://github.com/SonarSource/rspec/pulls?q=is%3Apr+"S'.concat(J,'"+OR+"RSPEC-').concat(J,'"'),children:"Specification Pull Requests"}),_=function(e,t,r){if(r){var n=r.toUpperCase(),c=B.get(n),o=I.get(n),s=t.replaceAll('"',""),i=Object(a.jsx)(x.a,{href:"https://github.com/SonarSource/".concat(o,'/pulls?q=is%3Apr+"S').concat(e,'"+OR+"RSPEC-').concat(e,'"'),children:"Implementation Pull Requests"});return void 0!==c?{ticketsLink:Object(a.jsx)(x.a,{href:"https://jira.sonarsource.com/issues/?jql=project%20%3D%20".concat(c,"%20AND%20(text%20~%20%22S").concat(e,"%22%20OR%20text%20~%20%22RSPEC-").concat(e,'%22%20OR%20text%20~%20"').concat(s,'")'),children:"Implementation tickets on Jira"}),implementationPRsLink:i}:{ticketsLink:Object(a.jsx)(x.a,{href:"https://github.com/SonarSource/".concat(o,'/issues?q=is%3Aissue+"S').concat(e,'"+OR+"RSPEC-').concat(e,'"'),children:"Implementation issues on GitHub"}),implementationPRsLink:i}}return{ticketsLink:Object(a.jsx)("div",{children:"Select a language to see the implementation tickets"}),implementationPRsLink:Object(a.jsx)("div",{children:"Select a language to see the implementation pull requests"})}}(J,H,r),K=_.ticketsLink,z=_.implementationPRsLink,Z=r?{value:r}:{value:!1};return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:o.ruleBar,children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(O.a,{variant:"h2",classes:{root:o.ruleid},children:Object(a.jsx)(x.a,{className:o.ruleidLink,component:j.b,to:"/".concat(t),underline:"none",children:t})}),Object(a.jsx)(O.a,{variant:"h4",classes:{root:o.ruleid},children:W}),Object(a.jsx)(m.a,Object(b.a)(Object(b.a)({},Z),{},{onChange:function(e,r){n.push("/".concat(t,"/").concat(r))},indicatorColor:"primary",textColor:"primary",centered:!0,variant:"scrollable",scrollButtons:"auto",classes:{root:o.tabRoot,scroller:o.tabScroller},children:D}))]})}),Object(a.jsxs)(g.a,{maxWidth:"md",children:[Object(a.jsx)(O.a,{variant:"h3",classes:{root:o.title},children:H}),Object(a.jsxs)(l.a,{className:o.coverage,children:[Object(a.jsx)(O.a,{variant:"h4",children:"Covered Since"}),Object(a.jsx)("ul",{children:U})]}),Object(a.jsxs)(l.a,{className:o.coverage,children:[Object(a.jsx)(O.a,{variant:"h4",children:"Related Tickets and Pull Requests"}),Object(a.jsx)("ul",{children:X}),Object(a.jsx)("ul",{children:z}),Object(a.jsx)("ul",{children:K})]}),Object(a.jsxs)(l.a,{children:[Object(a.jsx)(O.a,{variant:"h4",children:"Description"}),Object(a.jsx)(O.a,{className:o.description,children:V})]})]})]})}var w=r(76),F=r(374),q=r(379),U=r(368),H=r(377),D=Object(u.a)((function(e){return{root:{},searchHitBox:{marginBottom:e.spacing(1)},searchBar:{borderBottom:"1px solid lightgrey",paddingBottom:e.spacing(2)},searchResults:{marginTop:e.spacing(3)},topRow:{display:"flex",flexDirection:"row",justifyContent:"space-between"},resultsCount:{marginBottom:e.spacing(2)}}})),Q=r(26);function Y(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return void 0!==e?e:t},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return void 0!==e?e.toString():t.toString()},o=Object(n.useState)(t),s=Object(p.a)(o,2),i=s[0],l=s[1],u=Object(h.g)(),d=Object(h.f)();function j(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.push,c=void 0===n||n,o=(r.skipURI,new URLSearchParams(u.search));o.set(e,a(t)),l(t),c?d.push("".concat(u.pathname,"?").concat(o.toString())):d.replace("".concat(u.pathname,"?").concat(o.toString()))}return c.a.useEffect((function(){var n=new URLSearchParams(u.search);n.has(e)&&n.get(e)!==a(i)?l(r(n.get(e))):n.has(e)||a(i)===a(t)||l(r(t))}),[e,t,r,a,i,u,d]),[i,j]}var G=r(366),V=r(367),W=r(378),J=Object(u.a)((function(e){return{searchHit:{},ruleid:{display:"flex",flexDirection:"row",justifyContent:"space-between"},language:{marginRight:e.spacing(1),marginTop:e.spacing(2)},coveredLanguageChip:{marginRight:e.spacing(1),marginTop:e.spacing(2),backgroundColor:N.color,"&:hover, &:focus":{backgroundColor:N.darker}},targetedLanguageChip:{marginRight:e.spacing(1),marginTop:e.spacing(2),backgroundColor:E.color,"&:hover, &:focus":{backgroundColor:E.darker}},removedLanguageChip:{marginRight:e.spacing(1),marginTop:e.spacing(2),backgroundColor:T.color,"&:hover, &:focus":{backgroundColor:T.darker}},targetedMarker:{marginTop:e.spacing(2),marginRight:e.spacing(2),borderColor:E.color,color:E.color},coveredMarker:{marginTop:e.spacing(2),marginRight:e.spacing(2),borderColor:N.color,color:N.color},removedMarker:{marginTop:e.spacing(2),marginRight:e.spacing(2),borderColor:T.color,color:T.color}}}));function X(e){var t=P().ruleStateInAnalyzer,r=J(),n=[],c=[],o=[];e.data.languages.filter((function(e){return"default"!==e})).forEach((function(s){var i=t(s,e.data.all_keys),l=Object(a.jsx)(x.a,{component:j.b,to:"/".concat(e.data.id,"/").concat(s),style:{textDecoration:"none"},children:Object(a.jsx)(W.a,{classes:{root:r[i+"LanguageChip"]},label:s,color:"primary",clickable:!0})});"covered"===i?n.push(l):"targeted"===i?c.push(l):o.push(l)}));var s=e.data.titles.map((function(e){return Object(a.jsx)(O.a,{variant:"body1",component:"p",gutterBottom:!0,children:e})})),i=0===n.length?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)(O.a,{variant:"body2",component:"p",classes:{root:r.language},children:[Object(a.jsx)(W.a,{classes:{root:r.coveredMarker},label:"Covered",color:"primary",variant:"outlined"}),n]}),l=0===c.length?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)(O.a,{variant:"body2",component:"p",classes:{root:r.language},children:[Object(a.jsx)(W.a,{classes:{root:r.targetedMarker},label:"Targeted",color:"secondary",variant:"outlined"}),c]}),u=0===o.length?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)(O.a,{variant:"body2",component:"p",classes:{root:r.language},children:[Object(a.jsx)(W.a,{classes:{root:r.removedMarker},label:"Removed",color:"secondary",variant:"outlined"}),o]});return Object(a.jsx)(G.a,{variant:"outlined",classes:{root:r.searchHit},children:Object(a.jsxs)(V.a,{children:[Object(a.jsx)(O.a,{classes:{root:r.ruleid},variant:"h5",component:"h5",gutterBottom:!0,children:Object(a.jsx)(x.a,{component:j.b,to:"/".concat(e.data.id),children:Object(a.jsxs)("div",{children:[" Rule ",e.data.id," "]})})}),s,i,l,u]})})}var _=function(){document.title="Search";var e=D(),t=Y("query",""),r=Object(p.a)(t,2),o=r[0],s=r[1],i=Y("types","ANY"),u=Object(p.a)(i,2),d=u[0],j=u[1],b={BUG:"Bug",CODE_SMELL:"Code Smell",SECURITY_HOTSPOT:"Security Hotspot",VULNERABILITY:"Vulnerability"},m=Y("tags",[],(function(e){return e?e.split(","):[]})),f=Object(p.a)(m,2),x=f[0],v=f[1],S=Y("qualityProfiles",[],(function(e){return e?e.split(","):[]})),R=Object(p.a)(S,2),A=R[0],C=R[1],L=Y("lang","ANY"),P=Object(p.a)(L,2),N=P[0],E=P[1],T=Y("page",1,parseInt),k=Object(p.a)(T,2),B=k[0],I=k[1],M=function(){var e=Object(h.g)(),t=Object(h.f)();return{searchParams:new URLSearchParams(e.search),setLocationSearch:function(r){for(var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new URLSearchParams(e.search),c=0,o=Object.entries(r);c<o.length;c++){var s=Object(p.a)(o[c],2),i=s[0],l=s[1];n.set(i,l)}a?t.push("".concat(e.pathname,"?").concat(n.toString())):t.replace("".concat(e.pathname,"?").concat(n.toString()))}}}().setLocationSearch,G=function(e,t,r,a,o,s,i){var l="".concat("/rspec","/rules/rule-index.json"),u="".concat("/rspec","/rules/rule-index-store.json"),d=y(l),j=Object(p.a)(d,3),h=j[0],b=j[1],g=j[2],O=y(u),m=Object(p.a)(O,3),f=m[0],x=m[1],v=m[2],S=Object(n.useState)(null),R=Object(p.a)(S,2),A=R[0],C=R[1],L=Object(n.useState)([]),P=Object(p.a)(L,2),N=P[0],E=P[1],T=Object(n.useState)(null),k=Object(p.a)(T,2),B=k[0],I=k[1],M=Object(n.useState)(null),w=Object(p.a)(M,2),F=w[0],q=w[1],U=Object(n.useState)(!0),H=Object(p.a)(U,2),D=H[0],Y=H[1];return c.a.useEffect((function(){console.log("trying to load index"),!h||g||b||(console.log("Loading Index"),C(Q.Index.load(h)))}),[h,b,g]),c.a.useEffect((function(){if(console.log("trying to run query"),null!=A&&!v&&!x){var n=[];q(null);try{n=A.query((function(n){t&&n.term(t.toLowerCase(),{fields:["type"],presence:Q.Query.presence.REQUIRED,usePipeline:!1}),r&&n.term(r.toLowerCase(),{fields:["languages"],presence:Q.Query.presence.REQUIRED,usePipeline:!1}),a.forEach((function(e){n.term(e,{fields:["tags"],presence:Q.Query.presence.REQUIRED,usePipeline:!1})})),o.forEach((function(e){n.term(e.toLowerCase(),{fields:["qualityProfiles"],presence:Q.Query.presence.REQUIRED,usePipeline:!1})})),Q.tokenizer(function(e){return e.replace("RSPEC-","S")}(e)).forEach((function(e){n.term(e,{fields:["all_keys","titles","descriptions"],presence:Q.Query.presence.REQUIRED})}))}))}catch(l){if(!(l instanceof Q.QueryParseError))throw l;q(l.message)}if(f){I(n.length);var c=n.slice(s*(i-1),s*i);E(c.map((function(e){var t=e.ref;return f[t]}))),Y(!1)}}}),[e,t,r,a,o,s,i,f,v,x,A]),{results:N,numberOfHits:B,error:F,loading:D}}(o,"ANY"===d?null:d,"ANY"===N?null:N,x,A,20,B),V=G.results,W=G.numberOfHits,J=G.error,_=G.loading,K=W?Math.ceil(W/20):0,z=[],Z=[],$=["Sonar way","Sonar way recommended"],ee=y("".concat("/rspec","/rules/rule-index-aggregates.json")),te=Object(p.a)(ee,3),re=te[0],ae=te[1],ne=te[2];!re||ne||ae||(z=Object.keys(re.tags).sort(),Z=Object.keys(re.langs).sort(),$=Object.keys(re.qualityProfiles).sort());var ce="No rule found...";if(_)ce="Searching";else if(V.length>0){var oe=o.toLocaleUpperCase(),se=[];V.forEach((function(t){var r=Object(a.jsx)(l.a,{className:e.searchHitBox,children:Object(a.jsx)(X,{data:t},t.id)});t.all_keys.some((function(e){return e===oe}))?se=[r].concat(Object(w.a)(se)):se.push(r)})),ce=se}var ie={types:j,tags:v,qualityProfiles:C,lang:E,query:s};function le(e){return function(t){if(B>1){var r={query:o,types:d,tags:x,qualityProfiles:A,lang:N,page:1};r[e]=t.target.value,M(r)}else ie[e](t.target.value,{push:!1})}}return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)("div",{className:e.searchBar,children:Object(a.jsx)(g.a,{maxWidth:"md",children:Object(a.jsxs)(U.a,{container:!0,spacing:3,children:[Object(a.jsx)(U.a,{item:!0,xs:12,children:Object(a.jsx)(O.a,{variant:"h4",children:"Search Rule Specifications"})}),Object(a.jsx)(U.a,{item:!0,xs:12,children:Object(a.jsx)(F.a,{id:"title-query",label:"Rule Title and Description",placeholder:"Search in rule titles and descriptions",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",value:o,onChange:le("query"),error:!!J,helperText:J})}),Object(a.jsx)(U.a,{item:!0,xs:3,children:Object(a.jsxs)(F.a,{select:!0,fullWidth:!0,margin:"normal",variant:"outlined",label:"Rule type",value:d,onChange:le("types"),children:[Object(a.jsx)(q.a,{value:"ANY",children:"Any"},"Any"),Object.keys(b).map((function(e){return Object(a.jsx)(q.a,{value:e,children:b[e]},e)}))]})}),Object(a.jsx)(U.a,{item:!0,xs:5,children:Object(a.jsx)(F.a,{select:!0,fullWidth:!0,SelectProps:{multiple:!0,renderValue:function(e){return e.join(", ")}},margin:"normal",variant:"outlined",label:"Rule Tags",value:x,onChange:le("tags"),children:z.map((function(e){return Object(a.jsx)(q.a,{value:e,children:e},e)}))})}),Object(a.jsx)(U.a,{item:!0,xs:4,children:Object(a.jsxs)(F.a,{select:!0,fullWidth:!0,margin:"normal",variant:"outlined",label:"Language",value:N,onChange:le("lang"),children:[Object(a.jsx)(q.a,{value:"ANY",children:"Any"},"Any"),Z.map((function(e){return Object(a.jsx)(q.a,{value:e,children:e},e)}))]})}),Object(a.jsx)(U.a,{item:!0,xs:12,children:Object(a.jsx)(F.a,{select:!0,fullWidth:!0,SelectProps:{multiple:!0,renderValue:function(e){return e.join(", ")}},margin:"normal",variant:"outlined",label:"Default Quality Profiles",value:A,onChange:le("qualityProfiles"),children:$.map((function(e){return Object(a.jsx)(q.a,{value:e,children:e},e)}))})})]})})}),Object(a.jsx)("div",{className:e.searchResults,children:Object(a.jsx)(g.a,{maxWidth:"md",children:Object(a.jsx)(U.a,{container:!0,spacing:3,children:Object(a.jsxs)(U.a,{item:!0,xs:12,children:[Object(a.jsx)(l.a,{className:e.topRow,children:Object(a.jsx)(l.a,{className:e.resultsCount,children:Object(a.jsxs)(O.a,{variant:"subtitle1",children:["Number of rules found: ",W]})})}),ce,Object(a.jsx)(H.a,{count:K,page:B,siblingCount:2,onChange:function(e,t){return I(t)}})]})})})})]})},K=r(369),z=r(370),Z=r(371),$=r(372),ee=r(75),te=r.n(ee),re=Object(u.a)((function(e){return{root:{flexGrow:1,marginBottom:"13px",backgroundColor:"#c72b28"},homeButton:{marginRight:e.spacing(2)},title:{flexGrow:1},unimplemented:{color:"#FFFFFF"}}}));function ae(){var e=re();return Object(a.jsx)(K.a,{position:"static",className:e.root,children:Object(a.jsxs)(z.a,{children:[Object(a.jsx)(Z.a,{edge:"start",className:e.homeButton,color:"inherit","aria-label":"menu",href:"/rspec",children:Object(a.jsx)(te.a,{})}),Object(a.jsx)(O.a,{variant:"h6",className:e.title,children:"SonarSource Rule Specifications"}),Object(a.jsx)($.a,{href:"https://github.com/SonarSource/rspec/pulls?q=is%3Aopen+is%3Apr+%22Create+rule%22",children:Object(a.jsx)("span",{className:e.unimplemented,children:" Rules under specification "})})]})})}var ne=function(){var e=d();return Object(a.jsx)(i.a,{children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(ae,{}),Object(a.jsx)(l.a,{children:Object(a.jsx)(j.a,{basename:"/rspec",children:Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{path:"/:ruleid/:language?",component:M}),Object(a.jsx)(h.a,{children:Object(a.jsx)(_,{})})]})})})]})})};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ne,{})}),document.getElementById("root"))},93:function(e,t,r){}},[[317,1,2]]]);
//# sourceMappingURL=main.1b69ee21.chunk.js.map