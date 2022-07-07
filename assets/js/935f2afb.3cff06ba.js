"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Z3 Guide Introduction","href":"/z3guide/docs/guide/intro","docId":"guide/intro"},{"type":"link","label":"Basic Commands","href":"/z3guide/docs/guide/basiccommands","docId":"guide/basiccommands"},{"type":"link","label":"Propositional Logic","href":"/z3guide/docs/guide/propositional-logic","docId":"guide/propositional-logic"},{"type":"link","label":"Uninterpreted Functions and Constants","href":"/z3guide/docs/guide/Uninterpreted-functions-and-constants","docId":"guide/Uninterpreted-functions-and-constants"},{"type":"link","label":"Arithmetic","href":"/z3guide/docs/guide/Arithmetic","docId":"guide/Arithmetic"},{"type":"link","label":"Bitvectors","href":"/z3guide/docs/guide/Bitvectors","docId":"guide/Bitvectors"},{"type":"link","label":"IEEE Floats","href":"/z3guide/docs/guide/IEEE Floats","docId":"guide/IEEE Floats"},{"type":"link","label":"Arrays","href":"/z3guide/docs/guide/Arrays","docId":"guide/Arrays"},{"type":"link","label":"Datatypes","href":"/z3guide/docs/guide/Datatypes","docId":"guide/Datatypes"},{"type":"link","label":"Strings","href":"/z3guide/docs/guide/Strings","docId":"guide/Strings"},{"type":"link","label":"Sequences","href":"/z3guide/docs/guide/Sequences","docId":"guide/Sequences"},{"type":"link","label":"Regular Expressions","href":"/z3guide/docs/guide/Regular Expressions","docId":"guide/Regular Expressions"},{"type":"link","label":"Unicode Characters","href":"/z3guide/docs/guide/Characters","docId":"guide/Characters"},{"type":"link","label":"Special Relations","href":"/z3guide/docs/guide/Special Relations","docId":"guide/Special Relations"},{"type":"link","label":"Quantifiers","href":"/z3guide/docs/guide/Quantifiers","docId":"guide/Quantifiers"},{"type":"link","label":"Lambdas","href":"/z3guide/docs/guide/Lambdas","docId":"guide/Lambdas"},{"type":"link","label":"Recursive Functions","href":"/z3guide/docs/guide/Recursive Functions","docId":"guide/Recursive Functions"},{"type":"link","label":"Conclusion","href":"/z3guide/docs/guide/Conclusion","docId":"guide/Conclusion"}]},{"type":"category","label":"strategies","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/z3guide/docs/strategies/intro","docId":"strategies/intro"},{"type":"link","label":"Goals","href":"/z3guide/docs/strategies/goals","docId":"strategies/goals"},{"type":"link","label":"Tactics","href":"/z3guide/docs/strategies/tactics","docId":"strategies/tactics"},{"type":"link","label":"Probes","href":"/z3guide/docs/strategies/probes","docId":"strategies/probes"}]},{"type":"category","label":"optimization","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/z3guide/docs/optimization/intro","docId":"optimization/intro"},{"type":"link","label":"Optimization from the API","href":"/z3guide/docs/optimization/apioptimization","docId":"optimization/apioptimization"},{"type":"link","label":"Arithmetical Optimization","href":"/z3guide/docs/optimization/arithmeticaloptimization","docId":"optimization/arithmeticaloptimization"},{"type":"link","label":"Soft Constraints","href":"/z3guide/docs/optimization/softconstraints","docId":"optimization/softconstraints"},{"type":"link","label":"Combining Objectives","href":"/z3guide/docs/optimization/combiningobjectives","docId":"optimization/combiningobjectives"},{"type":"link","label":"A Small Case Study","href":"/z3guide/docs/optimization/asmallcasestudy","docId":"optimization/asmallcasestudy"},{"type":"link","label":"Advanced Topics","href":"/z3guide/docs/optimization/advancedtopics","docId":"optimization/advancedtopics"}]},{"type":"category","label":"fixedpoints","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/z3guide/docs/fixedpoints/intro","docId":"fixedpoints/intro"},{"type":"link","label":"Basic Datalog","href":"/z3guide/docs/fixedpoints/basicdatalog","docId":"fixedpoints/basicdatalog"},{"type":"link","label":"Generalized PDR","href":"/z3guide/docs/fixedpoints/engineforpdr","docId":"fixedpoints/engineforpdr"},{"type":"link","label":"Syntax","href":"/z3guide/docs/fixedpoints/syntax","docId":"fixedpoints/syntax"}]},{"type":"category","label":"playground","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Playground","href":"/z3guide/docs/playground/playground","docId":"playground/playground"}]}]},"docs":{"fixedpoints/basicdatalog":{"id":"fixedpoints/basicdatalog","title":"Basic Datalog","description":"The default fixed-point engine is a bottom-up Datalog engine. It works with finite relations and uses finite table representations as hash tables as the default way to represent finite relations.","sidebar":"tutorialSidebar"},"fixedpoints/engineforpdr":{"id":"fixedpoints/engineforpdr","title":"Generalized PDR","description":"A different underlying engine for fixed-points is based on an algorithm for","sidebar":"tutorialSidebar"},"fixedpoints/intro":{"id":"fixedpoints/intro","title":"Introduction","description":"Z3 contains an extension called muZ for reasoning about Constrained Horn Clauses and Datalog programs.","sidebar":"tutorialSidebar"},"fixedpoints/syntax":{"id":"fixedpoints/syntax","title":"Syntax","description":"Three different text-based input formats are accepted.","sidebar":"tutorialSidebar"},"guide/Arithmetic":{"id":"guide/Arithmetic","title":"Arithmetic","description":"Basics","sidebar":"tutorialSidebar"},"guide/Arrays":{"id":"guide/Arrays","title":"Arrays","description":"As part of formulating a programme of a mathematical theory of computation McCarthy proposed a basic theory of arrays as characterized by the select-store axioms. The expression (select a i) returns the value stored at position i of the array a; and (store a i v) returns a new array identical to a, but on position i it contains the value v.","sidebar":"tutorialSidebar"},"guide/basiccommands":{"id":"guide/basiccommands","title":"Basic Commands","description":"The Z3 input format is an extension of the one defined by the SMT-LIB 2.0 standard. A Z3 script is a sequence of commands. The help command displays a list of all available commands. The command echo displays a message. Internally, Z3 maintains a stack of user provided formulas and declarations. We say these are the assertions provided by the user. The command declare-const declares a constant of a given type (aka sort). The command declare-fun declares a function. In the following example, we declared a function that receives an integer and a boolean, and returns an integer.","sidebar":"tutorialSidebar"},"guide/Bitvectors":{"id":"guide/Bitvectors","title":"Bitvectors","description":"SMTLIB2 standard The Theory of fixed sized bit-vectors","sidebar":"tutorialSidebar"},"guide/Characters":{"id":"guide/Characters","title":"Unicode Characters","description":"The Unicode sort ranges over unicode characters.","sidebar":"tutorialSidebar"},"guide/Conclusion":{"id":"guide/Conclusion","title":"Conclusion","description":"Z3 is an efficient theorem prover used in many software testing, analysis and verification applications. In this tutorial, we covered its main capabilities using the textual interface. However, most applications use the Z3 programmatic API to access these features.","sidebar":"tutorialSidebar"},"guide/Datatypes":{"id":"guide/Datatypes","title":"Datatypes","description":"Algebraic datatypes, known from programming languages such as ML, offer a convenient way for specifying common data structures. Records and tuples are special cases of algebraic datatypes, and so are scalars (enumeration types). But algebraic datatypes are more general. They can be used to specify finite lists, trees and other recursive structures.","sidebar":"tutorialSidebar"},"guide/IEEE Floats":{"id":"guide/IEEE Floats","title":"IEEE Floats","description":"SMTLIB2 standard IEEE Floating Point Numbers","sidebar":"tutorialSidebar"},"guide/intro":{"id":"guide/intro","title":"Z3 Guide Introduction","description":"Z3 is a state-of-the art theorem prover from Microsoft Research. It can be used to check the satisfiability of logical formulas over one or more theories. Z3 offers a compelling match for software analysis and verification tools, since several common software constructs map directly into supported theories.","sidebar":"tutorialSidebar"},"guide/Lambdas":{"id":"guide/Lambdas","title":"Lambdas","description":"Lambda binding is available as an extension to the theory of arrays.","sidebar":"tutorialSidebar"},"guide/propositional-logic":{"id":"guide/propositional-logic","title":"Propositional Logic","description":"The pre-defined sort Bool is the sort (type) of all Boolean propositional expressions. Z3 supports the usual Boolean operators and, or, xor, not, = (implication), ite (if-then-else). Bi-implications are represented using equatity =. The following example shows how to prove that if p implies q and q implies r, then p implies r. We accomplish that by showing that the negation is unsatisfiable. The command define-fun is used to define a macro (aka alias). In this example, conjecture is an alias for the conjecture we want to prove.","sidebar":"tutorialSidebar"},"guide/Quantifiers":{"id":"guide/Quantifiers","title":"Quantifiers","description":"Z3 is a decision procedure for the combination of the previous quantifier-free theories. That is, it can answer whether a quantifier-free formula, modulo the theories referenced by the formula, is satisfiable or whether it is unsatisfiable. Z3 also accepts and can work with formulas that use quantifiers. It is no longer a decision procedure for such formulas in general (and for good reasons, as there can be no decision procedure for first-order logic).","sidebar":"tutorialSidebar"},"guide/Recursive Functions":{"id":"guide/Recursive Functions","title":"Recursive Functions","description":"SMTLIB2 standard: Page 62","sidebar":"tutorialSidebar"},"guide/Regular Expressions":{"id":"guide/Regular Expressions","title":"Regular Expressions","description":"SMTLIB2 standard The theory of unicode strings and regular expressions","sidebar":"tutorialSidebar"},"guide/Sequences":{"id":"guide/Sequences","title":"Sequences","description":"The sort constructor Seq can be used to create sequences over any base sort.","sidebar":"tutorialSidebar"},"guide/Special Relations":{"id":"guide/Special Relations","title":"Special Relations","description":"Binary relations that are partial orders, linear orders, tree orders, and piecewise linear orders","sidebar":"tutorialSidebar"},"guide/Strings":{"id":"guide/Strings","title":"Strings","description":"SMTLIB2 standard The theory of unicode strings","sidebar":"tutorialSidebar"},"guide/Uninterpreted-functions-and-constants":{"id":"guide/Uninterpreted-functions-and-constants","title":"Uninterpreted Functions and Constants","description":"The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function.","sidebar":"tutorialSidebar"},"optimization/advancedtopics":{"id":"optimization/advancedtopics","title":"Advanced Topics","description":"Difference Logic","sidebar":"tutorialSidebar"},"optimization/apioptimization":{"id":"optimization/apioptimization","title":"Optimization from the API","description":"Z3\'s programmatic API exposes all available optimization features.","sidebar":"tutorialSidebar"},"optimization/arithmeticaloptimization":{"id":"optimization/arithmeticaloptimization","title":"Arithmetical Optimization","description":"The SMT-LIB 2.0 standard is extended with three commands for expressing optimization objectives.","sidebar":"tutorialSidebar"},"optimization/asmallcasestudy":{"id":"optimization/asmallcasestudy","title":"A Small Case Study","description":"In collaboration with Anh-Dung Phan.","sidebar":"tutorialSidebar"},"optimization/combiningobjectives":{"id":"optimization/combiningobjectives","title":"Combining Objectives","description":"Many optimization problems require solving multiple objectives.","sidebar":"tutorialSidebar"},"optimization/intro":{"id":"optimization/intro","title":"Introduction","description":"Z3\'s main functionality to checking the satisfiability of logical formulas over one or more theories. Z3 can produce models for satisfiable formulas. Yet in many cases arbitrary models are insufficient and applications are really solving optimization problems: one or more values should be minimal or maximal. When there are multiple objectives, they should be combined using Pareto fronts, lexicographic priorities, or optimized independently. This section describes a feature exposed by Z3 that lets users formulate objective functions directly with Z3. Under the hood is a portfolio of approaches for solving linear optimization problems over SMT formulas, MaxSMT, and their combinations.","sidebar":"tutorialSidebar"},"optimization/softconstraints":{"id":"optimization/softconstraints","title":"Soft Constraints","description":"The (assert-soft formula :weight numeral) command asserts a weighted soft constraint. The weight must be a positive natural number, but is optional. If omitted, the weight is set to 1.","sidebar":"tutorialSidebar"},"playground/playground":{"id":"playground/playground","title":"Playground","description":"Run Z3 Code on the web!","sidebar":"tutorialSidebar"},"strategies/goals":{"id":"strategies/goals","title":"Goals","description":"Z3 implements a methodology for orchestrating reasoning engines where \\"big\\" symbolic reasoning steps are represented as functions known as tactics, and tactics are composed using combinators known as tacticals. Tactics process sets of formulas called Goals.","sidebar":"tutorialSidebar"},"strategies/intro":{"id":"strategies/intro","title":"Introduction","description":"High-performance solvers, such as Z3, contain many tightly integrated, handcrafted heuristic combinations of algorithmic proof methods. While these heuristic combinations tend to be highly tuned for known classes of problems, they may easily perform very badly on new classes of problems. This issue is becoming increasingly pressing as solvers begin to gain the attention of practitioners in diverse areas of science and engineering. In many cases, changes to the solver heuristics can make a tremendous difference.","sidebar":"tutorialSidebar"},"strategies/probes":{"id":"strategies/probes","title":"Probes","description":"Probes (aka formula measures) are evaluated over goals. Boolean expressions over them can be built using relational operators and Boolean connectives. The tactic (fail-if cond) fails if the given goal does not satisfy the condition cond. Many numeric and Boolean measures are available in Z3. The command (help-tactic) provides the list of all built-in probes.","sidebar":"tutorialSidebar"},"strategies/tactics":{"id":"strategies/tactics","title":"Tactics","description":"Z3 comes equipped with many built-in tactics. The command (help-tactic) provides a short description of all built-in tactics.","sidebar":"tutorialSidebar"}}}')}}]);