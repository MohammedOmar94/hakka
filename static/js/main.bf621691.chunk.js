(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,t){e.exports={Portal:"Portal_Portal__12e22",Slider:"Portal_Slider__3c_hP",Slide:"Portal_Slide__DDgBl",SlideCaption:"Portal_SlideCaption__1niW-",ImageCaption:"Portal_ImageCaption__QyJlB",KirbySlide:"Portal_KirbySlide__1ZUNI",WiggleSlide:"Portal_WiggleSlide__p42MY",MiyamotoApproveSlide:"Portal_MiyamotoApproveSlide__24Lef",MiyamotoRejectSlide:"Portal_MiyamotoRejectSlide__3utjO"}},20:function(e,a,t){e.exports={NavBar:"NavBar_NavBar__1nlbe",Hiragana:"NavBar_Hiragana__BN2nx",Hamburger:"NavBar_Hamburger__1qvqH"}},23:function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__1p2af",Hidden:"Backdrop_Hidden__375I_"}},24:function(e,a,t){e.exports={SideDrawer:"SideDrawer_SideDrawer__31_nM",DrawerOpen:"SideDrawer_DrawerOpen__2kFFb"}},26:function(e,a,t){e.exports={Button:"Button_Button__1q8mH",ActiveBtn:"Button_ActiveBtn__OB75O"}},27:function(e,a,t){e.exports={Section:"Section_Section__7AyTM",SectionHeader:"Section_SectionHeader__spjuW"}},28:function(e,a,t){e.exports={Quiz:"MyQuizzes_Quiz__7Wpo5",Preferences:"MyQuizzes_Preferences__3h-12"}},34:function(e,a,t){e.exports={Item:"Item_Item__1eUVq"}},37:function(e,a,t){e.exports={Layout:"Layout_Layout__7kSfi"}},38:function(e,a,t){e.exports={NavLinks:"NavLinks_NavLinks__1ZV24"}},39:function(e,a,t){e.exports={NavLink:"NavLink_NavLink__13kiY"}},41:function(e,a,t){e.exports=t(70)},46:function(e,a,t){},6:function(e,a,t){e.exports={Questions:"Questions_Questions__2eqNU",Question:"Questions_Question__3KKfj",QuestionNumber:"Questions_QuestionNumber__36Tho",AnswerField:"Questions_AnswerField__3TrNV",EmptyAnswer:"Questions_EmptyAnswer__3AvGR",NextBtn:"Questions_NextBtn__34mrB",AnswerHistory:"Questions_AnswerHistory__NT6V4"}},70:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(19),i=t.n(r),o=t(7),c=(t(46),t(10)),l=t(11),u=t(13),m=t(12),d=t(14),h=t(23),p=t.n(h),f=function(e){var a=e.show?p.a.Backdrop:p.a.Hidden;return s.a.createElement("div",{className:a,onClick:e.clicked})},w=t(24),_=t.n(w),y=t(34),E=t.n(y),k=function(e){var a;switch(e.label){case"Partner Up":a=s.a.createElement("i",{className:"fas fa-user-friends"});break;case"Games":a=s.a.createElement("i",{className:"fas fa-gamepad"});break;case"My Quizzes":a=s.a.createElement("i",{className:"fas fa-pencil-alt"});break;case"Profile":a=s.a.createElement("i",{className:"fas fa-user-circle"})}return s.a.createElement(o.b,{to:{pathname:e.href},className:E.a.Item},a,s.a.createElement("p",null,e.label))},N=function(e){var a=e.show?_.a.DrawerOpen:null;return s.a.createElement("nav",{className:"".concat(_.a.SideDrawer," ").concat(a)},s.a.createElement("ul",null,s.a.createElement("li",{onClick:e.clicked},s.a.createElement(k,{label:"Partner Up"})),s.a.createElement("li",{onClick:e.clicked},s.a.createElement(k,{label:"Games"})),s.a.createElement("li",{onClick:e.clicked},s.a.createElement(k,{href:"/my-tests",label:"My Quizzes"})),s.a.createElement("li",{onClick:e.clicked},s.a.createElement(k,{label:"Profile"}))))},g=t(37),b=t.n(g),v=t(38),j=t.n(v),S=t(39),A=t.n(S),C=function(e){var a;switch(e.label){case"Partner Up":a=s.a.createElement("i",{className:"fas fa-user-friends"});break;case"Games":a=s.a.createElement("i",{className:"fas fa-gamepad"});break;case"My Quizzes":a=s.a.createElement("i",{className:"fas fa-pencil-alt"});break;case"Profile":a=s.a.createElement("i",{className:"fas fa-user-circle"})}return s.a.createElement(o.b,{to:{pathname:e.href},className:A.a.NavLink},a,s.a.createElement("p",null,e.label))},x=function(e){return s.a.createElement("div",{className:j.a.NavLinks},s.a.createElement(C,{label:"Partner Up"}),s.a.createElement(C,{label:"Games"}),s.a.createElement(C,{href:"/my-tests",label:"My Quizzes"}),s.a.createElement(C,{label:"Profile"}))},O=t(20),Q=t.n(O),H=function(e){return s.a.createElement("header",{className:Q.a.NavBar},s.a.createElement("button",{className:Q.a.Hamburger,onClick:e.openDrawer},s.a.createElement("i",{className:"fas fa-bars"})),s.a.createElement(o.b,{to:{pathname:"/"}},s.a.createElement("h1",null,s.a.createElement("p",{className:Q.a.Hiragana},"\u3057\u3064\u3082\u3093"),"shitsumon")))},M=function(e){return s.a.createElement(n.Fragment,null,s.a.createElement(H,{openDrawer:e.drawerClickHandler}),s.a.createElement("main",{className:b.a.Layout},e.children),s.a.createElement("footer",null,s.a.createElement(x,null)))},I=t(1),B=t.n(I),D=t(40),z=t.n(D),q=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(n.Fragment,null,s.a.createElement(z.a,Object.assign({},{arrows:!1,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:4e3},{className:B.a.Slider}),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:B.a.Slide},s.a.createElement("p",{className:B.a.SlideCaption},"So this is currently a placeholder."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(B.a.Slide," ").concat(B.a.MiyamotoApproveSlide)},s.a.createElement("p",{className:B.a.ImageCaption},"The idea of this site is to auto-generate Japanese questions with the words you currently know"))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:B.a.Slide},s.a.createElement("p",{className:B.a.SlideCaption},"or based on general things like dates, times etc."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(B.a.Slide," ").concat(B.a.MiyamotoRejectSlide)},s.a.createElement("p",{className:B.a.ImageCaption},"...but we're still faaaaaar away from that."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(B.a.Slide," ").concat(B.a.KirbySlide)},s.a.createElement("p",{className:B.a.ImageCaption},"I know, we've betrayed you and Kirby."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:B.a.Slide},s.a.createElement("p",{className:B.a.SlideCaption},"But don't worry"))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(B.a.Slide," ").concat(B.a.WiggleSlide)},s.a.createElement("p",{className:B.a.ImageCaption},"It will be worth the wait")))))}}]),a}(n.Component),P=t(21),F=t(6),W=t.n(F),R=t(9),L=t.n(R),T=function(e){return s.a.createElement("section",{className:e.className},s.a.createElement("p",{className:L.a.Answers},"You wrote ",e.answerWasCorrect?s.a.createElement("span",{className:L.a.CorrectAnswer},e.usersAnswer,s.a.createElement("i",{className:"fas fa-check-circle ".concat(L.a.CorrectAnswer)})):s.a.createElement("span",{className:L.a.WrongAnswer},e.usersAnswer,s.a.createElement("i",{className:"fas fa-times-circle ".concat(L.a.WrongAnswer)}))),e.answerWasCorrect?null:s.a.createElement("p",{className:L.a.CorrectAnswer},"The correct answer was ",e.correctAnswer))},K=t(33),U=function(e){var a=Object(n.useRef)(null);"Default"!==e.inputMode&&setTimeout(function(){a.current&&K.bind(a.current,{IMEMode:e.inputMode})},200);var t=e.questions[e.questionIndex];return e.questions.length&&!e.endOfQuiz?s.a.createElement("form",{className:W.a.Questions,onSubmit:function(a){return e.next(a,t.id,t.answer)}},s.a.createElement("h4",{className:W.a.QuestionNumber},"Question ",e.questionIndex+1," of ",e.questions.length),s.a.createElement("section",{key:t.id,className:W.a.Question},s.a.createElement("p",null,t.text),s.a.createElement("input",{key:e.inputMode,className:e.emptyAnswer?W.a.EmptyAnswer:W.a.AnswerField,ref:a,type:"text",name:"answerField",autoFocus:!0,autoComplete:"off",placeholder:"Type the Japanese word here",value:e.usersAnswer}),s.a.createElement("input",{className:W.a.NextBtn,type:"submit",value:"Next"}))):e.endOfQuiz?s.a.createElement("div",{className:W.a.Questions},e.answerHistory.map(function(e,a){return s.a.createElement(n.Fragment,{key:"answer-"+(a+1)},s.a.createElement("h4",{className:W.a.QuestionNumber},"Question ",a+1," - ",e.text),s.a.createElement(T,{className:W.a.AnswerHistory,answerWasCorrect:e.answerWasCorrect,correctAnswer:e.correctAnswer,usersAnswer:e.usersAnswer}))})):null},J=t(26),G=t.n(J),V=function(e){return s.a.createElement("button",{className:e.selected?G.a.ActiveBtn:G.a.Button,onClick:e.onClick},e.children)},Y=t(27),Z=t.n(Y),$=function(e){return s.a.createElement("section",{className:"".concat(Z.a.Section," ").concat(e.className)},s.a.createElement("h2",{className:Z.a.SectionHeader},e.name),e.children)},X=t(28),ee=t.n(X),ae=[{month:"January",translations:["ichigatsu"]},{month:"Feburary",translations:["nigatsu"]},{month:"March",translations:["sangatsu"]},{month:"April",translations:["shigatsu"]},{month:"May",translations:["gogatsu"]},{month:"June",translations:["rokugatsu"]},{month:"July",translations:["shichigatsu"]},{month:"August",translations:["hachigatsu"]},{month:"September",translations:["kugatsu"]},{month:"October",translations:["juugatsu"]},{month:"November",translations:["juuichigatsu"]},{month:"December",translations:["juunigatsu"]}],te=[{day:"1st",translations:["tsuitachi"]},{day:"2nd",translations:["futsuka"]},{day:"3rd",translations:["mikka"]},{day:"4th",translations:["yokka"]},{day:"5th",translations:["itsuka"]},{day:"6th",translations:["muika"]},{day:"7th",translations:["nanoka"]},{day:"8th",translations:["youka"]},{day:"9th",translations:["kokonoka"]},{day:"10th",translations:["touka"]},{day:"11th",translations:["juuichinichi"]},{day:"12th",translations:["juuninichi"]},{day:"13th",translations:["juusannichi"]},{day:"14th",translations:["juuyokka"]},{day:"15th",translations:["juugonichi"]},{day:"16th",translations:["juurokunichi"]},{day:"17th",translations:["juushichinichi"]},{day:"18th",translations:["juuhachinichi"]},{day:"19th",translations:["juukyuunichi","juukunichi"]},{day:"20th",translations:["hatsuka"]},{day:"21st",translations:["nijuuichinichi"]},{day:"22nd",translations:["nijuuninichi"]},{day:"23rd",translations:["nijuusannichi"]},{day:"24th",translations:["nijuuyokka"]},{day:"25th",translations:["nijuugonichi"]},{day:"26th",translations:["nijuurokunichi"]},{day:"27th",translations:["nijuushichinichi"]},{day:"28th",translations:["nijuuhachinichi"]},{day:"29th",translations:["nijuukyuunichi","nijuukunichi"]},{day:"30th",translations:["sanjuunichi"]},{day:"31st",translations:["sanjuuichinichi"]}],ne=t(33),se=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={score:0,questionIndex:0,emptyAnswer:!1,inputMode:"toHiragana",questions:[],answerHistory:[],endOfQuiz:!1,sectionName:""},t.shuffle=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},t.handleNext=function(e){var a=t.state.questions[t.state.questionIndex],n=e.target.answerField.value,s=ne.toRomaji(n)===ne.toRomaji(a.answer),r=Object(P.a)(t.state.answerHistory);console.log(n,ne.toHiragana(a.answer));var i=t.state.score;s&&(i+=1),r.push({text:a.text,usersAnswer:n,correctAnswer:a.answer,answerWasCorrect:s}),t.state.questionIndex+1===t.state.questions.length?t.setState({endOfQuiz:!0,answerHistory:r,sectionName:"Results"}):n?t.setState(function(e){return{questionIndex:e.questionIndex+1,score:i,answerHistory:r,emptyAnswer:!1}}):t.setState({emptyAnswer:!0}),e.preventDefault()},t.setInputMode=function(e){t.setState({inputMode:e})},t.setUpDateQuiz=function(){var e=t.shuffle(Object(P.a)(ae)),a=t.shuffle(Object(P.a)(te));a.length=12;for(var n=[],s=0;s<e.length;s++){var r=a[s].day,i=e[s].month,o=a[s].translations[0],c=e[s].translations[0];n[s]={id:s+1,text:"".concat(r," ").concat(i),answer:"".concat(c).concat(o)}}t.setState({questions:n,sectionName:"Dates \u5e74\u6708\u65e5"})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setUpDateQuiz()}},{key:"render",value:function(){var e=this,a=null;return this.state.endOfQuiz||(a=s.a.createElement("div",{className:ee.a.Preferences},s.a.createElement("p",null,"Input mode"),s.a.createElement(V,{selected:"toHiragana"===this.state.inputMode,onClick:function(){return e.setInputMode("toHiragana")}},"Hiragana"),s.a.createElement(V,{selected:"toKatakana"===this.state.inputMode,onClick:function(){return e.setInputMode("toKatakana")}},"Katakana"),s.a.createElement(V,{selected:"Default"===this.state.inputMode,onClick:function(){return e.setInputMode("Default")}},"Romaji"))),s.a.createElement($,{name:this.state.sectionName,className:ee.a.Quiz},s.a.createElement(U,{questions:this.state.questions,questionIndex:this.state.questionIndex,inputMode:this.state.inputMode,next:function(a){return e.handleNext(a)},answerHistory:this.state.answerHistory,emptyAnswer:this.state.emptyAnswer,endOfQuiz:this.state.endOfQuiz}),a)}}]),a}(n.Component),re=t(8),ie=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={sideDrawerOpen:!1},t.drawerToggleClickHandler=function(){var e=!t.state.sideDrawerOpen;t.setState({sideDrawerOpen:e})},t.backdropClickHandler=function(){t.setState({sideDrawerOpen:!1})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(M,{drawerClickHandler:this.drawerToggleClickHandler},s.a.createElement(N,{show:this.state.sideDrawerOpen,clicked:this.drawerToggleClickHandler}),s.a.createElement(f,{show:this.state.sideDrawerOpen,clicked:this.backdropClickHandler}),s.a.createElement(re.a,{path:"/",exact:!0,component:q}),s.a.createElement(re.a,{path:"/my-tests/",exact:!0,component:se}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=s.a.createElement(o.a,{basename:"/shitsumon-web"},s.a.createElement(ie,null));i.a.render(oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports={Answers:"Result_Answers__1I48m",CorrectAnswer:"Result_CorrectAnswer__RoC7K",WrongAnswer:"Result_WrongAnswer__2rlzT",Answer:"Result_Answer__1_i-g"}}},[[41,1,2]]]);
//# sourceMappingURL=main.bf621691.chunk.js.map