"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[885],{6566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(3117),l=(n(7294),n(3905)),i=n(7689);const o={title:"Advanced Topics",sidebar_position:7},s=void 0,r={unversionedId:"optimization/advancedtopics",id:"optimization/advancedtopics",title:"Advanced Topics",description:"Difference Logic",source:"@site/docs/optimization/07 - advancedtopics.md",sourceDirName:"optimization",slug:"/optimization/advancedtopics",permalink:"/rise4fun/docs/optimization/advancedtopics",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/optimization/07 - advancedtopics.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Advanced Topics",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"A Small Case Study",permalink:"/rise4fun/docs/optimization/asmallcasestudy"},next:{title:"Introduction",permalink:"/rise4fun/docs/strategies/intro"}},d={},u=[{value:"Difference Logic",id:"difference-logic",level:2},{value:"Weighted Max-SAT solvers, a portfolio",id:"weighted-max-sat-solvers-a-portfolio",level:2}],f={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"difference-logic"},"Difference Logic"),(0,l.kt)("p",null,"Z3 uses by default an implementation of dual Simplex to solve feasibility and primal Simplex for optimality. For arithmetical constraints that only have differences between variables, known as difference logic, Z3 furthermore contains alternative decision procedures tuned for this domain. These have to be configured explicitly. There is a choice between a solver tuned for sparse constraints (where the ratio of variables is high compared to number of inequalities) and a solver tuned for dense constraints."),(0,l.kt)(i.Z,{input:{code:"(set-option :smt.arith.solver 1) ; enables difference logic solver for sparse constraints\n(set-option :smt.arith.solver 3) ; enables difference logic solver for dense constraints\n(declare-const x Int)\n(declare-const y Int)\n(assert (>= 10 x))\n(assert (>= x (+ y 7)))\n(maximize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) 13)\n)\n",error:"",status:"z3-ran",hash:"31348e42f666866cbb642b448c8ec69832bf9daf"}},mdxType:"Z3CodeBlock"}),(0,l.kt)("h2",{id:"weighted-max-sat-solvers-a-portfolio"},"Weighted Max-SAT solvers, a portfolio"),(0,l.kt)("p",null,"The default solver for MaxSAT problems is the MaxRes algorithm. Several other alternative solvers are available. The default solver\nis chosen based on benchmarking against MaxSAT competition benchmarks, but other solver combinations, such as wmax, may work well for some domains.\nWhen the objectives are weighted by weights such as 1, 2, 4, 8, 16, such that the sum of weights in every prefix is lower than the next weight, the solver\nuses a lexicographic optimization algorithm that attempts to first solve for the highest weight before continuing with lower weights."),(0,l.kt)("p",null,"The other main MaxSAT algorithms avialable are"),(0,l.kt)(i.Z,{input:{code:"  (set-option :opt.maxsat_engine rc2)\n  (set-option :opt.maxsat_engine maxresbin)\n  (set-option :opt.maxsat_engine wmax)",result:{output:"",error:"",status:"z3-ran",hash:"b2f206c383d73fc68e82cb8f6966ebefbc228921"}},mdxType:"Z3CodeBlock"}),(0,l.kt)("p",null,"Note that our implementations of these engines do not (yet) perform as well as the default on most benchmarks we have tried. The option"),(0,l.kt)(i.Z,{input:{code:"  (set-option :opt.enable_sat true)",result:{output:"",error:"",status:"z3-ran",hash:"d82e7b26a6f9577a037602b8bcb3f0353a7bbb22"}},mdxType:"Z3CodeBlock"}),(0,l.kt)("p",null,"is made available for the pbmax solver. It causes Pseudo-Boolean constraints to be compiled into propositional logic. It uses a more efficient SAT solver if the input can be compiled directly to SAT. If not, pbmax uses a custom Pseudo-Boolean theory solver. In fact, the default behavior of the optimization engine is to detect 0-1 variables from bounds constraints and use a Pseudo-Boolean solver for these. Maximization objectives over 0-1 variables are also translated to MaxSAT form such that one of the MaxSAT engines can be used. To disable this translation use"),(0,l.kt)(i.Z,{input:{code:"  (set-option :opt.elim_01 false)",result:{output:"",error:"",status:"z3-ran",hash:"70054b8afc1273d636f38f5564ebd307b7c7d95a"}},mdxType:"Z3CodeBlock"}),(0,l.kt)("p",null,"The Pseudo-Boolean solver is in some, often pathological, cases more efficient than using a SAT solver. For example, it handles pidgeon hole problems well. Since cutting planes are expensive, they are applied infrequently. To set their frequency use:"),(0,l.kt)(i.Z,{input:{code:"  (set-option :smt.pb.conflict_frequency 1)",result:{output:"",error:"",status:"z3-ran",hash:"c549e3fb73c94aadd95aa56a9ac749964dcc8e25"}},mdxType:"Z3CodeBlock"}),(0,l.kt)("p",null,"The Pseudo-Boolean solver contains a few tricks. It compiles cardinality constraints and other pseudo-Boolean inequalities with small coefficients into sorting circuits. It performs this compilation on-demand, after the inequalities have been used beyond a threshold. To disable compilation use:"),(0,l.kt)(i.Z,{input:{code:"  (set-option :smt.pb.enable_compilation false)",result:{output:"(error \"line 1 column 42: unknown parameter 'pb.enable_compilation' at module 'smt'\nLegal parameters are:\n  arith.auto_config_simplex (bool) (default: false)\n  arith.bprop_on_pivoted_rows (bool) (default: true)\n  arith.branch_cut_ratio (unsigned int) (default: 2)\n  arith.dump_lemmas (bool) (default: false)\n  arith.eager_eq_axioms (bool) (default: true)\n  arith.enable_hnf (bool) (default: true)\n  arith.greatest_error_pivot (bool) (default: false)\n  arith.ignore_int (bool) (default: false)\n  arith.int_eq_branch (bool) (default: false)\n  arith.min (bool) (default: false)\n  arith.nl (bool) (default: true)\n  arith.nl.branching (bool) (default: true)\n  arith.nl.delay (unsigned int) (default: 500)\n  arith.nl.expp (bool) (default: false)\n  arith.nl.gr_q (unsigned int) (default: 10)\n  arith.nl.grobner (bool) (default: true)\n  arith.nl.grobner_cnfl_to_report (unsigned int) (default: 1)\n  arith.nl.grobner_eqs_growth (unsigned int) (default: 10)\n  arith.nl.grobner_expr_degree_growth (unsigned int) (default: 2)\n  arith.nl.grobner_expr_size_growth (unsigned int) (default: 2)\n  arith.nl.grobner_frequency (unsigned int) (default: 4)\n  arith.nl.grobner_max_simplified (unsigned int) (default: 10000)\n  arith.nl.grobner_subs_fixed (unsigned int) (default: 2)\n  arith.nl.horner (bool) (default: true)\n  arith.nl.horner_frequency (unsigned int) (default: 4)\n  arith.nl.horner_row_length_limit (unsigned int) (default: 10)\n  arith.nl.horner_subs_fixed (unsigned int) (default: 2)\n  arith.nl.nra (bool) (default: true)\n  arith.nl.order (bool) (default: true)\n  arith.nl.rounds (unsigned int) (default: 1024)\n  arith.nl.tangents (bool) (default: true)\n  arith.print_ext_var_names (bool) (default: false)\n  arith.print_stats (bool) (default: false)\n  arith.propagate_eqs (bool) (default: true)\n  arith.propagation_mode (unsigned int) (default: 1)\n  arith.random_initial_value (bool) (default: false)\n  arith.rep_freq (unsigned int) (default: 0)\n  arith.simplex_strategy (unsigned int) (default: 0)\n  arith.solver (unsigned int) (default: 6)\n  array.extensional (bool) (default: true)\n  array.weak (bool) (default: false)\n  auto_config (bool) (default: true)\n  bv.delay (bool) (default: true)\n  bv.enable_int2bv (bool) (default: true)\n  bv.eq_axioms (bool) (default: true)\n  bv.reflect (bool) (default: true)\n  bv.watch_diseq (bool) (default: false)\n  candidate_models (bool) (default: false)\n  case_split (unsigned int) (default: 1)\n  clause_proof (bool) (default: false)\n  core.extend_nonlocal_patterns (bool) (default: false)\n  core.extend_patterns (bool) (default: false)\n  core.extend_patterns.max_distance (unsigned int) (default: 4294967295)\n  core.minimize (bool) (default: false)\n  core.validate (bool) (default: false)\n  cube_depth (unsigned int) (default: 1)\n  dack (unsigned int) (default: 1)\n  dack.eq (bool) (default: false)\n  dack.factor (double) (default: 0.1)\n  dack.gc (unsigned int) (default: 2000)\n  dack.gc_inv_decay (double) (default: 0.8)\n  dack.threshold (unsigned int) (default: 10)\n  delay_units (bool) (default: false)\n  delay_units_threshold (unsigned int) (default: 32)\n  dt_lazy_splits (unsigned int) (default: 1)\n  ematching (bool) (default: true)\n  induction (bool) (default: false)\n  lemma_gc_strategy (unsigned int) (default: 0)\n  logic (symbol) (default: )\n  macro_finder (bool) (default: false)\n  max_conflicts (unsigned int) (default: 4294967295)\n  mbqi (bool) (default: true)\n  mbqi.force_template (unsigned int) (default: 10)\n  mbqi.id (string) (default: )\n  mbqi.max_cexs (unsigned int) (default: 1)\n  mbqi.max_cexs_incr (unsigned int) (default: 0)\n  mbqi.max_iterations (unsigned int) (default: 1000)\n  mbqi.trace (bool) (default: false)\n  pb.conflict_frequency (unsigned int) (default: 1000)\n  pb.learn_complements (bool) (default: true)\n  phase_caching_off (unsigned int) (default: 100)\n  phase_caching_on (unsigned int) (default: 400)\n  phase_selection (unsigned int) (default: 3)\n  pull_nested_quantifiers (bool) (default: false)\n  q.lift_ite (unsigned int) (default: 0)\n  q.lite (bool) (default: false)\n  qi.cost (string) (default: (+ weight generation))\n  qi.eager_threshold (double) (default: 10.0)\n  qi.lazy_threshold (double) (default: 20.0)\n  qi.max_instances (unsigned int) (default: 4294967295)\n  qi.max_multi_patterns (unsigned int) (default: 0)\n  qi.profile (bool) (default: false)\n  qi.profile_freq (unsigned int) (default: 4294967295)\n  qi.quick_checker (unsigned int) (default: 0)\n  quasi_macros (bool) (default: false)\n  random_seed (unsigned int) (default: 0)\n  refine_inj_axioms (bool) (default: true)\n  relevancy (unsigned int) (default: 2)\n  restart.max (unsigned int) (default: 4294967295)\n  restart_factor (double) (default: 1.1)\n  restart_strategy (unsigned int) (default: 1)\n  restricted_quasi_macros (bool) (default: false)\n  seq.split_w_len (bool) (default: true)\n  seq.validate (bool) (default: false)\n  str.aggressive_length_testing (bool) (default: false)\n  str.aggressive_unroll_testing (bool) (default: true)\n  str.aggressive_value_testing (bool) (default: false)\n  str.fast_length_tester_cache (bool) (default: false)\n  str.fast_value_tester_cache (bool) (default: true)\n  str.fixed_length_naive_cex (bool) (default: true)\n  str.fixed_length_refinement (bool) (default: false)\n  str.overlap_priority (double) (default: -0.1)\n  str.regex_automata_difficulty_threshold (unsigned int) (default: 1000)\n  str.regex_automata_failed_automaton_threshold (unsigned int) (default: 10)\n  str.regex_automata_failed_intersection_threshold (unsigned int) (default: 10)\n  str.regex_automata_intersection_difficulty_threshold (unsigned int) (default: 1000)\n  str.regex_automata_length_attempt_threshold (unsigned int) (default: 10)\n  str.string_constant_cache (bool) (default: true)\n  str.strong_arrangements (bool) (default: true)\n  string_solver (symbol) (default: seq)\n  theory_aware_branching (bool) (default: false)\n  theory_case_split (bool) (default: false)\n  threads (unsigned int) (default: 1)\n  threads.cube_frequency (unsigned int) (default: 2)\n  threads.max_conflicts (unsigned int) (default: 400)\")\n",error:"",status:"z3-ran",hash:"c35a0a995498bf3048ec3822bec7f394a0b86974"}},mdxType:"Z3CodeBlock"}),(0,l.kt)("p",null,"The Pseudo-Boolean theory solver also uses dual simplex to prune infeasible branches. For constraints with many equalities and inequalities this option can be quite helpful. The option is off by default as it often incurs more overhead than benefit. To enable this option use:"),(0,l.kt)(i.Z,{input:{code:"  (set-option :smt.pb.enable_simplex true)",result:{output:"(error \"line 1 column 38: unknown parameter 'pb.enable_simplex' at module 'smt'\nLegal parameters are:\n  arith.auto_config_simplex (bool) (default: false)\n  arith.bprop_on_pivoted_rows (bool) (default: true)\n  arith.branch_cut_ratio (unsigned int) (default: 2)\n  arith.dump_lemmas (bool) (default: false)\n  arith.eager_eq_axioms (bool) (default: true)\n  arith.enable_hnf (bool) (default: true)\n  arith.greatest_error_pivot (bool) (default: false)\n  arith.ignore_int (bool) (default: false)\n  arith.int_eq_branch (bool) (default: false)\n  arith.min (bool) (default: false)\n  arith.nl (bool) (default: true)\n  arith.nl.branching (bool) (default: true)\n  arith.nl.delay (unsigned int) (default: 500)\n  arith.nl.expp (bool) (default: false)\n  arith.nl.gr_q (unsigned int) (default: 10)\n  arith.nl.grobner (bool) (default: true)\n  arith.nl.grobner_cnfl_to_report (unsigned int) (default: 1)\n  arith.nl.grobner_eqs_growth (unsigned int) (default: 10)\n  arith.nl.grobner_expr_degree_growth (unsigned int) (default: 2)\n  arith.nl.grobner_expr_size_growth (unsigned int) (default: 2)\n  arith.nl.grobner_frequency (unsigned int) (default: 4)\n  arith.nl.grobner_max_simplified (unsigned int) (default: 10000)\n  arith.nl.grobner_subs_fixed (unsigned int) (default: 2)\n  arith.nl.horner (bool) (default: true)\n  arith.nl.horner_frequency (unsigned int) (default: 4)\n  arith.nl.horner_row_length_limit (unsigned int) (default: 10)\n  arith.nl.horner_subs_fixed (unsigned int) (default: 2)\n  arith.nl.nra (bool) (default: true)\n  arith.nl.order (bool) (default: true)\n  arith.nl.rounds (unsigned int) (default: 1024)\n  arith.nl.tangents (bool) (default: true)\n  arith.print_ext_var_names (bool) (default: false)\n  arith.print_stats (bool) (default: false)\n  arith.propagate_eqs (bool) (default: true)\n  arith.propagation_mode (unsigned int) (default: 1)\n  arith.random_initial_value (bool) (default: false)\n  arith.rep_freq (unsigned int) (default: 0)\n  arith.simplex_strategy (unsigned int) (default: 0)\n  arith.solver (unsigned int) (default: 6)\n  array.extensional (bool) (default: true)\n  array.weak (bool) (default: false)\n  auto_config (bool) (default: true)\n  bv.delay (bool) (default: true)\n  bv.enable_int2bv (bool) (default: true)\n  bv.eq_axioms (bool) (default: true)\n  bv.reflect (bool) (default: true)\n  bv.watch_diseq (bool) (default: false)\n  candidate_models (bool) (default: false)\n  case_split (unsigned int) (default: 1)\n  clause_proof (bool) (default: false)\n  core.extend_nonlocal_patterns (bool) (default: false)\n  core.extend_patterns (bool) (default: false)\n  core.extend_patterns.max_distance (unsigned int) (default: 4294967295)\n  core.minimize (bool) (default: false)\n  core.validate (bool) (default: false)\n  cube_depth (unsigned int) (default: 1)\n  dack (unsigned int) (default: 1)\n  dack.eq (bool) (default: false)\n  dack.factor (double) (default: 0.1)\n  dack.gc (unsigned int) (default: 2000)\n  dack.gc_inv_decay (double) (default: 0.8)\n  dack.threshold (unsigned int) (default: 10)\n  delay_units (bool) (default: false)\n  delay_units_threshold (unsigned int) (default: 32)\n  dt_lazy_splits (unsigned int) (default: 1)\n  ematching (bool) (default: true)\n  induction (bool) (default: false)\n  lemma_gc_strategy (unsigned int) (default: 0)\n  logic (symbol) (default: )\n  macro_finder (bool) (default: false)\n  max_conflicts (unsigned int) (default: 4294967295)\n  mbqi (bool) (default: true)\n  mbqi.force_template (unsigned int) (default: 10)\n  mbqi.id (string) (default: )\n  mbqi.max_cexs (unsigned int) (default: 1)\n  mbqi.max_cexs_incr (unsigned int) (default: 0)\n  mbqi.max_iterations (unsigned int) (default: 1000)\n  mbqi.trace (bool) (default: false)\n  pb.conflict_frequency (unsigned int) (default: 1000)\n  pb.learn_complements (bool) (default: true)\n  phase_caching_off (unsigned int) (default: 100)\n  phase_caching_on (unsigned int) (default: 400)\n  phase_selection (unsigned int) (default: 3)\n  pull_nested_quantifiers (bool) (default: false)\n  q.lift_ite (unsigned int) (default: 0)\n  q.lite (bool) (default: false)\n  qi.cost (string) (default: (+ weight generation))\n  qi.eager_threshold (double) (default: 10.0)\n  qi.lazy_threshold (double) (default: 20.0)\n  qi.max_instances (unsigned int) (default: 4294967295)\n  qi.max_multi_patterns (unsigned int) (default: 0)\n  qi.profile (bool) (default: false)\n  qi.profile_freq (unsigned int) (default: 4294967295)\n  qi.quick_checker (unsigned int) (default: 0)\n  quasi_macros (bool) (default: false)\n  random_seed (unsigned int) (default: 0)\n  refine_inj_axioms (bool) (default: true)\n  relevancy (unsigned int) (default: 2)\n  restart.max (unsigned int) (default: 4294967295)\n  restart_factor (double) (default: 1.1)\n  restart_strategy (unsigned int) (default: 1)\n  restricted_quasi_macros (bool) (default: false)\n  seq.split_w_len (bool) (default: true)\n  seq.validate (bool) (default: false)\n  str.aggressive_length_testing (bool) (default: false)\n  str.aggressive_unroll_testing (bool) (default: true)\n  str.aggressive_value_testing (bool) (default: false)\n  str.fast_length_tester_cache (bool) (default: false)\n  str.fast_value_tester_cache (bool) (default: true)\n  str.fixed_length_naive_cex (bool) (default: true)\n  str.fixed_length_refinement (bool) (default: false)\n  str.overlap_priority (double) (default: -0.1)\n  str.regex_automata_difficulty_threshold (unsigned int) (default: 1000)\n  str.regex_automata_failed_automaton_threshold (unsigned int) (default: 10)\n  str.regex_automata_failed_intersection_threshold (unsigned int) (default: 10)\n  str.regex_automata_intersection_difficulty_threshold (unsigned int) (default: 1000)\n  str.regex_automata_length_attempt_threshold (unsigned int) (default: 10)\n  str.string_constant_cache (bool) (default: true)\n  str.strong_arrangements (bool) (default: true)\n  string_solver (symbol) (default: seq)\n  theory_aware_branching (bool) (default: false)\n  theory_case_split (bool) (default: false)\n  threads (unsigned int) (default: 1)\n  threads.cube_frequency (unsigned int) (default: 2)\n  threads.max_conflicts (unsigned int) (default: 400)\")\n",error:"",status:"z3-ran",hash:"7c8a6359ced9700cda9171b9899cbf1fd2ecee76"}},mdxType:"Z3CodeBlock"}))}c.isMDXComponent=!0}}]);