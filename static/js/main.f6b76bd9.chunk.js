(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(40)},26:function(e,t,a){},27:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(26),a(27),a(2)),i=a(3),s=a(5),m=a(4),u=a(6),p=a(1),h=a.n(p),d={name:"Dariusz Pasieka",headerTagline:["Welcome to my website. I am Dariusz Pasieka","Graduate Masters Student in Computing","From Poland"],abouttext:"I am a Cardiff Metropolitan University student who graduated studying Computing. My award is Distinction Master of Science in Computing. I have also finished Bachelor in Computing in Cardiff Metropolitan University with the upper second class. I am passionate about programming, technology and video games. Currently looking for an opportunity to work as a front-end developer or data analyst.",aboutImage:"https://i.imgur.com/i2EggDy.png",ShowAboutImage:!0,projects:[{id:1,title:"Project One",service:"Mapping Population Distribution",imageSrc:"https://i.imgur.com/FS7C4fr.png",url:"https://github.com/DPasieka/Mapping-Population-Distribution"},{id:2,title:"Project Two",service:"Analysis of spheroid",imageSrc:"https://i.imgur.com/3qf1Ryg.jpg",url:"https://github.com/DPasieka/Analysis-of-spheroid"}],social:[{name:"Github",url:"https://github.com/DPasieka/"},{name:"Linkedin",url:"https://www.linkedin.com/in/dariusz-pasieka-b98322172/"}]},b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(h.a,{bottom:!0,cascade:!0},d.name))),r.a.createElement(h.a,{bottom:!0},r.a.createElement("p",{className:"header-title"},d.headerTagline[0],r.a.createElement("br",null),d.headerTagline[1],r.a.createElement("br",null),d.headerTagline[2],r.a.createElement("br",null))))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about-content"},r.a.createElement("h1",null,r.a.createElement(h.a,{bottom:!0,cascade:!0},"About Me")),r.a.createElement(h.a,{bottom:!0},r.a.createElement("p",null,d.abouttext))),d.ShowAboutImage?r.a.createElement("img",{src:d.aboutImage,alt:"about iamge"}):null)}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{bottom:!0},r.a.createElement("div",{className:"project"},r.a.createElement("a",{href:this.props.url},r.a.createElement("img",{src:this.props.imageSrc,alt:this.props.title})),r.a.createElement("h1",null,this.props.title),r.a.createElement("span",null,this.props.service)))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"},r.a.createElement(h.a,{bottom:!0,cascade:!0},"My Work")),r.a.createElement("div",{className:"work-content"},d.projects.map(function(e){return r.a.createElement(f,{key:e.id,title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url})})))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(h.a,{bottom:!0,cascade:!0}," Contact")),r.a.createElement(h.a,{bottom:!0},r.a.createElement("div",{className:"contact-content"},r.a.createElement("ul",null,d.social.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},e.name))})))),r.a.createElement("span",{className:"footer"},"Made by Dariusz Pasieka"))}}]),t}(n.Component),y=a(8),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.scrollToTop=function(){y.animateScroll.scrollToTop()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"homw",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop},"Home")),r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About Me")),r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"My Work")),r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact"))))}}]),t}(n.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement("div",{className:"App-header"},r.a.createElement(b,null)),r.a.createElement("div",{className:"About"},r.a.createElement(E,null)),r.a.createElement("div",{className:"work"},r.a.createElement(v,null)),r.a.createElement("div",{className:"contact"},r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.f6b76bd9.chunk.js.map