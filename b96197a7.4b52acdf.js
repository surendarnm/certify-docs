(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(9),a=(r(0),r(166)),c={id:"dns-awsroute53",title:"AWS Route53 DNS"},u={id:"dns-awsroute53",title:"AWS Route53 DNS",description:"## Setup your AWS Route53 DNS API credentials",source:"@site/docs/dns-awsroute53.md",permalink:"/docs/dns-awsroute53",editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/dns-awsroute53.md"},i=[{value:"Setup your AWS Route53 DNS API credentials",id:"setup-your-aws-route53-dns-api-credentials",children:[]},{value:"Add New Stored Credential",id:"add-new-stored-credential",children:[]}],l={rightToc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"setup-your-aws-route53-dns-api-credentials"},"Setup your AWS Route53 DNS API credentials"),Object(a.b)("p",null,"To use the AWS Route53 DNS API, you need to setup your API key and authentication secret: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Sign in to your AWS IAM console: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.aws.amazon.com/iam/home"}),"https://console.aws.amazon.com/iam/home"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Add a new user (e.g. 'certifydnsadmin')"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Enable Programmatic access, "),Object(a.b)("li",{parentName:"ul"},"Create a user Group if you don't already has a group."),Object(a.b)("li",{parentName:"ul"},"You can either allow all permissions: ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Allow AmazonRoute53FullAccess for the group."))),Object(a.b)("li",{parentName:"ul"},"Or restrict permission to the following actions:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"route53:ListHostedZones, route53:GetHostedZone, route53:ListResourceRecordSets, route53:ChangeResourceRecordSets, route53:GetChange ")))))),Object(a.b)("p",null,"Here is an example JSON policy:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "route53:GetChange",\n                "route53:GetHostedZone",\n                "route53:ListHostedZones",\n                "route53:ChangeResourceRecordSets",\n                "route53:ListResourceRecordSets"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Under your new user details:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Select Security Credentials > Create Access Key")))),Object(a.b)("p",null,"Copy down your Access Key and Secret Access Key. You cannot recover the same secret after it has been displayed once."),Object(a.b)("h2",{id:"add-new-stored-credential"},"Add New Stored Credential"),Object(a.b)("p",null,"Now add a new Stored Credential in Certify, choosing AWS Route53 DNS as the provider type, enter:\n- Your Access Key\n- Your Secret Key\n- Select Save."),Object(a.b)("p",null,"When you use this credential for a Managed Certificate you will also require your ZoneId for the specific hosted zone you are modifying."))}s.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(m,u({ref:t},l,{components:r})):o.a.createElement(m,u({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);