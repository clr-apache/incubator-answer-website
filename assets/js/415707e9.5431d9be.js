"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[2289],{7603:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=n(43010),r=n(90887);const t={slug:"/users"},d="Users",l={id:"guides/users",title:"Users",description:"User status",source:"@site/docs/guides/users.md",sourceDirName:"guides",slug:"/users",permalink:"/docs/users",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/docs/guides/users.md",tags:[],version:"current",lastUpdatedBy:"robin",lastUpdatedAt:1721031090,formattedLastUpdatedAt:"Jul 15, 2024",frontMatter:{slug:"/users"},sidebar:"docs",previous:{title:"Tags",permalink:"/docs/tags"},next:{title:"Review",permalink:"/docs/review"}},a={},o=[{value:"User status",id:"user-status",level:2},{value:"Top users",id:"top-users",level:2},{value:"Sign up",id:"sign-up",level:2},{value:"Log in",id:"log-in",level:2},{value:"Log in with email and password",id:"log-in-with-email-and-password",level:3},{value:"Log in from thridy-party OAuth",id:"log-in-from-thridy-party-oauth",level:3},{value:"Reset password",id:"reset-password",level:2},{value:"Notification",id:"notification",level:2},{value:"Inbox",id:"inbox",level:3},{value:"Achievement",id:"achievement",level:3},{value:"Profile",id:"profile",level:2},{value:"Settings",id:"settings",level:2},{value:"Unsubscribe email",id:"unsubscribe-email",level:3}];function h(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"users",children:"Users"}),"\n",(0,i.jsx)(s.h2,{id:"user-status",children:"User status"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"User state diagram",src:n(85366).Z+"",width:"539",height:"286"})}),"\n",(0,i.jsx)(s.h2,{id:"top-users",children:"Top users"}),"\n",(0,i.jsx)(s.p,{children:"Show top users in the platform."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Users with the highest reputation scores this week"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Users who increased the most reputation this week"}),"\n",(0,i.jsx)(s.li,{children:"Show top 20 users with their increased reputation (ordered)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Users who voted the most this week"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Number of votes cast for others"}),"\n",(0,i.jsx)(s.li,{children:"Show top 20 users with their number of votes (ordered)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Our community staff"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Show all moderators, administrators"}),"\n",(0,i.jsx)(s.li,{children:"Ordered by reputation"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"sign-up",children:"Sign up"}),"\n",(0,i.jsx)(s.p,{children:"A user sign up process with email."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Sign up process",src:n(39419).Z+"",width:"601",height:"431"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:['Display name (abbreviated as "name"):',"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Less than 30 characters."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Username:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Unique."}),"\n",(0,i.jsx)(s.li,{children:"Less than 30 characters."}),"\n",(0,i.jsxs)(s.li,{children:["Can only contain ",(0,i.jsx)(s.code,{children:"0-9"}),", lowercase letters ",(0,i.jsx)(s.code,{children:"a-z"}),", symbols ",(0,i.jsx)(s.code,{children:"- . _"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Generated based on the display name, spaces are replaced with symbols ",(0,i.jsx)(s.code,{children:"-"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["If there is a repetition, add 4 random characters at the end, e.g. ",(0,i.jsx)(s.code,{children:"joe-x7k2"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Reserve keywords are not allowed."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Record the time of registration and the IP address."}),"\n",(0,i.jsx)(s.li,{children:"The activation link is valid for 14 days."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"log-in",children:"Log in"}),"\n",(0,i.jsx)(s.p,{children:"A user wants to log in. The user's login permissions are related to the status."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"User status"}),(0,i.jsx)(s.th,{children:"Normal"}),(0,i.jsx)(s.th,{children:"Inactive"}),(0,i.jsx)(s.th,{children:"Suspended"}),(0,i.jsx)(s.th,{children:"Deleted"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Log in"}),(0,i.jsx)(s.td,{children:"Allowed"}),(0,i.jsx)(s.td,{children:"Denied"}),(0,i.jsx)(s.td,{children:"Denied"}),(0,i.jsx)(s.td,{children:"Denied"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"log-in-with-email-and-password",children:"Log in with email and password"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Fill email and password to log in.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'If the user does not exist, the message "Invalid email or password" is displayed to prevent the account from being attacked.'}),"\n",(0,i.jsx)(s.li,{children:"When an inactive user logs in, go to the page that asks for activation."}),"\n",(0,i.jsx)(s.li,{children:"When an suspended user logs in, go to the ban prompt page."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Login status is remembered for 14 days by default."}),"\n",(0,i.jsx)(s.li,{children:'Click "Forgot password" to reset password if someone forgot their password.'}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"log-in-from-thridy-party-oauth",children:"Log in from thridy-party OAuth"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Thirdy-party OAuth process",src:n(60329).Z+"",width:"802",height:"792"})}),"\n",(0,i.jsx)(s.h2,{id:"reset-password",children:"Reset password"}),"\n",(0,i.jsx)(s.p,{children:"TODO"}),"\n",(0,i.jsx)(s.h2,{id:"notification",children:"Notification"}),"\n",(0,i.jsx)(s.p,{children:"TODO"}),"\n",(0,i.jsx)(s.h3,{id:"inbox",children:"Inbox"}),"\n",(0,i.jsx)(s.p,{children:"TODO"}),"\n",(0,i.jsx)(s.h3,{id:"achievement",children:"Achievement"}),"\n",(0,i.jsx)(s.p,{children:"TODO"}),"\n",(0,i.jsx)(s.h2,{id:"profile",children:"Profile"}),"\n",(0,i.jsx)(s.p,{children:"TODO"}),"\n",(0,i.jsx)(s.h2,{id:"settings",children:"Settings"}),"\n",(0,i.jsx)(s.p,{children:"TODO"}),"\n",(0,i.jsx)(s.h3,{id:"unsubscribe-email",children:"Unsubscribe email"}),"\n",(0,i.jsx)(s.p,{children:"TODO"})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},60329:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/users-oauth.drawio-1bf9a76ad7f50a2b20755d20b739feea.svg"},39419:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/users-signup.drawio-71d1d02e80eeaa95c58a30d2451df863.svg"},85366:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/users-user-status.drawio-205ba145e81e04f5af6c654d44a3f437.svg"},90887:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>d});var i=n(85170);const r={},t=i.createContext(r);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);