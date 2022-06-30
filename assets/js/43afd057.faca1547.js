"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89],{3986:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>m,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var n=a(3117),t=(a(7294),a(3905)),o=a(7689);const c={title:"Using Scopes"},i=void 0,r={unversionedId:"basic-commands/using-scopes",id:"basic-commands/using-scopes",title:"Using Scopes",description:"In some applications, we want to explore several similar problems that share several definitions and assertions. We can use the commands push and pop for doing that. Z3 maintains a global stack of declarations and assertions. The command push creates a new scope by saving the current stack size. The command pop removes any assertion or declaration performed between it and the matching push. The check-sat and get-assertions commands always operate on the content of the global stack.",source:"@site/docs/02 - basic-commands/02 - using-scopes.md",sourceDirName:"02 - basic-commands",slug:"/basic-commands/using-scopes",permalink:"/rise4fun/docs/basic-commands/using-scopes",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/02 - basic-commands/02 - using-scopes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Using Scopes"},sidebar:"tutorialSidebar",previous:{title:"Basic Commands",permalink:"/rise4fun/docs/basic-commands/basic-commands"},next:{title:"Configuration",permalink:"/rise4fun/docs/basic-commands/configuration"}},m={},d=[],p={toc:d};function l(e){let{components:s,...a}=e;return(0,t.kt)("wrapper",(0,n.Z)({},p,a,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"In some applications, we want to explore several similar problems that share several definitions and assertions. We can use the commands push and pop for doing that. Z3 maintains a global stack of declarations and assertions. The command push creates a new scope by saving the current stack size. The command pop removes any assertion or declaration performed between it and the matching push. The check-sat and get-assertions commands always operate on the content of the global stack."),(0,t.kt)("p",null,"In the following example, the command (assert p) signs an error because the pop command removed the declaration for p. If the last pop command is removed, then the error is corrected."),(0,t.kt)(o.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(declare-const z Int)\n(push)\n(assert (= (+ x y) 10))\n(assert (= (+ x ( 2 y)) 20))\n(check-sat)\n(pop) ; remove the two assertions\n(push) \n(assert (= (+ ( 3 x) y) 10))\n(assert (= (+ ( 2 x) ( 2 y)) 21))\n(check-sat)\n(declare-const p Bool)\n(pop)\n(assert p) ; error, since declaration of p was removed from the stack"},mdxType:"Z3CodeBlock"}),(0,t.kt)("p",null,"The push and pop commands can optionally receive a numeral argument as specifed by the SMT 2 language."))}l.isMDXComponent=!0}}]);