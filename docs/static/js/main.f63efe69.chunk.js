(this["webpackJsonpmy-first-react-app"]=this["webpackJsonpmy-first-react-app"]||[]).push([[0],{15:function(e,a,t){e.exports={navlink:"header_navlink__1Ey29","navlink-active":"header_navlink-active__189iu","facebook-icon":"header_facebook-icon__2SwN-","instagram-icon":"header_instagram-icon__2cPKi",title:"header_title__1DXxp",portrait:"header_portrait__slHnk"}},23:function(e,a,t){e.exports={title:"concert_title__2cWNN",subtitle:"concert_subtitle__1Hazr",text:"concert_text__GAmPA"}},26:function(e,a,t){e.exports={link:"contact_link__3j8QJ"}},29:function(e){e.exports=JSON.parse('[{"title":"Vesper","date":"2021-10-16","time":"17:00","location":"Kreuzkirche Dresden","subtitle":"","text":["Es erklingen Werke von Monteverdi und Sch\xfctz, bis hin zu Libby Larsen und Alphons Diepenbrock.","KMD i. R. Christian Thiele, Orgel","Pfarrer Holger Molkau, Liturgie"],"image":"img/dresden-kreuzkirche-01.jpg"}]')},34:function(e,a,t){e.exports=t.p+"static/media/portrait.c60f5a36.jpeg"},38:function(e,a,t){e.exports=t(53)},43:function(e,a,t){},44:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(32),l=t.n(r),i=(t(43),t(44),t(10)),m=t(11),o=t(13),s=t(12),u=t(7),p=t(3),d=t(5),E=t(17),f=t(19),h=t(20),b=t(26),g=t.n(b);function k(e){return c.a.createElement(d.a,{className:"mb-1"},c.a.createElement(p.a,{className:"col-1 ml-5"},c.a.createElement(E.a,{icon:e.icon})),c.a.createElement(p.a,null,e.children))}var v=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,{style:{width:"25rem"}},c.a.createElement(d.a,{className:"mb-3"},c.a.createElement(p.a,{style:{textAlign:"center"}},"Sie k\xf6nnen uns \xfcber folgende Kan\xe4le erreichen:")),c.a.createElement(k,{icon:f.a},c.a.createElement("a",{className:g.a.link,href:"https://facebook.com/ensembleq19"},"facebook.com/ensembleq19")),c.a.createElement(k,{icon:f.b},c.a.createElement("a",{className:g.a.link,href:"https://instagram.com/ensemble_q19"},"instagram.com/ensemble_q19")),c.a.createElement(k,{icon:h.c},"kontakt",c.a.createElement(E.a,{icon:h.a,style:{margin:"0 2px",fontSize:"0.9rem"}}),"ensemble-q19.de"))}}]),t}(c.a.Component),N=t(21),y=t(15),j=t.n(y),x=t(35),_=t(34),O=t.n(_),w=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement(u.a,{className:"d-flex justify-content-center"},c.a.createElement(d.a,{className:"mb-5"},c.a.createElement(p.a,{lg:!0,className:"d-flex justify-content-center"},c.a.createElement(x.a,{src:O.a,roundedCircle:!0,className:j.a.portrait})),c.a.createElement(p.a,{lg:!0,className:"d-flex flex-column justify-content-center"},c.a.createElement("h1",{className:"".concat(j.a.title," text-center")},"Ensemble Q19"),c.a.createElement(d.a,{className:"d-flex justify-content-center mt-1"},c.a.createElement("a",{className:j.a["facebook-icon"],href:"https://www.facebook.com/ensembleq19"},c.a.createElement(E.a,{icon:f.a})),c.a.createElement("a",{className:j.a["facebook-icon"],href:"https://instagram.com/ensemble_q19"},c.a.createElement(E.a,{icon:f.b}))),c.a.createElement(d.a,{className:"d-flex justify-content-around mt-3 mx-4"},c.a.createElement(N.b,{exact:!0,to:"/",activeClassName:j.a["navlink-active"],className:j.a.navlink},"Konzerte"),c.a.createElement(N.b,{to:"/media",activeClassName:j.a["navlink-active"],className:j.a.navlink},"Medien"),c.a.createElement(N.b,{to:"/contact",activeClassName:j.a["navlink-active"],className:j.a.navlink},"Kontakt"))))))}}]),t}(c.a.Component),C=t(37),q=t(23),S=t.n(q);function D(e){var a,t,n,c=e.split("-"),r=Object(C.a)(c,3);return a=r[0],t=r[1],n=r[2],"".concat(function(e){switch(new Date(e).getDay()){case 0:return"Sonntag";case 1:return"Montag";case 2:return"Dienstag";case 3:return"Mittwoch";case 4:return"Donnerstag";case 5:return"Freitag";case 6:return"Samstag"}}(e),", ").concat(n,".").concat(t,".").concat(a)}var M=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=c.a.createElement(p.a,{className:"col-1 d-none d-md-block"}),a=null,t=null;this.props.data.image&&(a=c.a.createElement(p.a,{className:"col-4 d-none d-lg-block"},c.a.createElement("img",{className:"rounded-lg",src:this.props.data.image,width:"100%",alt:""})),t=c.a.createElement(p.a,{className:"d-block d-lg-none"},c.a.createElement("img",{className:"rounded-lg",src:this.props.data.image,width:"100%",height:"100%",style:{objectFit:"cover"},alt:""})));var n=this.props.data.text.map((function(e,a){return c.a.createElement("p",{key:a},e)}));return c.a.createElement(u.a,{className:"mb-5"},c.a.createElement(d.a,null,e,c.a.createElement(p.a,null,c.a.createElement("div",{className:S.a.title},this.props.data.title),c.a.createElement("div",{className:S.a.subtitle},this.props.data.subtitle),c.a.createElement("div",{className:S.a.text},n),c.a.createElement(u.a,{className:"d-flex"},c.a.createElement("div",{className:"mx-3"},c.a.createElement(E.a,{icon:h.d})),c.a.createElement("p",null,this.props.data.location)),c.a.createElement(u.a,{className:"d-flex"},c.a.createElement("div",{className:"mx-3"},c.a.createElement(E.a,{icon:h.b})),c.a.createElement("p",null,D(this.props.data.date),", ",this.props.data.time," Uhr"))),a,e),c.a.createElement(d.a,null,e,t,e))}}]),t}(c.a.Component),z=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(p.a,{className:"my-5"},c.a.createElement("div",{style:{textTransform:"uppercase",letterSpacing:"0.2rem",fontSize:"1.2rem",color:"#fff5",textAlign:"center"}},"Keine kommenden Konzerte"))))}}]),t}(c.a.Component),A=t(29),B=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e={};return e=A.length>0?A.map((function(e,a){return c.a.createElement(M,{key:a,data:e})})):c.a.createElement(z,null),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,null),c.a.createElement(p.a,null,e),c.a.createElement(p.a,null))}}]),t}(c.a.Component),J=[{title:"Ubi Caritas",composer:"Gjeilo",url:"https://docs.google.com/uc?export=download&id=1qIQUNulwTXBqbT2OXOETkfrDAxYPbQcO"},{title:"Erquicke mich mit deinem Licht",composer:"Becker",url:"https://drive.google.com/uc?export=download&id=1HS86Dq1HleuN8nwOPZOVnbba5YRqFCJJ"},{title:"Salvum Fac Regem",composer:"Hauptmann",url:"https://drive.google.com/uc?export=download&id=1jw5Ae7o2GyfMjoJMxEE3Cce8TEAABsHy"},{title:"Nice work if you can get it",composer:"Gershwin",url:"https://drive.google.com/uc?export=download&id=1C3g6qMBYYRwrcBiiBwUqJyn-BZG_iD5f"}],K=["/img/emmauskirche-01.jpg","/img/emmauskirche-02.jpg"];function H(e){return c.a.createElement(u.a,{className:"mb-5"},c.a.createElement(d.a,null,c.a.createElement(p.a,{className:"d-flex justify-content-center",style:{fontWeight:"normal"}},e.song.title," (",e.song.composer,")")),c.a.createElement(d.a,null,c.a.createElement(p.a,{className:"d-flex justify-content-center"},c.a.createElement("audio",{controls:!0},c.a.createElement("source",{src:e.song.url,type:"audio/mp3"})))))}function T(e){return c.a.createElement("img",{className:"rounded-lg my-3",src:e.src,width:"100%",alt:""})}var F=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(p.a,null,J.map((function(e,a){return c.a.createElement(H,{song:e,key:a})})))),c.a.createElement(d.a,null,c.a.createElement(p.a,null,K.map((function(e,a){return c.a.createElement(T,{key:a,src:e})})))))}}]),t}(c.a.Component),G=t(4);var P=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(N.a,null,c.a.createElement(w,null),c.a.createElement(G.c,null,c.a.createElement(G.a,{path:"/contact"},c.a.createElement(v,null)),c.a.createElement(G.a,{path:"/media"},c.a.createElement(F,null)),c.a.createElement(G.a,{path:"/"},c.a.createElement(B,null)))),c.a.createElement("div",{style:{height:"15rem"}}))};t(52);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f63efe69.chunk.js.map