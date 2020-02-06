(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(1),n=a(9),o=(a(0),a(169)),i={id:"heroku",title:"Self Hosting with Heroku",sidebar_label:"Self Hosting with Heroku"},c={id:"self-hosting/heroku",title:"Self Hosting with Heroku",description:"1. Configure the Heroku Command Line Interface (CLI) using these steps: [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).",source:"@site/docs/self-hosting/heroku.md",permalink:"/self-hosting/heroku",editUrl:"https://github.com/standardnotes/newdocs/edit/master/docs/self-hosting/heroku.md",lastUpdatedAt:1580461252,sidebar_label:"Self Hosting with Heroku",sidebar:"someSidebar",previous:{title:"Self Hosting with Docker",permalink:"/self-hosting/docker"},next:{title:"Preconfigured Image",permalink:"/self-hosting/preconfigured-image"}},l=[],b={rightToc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Configure the Heroku Command Line Interface (CLI) using these steps: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://devcenter.heroku.com/articles/heroku-cli"}),"Heroku CLI"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy the Standard Notes server to your account using the following deploy link: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://heroku.com/deploy?template=https://github.com/standardnotes/syncing-server"}),"https://heroku.com/deploy?template=https://github.com/standardnotes/syncing-server"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install a MySQL add-on. Here we'll use the JawsDB add-on: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://elements.heroku.com/addons/jawsdb"}),"https://elements.heroku.com/addons/jawsdb"),". If you already have a database, you can skip this step.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After installing JawsDB, choose it from the add-ons list in your Heroku dashboard. This will take you to your JawsDB dashboard. You'll need the information found here for the next step.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'In your Heroku application, choose the "Settings" tab.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'In the "Config Variables" section, click "Reveal Config Variables".')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add 4 new variables:"),Object(o.b)("table",{parentName:"li"},Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Key"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_HOST")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'Use the "Host" value from your JawsDB dashboard.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_DATABASE")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'In your JawsDB dashboard, you should see at the top "Connection String". Copy the part after "3306/". That will be the name of your database.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_USERNAME")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'Use the "Username" value.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_PASSWORD")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'Use the "Password" value.'))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Restart your Heroku instance using either the web interface (you\'ll find this option under "More" in the top right) or using the command line:'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"heroku restart --app name_of_app\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Perform initial database setup:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"heroku run rake db:migrate --app name_of_app\n")))),Object(o.b)("p",null,"And that's it! You're up and running with a free Standard Notes server that you can use in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://standardnotes.org"}),"Standard Notes"),"."),Object(o.b)("p",null,"Note that you should understand the limitations of Heroku's free tier. In particular, your instance will sleep after 30 minutes of idleness, and may take several seconds to start up again on subsequent requests."))}s.isMDXComponent=!0},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return a?n.a.createElement(m,c({ref:t},b,{components:a})):n.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);