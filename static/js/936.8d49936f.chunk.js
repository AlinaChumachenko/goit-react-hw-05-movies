"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{354:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(689),a=n(87),u="FilmsList_list__mdOd2",c="FilmsList_item__JuRbF",s=n(184),i=function(e){var t=e.movies,n=(0,r.TH)();return(0,s.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,r=e.original_title;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(a.rU,{state:{from:n},to:"/movies/".concat(t),children:r})},t)}))})}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(791),u=n(839),c=n(354),s="Home_section__uZuiO",i="Home_title__L087v",o=n(184),f=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],f=t[1];return(0,a.useEffect)((function(){(0,u.Df)("").then(f)}),[]),(0,o.jsxs)("main",{className:s,children:[(0,o.jsx)("h1",{className:i,children:"Trending today"}),(0,o.jsx)(c.Z,{movies:n})]})}},839:function(e,t,n){n.d(t,{Df:function(){return i},Eb:function(){return p},Hu:function(){return l},Pg:function(){return f},Ph:function(){return o}});var r=n(861),a=n(757),u=n.n(a),c=n(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3373af60a4ee1fe7510a1a61c11380e1",i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/week?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.8d49936f.chunk.js.map