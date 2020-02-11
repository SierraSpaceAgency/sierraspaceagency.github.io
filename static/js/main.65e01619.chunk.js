(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(46)},18:function(e,a,t){},21:function(e,a,t){},23:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),s=t.n(c),r=(t(18),t(7)),m=t(8),o=t(11),i=t(9),g=t(12),u=(t(21),function(e){return l.a.createElement("section",{className:"HomePage"},l.a.createElement("header",null,l.a.createElement("img",{className:"SSALogo",src:"ssa-logo.png",alt:"SSA Logo"}),l.a.createElement("p",{className:"SSATitle"},"Sierra Space Agency")))}),E=(t(23),function(e){return l.a.createElement("section",{className:"PeoplePage"},l.a.createElement("div",{className:"PeoplePageTextContent"},l.a.createElement("div",{className:"PeoplePageTitle TitleText"},"Who We Are"),l.a.createElement("p",{className:"PeoplePageText"},"A veteran team of startup designers and engineers")),l.a.createElement("ul",{className:"PeopleList"},l.a.createElement("li",{className:"Person"},l.a.createElement("a",{className:"PersonLink",href:"https://andrewferrarone.com"},l.a.createElement("img",{className:"PersonImage",src:"Andy.png",alt:""}),l.a.createElement("div",{className:"Label PersonName"},"Andy"),l.a.createElement("div",{className:"Label PersonTitle"},"DESIGN"))),l.a.createElement("li",{className:"Person"},l.a.createElement("a",{className:"PersonLink",href:"http://briancox.co"},l.a.createElement("img",{className:"PersonImage",src:"Brian.png",alt:""}),l.a.createElement("div",{className:"Label PersonName"},"Brian"),l.a.createElement("div",{className:"Label PersonTitle"},"PRODUCT"))),l.a.createElement("li",{className:"Person"},l.a.createElement("a",{className:"PersonLink",href:"https://connerhinman.com"},l.a.createElement("img",{className:"PersonImage",src:"Conner.png",alt:""}),l.a.createElement("div",{className:"Label PersonName"},"Conner"),l.a.createElement("div",{className:"Label PersonTitle"},"ENGINEERING"))),l.a.createElement("li",{className:"Person"},l.a.createElement("img",{className:"PersonImage",src:"Grace.png",alt:""}),l.a.createElement("div",{className:"Label PersonName"},"Grace"),l.a.createElement("div",{className:"Label PersonTitle"},"ENGINEERING")),l.a.createElement("li",{className:"Person"},l.a.createElement("img",{className:"PersonImage",src:"Kevin.png",alt:""}),l.a.createElement("div",{className:"Label PersonName"},"Kevin"),l.a.createElement("div",{className:"Label PersonTitle"},"ENGINEERING")),l.a.createElement("li",{className:"Person"},l.a.createElement("img",{className:"PersonImage",src:"Sally.png",alt:""}),l.a.createElement("div",{className:"Label PersonName"},"Sally"),l.a.createElement("div",{className:"Label PersonTitle"},"ENGINEERING"))))}),N=t(10),d=t.n(N),h=(t(40),function(e){return l.a.createElement("section",{className:"WorkPage"},l.a.createElement("div",{className:"WorkPageTextContent"},l.a.createElement("div",{className:"WorkPageTitle TitleText"},"What We Do"),l.a.createElement("p",{className:"WorkPageText"},"We build dangerously fun apps. Funded by corporate special ops contracting.")),l.a.createElement("div",{className:"WorkPageCarouselContainer"},l.a.createElement(d.a,{autoplay:!0,autoplaySpeed:2e3,infinite:!0,speed:1e3,slidesToShow:4,slidesToScroll:1,pauseOnHover:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2}}]},l.a.createElement("div",{className:"WorkPageCarouselItem"},l.a.createElement("img",{className:"WorkPageCarouselImage",src:"CNN.png",alt:""})),l.a.createElement("div",{className:"WorkPageCarouselItem"},l.a.createElement("img",{className:"WorkPageCarouselImage",src:"Scoutmob.png",alt:""})),l.a.createElement("div",{className:"WorkPageCarouselItem"},l.a.createElement("img",{className:"WorkPageCarouselImage",src:"YikYak.png",alt:""})),l.a.createElement("div",{className:"WorkPageCarouselItem"},l.a.createElement("img",{className:"WorkPageCarouselImage",src:"Moments.png",alt:""})),l.a.createElement("div",{className:"WorkPageCarouselItem"},l.a.createElement("img",{className:"WorkPageCarouselImage",src:"Liftoff.png",alt:""})),l.a.createElement("div",{className:"WorkPageCarouselItem"},l.a.createElement("img",{className:"WorkPageCarouselImage",src:"Index.png",alt:""})))))}),p=(t(42),function(e){return l.a.createElement("section",{className:"LaunchPage"},l.a.createElement("main",{className:"LaunchPageMainContent"},l.a.createElement("img",{className:"LaunchPageGradientImage",src:"black-gradient.png",alt:""}),l.a.createElement("p",{className:"LaunchPageMainContentTitle"},"Ready to launch?"),l.a.createElement("p",{className:"LaunchPageMainContentText TitleText"},"Make it happen"),l.a.createElement("div",{className:"ContentScroller",onClick:function(){return e.onLaunchClick()}},l.a.createElement("p",{className:"ContentScrollerTitle"},"LAUNCH"),l.a.createElement("img",{className:"ContentScrollerImage",src:"arrow-launch.png",alt:"Scroll down"}))),l.a.createElement("img",{className:"LaunchPageMountainRange",src:"mountain-range.png",alt:""}))}),P=(t(44),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).state={launching:!1},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"onLaunchClick",value:function(){var e=this,a=this;this.homePage.scrollIntoView({block:"start",behavior:"smooth",duration:2}),this.setState({launching:!0},function(){e.launchRocket.addEventListener("animationend",function(e){a.setState({launching:!1}),window.location.href="mailto:launch@sierraspaceagency.com?subject=Launch"},!1)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{ref:function(a){e.homePage=a}}),l.a.createElement(u,null),l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(p,{onLaunchClick:function(){return e.onLaunchClick()}}),l.a.createElement("img",{className:"RocketBoosterImage",src:"launch-dock.png",alt:""}),this.state.launching?l.a.createElement("div",null,l.a.createElement("img",{className:"RocketImage hidden",src:"rocket-ship-still.png",alt:""}),l.a.createElement("img",{ref:function(a){e.launchRocket=a},className:"RocketImageLaunch animate-blast-off",src:"rocket-ship-launch.png",alt:""})):l.a.createElement("div",null,l.a.createElement("img",{className:"RocketImage",src:"rocket-ship-still.png",alt:""}),l.a.createElement("img",{className:"RocketImageLaunch hidden",src:"rocket-ship-launch.png",alt:""})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.65e01619.chunk.js.map