(this.webpackJsonpsplooshkaboom=this.webpackJsonpsplooshkaboom||[]).push([[0],{16:function(e,t,a){e.exports=a(31)},21:function(e,t,a){},23:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),i=a(14),l=a.n(i),o=(a(21),a(1)),u=a.n(o),c=a(10),d=a(15),m=a(12),h=a(4),f=a(3),p=a(6),v=a(7),b=a(9),g=a(8),y=a(2),S=(a(23),null);var E=0;function k(e,t){var a=t(1*e.length);return(null!==S&&S.buffer===n.memory.buffer||(S=new Uint8Array(n.memory.buffer)),S).set(e,a/1),E=e.length,a}var w=null;function T(e,t){var a=t(4*e.length);return(null!==w&&w.buffer===n.memory.buffer||(w=new Uint32Array(n.memory.buffer)),w).set(e,a/4),E=e.length,a}var x=null;function C(){return null!==x&&x.buffer===n.memory.buffer||(x=new Float64Array(n.memory.buffer)),x}function B(e,t){var a=t(8*e.length);return C().set(e,a/8),E=e.length,a}var R=null;function A(){return null!==R&&R.buffer===n.memory.buffer||(R=new Int32Array(n.memory.buffer)),R}function M(e,t){return C().subarray(e/8,e/8+t)}function O(e,t,a){var r=k(e,n.__wbindgen_malloc),s=E,i=k(t,n.__wbindgen_malloc),l=E;n.calculate_probabilities_without_sequence(8,r,s,i,l,a);var o,u=A()[2],c=A()[3];return 0!==u&&(o=M(u,c).slice(),n.__wbindgen_free(u,8*c)),o}function _(e,t,a,r,s,i){var l=k(e,n.__wbindgen_malloc),o=E,u=k(t,n.__wbindgen_malloc),c=E,d=T(r,n.__wbindgen_malloc),m=E,h=T(s,n.__wbindgen_malloc),f=E,p=B(i,n.__wbindgen_malloc),v=E;n.calculate_probabilities_from_game_history(8,l,o,u,c,a,d,m,h,f,p,v);var b,g=A()[2],y=A()[3];return 0!==g&&(b=M(g,y).slice(),n.__wbindgen_free(g,8*y)),b}function j(e,t,a,r,s,i){var l=k(e,n.__wbindgen_malloc),o=E,u=k(t,n.__wbindgen_malloc),c=E,d=T(r,n.__wbindgen_malloc),m=E,h=T(s,n.__wbindgen_malloc),f=E,p=B(i,n.__wbindgen_malloc),v=E;n.disambiguate_board(8,l,o,u,c,a,d,m,h,f,p,v);var b=A()[2],g=A()[3];return 0===b?void 0:g>>>0}function F(e){var t=T(e,n.__wbindgen_malloc),a=E;n.set_board_table(t,a)}function q(e,t){return I.apply(this,arguments)}function I(){return(I=Object(f.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("function"===typeof Response&&t instanceof Response)){e.next=23;break}if("function"!==typeof WebAssembly.instantiateStreaming){e.next=15;break}return e.prev=2,e.next=5,WebAssembly.instantiateStreaming(t,a);case 5:return e.abrupt("return",e.sent);case 8:if(e.prev=8,e.t0=e.catch(2),"application/wasm"===t.headers.get("Content-Type")){e.next=14;break}console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e.t0),e.next=15;break;case 14:throw e.t0;case 15:return e.next=17,t.arrayBuffer();case 17:return n=e.sent,e.next=20,WebAssembly.instantiate(n,a);case 20:return e.abrupt("return",e.sent);case 23:return e.next=25,WebAssembly.instantiate(t,a);case 25:if(!((r=e.sent)instanceof WebAssembly.Instance)){e.next=30;break}return e.abrupt("return",{instance:r,module:t});case 30:return e.abrupt("return",r);case 31:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function G(e){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(u.a.mark((function e(t){var a,r,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},("string"===typeof t||"function"===typeof Request&&t instanceof Request||"function"===typeof URL&&t instanceof URL)&&(t=fetch(t)),e.t0=q,e.next=5,t;case 5:return e.t1=e.sent,e.t2=a,e.next=9,(0,e.t0)(e.t1,e.t2);case 9:return r=e.sent,s=r.instance,i=r.module,n=s.exports,G.__wbindgen_wasm_module=i,e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=G,D=a(24),z=null,H=window.indexedDB.open("splooshkaboom",1);function P(e,t){if(null!==z){var a=z.transaction(["sk"],"readwrite");a.onerror=function(e){alert("Transaction error!")},a.objectStore("sk").put(t,e)}}function U(e){return new Promise((function(t,a){var n=z.transaction(["sk"]);n.onerror=function(e){alert("Transaction error!")};var r=n.objectStore("sk").get(e);r.onsuccess=function(e){t(e.target.result)},r.onerror=function(e){a()}}))}function K(e,t){return(100*e).toFixed(t)+"%"}H.onerror=function(e){alert("Failed to access IndexedDB.")},H.onsuccess=function(e){(z=e.target.result).onerror=function(e){alert("IndexedDB error: "+e.target.errorCode)},Q()},H.onupgradeneeded=function(e){e.target.result.createObjectStore("sk")};var W=D(["#004","#070","#090","#0b0","#0d0","#0f0","#6f6"]),J=function(e){return Object(y.a)(Array(e).keys())},Z=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e,t=null!==this.props.best&&this.props.best[0]===this.props.x&&this.props.best[1]===this.props.y,a=this.props.backgroundColor;return void 0===a&&(a=null===this.props.text?W(this.props.prob):"HIT"===this.props.text?"#a2a":"#44a"),s.a.createElement("div",{className:"boardTile",key:this.props.x+","+this.props.y,style:{border:this.props.valid?"1px solid grey":"1px solid red",outline:t?"2px solid yellow":"",zIndex:t?1:0,opacity:this.props.opacity,backgroundColor:a},onClick:this.props.onClick},"."===this.props.text?"":null!==(e=this.props.text)&&void 0!==e?e:K(this.props.prob,this.props.precision))}}]),a}(s.a.Component),V=L("/web-sploosh-kaboom/sploosh_wasm_bg.wasm"),X=null;function Y(e,t){return $.apply(this,arguments)}function $(){return($=Object(f.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=new XMLHttpRequest;return e.open("GET","/web-sploosh-kaboom"+t,!0),e.responseType="arraybuffer",e.onload=function(n){P(t,e.response),a(e.response)},e.send(),null},e.next=3,U(t).catch(n);case 3:if(void 0!==(r=e.sent)){e.next=7;break}return n(),e.abrupt("return");case 7:if(null!==r){e.next=9;break}return e.abrupt("return");case 9:a(r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){if(null===z||!X.state.doneInitializing)return null;U("largestLocalTableSize").then((function(e){e&&X.setState({largestLocalTableSize:e,tableSize:e})}))}function ee(){return te.apply(this,arguments)}function te(){return(te=Object(f.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=ae();return P("boardIndicesTable",e),e},e.next=3,U("boardIndicesTable").catch(t);case 3:if(void 0!==(a=e.sent)){e.next=6;break}return e.abrupt("return",t());case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(){for(var e=[],t=0;t<8;t++)for(var a=0;a<8;a++)for(var n=0,r=[!1,!0];n<r.length;n++){var s=r[n];e.push({x:a,y:t,direction:s})}var i=[],l={};function o(e,t,a){for(var n=0;n<a;n++){var r=t.x,s=t.y;if(t.direction?r+=n:s+=n,r>=8||s>=8)return;e[r+8*s]=a}}for(var u=new Array(64).fill(0),c=0,d=e;c<d.length;c++){var m,f=d[c],p=Object(h.a)(e);try{for(p.s();!(m=p.n()).done;){var v,b=m.value,g=Object(h.a)(e);try{for(g.s();!(v=g.n()).done;){var y=v.value;u.fill(0),o(u,f,2),o(u,b,3),o(u,y,4);var S,E=0,k=Object(h.a)(u);try{for(k.s();!(S=k.n()).done;){E+=S.value}}catch(C){k.e(C)}finally{k.f()}29===E&&i.push(Array.from(u))}}catch(C){g.e(C)}finally{g.f()}}}catch(C){p.e(C)}finally{p.f()}}for(var w=0,T=0,x=i;T<x.length;T++){l[x[T].map((function(e){return 0===e?".":e})).join("")]=w,w++}return l}var ne=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).state={grid:e.makeEmptyGrid(),selectedCell:null},e}return Object(v.a)(a,[{key:"makeEmptyGrid",value:function(){for(var e=[],t=0;t<8;t++)for(var a=0;a<8;a++)e[[a,t]]=".";return e}},{key:"clearBoard",value:function(){this.setState({grid:this.makeEmptyGrid(),selectedCell:null})}},{key:"onClick",value:function(e,t){if(null!==this.state.selectedCell){for(var a=Object(m.a)({},this.state.grid),n=!1,r=0,s=[2,3,4];r<s.length;r++)for(var i=s[r],l=0,o=[[1,0],[0,1],[-1,0],[0,-1]];l<o.length;l++){var u=Object(d.a)(o[l],2),c=u[0],h=u[1];if(this.state.selectedCell[0]===e+c*(i-1)&&this.state.selectedCell[1]===t+h*(i-1)){for(var f=0;f<8;f++)for(var p=0;p<8;p++)a[[p,f]]===""+i&&(a[[p,f]]=".");for(var v=0;v<i;v++)a[[e+v*c,t+v*h]]=""+i;n=!0}}for(var b={2:0,3:0,4:0,".":0},g=0;g<8;g++)for(var y=0;y<8;y++)b[a[[y,g]]]++;for(var S=0,E=[2,3,4];S<E.length;S++){var k=E[S];if(b[k]!==k)for(var w=0;w<8;w++)for(var T=0;T<8;T++)a[[T,w]]===""+k&&(a[[T,w]]=".")}n&&this.setState({grid:a}),this.setState({selectedCell:null})}else this.setState({selectedCell:[e,t]})}},{key:"getLayoutString",value:function(){for(var e="",t=0;t<8;t++)for(var a=0;a<8;a++)e+=this.state.grid[[a,t]];return e}},{key:"setStateFromLayoutString",value:function(e){for(var t=[],a=0;a<8;a++)for(var n=0;n<8;n++)t[[n,a]]=e[n+8*a];this.setState({grid:t})}},{key:"render",value:function(){var e=this,t=this.getLayoutString(),a=this.props.parent.boardIndices[t];void 0===a&&(a="waiting...");var n=function(t,a){return null!==e.state.selectedCell&&t===e.state.selectedCell[0]&&a===e.state.selectedCell[1]};return s.a.createElement("div",{className:"board historyBoard"},J(8).map((function(t){return J(8).map((function(a){return s.a.createElement(Z,{key:a+","+t,x:a,y:t,onClick:function(){return e.onClick(a,t)},text:e.state.grid[[a,t]],valid:!0,best:e.state.selectedCell,opacity:n(a,t)||"."!==e.state.grid[[a,t]]?.6:.2,backgroundColor:"."===e.state.grid[[a,t]]?void 0:"green"})}))})))}}]),a}(s.a.Component),re=null;setInterval((function(){null!==re&&re.forceUpdate()}),69);var se=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),e=t.call(this),re=Object(c.a)(e),e.state={previouslyAccumulatedSeconds:0,timerStartMS:0,timerRunning:!1,includesLoadingTheRoom:!0,includedRewardsGotten:0,invalidated:!1},e}return Object(v.a)(a,[{key:"toggleRunning",value:function(){var e=performance.now(),t=.001*(e-this.state.timerStartMS);this.state.timerRunning&&this.setState({previouslyAccumulatedSeconds:this.state.previouslyAccumulatedSeconds+t}),this.setState({timerRunning:!this.state.timerRunning,timerStartMS:e})}},{key:"adjustRewards",value:function(e){this.setState({includedRewardsGotten:Math.max(0,Math.min(2,this.state.includedRewardsGotten+e))})}},{key:"toggleInvalidated",value:function(){this.setState({invalidated:!this.state.invalidated})}},{key:"resetTimer",value:function(){this.setState({previouslyAccumulatedSeconds:0,timerStartMS:performance.now(),timerRunning:!1,includesLoadingTheRoom:!0,includedRewardsGotten:0,invalidated:!1}),X.setState({timerStepEstimates:[]})}},{key:"getSecondsElapsed",value:function(){var e=this.state.previouslyAccumulatedSeconds;this.state.timerRunning&&(e+=.001*(performance.now()-this.state.timerStartMS));return e}},{key:"guessStepsElapsedFromTime",value:function(e){var t=Number(this.props.timedTickIntercept)+Number(this.props.timedTickRate)*e;return this.state.includesLoadingTheRoom&&(t+=-940+Number(this.props.roomEnteredOffset)),t+=760*this.state.includedRewardsGotten,Math.round(t)}},{key:"render",value:function(){var e=this.getSecondsElapsed();return this.state.invalidated?s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("b",null,"Timer")),s.a.createElement("td",null,s.a.createElement("b",null,"Invalidated"))):s.a.createElement(s.a.Fragment,null,s.a.createElement("tr",null,s.a.createElement("td",null,"Seconds elapsed:"),s.a.createElement("td",null,e.toFixed(2))),s.a.createElement("tr",null,s.a.createElement("td",null,"Steps:"),s.a.createElement("td",null,this.guessStepsElapsedFromTime(e))),s.a.createElement("tr",null,s.a.createElement("td",null,"Entered room:"),s.a.createElement("td",null,this.state.includesLoadingTheRoom?s.a.createElement("span",{className:"boolText",style:{color:"green"}},"Yes"):s.a.createElement("span",{className:"boolText",style:{color:"red"}},"No"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Rewards gotten:"),s.a.createElement("td",null,this.state.includedRewardsGotten)))}}]),a}(s.a.Component);var ie={firstBoardStepsThousands:100,firstBoardStepsThousandsStdDev:150,nextBoardStepsThousands:9,nextBoardStepsThousandsStdDev:4,timedBoardStepsThousandsStdDev:.5,timedTickIntercept:550,timedTickRate:243.3,roomEnteredOffset:-550,usingTimer:!0,autoRecomputeMatches:!1,showAdvancedSettings:!1},le=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).layoutDrawingBoardRefs=[s.a.createRef(),s.a.createRef()],e.timerRef=s.a.createRef(),e.state=e.makeEmptyState(),X=Object(c.a)(e),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.setState({doneInitializing:!0},Q),this.doComputation(this.state.grid,this.state.squidsGotten)}},{key:"makeEmptyGrid",value:function(){for(var e=[],t=0;t<8;t++)for(var a=0;a<8;a++)e[[a,t]]=null;return e}},{key:"makeEmptyState",value:function(){for(var e=[],t=0;t<8;t++)for(var a=0;a<8;a++)e[[a,t]]=0;var n={grid:this.makeEmptyGrid(),squidsGotten:"unknown",undoBuffer:[],probs:e,best:[3,4],cursorBelief:[0,7],valid:!0,observationProb:1,lastComputationTime:-1,sequenceAware:!1,tableSize:"500k",largestLocalTableSize:null,usingTimer:!1,showKeyShortcuts:!1,timerStepEstimates:[],potentialMatches:null},r=localStorage.getItem("SKSettings");if(null===r)r=ie;else{r=JSON.parse(r);for(var s=0,i=Object.keys(ie);s<i.length;s++){var l=i[s];l in r||(r[l]=ie[l])}}var o=r;return Object(m.a)(Object(m.a)({},n),o)}},{key:"getConfigParams",value:function(){for(var e={},t=0,a=Object.keys(ie);t<a.length;t++){var n=a[t];e[n]=this.state[n]}return e}},{key:"saveConfigParams",value:function(){var e=this.getConfigParams();console.log("Saving config params:",e),localStorage.setItem("SKSettings",JSON.stringify(e))}},{key:"factoryResetConfigParams",value:function(){this.setState(ie)}},{key:"loadSequenceTable",value:function(){var e=Object(f.a)(u.a.mark((function e(){var t,a,n,r=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1===this.state.sequenceAware){e.next=2;break}return e.abrupt("return");case 2:return this.setState({sequenceAware:"initializing"}),e.next=5,ee();case 5:for(this.boardIndices=e.sent,this.boardIndexToLayoutString=new Array(Object.keys(this.boardIndices).length),t=0,a=Object.keys(this.boardIndices);t<a.length;t++)n=a[t],this.boardIndexToLayoutString[this.boardIndices[n]]=n;Y("/board_table_"+this.state.tableSize+".bin",(function(e){P("largestLocalTableSize",r.state.tableSize),r.boardTable=new Uint32Array(e),console.log("Board table length:",r.boardTable.length),F(r.boardTable),r.setState({sequenceAware:!0},(function(){r.clearField()}))}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"findMatchingLocations",value:u.a.mark((function e(t,a,n){var r,s,i,l,o,c,d,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t[0],s=t.slice(1),i=this.boardTable,l=Math.min(i.length,a+n),o=a;case 5:if(!(o<l)){e.next=32;break}if(i[o]!==r){e.next=29;break}if(!(s.length>0)){e.next=27;break}c=Object(h.a)(this.findMatchingLocations(s,o,5e4)),e.prev=9,c.s();case 11:if((d=c.n()).done){e.next=17;break}return m=d.value,e.next=15,[o].concat(Object(y.a)(m));case 15:e.next=11;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(9),c.e(e.t0);case 22:return e.prev=22,c.f(),e.finish(22);case 25:e.next=29;break;case 27:return e.next=29,[o];case 29:o++,e.next=5;break;case 32:case"end":return e.stop()}}),e,this,[[9,19,22,25]])}))},{key:"recomputePotentialMatches",value:function(e){var t=0,a=1e9;if(!e){var n=5e3*this.state.firstBoardStepsThousandsStdDev;a=2*n,(t=1e3*this.state.firstBoardStepsThousands-n)<0&&(a+=t,t=0)}var r=this.makeGameHistoryArguments()[0],s=[];if(r.length>0){var i,l=Object(h.a)(this.findMatchingLocations(r,t,a));try{for(l.s();!(i=l.n()).done;){var o=i.value;s.push(o)}}catch(u){l.e(u)}finally{l.f()}}this.setState({potentialMatches:s})}},{key:"makeGameHistoryArguments",value:function(){var e,t=this,a=this.layoutDrawingBoardRefs.map((function(e){var a,n;return null===(a=t.boardIndices)||void 0===a?void 0:a[null===(n=e.current)||void 0===n?void 0:n.getLayoutString()]})),n=[],r=Object(h.a)(a);try{for(r.s();!(e=r.n()).done;){var s=e.value;if(void 0===s)break;n.push(s)}}catch(m){r.e(m)}finally{r.f()}for(var i=[1e3*Number(this.state.firstBoardStepsThousands)],l=[1e3*Number(this.state.firstBoardStepsThousandsStdDev)],o=0;o<n.length;o++)i.push(1e3*Number(this.state.nextBoardStepsThousands)),l.push(1e3*Number(this.state.nextBoardStepsThousandsStdDev));var u=this.state.timerStepEstimates,c=u[u.length-1];if(n.length>0&&u.length>0&&null!==c){i[i.length-1]=Math.max(0,c);var d=1e3*Number(this.state.timedBoardStepsThousandsStdDev);l[l.length-1]=1===n.length?2*d:.5*d}return[Uint32Array.from(n),Uint32Array.from(i),Float64Array.from(l)]}},{key:"getGridStatistics",value:function(e,t){for(var a=[],n=[],r=0;r<8;r++)for(var s=0;s<8;s++){var i=e[[s,r]];"HIT"===i&&a.push(8*r+s),"MISS"===i&&n.push(8*r+s)}for(var l=-1,o=0,u=["0","1","2","3"];o<u.length;o++){var c=u[o];t!==c&&t!==Number(c)||(l=Number(c))}return{hits:a,misses:n,numericSquidsGotten:l}}},{key:"doComputation",value:function(){var e=Object(f.a)(u.a.mark((function e(t,a){var n,r,s,i,l,o,c,d,m,h,f,p,v,b,g,S,E,k;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Doing computation:",a,t),n=performance.now(),r=this.getGridStatistics(t,a),s=r.hits,i=r.misses,l=r.numericSquidsGotten,e.next=5,V;case 5:if(c=null,this.state.sequenceAware?(c=this.makeGameHistoryArguments(),console.log("gameHistoryArguments:",c),o=_.apply(void 0,[Uint8Array.from(s),Uint8Array.from(i),l].concat(Object(y.a)(c)))):o=O(Uint8Array.from(s),Uint8Array.from(i),l),void 0!==o){for(d=0,m=0,h=-1,f=[],p=0;p<8;p++)for(v=0;v<8;v++)f[[v,p]]=o[8*p+v],u=this.state.cursorBelief,w=[v,p],b=Math.abs(u[0]-w[0])+Math.abs(u[1]-w[1]),g=1-.04*b,S=o[8*p+v]*g,null===t[[v,p]]&&S>h&&(h=S,m=v,d=p);E=o[64],this.setState({probs:f,best:h>0?[m,d]:null,valid:!0,observationProb:E})}else this.setState({valid:!1,best:null});k=performance.now(),this.setState({lastComputationTime:k-n});case 10:case"end":return e.stop()}var u,w}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"copyToUndoBuffer",value:function(){this.setState({undoBuffer:[].concat(Object(y.a)(this.state.undoBuffer),[{grid:this.state.grid,squidsGotten:this.state.squidsGotten,cursorBelief:this.state.cursorBelief}])})}},{key:"onClick",value:function(e,t,a){var n=Object(m.a)({},this.state.grid);switch(this.copyToUndoBuffer(),n[[e,t]]){case"MISS":n[[e,t]]="HIT";break;case"HIT":n[[e,t]]=null;break;default:n[[e,t]]=a?"HIT":"MISS"}this.setState({grid:n,cursorBelief:[e,t]}),this.doComputation(n,this.state.squidsGotten)}},{key:"clearField",value:function(){for(var e=this.makeEmptyState(),t={},a=0,n=["grid","squidsGotten","undoBuffer","cursorBelief"];a<n.length;a++){var r=n[a];t[r]=e[r]}this.state.sequenceAware&&(t.squidsGotten="0"),this.setState(t),this.doComputation(t.grid,t.squidsGotten)}},{key:"undoLastMarking",value:function(){var e=Object(y.a)(this.state.undoBuffer);if(0!==e.length){var t=e.pop();this.setState({grid:t.grid,squidsGotten:t.squidsGotten,cursorBelief:t.cursorBelief,undoBuffer:e}),this.doComputation(t.grid,t.squidsGotten)}}},{key:"reportMiss",value:function(){null!==this.state.best&&null===this.state.grid[this.state.best]&&this.onClick.apply(this,Object(y.a)(this.state.best))}},{key:"reportHit",value:function(){null!==this.state.best&&null===this.state.grid[this.state.best]&&(this.onClick.apply(this,Object(y.a)(this.state.best).concat([!0])),9===this.getGridStatistics(this.state.grid,this.state.squidsGotten).hits.length&&"unknown"!==this.state.squidsGotten&&this.incrementKills())}},{key:"splitTimer",value:function(){var e=this,t=this.timerRef.current,a=Object(y.a)(this.state.timerStepEstimates);if(null!==t){var n=t.getSecondsElapsed();if(!n&&!t.state.invalidated)return void t.toggleRunning();var r=performance.now();a.push(t.state.invalidated?null:t.guessStepsElapsedFromTime(n)),console.log("Timer step estimates:",a),t.setState({previouslyAccumulatedSeconds:0,timerStartMS:r,includesLoadingTheRoom:!1,includedRewardsGotten:0,timerRunning:!0,invalidated:!1})}if(this.copyToHistory()){var s=this.makeEmptyGrid();this.setState({timerStepEstimates:a,undoBuffer:[],cursorBelief:[0,7],grid:s,squidsGotten:"0"},(function(){e.doComputation(s,"0"),e.state.autoRecomputeMatches&&e.recomputePotentialMatches(!1)}))}else this.setState({timerStepEstimates:a},(function(){e.doComputation(e.state.grid,e.state.squidsGotten),e.state.usingTimer&&e.state.autoRecomputeMatches&&e.recomputePotentialMatches(!1)}))}},{key:"incrementKills",value:function(){var e="unknown"===this.state.squidsGotten?0:Number(this.state.squidsGotten);if(this.state.sequenceAware||3!==e){this.copyToUndoBuffer();var t=this.state.grid;e<3&&e++,this.setState({grid:t,squidsGotten:""+e}),this.doComputation(t,""+e)}}},{key:"copyToHistory",value:function(e){if(this.state.sequenceAware){var t=this.getGridStatistics(this.state.grid,this.state.squidsGotten),a=t.hits,n=t.misses,r=t.numericSquidsGotten;void 0===e&&(e=this.makeGameHistoryArguments());var s=j.apply(void 0,[Uint8Array.from(a),Uint8Array.from(n),r].concat(Object(y.a)(e)));if(void 0===s)return!1;console.log("Final board:",s);var i=this.boardIndexToLayoutString[s],l=e[0].length;return l===this.layoutDrawingBoardRefs.length&&(this.shiftHistory(),l--),this.layoutDrawingBoardRefs[l].current.setStateFromLayoutString(i),!0}}},{key:"shiftHistory",value:function(){for(var e=this.layoutDrawingBoardRefs.map((function(e){return e.current})),t=0;t<e.length-1;t++)e[t].setState(e[t+1].state);e[e.length-1].clearBoard()}},{key:"clearHistory",value:function(){var e,t=Object(h.a)(this.layoutDrawingBoardRefs);try{for(t.s();!(e=t.n()).done;){e.value.current.clearBoard()}}catch(a){t.e(a)}finally{t.f()}}},{key:"renderActualMap",value:function(){var e=this;return s.a.createElement("div",{className:"board"},J(8).map((function(t){return J(8).map((function(a){return s.a.createElement(Z,{key:a+","+t,x:a,y:t,onClick:function(){return e.onClick(a,t)},text:e.state.grid[[a,t]],prob:e.state.probs[[a,t]],valid:e.state.valid,best:e.state.best,precision:2})}))})))}},{key:"render",value:function(){for(var e,t,a,n,r,i=this,l=0,o=!0,u=0;u<8;u++)for(var c=0;c<8;c++)null!==this.state.grid[[c,u]]&&(l++,"HIT"===this.state.grid[[c,u]]&&(o=!1));var d=this.state.timerStepEstimates.length?this.state.timerStepEstimates.map((function(e){return null!==e&&void 0!==e?e:"("+1e3*i.state.nextBoardStepsThousands+")"})).join(", "):"-",m=Number(null!==(e=null===(t=this.state.largestLocalTableSize)||void 0===t||null===(a=t.replace(/k/i,"000"))||void 0===a?void 0:a.replace(/M/i,"000000"))&&void 0!==e?e:0),h="You have a larger table available locally. Are you sure you want to switch tables?";return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{style:{placeSelf:"start end"}},s.a.createElement("div",{id:"infoArea"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Item"),s.a.createElement("th",null,"Value"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Shots used:"),s.a.createElement("td",null,l)),!0===this.state.sequenceAware&&this.state.usingTimer&&s.a.createElement(s.a.Fragment,null,s.a.createElement(se,{ref:this.timerRef,roomEnteredOffset:this.state.roomEnteredOffset,timedTickIntercept:this.state.timedTickIntercept,timedTickRate:this.state.timedTickRate}),s.a.createElement("tr",null,s.a.createElement("td",null,"Previous steps:"),s.a.createElement("td",null,d))))),!0===this.state.sequenceAware&&this.state.usingTimer&&this.state.showKeyShortcuts&&s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Control"),s.a.createElement("th",null,"Shortcut"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Add Reward"),s.a.createElement("td",null,",")),s.a.createElement("tr",null,s.a.createElement("td",null,"Remove Reward"),s.a.createElement("td",null,"Shift+,")),s.a.createElement("tr",null,s.a.createElement("td",null,"Invalidate Timer"),s.a.createElement("td",null,";")),s.a.createElement("tr",null,s.a.createElement("td",null,"Reset Timer"),s.a.createElement("td",null,"Shift+;")),s.a.createElement("tr",null,s.a.createElement("td",null,"Pause/Resume Timer"),s.a.createElement("td",null,"w")),s.a.createElement("tr",null,s.a.createElement("td",null,"Undo"),s.a.createElement("td",null,"Ctrl+z or Shift+z"))))),!0===this.state.sequenceAware&&this.state.usingTimer&&s.a.createElement("div",{className:"controls"},s.a.createElement("button",{onClick:function(){i.setState({showKeyShortcuts:!i.state.showKeyShortcuts})}},"Toggle Show Shortcuts"))),this.renderActualMap()),!this.state.valid&&!this.state.sequenceAware&&s.a.createElement("div",null,"Invalid configuration! This is not possible."),s.a.createElement("div",{className:"controls",style:{marginTop:"5px"}},"Number of squids killed:",s.a.createElement("select",{value:this.state.squidsGotten,onChange:function(e){i.setState({squidsGotten:e.target.value}),i.doComputation(i.state.grid,e.target.value)}},!this.state.sequenceAware&&s.a.createElement("option",{value:"unknown"},"Unknown"),s.a.createElement("option",{value:"0"},"0"),s.a.createElement("option",{value:"1"},"1"),s.a.createElement("option",{value:"2"},"2"),s.a.createElement("option",{value:"3"},"3"))),s.a.createElement("div",{className:"controls"},s.a.createElement("button",{onClick:function(){i.reportMiss()}},"Miss (z)"),s.a.createElement("button",{onClick:function(){i.reportHit()}},"Hit (x)"),s.a.createElement("button",{onClick:function(){i.incrementKills()}},"Increment Kills (v)"),!0===this.state.sequenceAware&&s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{onClick:function(){i.splitTimer()}},this.state.usingTimer?s.a.createElement(s.a.Fragment,null,"Start/Split Timer "):s.a.createElement(s.a.Fragment,null,"Move to History "),"(Space)"),s.a.createElement("button",{onClick:function(){i.clearHistory()}},"Reset History")),s.a.createElement("button",{onClick:function(){i.clearField()}},"Reset Board"),!0===this.state.sequenceAware&&s.a.createElement("button",{onClick:function(){i.clearHistory(),null!==i.timerRef.current&&i.timerRef.current.resetTimer(),i.clearField(),i.setState({potentialMatches:null})}},"Reset Everything")),o&&!this.state.sequenceAware&&s.a.createElement("p",null,"Opening optimizer: Probability that this",s.a.createElement("br",null),"pattern would get at least one hit: ",this.state.valid?K(Math.max(0,1-this.state.observationProb),2):"Invalid"),"initializing"===this.state.sequenceAware&&s.a.createElement("p",null,"Loading table..."),!0===this.state.sequenceAware&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,this.layoutDrawingBoardRefs.map((function(e,t){return s.a.createElement(ne,{parent:i,ref:e,key:t})}))),s.a.createElement("hr",null),s.a.createElement("fieldset",{id:"settings",className:this.state.showAdvancedSettings||!this.state.usingTimer?"":"simple"},s.a.createElement("legend",null,"Gaussian RNG step count beliefs (all counts in ",s.a.createElement("i",null,"thousands")," of steps",this.state.usingTimer&&this.state.showAdvancedSettings&&s.a.createElement(s.a.Fragment,null,', except "Timed board intercept", "Timed board rate", and "Room entered offset"'),")"),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"firstBoardMean"},"First board mean:"),s.a.createElement("input",{id:"firstBoardMean",value:this.state.firstBoardStepsThousands,onChange:function(e){return i.setState({firstBoardStepsThousands:e.target.value})}}),s.a.createElement("label",{htmlFor:"firstBoardStddev"},"First board stddev:"),s.a.createElement("input",{id:"firstBoardStddev",value:this.state.firstBoardStepsThousandsStdDev,onChange:function(e){return i.setState({firstBoardStepsThousandsStdDev:e.target.value})}}),(!this.state.usingTimer||this.state.showAdvancedSettings)&&s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"nextBoardMean"},this.state.usingTimer?s.a.createElement(s.a.Fragment,null,"Fallback mean:"):s.a.createElement(s.a.Fragment,null,"Next board mean:")),s.a.createElement("input",{id:"nextBoardMean",value:this.state.nextBoardStepsThousands,onChange:function(e){return i.setState({nextBoardStepsThousands:e.target.value})}}),s.a.createElement("label",{htmlFor:"nextBoardStddev"},this.state.usingTimer?s.a.createElement(s.a.Fragment,null,"Fallback stddev:"):s.a.createElement(s.a.Fragment,null,"Next board stddev:")),s.a.createElement("input",{id:"nextBoardStddev",value:this.state.nextBoardStepsThousandsStdDev,onChange:function(e){return i.setState({nextBoardStepsThousandsStdDev:e.target.value})}})),this.state.usingTimer&&s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"timedBoardStddev"},"Timed board stddev:"),s.a.createElement("input",{id:"timedBoardStddev",value:this.state.timedBoardStepsThousandsStdDev,onChange:function(e){return i.setState({timedBoardStepsThousandsStdDev:e.target.value})}}),this.state.showAdvancedSettings&&s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"timedBoardIntercept"},"Timed board intercept:"),s.a.createElement("input",{id:"timedBoardIntercept",value:this.state.timedTickIntercept,onChange:function(e){return i.setState({timedTickIntercept:e.target.value})}}),s.a.createElement("label",{htmlFor:"timedBoardRate"},"Timed board rate:"),s.a.createElement("input",{id:"timedBoardRate",value:this.state.timedTickRate,onChange:function(e){return i.setState({timedTickRate:e.target.value})}}),s.a.createElement("label",{htmlFor:"roomEnteredOffset"},"Room entered offset:"),s.a.createElement("input",{id:"roomEnteredOffset",value:this.state.roomEnteredOffset,onChange:function(e){return i.setState({roomEnteredOffset:e.target.value})}}))))),s.a.createElement("div",{className:"controls"},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:this.state.usingTimer,onChange:function(e){return i.setState({usingTimer:!i.state.usingTimer})}}),"Use timer"),s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:this.state.autoRecomputeMatches,onChange:function(e){return i.setState({autoRecomputeMatches:!i.state.autoRecomputeMatches})}}),"Automatically find nearby matches"),s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",disabled:!this.state.usingTimer,checked:this.state.showAdvancedSettings,onChange:function(e){return i.setState({showAdvancedSettings:!i.state.showAdvancedSettings})}}),"Show advanced settings")),s.a.createElement("div",{className:"controls"},s.a.createElement("button",{onClick:function(){i.saveConfigParams()}},"Save Settings"),s.a.createElement("button",{onClick:function(){i.factoryResetConfigParams()}},"Reset to Defaults")),s.a.createElement("div",{style:{margin:"5px",border:"2px solid white",borderRadius:"8px",width:"400px",minHeight:"20px",display:"inline-block"}},0===(null===(n=this.state.potentialMatches)||void 0===n?void 0:n.length)?s.a.createElement("div",null,"No Matches Found!"):null===(r=this.state.potentialMatches)||void 0===r?void 0:r.map((function(e,t){var a=e.slice(1);return s.a.createElement("div",{key:t},"Potential match: ",e[0],a.map((function(t,a){return s.a.createElement(s.a.Fragment,null," +",t-e[a])})))}))),s.a.createElement("div",{className:"controls"},s.a.createElement("button",{onClick:function(){i.recomputePotentialMatches(!0)}},"Find Match Indices"))),!this.state.sequenceAware&&s.a.createElement("fieldset",{id:"sequenceConfig"},s.a.createElement("legend",null,"Sequence-Aware Mode"),s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"tableSize",value:"500k",onChange:function(){(m<=5e5||window.confirm(h))&&i.setState({tableSize:"500k"})},checked:"500k"===this.state.tableSize}),"Small table (500 thousand values,",m>=5e5?s.a.createElement(s.a.Fragment,null," local"):s.a.createElement(s.a.Fragment,null," 2 MB"),")")),s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"tableSize",value:"5M",onChange:function(){(m<=5e6||window.confirm(h))&&i.setState({tableSize:"5M"})},checked:"5M"===this.state.tableSize}),"Medium table (5 million values,",m>=5e6?s.a.createElement(s.a.Fragment,null," local"):s.a.createElement(s.a.Fragment,null," 20 MB"),")")),s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"tableSize",value:"25M",onChange:function(){(m<=25e6||window.confirm(h))&&i.setState({tableSize:"25M"})},checked:"25M"===this.state.tableSize}),"Large table (25 million values,",m>=25e6?s.a.createElement(s.a.Fragment,null," local"):s.a.createElement(s.a.Fragment,null," 100 MB"),")")),s.a.createElement("button",{onClick:function(){i.loadSequenceTable()}},"Initialize")),s.a.createElement("p",null,"Last recompute time:\xa0",this.state.lastComputationTime.toFixed(2),"ms"))}}]),a}(s.a.Component);document.addEventListener("keydown",(function(e){var t=""!==e.code?e.code:e.key;if(null!==X){if("KeyZ"===t||"z"===t)if(e.ctrlKey){var a;"INPUT"!==(null===(a=e.target)||void 0===a?void 0:a.tagName)&&(e.preventDefault(),X.undoLastMarking())}else e.shiftKey?X.undoLastMarking():X.reportMiss();"KeyX"!==t&&"x"!==t||X.reportHit(),"KeyV"!==t&&"v"!==t||X.incrementKills(),"Space"!==t&&" "!==t||(X.splitTimer(),e.preventDefault())}null!==re&&("KeyW"!==t&&"w"!==t||re.toggleRunning(),"Comma"!==t&&","!==t||(e.shiftKey?re.adjustRewards(-1):re.adjustRewards(1)),"Semicolon"!==t&&";"!==t||(e.shiftKey?re.resetTimer():re.toggleInvalidated()))}));var oe=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Sploosh Kaboom Probability Calculator"),s.a.createElement("p",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"This is a tool for computing the likely locations of squids in the sploosh kaboom minigame of The Legend of Zelda: The Wind Waker (both SD and HD versions). Tutorials for it should be available Soon\u2122. For now, see the ",s.a.createElement("a",{href:"https://github.com/Amphitryon0/web-sploosh-kaboom"},"GitHub repository"),"."),s.a.createElement(le,null),s.a.createElement("p",null,"Made by Peter Schmidt-Nielsen, CryZe, csunday95, and Amphitryon (","v0.1.0-beta.14",")"))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.1e096688.chunk.js.map