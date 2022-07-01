"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[426],{4687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(3117),a=(n(7294),n(3905)),r=n(7689);const i={title:"Basics"},o=void 0,c={unversionedId:"Arithmetic/Basics",id:"Arithmetic/Basics",title:"Basics",description:"Z3 has builtin support for integer and real constants. This two types should not be confused with machine integers (32-bit or 64-bit) and floating point numbers. These two types (sorts) represent the mathematical integers and reals. The command declare-const is used to declare integer and real constants.",source:"@site/docs/05 - Arithmetic/01 - Basics.md",sourceDirName:"05 - Arithmetic",slug:"/Arithmetic/Basics",permalink:"/rise4fun/docs/Arithmetic/Basics",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/05 - Arithmetic/01 - Basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Basics"},sidebar:"tutorialSidebar",previous:{title:"Arithmetic",permalink:"/rise4fun/docs/category/arithmetic"},next:{title:"Nonlinear Arithmetic",permalink:"/rise4fun/docs/Arithmetic/nonlinear-arithmetic"}},d={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Z3 has builtin support for integer and real constants. This two types should not be confused with machine integers (32-bit or 64-bit) and floating point numbers. These two types (sorts) represent the mathematical integers and reals. The command declare-const is used to declare integer and real constants."),(0,a.kt)(r.Z,{input:{code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(declare-const d Real)\n(declare-const e Real)",result:{output:"",error:"",status:"z3-ran",hash:"73117ea3d38414eb971236ef5b9627d9b724fcec"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"After constants are declared, the user can assert.smt formulas containing these constants. The formulas contain arithmetic operators such as +, -, , and so on. The command check-sat will instruct Z3 to try to find an interpretation for the declared constants that makes all formulas true. The interpretation is basically assigning a number to each constant. If such interpretation exists, we say it is a model for the asserted formulas. The command get-model displays the model built by Z3."),(0,a.kt)(r.Z,{input:{code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(declare-const d Real)\n(declare-const e Real)\n(assert (< a (+ b 2)))\n(assert (= a (+ ( 2 c) 10)))\n(assert (= (+ c b) 1000))\n(assert (= d e))\n(check-sat)\n(get-model)",result:{output:"(error \"line 7 column 18: invalid expression, '(' or symbol expected\")\nsat\n(\n  (define-fun b () Int\n    1)\n  (define-fun a () Int\n    2)\n  (define-fun e () Real\n    0.0)\n  (define-fun d () Real\n    0.0)\n  (define-fun c () Int\n    999)\n)\n",error:"",status:"z3-ran",hash:"f7796f03c7c30e4bee897d4c18e20e05a23845f1"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"Real constants should contain a decimal point. Unlike most programming languages, Z3 will not convert automatically integers into reals and vice-versa. The function to-real can be used to convert an integer expression into a real one."),(0,a.kt)(r.Z,{input:{code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(declare-const d Real)\n(declare-const e Real)\n(assert (< e (+ (to_real (+ a b)) 2.0)))\n(assert (= d (+ (to_real c) 0.5)))\n(assert (< a b))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun e () Real\n    2.0)\n  (define-fun b () Int\n    1)\n  (define-fun a () Int\n    0)\n  (define-fun c () Int\n    0)\n  (define-fun d () Real\n    (/ 1.0 2.0))\n)\n",error:"",status:"z3-ran",hash:"5734bdcabf2d5cce13629277c929d2fcdd92b17b"}},mdxType:"Z3CodeBlock"}))}m.isMDXComponent=!0}}]);