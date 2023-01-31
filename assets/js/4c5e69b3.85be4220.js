"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1150],{8518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(7634),s=n.n(i);const l={title:"Basic Datalog",sidebar_position:2},o=void 0,d={unversionedId:"fixedpoints/basicdatalog",id:"fixedpoints/basicdatalog",title:"Basic Datalog",description:"The default fixed-point engine is a bottom-up Datalog engine. It works with finite relations and uses finite table representations as hash tables as the default way to represent finite relations.",source:"@site/docs-smtlib/05 - fixedpoints/02 - basicdatalog.md",sourceDirName:"05 - fixedpoints",slug:"/fixedpoints/basicdatalog",permalink:"/z3guide/docs/fixedpoints/basicdatalog",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/05 - fixedpoints/02 - basicdatalog.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Basic Datalog",sidebar_position:2},sidebar:"smtlibSidebar",previous:{title:"Introduction",permalink:"/z3guide/docs/fixedpoints/intro"},next:{title:"Generalized PDR with SPACER",permalink:"/z3guide/docs/fixedpoints/engineforpdr"}},u={},p=[{value:"Relations, rules and queries",id:"relations-rules-and-queries",level:2},{value:"Relations with arguments",id:"relations-with-arguments",level:2}],c={toc:p};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The default fixed-point engine is a bottom-up Datalog engine. It works with finite relations and uses finite table representations as hash tables as the default way to represent finite relations."),(0,r.kt)("h2",{id:"relations-rules-and-queries"},"Relations, rules and queries"),(0,r.kt)("p",null,"The first example illustrates how to declare relations, rules and how to pose queries."),(0,r.kt)(s(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-rel a ())\n(declare-rel b ())\n(declare-rel c ())\n(rule (=> b a))\n(rule (=> c b))\n\n;(set-option :fixedpoint.engine datalog)\n(query a)\n\n(rule c)\n(query a\n :print-answer true)",result:{output:"unsat\nsat\ntrue\n",error:"",status:"z3-ran",hash:"3fc987252fad588ab4bd1cb52b6ecc33265b4655"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.12.1",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"The example illustrates some of the basic constructs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," (declare-rel a ())\n")),(0,r.kt)("p",null,"declares a 0-ary relation a."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  (rule (=> b a))\n")),(0,r.kt)("p",null,"Create the rule that a follows from b. In general you can create a rule with multiple premises and a name using the format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   (rule (=> (and b c) a) name)\n")),(0,r.kt)("p",null,"The name is optional. It is used for tracking the rule in derivation proofs. Continuing with the example, a is false unless b is established."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," (query a)\n")),(0,r.kt)("p",null,"Asks if relation ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," can be derived. The rules so far say that a follows if ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," is established and that ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," follows if ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," is established. But nothing establishes ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," is also not established, so ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," cannot be derived."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," (rule c)\n")),(0,r.kt)("p",null,"Now it is the case that a can be derived."),(0,r.kt)("h2",{id:"relations-with-arguments"},"Relations with arguments"),(0,r.kt)("p",null,"Relations can take arguments. We illustrate relations with arguments using edges and paths in a graph."),(0,r.kt)(s(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:";(set-option :fixedpoint.engine datalog)\n(define-sort s () (_ BitVec 3))\n(declare-rel edge (s s))\n(declare-rel path (s s))\n(declare-var a s)\n(declare-var b s)\n(declare-var c s)\n\n(rule (=> (edge a b) (path a b)))\n(rule (=> (and (path a b) (path b c)) (path a c)))\n\n(rule (edge #b001 #b010))\n(rule (edge #b001 #b011))\n(rule (edge #b010 #b100))\n\n(declare-rel q1 ())\n(declare-rel q2 ())\n(declare-rel q3 (s))\n(rule (=> (path #b001 #b100) q1))\n(rule (=> (path #b011 #b100) q2))\n(rule (=> (path #b001 b) (q3 b)))\n\n(query q1)\n(query q2)\n(query q3 :print-answer true)",result:{output:"xx 2\nxx 2\nxx 2\nxx 2\nxx 2\nxx 2\nsat\nxx 2\nxx 2\nxx 2\nxx 2\nxx 2\nxx 2\nunsat\nxx 2\nxx 2\nxx 2\nxx 2\nxx 2\nxx 2\nsat\n(or (= (:var 0) #b010) (= (:var 0) #b100) (= (:var 0) #b011))\n",error:"",status:"z3-ran",hash:"150c419eabbf43e952c6950f3d8da8852854f378"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.12.1",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"The example uses the declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," (declare-var a s)\n")),(0,r.kt)("p",null,"to instrument the fixed-point engine that a should be treated as a variable appearing in rules."))}b.isMDXComponent=!0}}]);