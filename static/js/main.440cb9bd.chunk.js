(this["webpackJsonpzip-search"]=this["webpackJsonpzip-search"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),s=(a(25),a(26),a(2)),o=a.n(s),l=a(3),u=a(14),m=a(15),h=a(16),p=a(19),d=a(18),f=function(e){var t=e.title,a=e.cities,n=e.zip;return r.a.createElement("nav",{className:"navbar navbar-light bg-primary",style:{textAlign:"center"}},r.a.createElement("a",{className:"navbar-brand",href:"#",style:{color:"white",letterSpacing:2}},t),r.a.createElement("p",{style:{color:"white",fontSize:17,marginRight:100,display:"block"}},"Zip ",n&&n,r.a.createElement("span",{style:{marginLeft:50}},"Matches ",a&&"no result"!==a&&a.length)))},g=function(e){var t=e.onChange,a=e.onSubmit;return r.a.createElement("div",{className:"input-form",style:{marginLeft:"38%",marginTop:"2vh"}},r.a.createElement("label",{style:{marginRight:5}},"Zip Code"),r.a.createElement("input",{placeholder:"Type in a zipcode",onChange:t,id:"zip",style:{height:40}}),r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return a(e)},style:{marginLeft:5,height:40,marginBottom:5}},"Search"))},E=function(e){var t=e.cities;return t?r.a.createElement("div",{className:"container"},"no results"!==t?r.a.createElement("div",{className:"card-container"},t.map((function(e){return r.a.createElement("div",{className:"card",key:e.RecordNumber},r.a.createElement("h5",{className:"card-header"},"".concat(e.City,", ").concat(e.Country)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"State:",e.State),r.a.createElement("p",{className:"card-text"},"Location: (",e.Lat,", ",e.Long,")"),r.a.createElement("p",{className:"card-text"},"Population (estimate): ",e.EstimatedPopulation),r.a.createElement("p",{className:"card-text"},"Total Wages: ",e.TotalWages)))}))):r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,"No Results"))):r.a.createElement("div",{className:"container card-header"},r.a.createElement("h5",null,"Enter A Zip to See Matching Cities"))},v=a(17),b=a.n(v),y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(u.a)({},e.target.id,e.target.value))},n.onSubmitZip=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.fetchCities(n.state.zip));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.fetchCities=function(e){b.a.get("http://ctp-zip-api.herokuapp.com/zip/".concat(e)).then((function(e){e.data&&n.setState({cities:e.data})})).catch((function(e){n.setState({cities:"no results"})}))},n.state={cities:null,zip:null},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.zip){e.next=2;break}return e.abrupt("return",this.fetchCities(this.state.zip));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("cities",this.state.cities),console.log("zip",this.state.zip),r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:"ZipSearch",cities:this.state.cities,zip:this.state.zip}),r.a.createElement(g,{onChange:this.handleChange,onSubmit:this.onSubmitZip}),r.a.createElement(E,{cities:this.state.cities}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.440cb9bd.chunk.js.map