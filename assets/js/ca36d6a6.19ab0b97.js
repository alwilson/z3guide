"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4692],{1921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(3117),i=(t(7294),t(3905)),a=t(7634),o=t.n(a);const s={title:"Generalized PDR with SPACER",sidebar_position:3},d=void 0,l={unversionedId:"fixedpoints/engineforpdr",id:"fixedpoints/engineforpdr",title:"Generalized PDR with SPACER",description:"A different underlying engine for fixed-points is based on the SPACER algorithm for",source:"@site/docs-smtlib/05 - fixedpoints/03 - engineforpdr.md",sourceDirName:"05 - fixedpoints",slug:"/fixedpoints/engineforpdr",permalink:"/z3guide/docs/fixedpoints/engineforpdr",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/05 - fixedpoints/03 - engineforpdr.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Generalized PDR with SPACER",sidebar_position:3},sidebar:"smtlibSidebar",previous:{title:"Basic Datalog",permalink:"/z3guide/docs/fixedpoints/basicdatalog"},next:{title:"Syntax",permalink:"/z3guide/docs/fixedpoints/syntax"}},c={},u=[{value:"Procedure Calls",id:"procedure-calls",level:2}],p={toc:u};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A different underlying engine for fixed-points is based on the SPACER algorithm for\nProperty Directed Reachability ",(0,i.kt)("a",{parentName:"p",href:"https://spacer.bitbucket.io/"},"(PDR)"),". The PDR engine is used by default for relations over integers, reals and algebraic data-types. The version in Z3 applies to Horn clauses with arithmetic and Boolean domains. The engine also works with domains using arrays, algebraic data-types and bit-vectors. The PDR engine is targeted at applications from symbolic model checking of software. The systems may be infinite state. The following examples also serve a purpose of showing how software model checking problems (of safety properties) can be embedded into Horn clauses and solved using PDR."),(0,i.kt)("h2",{id:"procedure-calls"},"Procedure Calls"),(0,i.kt)("p",null,"McCarthy's 91 function illustrates a procedure that calls itself recursively twice. The Horn clauses below encode the recursive function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  mc(x) = if x > 100 then x - 10 else mc(mc(x+11))\n")),(0,i.kt)("p",null,"The general scheme for encoding recursive procedures is by creating a predicate for each procedure and adding an additional output variable to the predicate. Nested calls to procedures within a body can be encoded as a conjunction of relations."),(0,i.kt)(o(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-rel mc (Int Int))\n(declare-var n Int)\n(declare-var m Int)\n(declare-var p Int)\n\n(rule (=> (> m 100) (mc m (- m 10))))\n(rule (=> (and (<= m 100) (mc (+ m 11) p) (mc p n)) (mc m n)))\n\n(declare-rel q1 (Int Int))\n(rule (=> (and (mc m n) (< n 91)) (q1 m n))) \n(query q1 :print-certificate true)\n\n(declare-rel q2 (Int Int))\n(rule (=> (and (mc m n) (not (= n 91)) (<= m 101)) (q2 m n)))\n(query q2 :print-certificate true)\n\n(declare-rel q3 (Int Int))\n(rule (=> (and (mc m n) (< n 92)) (q3 m n)))\n(query q3 :print-certificate true)",result:{output:"unsat\n(forall ((A Int) (B Int)) (! (= (mc A B) (not (<= B 90))) :weight 0))\nunsat\n(forall ((A Int) (B Int))\n  (! (let ((a!1 (not (>= (+ B (* (- 1) A)) (- 9)))))\n     (let ((a!2 (and (not (<= B 90)) (or (not (>= B 92)) a!1))))\n       (= (mc A B) a!2)))\n     :weight 0))\nsat\n(let ((a!1 (forall ((A Int) (B Int))\n             (! (=> (and (mc A B) (not (<= 92 B))) (query!24 B A)) :weight 0)))\n      (a!2 (forall ((A Int) (B Int))\n             (! (=> (and (not (<= B 100)) (= A (+ (- 10) B))) (mc B A))\n                :weight 0))))\n  (mp ((_ hyper-res 0 0 0 1)\n        (asserted a!1)\n        ((_ hyper-res 0 0) (asserted a!2) (mc 101 91))\n        (query!24 91 101))\n      (asserted (=> (query!24 91 101) false))\n      false))\n",error:"",status:"z3-ran",hash:"90d8732bc6291bfff1337ea42b13112297b2ea3d"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}))}m.isMDXComponent=!0}}]);