(this["webpackJsonpspace-is-awesome"]=this["webpackJsonpspace-is-awesome"]||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},152:function(e,t,a){},155:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(11),o=a.n(i),r=(a(125),a(103)),c=a(8),l=a(20),d=a(15),h=a(21),p=a(26),j=a(49),b=a(66),u=a(29),m=a(195),O=a(196),g=a(197),x=a(198),f=a(199),v=a(218),D=a(202),S=a(213),y=a(203),C=a(91),w=a.n(C),k=a(88),N=a.n(k),M=a(93),E=a.n(M),Y=a(94),A=a.n(Y),B=a(160),I=(a(126),a(6)),P=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleExpnandClose=function(){n.setState({expanded:!1})},n.handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.addToFaves=function(e){if(n.state.favoriteIconActive){n.setState({favoriteIconActive:!1});var t=Object(u.a)(n.state.favorites),a=t.indexOf(e.target.value);-1!==a&&(t.splace(a,1),n.setState({favorites:t}),console.log(n.state.favorites))}else n.setState({favoriteIconActive:!0}),n.setState((function(e){return{favorites:[].concat(Object(u.a)(e.favorites),[n.props.photo.url])}}))},n.state={open:!1,expanded:!1,favoriteIconActive:!1,favorites:[]},n.handleExpandClick=n.handleExpandClick.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"handleExpandClick",value:function(){var e=this.state.expanded;this.setState({expanded:!e})}},{key:"render",value:function(){var e=this.props.photo,t=this.state.expanded,a=this.state.open,n=this.props;return n=this.state.favoriteIconActive?Object(I.jsx)(w.a,{id:"faveIcon"}):Object(I.jsx)(N.a,{}),Object(I.jsxs)("div",{className:"cardWrapper",children:[Object(I.jsxs)(m.a,{className:"nasaPhotoCard",children:[Object(I.jsxs)(O.a,{children:[Object(I.jsx)("h1",{children:e.title}),Object(I.jsxs)(g.a,{className:"photoDateInfo",children:["Published: ",e.date]})]}),"image"===e.media_type?Object(I.jsx)("img",{src:e.url,alt:e.title,className:"nasaPhoto"}):Object(I.jsx)("iframe",{title:"space-video",src:e.url,frameBorder:"0",allow:"autoplay",allowFullScreen:!0,className:"nasaPhoto"}),Object(I.jsxs)(x.a,{disableSpacing:!0,children:[Object(I.jsx)(f.a,{"aria-label":"favorites",onClick:this.addToFaves,children:n}),"image"===e.media_type?Object(I.jsx)(v.a,{title:"View HD Version",placement:"right",arrow:!0,children:Object(I.jsx)(f.a,{onClick:this.handleOpen,children:Object(I.jsx)(E.a,{})})}):Object(I.jsx)("div",{}),Object(I.jsx)(f.a,{className:t?"expand":"expandOpen",onClick:this.handleExpandClick,"aria-expanded":t,"aria-label":"show more",children:Object(I.jsx)(A.a,{})})]}),Object(I.jsx)(D.a,{in:t,timeout:"auto",unmountOnExit:!0,children:Object(I.jsx)(O.a,{children:Object(I.jsx)(g.a,{paragraph:!0,children:e.explanation})})})]}),Object(I.jsx)(S.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"hdModal",open:a,onClose:this.handleClose,closeAfterTransition:!0,BackdropComponent:y.a,BackdropProps:{timeout:500},children:Object(I.jsx)(B.a,{in:a,children:Object(I.jsx)("div",{className:"hdModal-Content",children:Object(I.jsx)("img",{src:e.hdurl,alt:e.title,className:"hdNasaPhoto"})})})})]})}}]),a}(s.a.Component),L=a(95),T=a.n(L),F=(a(152),a(32)),z=a.n(F),_=a(102),H=a(204),R=a(19),W=a(211),G=a(3),J=a(215),K=a(4),U=a(216),V=a(206),Z=a(207),Q=a(208),X=a(209),q=a(97),$=a.n(q),ee=a(98),te=a.n(ee),ae=a(99),ne=a.n(ae),se=a(210),ie=a(205),oe=a(214),re=a(100),ce=a.n(re),le=a(96),de=a.p+"static/media/spacelogo.523cced7.png",he=320,pe=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleDrawerOpen=function(){!1===e.state.open?e.setState({open:!0}):e.setState({open:!1}),console.log(e.state.open)},e.handleStartDateChange=function(t){e.setState({startDate:t},(function(){console.log(e.state.startDate)}))},e.handleEndDateChange=function(t){var a=z()(t).format("YYYY-MM-DD");e.setState({endDate:a},(function(){console.log(e.state.endDate)}))},e.updateDateRange=function(){var t=z()(e.state.startDate).format("YYYY-MM-DD"),a=z()(e.state.endDate).format("YYYY-MM-DD");e.setState({apiStartDate:t,apiEndDate:a},(function(){this.componentDidMount(),console.log(t),console.log(a)})),e.handleExploreAlert()},e.state={photo:[],open:!0,breakpointColumnsObj:{default:3,1400:3,1200:2,1e3:1},openAlert:!1,isLoading:!1,apiStartDate:z()(new Date).subtract(7,"d").format("YYYY-MM-DD"),apiEndDate:z()(new Date).format("YYYY-MM-DD"),startDate:z()(new Date).subtract(7,"d"),endDate:new Date},e.handleDrawerOpen=e.handleDrawerOpen.bind(Object(h.a)(e)),e.handleCloseAlert=e.handleCloseAlert.bind(Object(h.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://api.nasa.gov/planetary/apod?api_key=".concat("PmGdmW3olYfF9BIOkBMpH6tt9ZUDQRt1ucef7fZU","&start_date=").concat(this.state.apiStartDate,"&end_date=").concat(this.state.apiEndDate);this.setState({isLoading:!0}),T.a.get(t).then((function(t){var a=t.data;e.setState({photo:a}),console.log(a),e.setState({isLoading:!1})})).catch((function(e){console.log(e)}))}},{key:"handleExploreAlert",value:function(){this.setState({openAlert:!0})}},{key:"handleCloseAlert",value:function(){this.setState({openAlert:!1})}},{key:"render",value:function(){var e=this.state.breakpointColumnsObj,t=this.props.classes,a=this.props,n=this.state.open,i=this.props,o=this.state.photo.map((function(e){return Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(P,{photo:e})},e.date)}));return i=this.state.isLoading?Object(I.jsx)(ie.a,{size:80,className:"loadingIcon"}):Object(I.jsx)("div",{className:"no-disaply"}),Object(I.jsx)("div",{className:"home",children:Object(I.jsxs)("div",{className:t.root,children:[Object(I.jsx)(V.a,{}),Object(I.jsx)(Z.a,{position:"fixed",className:Object(G.a)(t.appBar,Object(c.a)({},t.appBarShift,n)),children:Object(I.jsx)(Q.a,{children:Object(I.jsxs)(f.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,edge:"start",className:Object(G.a)(t.menuButton,n&&t.hide),children:[Object(I.jsx)($.a,{className:"hamburgerIcon"}),Object(I.jsx)("h5",{children:"SPACE IS AWESOME"})]})})}),Object(I.jsxs)(U.a,{className:t.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:t.drawerContent},children:[Object(I.jsx)("div",{className:t.drawerHeader,children:Object(I.jsx)(f.a,{onClick:this.handleDrawerOpen,children:"ltr"===a.direction?Object(I.jsx)(te.a,{}):Object(I.jsx)(ne.a,{})})}),Object(I.jsx)(X.a,{}),Object(I.jsx)("img",{src:de,alt:"Logo"}),Object(I.jsx)("div",{className:"paragraph",children:Object(I.jsx)("p",{children:"Select a date to see more of our amazing galaxy. There's a new picture every day. So the further in the past you go, the more there is to see."})}),Object(I.jsx)(R.a,{utils:_.a,children:Object(I.jsxs)(H.a,{container:!0,justifyContent:"space-around",children:[Object(I.jsx)(W.a,{className:"datePicker",margin:"normal",disableFuture:!0,maxDate:this.state.endDate,maxDateMessage:"Start Date cannot exceed End Date",id:"date-picker-start",label:"Start Date",format:"yyyy/MM/dd",showTodayButton:!0,onChange:this.handleStartDateChange,value:z()(this.state.startDate),KeyboardButtonProps:{"aria-label":"change date"}}),Object(I.jsx)(W.a,{className:"datePicker",margin:"normal",disableFuture:!0,id:"date-picker-end",label:"End Date",format:"yyyy/MM/dd",minDate:z()(this.state.startDate).add(1,"d"),minDateMessage:"End Date cannot precede Start Date",value:z()(this.state.endDate),showTodayButton:!0,onChange:this.handleEndDateChange,KeyboardButtonProps:{"aria-label":"change date"}})]})}),Object(I.jsx)(X.a,{}),Object(I.jsx)(se.a,{onClick:this.updateDateRange,variant:"contained",size:"medium",className:t.updateButton,children:"EXPLORE"}),Object(I.jsx)(oe.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.openAlert,autoHideDuration:4e3,onClose:this.handleCloseAlert,message:"A long date range may result in a long load time. Be patient :)",action:Object(I.jsx)(s.a.Fragment,{children:Object(I.jsx)(f.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleCloseAlert,children:Object(I.jsx)(ce.a,{fontSize:"small"})})})})]}),Object(I.jsxs)(H.a,{container:!0,spacing:3,className:Object(G.a)(t.content,Object(c.a)({},t.contentShift,n)),children:[i,Object(I.jsx)(le.a,{breakpointCols:e,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:o.length?o:Object(I.jsx)("h2",{children:"Sorry, no results."})})]})]})})}}]),a}(s.a.Component),je=Object(K.a)((function(e){return Object(J.a)({root:{display:"flex"},appBar:{height:"64px",marginBotom:"10",transition:e.transitions.create(["margin","width","height"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(he,"px)"),marginLeft:he,height:"0px",transition:e.transitions.create(["margin","width","height"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:he,flexShrink:0},drawerContent:{width:he,backgroundColor:"#282828",color:"#fff"},drawerHeader:Object(b.a)(Object(b.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-320,marginTop:51},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0,marginTop:30},updateButton:{margin:e.spacing(4),letterSpacing:6}})}),{theme:!0})(pe);a(155);function be(){return Object(I.jsx)(r.a,{children:Object(I.jsx)("div",{className:"app",children:Object(I.jsx)(je,{})})})}o.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(be,{})}),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.653839c7.chunk.js.map