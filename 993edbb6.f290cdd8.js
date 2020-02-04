(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),b=(n(0),n(169)),l={id:"sync",title:"Sync",sidebar_label:"Sync"},c={id:"specification/sync",title:"Sync",description:"<h2><a id='introduction'></a>Introduction</h2>",source:"@site/docs/specification/sync.md",permalink:"/newdocs/specification/sync",editUrl:"https://github.com/standardnotes/newdocs/edit/master/docs/specification/sync.md",sidebar_label:"Sync",sidebar:"someSidebar",previous:{title:"Encryption",permalink:"/newdocs/specification/encryption"}},i=[{value:"Client Structures",id:"client-structures",children:[{value:"Sync Discussion",id:"sync-discussion",children:[]}]}],o={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,Object(b.b)("a",{id:"introduction"}),"Introduction"),Object(b.b)("p",null,"This document outlines the specifications for the client-server communications of the Standard Notes client/server system."),Object(b.b)("h2",null,Object(b.b)("a",{id:"models"}),"Models"),Object(b.b)("p",null,"The protocol consists of models on the server side and what are known as structures on the client side."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Server Models")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"User"),Object(b.b)("li",{parentName:"ul"},"Item")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Client Structures")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("em",{parentName:"li"},"Arbitrary"))),Object(b.b)("p",null,"An ",Object(b.b)("inlineCode",{parentName:"p"},"Item")," model has a ",Object(b.b)("inlineCode",{parentName:"p"},"content")," field. The ",Object(b.b)("inlineCode",{parentName:"p"},"content")," field stores a JSON encoded object that can be any thing the client needs to operate. In this client-server model, servers are to be treated as dumb and uninformed."),Object(b.b)("p",null,"Relationships are handled by the client and not the server, which clients today have no problem handling. This allows for improvements to be made to the data model on the client level, and not on the difficult-to-change server level. It also allows for relationships to be encrypted."),Object(b.b)("h1",null,Object(b.b)("a",{id:"user"}),"User"),Object(b.b)("p",null,"A user model has the following properties:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"email"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The email of the user.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"password"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The password for this user. ",Object(b.b)("em",{parentName:"td"},"Note that passwords must be manipulated before being sent to the server."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pw_cost"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The number of iterations to use for the KDF. See Encryption for more.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pw_nonce"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generated by the client during registration. See Encryption for more.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"version"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The version of the SF specification used when creating this user's account. (Latest is 003) (This value is also updated when a user changes their password or updates their security version.)")))),Object(b.b)("h1",null,Object(b.b)("a",{id:"items"}),"Items"),Object(b.b)("p",null,"Item models have the following properties:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"uuid"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String (or uuid for some databases)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The unique identifier for this model.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"content"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Text"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The JSON encoded structure of the item, encrypted.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"content_type"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The type of the structure contained in the ",Object(b.b)("inlineCode",{parentName:"td"},"content")," field. (i.e Note, Tag, Extension, etc.)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enc_item_key"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Text"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The locally encrypted encryption key for this item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"deleted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bool"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Whether the model has been deleted.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"created_at"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Date"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The date this item was created.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"updated_at"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Date"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The date this item was modified.")))),Object(b.b)("h2",{id:"client-structures"},"Client Structures"),Object(b.b)("p",null,"Client structures are stored in the ",Object(b.b)("inlineCode",{parentName:"p"},"content")," field of the ",Object(b.b)("inlineCode",{parentName:"p"},"Item")," model. A client structure can have any property the client chooses, as well as the following:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"appData"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Dictionary"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A domain based dictionary whose content must be preserved between platforms. ",Object(b.b)("inlineCode",{parentName:"td"},"appData[domain]")," contains data the client stores in the item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"references"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A metadata array of other ",Object(b.b)("inlineCode",{parentName:"td"},"Item")," uuids this model is related to and their respective ",Object(b.b)("inlineCode",{parentName:"td"},"content_type"),". See sample below.")))),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"references")," array sample:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'[\n  {uuid: xxxx, content_type: "Tag"},\n  {uuid: xxxxx, content_type: "Tag"},\n]\n')),Object(b.b)("h1",null,Object(b.b)("a",{id:"api"}),"REST API"),Object(b.b)("p",null,"General:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"All requests after the initial authentication should be authenticated with a JWT with the ",Object(b.b)("inlineCode",{parentName:"p"},"Authorization")," header:"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Authorization: Bearer _insert_JWT_here_\n\n")))),Object(b.b)("h1",null,Object(b.b)("a",{id:"api-auth"}),"Auth"),Object(b.b)("p",null,"Standard Notes uses JSON Web Tokens (JWT) for authentication."),Object(b.b)("h4",{id:"post-auth"},"POST auth"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Registers a user and returns a JWT")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Params: email, password, pw_cost, pw_nonce, version")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Note"),": ",Object(b.b)("inlineCode",{parentName:"p"},"password")," needs to be processed locally before being sent to the server. See Encryption for more. Never send the user's inputted password to the server."),Object(b.b)("p",null,"Responses"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"200")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{"token" : "..."}\n')),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"5xx")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{"errors" : []}\n')),Object(b.b)("h4",{id:"post-authchange_pw"},"POST auth/change_pw"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Updates a user's password.")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Params: email, password, current_password")),Object(b.b)("p",null,"Responses\n",Object(b.b)("inlineCode",{parentName:"p"},"204")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"No Content\n")),Object(b.b)("p",null,"5xx"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{"errors" : []}\n')),Object(b.b)("h4",{id:"post-authsign_in"},"POST auth/sign_in"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Authenticates a user and returns a JWT.")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Note"),": Passwords needs to be processed locally before being sent to the server. See Encryption for more. Never send the user's inputted password to the server."),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Params: email, password")),Object(b.b)("p",null,"Responses\n200"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{"token" : "..."}\n')),Object(b.b)("p",null,"5xx"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{"errors" : []}\n')),Object(b.b)("h4",{id:"get-authparams"},"GET auth/params"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns the parameters used for password generation.")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Params: email")),Object(b.b)("p",null,"Responses\n200"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{"pw_cost" : "...", "pw_nonce" : "...", "version" : "..."}\n')),Object(b.b)("p",null,"5xx"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{"errors" : []}\n')),Object(b.b)("h1",null,Object(b.b)("a",{id:"api-items"}),"Items"),Object(b.b)("h4",{id:"post-itemssync"},"POST items/sync"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Saves local changes as well as retrieves remote changes.")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Params:")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"items"),": An array of items"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"sync_token"),": the sync token returned from the previous sync call. Leave empty if first sync."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"limit"),": (optional) the number of results to return. ",Object(b.b)("inlineCode",{parentName:"li"},"cursor_token")," is returned if more results are available.")),Object(b.b)("p",null,"Responses"),Object(b.b)("p",null,"200"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{"retrieved_items" : [], "saved_items" : [], "unsaved" : [], "sync_token" : ""}\n')),Object(b.b)("p",null,"5xx"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{"errors" : []}\n')),Object(b.b)("h3",{id:"sync-discussion"},"Sync Discussion"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Deletion:")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Clients: set ",Object(b.b)("inlineCode",{parentName:"li"},"deleted")," equal to ",Object(b.b)("inlineCode",{parentName:"li"},"true")," and sync. When receiving an item that is ",Object(b.b)("inlineCode",{parentName:"li"},"deleted"),", remove it from the local database immediately."),Object(b.b)("li",{parentName:"ul"},"Servers: if syncing an item that is ",Object(b.b)("inlineCode",{parentName:"li"},"deleted"),", clear out its ",Object(b.b)("inlineCode",{parentName:"li"},"content")," and ",Object(b.b)("inlineCode",{parentName:"li"},"enc_item_key")," fields, set ",Object(b.b)("inlineCode",{parentName:"li"},"deleted")," to true, and save.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Sync completion:")),Object(b.b)("p",null,"Upon sync completion, the client should handle each response item as follows:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"retrieved_items"),": these items are new or have been modified since last sync and should be merged or created locally."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"saved_items"),": saved items are dirty items that were sent to the sync request. These items should not be merged in their entirety upon completion. Instead, only their metadata should be merged. For example, if at Point A the client syncs a Note item that a user is still typing, and at Point B the sync completes, the user could have typed more content in between A and B. Thus, if you merge all content, the user's progress in between A and B will be lost. However, if you merge just the metadata (usually just updated_at date), then this issue is avoided."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"unsaved"),": returned if an error occurred saving those items. This can happen in the case of a sync conflict, where an item attempting to be saved already has a pending change. This item will not be saved, and will instead be returned in this array. The client is then responsible for duplicating this item and assigning it a new UUID. Another scenario for unsaved is the improbable case of a UUID conflict."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"sync_token"),": this token should be saved when it is received and sent to subsequent sync requests. This token should also be persisted locally between app sessions. For first time sync, no token should be provided."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"cursor_token"),": returned if original request had a ",Object(b.b)("inlineCode",{parentName:"li"},"limit"),". Send this token back to the server to retrieve next page of results.")),Object(b.b)("h1",null,Object(b.b)("a",{id:"import-export"}),"Import/Export"),Object(b.b)("p",null,"The export file is a JSON file of all the user's items, unencrypted."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Format:")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "items": [\n    {\n      "uuid": "3162fe3a-1b5b-4cf5-b88a-afcb9996b23a",\n      "content_type": "Note",\n      "content": {\n        "references": [\n          {\n            "uuid": "901751a0-0b85-4636-93a3-682c4779b634",\n            "content_type": "Tag"\n          }\n        ],\n        "title": "...",\n        "text": "..."\n      },\n      "created_at": "2016-12-16T17:37:50.000Z"\n    },\n\n    {\n      "uuid": "023112fe-9066-481e-8a63-f15f27d3f904",\n      "content_type": "Tag",\n      "content": {\n        "references": [\n          {\n            "uuid": "94cba6b7-6b55-41d6-89a5-e3db8be9fbbf",\n            "content_type": "Note"\n          }\n        ],\n        "title": "essays"\n      },\n      "created_at": "2016-12-16T17:13:20.000Z"\n    }\n  ]\n}\n')))}s.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,O=p["".concat(l,".").concat(u)]||p[u]||d[u]||b;return n?r.a.createElement(O,c({ref:t},o,{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);