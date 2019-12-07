(this.webpackJsonpprojekt=this.webpackJsonpprojekt||[]).push([[0],{125:function(e,t){},159:function(e,t,a){e.exports=a(784)},169:function(e,t,a){},431:function(e,t){},432:function(e,t){},784:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(62),o=a.n(i),c=a(55),l=a(54),s=a(21),u=a(22),p=a(24),m=a(23),h=a(25),v=a(42),d=a(43),b=function(e,t){return{type:"SELECT_EXERCISE",payload:{workout:e,index:t}}},f=function(e,t){return console.log(e),{type:"CREATE_WORKOUT",payload:{exercisePool:e,exerciseCount:t}}},E=a(152),O=(a(168),a(169),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{className:"progress-bar",text:Math.floor(this.props.time),value:this.props.time/this.props.exercise.duration*100}),r.a.createElement("div",{className:"exercise-name"},this.props.exercise.name))}}]),t}(n.Component)),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={time:0},a.timer={interval:setInterval((function(){a.countDown()}),100),isRunning:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){null===this.props.exercise&&this.props.workout?(console.log(this.props.workout),this.props.selectExercise(this.props.workout,0)):e!==this.props&&this.setState({time:this.props.exercise.duration})}},{key:"countDown",value:function(){this.setState({time:this.state.time-.1})}},{key:"nextExercise",value:function(){this.setState({time:this.props.exercise.duration})}},{key:"pauseTimer",value:function(){this.timer.isRunning&&(clearInterval(this.timer.interval),this.timer.isRunning=!1)}},{key:"runTimer",value:function(){var e=this;this.timer.isRunning||(this.timer.interval=setInterval((function(){e.countDown()}),100))}},{key:"next",value:function(){this.props.selectExercise(this.props.workout,this.props.exercise.index+1)}},{key:"render",value:function(){var e=this;return null===this.props.exercise?r.a.createElement("div",null,r.a.createElement("h1",null,"Please select a workout"),r.a.createElement("div",{onClick:function(){e.props.createWorkout(e.props.exercisePool,4)}},"Create random workout")):r.a.createElement("div",null,r.a.createElement(O,{exercise:this.props.exercise,time:this.state.time}),r.a.createElement("div",{className:"ui grid exercise-menu"},r.a.createElement("div",{className:"four wide column"},r.a.createElement("i",{className:"step backward icon",onClick:function(){return console.log("backward")}})),r.a.createElement("div",{className:"four wide column"},r.a.createElement("i",{className:" icon",onClick:function(){return e.pauseTimer()}})),r.a.createElement("div",{className:"four wide column"},r.a.createElement("i",{className:"step forward icon",onClick:function(){return e.next()}}))))}}]),t}(n.Component),j=Object(c.b)((function(e){return{exercise:e.currentExercise,workout:e.currentWorkout.exercises,exercisePool:e.exercisePool}}),{selectExercise:b,createWorkout:f})(y),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={active:0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.location.pathname;return r.a.createElement("div",{className:"ui bottom fixed tabular menu"},r.a.createElement(v.b,{className:"/"===e?"active item":"item",to:"/"},"Home"),r.a.createElement(v.b,{className:"/overview"===e?"active item":"item",to:"/overview"},"Overview"),r.a.createElement(v.b,{className:"/challenges"===e?"active item":"item",to:"/challenges"},"Challenges"))}}]),t}(n.Component),g=a(48),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={latestTrainings:["18.11.","20.11.","23.11","27.11.","29.11.","30.11."]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"buildTimeline",value:function(){var e=this.state.latestTrainings.length,t="today",a=new Date,n=a.getDate()+"."+(a.getMonth()+1)+".";return this.state.latestTrainings[e-1]===n&&(e-=1,t=null),r.a.createElement(g.ProgressIndicator,{currentStepName:t},this.renderList(e),r.a.createElement(g.ProgressStep,{name:"today",label:n}))}},{key:"renderList",value:function(e){return this.state.latestTrainings.slice(0,e).map((function(e,t){return r.a.createElement(g.ProgressStep,{key:t,name:"step-"+t,label:e})}))}},{key:"render",value:function(){return this.buildTimeline()}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(g.Chart,{style:{width:"500px"},labels:this.props.values.map((function(e){return e.label})),type:"line"},r.a.createElement(g.Dataset,{title:"Weight",values:this.props.values.map((function(e){return e.value})),backgroundColor:"#1de9b6",borderColor:"#1de9b6"}))}}]),t}(r.a.Component);x.defaultProps={values:[]};var C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement("br",null),r.a.createElement(x,{values:[{label:"20/2019",value:50},{label:"21/2019",value:50.5},{label:"22/2019",value:49.5}]}))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui statistic"},r.a.createElement("div",{className:"value"},this.props.value),r.a.createElement("div",{className:"label"},this.props.label))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome back!"),r.a.createElement(N,{value:2,label:"workouts/week"}),r.a.createElement(N,{value:20,label:"\xd8 minutes workout time"}),r.a.createElement(N,{value:75,label:"kg weigth"}),r.a.createElement("div",{onClick:function(){e.props.createWorkout(e.props.exercisePool,4)}},"Create random workout"),r.a.createElement(v.b,{to:"/workout"},"START YOUR WORKOUT"))}}]),t}(n.Component),R=Object(c.b)((function(e){return{exercisePool:e.exercisePool,currentWorkout:e.currentWorkout}}),{createWorkout:f,selectExercise:b})(T),S=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui indicating progress","data-percent":this.props.percentage+"%"},r.a.createElement("div",{className:"bar",style:{width:this.props.percentage+"%"}},r.a.createElement("div",{className:"progress"},this.props.value?this.props.value:this.props.percentage+"%")),r.a.createElement("div",{className:"label"},this.props.label))}}]),t}(n.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,{percentage:50,label:"Consecutive days with training",value:"2/4 days"})," ",r.a.createElement(S,{percentage:70,label:"Randomly generated trainings",value:"7/10 trainings"}))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(d.a,{path:"/overview",component:C}),r.a.createElement(d.a,{path:"/workout",component:j}),r.a.createElement(d.a,{path:"/challenges",component:P}),r.a.createElement(d.a,{path:"/",component:R,exact:!0}),r.a.createElement(d.a,{path:"/",component:k}))}}]),t}(n.Component),A=a(156);function D(e){return e.sort((function(){return Math.random()-.5}))}var I=Object(l.b)({exercisePool:function(){return[{name:"Pushup",duration:30},{name:"Situps",duration:40},{name:"Squats",duration:60},{name:"Bent-Over Row",duration:40},{name:"Abdominal Crunches",duration:50}]},currentExercise:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;if("SET_EXERCISE"===t.type)return t.payload;if("SELECT_EXERCISE"===t.type){if(!t.payload.workout||0===t.payload.workout.length)return e;var a=t.payload.index%t.payload.workout.length;return{name:t.payload.workout[a].name,duration:t.payload.workout[a].duration,index:t.payload.index}}return e},currentWorkout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CREATE_WORKOUT"===t.type?{title:"Random workout",exercises:D(Object(A.a)(t.payload.exercisePool)).slice(0,t.payload.exerciseCount)}:"SELECT_WORKOUT"===t.type?t.payload:e}}),U=Object(l.c)(I);o.a.render(r.a.createElement(c.a,{store:U},r.a.createElement(W,null)),document.querySelector("#root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.0530ee7e.chunk.js.map