"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,972],{4651:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ke});var n=a(7294),l=a(6010),o=a(3438),c=a(3320),r=a(833),i=a(5281),s=a(4477),d=a(1116),m=a(4475),u=a(5999),b=a(2730);const p="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function f(){const{shown:e,scrollToTop:t}=(0,b.a)({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",i.k.common.backToTopButton,p,e&&h),type:"button",onClick:t})}var E=a(6775),g=a(7524),_=a(6668),k=a(1327),v=a(3117);function C(e){return n.createElement("svg",(0,v.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function S(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.default)("button button--secondary button--outline",N),onClick:t},n.createElement(C,{className:I}))}var y=a(9689),T=a(2466),L=a(4353),x=a(902),M=a(8596),w=a(6043),A=a(9960),B=a(2389);function F(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function Z(e){let{item:t,onItemClick:a,activePath:c,level:r,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,_.L)(),E=function(e){const t=(0,B.default)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0),[e,t])}(t),g=(0,o._F)(t,c),k=(0,M.Mg)(h,c),{collapsed:C,setCollapsed:N}=(0,w.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:S}=(0,L.f)(),y=function(e){void 0===e&&(e=!C),S(e?null:s),N(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,x.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:g,collapsed:C,updateCollapsed:y}),(0,n.useEffect)((()=>{b&&I&&I!==s&&f&&N(!0)}),[b,I,s,N,f]),n.createElement("li",{className:(0,l.default)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":C},p)},n.createElement("div",{className:(0,l.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(A.default,(0,v.Z)({className:(0,l.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{null==a||a(t),h?y(!1):(e.preventDefault(),y())}:()=>{null==a||a(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!C:void 0,href:b?null!=E?E:"#":E},d),u),h&&b&&n.createElement(F,{categoryLabel:u,onClick:e=>{e.preventDefault(),y()}})),n.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},n.createElement(V,{items:m,tabIndex:C?-1:0,onItemClick:a,activePath:c,level:r+1})))}var H=a(3919),P=a(8483);const W="menuExternalLink_NmtK";function D(e){let{item:t,onItemClick:a,activePath:c,level:r,index:s,...d}=e;const{href:m,label:u,className:b}=t,p=(0,o._F)(t,c),h=(0,H.Z)(m);return n.createElement("li",{className:(0,l.default)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",b),key:u},n.createElement(A.default,(0,v.Z)({className:(0,l.default)("menu__link",!h&&W,{"menu__link--active":p}),"aria-current":p?"page":void 0,to:m},h&&{onClick:a?()=>a(t):void 0},d),u,!h&&n.createElement(P.Z,null)))}const z="menuHtmlItem_M9Kj";function R(e){let{item:t,level:a,index:o}=e;const{value:c,defaultStyle:r,className:s}=t;return n.createElement("li",{className:(0,l.default)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(a),r&&[z,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function K(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(Z,(0,v.Z)({item:t},a));case"html":return n.createElement(R,(0,v.Z)({item:t},a));default:return n.createElement(D,(0,v.Z)({item:t},a))}}function U(e){let{items:t,...a}=e;return n.createElement(L.D,null,t.map(((e,t)=>n.createElement(K,(0,v.Z)({key:t,item:e,index:t},a)))))}const V=(0,n.memo)(U),j="menu_SIkG",G="menuWithAnnouncementBar_GW3s";function q(e){let{path:t,sidebar:a,className:o}=e;const c=function(){const{isActive:e}=(0,y.nT)(),[t,a]=(0,n.useState)(e);return(0,T.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{className:(0,l.default)("menu thin-scrollbar",j,c&&G,o)},n.createElement("ul",{className:(0,l.default)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(V,{items:a,activePath:t,level:1})))}const O="sidebar_njMd",X="sidebarWithHideableNavbar_wUlq",Y="sidebarHidden_VK0M",J="sidebarLogo_isFc";function Q(e){let{path:t,sidebar:a,onCollapse:o,isHidden:c}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:i}}}=(0,_.L)();return n.createElement("div",{className:(0,l.default)(O,r&&X,c&&Y)},r&&n.createElement(k.Z,{tabIndex:-1,className:J}),n.createElement(q,{path:t,sidebar:a}),i&&n.createElement(S,{onClick:o}))}const $=n.memo(Q);var ee=a(3163),te=a(3102);const ae=e=>{let{sidebar:t,path:a}=e;const o=(0,ee.e)();return n.createElement("ul",{className:(0,l.default)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(V,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ne(e){return n.createElement(te.Zo,{component:ae,props:e})}const le=n.memo(ne);function oe(e){const t=(0,g.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement($,e),l&&n.createElement(le,e))}const ce="expandButton_m80_",re="expandButtonIcon_BlDH";function ie(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ce,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(C,{className:re}))}const se="docSidebarContainer_b6E3",de="docSidebarContainerHidden_b3ry";function me(e){var t;let{children:a}=e;const l=(0,d.V)();return n.createElement(n.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},a)}function ue(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,E.TH)(),[r,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{r&&s(!1),o((e=>!e))}),[o,r]);return n.createElement("aside",{className:(0,l.default)(i.k.docs.docSidebarContainer,se,a&&de),onTransitionEnd:e=>{e.currentTarget.classList.contains(se)&&a&&s(!0)}},n.createElement(me,null,n.createElement(oe,{sidebar:t,path:c,onCollapse:d,isHidden:r})),r&&n.createElement(ie,{toggleSidebar:d}))}const be={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function pe(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,d.V)();return n.createElement("main",{className:(0,l.default)(be.docMainContainer,(t||!o)&&be.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced)},a))}const he="docPage__5DB",fe="docsWrapper_BCFX";function Ee(e){let{children:t}=e;const a=(0,d.V)(),[l,o]=(0,n.useState)(!1);return n.createElement(m.default,{wrapperClassName:fe},n.createElement(f,null),n.createElement("div",{className:he},a&&n.createElement(ue,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(pe,{hiddenSidebarContainer:l},t)))}var ge=a(4972),_e=a(197);function ke(e){const{versionMetadata:t}=e,a=(0,o.hI)(e);if(!a)return n.createElement(ge.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=a;return n.createElement(n.Fragment,null,n.createElement(_e.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),n.createElement(r.FG,{className:(0,l.default)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:u,items:b},n.createElement(Ee,null,m)))))}},4972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294),l=a(5999),o=a(833),c=a(4475);function r(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(c.default,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);