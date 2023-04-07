import{S as A,i as T,s as E,z as k,A as z,B as j,g as v,d as x,C as y,E as P,M as S,R as B,k as p,r as _,a as C,l as g,m as R,u as $,h as f,c as q,p as m,a7 as D,b,H as h,n as F}from"../chunks/index.e363d6d1.js";import{D as U}from"../chunks/dialog.1d991570.js";import{P as H}from"../chunks/projectgrid.11a000ee.js";function W(c){let e,r,s,a,t,l,d,w,u,n,I;return{c(){e=p("p"),r=_(`After getting interested in photography, I needed a quick way to resize my images to specific
			size so that I could upload smaller images to cloud storage and share them with friends. I
			decided to write a small program to do this for me. I used C# and Visual Studio IDE to create
			a Windows Forms application.
			`),s=p("br"),a=p("br"),t=_(`
			The program allows the user to select multiple images at once, and then choose a desired resolution
			in pixels or percentages. The user can also select whether to delete the original images, and if
			the user wants to save the edited ones in a different folder. After clicking on "Aloita" ("Start"
			in English), the program will start a background worker, which makes sure the UI is responsive.
			The program will then resize all images and show which images are currently being processed. There
			is also a progress bar to show the progress of the resizing.
			`),l=p("br"),d=p("br"),w=_(`
			Here is a screenshot of the program, note that the UI is in Finnish:`),u=C(),n=p("img"),this.h()},l(i){e=g(i,"P",{class:!0});var o=R(e);r=$(o,`After getting interested in photography, I needed a quick way to resize my images to specific
			size so that I could upload smaller images to cloud storage and share them with friends. I
			decided to write a small program to do this for me. I used C# and Visual Studio IDE to create
			a Windows Forms application.
			`),s=g(o,"BR",{}),a=g(o,"BR",{}),t=$(o,`
			The program allows the user to select multiple images at once, and then choose a desired resolution
			in pixels or percentages. The user can also select whether to delete the original images, and if
			the user wants to save the edited ones in a different folder. After clicking on "Aloita" ("Start"
			in English), the program will start a background worker, which makes sure the UI is responsive.
			The program will then resize all images and show which images are currently being processed. There
			is also a progress bar to show the progress of the resizing.
			`),l=g(o,"BR",{}),d=g(o,"BR",{}),w=$(o,`
			Here is a screenshot of the program, note that the UI is in Finnish:`),o.forEach(f),u=q(i),n=g(i,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){m(e,"class","text-black dark:text-white leading-relaxed"),D(n.src,I="/projects/imageresizer/imgresizer_ss.jpeg")||m(n,"src",I),m(n,"alt","A screenshot of the imag resizer application"),m(n,"class","w-3/4 my-4 object-contain rounded-lg mx-auto"),m(n,"width","600"),m(n,"height","200")},m(i,o){b(i,e,o),h(e,r),h(e,s),h(e,a),h(e,t),h(e,l),h(e,d),h(e,w),b(i,u,o),b(i,n,o)},p:F,d(i){i&&f(e),i&&f(u),i&&f(n)}}}function M(c){let e,r;const s=[c[0]];let a={$$slots:{default:[W]},$$scope:{ctx:c}};for(let t=0;t<s.length;t+=1)a=P(a,s[t]);return e=new H({props:a}),{c(){k(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){j(e,t,l),r=!0},p(t,l){const d=l&1?S(s,[B(t[0])]):{};l&2&&(d.$$scope={dirty:l,ctx:t}),e.$set(d)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){x(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function V(c){let e,r;return e=new U({props:{$$slots:{default:[M]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,a){j(e,s,a),r=!0},p(s,[a]){const t={};a&2&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){r||(v(e.$$.fragment,s),r=!0)},o(s){x(e.$$.fragment,s),r=!1},d(s){y(e,s)}}}function G(c){return[{title:"Image resizer for Windows",date:"2017",logo:"/skills/csharp_logo.svg  ",alt:"C sharp logo"}]}class N extends A{constructor(e){super(),T(this,e,G,V,E,{})}}export{N as default};
