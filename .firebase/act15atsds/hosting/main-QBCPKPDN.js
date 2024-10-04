var rg=Object.defineProperty,og=Object.defineProperties;var sg=Object.getOwnPropertyDescriptors;var ju=Object.getOwnPropertySymbols;var ag=Object.prototype.hasOwnProperty,lg=Object.prototype.propertyIsEnumerable;var Bu=(e,n,t)=>n in e?rg(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,A=(e,n)=>{for(var t in n||={})ag.call(n,t)&&Bu(e,t,n[t]);if(ju)for(var t of ju(n))lg.call(n,t)&&Bu(e,t,n[t]);return e},J=(e,n)=>og(e,sg(n));function Wu(e,n){return Object.is(e,n)}var ge=null,hr=!1,mr=1,ct=Symbol("SIGNAL");function ee(e){let n=ge;return ge=e,n}function Uu(){return ge}var hi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Da(e){if(hr)throw new Error("");if(ge===null)return;ge.consumerOnSignalRead(e);let n=ge.nextProducerIndex++;if(Cr(ge),n<ge.producerNode.length&&ge.producerNode[n]!==e&&fi(ge)){let t=ge.producerNode[n];vr(t,ge.producerIndexOfThis[n])}ge.producerNode[n]!==e&&(ge.producerNode[n]=e,ge.producerIndexOfThis[n]=fi(ge)?Gu(e,ge,n):0),ge.producerLastReadVersion[n]=e.version}function cg(){mr++}function Hu(e){if(!(fi(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===mr)){if(!e.producerMustRecompute(e)&&!Sa(e)){e.dirty=!1,e.lastCleanEpoch=mr;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=mr}}function zu(e){if(e.liveConsumerNode===void 0)return;let n=hr;hr=!0;try{for(let t of e.liveConsumerNode)t.dirty||ug(t)}finally{hr=n}}function $u(){return ge?.consumerAllowSignalWrites!==!1}function ug(e){e.dirty=!0,zu(e),e.consumerMarkedDirty?.(e)}function yr(e){return e&&(e.nextProducerIndex=0),ee(e)}function Ea(e,n){if(ee(n),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(fi(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)vr(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function Sa(e){Cr(e);for(let n=0;n<e.producerNode.length;n++){let t=e.producerNode[n],i=e.producerLastReadVersion[n];if(i!==t.version||(Hu(t),i!==t.version))return!0}return!1}function xa(e){if(Cr(e),fi(e))for(let n=0;n<e.producerNode.length;n++)vr(e.producerNode[n],e.producerIndexOfThis[n]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function Gu(e,n,t){if(qu(e),e.liveConsumerNode.length===0&&Zu(e))for(let i=0;i<e.producerNode.length;i++)e.producerIndexOfThis[i]=Gu(e.producerNode[i],e,i);return e.liveConsumerIndexOfThis.push(t),e.liveConsumerNode.push(n)-1}function vr(e,n){if(qu(e),e.liveConsumerNode.length===1&&Zu(e))for(let i=0;i<e.producerNode.length;i++)vr(e.producerNode[i],e.producerIndexOfThis[i]);let t=e.liveConsumerNode.length-1;if(e.liveConsumerNode[n]=e.liveConsumerNode[t],e.liveConsumerIndexOfThis[n]=e.liveConsumerIndexOfThis[t],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,n<e.liveConsumerNode.length){let i=e.liveConsumerIndexOfThis[n],o=e.liveConsumerNode[n];Cr(o),o.producerIndexOfThis[i]=n}}function fi(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function Cr(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function qu(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function Zu(e){return e.producerNode!==void 0}function Yu(e){let n=Object.create(dg);n.computation=e;let t=()=>{if(Hu(n),Da(n),n.value===gr)throw n.error;return n.value};return t[ct]=n,t}var Ma=Symbol("UNSET"),wa=Symbol("COMPUTING"),gr=Symbol("ERRORED"),dg=J(A({},hi),{value:Ma,dirty:!0,error:null,equal:Wu,producerMustRecompute(e){return e.value===Ma||e.value===wa},producerRecomputeValue(e){if(e.value===wa)throw new Error("Detected cycle in computations.");let n=e.value;e.value=wa;let t=yr(e),i;try{i=e.computation()}catch(o){i=gr,e.error=o}finally{Ea(e,t)}if(n!==Ma&&n!==gr&&i!==gr&&e.equal(n,i)){e.value=n;return}e.value=i,e.version++}});function pg(){throw new Error}var Qu=pg;function Ku(){Qu()}function Ju(e){Qu=e}var fg=null;function Xu(e){let n=Object.create(td);n.value=e;let t=()=>(Da(n),n.value);return t[ct]=n,t}function Ia(e,n){$u()||Ku(),e.equal(e.value,n)||(e.value=n,hg(e))}function ed(e,n){$u()||Ku(),Ia(e,n(e.value))}var td=J(A({},hi),{equal:Wu,value:void 0});function hg(e){e.version++,cg(),zu(e),fg?.()}function z(e){return typeof e=="function"}function mn(e){let t=e(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var br=mn(e=>function(t){e(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,o)=>`${o+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function mi(e,n){if(e){let t=e.indexOf(n);0<=t&&e.splice(t,1)}}var pe=class e{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let r of t)r.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(z(i))try{i()}catch(r){n=r instanceof br?r.errors:[r]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let r of o)try{nd(r)}catch(l){n=n??[],l instanceof br?n=[...n,...l.errors]:n.push(l)}}if(n)throw new br(n)}}add(n){var t;if(n&&n!==this)if(this.closed)nd(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}}_hasParent(n){let{_parentage:t}=this;return t===n||Array.isArray(t)&&t.includes(n)}_addParent(n){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n}_removeParent(n){let{_parentage:t}=this;t===n?this._parentage=null:Array.isArray(t)&&mi(t,n)}remove(n){let{_finalizers:t}=this;t&&mi(t,n),n instanceof e&&n._removeParent(this)}};pe.EMPTY=(()=>{let e=new pe;return e.closed=!0,e})();var Ta=pe.EMPTY;function _r(e){return e instanceof pe||e&&"closed"in e&&z(e.remove)&&z(e.add)&&z(e.unsubscribe)}function nd(e){z(e)?e():e.unsubscribe()}var Ze={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var gn={setTimeout(e,n,...t){let{delegate:i}=gn;return i?.setTimeout?i.setTimeout(e,n,...t):setTimeout(e,n,...t)},clearTimeout(e){let{delegate:n}=gn;return(n?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Mr(e){gn.setTimeout(()=>{let{onUnhandledError:n}=Ze;if(n)n(e);else throw e})}function gi(){}var id=Pa("C",void 0,void 0);function rd(e){return Pa("E",void 0,e)}function od(e){return Pa("N",e,void 0)}function Pa(e,n,t){return{kind:e,value:n,error:t}}var Ht=null;function yn(e){if(Ze.useDeprecatedSynchronousErrorHandling){let n=!Ht;if(n&&(Ht={errorThrown:!1,error:null}),e(),n){let{errorThrown:t,error:i}=Ht;if(Ht=null,t)throw i}}else e()}function sd(e){Ze.useDeprecatedSynchronousErrorHandling&&Ht&&(Ht.errorThrown=!0,Ht.error=e)}var zt=class extends pe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,_r(n)&&n.add(this)):this.destination=yg}static create(n,t,i){return new vn(n,t,i)}next(n){this.isStopped?Na(od(n),this):this._next(n)}error(n){this.isStopped?Na(rd(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Na(id,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},mg=Function.prototype.bind;function Oa(e,n){return mg.call(e,n)}var Aa=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:t}=this;if(t.next)try{t.next(n)}catch(i){wr(i)}}error(n){let{partialObserver:t}=this;if(t.error)try{t.error(n)}catch(i){wr(i)}else wr(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(t){wr(t)}}},vn=class extends zt{constructor(n,t,i){super();let o;if(z(n)||!n)o={next:n??void 0,error:t??void 0,complete:i??void 0};else{let r;this&&Ze.useDeprecatedNextContext?(r=Object.create(n),r.unsubscribe=()=>this.unsubscribe(),o={next:n.next&&Oa(n.next,r),error:n.error&&Oa(n.error,r),complete:n.complete&&Oa(n.complete,r)}):o=n}this.destination=new Aa(o)}};function wr(e){Ze.useDeprecatedSynchronousErrorHandling?sd(e):Mr(e)}function gg(e){throw e}function Na(e,n){let{onStoppedNotification:t}=Ze;t&&gn.setTimeout(()=>t(e,n))}var yg={closed:!0,next:gi,error:gg,complete:gi};var Cn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ae(e){return e}function La(...e){return Fa(e)}function Fa(e){return e.length===0?Ae:e.length===1?e[0]:function(t){return e.reduce((i,o)=>o(i),t)}}var re=(()=>{class e{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new e;return i.source=this,i.operator=t,i}subscribe(t,i,o){let r=Cg(t)?t:new vn(t,i,o);return yn(()=>{let{operator:l,source:u}=this;r.add(l?l.call(r,u):u?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=ad(i),new i((o,r)=>{let l=new vn({next:u=>{try{t(u)}catch(d){r(d),l.unsubscribe()}},error:r,complete:o});this.subscribe(l)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Cn](){return this}pipe(...t){return Fa(t)(this)}toPromise(t){return t=ad(t),new t((i,o)=>{let r;this.subscribe(l=>r=l,l=>o(l),()=>i(r))})}}return e.create=n=>new e(n),e})();function ad(e){var n;return(n=e??Ze.Promise)!==null&&n!==void 0?n:Promise}function vg(e){return e&&z(e.next)&&z(e.error)&&z(e.complete)}function Cg(e){return e&&e instanceof zt||vg(e)&&_r(e)}function Ra(e){return z(e?.lift)}function X(e){return n=>{if(Ra(n))return n.lift(function(t){try{return e(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Q(e,n,t,i,o){return new ka(e,n,t,i,o)}var ka=class extends zt{constructor(n,t,i,o,r,l){super(n),this.onFinalize=r,this.shouldUnsubscribe=l,this._next=t?function(u){try{t(u)}catch(d){n.error(d)}}:super._next,this._error=o?function(u){try{o(u)}catch(d){n.error(d)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};function bn(){return X((e,n)=>{let t=null;e._refCount++;let i=Q(n,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){t=null;return}let o=e._connection,r=t;t=null,o&&(!r||o===r)&&o.unsubscribe(),n.unsubscribe()});e.subscribe(i),i.closed||(t=e.connect())})}var _n=class extends re{constructor(n,t){super(),this.source=n,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Ra(n)&&(this.lift=n.lift)}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){let n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:n}=this;this._subject=this._connection=null,n?.unsubscribe()}connect(){let n=this._connection;if(!n){n=this._connection=new pe;let t=this.getSubject();n.add(this.source.subscribe(Q(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),n.closed&&(this._connection=null,n=pe.EMPTY)}return n}refCount(){return bn()(this)}};var ld=mn(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var be=(()=>{class e extends re{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Dr(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new ld}next(t){yn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){yn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){yn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:o,observers:r}=this;return i||o?Ta:(this.currentObservers=null,r.push(t),new pe(()=>{this.currentObservers=null,mi(r,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:o,isStopped:r}=this;i?t.error(o):r&&t.complete()}asObservable(){let t=new re;return t.source=this,t}}return e.create=(n,t)=>new Dr(n,t),e})(),Dr=class extends be{constructor(n,t){super(),this.destination=n,this.source=t}next(n){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,n)}error(n){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,n)}complete(){var n,t;(t=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||t===void 0||t.call(n)}_subscribe(n){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(n))!==null&&i!==void 0?i:Ta}};var _e=class extends be{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let t=super._subscribe(n);return!t.closed&&n.next(this._value),t}getValue(){let{hasError:n,thrownError:t,_value:i}=this;if(n)throw t;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Le=new re(e=>e.complete());function cd(e){return e&&z(e.schedule)}function ud(e){return e[e.length-1]}function Er(e){return z(ud(e))?e.pop():void 0}function St(e){return cd(ud(e))?e.pop():void 0}function pd(e,n,t,i){function o(r){return r instanceof t?r:new t(function(l){l(r)})}return new(t||(t=Promise))(function(r,l){function u(v){try{f(i.next(v))}catch(C){l(C)}}function d(v){try{f(i.throw(v))}catch(C){l(C)}}function f(v){v.done?r(v.value):o(v.value).then(u,d)}f((i=i.apply(e,n||[])).next())})}function dd(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],i=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function $t(e){return this instanceof $t?(this.v=e,this):new $t(e)}function fd(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(e,n||[]),o,r=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",l),o[Symbol.asyncIterator]=function(){return this},o;function l(b){return function(L){return Promise.resolve(L).then(b,C)}}function u(b,L){i[b]&&(o[b]=function(Z){return new Promise(function(ie,ne){r.push([b,Z,ie,ne])>1||d(b,Z)})},L&&(o[b]=L(o[b])))}function d(b,L){try{f(i[b](L))}catch(Z){O(r[0][3],Z)}}function f(b){b.value instanceof $t?Promise.resolve(b.value.v).then(v,C):O(r[0][2],b)}function v(b){d("next",b)}function C(b){d("throw",b)}function O(b,L){b(L),r.shift(),r.length&&d(r[0][0],r[0][1])}}function hd(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof dd=="function"?dd(e):e[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(r){t[r]=e[r]&&function(l){return new Promise(function(u,d){l=e[r](l),o(u,d,l.done,l.value)})}}function o(r,l,u,d){Promise.resolve(d).then(function(f){r({value:f,done:u})},l)}}var Sr=e=>e&&typeof e.length=="number"&&typeof e!="function";function xr(e){return z(e?.then)}function Ir(e){return z(e[Cn])}function Tr(e){return Symbol.asyncIterator&&z(e?.[Symbol.asyncIterator])}function Pr(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function bg(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Or=bg();function Nr(e){return z(e?.[Or])}function Ar(e){return fd(this,arguments,function*(){let t=e.getReader();try{for(;;){let{value:i,done:o}=yield $t(t.read());if(o)return yield $t(void 0);yield yield $t(i)}}finally{t.releaseLock()}})}function Lr(e){return z(e?.getReader)}function fe(e){if(e instanceof re)return e;if(e!=null){if(Ir(e))return _g(e);if(Sr(e))return Mg(e);if(xr(e))return wg(e);if(Tr(e))return md(e);if(Nr(e))return Dg(e);if(Lr(e))return Eg(e)}throw Pr(e)}function _g(e){return new re(n=>{let t=e[Cn]();if(z(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Mg(e){return new re(n=>{for(let t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function wg(e){return new re(n=>{e.then(t=>{n.closed||(n.next(t),n.complete())},t=>n.error(t)).then(null,Mr)})}function Dg(e){return new re(n=>{for(let t of e)if(n.next(t),n.closed)return;n.complete()})}function md(e){return new re(n=>{Sg(e,n).catch(t=>n.error(t))})}function Eg(e){return md(Ar(e))}function Sg(e,n){var t,i,o,r;return pd(this,void 0,void 0,function*(){try{for(t=hd(e);i=yield t.next(),!i.done;){let l=i.value;if(n.next(l),n.closed)return}}catch(l){o={error:l}}finally{try{i&&!i.done&&(r=t.return)&&(yield r.call(t))}finally{if(o)throw o.error}}n.complete()})}function Ie(e,n,t,i=0,o=!1){let r=n.schedule(function(){t(),o?e.add(this.schedule(null,i)):this.unsubscribe()},i);if(e.add(r),!o)return r}function Fr(e,n=0){return X((t,i)=>{t.subscribe(Q(i,o=>Ie(i,e,()=>i.next(o),n),()=>Ie(i,e,()=>i.complete(),n),o=>Ie(i,e,()=>i.error(o),n)))})}function Rr(e,n=0){return X((t,i)=>{i.add(e.schedule(()=>t.subscribe(i),n))})}function gd(e,n){return fe(e).pipe(Rr(n),Fr(n))}function yd(e,n){return fe(e).pipe(Rr(n),Fr(n))}function vd(e,n){return new re(t=>{let i=0;return n.schedule(function(){i===e.length?t.complete():(t.next(e[i++]),t.closed||this.schedule())})})}function Cd(e,n){return new re(t=>{let i;return Ie(t,n,()=>{i=e[Or](),Ie(t,n,()=>{let o,r;try{({value:o,done:r}=i.next())}catch(l){t.error(l);return}r?t.complete():t.next(o)},0,!0)}),()=>z(i?.return)&&i.return()})}function kr(e,n){if(!e)throw new Error("Iterable cannot be null");return new re(t=>{Ie(t,n,()=>{let i=e[Symbol.asyncIterator]();Ie(t,n,()=>{i.next().then(o=>{o.done?t.complete():t.next(o.value)})},0,!0)})})}function bd(e,n){return kr(Ar(e),n)}function _d(e,n){if(e!=null){if(Ir(e))return gd(e,n);if(Sr(e))return vd(e,n);if(xr(e))return yd(e,n);if(Tr(e))return kr(e,n);if(Nr(e))return Cd(e,n);if(Lr(e))return bd(e,n)}throw Pr(e)}function ce(e,n){return n?_d(e,n):fe(e)}function U(...e){let n=St(e);return ce(e,n)}function Mn(e,n){let t=z(e)?e:()=>e,i=o=>o.error(t());return new re(n?o=>n.schedule(i,0,o):i)}function Va(e){return!!e&&(e instanceof re||z(e.lift)&&z(e.subscribe))}var ut=mn(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function Y(e,n){return X((t,i)=>{let o=0;t.subscribe(Q(i,r=>{i.next(e.call(n,r,o++))}))})}var{isArray:xg}=Array;function Ig(e,n){return xg(n)?e(...n):e(n)}function Vr(e){return Y(n=>Ig(e,n))}var{isArray:Tg}=Array,{getPrototypeOf:Pg,prototype:Og,keys:Ng}=Object;function jr(e){if(e.length===1){let n=e[0];if(Tg(n))return{args:n,keys:null};if(Ag(n)){let t=Ng(n);return{args:t.map(i=>n[i]),keys:t}}}return{args:e,keys:null}}function Ag(e){return e&&typeof e=="object"&&Pg(e)===Og}function Br(e,n){return e.reduce((t,i,o)=>(t[i]=n[o],t),{})}function yi(...e){let n=St(e),t=Er(e),{args:i,keys:o}=jr(e);if(i.length===0)return ce([],n);let r=new re(Lg(i,n,o?l=>Br(o,l):Ae));return t?r.pipe(Vr(t)):r}function Lg(e,n,t=Ae){return i=>{Md(n,()=>{let{length:o}=e,r=new Array(o),l=o,u=o;for(let d=0;d<o;d++)Md(n,()=>{let f=ce(e[d],n),v=!1;f.subscribe(Q(i,C=>{r[d]=C,v||(v=!0,u--),u||i.next(t(r.slice()))},()=>{--l||i.complete()}))},i)},i)}}function Md(e,n,t){e?Ie(t,e,n):n()}function wd(e,n,t,i,o,r,l,u){let d=[],f=0,v=0,C=!1,O=()=>{C&&!d.length&&!f&&n.complete()},b=Z=>f<i?L(Z):d.push(Z),L=Z=>{r&&n.next(Z),f++;let ie=!1;fe(t(Z,v++)).subscribe(Q(n,ne=>{o?.(ne),r?b(ne):n.next(ne)},()=>{ie=!0},void 0,()=>{if(ie)try{for(f--;d.length&&f<i;){let ne=d.shift();l?Ie(n,l,()=>L(ne)):L(ne)}O()}catch(ne){n.error(ne)}}))};return e.subscribe(Q(n,b,()=>{C=!0,O()})),()=>{u?.()}}function he(e,n,t=1/0){return z(n)?he((i,o)=>Y((r,l)=>n(i,r,o,l))(fe(e(i,o))),t):(typeof n=="number"&&(t=n),X((i,o)=>wd(i,o,e,t)))}function wn(e=1/0){return he(Ae,e)}function Dd(){return wn(1)}function Dn(...e){return Dd()(ce(e,St(e)))}function Wr(e){return new re(n=>{fe(e()).subscribe(n)})}function ja(...e){let n=Er(e),{args:t,keys:i}=jr(e),o=new re(r=>{let{length:l}=t;if(!l){r.complete();return}let u=new Array(l),d=l,f=l;for(let v=0;v<l;v++){let C=!1;fe(t[v]).subscribe(Q(r,O=>{C||(C=!0,f--),u[v]=O},()=>d--,void 0,()=>{(!d||!C)&&(f||r.next(i?Br(i,u):u),r.complete())}))}});return n?o.pipe(Vr(n)):o}function je(e,n){return X((t,i)=>{let o=0;t.subscribe(Q(i,r=>e.call(n,r,o++)&&i.next(r)))})}function xt(e){return X((n,t)=>{let i=null,o=!1,r;i=n.subscribe(Q(t,void 0,void 0,l=>{r=fe(e(l,xt(e)(n))),i?(i.unsubscribe(),i=null,r.subscribe(t)):o=!0})),o&&(i.unsubscribe(),i=null,r.subscribe(t))})}function Ed(e,n,t,i,o){return(r,l)=>{let u=t,d=n,f=0;r.subscribe(Q(l,v=>{let C=f++;d=u?e(d,v,C):(u=!0,v),i&&l.next(d)},o&&(()=>{u&&l.next(d),l.complete()})))}}function Gt(e,n){return z(n)?he(e,n,1):he(e,1)}function It(e){return X((n,t)=>{let i=!1;n.subscribe(Q(t,o=>{i=!0,t.next(o)},()=>{i||t.next(e),t.complete()}))})}function dt(e){return e<=0?()=>Le:X((n,t)=>{let i=0;n.subscribe(Q(t,o=>{++i<=e&&(t.next(o),e<=i&&t.complete())}))})}function Ba(e){return Y(()=>e)}function Ur(e=Fg){return X((n,t)=>{let i=!1;n.subscribe(Q(t,o=>{i=!0,t.next(o)},()=>i?t.complete():t.error(e())))})}function Fg(){return new ut}function vi(e){return X((n,t)=>{try{n.subscribe(t)}finally{t.add(e)}})}function et(e,n){let t=arguments.length>=2;return i=>i.pipe(e?je((o,r)=>e(o,r,i)):Ae,dt(1),t?It(n):Ur(()=>new ut))}function En(e){return e<=0?()=>Le:X((n,t)=>{let i=[];n.subscribe(Q(t,o=>{i.push(o),e<i.length&&i.shift()},()=>{for(let o of i)t.next(o);t.complete()},void 0,()=>{i=null}))})}function Wa(e,n){let t=arguments.length>=2;return i=>i.pipe(e?je((o,r)=>e(o,r,i)):Ae,En(1),t?It(n):Ur(()=>new ut))}function Ua(e,n){return X(Ed(e,n,arguments.length>=2,!0))}function Ha(...e){let n=St(e);return X((t,i)=>{(n?Dn(e,t,n):Dn(e,t)).subscribe(i)})}function Be(e,n){return X((t,i)=>{let o=null,r=0,l=!1,u=()=>l&&!o&&i.complete();t.subscribe(Q(i,d=>{o?.unsubscribe();let f=0,v=r++;fe(e(d,v)).subscribe(o=Q(i,C=>i.next(n?n(d,C,v,f++):C),()=>{o=null,u()}))},()=>{l=!0,u()}))})}function za(e){return X((n,t)=>{fe(e).subscribe(Q(t,()=>t.complete(),gi)),!t.closed&&n.subscribe(t)})}function Me(e,n,t){let i=z(e)||n||t?{next:e,error:n,complete:t}:e;return i?X((o,r)=>{var l;(l=i.subscribe)===null||l===void 0||l.call(i);let u=!0;o.subscribe(Q(r,d=>{var f;(f=i.next)===null||f===void 0||f.call(i,d),r.next(d)},()=>{var d;u=!1,(d=i.complete)===null||d===void 0||d.call(i),r.complete()},d=>{var f;u=!1,(f=i.error)===null||f===void 0||f.call(i,d),r.error(d)},()=>{var d,f;u&&((d=i.unsubscribe)===null||d===void 0||d.call(i)),(f=i.finalize)===null||f===void 0||f.call(i)}))}):Ae}var Rg="https://g.co/ng/security#xss",R=class extends Error{constructor(n,t){super(Zl(n,t)),this.code=n}};function Zl(e,n){return`${`NG0${Math.abs(e)}`}${n?": "+n:""}`}function xi(e){return{toString:e}.toString()}var Hr="__parameters__";function kg(e){return function(...t){if(e){let i=e(...t);for(let o in i)this[o]=i[o]}}}function up(e,n,t){return xi(()=>{let i=kg(n);function o(...r){if(this instanceof o)return i.apply(this,r),this;let l=new o(...r);return u.annotation=l,u;function u(d,f,v){let C=d.hasOwnProperty(Hr)?d[Hr]:Object.defineProperty(d,Hr,{value:[]})[Hr];for(;C.length<=v;)C.push(null);return(C[v]=C[v]||[]).push(l),d}}return t&&(o.prototype=Object.create(t.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}function se(e){for(let n in e)if(e[n]===se)return n;throw Error("Could not find renamed property on target object.")}function Vg(e,n){for(let t in n)n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function Te(e){if(typeof e=="string")return e;if(Array.isArray(e))return"["+e.map(Te).join(", ")+"]";if(e==null)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;let n=e.toString();if(n==null)return""+n;let t=n.indexOf(`
`);return t===-1?n:n.substring(0,t)}function Sd(e,n){return e==null||e===""?n===null?"":n:n==null||n===""?e:e+" "+n}var jg=se({__forward_ref__:se});function kt(e){return e.__forward_ref__=kt,e.toString=function(){return Te(this())},e}function De(e){return dp(e)?e():e}function dp(e){return typeof e=="function"&&e.hasOwnProperty(jg)&&e.__forward_ref__===kt}function j(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function gt(e){return{providers:e.providers||[],imports:e.imports||[]}}function Mo(e){return xd(e,fp)||xd(e,hp)}function pp(e){return Mo(e)!==null}function xd(e,n){return e.hasOwnProperty(n)?e[n]:null}function Bg(e){let n=e&&(e[fp]||e[hp]);return n||null}function Id(e){return e&&(e.hasOwnProperty(Td)||e.hasOwnProperty(Wg))?e[Td]:null}var fp=se({\u0275prov:se}),Td=se({\u0275inj:se}),hp=se({ngInjectableDef:se}),Wg=se({ngInjectorDef:se}),V=class{constructor(n,t){this._desc=n,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=j({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function mp(e){return e&&!!e.\u0275providers}var Ug=se({\u0275cmp:se}),Hg=se({\u0275dir:se}),zg=se({\u0275pipe:se}),$g=se({\u0275mod:se}),Jr=se({\u0275fac:se}),bi=se({__NG_ELEMENT_ID__:se}),Pd=se({__NG_ENV_ID__:se});function Yl(e){return typeof e=="string"?e:e==null?"":String(e)}function Gg(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():Yl(e)}function qg(e,n){let t=n?`. Dependency path: ${n.join(" > ")} > ${e}`:"";throw new R(-200,e)}function Ql(e,n){throw new R(-201,!1)}var q=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(q||{}),rl;function gp(){return rl}function We(e){let n=rl;return rl=e,n}function yp(e,n,t){let i=Mo(e);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&q.Optional)return null;if(n!==void 0)return n;Ql(e,"Injector")}var Zg={},_i=Zg,ol="__NG_DI_FLAG__",Xr="ngTempTokenPath",Yg="ngTokenPath",Qg=/\n/gm,Kg="\u0275",Od="__source",Pn;function Jg(){return Pn}function Tt(e){let n=Pn;return Pn=e,n}function Xg(e,n=q.Default){if(Pn===void 0)throw new R(-203,!1);return Pn===null?yp(e,void 0,n):Pn.get(e,n&q.Optional?null:void 0,n)}function $(e,n=q.Default){return(gp()||Xg)(De(e),n)}function N(e,n=q.Default){return $(e,wo(n))}function wo(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function sl(e){let n=[];for(let t=0;t<e.length;t++){let i=De(e[t]);if(Array.isArray(i)){if(i.length===0)throw new R(900,!1);let o,r=q.Default;for(let l=0;l<i.length;l++){let u=i[l],d=e0(u);typeof d=="number"?d===-1?o=u.token:r|=d:o=u}n.push($(o,r))}else n.push($(i))}return n}function vp(e,n){return e[ol]=n,e.prototype[ol]=n,e}function e0(e){return e[ol]}function t0(e,n,t,i){let o=e[Xr];throw n[Od]&&o.unshift(n[Od]),e.message=n0(`
`+e.message,o,t,i),e[Yg]=o,e[Xr]=null,e}function n0(e,n,t,i=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==Kg?e.slice(2):e;let o=Te(n);if(Array.isArray(n))o=n.map(Te).join(" -> ");else if(typeof n=="object"){let r=[];for(let l in n)if(n.hasOwnProperty(l)){let u=n[l];r.push(l+":"+(typeof u=="string"?JSON.stringify(u):Te(u)))}o=`{${r.join(", ")}}`}return`${t}${i?"("+i+")":""}[${o}]: ${e.replace(Qg,`
  `)}`}var Do=vp(up("Optional"),8);var Kl=vp(up("SkipSelf"),4);function Nn(e,n){let t=e.hasOwnProperty(Jr);return t?e[Jr]:null}function Jl(e,n){e.forEach(t=>Array.isArray(t)?Jl(t,n):n(t))}function Cp(e,n,t){n>=e.length?e.push(t):e.splice(n,0,t)}function eo(e,n){return n>=e.length-1?e.pop():e.splice(n,1)[0]}function i0(e,n,t,i){let o=e.length;if(o==n)e.push(t,i);else if(o===1)e.push(i,e[0]),e[0]=t;else{for(o--,e.push(e[o-1],e[o]);o>n;){let r=o-2;e[o]=e[r],o--}e[n]=t,e[n+1]=i}}function r0(e,n,t){let i=Ii(e,n);return i>=0?e[i|1]=t:(i=~i,i0(e,i,n,t)),i}function $a(e,n){let t=Ii(e,n);if(t>=0)return e[t|1]}function Ii(e,n){return o0(e,n,1)}function o0(e,n,t){let i=0,o=e.length>>t;for(;o!==i;){let r=i+(o-i>>1),l=e[r<<t];if(n===l)return r<<t;l>n?o=r:i=r+1}return~(o<<t)}var An={},Ue=[],Ln=new V(""),bp=new V("",-1),_p=new V(""),to=class{get(n,t=_i){if(t===_i){let i=new Error(`NullInjectorError: No provider for ${Te(n)}!`);throw i.name="NullInjectorError",i}return t}},Mp=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}(Mp||{}),it=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}(it||{}),Nt=function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e}(Nt||{});function s0(e,n,t){let i=e.length;for(;;){let o=e.indexOf(n,t);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let r=n.length;if(o+r===i||e.charCodeAt(o+r)<=32)return o}t=o+1}}function al(e,n,t){let i=0;for(;i<t.length;){let o=t[i];if(typeof o=="number"){if(o!==0)break;i++;let r=t[i++],l=t[i++],u=t[i++];e.setAttribute(n,l,u,r)}else{let r=o,l=t[++i];l0(r)?e.setProperty(n,r,l):e.setAttribute(n,r,l),i++}}return i}function a0(e){return e===3||e===4||e===6}function l0(e){return e.charCodeAt(0)===64}function Mi(e,n){if(!(n===null||n.length===0))if(e===null||e.length===0)e=n.slice();else{let t=-1;for(let i=0;i<n.length;i++){let o=n[i];typeof o=="number"?t=o:t===0||(t===-1||t===2?Nd(e,t,o,null,n[++i]):Nd(e,t,o,null,null))}}return e}function Nd(e,n,t,i,o){let r=0,l=e.length;if(n===-1)l=-1;else for(;r<e.length;){let u=e[r++];if(typeof u=="number"){if(u===n){l=-1;break}else if(u>n){l=r-1;break}}}for(;r<e.length;){let u=e[r];if(typeof u=="number")break;if(u===t){if(i===null){o!==null&&(e[r+1]=o);return}else if(i===e[r+1]){e[r+2]=o;return}}r++,i!==null&&r++,o!==null&&r++}l!==-1&&(e.splice(l,0,n),r=l+1),e.splice(r++,0,t),i!==null&&e.splice(r++,0,i),o!==null&&e.splice(r++,0,o)}var wp="ng-template";function c0(e,n,t,i){let o=0;if(i){for(;o<n.length&&typeof n[o]=="string";o+=2)if(n[o]==="class"&&s0(n[o+1].toLowerCase(),t,0)!==-1)return!0}else if(Xl(e))return!1;if(o=n.indexOf(1,o),o>-1){let r;for(;++o<n.length&&typeof(r=n[o])=="string";)if(r.toLowerCase()===t)return!0}return!1}function Xl(e){return e.type===4&&e.value!==wp}function u0(e,n,t){let i=e.type===4&&!t?wp:e.value;return n===i}function d0(e,n,t){let i=4,o=e.attrs,r=o!==null?h0(o):0,l=!1;for(let u=0;u<n.length;u++){let d=n[u];if(typeof d=="number"){if(!l&&!Ye(i)&&!Ye(d))return!1;if(l&&Ye(d))continue;l=!1,i=d|i&1;continue}if(!l)if(i&4){if(i=2|i&1,d!==""&&!u0(e,d,t)||d===""&&n.length===1){if(Ye(i))return!1;l=!0}}else if(i&8){if(o===null||!c0(e,o,d,t)){if(Ye(i))return!1;l=!0}}else{let f=n[++u],v=p0(d,o,Xl(e),t);if(v===-1){if(Ye(i))return!1;l=!0;continue}if(f!==""){let C;if(v>r?C="":C=o[v+1].toLowerCase(),i&2&&f!==C){if(Ye(i))return!1;l=!0}}}}return Ye(i)||l}function Ye(e){return(e&1)===0}function p0(e,n,t,i){if(n===null)return-1;let o=0;if(i||!t){let r=!1;for(;o<n.length;){let l=n[o];if(l===e)return o;if(l===3||l===6)r=!0;else if(l===1||l===2){let u=n[++o];for(;typeof u=="string";)u=n[++o];continue}else{if(l===4)break;if(l===0){o+=4;continue}}o+=r?1:2}return-1}else return m0(n,e)}function f0(e,n,t=!1){for(let i=0;i<n.length;i++)if(d0(e,n[i],t))return!0;return!1}function h0(e){for(let n=0;n<e.length;n++){let t=e[n];if(a0(t))return n}return e.length}function m0(e,n){let t=e.indexOf(4);if(t>-1)for(t++;t<e.length;){let i=e[t];if(typeof i=="number")return-1;if(i===n)return t;t++}return-1}function Ad(e,n){return e?":not("+n.trim()+")":n}function g0(e){let n=e[0],t=1,i=2,o="",r=!1;for(;t<e.length;){let l=e[t];if(typeof l=="string")if(i&2){let u=e[++t];o+="["+l+(u.length>0?'="'+u+'"':"")+"]"}else i&8?o+="."+l:i&4&&(o+=" "+l);else o!==""&&!Ye(l)&&(n+=Ad(r,o),o=""),i=l,r=r||!Ye(i);t++}return o!==""&&(n+=Ad(r,o)),n}function y0(e){return e.map(g0).join(",")}function v0(e){let n=[],t=[],i=1,o=2;for(;i<e.length;){let r=e[i];if(typeof r=="string")o===2?r!==""&&n.push(r,e[++i]):o===8&&t.push(r);else{if(!Ye(o))break;o=r}i++}return{attrs:n,classes:t}}function M(e){return xi(()=>{let n=Ip(e),t=J(A({},n),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===Mp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&e.dependencies||null,getStandaloneInjector:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||it.Emulated,styles:e.styles||Ue,_:null,schemas:e.schemas||null,tView:null,id:""});Tp(t);let i=e.dependencies;return t.directiveDefs=Fd(i,!1),t.pipeDefs=Fd(i,!0),t.id=_0(t),t})}function C0(e){return At(e)||Dp(e)}function b0(e){return e!==null}function yt(e){return xi(()=>({type:e.type,bootstrap:e.bootstrap||Ue,declarations:e.declarations||Ue,imports:e.imports||Ue,exports:e.exports||Ue,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function Ld(e,n){if(e==null)return An;let t={};for(let i in e)if(e.hasOwnProperty(i)){let o=e[i],r,l,u=Nt.None;Array.isArray(o)?(u=o[0],r=o[1],l=o[2]??r):(r=o,l=o),n?(t[r]=u!==Nt.None?[i,u]:i,n[r]=l):t[r]=i}return t}function we(e){return xi(()=>{let n=Ip(e);return Tp(n),n})}function At(e){return e[Ug]||null}function Dp(e){return e[Hg]||null}function Ep(e){return e[zg]||null}function Sp(e){let n=At(e)||Dp(e)||Ep(e);return n!==null?n.standalone:!1}function xp(e,n){let t=e[$g]||null;if(!t&&n===!0)throw new Error(`Type ${Te(e)} does not have '\u0275mod' property.`);return t}function Ip(e){let n={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputTransforms:null,inputConfig:e.inputs||An,exportAs:e.exportAs||null,standalone:e.standalone===!0,signals:e.signals===!0,selectors:e.selectors||Ue,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Ld(e.inputs,n),outputs:Ld(e.outputs),debugInfo:null}}function Tp(e){e.features?.forEach(n=>n(e))}function Fd(e,n){if(!e)return null;let t=n?Ep:C0;return()=>(typeof e=="function"?e():e).map(i=>t(i)).filter(b0)}function _0(e){let n=0,t=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,e.consts,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery].join("|");for(let o of t)n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function Eo(e){return{\u0275providers:e}}function M0(...e){return{\u0275providers:Pp(!0,e),\u0275fromNgModule:!0}}function Pp(e,...n){let t=[],i=new Set,o,r=l=>{t.push(l)};return Jl(n,l=>{let u=l;ll(u,r,[],i)&&(o||=[],o.push(u))}),o!==void 0&&Op(o,r),t}function Op(e,n){for(let t=0;t<e.length;t++){let{ngModule:i,providers:o}=e[t];ec(o,r=>{n(r,i)})}}function ll(e,n,t,i){if(e=De(e),!e)return!1;let o=null,r=Id(e),l=!r&&At(e);if(!r&&!l){let d=e.ngModule;if(r=Id(d),r)o=d;else return!1}else{if(l&&!l.standalone)return!1;o=e}let u=i.has(o);if(l){if(u)return!1;if(i.add(o),l.dependencies){let d=typeof l.dependencies=="function"?l.dependencies():l.dependencies;for(let f of d)ll(f,n,t,i)}}else if(r){if(r.imports!=null&&!u){i.add(o);let f;try{Jl(r.imports,v=>{ll(v,n,t,i)&&(f||=[],f.push(v))})}finally{}f!==void 0&&Op(f,n)}if(!u){let f=Nn(o)||(()=>new o);n({provide:o,useFactory:f,deps:Ue},o),n({provide:_p,useValue:o,multi:!0},o),n({provide:Ln,useValue:()=>$(o),multi:!0},o)}let d=r.providers;if(d!=null&&!u){let f=e;ec(d,v=>{n(v,f)})}}else return!1;return o!==e&&e.providers!==void 0}function ec(e,n){for(let t of e)mp(t)&&(t=t.\u0275providers),Array.isArray(t)?ec(t,n):n(t)}var w0=se({provide:String,useValue:se});function Np(e){return e!==null&&typeof e=="object"&&w0 in e}function D0(e){return!!(e&&e.useExisting)}function E0(e){return!!(e&&e.useFactory)}function Fn(e){return typeof e=="function"}function S0(e){return!!e.useClass}var So=new V(""),qr={},x0={},Ga;function tc(){return Ga===void 0&&(Ga=new to),Ga}var Fe=class{},wi=class extends Fe{get destroyed(){return this._destroyed}constructor(n,t,i,o){super(),this.parent=t,this.source=i,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,ul(n,l=>this.processProvider(l)),this.records.set(bp,Sn(void 0,this)),o.has("environment")&&this.records.set(Fe,Sn(void 0,this));let r=this.records.get(So);r!=null&&typeof r.value=="string"&&this.scopes.add(r.value),this.injectorDefTypes=new Set(this.get(_p,Ue,q.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let n=ee(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ee(n)}}onDestroy(n){return this.assertNotDestroyed(),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){this.assertNotDestroyed();let t=Tt(this),i=We(void 0),o;try{return n()}finally{Tt(t),We(i)}}get(n,t=_i,i=q.Default){if(this.assertNotDestroyed(),n.hasOwnProperty(Pd))return n[Pd](this);i=wo(i);let o,r=Tt(this),l=We(void 0);try{if(!(i&q.SkipSelf)){let d=this.records.get(n);if(d===void 0){let f=N0(n)&&Mo(n);f&&this.injectableDefInScope(f)?d=Sn(cl(n),qr):d=null,this.records.set(n,d)}if(d!=null)return this.hydrate(n,d)}let u=i&q.Self?tc():this.parent;return t=i&q.Optional&&t===_i?null:t,u.get(n,t)}catch(u){if(u.name==="NullInjectorError"){if((u[Xr]=u[Xr]||[]).unshift(Te(n)),r)throw u;return t0(u,n,"R3InjectorError",this.source)}else throw u}finally{We(l),Tt(r)}}resolveInjectorInitializers(){let n=ee(null),t=Tt(this),i=We(void 0),o;try{let r=this.get(Ln,Ue,q.Self);for(let l of r)l()}finally{Tt(t),We(i),ee(n)}}toString(){let n=[],t=this.records;for(let i of t.keys())n.push(Te(i));return`R3Injector[${n.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new R(205,!1)}processProvider(n){n=De(n);let t=Fn(n)?n:De(n&&n.provide),i=T0(n);if(!Fn(n)&&n.multi===!0){let o=this.records.get(t);o||(o=Sn(void 0,qr,!0),o.factory=()=>sl(o.multi),this.records.set(t,o)),t=n,o.multi.push(n)}this.records.set(t,i)}hydrate(n,t){let i=ee(null);try{return t.value===qr&&(t.value=x0,t.value=t.factory()),typeof t.value=="object"&&t.value&&O0(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ee(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let t=De(n.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(n){let t=this._onDestroyHooks.indexOf(n);t!==-1&&this._onDestroyHooks.splice(t,1)}};function cl(e){let n=Mo(e),t=n!==null?n.factory:Nn(e);if(t!==null)return t;if(e instanceof V)throw new R(204,!1);if(e instanceof Function)return I0(e);throw new R(204,!1)}function I0(e){if(e.length>0)throw new R(204,!1);let t=Bg(e);return t!==null?()=>t.factory(e):()=>new e}function T0(e){if(Np(e))return Sn(void 0,e.useValue);{let n=Ap(e);return Sn(n,qr)}}function Ap(e,n,t){let i;if(Fn(e)){let o=De(e);return Nn(o)||cl(o)}else if(Np(e))i=()=>De(e.useValue);else if(E0(e))i=()=>e.useFactory(...sl(e.deps||[]));else if(D0(e))i=()=>$(De(e.useExisting));else{let o=De(e&&(e.useClass||e.provide));if(P0(e))i=()=>new o(...sl(e.deps));else return Nn(o)||cl(o)}return i}function Sn(e,n,t=!1){return{factory:e,value:n,multi:t?[]:void 0}}function P0(e){return!!e.deps}function O0(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function N0(e){return typeof e=="function"||typeof e=="object"&&e instanceof V}function ul(e,n){for(let t of e)Array.isArray(t)?ul(t,n):t&&mp(t)?ul(t.\u0275providers,n):n(t)}function st(e,n){e instanceof wi&&e.assertNotDestroyed();let t,i=Tt(e),o=We(void 0);try{return n()}finally{Tt(i),We(o)}}function Lp(){return gp()!==void 0||Jg()!=null}function A0(e){if(!Lp())throw new R(-203,!1)}function L0(e){return typeof e=="function"}var vt=0,K=1,H=2,Ee=3,Qe=4,Je=5,no=6,io=7,pt=8,Rn=9,ft=10,ye=11,Di=12,Rd=13,Ti=14,rt=15,kn=16,xn=17,Vn=18,xo=19,Fp=20,Pt=21,qa=22,He=23,Lt=25,Rp=1;var Zt=7,ro=8,oo=9,ze=10,so=function(e){return e[e.None=0]="None",e[e.HasTransplantedViews=2]="HasTransplantedViews",e}(so||{});function Ot(e){return Array.isArray(e)&&typeof e[Rp]=="object"}function Ct(e){return Array.isArray(e)&&e[Rp]===!0}function kp(e){return(e.flags&4)!==0}function Io(e){return e.componentOffset>-1}function nc(e){return(e.flags&1)===1}function Ft(e){return!!e.template}function dl(e){return(e[H]&512)!==0}var pl=class{constructor(n,t,i){this.previousValue=n,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Vp(e,n,t,i){n!==null?n.applyValueToInputSignal(n,i):e[t]=i}function tn(){return jp}function jp(e){return e.type.prototype.ngOnChanges&&(e.setInput=R0),F0}tn.ngInherit=!0;function F0(){let e=Wp(this),n=e?.current;if(n){let t=e.previous;if(t===An)e.previous=n;else for(let i in n)t[i]=n[i];e.current=null,this.ngOnChanges(n)}}function R0(e,n,t,i,o){let r=this.declaredInputs[i],l=Wp(e)||k0(e,{previous:An,current:null}),u=l.current||(l.current={}),d=l.previous,f=d[r];u[r]=new pl(f&&f.currentValue,t,d===An),Vp(e,n,o,t)}var Bp="__ngSimpleChanges__";function Wp(e){return e[Bp]||null}function k0(e,n){return e[Bp]=n}var kd=null;var tt=function(e,n,t){kd?.(e,n,t)},V0="svg",j0="math";function ot(e){for(;Array.isArray(e);)e=e[vt];return e}function Up(e,n){return ot(n[e])}function $e(e,n){return ot(n[e.index])}function Hp(e,n){return e.data[n]}function Vt(e,n){let t=n[e];return Ot(t)?t:t[vt]}function ic(e){return(e[H]&128)===128}function B0(e){return Ct(e[Ee])}function ao(e,n){return n==null?null:e[n]}function zp(e){e[xn]=0}function $p(e){e[H]&1024||(e[H]|=1024,ic(e)&&Po(e))}function To(e){return!!(e[H]&9216||e[He]?.dirty)}function fl(e){e[ft].changeDetectionScheduler?.notify(8),e[H]&64&&(e[H]|=1024),To(e)&&Po(e)}function Po(e){e[ft].changeDetectionScheduler?.notify(0);let n=Yt(e);for(;n!==null&&!(n[H]&8192||(n[H]|=8192,!ic(n)));)n=Yt(n)}function Gp(e,n){if((e[H]&256)===256)throw new R(911,!1);e[Pt]===null&&(e[Pt]=[]),e[Pt].push(n)}function W0(e,n){if(e[Pt]===null)return;let t=e[Pt].indexOf(n);t!==-1&&e[Pt].splice(t,1)}function Yt(e){let n=e[Ee];return Ct(n)?n[Ee]:n}var te={lFrame:tf(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var qp=!1;function U0(){return te.lFrame.elementDepthCount}function H0(){te.lFrame.elementDepthCount++}function z0(){te.lFrame.elementDepthCount--}function Zp(){return te.bindingsEnabled}function $0(){return te.skipHydrationRootTNode!==null}function G0(e){return te.skipHydrationRootTNode===e}function q0(){te.skipHydrationRootTNode=null}function ue(){return te.lFrame.lView}function Re(){return te.lFrame.tView}function Pe(){let e=Yp();for(;e!==null&&e.type===64;)e=e.parent;return e}function Yp(){return te.lFrame.currentTNode}function Z0(){let e=te.lFrame,n=e.currentTNode;return e.isParent?n:n.parent}function Pi(e,n){let t=te.lFrame;t.currentTNode=e,t.isParent=n}function Qp(){return te.lFrame.isParent}function Y0(){te.lFrame.isParent=!1}function Kp(){return qp}function Vd(e){qp=e}function Q0(e){return te.lFrame.bindingIndex=e}function Oo(){return te.lFrame.bindingIndex++}function K0(e){let n=te.lFrame,t=n.bindingIndex;return n.bindingIndex=n.bindingIndex+e,t}function J0(){return te.lFrame.inI18n}function X0(e,n){let t=te.lFrame;t.bindingIndex=t.bindingRootIndex=e,hl(n)}function ey(){return te.lFrame.currentDirectiveIndex}function hl(e){te.lFrame.currentDirectiveIndex=e}function ty(e){let n=te.lFrame.currentDirectiveIndex;return n===-1?null:e[n]}function Jp(e){te.lFrame.currentQueryIndex=e}function ny(e){let n=e[K];return n.type===2?n.declTNode:n.type===1?e[Je]:null}function Xp(e,n,t){if(t&q.SkipSelf){let o=n,r=e;for(;o=o.parent,o===null&&!(t&q.Host);)if(o=ny(r),o===null||(r=r[Ti],o.type&10))break;if(o===null)return!1;n=o,e=r}let i=te.lFrame=ef();return i.currentTNode=n,i.lView=e,!0}function rc(e){let n=ef(),t=e[K];te.lFrame=n,n.currentTNode=t.firstChild,n.lView=e,n.tView=t,n.contextLView=e,n.bindingIndex=t.bindingStartIndex,n.inI18n=!1}function ef(){let e=te.lFrame,n=e===null?null:e.child;return n===null?tf(e):n}function tf(e){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=n),n}function nf(){let e=te.lFrame;return te.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var rf=nf;function oc(){let e=nf();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function $n(){return te.lFrame.selectedIndex}function Qt(e){te.lFrame.selectedIndex=e}function sc(){let e=te.lFrame;return Hp(e.tView,e.selectedIndex)}function iy(){return te.lFrame.currentNamespace}var of=!0;function ac(){return of}function lc(e){of=e}function ry(e,n,t){let{ngOnChanges:i,ngOnInit:o,ngDoCheck:r}=n.type.prototype;if(i){let l=jp(n);(t.preOrderHooks??=[]).push(e,l),(t.preOrderCheckHooks??=[]).push(e,l)}o&&(t.preOrderHooks??=[]).push(0-e,o),r&&((t.preOrderHooks??=[]).push(e,r),(t.preOrderCheckHooks??=[]).push(e,r))}function cc(e,n){for(let t=n.directiveStart,i=n.directiveEnd;t<i;t++){let r=e.data[t].type.prototype,{ngAfterContentInit:l,ngAfterContentChecked:u,ngAfterViewInit:d,ngAfterViewChecked:f,ngOnDestroy:v}=r;l&&(e.contentHooks??=[]).push(-t,l),u&&((e.contentHooks??=[]).push(t,u),(e.contentCheckHooks??=[]).push(t,u)),d&&(e.viewHooks??=[]).push(-t,d),f&&((e.viewHooks??=[]).push(t,f),(e.viewCheckHooks??=[]).push(t,f)),v!=null&&(e.destroyHooks??=[]).push(t,v)}}function Zr(e,n,t){sf(e,n,3,t)}function Yr(e,n,t,i){(e[H]&3)===t&&sf(e,n,t,i)}function Za(e,n){let t=e[H];(t&3)===n&&(t&=16383,t+=1,e[H]=t)}function sf(e,n,t,i){let o=i!==void 0?e[xn]&65535:0,r=i??-1,l=n.length-1,u=0;for(let d=o;d<l;d++)if(typeof n[d+1]=="number"){if(u=n[d],i!=null&&u>=i)break}else n[d]<0&&(e[xn]+=65536),(u<r||r==-1)&&(oy(e,t,n,d),e[xn]=(e[xn]&4294901760)+d+2),d++}function jd(e,n){tt(4,e,n);let t=ee(null);try{n.call(e)}finally{ee(t),tt(5,e,n)}}function oy(e,n,t,i){let o=t[i]<0,r=t[i+1],l=o?-t[i]:t[i],u=e[l];o?e[H]>>14<e[xn]>>16&&(e[H]&3)===n&&(e[H]+=16384,jd(u,r)):jd(u,r)}var On=-1,Kt=class{constructor(n,t,i){this.factory=n,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function sy(e){return e instanceof Kt}function ay(e){return(e.flags&8)!==0}function ly(e){return(e.flags&16)!==0}var Ya={},ml=class{constructor(n,t){this.injector=n,this.parentInjector=t}get(n,t,i){i=wo(i);let o=this.injector.get(n,Ya,i);return o!==Ya||t===Ya?o:this.parentInjector.get(n,t,i)}};function af(e){return e!==On}function lo(e){return e&32767}function cy(e){return e>>16}function co(e,n){let t=cy(e),i=n;for(;t>0;)i=i[Ti],t--;return i}var gl=!0;function Bd(e){let n=gl;return gl=e,n}var uy=256,lf=uy-1,cf=5,dy=0,nt={};function py(e,n,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(bi)&&(i=t[bi]),i==null&&(i=t[bi]=dy++);let o=i&lf,r=1<<o;n.data[e+(o>>cf)]|=r}function uo(e,n){let t=uf(e,n);if(t!==-1)return t;let i=n[K];i.firstCreatePass&&(e.injectorIndex=n.length,Qa(i.data,e),Qa(n,null),Qa(i.blueprint,null));let o=uc(e,n),r=e.injectorIndex;if(af(o)){let l=lo(o),u=co(o,n),d=u[K].data;for(let f=0;f<8;f++)n[r+f]=u[l+f]|d[l+f]}return n[r+8]=o,r}function Qa(e,n){e.push(0,0,0,0,0,0,0,0,n)}function uf(e,n){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||n[e.injectorIndex+8]===null?-1:e.injectorIndex}function uc(e,n){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let t=0,i=null,o=n;for(;o!==null;){if(i=mf(o),i===null)return On;if(t++,o=o[Ti],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return On}function yl(e,n,t){py(e,n,t)}function df(e,n,t){if(t&q.Optional||e!==void 0)return e;Ql(n,"NodeInjector")}function pf(e,n,t,i){if(t&q.Optional&&i===void 0&&(i=null),!(t&(q.Self|q.Host))){let o=e[Rn],r=We(void 0);try{return o?o.get(n,i,t&q.Optional):yp(n,i,t&q.Optional)}finally{We(r)}}return df(i,n,t)}function ff(e,n,t,i=q.Default,o){if(e!==null){if(n[H]&2048&&!(i&q.Self)){let l=yy(e,n,t,i,nt);if(l!==nt)return l}let r=hf(e,n,t,i,nt);if(r!==nt)return r}return pf(n,t,i,o)}function hf(e,n,t,i,o){let r=my(t);if(typeof r=="function"){if(!Xp(n,e,i))return i&q.Host?df(o,t,i):pf(n,t,i,o);try{let l;if(l=r(i),l==null&&!(i&q.Optional))Ql(t);else return l}finally{rf()}}else if(typeof r=="number"){let l=null,u=uf(e,n),d=On,f=i&q.Host?n[rt][Je]:null;for((u===-1||i&q.SkipSelf)&&(d=u===-1?uc(e,n):n[u+8],d===On||!Ud(i,!1)?u=-1:(l=n[K],u=lo(d),n=co(d,n)));u!==-1;){let v=n[K];if(Wd(r,u,v.data)){let C=fy(u,n,t,l,i,f);if(C!==nt)return C}d=n[u+8],d!==On&&Ud(i,n[K].data[u+8]===f)&&Wd(r,u,n)?(l=v,u=lo(d),n=co(d,n)):u=-1}}return o}function fy(e,n,t,i,o,r){let l=n[K],u=l.data[e+8],d=i==null?Io(u)&&gl:i!=l&&(u.type&3)!==0,f=o&q.Host&&r===u,v=hy(u,l,t,d,f);return v!==null?jn(n,l,v,u):nt}function hy(e,n,t,i,o){let r=e.providerIndexes,l=n.data,u=r&1048575,d=e.directiveStart,f=e.directiveEnd,v=r>>20,C=i?u:u+v,O=o?u+v:f;for(let b=C;b<O;b++){let L=l[b];if(b<d&&t===L||b>=d&&L.type===t)return b}if(o){let b=l[d];if(b&&Ft(b)&&b.type===t)return d}return null}function jn(e,n,t,i){let o=e[t],r=n.data;if(sy(o)){let l=o;l.resolving&&qg(Gg(r[t]));let u=Bd(l.canSeeViewProviders);l.resolving=!0;let d,f=l.injectImpl?We(l.injectImpl):null,v=Xp(e,i,q.Default);try{o=e[t]=l.factory(void 0,r,e,i),n.firstCreatePass&&t>=i.directiveStart&&ry(t,r[t],n)}finally{f!==null&&We(f),Bd(u),l.resolving=!1,rf()}}return o}function my(e){if(typeof e=="string")return e.charCodeAt(0)||0;let n=e.hasOwnProperty(bi)?e[bi]:void 0;return typeof n=="number"?n>=0?n&lf:gy:n}function Wd(e,n,t){let i=1<<e;return!!(t[n+(e>>cf)]&i)}function Ud(e,n){return!(e&q.Self)&&!(e&q.Host&&n)}var qt=class{constructor(n,t){this._tNode=n,this._lView=t}get(n,t,i){return ff(this._tNode,this._lView,n,wo(i),t)}};function gy(){return new qt(Pe(),ue())}function nn(e){return xi(()=>{let n=e.prototype.constructor,t=n[Jr]||vl(n),i=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==i;){let r=o[Jr]||vl(o);if(r&&r!==t)return r;o=Object.getPrototypeOf(o)}return r=>new r})}function vl(e){return dp(e)?()=>{let n=vl(De(e));return n&&n()}:Nn(e)}function yy(e,n,t,i,o){let r=e,l=n;for(;r!==null&&l!==null&&l[H]&2048&&!(l[H]&512);){let u=hf(r,l,t,i|q.Self,nt);if(u!==nt)return u;let d=r.parent;if(!d){let f=l[Fp];if(f){let v=f.get(t,nt,i);if(v!==nt)return v}d=mf(l),l=l[Ti]}r=d}return o}function mf(e){let n=e[K],t=n.type;return t===2?n.declTNode:t===1?e[Je]:null}function Hd(e,n=null,t=null,i){let o=gf(e,n,t,i);return o.resolveInjectorInitializers(),o}function gf(e,n=null,t=null,i,o=new Set){let r=[t||Ue,M0(e)];return i=i||(typeof e=="object"?void 0:Te(e)),new wi(r,n||tc(),i||null,o)}var Ke=class e{static{this.THROW_IF_NOT_FOUND=_i}static{this.NULL=new to}static create(n,t){if(Array.isArray(n))return Hd({name:""},t,n,"");{let i=n.name??"";return Hd({name:i},n.parent,n.providers,i)}}static{this.\u0275prov=j({token:e,providedIn:"any",factory:()=>$(bp)})}static{this.__NG_ELEMENT_ID__=-1}};var vy=new V("");vy.__NG_ELEMENT_ID__=e=>{let n=Pe();if(n===null)throw new R(204,!1);if(n.type&2)return n.value;if(e&q.Optional)return null;throw new R(204,!1)};var Cy="ngOriginalError";function Ka(e){return e[Cy]}var yf=!0,dc=(()=>{class e{static{this.__NG_ELEMENT_ID__=by}static{this.__NG_ENV_ID__=t=>t}}return e})(),Cl=class extends dc{constructor(n){super(),this._lView=n}onDestroy(n){return Gp(this._lView,n),()=>W0(this._lView,n)}};function by(){return new Cl(ue())}var Gn=(()=>{class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new _e(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static{this.\u0275prov=j({token:e,providedIn:"root",factory:()=>new e})}}return e})();var bl=class extends be{constructor(n=!1){super(),this.destroyRef=void 0,this.pendingTasks=void 0,this.__isAsync=n,Lp()&&(this.destroyRef=N(dc,{optional:!0})??void 0,this.pendingTasks=N(Gn,{optional:!0})??void 0)}emit(n){let t=ee(null);try{super.next(n)}finally{ee(t)}}subscribe(n,t,i){let o=n,r=t||(()=>null),l=i;if(n&&typeof n=="object"){let d=n;o=d.next?.bind(d),r=d.error?.bind(d),l=d.complete?.bind(d)}this.__isAsync&&(r=this.wrapInTimeout(r),o&&(o=this.wrapInTimeout(o)),l&&(l=this.wrapInTimeout(l)));let u=super.subscribe({next:o,error:r,complete:l});return n instanceof pe&&n.add(u),u}wrapInTimeout(n){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{n(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},me=bl;function po(...e){}function vf(e){let n,t;function i(){e=po;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{e(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{e(),i()})),()=>i()}function zd(e){return queueMicrotask(()=>e()),()=>{e=po}}var pc="isAngularZone",fo=pc+"_ID",_y=0,de=class e{constructor(n){this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new me(!1),this.onMicrotaskEmpty=new me(!1),this.onStable=new me(!1),this.onError=new me(!1);let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:r=yf}=n;if(typeof Zone>"u")throw new R(908,!1);Zone.assertZonePatched();let l=this;l._nesting=0,l._outer=l._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(l._inner=l._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(l._inner=l._inner.fork(Zone.longStackTraceZoneSpec)),l.shouldCoalesceEventChangeDetection=!o&&i,l.shouldCoalesceRunChangeDetection=o,l.callbackScheduled=!1,l.scheduleInRootZone=r,Dy(l)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(pc)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new R(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new R(909,!1)}run(n,t,i){return this._inner.run(n,t,i)}runTask(n,t,i,o){let r=this._inner,l=r.scheduleEventTask("NgZoneEvent: "+o,n,My,po,po);try{return r.runTask(l,t,i)}finally{r.cancelTask(l)}}runGuarded(n,t,i){return this._inner.runGuarded(n,t,i)}runOutsideAngular(n){return this._outer.run(n)}},My={};function fc(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function wy(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function n(){vf(()=>{e.callbackScheduled=!1,_l(e),e.isCheckStableRunning=!0,fc(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{n()}):e._outer.run(()=>{n()}),_l(e)}function Dy(e){let n=()=>{wy(e)},t=_y++;e._inner=e._inner.fork({name:"angular",properties:{[pc]:!0,[fo]:t,[fo+t]:!0},onInvokeTask:(i,o,r,l,u,d)=>{if(Ey(d))return i.invokeTask(r,l,u,d);try{return $d(e),i.invokeTask(r,l,u,d)}finally{(e.shouldCoalesceEventChangeDetection&&l.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&n(),Gd(e)}},onInvoke:(i,o,r,l,u,d,f)=>{try{return $d(e),i.invoke(r,l,u,d,f)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!Sy(d)&&n(),Gd(e)}},onHasTask:(i,o,r,l)=>{i.hasTask(r,l),o===r&&(l.change=="microTask"?(e._hasPendingMicrotasks=l.microTask,_l(e),fc(e)):l.change=="macroTask"&&(e.hasPendingMacrotasks=l.macroTask))},onHandleError:(i,o,r,l)=>(i.handleError(r,l),e.runOutsideAngular(()=>e.onError.emit(l)),!1)})}function _l(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function $d(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Gd(e){e._nesting--,fc(e)}var Ml=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new me,this.onMicrotaskEmpty=new me,this.onStable=new me,this.onError=new me}run(n,t,i){return n.apply(t,i)}runGuarded(n,t,i){return n.apply(t,i)}runOutsideAngular(n){return n()}runTask(n,t,i,o){return n.apply(t,i)}};function Ey(e){return Cf(e,"__ignore_ng_zone__")}function Sy(e){return Cf(e,"__scheduler_tick__")}function Cf(e,n){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[n]===!0}var ht=class{constructor(){this._console=console}handleError(n){let t=this._findOriginalError(n);this._console.error("ERROR",n),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(n){let t=n&&Ka(n);for(;t&&Ka(t);)t=Ka(t);return t||null}},xy=new V("",{providedIn:"root",factory:()=>{let e=N(de),n=N(ht);return t=>e.runOutsideAngular(()=>n.handleError(t))}});function Iy(){return No(Pe(),ue())}function No(e,n){return new rn($e(e,n))}var rn=(()=>{class e{constructor(t){this.nativeElement=t}static{this.__NG_ELEMENT_ID__=Iy}}return e})();function bf(e){return(e.flags&128)===128}var _f=new Map,Ty=0;function Py(){return Ty++}function Oy(e){_f.set(e[xo],e)}function wl(e){_f.delete(e[xo])}var qd="__ngContext__";function Jt(e,n){Ot(n)?(e[qd]=n[xo],Oy(n)):e[qd]=n}function Mf(e){return Df(e[Di])}function wf(e){return Df(e[Qe])}function Df(e){for(;e!==null&&!Ct(e);)e=e[Qe];return e}var Dl;function Ef(e){Dl=e}function Ny(){if(Dl!==void 0)return Dl;if(typeof document<"u")return document;throw new R(210,!1)}var hc=new V("",{providedIn:"root",factory:()=>Ay}),Ay="ng",mc=new V(""),jt=new V("",{providedIn:"platform",factory:()=>"unknown"});var gc=new V("",{providedIn:"root",factory:()=>Ny().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Ly="h",Fy="b";var Ry=()=>null;function yc(e,n,t=!1){return Ry(e,n,t)}var Sf=!1,ky=new V("",{providedIn:"root",factory:()=>Sf});var El=class{constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Rg})`}};function vc(e){return e instanceof El?e.changingThisBreaksApplicationSecurity:e}function xf(e){return e instanceof Function?e():e}function Vy(e){return(e??N(Ke)).get(jt)==="browser"}var mt=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}(mt||{}),jy;function Cc(e,n){return jy(e,n)}function In(e,n,t,i,o){if(i!=null){let r,l=!1;Ct(i)?r=i:Ot(i)&&(l=!0,i=i[vt]);let u=ot(i);e===0&&t!==null?o==null?Nf(n,t,u):ho(n,t,u,o||null,!0):e===1&&t!==null?ho(n,t,u,o||null,!0):e===2?ev(n,u,l):e===3&&n.destroyNode(u),r!=null&&nv(n,e,r,t,o)}}function By(e,n){return e.createText(n)}function Wy(e,n,t){e.setValue(n,t)}function If(e,n,t){return e.createElement(n,t)}function Uy(e,n){Tf(e,n),n[vt]=null,n[Je]=null}function Hy(e,n,t,i,o,r){i[vt]=o,i[Je]=n,Ao(e,i,t,1,o,r)}function Tf(e,n){n[ft].changeDetectionScheduler?.notify(9),Ao(e,n,n[ye],2,null,null)}function zy(e){let n=e[Di];if(!n)return Ja(e[K],e);for(;n;){let t=null;if(Ot(n))t=n[Di];else{let i=n[ze];i&&(t=i)}if(!t){for(;n&&!n[Qe]&&n!==e;)Ot(n)&&Ja(n[K],n),n=n[Ee];n===null&&(n=e),Ot(n)&&Ja(n[K],n),t=n&&n[Qe]}n=t}}function $y(e,n,t,i){let o=ze+i,r=t.length;i>0&&(t[o-1][Qe]=n),i<r-ze?(n[Qe]=t[o],Cp(t,ze+i,n)):(t.push(n),n[Qe]=null),n[Ee]=t;let l=n[kn];l!==null&&t!==l&&Pf(l,n);let u=n[Vn];u!==null&&u.insertView(e),fl(n),n[H]|=128}function Pf(e,n){let t=e[oo],i=n[Ee];if(Ot(i))e[H]|=so.HasTransplantedViews;else{let o=i[Ee][rt];n[rt]!==o&&(e[H]|=so.HasTransplantedViews)}t===null?e[oo]=[n]:t.push(n)}function bc(e,n){let t=e[oo],i=t.indexOf(n);t.splice(i,1)}function Sl(e,n){if(e.length<=ze)return;let t=ze+n,i=e[t];if(i){let o=i[kn];o!==null&&o!==e&&bc(o,i),n>0&&(e[t-1][Qe]=i[Qe]);let r=eo(e,ze+n);Uy(i[K],i);let l=r[Vn];l!==null&&l.detachView(r[K]),i[Ee]=null,i[Qe]=null,i[H]&=-129}return i}function Of(e,n){if(!(n[H]&256)){let t=n[ye];t.destroyNode&&Ao(e,n,t,3,null,null),zy(n)}}function Ja(e,n){if(n[H]&256)return;let t=ee(null);try{n[H]&=-129,n[H]|=256,n[He]&&xa(n[He]),qy(e,n),Gy(e,n),n[K].type===1&&n[ye].destroy();let i=n[kn];if(i!==null&&Ct(n[Ee])){i!==n[Ee]&&bc(i,n);let o=n[Vn];o!==null&&o.detachView(e)}wl(n)}finally{ee(t)}}function Gy(e,n){let t=e.cleanup,i=n[io];if(t!==null)for(let r=0;r<t.length-1;r+=2)if(typeof t[r]=="string"){let l=t[r+3];l>=0?i[l]():i[-l].unsubscribe(),r+=2}else{let l=i[t[r+1]];t[r].call(l)}i!==null&&(n[io]=null);let o=n[Pt];if(o!==null){n[Pt]=null;for(let r=0;r<o.length;r++){let l=o[r];l()}}}function qy(e,n){let t;if(e!=null&&(t=e.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let o=n[t[i]];if(!(o instanceof Kt)){let r=t[i+1];if(Array.isArray(r))for(let l=0;l<r.length;l+=2){let u=o[r[l]],d=r[l+1];tt(4,u,d);try{d.call(u)}finally{tt(5,u,d)}}else{tt(4,o,r);try{r.call(o)}finally{tt(5,o,r)}}}}}function Zy(e,n,t){return Yy(e,n.parent,t)}function Yy(e,n,t){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return t[vt];{let{componentOffset:o}=i;if(o>-1){let{encapsulation:r}=e.data[i.directiveStart+o];if(r===it.None||r===it.Emulated)return null}return $e(i,t)}}function ho(e,n,t,i,o){e.insertBefore(n,t,i,o)}function Nf(e,n,t){e.appendChild(n,t)}function Zd(e,n,t,i,o){i!==null?ho(e,n,t,i,o):Nf(e,n,t)}function Af(e,n){return e.parentNode(n)}function Qy(e,n){return e.nextSibling(n)}function Ky(e,n,t){return Xy(e,n,t)}function Jy(e,n,t){return e.type&40?$e(e,t):null}var Xy=Jy,Yd;function _c(e,n,t,i){let o=Zy(e,i,n),r=n[ye],l=i.parent||n[Je],u=Ky(l,i,n);if(o!=null)if(Array.isArray(t))for(let d=0;d<t.length;d++)Zd(r,o,t[d],u,!1);else Zd(r,o,t,u,!1);Yd!==void 0&&Yd(r,i,n,t,o)}function Ci(e,n){if(n!==null){let t=n.type;if(t&3)return $e(n,e);if(t&4)return xl(-1,e[n.index]);if(t&8){let i=n.child;if(i!==null)return Ci(e,i);{let o=e[n.index];return Ct(o)?xl(-1,o):ot(o)}}else{if(t&128)return Ci(e,n.next);if(t&32)return Cc(n,e)()||ot(e[n.index]);{let i=Lf(e,n);if(i!==null){if(Array.isArray(i))return i[0];let o=Yt(e[rt]);return Ci(o,i)}else return Ci(e,n.next)}}}return null}function Lf(e,n){if(n!==null){let i=e[rt][Je],o=n.projection;return i.projection[o]}return null}function xl(e,n){let t=ze+e+1;if(t<n.length){let i=n[t],o=i[K].firstChild;if(o!==null)return Ci(i,o)}return n[Zt]}function ev(e,n,t){e.removeChild(null,n,t)}function Mc(e,n,t,i,o,r,l){for(;t!=null;){if(t.type===128){t=t.next;continue}let u=i[t.index],d=t.type;if(l&&n===0&&(u&&Jt(ot(u),i),t.flags|=2),(t.flags&32)!==32)if(d&8)Mc(e,n,t.child,i,o,r,!1),In(n,e,o,u,r);else if(d&32){let f=Cc(t,i),v;for(;v=f();)In(n,e,o,v,r);In(n,e,o,u,r)}else d&16?tv(e,n,i,t,o,r):In(n,e,o,u,r);t=l?t.projectionNext:t.next}}function Ao(e,n,t,i,o,r){Mc(t,i,e.firstChild,n,o,r,!1)}function tv(e,n,t,i,o,r){let l=t[rt],d=l[Je].projection[i.projection];if(Array.isArray(d))for(let f=0;f<d.length;f++){let v=d[f];In(n,e,o,v,r)}else{let f=d,v=l[Ee];bf(i)&&(f.flags|=128),Mc(e,n,f,v,o,r,!0)}}function nv(e,n,t,i,o){let r=t[Zt],l=ot(t);r!==l&&In(n,e,i,r,o);for(let u=ze;u<t.length;u++){let d=t[u];Ao(d[K],d,e,n,i,r)}}function iv(e,n,t,i,o){if(n)o?e.addClass(t,i):e.removeClass(t,i);else{let r=i.indexOf("-")===-1?void 0:mt.DashCase;o==null?e.removeStyle(t,i,r):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),r|=mt.Important),e.setStyle(t,i,o,r))}}function rv(e,n,t){e.setAttribute(n,"style",t)}function Ff(e,n,t){t===""?e.removeAttribute(n,"class"):e.setAttribute(n,"class",t)}function Rf(e,n,t){let{mergedAttrs:i,classes:o,styles:r}=t;i!==null&&al(e,n,i),o!==null&&Ff(e,n,o),r!==null&&rv(e,n,r)}var qn={};function p(e=1){kf(Re(),ue(),$n()+e,!1)}function kf(e,n,t,i){if(!i)if((n[H]&3)===3){let r=e.preOrderCheckHooks;r!==null&&Zr(n,r,t)}else{let r=e.preOrderHooks;r!==null&&Yr(n,r,0,t)}Qt(t)}function ae(e,n=q.Default){let t=ue();if(t===null)return $(e,n);let i=Pe();return ff(i,t,De(e),n)}function Vf(){let e="invalid";throw new Error(e)}function jf(e,n,t,i,o,r){let l=ee(null);try{let u=null;o&Nt.SignalBased&&(u=n[i][ct]),u!==null&&u.transformFn!==void 0&&(r=u.transformFn(r)),o&Nt.HasDecoratorInputTransform&&(r=e.inputTransforms[i].call(n,r)),e.setInput!==null?e.setInput(n,u,r,t,i):Vp(n,u,i,r)}finally{ee(l)}}function ov(e,n){let t=e.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let o=t[i];if(o<0)Qt(~o);else{let r=o,l=t[++i],u=t[++i];X0(l,r);let d=n[r];u(2,d)}}}finally{Qt(-1)}}function Lo(e,n,t,i,o,r,l,u,d,f,v){let C=n.blueprint.slice();return C[vt]=o,C[H]=i|4|128|8|64,(f!==null||e&&e[H]&2048)&&(C[H]|=2048),zp(C),C[Ee]=C[Ti]=e,C[pt]=t,C[ft]=l||e&&e[ft],C[ye]=u||e&&e[ye],C[Rn]=d||e&&e[Rn]||null,C[Je]=r,C[xo]=Py(),C[no]=v,C[Fp]=f,C[rt]=n.type==2?e[rt]:C,C}function Fo(e,n,t,i,o){let r=e.data[n];if(r===null)r=sv(e,n,t,i,o),J0()&&(r.flags|=32);else if(r.type&64){r.type=t,r.value=i,r.attrs=o;let l=Z0();r.injectorIndex=l===null?-1:l.injectorIndex}return Pi(r,!0),r}function sv(e,n,t,i,o){let r=Yp(),l=Qp(),u=l?r:r&&r.parent,d=e.data[n]=dv(e,u,t,n,i,o);return e.firstChild===null&&(e.firstChild=d),r!==null&&(l?r.child==null&&d.parent!==null&&(r.child=d):r.next===null&&(r.next=d,d.prev=r)),d}function Bf(e,n,t,i){if(t===0)return-1;let o=n.length;for(let r=0;r<t;r++)n.push(i),e.blueprint.push(i),e.data.push(null);return o}function Wf(e,n,t,i,o){let r=$n(),l=i&2;try{Qt(-1),l&&n.length>Lt&&kf(e,n,Lt,!1),tt(l?2:0,o),t(i,o)}finally{Qt(r),tt(l?3:1,o)}}function Uf(e,n,t){if(kp(n)){let i=ee(null);try{let o=n.directiveStart,r=n.directiveEnd;for(let l=o;l<r;l++){let u=e.data[l];if(u.contentQueries){let d=t[l];u.contentQueries(1,d,l)}}}finally{ee(i)}}}function Hf(e,n,t){Zp()&&(yv(e,n,t,$e(t,n)),(t.flags&64)===64&&Yf(e,n,t))}function zf(e,n,t=$e){let i=n.localNames;if(i!==null){let o=n.index+1;for(let r=0;r<i.length;r+=2){let l=i[r+1],u=l===-1?t(n,e):e[l];e[o++]=u}}}function $f(e){let n=e.tView;return n===null||n.incompleteFirstPass?e.tView=wc(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):n}function wc(e,n,t,i,o,r,l,u,d,f,v){let C=Lt+i,O=C+o,b=av(C,O),L=typeof f=="function"?f():f;return b[K]={type:e,blueprint:b,template:t,queries:null,viewQuery:u,declTNode:n,data:b.slice().fill(null,C),bindingStartIndex:C,expandoStartIndex:O,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof r=="function"?r():r,pipeRegistry:typeof l=="function"?l():l,firstChild:null,schemas:d,consts:L,incompleteFirstPass:!1,ssrId:v}}function av(e,n){let t=[];for(let i=0;i<n;i++)t.push(i<e?null:qn);return t}function lv(e,n,t,i){let r=i.get(ky,Sf)||t===it.ShadowDom,l=e.selectRootElement(n,r);return cv(l),l}function cv(e){uv(e)}var uv=()=>null;function dv(e,n,t,i,o,r){let l=n?n.injectorIndex:-1,u=0;return $0()&&(u|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:l,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:u,providerIndexes:0,value:o,attrs:r,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Qd(e,n,t,i,o){for(let r in n){if(!n.hasOwnProperty(r))continue;let l=n[r];if(l===void 0)continue;i??={};let u,d=Nt.None;Array.isArray(l)?(u=l[0],d=l[1]):u=l;let f=r;if(o!==null){if(!o.hasOwnProperty(r))continue;f=o[r]}e===0?Kd(i,t,f,u,d):Kd(i,t,f,u)}return i}function Kd(e,n,t,i,o){let r;e.hasOwnProperty(t)?(r=e[t]).push(n,i):r=e[t]=[n,i],o!==void 0&&r.push(o)}function pv(e,n,t){let i=n.directiveStart,o=n.directiveEnd,r=e.data,l=n.attrs,u=[],d=null,f=null;for(let v=i;v<o;v++){let C=r[v],O=t?t.get(C):null,b=O?O.inputs:null,L=O?O.outputs:null;d=Qd(0,C.inputs,v,d,b),f=Qd(1,C.outputs,v,f,L);let Z=d!==null&&l!==null&&!Xl(n)?Iv(d,v,l):null;u.push(Z)}d!==null&&(d.hasOwnProperty("class")&&(n.flags|=8),d.hasOwnProperty("style")&&(n.flags|=16)),n.initialInputs=u,n.inputs=d,n.outputs=f}function fv(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function Gf(e,n,t,i,o,r,l,u){let d=$e(n,t),f=n.inputs,v;!u&&f!=null&&(v=f[i])?(Dc(e,t,v,i,o),Io(n)&&hv(t,n.index)):n.type&3?(i=fv(i),o=l!=null?l(o,n.value||"",i):o,r.setProperty(d,i,o)):n.type&12}function hv(e,n){let t=Vt(n,e);t[H]&16||(t[H]|=64)}function qf(e,n,t,i){if(Zp()){let o=i===null?null:{"":-1},r=Cv(e,t),l,u;r===null?l=u=null:[l,u]=r,l!==null&&Zf(e,n,t,l,o,u),o&&bv(t,i,o)}t.mergedAttrs=Mi(t.mergedAttrs,t.attrs)}function Zf(e,n,t,i,o,r){for(let f=0;f<i.length;f++)yl(uo(t,n),e,i[f].type);Mv(t,e.data.length,i.length);for(let f=0;f<i.length;f++){let v=i[f];v.providersResolver&&v.providersResolver(v)}let l=!1,u=!1,d=Bf(e,n,i.length,null);for(let f=0;f<i.length;f++){let v=i[f];t.mergedAttrs=Mi(t.mergedAttrs,v.hostAttrs),wv(e,t,n,d,v),_v(d,v,o),v.contentQueries!==null&&(t.flags|=4),(v.hostBindings!==null||v.hostAttrs!==null||v.hostVars!==0)&&(t.flags|=64);let C=v.type.prototype;!l&&(C.ngOnChanges||C.ngOnInit||C.ngDoCheck)&&((e.preOrderHooks??=[]).push(t.index),l=!0),!u&&(C.ngOnChanges||C.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}pv(e,t,r)}function mv(e,n,t,i,o){let r=o.hostBindings;if(r){let l=e.hostBindingOpCodes;l===null&&(l=e.hostBindingOpCodes=[]);let u=~n.index;gv(l)!=u&&l.push(u),l.push(t,i,r)}}function gv(e){let n=e.length;for(;n>0;){let t=e[--n];if(typeof t=="number"&&t<0)return t}return 0}function yv(e,n,t,i){let o=t.directiveStart,r=t.directiveEnd;Io(t)&&Dv(n,t,e.data[o+t.componentOffset]),e.firstCreatePass||uo(t,n),Jt(i,n);let l=t.initialInputs;for(let u=o;u<r;u++){let d=e.data[u],f=jn(n,e,u,t);if(Jt(f,n),l!==null&&xv(n,u-o,f,d,t,l),Ft(d)){let v=Vt(t.index,n);v[pt]=jn(n,e,u,t)}}}function Yf(e,n,t){let i=t.directiveStart,o=t.directiveEnd,r=t.index,l=ey();try{Qt(r);for(let u=i;u<o;u++){let d=e.data[u],f=n[u];hl(u),(d.hostBindings!==null||d.hostVars!==0||d.hostAttrs!==null)&&vv(d,f)}}finally{Qt(-1),hl(l)}}function vv(e,n){e.hostBindings!==null&&e.hostBindings(1,n)}function Cv(e,n){let t=e.directiveRegistry,i=null,o=null;if(t)for(let r=0;r<t.length;r++){let l=t[r];if(f0(n,l.selectors,!1))if(i||(i=[]),Ft(l))if(l.findHostDirectiveDefs!==null){let u=[];o=o||new Map,l.findHostDirectiveDefs(l,u,o),i.unshift(...u,l);let d=u.length;Il(e,n,d)}else i.unshift(l),Il(e,n,0);else o=o||new Map,l.findHostDirectiveDefs?.(l,i,o),i.push(l)}return i===null?null:[i,o]}function Il(e,n,t){n.componentOffset=t,(e.components??=[]).push(n.index)}function bv(e,n,t){if(n){let i=e.localNames=[];for(let o=0;o<n.length;o+=2){let r=t[n[o+1]];if(r==null)throw new R(-301,!1);i.push(n[o],r)}}}function _v(e,n,t){if(t){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)t[n.exportAs[i]]=e;Ft(n)&&(t[""]=e)}}function Mv(e,n,t){e.flags|=1,e.directiveStart=n,e.directiveEnd=n+t,e.providerIndexes=n}function wv(e,n,t,i,o){e.data[i]=o;let r=o.factory||(o.factory=Nn(o.type,!0)),l=new Kt(r,Ft(o),ae);e.blueprint[i]=l,t[i]=l,mv(e,n,i,Bf(e,t,o.hostVars,qn),o)}function Dv(e,n,t){let i=$e(n,e),o=$f(t),r=e[ft].rendererFactory,l=16;t.signals?l=4096:t.onPush&&(l=64);let u=Ro(e,Lo(e,o,null,l,i,n,null,r.createRenderer(i,t),null,null,null));e[n.index]=u}function Ev(e,n,t,i,o,r){let l=$e(e,n);Sv(n[ye],l,r,e.value,t,i,o)}function Sv(e,n,t,i,o,r,l){if(r==null)e.removeAttribute(n,o,t);else{let u=l==null?Yl(r):l(r,i||"",o);e.setAttribute(n,o,u,t)}}function xv(e,n,t,i,o,r){let l=r[n];if(l!==null)for(let u=0;u<l.length;){let d=l[u++],f=l[u++],v=l[u++],C=l[u++];jf(i,t,d,f,v,C)}}function Iv(e,n,t){let i=null,o=0;for(;o<t.length;){let r=t[o];if(r===0){o+=4;continue}else if(r===5){o+=2;continue}if(typeof r=="number")break;if(e.hasOwnProperty(r)){i===null&&(i=[]);let l=e[r];for(let u=0;u<l.length;u+=3)if(l[u]===n){i.push(r,l[u+1],l[u+2],t[o+1]);break}}o+=2}return i}function Qf(e,n,t,i){return[e,!0,0,n,null,i,null,t,null,null]}function Kf(e,n){let t=e.contentQueries;if(t!==null){let i=ee(null);try{for(let o=0;o<t.length;o+=2){let r=t[o],l=t[o+1];if(l!==-1){let u=e.data[l];Jp(r),u.contentQueries(2,n[l],l)}}}finally{ee(i)}}}function Ro(e,n){return e[Di]?e[Rd][Qe]=n:e[Di]=n,e[Rd]=n,n}function Tl(e,n,t){Jp(0);let i=ee(null);try{n(e,t)}finally{ee(i)}}function Tv(e){return e[io]??=[]}function Pv(e){return e.cleanup??=[]}function Jf(e,n){let t=e[Rn],i=t?t.get(ht,null):null;i&&i.handleError(n)}function Dc(e,n,t,i,o){for(let r=0;r<t.length;){let l=t[r++],u=t[r++],d=t[r++],f=n[l],v=e.data[l];jf(v,f,i,u,d,o)}}function Ov(e,n,t){let i=Up(n,e);Wy(e[ye],i,t)}function Nv(e,n){let t=Vt(n,e),i=t[K];Av(i,t);let o=t[vt];o!==null&&t[no]===null&&(t[no]=yc(o,t[Rn])),Ec(i,t,t[pt])}function Av(e,n){for(let t=n.length;t<e.blueprint.length;t++)n.push(e.blueprint[t])}function Ec(e,n,t){rc(n);try{let i=e.viewQuery;i!==null&&Tl(1,i,t);let o=e.template;o!==null&&Wf(e,n,o,1,t),e.firstCreatePass&&(e.firstCreatePass=!1),n[Vn]?.finishViewCreation(e),e.staticContentQueries&&Kf(e,n),e.staticViewQueries&&Tl(2,e.viewQuery,t);let r=e.components;r!==null&&Lv(n,r)}catch(i){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),i}finally{n[H]&=-5,oc()}}function Lv(e,n){for(let t=0;t<n.length;t++)Nv(e,n[t])}function Fv(e,n,t,i){let o=ee(null);try{let r=n.tView,u=e[H]&4096?4096:16,d=Lo(e,r,t,u,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),f=e[n.index];d[kn]=f;let v=e[Vn];return v!==null&&(d[Vn]=v.createEmbeddedView(r)),Ec(r,d,t),d}finally{ee(o)}}function Jd(e,n){return!n||n.firstChild===null||bf(e)}function Rv(e,n,t,i=!0){let o=n[K];if($y(o,n,e,t),i){let l=xl(t,e),u=n[ye],d=Af(u,e[Zt]);d!==null&&Hy(o,e[Je],u,n,d,l)}let r=n[no];r!==null&&r.firstChild!==null&&(r.firstChild=null)}function mo(e,n,t,i,o=!1){for(;t!==null;){if(t.type===128){t=o?t.projectionNext:t.next;continue}let r=n[t.index];r!==null&&i.push(ot(r)),Ct(r)&&kv(r,i);let l=t.type;if(l&8)mo(e,n,t.child,i);else if(l&32){let u=Cc(t,n),d;for(;d=u();)i.push(d)}else if(l&16){let u=Lf(n,t);if(Array.isArray(u))i.push(...u);else{let d=Yt(n[rt]);mo(d[K],d,u,i,!0)}}t=o?t.projectionNext:t.next}return i}function kv(e,n){for(let t=ze;t<e.length;t++){let i=e[t],o=i[K].firstChild;o!==null&&mo(i[K],i,o,n)}e[Zt]!==e[vt]&&n.push(e[Zt])}var Xf=[];function Vv(e){return e[He]??jv(e)}function jv(e){let n=Xf.pop()??Object.create(Wv);return n.lView=e,n}function Bv(e){e.lView[He]!==e&&(e.lView=null,Xf.push(e))}var Wv=J(A({},hi),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{Po(e.lView)},consumerOnSignalRead(){this.lView[He]=this}});function Uv(e){let n=e[He]??Object.create(Hv);return n.lView=e,n}var Hv=J(A({},hi),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{let n=Yt(e.lView);for(;n&&!eh(n[K]);)n=Yt(n);n&&$p(n)},consumerOnSignalRead(){this.lView[He]=this}});function eh(e){return e.type!==2}var zv=100;function th(e,n=!0,t=0){let i=e[ft],o=i.rendererFactory,r=!1;r||o.begin?.();try{$v(e,t)}catch(l){throw n&&Jf(e,l),l}finally{r||(o.end?.(),i.inlineEffectRunner?.flush())}}function $v(e,n){let t=Kp();try{Vd(!0),Pl(e,n);let i=0;for(;To(e);){if(i===zv)throw new R(103,!1);i++,Pl(e,1)}}finally{Vd(t)}}function Gv(e,n,t,i){let o=n[H];if((o&256)===256)return;let r=!1,l=!1;!r&&n[ft].inlineEffectRunner?.flush(),rc(n);let u=!0,d=null,f=null;r||(eh(e)?(f=Vv(n),d=yr(f)):Uu()===null?(u=!1,f=Uv(n),d=yr(f)):n[He]&&(xa(n[He]),n[He]=null));try{zp(n),Q0(e.bindingStartIndex),t!==null&&Wf(e,n,t,2,i);let v=(o&3)===3;if(!r)if(v){let b=e.preOrderCheckHooks;b!==null&&Zr(n,b,null)}else{let b=e.preOrderHooks;b!==null&&Yr(n,b,0,null),Za(n,0)}if(l||qv(n),nh(n,0),e.contentQueries!==null&&Kf(e,n),!r)if(v){let b=e.contentCheckHooks;b!==null&&Zr(n,b)}else{let b=e.contentHooks;b!==null&&Yr(n,b,1),Za(n,1)}ov(e,n);let C=e.components;C!==null&&rh(n,C,0);let O=e.viewQuery;if(O!==null&&Tl(2,O,i),!r)if(v){let b=e.viewCheckHooks;b!==null&&Zr(n,b)}else{let b=e.viewHooks;b!==null&&Yr(n,b,2),Za(n,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),n[qa]){for(let b of n[qa])b();n[qa]=null}r||(n[H]&=-73)}catch(v){throw r||Po(n),v}finally{f!==null&&(Ea(f,d),u&&Bv(f)),oc()}}function nh(e,n){for(let t=Mf(e);t!==null;t=wf(t))for(let i=ze;i<t.length;i++){let o=t[i];ih(o,n)}}function qv(e){for(let n=Mf(e);n!==null;n=wf(n)){if(!(n[H]&so.HasTransplantedViews))continue;let t=n[oo];for(let i=0;i<t.length;i++){let o=t[i];$p(o)}}}function Zv(e,n,t){let i=Vt(n,e);ih(i,t)}function ih(e,n){ic(e)&&Pl(e,n)}function Pl(e,n){let i=e[K],o=e[H],r=e[He],l=!!(n===0&&o&16);if(l||=!!(o&64&&n===0),l||=!!(o&1024),l||=!!(r?.dirty&&Sa(r)),l||=!1,r&&(r.dirty=!1),e[H]&=-9217,l)Gv(i,e,i.template,e[pt]);else if(o&8192){nh(e,1);let u=i.components;u!==null&&rh(e,u,1)}}function rh(e,n,t){for(let i=0;i<n.length;i++)Zv(e,n[i],t)}function Sc(e,n){let t=Kp()?64:1088;for(e[ft].changeDetectionScheduler?.notify(n);e;){e[H]|=t;let i=Yt(e);if(dl(e)&&!i)return e;e=i}return null}var Xt=class{get rootNodes(){let n=this._lView,t=n[K];return mo(t,n,t.firstChild,[])}constructor(n,t,i=!0){this._lView=n,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[pt]}set context(n){this._lView[pt]=n}get destroyed(){return(this._lView[H]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Ee];if(Ct(n)){let t=n[ro],i=t?t.indexOf(this):-1;i>-1&&(Sl(n,i),eo(t,i))}this._attachedToViewContainer=!1}Of(this._lView[K],this._lView)}onDestroy(n){Gp(this._lView,n)}markForCheck(){Sc(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[H]&=-129}reattach(){fl(this._lView),this._lView[H]|=128}detectChanges(){this._lView[H]|=1024,th(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new R(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=dl(this._lView),t=this._lView[kn];t!==null&&!n&&bc(t,this._lView),Tf(this._lView[K],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new R(902,!1);this._appRef=n;let t=dl(this._lView),i=this._lView[kn];i!==null&&!t&&Pf(i,this._lView),fl(this._lView)}},xc=(()=>{class e{static{this.__NG_ELEMENT_ID__=Kv}}return e})(),Yv=xc,Qv=class extends Yv{constructor(n,t,i){super(),this._declarationLView=n,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(n,t){return this.createEmbeddedViewImpl(n,t)}createEmbeddedViewImpl(n,t,i){let o=Fv(this._declarationLView,this._declarationTContainer,n,{embeddedViewInjector:t,dehydratedView:i});return new Xt(o)}};function Kv(){return Jv(Pe(),ue())}function Jv(e,n){return e.type&4?new Qv(n,e,No(e,n)):null}var CT=new RegExp(`^(\\d+)*(${Fy}|${Ly})*(.*)`);var Xv=()=>null;function Xd(e,n){return Xv(e,n)}var Bn=class{},ko=new V("",{providedIn:"root",factory:()=>!1});var oh=new V(""),sh=new V(""),Ol=class{},go=class{};function eC(e){let n=Error(`No component factory found for ${Te(e)}.`);return n[tC]=e,n}var tC="ngComponent";var Nl=class{resolveComponentFactory(n){throw eC(n)}},Wn=class{static{this.NULL=new Nl}},Un=class{},Zn=(()=>{class e{constructor(){this.destroyNode=null}static{this.__NG_ELEMENT_ID__=()=>nC()}}return e})();function nC(){let e=ue(),n=Pe(),t=Vt(n.index,e);return(Ot(t)?t:e)[ye]}var iC=(()=>{class e{static{this.\u0275prov=j({token:e,providedIn:"root",factory:()=>null})}}return e})();function Al(e,n,t){let i=t?e.styles:null,o=t?e.classes:null,r=0;if(n!==null)for(let l=0;l<n.length;l++){let u=n[l];if(typeof u=="number")r=u;else if(r==1)o=Sd(o,u);else if(r==2){let d=u,f=n[++l];i=Sd(i,d+": "+f+";")}}t?e.styles=i:e.stylesWithoutHost=i,t?e.classes=o:e.classesWithoutHost=o}var yo=class extends Wn{constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let t=At(n);return new Hn(t,this.ngModule)}};function ep(e,n){let t=[];for(let i in e){if(!e.hasOwnProperty(i))continue;let o=e[i];if(o===void 0)continue;let r=Array.isArray(o),l=r?o[0]:o,u=r?o[1]:Nt.None;n?t.push({propName:l,templateName:i,isSignal:(u&Nt.SignalBased)!==0}):t.push({propName:l,templateName:i})}return t}function rC(e){let n=e.toLowerCase();return n==="svg"?V0:n==="math"?j0:null}var Hn=class extends go{get inputs(){let n=this.componentDef,t=n.inputTransforms,i=ep(n.inputs,!0);if(t!==null)for(let o of i)t.hasOwnProperty(o.propName)&&(o.transform=t[o.propName]);return i}get outputs(){return ep(this.componentDef.outputs,!1)}constructor(n,t){super(),this.componentDef=n,this.ngModule=t,this.componentType=n.type,this.selector=y0(n.selectors),this.ngContentSelectors=n.ngContentSelectors?n.ngContentSelectors:[],this.isBoundToModule=!!t}create(n,t,i,o){let r=ee(null);try{o=o||this.ngModule;let l=o instanceof Fe?o:o?.injector;l&&this.componentDef.getStandaloneInjector!==null&&(l=this.componentDef.getStandaloneInjector(l)||l);let u=l?new ml(n,l):n,d=u.get(Un,null);if(d===null)throw new R(407,!1);let f=u.get(iC,null),v=u.get(Bn,null),C={rendererFactory:d,sanitizer:f,inlineEffectRunner:null,changeDetectionScheduler:v},O=d.createRenderer(null,this.componentDef),b=this.componentDef.selectors[0][0]||"div",L=i?lv(O,i,this.componentDef.encapsulation,u):If(O,b,rC(b)),Z=512;this.componentDef.signals?Z|=4096:this.componentDef.onPush||(Z|=16);let ie=null;L!==null&&(ie=yc(L,u,!0));let ne=wc(0,null,null,1,0,null,null,null,null,null,null),Se=Lo(null,ne,null,Z,null,null,C,O,u,null,ie);rc(Se);let xe,qe,fn=null;try{let Ne=this.componentDef,hn,_a=null;Ne.findHostDirectiveDefs?(hn=[],_a=new Map,Ne.findHostDirectiveDefs(Ne,hn,_a),hn.push(Ne)):hn=[Ne];let ig=oC(Se,L);fn=sC(ig,L,Ne,hn,Se,C,O),qe=Hp(ne,Lt),L&&cC(O,Ne,L,i),t!==void 0&&uC(qe,this.ngContentSelectors,t),xe=lC(fn,Ne,hn,_a,Se,[dC]),Ec(ne,Se,null)}catch(Ne){throw fn!==null&&wl(fn),wl(Se),Ne}finally{oc()}return new Ll(this.componentType,xe,No(qe,Se),Se,qe)}finally{ee(r)}}},Ll=class extends Ol{constructor(n,t,i,o,r){super(),this.location=i,this._rootLView=o,this._tNode=r,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new Xt(o,void 0,!1),this.componentType=n}setInput(n,t){let i=this._tNode.inputs,o;if(i!==null&&(o=i[n])){if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),t))return;let r=this._rootLView;Dc(r[K],r,o,n,t),this.previousInputValues.set(n,t);let l=Vt(this._tNode.index,r);Sc(l,1)}}get injector(){return new qt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function oC(e,n){let t=e[K],i=Lt;return e[i]=n,Fo(t,i,2,"#host",null)}function sC(e,n,t,i,o,r,l){let u=o[K];aC(i,e,n,l);let d=null;n!==null&&(d=yc(n,o[Rn]));let f=r.rendererFactory.createRenderer(n,t),v=16;t.signals?v=4096:t.onPush&&(v=64);let C=Lo(o,$f(t),null,v,o[e.index],e,r,f,null,null,d);return u.firstCreatePass&&Il(u,e,i.length-1),Ro(o,C),o[e.index]=C}function aC(e,n,t,i){for(let o of e)n.mergedAttrs=Mi(n.mergedAttrs,o.hostAttrs);n.mergedAttrs!==null&&(Al(n,n.mergedAttrs,!0),t!==null&&Rf(i,t,n))}function lC(e,n,t,i,o,r){let l=Pe(),u=o[K],d=$e(l,o);Zf(u,o,l,t,null,i);for(let v=0;v<t.length;v++){let C=l.directiveStart+v,O=jn(o,u,C,l);Jt(O,o)}Yf(u,o,l),d&&Jt(d,o);let f=jn(o,u,l.directiveStart+l.componentOffset,l);if(e[pt]=o[pt]=f,r!==null)for(let v of r)v(f,n);return Uf(u,l,o),f}function cC(e,n,t,i){if(i)al(e,t,["ng-version","18.2.7"]);else{let{attrs:o,classes:r}=v0(n.selectors[0]);o&&al(e,t,o),r&&r.length>0&&Ff(e,t,r.join(" "))}}function uC(e,n,t){let i=e.projection=[];for(let o=0;o<n.length;o++){let r=t[o];i.push(r!=null?Array.from(r):null)}}function dC(){let e=Pe();cc(ue()[K],e)}var Oi=(()=>{class e{static{this.__NG_ELEMENT_ID__=pC}}return e})();function pC(){let e=Pe();return hC(e,ue())}var fC=Oi,ah=class extends fC{constructor(n,t,i){super(),this._lContainer=n,this._hostTNode=t,this._hostLView=i}get element(){return No(this._hostTNode,this._hostLView)}get injector(){return new qt(this._hostTNode,this._hostLView)}get parentInjector(){let n=uc(this._hostTNode,this._hostLView);if(af(n)){let t=co(n,this._hostLView),i=lo(n),o=t[K].data[i+8];return new qt(o,t)}else return new qt(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let t=tp(this._lContainer);return t!==null&&t[n]||null}get length(){return this._lContainer.length-ze}createEmbeddedView(n,t,i){let o,r;typeof i=="number"?o=i:i!=null&&(o=i.index,r=i.injector);let l=Xd(this._lContainer,n.ssrId),u=n.createEmbeddedViewImpl(t||{},r,l);return this.insertImpl(u,o,Jd(this._hostTNode,l)),u}createComponent(n,t,i,o,r){let l=n&&!L0(n),u;if(l)u=t;else{let L=t||{};u=L.index,i=L.injector,o=L.projectableNodes,r=L.environmentInjector||L.ngModuleRef}let d=l?n:new Hn(At(n)),f=i||this.parentInjector;if(!r&&d.ngModule==null){let Z=(l?f:this.parentInjector).get(Fe,null);Z&&(r=Z)}let v=At(d.componentType??{}),C=Xd(this._lContainer,v?.id??null),O=C?.firstChild??null,b=d.create(f,o,O,r);return this.insertImpl(b.hostView,u,Jd(this._hostTNode,C)),b}insert(n,t){return this.insertImpl(n,t,!0)}insertImpl(n,t,i){let o=n._lView;if(B0(o)){let u=this.indexOf(n);if(u!==-1)this.detach(u);else{let d=o[Ee],f=new ah(d,d[Je],d[Ee]);f.detach(f.indexOf(n))}}let r=this._adjustIndex(t),l=this._lContainer;return Rv(l,o,r,i),n.attachToViewContainerRef(),Cp(Xa(l),r,n),n}move(n,t){return this.insert(n,t)}indexOf(n){let t=tp(this._lContainer);return t!==null?t.indexOf(n):-1}remove(n){let t=this._adjustIndex(n,-1),i=Sl(this._lContainer,t);i&&(eo(Xa(this._lContainer),t),Of(i[K],i))}detach(n){let t=this._adjustIndex(n,-1),i=Sl(this._lContainer,t);return i&&eo(Xa(this._lContainer),t)!=null?new Xt(i):null}_adjustIndex(n,t=0){return n??this.length+t}};function tp(e){return e[ro]}function Xa(e){return e[ro]||(e[ro]=[])}function hC(e,n){let t,i=n[e.index];return Ct(i)?t=i:(t=Qf(i,n,null,e),n[e.index]=t,Ro(n,t)),gC(t,n,e,i),new ah(t,e,n)}function mC(e,n){let t=e[ye],i=t.createComment(""),o=$e(n,e),r=Af(t,o);return ho(t,r,i,Qy(t,o),!1),i}var gC=CC,yC=()=>!1;function vC(e,n,t){return yC(e,n,t)}function CC(e,n,t,i){if(e[Zt])return;let o;t.type&8?o=ot(i):o=mC(n,t),e[Zt]=o}var np=new Set;function Yn(e){np.has(e)||(np.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}function bC(e){return typeof e=="function"&&e[ct]!==void 0}function Ni(e,n){Yn("NgSignals");let t=Xu(e),i=t[ct];return n?.equal&&(i.equal=n.equal),t.set=o=>Ia(i,o),t.update=o=>ed(i,o),t.asReadonly=_C.bind(t),t}function _C(){let e=this[ct];if(e.readonlyFn===void 0){let n=()=>this();n[ct]=e,e.readonlyFn=n}return e.readonlyFn}function lh(e){return bC(e)&&typeof e.set=="function"}function MC(e){return Object.getPrototypeOf(e.prototype).constructor}function at(e){let n=MC(e.type),t=!0,i=[e];for(;n;){let o;if(Ft(e))o=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new R(903,!1);o=n.\u0275dir}if(o){if(t){i.push(o);let l=e;l.inputs=zr(e.inputs),l.inputTransforms=zr(e.inputTransforms),l.declaredInputs=zr(e.declaredInputs),l.outputs=zr(e.outputs);let u=o.hostBindings;u&&xC(e,u);let d=o.viewQuery,f=o.contentQueries;if(d&&EC(e,d),f&&SC(e,f),wC(e,o),Vg(e.outputs,o.outputs),Ft(o)&&o.data.animation){let v=e.data;v.animation=(v.animation||[]).concat(o.data.animation)}}let r=o.features;if(r)for(let l=0;l<r.length;l++){let u=r[l];u&&u.ngInherit&&u(e),u===at&&(t=!1)}}n=Object.getPrototypeOf(n)}DC(i)}function wC(e,n){for(let t in n.inputs){if(!n.inputs.hasOwnProperty(t)||e.inputs.hasOwnProperty(t))continue;let i=n.inputs[t];if(i!==void 0&&(e.inputs[t]=i,e.declaredInputs[t]=n.declaredInputs[t],n.inputTransforms!==null)){let o=Array.isArray(i)?i[0]:i;if(!n.inputTransforms.hasOwnProperty(o))continue;e.inputTransforms??={},e.inputTransforms[o]=n.inputTransforms[o]}}}function DC(e){let n=0,t=null;for(let i=e.length-1;i>=0;i--){let o=e[i];o.hostVars=n+=o.hostVars,o.hostAttrs=Mi(o.hostAttrs,t=Mi(t,o.hostAttrs))}}function zr(e){return e===An?{}:e===Ue?[]:e}function EC(e,n){let t=e.viewQuery;t?e.viewQuery=(i,o)=>{n(i,o),t(i,o)}:e.viewQuery=n}function SC(e,n){let t=e.contentQueries;t?e.contentQueries=(i,o,r)=>{n(i,o,r),t(i,o,r)}:e.contentQueries=n}function xC(e,n){let t=e.hostBindings;t?e.hostBindings=(i,o)=>{n(i,o),t(i,o)}:e.hostBindings=n}var Rt=class{},Ei=class{};var Fl=class extends Rt{constructor(n,t,i,o=!0){super(),this.ngModuleType=n,this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new yo(this);let r=xp(n);this._bootstrapComponents=xf(r.bootstrap),this._r3Injector=gf(n,t,[{provide:Rt,useValue:this},{provide:Wn,useValue:this.componentFactoryResolver},...i],Te(n),new Set(["environment"])),o&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Rl=class extends Ei{constructor(n){super(),this.moduleType=n}create(n){return new Fl(this.moduleType,n,[])}};var vo=class extends Rt{constructor(n){super(),this.componentFactoryResolver=new yo(this),this.instance=null;let t=new wi([...n.providers,{provide:Rt,useValue:this},{provide:Wn,useValue:this.componentFactoryResolver}],n.parent||tc(),n.debugName,new Set(["environment"]));this.injector=t,n.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Vo(e,n,t=null){return new vo({providers:e,parent:n,debugName:t,runEnvironmentInitializers:!0}).injector}function ch(e){return TC(e)?Array.isArray(e)||!(e instanceof Map)&&Symbol.iterator in e:!1}function IC(e,n){if(Array.isArray(e))for(let t=0;t<e.length;t++)n(e[t]);else{let t=e[Symbol.iterator](),i;for(;!(i=t.next()).done;)n(i.value)}}function TC(e){return e!==null&&(typeof e=="function"||typeof e=="object")}function Ai(e,n,t){let i=e[n];return Object.is(i,t)?!1:(e[n]=t,!0)}function PC(e){return(e.flags&32)===32}function OC(e,n,t,i,o,r,l,u,d){let f=n.consts,v=Fo(n,e,4,l||null,u||null);qf(n,t,v,ao(f,d)),cc(n,v);let C=v.tView=wc(2,v,i,o,r,n.directiveRegistry,n.pipeRegistry,null,n.schemas,f,null);return n.queries!==null&&(n.queries.template(n,v),C.queries=n.queries.embeddedTView(v)),v}function NC(e,n,t,i,o,r,l,u,d,f){let v=t+Lt,C=n.firstCreatePass?OC(v,n,e,i,o,r,l,u,d):n.data[v];Pi(C,!1);let O=AC(n,e,C,t);ac()&&_c(n,e,O,C),Jt(O,e);let b=Qf(O,e,O,C);return e[v]=b,Ro(e,b),vC(b,C,e),nc(C)&&Hf(n,e,C),d!=null&&zf(e,C,f),C}function E(e,n,t,i,o,r,l,u){let d=ue(),f=Re(),v=ao(f.consts,r);return NC(d,f,e,n,t,i,o,v,l,u),E}var AC=LC;function LC(e,n,t,i){return lc(!0),n[ye].createComment("")}var Tn=function(e){return e[e.EarlyRead=0]="EarlyRead",e[e.Write=1]="Write",e[e.MixedReadWrite=2]="MixedReadWrite",e[e.Read=3]="Read",e}(Tn||{}),uh=(()=>{class e{constructor(){this.impl=null}execute(){this.impl?.execute()}static{this.\u0275prov=j({token:e,providedIn:"root",factory:()=>new e})}}return e})(),kl=class e{constructor(){this.ngZone=N(de),this.scheduler=N(Bn),this.errorHandler=N(ht,{optional:!0}),this.sequences=new Set,this.deferredRegistrations=new Set,this.executing=!1}static{this.PHASES=[Tn.EarlyRead,Tn.Write,Tn.MixedReadWrite,Tn.Read]}execute(){this.executing=!0;for(let n of e.PHASES)for(let t of this.sequences)if(!(t.erroredOrDestroyed||!t.hooks[n]))try{t.pipelinedValue=this.ngZone.runOutsideAngular(()=>t.hooks[n](t.pipelinedValue))}catch(i){t.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(let n of this.sequences)n.afterRun(),n.once&&this.sequences.delete(n);for(let n of this.deferredRegistrations)this.sequences.add(n);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear()}register(n){this.executing?this.deferredRegistrations.add(n):(this.sequences.add(n),this.scheduler.notify(6))}unregister(n){this.executing&&this.sequences.has(n)?(n.erroredOrDestroyed=!0,n.pipelinedValue=void 0,n.once=!0):(this.sequences.delete(n),this.deferredRegistrations.delete(n))}static{this.\u0275prov=j({token:e,providedIn:"root",factory:()=>new e})}},Vl=class{constructor(n,t,i,o){this.impl=n,this.hooks=t,this.once=i,this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.()}};function Ic(e,n){!n?.injector&&A0(Ic);let t=n?.injector??N(Ke);return Vy(t)?(Yn("NgAfterNextRender"),RC(e,t,n,!0)):kC}function FC(e,n){if(e instanceof Function){let t=[void 0,void 0,void 0,void 0];return t[n]=e,t}else return[e.earlyRead,e.write,e.mixedReadWrite,e.read]}function RC(e,n,t,i){let o=n.get(uh);o.impl??=n.get(kl);let r=t?.phase??Tn.MixedReadWrite,l=t?.manualCleanup!==!0?n.get(dc):null,u=new Vl(o.impl,FC(e,r),i,l);return o.impl.register(u),u}var kC={destroy(){}};function jo(e,n,t,i){let o=ue(),r=Oo();if(Ai(o,r,n)){let l=Re(),u=sc();Ev(u,o,e,n,t,i)}return jo}function VC(e,n,t,i){return Ai(e,Oo(),t)?n+Yl(t)+i:qn}function $r(e,n){return e<<17|n<<2}function en(e){return e>>17&32767}function jC(e){return(e&2)==2}function BC(e,n){return e&131071|n<<17}function jl(e){return e|2}function zn(e){return(e&131068)>>2}function el(e,n){return e&-131069|n<<2}function WC(e){return(e&1)===1}function Bl(e){return e|1}function UC(e,n,t,i,o,r){let l=r?n.classBindings:n.styleBindings,u=en(l),d=zn(l);e[i]=t;let f=!1,v;if(Array.isArray(t)){let C=t;v=C[1],(v===null||Ii(C,v)>0)&&(f=!0)}else v=t;if(o)if(d!==0){let O=en(e[u+1]);e[i+1]=$r(O,u),O!==0&&(e[O+1]=el(e[O+1],i)),e[u+1]=BC(e[u+1],i)}else e[i+1]=$r(u,0),u!==0&&(e[u+1]=el(e[u+1],i)),u=i;else e[i+1]=$r(d,0),u===0?u=i:e[d+1]=el(e[d+1],i),d=i;f&&(e[i+1]=jl(e[i+1])),ip(e,v,i,!0),ip(e,v,i,!1),HC(n,v,e,i,r),l=$r(u,d),r?n.classBindings=l:n.styleBindings=l}function HC(e,n,t,i,o){let r=o?e.residualClasses:e.residualStyles;r!=null&&typeof n=="string"&&Ii(r,n)>=0&&(t[i+1]=Bl(t[i+1]))}function ip(e,n,t,i){let o=e[t+1],r=n===null,l=i?en(o):zn(o),u=!1;for(;l!==0&&(u===!1||r);){let d=e[l],f=e[l+1];zC(d,n)&&(u=!0,e[l+1]=i?Bl(f):jl(f)),l=i?en(f):zn(f)}u&&(e[t+1]=i?jl(o):Bl(o))}function zC(e,n){return e===null||n==null||(Array.isArray(e)?e[1]:e)===n?!0:Array.isArray(e)&&typeof n=="string"?Ii(e,n)>=0:!1}function S(e,n,t){let i=ue(),o=Oo();if(Ai(i,o,n)){let r=Re(),l=sc();Gf(r,l,i,e,n,i[ye],t,!1)}return S}function rp(e,n,t,i,o){let r=n.inputs,l=o?"class":"style";Dc(e,t,r[l],l,i)}function Bo(e,n){return $C(e,n,null,!0),Bo}function $C(e,n,t,i){let o=ue(),r=Re(),l=K0(2);if(r.firstUpdatePass&&qC(r,e,l,i),n!==qn&&Ai(o,l,n)){let u=r.data[$n()];JC(r,u,o,o[ye],e,o[l+1]=XC(n,t),i,l)}}function GC(e,n){return n>=e.expandoStartIndex}function qC(e,n,t,i){let o=e.data;if(o[t+1]===null){let r=o[$n()],l=GC(e,t);eb(r,i)&&n===null&&!l&&(n=!1),n=ZC(o,r,n,i),UC(o,r,n,t,l,i)}}function ZC(e,n,t,i){let o=ty(e),r=i?n.residualClasses:n.residualStyles;if(o===null)(i?n.classBindings:n.styleBindings)===0&&(t=tl(null,e,n,t,i),t=Si(t,n.attrs,i),r=null);else{let l=n.directiveStylingLast;if(l===-1||e[l]!==o)if(t=tl(o,e,n,t,i),r===null){let d=YC(e,n,i);d!==void 0&&Array.isArray(d)&&(d=tl(null,e,n,d[1],i),d=Si(d,n.attrs,i),QC(e,n,i,d))}else r=KC(e,n,i)}return r!==void 0&&(i?n.residualClasses=r:n.residualStyles=r),t}function YC(e,n,t){let i=t?n.classBindings:n.styleBindings;if(zn(i)!==0)return e[en(i)]}function QC(e,n,t,i){let o=t?n.classBindings:n.styleBindings;e[en(o)]=i}function KC(e,n,t){let i,o=n.directiveEnd;for(let r=1+n.directiveStylingLast;r<o;r++){let l=e[r].hostAttrs;i=Si(i,l,t)}return Si(i,n.attrs,t)}function tl(e,n,t,i,o){let r=null,l=t.directiveEnd,u=t.directiveStylingLast;for(u===-1?u=t.directiveStart:u++;u<l&&(r=n[u],i=Si(i,r.hostAttrs,o),r!==e);)u++;return e!==null&&(t.directiveStylingLast=u),i}function Si(e,n,t){let i=t?1:2,o=-1;if(n!==null)for(let r=0;r<n.length;r++){let l=n[r];typeof l=="number"?o=l:o===i&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),r0(e,l,t?!0:n[++r]))}return e===void 0?null:e}function JC(e,n,t,i,o,r,l,u){if(!(n.type&3))return;let d=e.data,f=d[u+1],v=WC(f)?op(d,n,t,o,zn(f),l):void 0;if(!Co(v)){Co(r)||jC(f)&&(r=op(d,null,t,o,u,l));let C=Up($n(),t);iv(i,l,C,o,r)}}function op(e,n,t,i,o,r){let l=n===null,u;for(;o>0;){let d=e[o],f=Array.isArray(d),v=f?d[1]:d,C=v===null,O=t[o+1];O===qn&&(O=C?Ue:void 0);let b=C?$a(O,i):v===i?O:void 0;if(f&&!Co(b)&&(b=$a(d,i)),Co(b)&&(u=b,l))return u;let L=e[o+1];o=l?en(L):zn(L)}if(n!==null){let d=r?n.residualClasses:n.residualStyles;d!=null&&(u=$a(d,i))}return u}function Co(e){return e!==void 0}function XC(e,n){return e==null||e===""||(typeof n=="string"?e=e+n:typeof e=="object"&&(e=Te(vc(e)))),e}function eb(e,n){return(e.flags&(n?8:16))!==0}function tb(e,n,t,i,o,r){let l=n.consts,u=ao(l,o),d=Fo(n,e,2,i,u);return qf(n,t,d,ao(l,r)),d.attrs!==null&&Al(d,d.attrs,!1),d.mergedAttrs!==null&&Al(d,d.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,d),d}function s(e,n,t,i){let o=ue(),r=Re(),l=Lt+e,u=o[ye],d=r.firstCreatePass?tb(l,r,o,n,t,i):r.data[l],f=nb(r,o,d,u,n,e);o[l]=f;let v=nc(d);return Pi(d,!0),Rf(u,f,d),!PC(d)&&ac()&&_c(r,o,f,d),U0()===0&&Jt(f,o),H0(),v&&(Hf(r,o,d),Uf(r,d,o)),i!==null&&zf(o,d),s}function a(){let e=Pe();Qp()?Y0():(e=e.parent,Pi(e,!1));let n=e;G0(n)&&q0(),z0();let t=Re();return t.firstCreatePass&&(cc(t,e),kp(e)&&t.queries.elementEnd(e)),n.classesWithoutHost!=null&&ay(n)&&rp(t,n,ue(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&ly(n)&&rp(t,n,ue(),n.stylesWithoutHost,!1),a}function le(e,n,t,i){return s(e,n,t,i),a(),le}var nb=(e,n,t,i,o,r)=>(lc(!0),If(i,o,iy()));var bo="en-US";var ib=bo;function rb(e){typeof e=="string"&&(ib=e.toLowerCase().replace(/_/g,"-"))}var ob=(e,n,t)=>{};function _(e,n,t,i){let o=ue(),r=Re(),l=Pe();return dh(r,o,o[ye],l,e,n,i),_}function sb(e,n,t,i){let o=e.cleanup;if(o!=null)for(let r=0;r<o.length-1;r+=2){let l=o[r];if(l===t&&o[r+1]===i){let u=n[io],d=o[r+2];return u.length>d?u[d]:null}typeof l=="string"&&(r+=2)}return null}function dh(e,n,t,i,o,r,l){let u=nc(i),f=e.firstCreatePass&&Pv(e),v=n[pt],C=Tv(n),O=!0;if(i.type&3||l){let Z=$e(i,n),ie=l?l(Z):Z,ne=C.length,Se=l?qe=>l(ot(qe[i.index])):i.index,xe=null;if(!l&&u&&(xe=sb(e,n,o,i.index)),xe!==null){let qe=xe.__ngLastListenerFn__||xe;qe.__ngNextListenerFn__=r,xe.__ngLastListenerFn__=r,O=!1}else{r=ap(i,n,v,r),ob(Z,o,r);let qe=t.listen(ie,o,r);C.push(r,qe),f&&f.push(o,Se,ne,ne+1)}}else r=ap(i,n,v,r);let b=i.outputs,L;if(O&&b!==null&&(L=b[o])){let Z=L.length;if(Z)for(let ie=0;ie<Z;ie+=2){let ne=L[ie],Se=L[ie+1],fn=n[ne][Se].subscribe(r),Ne=C.length;C.push(r,fn),f&&f.push(o,i.index,Ne,-(Ne+1))}}}function sp(e,n,t,i){let o=ee(null);try{return tt(6,n,t),t(i)!==!1}catch(r){return Jf(e,r),!1}finally{tt(7,n,t),ee(o)}}function ap(e,n,t,i){return function o(r){if(r===Function)return i;let l=e.componentOffset>-1?Vt(e.index,n):n;Sc(l,5);let u=sp(n,t,i,r),d=o.__ngNextListenerFn__;for(;d;)u=sp(n,t,d,r)&&u,d=d.__ngNextListenerFn__;return u}}function c(e,n=""){let t=ue(),i=Re(),o=e+Lt,r=i.firstCreatePass?Fo(i,o,1,n,null):i.data[o],l=ab(i,t,r,n,e);t[o]=l,ac()&&_c(i,t,l,r),Pi(r,!1)}var ab=(e,n,t,i,o)=>(lc(!0),By(n[ye],i));function y(e){return on("",e,""),y}function on(e,n,t){let i=ue(),o=VC(i,e,n,t);return o!==qn&&Ov(i,$n(),o),on}function h(e,n,t){lh(n)&&(n=n());let i=ue(),o=Oo();if(Ai(i,o,n)){let r=Re(),l=sc();Gf(r,l,i,e,n,i[ye],t,!1)}return h}function g(e,n){let t=lh(e);return t&&e.set(n),t}function m(e,n){let t=ue(),i=Re(),o=Pe();return dh(i,t,t[ye],o,e,n),m}function lb(e,n,t){let i=Re();if(i.firstCreatePass){let o=Ft(e);Wl(t,i.data,i.blueprint,o,!0),Wl(n,i.data,i.blueprint,o,!1)}}function Wl(e,n,t,i,o){if(e=De(e),Array.isArray(e))for(let r=0;r<e.length;r++)Wl(e[r],n,t,i,o);else{let r=Re(),l=ue(),u=Pe(),d=Fn(e)?e:De(e.provide),f=Ap(e),v=u.providerIndexes&1048575,C=u.directiveStart,O=u.providerIndexes>>20;if(Fn(e)||!e.multi){let b=new Kt(f,o,ae),L=il(d,n,o?v:v+O,C);L===-1?(yl(uo(u,l),r,d),nl(r,e,n.length),n.push(d),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),t.push(b),l.push(b)):(t[L]=b,l[L]=b)}else{let b=il(d,n,v+O,C),L=il(d,n,v,v+O),Z=b>=0&&t[b],ie=L>=0&&t[L];if(o&&!ie||!o&&!Z){yl(uo(u,l),r,d);let ne=db(o?ub:cb,t.length,o,i,f);!o&&ie&&(t[L].providerFactory=ne),nl(r,e,n.length,0),n.push(d),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),t.push(ne),l.push(ne)}else{let ne=ph(t[o?L:b],f,!o&&i);nl(r,e,b>-1?b:L,ne)}!o&&i&&ie&&t[L].componentProviders++}}}function nl(e,n,t,i){let o=Fn(n),r=S0(n);if(o||r){let d=(r?De(n.useClass):n).prototype.ngOnDestroy;if(d){let f=e.destroyHooks||(e.destroyHooks=[]);if(!o&&n.multi){let v=f.indexOf(t);v===-1?f.push(t,[i,d]):f[v+1].push(i,d)}else f.push(t,d)}}}function ph(e,n,t){return t&&e.componentProviders++,e.multi.push(n)-1}function il(e,n,t,i){for(let o=t;o<i;o++)if(n[o]===e)return o;return-1}function cb(e,n,t,i){return Ul(this.multi,[])}function ub(e,n,t,i){let o=this.multi,r;if(this.providerFactory){let l=this.providerFactory.componentProviders,u=jn(t,t[K],this.providerFactory.index,i);r=u.slice(0,l),Ul(o,r);for(let d=l;d<u.length;d++)r.push(u[d])}else r=[],Ul(o,r);return r}function Ul(e,n){for(let t=0;t<e.length;t++){let i=e[t];n.push(i())}return n}function db(e,n,t,i,o){let r=new Kt(e,t,ae);return r.multi=[],r.index=n,r.componentProviders=0,ph(r,o,i&&!t),r}function Qn(e,n=[]){return t=>{t.providersResolver=(i,o)=>lb(i,o?o(e):e,n)}}var pb=(()=>{class e{constructor(t){this._injector=t,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Pp(!1,t.type),o=i.length>0?Vo([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,o)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static{this.\u0275prov=j({token:e,providedIn:"environment",factory:()=>new e($(Fe))})}}return e})();function w(e){Yn("NgStandalone"),e.getStandaloneInjector=n=>n.get(pb).getOrCreateStandaloneInjector(e)}var Wo=(()=>{class e{log(t){console.log(t)}warn(t){console.warn(t)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"platform"})}}return e})();var fh=new V("");function sn(e){return!!e&&typeof e.then=="function"}function hh(e){return!!e&&typeof e.subscribe=="function"}var Uo=new V(""),mh=(()=>{class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i}),this.appInits=N(Uo,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let t=[];for(let o of this.appInits){let r=o();if(sn(r))t.push(r);else if(hh(r)){let l=new Promise((u,d)=>{r.subscribe({complete:u,error:d})});t.push(l)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(o=>{this.reject(o)}),t.length===0&&i(),this.initialized=!0}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ho=new V("");function fb(){Ju(()=>{throw new R(600,!1)})}function hb(e){return e.isBoundToModule}var mb=10;function gb(e,n,t){try{let i=t();return sn(i)?i.catch(o=>{throw n.runOutsideAngular(()=>e.handleError(o)),o}):i}catch(i){throw n.runOutsideAngular(()=>e.handleError(i)),i}}var an=(()=>{class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=N(xy),this.afterRenderManager=N(uh),this.zonelessEnabled=N(ko),this.dirtyFlags=0,this.deferredDirtyFlags=0,this.externalTestViews=new Set,this.beforeRender=new be,this.afterTick=new be,this.componentTypes=[],this.components=[],this.isStable=N(Gn).hasPendingTasks.pipe(Y(t=>!t)),this._injector=N(Fe)}get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:o=>{o&&i()}})}).finally(()=>{t.unsubscribe()})}get injector(){return this._injector}bootstrap(t,i){let o=t instanceof go;if(!this._injector.get(mh).done){let O=!o&&Sp(t),b=!1;throw new R(405,b)}let l;o?l=t:l=this._injector.get(Wn).resolveComponentFactory(t),this.componentTypes.push(l.componentType);let u=hb(l)?void 0:this._injector.get(Rt),d=i||l.selector,f=l.create(Ke.NULL,[],d,u),v=f.location.nativeElement,C=f.injector.get(fh,null);return C?.registerApplication(v),f.onDestroy(()=>{this.detachView(f.hostView),Qr(this.components,f),C?.unregisterApplication(v)}),this._loadComponent(f),f}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){if(this._runningTick)throw new R(101,!1);let t=ee(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,ee(t),this.afterTick.next()}}synchronize(){let t=null;this._injector.destroyed||(t=this._injector.get(Un,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let i=0;for(;this.dirtyFlags!==0&&i++<mb;)this.synchronizeOnce(t)}synchronizeOnce(t){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8,this.beforeRender.next(i);for(let{_lView:o,notifyErrorHandler:r}of this._views)yb(o,r,i,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&7)return}else t?.begin?.(),t?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>To(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Qr(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);let i=this._injector.get(Ho,[]);[...this._bootstrapListeners,...i].forEach(o=>o(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Qr(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new R(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Qr(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function yb(e,n,t,i){if(!t&&!To(e))return;th(e,n,t&&!i?0:1)}var Hl=class{constructor(n,t){this.ngModuleFactory=n,this.componentFactories=t}},zo=(()=>{class e{compileModuleSync(t){return new Rl(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),o=xp(t),r=xf(o.declarations).reduce((l,u)=>{let d=At(u);return d&&l.push(new Hn(d)),l},[]);return new Hl(i,r)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var vb=(()=>{class e{constructor(){this.zone=N(de),this.changeDetectionScheduler=N(Bn),this.applicationRef=N(an)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Cb=new V("",{factory:()=>!1});function gh({ngZoneFactory:e,ignoreChangesOutsideZone:n,scheduleInRootZone:t}){return e??=()=>new de(J(A({},vh()),{scheduleInRootZone:t})),[{provide:de,useFactory:e},{provide:Ln,multi:!0,useFactory:()=>{let i=N(vb,{optional:!0});return()=>i.initialize()}},{provide:Ln,multi:!0,useFactory:()=>{let i=N(bb);return()=>{i.initialize()}}},n===!0?{provide:oh,useValue:!0}:[],{provide:sh,useValue:t??yf}]}function yh(e){let n=e?.ignoreChangesOutsideZone,t=e?.scheduleInRootZone,i=gh({ngZoneFactory:()=>{let o=vh(e);return o.scheduleInRootZone=t,o.shouldCoalesceEventChangeDetection&&Yn("NgZone_CoalesceEvent"),new de(o)},ignoreChangesOutsideZone:n,scheduleInRootZone:t});return Eo([{provide:Cb,useValue:!0},{provide:ko,useValue:!1},i])}function vh(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var bb=(()=>{class e{constructor(){this.subscription=new pe,this.initialized=!1,this.zone=N(de),this.pendingTasks=N(Gn)}initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{de.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{de.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var _b=(()=>{class e{constructor(){this.appRef=N(an),this.taskService=N(Gn),this.ngZone=N(de),this.zonelessEnabled=N(ko),this.disableScheduling=N(oh,{optional:!0})??!1,this.zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run,this.schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}],this.subscriptions=new pe,this.angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(fo):null,this.scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(N(sh,{optional:!0})??!1),this.cancelScheduledCallback=null,this.useMicrotaskScheduler=!1,this.runningTick=!1,this.pendingRenderTaskId=null,this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Ml||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 7:{this.appRef.deferredDirtyFlags|=8;break}case 9:case 8:case 6:case 10:default:this.appRef.dirtyFlags|=8}if(!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?zd:vf;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.disableScheduling||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(fo+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,zd(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Mb(){return typeof $localize<"u"&&$localize.locale||bo}var Tc=new V("",{providedIn:"root",factory:()=>N(Tc,q.Optional|q.SkipSelf)||Mb()});var Ch=new V("");function Gr(e){return!!e.platformInjector}function wb(e){let n=Gr(e)?e.r3Injector:e.moduleRef.injector,t=n.get(de);return t.run(()=>{Gr(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let i=n.get(ht,null),o;if(t.runOutsideAngular(()=>{o=t.onError.subscribe({next:r=>{i.handleError(r)}})}),Gr(e)){let r=()=>n.destroy(),l=e.platformInjector.get(Ch);l.add(r),n.onDestroy(()=>{o.unsubscribe(),l.delete(r)})}else e.moduleRef.onDestroy(()=>{Qr(e.allPlatformModules,e.moduleRef),o.unsubscribe()});return gb(i,t,()=>{let r=n.get(mh);return r.runInitializers(),r.donePromise.then(()=>{let l=n.get(Tc,bo);if(rb(l||bo),Gr(e)){let u=n.get(an);return e.rootComponent!==void 0&&u.bootstrap(e.rootComponent),u}else return Db(e.moduleRef,e.allPlatformModules),e.moduleRef})})})}function Db(e,n){let t=e.injector.get(an);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(e.instance.ngDoBootstrap)e.instance.ngDoBootstrap(t);else throw new R(-403,!1);n.push(e)}var Kr=null;function Eb(e=[],n){return Ke.create({name:n,providers:[{provide:So,useValue:"platform"},{provide:Ch,useValue:new Set([()=>Kr=null])},...e]})}function Sb(e=[]){if(Kr)return Kr;let n=Eb(e);return Kr=n,fb(),xb(n),n}function xb(e){e.get(mc,null)?.forEach(t=>t())}var ln=(()=>{class e{static{this.__NG_ELEMENT_ID__=Ib}}return e})();function Ib(e){return Tb(Pe(),ue(),(e&16)===16)}function Tb(e,n,t){if(Io(e)&&!t){let i=Vt(e.index,n);return new Xt(i,i)}else if(e.type&175){let i=n[rt];return new Xt(i,n)}return null}var zl=class{constructor(){}supports(n){return ch(n)}create(n){return new $l(n)}},Pb=(e,n)=>n,$l=class{constructor(n){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=n||Pb}forEachItem(n){let t;for(t=this._itHead;t!==null;t=t._next)n(t)}forEachOperation(n){let t=this._itHead,i=this._removalsHead,o=0,r=null;for(;t||i;){let l=!i||t&&t.currentIndex<lp(i,o,r)?t:i,u=lp(l,o,r),d=l.currentIndex;if(l===i)o--,i=i._nextRemoved;else if(t=t._next,l.previousIndex==null)o++;else{r||(r=[]);let f=u-o,v=d-o;if(f!=v){for(let O=0;O<f;O++){let b=O<r.length?r[O]:r[O]=0,L=b+O;v<=L&&L<f&&(r[O]=b+1)}let C=l.previousIndex;r[C]=v-f}}u!==d&&n(l,u,d)}}forEachPreviousItem(n){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)n(t)}forEachAddedItem(n){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)n(t)}forEachMovedItem(n){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)n(t)}forEachRemovedItem(n){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)n(t)}forEachIdentityChange(n){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)n(t)}diff(n){if(n==null&&(n=[]),!ch(n))throw new R(900,!1);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let t=this._itHead,i=!1,o,r,l;if(Array.isArray(n)){this.length=n.length;for(let u=0;u<this.length;u++)r=n[u],l=this._trackByFn(u,r),t===null||!Object.is(t.trackById,l)?(t=this._mismatch(t,r,l,u),i=!0):(i&&(t=this._verifyReinsertion(t,r,l,u)),Object.is(t.item,r)||this._addIdentityChange(t,r)),t=t._next}else o=0,IC(n,u=>{l=this._trackByFn(o,u),t===null||!Object.is(t.trackById,l)?(t=this._mismatch(t,u,l,o),i=!0):(i&&(t=this._verifyReinsertion(t,u,l,o)),Object.is(t.item,u)||this._addIdentityChange(t,u)),t=t._next,o++}),this.length=o;return this._truncate(t),this.collection=n,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;n!==null;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;n!==null;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,t,i,o){let r;return n===null?r=this._itTail:(r=n._prev,this._remove(n)),n=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),n!==null?(Object.is(n.item,t)||this._addIdentityChange(n,t),this._reinsertAfter(n,r,o)):(n=this._linkedRecords===null?null:this._linkedRecords.get(i,o),n!==null?(Object.is(n.item,t)||this._addIdentityChange(n,t),this._moveAfter(n,r,o)):n=this._addAfter(new Gl(t,i),r,o)),n}_verifyReinsertion(n,t,i,o){let r=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return r!==null?n=this._reinsertAfter(r,n._prev,o):n.currentIndex!=o&&(n.currentIndex=o,this._addToMoves(n,o)),n}_truncate(n){for(;n!==null;){let t=n._next;this._addToRemovals(this._unlink(n)),n=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(n);let o=n._prevRemoved,r=n._nextRemoved;return o===null?this._removalsHead=r:o._nextRemoved=r,r===null?this._removalsTail=o:r._prevRemoved=o,this._insertAfter(n,t,i),this._addToMoves(n,i),n}_moveAfter(n,t,i){return this._unlink(n),this._insertAfter(n,t,i),this._addToMoves(n,i),n}_addAfter(n,t,i){return this._insertAfter(n,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=n:this._additionsTail=this._additionsTail._nextAdded=n,n}_insertAfter(n,t,i){let o=t===null?this._itHead:t._next;return n._next=o,n._prev=t,o===null?this._itTail=n:o._prev=n,t===null?this._itHead=n:t._next=n,this._linkedRecords===null&&(this._linkedRecords=new _o),this._linkedRecords.put(n),n.currentIndex=i,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){this._linkedRecords!==null&&this._linkedRecords.remove(n);let t=n._prev,i=n._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,n}_addToMoves(n,t){return n.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=n:this._movesTail=this._movesTail._nextMoved=n),n}_addToRemovals(n){return this._unlinkedRecords===null&&(this._unlinkedRecords=new _o),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,t){return n.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=n:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=n,n}},Gl=class{constructor(n,t){this.item=n,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},ql=class{constructor(){this._head=null,this._tail=null}add(n){this._head===null?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,n))return i;return null}remove(n){let t=n._prevDup,i=n._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},_o=class{constructor(){this.map=new Map}put(n){let t=n.trackById,i=this.map.get(t);i||(i=new ql,this.map.set(t,i)),i.add(n)}get(n,t){let i=n,o=this.map.get(i);return o?o.get(n,t):null}remove(n){let t=n.trackById;return this.map.get(t).remove(n)&&this.map.delete(t),n}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function lp(e,n,t){let i=e.previousIndex;if(i===null)return i;let o=0;return t&&i<t.length&&(o=t[i]),i+n+o}function cp(){return new Pc([new zl])}var Pc=(()=>{class e{static{this.\u0275prov=j({token:e,providedIn:"root",factory:cp})}constructor(t){this.factories=t}static create(t,i){if(i!=null){let o=i.factories.slice();t=t.concat(o)}return new e(t)}static extend(t){return{provide:e,useFactory:i=>e.create(t,i||cp()),deps:[[e,new Kl,new Do]]}}find(t){let i=this.factories.find(o=>o.supports(t));if(i!=null)return i;throw new R(901,!1)}}return e})();function bh(e){try{let{rootComponent:n,appProviders:t,platformProviders:i}=e,o=Sb(i),r=[gh({}),{provide:Bn,useExisting:_b},...t||[]],l=new vo({providers:r,parent:o,debugName:"",runEnvironmentInitializers:!1});return wb({r3Injector:l.injector,platformInjector:o,rootComponent:n})}catch(n){return Promise.reject(n)}}function Li(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function Fi(e,n){Yn("NgSignals");let t=Yu(e);return n?.equal&&(t[ct].equal=n.equal),t}function bt(e){let n=ee(null);try{return e()}finally{ee(n)}}function _h(e){let n=At(e);if(!n)return null;let t=new Hn(n);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var Eh=null;function Mt(){return Eh}function Sh(e){Eh??=e}var $o=class{};var Oe=new V(""),Fc=(()=>{class e{historyGo(t){throw new Error("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:()=>N(Ab),providedIn:"platform"})}}return e})(),xh=new V(""),Ab=(()=>{class e extends Fc{constructor(){super(),this._doc=N(Oe),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Mt().getBaseHref(this._doc)}onPopState(t){let i=Mt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Mt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,o){this._history.pushState(t,i,o)}replaceState(t,i,o){this._history.replaceState(t,i,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:()=>new e,providedIn:"platform"})}}return e})();function Rc(e,n){if(e.length==0)return n;if(n.length==0)return e;let t=0;return e.endsWith("/")&&t++,n.startsWith("/")&&t++,t==2?e+n.substring(1):t==1?e+n:e+"/"+n}function Mh(e){let n=e.match(/#|\?|$/),t=n&&n.index||e.length,i=t-(e[t-1]==="/"?1:0);return e.slice(0,i)+e.slice(t)}function _t(e){return e&&e[0]!=="?"?"?"+e:e}var cn=(()=>{class e{historyGo(t){throw new Error("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:()=>N(kc),providedIn:"root"})}}return e})(),Ih=new V(""),kc=(()=>{class e extends cn{constructor(t,i){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??N(Oe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Rc(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+_t(this._platformLocation.search),o=this._platformLocation.hash;return o&&t?`${i}${o}`:i}pushState(t,i,o,r){let l=this.prepareExternalUrl(o+_t(r));this._platformLocation.pushState(t,i,l)}replaceState(t,i,o,r){let l=this.prepareExternalUrl(o+_t(r));this._platformLocation.replaceState(t,i,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(i){return new(i||e)($(Fc),$(Ih,8))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Th=(()=>{class e extends cn{constructor(t,i){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=Rc(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,o,r){let l=this.prepareExternalUrl(o+_t(r));l.length==0&&(l=this._platformLocation.pathname),this._platformLocation.pushState(t,i,l)}replaceState(t,i,o,r){let l=this.prepareExternalUrl(o+_t(r));l.length==0&&(l=this._platformLocation.pathname),this._platformLocation.replaceState(t,i,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(i){return new(i||e)($(Fc),$(Ih,8))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})(),Kn=(()=>{class e{constructor(t){this._subject=new me,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=Rb(Mh(wh(i))),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+_t(i))}normalize(t){return e.stripTrailingSlash(Fb(this._basePath,wh(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",o=null){this._locationStrategy.pushState(o,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+_t(i)),o)}replaceState(t,i="",o=null){this._locationStrategy.replaceState(o,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+_t(i)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(o=>o(t,i))}subscribe(t,i,o){return this._subject.subscribe({next:t,error:i,complete:o})}static{this.normalizeQueryParams=_t}static{this.joinWithSlash=Rc}static{this.stripTrailingSlash=Mh}static{this.\u0275fac=function(i){return new(i||e)($(cn))}}static{this.\u0275prov=j({token:e,factory:()=>Lb(),providedIn:"root"})}}return e})();function Lb(){return new Kn($(cn))}function Fb(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function wh(e){return e.replace(/\/index.html$/,"")}function Rb(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}function Ph(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let i=t.indexOf("="),[o,r]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(o.trim()===n)return decodeURIComponent(r)}return null}var Oc=class{constructor(n,t,i,o){this.$implicit=n,this.ngForOf=t,this.index=i,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},I=(()=>{class e{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,i,o){this._viewContainer=t,this._template=i,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((o,r,l)=>{if(o.previousIndex==null)i.createEmbeddedView(this._template,new Oc(o.item,this._ngForOf,-1,-1),l===null?void 0:l);else if(l==null)i.remove(r===null?void 0:r);else if(r!==null){let u=i.get(r);i.move(u,l),Dh(u,o)}});for(let o=0,r=i.length;o<r;o++){let u=i.get(o).context;u.index=o,u.count=r,u.ngForOf=this._ngForOf}t.forEachIdentityChange(o=>{let r=i.get(o.currentIndex);Dh(r,o)})}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||e)(ae(Oi),ae(xc),ae(Pc))}}static{this.\u0275dir=we({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return e})();function Dh(e,n){e.context.$implicit=n.item}var Vc="browser",kb="server";function Vb(e){return e===Vc}function jc(e){return e===kb}var Oh=(()=>{class e{static{this.\u0275prov=j({token:e,providedIn:"root",factory:()=>Vb(N(jt))?new Nc(N(Oe),window):new Ac})}}return e})(),Nc=class{constructor(n,t){this.document=n,this.window=t,this.offset=()=>[0,0]}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n){this.window.scrollTo(n[0],n[1])}scrollToAnchor(n){let t=jb(this.document,n);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(n){this.window.history.scrollRestoration=n}scrollToElement(n){let t=n.getBoundingClientRect(),i=t.left+this.window.pageXOffset,o=t.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(i-r[0],o-r[1])}};function jb(e,n){let t=e.getElementById(n)||e.getElementsByName(n)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let i=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),o=i.currentNode;for(;o;){let r=o.shadowRoot;if(r){let l=r.getElementById(n)||r.querySelector(`[name="${n}"]`);if(l)return l}o=i.nextNode()}}return null}var Ac=class{setOffset(n){}getScrollPosition(){return[0,0]}scrollToPosition(n){}scrollToAnchor(n){}setHistoryScrollRestoration(n){}},Go=class{};var Uc=class extends $o{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Hc=class e extends Uc{static makeCurrent(){Sh(new e)}onAndCancel(n,t,i){return n.addEventListener(t,i),()=>{n.removeEventListener(t,i)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=Bb();return t==null?null:Wb(t)}resetBaseElement(){Ri=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Ph(document.cookie,n)}},Ri=null;function Bb(){return Ri=Ri||document.querySelector("base"),Ri?Ri.getAttribute("href"):null}function Wb(e){return new URL(e,document.baseURI).pathname}var Ub=(()=>{class e{build(){return new XMLHttpRequest}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})(),zc=new V(""),Fh=(()=>{class e{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(o=>{o.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,o){return this._findPluginFor(i).addEventListener(t,i,o)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(r=>r.supports(t)),!i)throw new R(5101,!1);return this._eventNameToPlugin.set(t,i),i}static{this.\u0275fac=function(i){return new(i||e)($(zc),$(de))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})(),qo=class{constructor(n){this._doc=n}},Bc="ng-app-id",Rh=(()=>{class e{constructor(t,i,o,r={}){this.doc=t,this.appId=i,this.nonce=o,this.platformId=r,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=jc(r),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(o=>o.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Bc}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(o=>{o.textContent!=null&&i.set(o.textContent,o)}),i}return null}changeUsageCount(t,i){let o=this.styleRef;if(o.has(t)){let r=o.get(t);return r.usage+=i,r.usage}return o.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let o=this.styleNodesInDOM,r=o?.get(i);if(r?.parentNode===t)return o.delete(i),r.removeAttribute(Bc),r;{let l=this.doc.createElement("style");return this.nonce&&l.setAttribute("nonce",this.nonce),l.textContent=i,this.platformIsServer&&l.setAttribute(Bc,this.appId),t.appendChild(l),l}}addStyleToHost(t,i){let o=this.getStyleElement(t,i),r=this.styleRef,l=r.get(i)?.elements;l?l.push(o):r.set(i,{elements:[o],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(i){return new(i||e)($(Oe),$(hc),$(gc,8),$(jt))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})(),Wc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Gc=/%COMP%/g,kh="%COMP%",Hb=`_nghost-${kh}`,zb=`_ngcontent-${kh}`,$b=!0,Gb=new V("",{providedIn:"root",factory:()=>$b});function qb(e){return zb.replace(Gc,e)}function Zb(e){return Hb.replace(Gc,e)}function Vh(e,n){return n.map(t=>t.replace(Gc,e))}var Nh=(()=>{class e{constructor(t,i,o,r,l,u,d,f=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=o,this.removeStylesOnCompDestroy=r,this.doc=l,this.platformId=u,this.ngZone=d,this.nonce=f,this.rendererByCompId=new Map,this.platformIsServer=jc(u),this.defaultRenderer=new ki(t,l,d,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===it.ShadowDom&&(i=J(A({},i),{encapsulation:it.Emulated}));let o=this.getOrCreateRenderer(t,i);return o instanceof Zo?o.applyToHost(t):o instanceof Vi&&o.applyStyles(),o}getOrCreateRenderer(t,i){let o=this.rendererByCompId,r=o.get(i.id);if(!r){let l=this.doc,u=this.ngZone,d=this.eventManager,f=this.sharedStylesHost,v=this.removeStylesOnCompDestroy,C=this.platformIsServer;switch(i.encapsulation){case it.Emulated:r=new Zo(d,f,i,this.appId,v,l,u,C);break;case it.ShadowDom:return new $c(d,f,t,i,l,u,this.nonce,C);default:r=new Vi(d,f,i,v,l,u,C);break}o.set(i.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(i){return new(i||e)($(Fh),$(Rh),$(hc),$(Gb),$(Oe),$(jt),$(de),$(gc))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})(),ki=class{constructor(n,t,i,o){this.eventManager=n,this.doc=t,this.ngZone=i,this.platformIsServer=o,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(n,t){return t?this.doc.createElementNS(Wc[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(Ah(n)?n.content:n).appendChild(t)}insertBefore(n,t,i){n&&(Ah(n)?n.content:n).insertBefore(t,i)}removeChild(n,t){t.remove()}selectRootElement(n,t){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new R(-5104,!1);return t||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,i,o){if(o){t=o+":"+t;let r=Wc[o];r?n.setAttributeNS(r,t,i):n.setAttribute(t,i)}else n.setAttribute(t,i)}removeAttribute(n,t,i){if(i){let o=Wc[i];o?n.removeAttributeNS(o,t):n.removeAttribute(`${i}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,i,o){o&(mt.DashCase|mt.Important)?n.style.setProperty(t,i,o&mt.Important?"important":""):n.style[t]=i}removeStyle(n,t,i){i&mt.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,i){n!=null&&(n[t]=i)}setValue(n,t){n.nodeValue=t}listen(n,t,i){if(typeof n=="string"&&(n=Mt().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${t}`);return this.eventManager.addEventListener(n,t,this.decoratePreventDefault(i))}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(t)):n(t))===!1&&t.preventDefault()}}};function Ah(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var $c=class extends ki{constructor(n,t,i,o,r,l,u,d){super(n,r,l,d),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let f=Vh(o.id,o.styles);for(let v of f){let C=document.createElement("style");u&&C.setAttribute("nonce",u),C.textContent=v,this.shadowRoot.appendChild(C)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,i){return super.insertBefore(this.nodeOrShadowRoot(n),t,i)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Vi=class extends ki{constructor(n,t,i,o,r,l,u,d){super(n,r,l,u),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o,this.styles=d?Vh(d,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Zo=class extends Vi{constructor(n,t,i,o,r,l,u,d){let f=o+"-"+i.id;super(n,t,i,r,l,u,d,f),this.contentAttr=qb(f),this.hostAttr=Zb(f)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let i=super.createElement(n,t);return super.setAttribute(i,this.contentAttr,""),i}},Yb=(()=>{class e extends qo{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,o){return t.addEventListener(i,o,!1),()=>this.removeEventListener(t,i,o)}removeEventListener(t,i,o){return t.removeEventListener(i,o)}static{this.\u0275fac=function(i){return new(i||e)($(Oe))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})(),Lh=["alt","control","meta","shift"],Qb={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Kb={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Jb=(()=>{class e extends qo{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,i,o){let r=e.parseEventName(i),l=e.eventCallback(r.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Mt().onAndCancel(t,r.domEventName,l))}static parseEventName(t){let i=t.toLowerCase().split("."),o=i.shift();if(i.length===0||!(o==="keydown"||o==="keyup"))return null;let r=e._normalizeKey(i.pop()),l="",u=i.indexOf("code");if(u>-1&&(i.splice(u,1),l="code."),Lh.forEach(f=>{let v=i.indexOf(f);v>-1&&(i.splice(v,1),l+=f+".")}),l+=r,i.length!=0||r.length===0)return null;let d={};return d.domEventName=o,d.fullKey=l,d}static matchEventFullKeyCode(t,i){let o=Qb[t.key]||t.key,r="";return i.indexOf("code.")>-1&&(o=t.code,r="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Lh.forEach(l=>{if(l!==o){let u=Kb[l];u(t)&&(r+=l+".")}}),r+=o,r===i)}static eventCallback(t,i,o){return r=>{e.matchEventFullKeyCode(r,t)&&o.runGuarded(()=>i(r))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(i){return new(i||e)($(Oe))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})();function jh(e,n){return bh(A({rootComponent:e},Xb(n)))}function Xb(e){return{appProviders:[...r_,...e?.providers??[]],platformProviders:i_}}function e_(){Hc.makeCurrent()}function t_(){return new ht}function n_(){return Ef(document),document}var i_=[{provide:jt,useValue:Vc},{provide:mc,useValue:e_,multi:!0},{provide:Oe,useFactory:n_,deps:[]}];var r_=[{provide:So,useValue:"root"},{provide:ht,useFactory:t_,deps:[]},{provide:zc,useClass:Yb,multi:!0,deps:[Oe,de,jt]},{provide:zc,useClass:Jb,multi:!0,deps:[Oe]},Nh,Rh,Fh,{provide:Un,useExisting:Nh},{provide:Go,useClass:Ub,deps:[]},[]];var Bh=(()=>{class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(i){return new(i||e)($(Oe))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var G="primary",er=Symbol("RouteTitle"),Kc=class{constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t[0]:t}return null}getAll(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ii(e){return new Kc(e)}function s_(e,n,t){let i=t.path.split("/");if(i.length>e.length||t.pathMatch==="full"&&(n.hasChildren()||i.length<e.length))return null;let o={};for(let r=0;r<i.length;r++){let l=i[r],u=e[r];if(l[0]===":")o[l.substring(1)]=u;else if(l!==u.path)return null}return{consumed:e.slice(0,i.length),posParams:o}}function a_(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;++t)if(!lt(e[t],n[t]))return!1;return!0}function lt(e,n){let t=e?Jc(e):void 0,i=n?Jc(n):void 0;if(!t||!i||t.length!=i.length)return!1;let o;for(let r=0;r<t.length;r++)if(o=t[r],!Kh(e[o],n[o]))return!1;return!0}function Jc(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Kh(e,n){if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;let t=[...e].sort(),i=[...n].sort();return t.every((o,r)=>i[r]===o)}else return e===n}function Jh(e){return e.length>0?e[e.length-1]:null}function Ut(e){return Va(e)?e:sn(e)?ce(Promise.resolve(e)):U(e)}var l_={exact:em,subset:tm},Xh={exact:c_,subset:u_,ignored:()=>!0};function Wh(e,n,t){return l_[t.paths](e.root,n.root,t.matrixParams)&&Xh[t.queryParams](e.queryParams,n.queryParams)&&!(t.fragment==="exact"&&e.fragment!==n.fragment)}function c_(e,n){return lt(e,n)}function em(e,n,t){if(!dn(e.segments,n.segments)||!Ko(e.segments,n.segments,t)||e.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!e.children[i]||!em(e.children[i],n.children[i],t))return!1;return!0}function u_(e,n){return Object.keys(n).length<=Object.keys(e).length&&Object.keys(n).every(t=>Kh(e[t],n[t]))}function tm(e,n,t){return nm(e,n,n.segments,t)}function nm(e,n,t,i){if(e.segments.length>t.length){let o=e.segments.slice(0,t.length);return!(!dn(o,t)||n.hasChildren()||!Ko(o,t,i))}else if(e.segments.length===t.length){if(!dn(e.segments,t)||!Ko(e.segments,t,i))return!1;for(let o in n.children)if(!e.children[o]||!tm(e.children[o],n.children[o],i))return!1;return!0}else{let o=t.slice(0,e.segments.length),r=t.slice(e.segments.length);return!dn(e.segments,o)||!Ko(e.segments,o,i)||!e.children[G]?!1:nm(e.children[G],n,r,i)}}function Ko(e,n,t){return n.every((i,o)=>Xh[t](e[o].parameters,i.parameters))}var Dt=class{constructor(n=new oe([],{}),t={},i=null){this.root=n,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ii(this.queryParams),this._queryParamMap}toString(){return f_.serialize(this)}},oe=class{constructor(n,t){this.segments=n,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Jo(this)}},un=class{constructor(n,t){this.path=n,this.parameters=t}get parameterMap(){return this._parameterMap??=ii(this.parameters),this._parameterMap}toString(){return rm(this)}};function d_(e,n){return dn(e,n)&&e.every((t,i)=>lt(t.parameters,n[i].parameters))}function dn(e,n){return e.length!==n.length?!1:e.every((t,i)=>t.path===n[i].path)}function p_(e,n){let t=[];return Object.entries(e.children).forEach(([i,o])=>{i===G&&(t=t.concat(n(o,i)))}),Object.entries(e.children).forEach(([i,o])=>{i!==G&&(t=t.concat(n(o,i)))}),t}var tr=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:()=>new ri,providedIn:"root"})}}return e})(),ri=class{parse(n){let t=new eu(n);return new Dt(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(n){let t=`/${ji(n.root,!0)}`,i=g_(n.queryParams),o=typeof n.fragment=="string"?`#${h_(n.fragment)}`:"";return`${t}${i}${o}`}},f_=new ri;function Jo(e){return e.segments.map(n=>rm(n)).join("/")}function ji(e,n){if(!e.hasChildren())return Jo(e);if(n){let t=e.children[G]?ji(e.children[G],!1):"",i=[];return Object.entries(e.children).forEach(([o,r])=>{o!==G&&i.push(`${o}:${ji(r,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=p_(e,(i,o)=>o===G?[ji(e.children[G],!1)]:[`${o}:${ji(i,!1)}`]);return Object.keys(e.children).length===1&&e.children[G]!=null?`${Jo(e)}/${t[0]}`:`${Jo(e)}/(${t.join("//")})`}}function im(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Yo(e){return im(e).replace(/%3B/gi,";")}function h_(e){return encodeURI(e)}function Xc(e){return im(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Xo(e){return decodeURIComponent(e)}function Uh(e){return Xo(e.replace(/\+/g,"%20"))}function rm(e){return`${Xc(e.path)}${m_(e.parameters)}`}function m_(e){return Object.entries(e).map(([n,t])=>`;${Xc(n)}=${Xc(t)}`).join("")}function g_(e){let n=Object.entries(e).map(([t,i])=>Array.isArray(i)?i.map(o=>`${Yo(t)}=${Yo(o)}`).join("&"):`${Yo(t)}=${Yo(i)}`).filter(t=>t);return n.length?`?${n.join("&")}`:""}var y_=/^[^\/()?;#]+/;function qc(e){let n=e.match(y_);return n?n[0]:""}var v_=/^[^\/()?;=#]+/;function C_(e){let n=e.match(v_);return n?n[0]:""}var b_=/^[^=?&#]+/;function __(e){let n=e.match(b_);return n?n[0]:""}var M_=/^[^&#]+/;function w_(e){let n=e.match(M_);return n?n[0]:""}var eu=class{constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new oe([],{}):new oe([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(n.length>0||Object.keys(t).length>0)&&(i[G]=new oe(n,t)),i}parseSegment(){let n=qc(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new R(4009,!1);return this.capture(n),new un(Xo(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let t=C_(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=qc(this.remaining);o&&(i=o,this.capture(i))}n[Xo(t)]=Xo(i)}parseQueryParam(n){let t=__(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let l=w_(this.remaining);l&&(i=l,this.capture(i))}let o=Uh(t),r=Uh(i);if(n.hasOwnProperty(o)){let l=n[o];Array.isArray(l)||(l=[l],n[o]=l),l.push(r)}else n[o]=r}parseParens(n){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=qc(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new R(4010,!1);let r;i.indexOf(":")>-1?(r=i.slice(0,i.indexOf(":")),this.capture(r),this.capture(":")):n&&(r=G);let l=this.parseChildren();t[r]=Object.keys(l).length===1?l[G]:new oe([],l),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new R(4011,!1)}};function om(e){return e.segments.length>0?new oe([],{[G]:e}):e}function sm(e){let n={};for(let[i,o]of Object.entries(e.children)){let r=sm(o);if(i===G&&r.segments.length===0&&r.hasChildren())for(let[l,u]of Object.entries(r.children))n[l]=u;else(r.segments.length>0||r.hasChildren())&&(n[i]=r)}let t=new oe(e.segments,n);return D_(t)}function D_(e){if(e.numberOfChildren===1&&e.children[G]){let n=e.children[G];return new oe(e.segments.concat(n.segments),n.children)}return e}function $i(e){return e instanceof Dt}function E_(e,n,t=null,i=null){let o=am(e);return lm(o,n,t,i)}function am(e){let n;function t(r){let l={};for(let d of r.children){let f=t(d);l[d.outlet]=f}let u=new oe(r.url,l);return r===e&&(n=u),u}let i=t(e.root),o=om(i);return n??o}function lm(e,n,t,i){let o=e;for(;o.parent;)o=o.parent;if(n.length===0)return Zc(o,o,o,t,i);let r=S_(n);if(r.toRoot())return Zc(o,o,new oe([],{}),t,i);let l=x_(r,o,e),u=l.processChildren?Ui(l.segmentGroup,l.index,r.commands):um(l.segmentGroup,l.index,r.commands);return Zc(o,l.segmentGroup,u,t,i)}function es(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Gi(e){return typeof e=="object"&&e!=null&&e.outlets}function Zc(e,n,t,i,o){let r={};i&&Object.entries(i).forEach(([d,f])=>{r[d]=Array.isArray(f)?f.map(v=>`${v}`):`${f}`});let l;e===n?l=t:l=cm(e,n,t);let u=om(sm(l));return new Dt(u,r,o)}function cm(e,n,t){let i={};return Object.entries(e.children).forEach(([o,r])=>{r===n?i[o]=t:i[o]=cm(r,n,t)}),new oe(e.segments,i)}var ts=class{constructor(n,t,i){if(this.isAbsolute=n,this.numberOfDoubleDots=t,this.commands=i,n&&i.length>0&&es(i[0]))throw new R(4003,!1);let o=i.find(Gi);if(o&&o!==Jh(i))throw new R(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function S_(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new ts(!0,0,e);let n=0,t=!1,i=e.reduce((o,r,l)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let u={};return Object.entries(r.outlets).forEach(([d,f])=>{u[d]=typeof f=="string"?f.split("/"):f}),[...o,{outlets:u}]}if(r.segmentPath)return[...o,r.segmentPath]}return typeof r!="string"?[...o,r]:l===0?(r.split("/").forEach((u,d)=>{d==0&&u==="."||(d==0&&u===""?t=!0:u===".."?n++:u!=""&&o.push(u))}),o):[...o,r]},[]);return new ts(t,n,i)}var ei=class{constructor(n,t,i){this.segmentGroup=n,this.processChildren=t,this.index=i}};function x_(e,n,t){if(e.isAbsolute)return new ei(n,!0,0);if(!t)return new ei(n,!1,NaN);if(t.parent===null)return new ei(t,!0,0);let i=es(e.commands[0])?0:1,o=t.segments.length-1+i;return I_(t,o,e.numberOfDoubleDots)}function I_(e,n,t){let i=e,o=n,r=t;for(;r>o;){if(r-=o,i=i.parent,!i)throw new R(4005,!1);o=i.segments.length}return new ei(i,!1,o-r)}function T_(e){return Gi(e[0])?e[0].outlets:{[G]:e}}function um(e,n,t){if(e??=new oe([],{}),e.segments.length===0&&e.hasChildren())return Ui(e,n,t);let i=P_(e,n,t),o=t.slice(i.commandIndex);if(i.match&&i.pathIndex<e.segments.length){let r=new oe(e.segments.slice(0,i.pathIndex),{});return r.children[G]=new oe(e.segments.slice(i.pathIndex),e.children),Ui(r,0,o)}else return i.match&&o.length===0?new oe(e.segments,{}):i.match&&!e.hasChildren()?tu(e,n,t):i.match?Ui(e,0,o):tu(e,n,t)}function Ui(e,n,t){if(t.length===0)return new oe(e.segments,{});{let i=T_(t),o={};if(Object.keys(i).some(r=>r!==G)&&e.children[G]&&e.numberOfChildren===1&&e.children[G].segments.length===0){let r=Ui(e.children[G],n,t);return new oe(e.segments,r.children)}return Object.entries(i).forEach(([r,l])=>{typeof l=="string"&&(l=[l]),l!==null&&(o[r]=um(e.children[r],n,l))}),Object.entries(e.children).forEach(([r,l])=>{i[r]===void 0&&(o[r]=l)}),new oe(e.segments,o)}}function P_(e,n,t){let i=0,o=n,r={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(i>=t.length)return r;let l=e.segments[o],u=t[i];if(Gi(u))break;let d=`${u}`,f=i<t.length-1?t[i+1]:null;if(o>0&&d===void 0)break;if(d&&f&&typeof f=="object"&&f.outlets===void 0){if(!zh(d,f,l))return r;i+=2}else{if(!zh(d,{},l))return r;i++}o++}return{match:!0,pathIndex:o,commandIndex:i}}function tu(e,n,t){let i=e.segments.slice(0,n),o=0;for(;o<t.length;){let r=t[o];if(Gi(r)){let d=O_(r.outlets);return new oe(i,d)}if(o===0&&es(t[0])){let d=e.segments[n];i.push(new un(d.path,Hh(t[0]))),o++;continue}let l=Gi(r)?r.outlets[G]:`${r}`,u=o<t.length-1?t[o+1]:null;l&&u&&es(u)?(i.push(new un(l,Hh(u))),o+=2):(i.push(new un(l,{})),o++)}return new oe(i,{})}function O_(e){let n={};return Object.entries(e).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[t]=tu(new oe([],{}),0,i))}),n}function Hh(e){let n={};return Object.entries(e).forEach(([t,i])=>n[t]=`${i}`),n}function zh(e,n,t){return e==t.path&&lt(n,t.parameters)}var Hi="imperative",Ce=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(Ce||{}),Ge=class{constructor(n,t){this.id=n,this.url=t}},oi=class extends Ge{constructor(n,t,i="imperative",o=null){super(n,t),this.type=Ce.NavigationStart,this.navigationTrigger=i,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Et=class extends Ge{constructor(n,t,i){super(n,t),this.urlAfterRedirects=i,this.type=Ce.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ve=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(Ve||{}),ns=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(ns||{}),wt=class extends Ge{constructor(n,t,i,o){super(n,t),this.reason=i,this.code=o,this.type=Ce.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Bt=class extends Ge{constructor(n,t,i,o){super(n,t),this.reason=i,this.code=o,this.type=Ce.NavigationSkipped}},qi=class extends Ge{constructor(n,t,i,o){super(n,t),this.error=i,this.target=o,this.type=Ce.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},is=class extends Ge{constructor(n,t,i,o){super(n,t),this.urlAfterRedirects=i,this.state=o,this.type=Ce.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nu=class extends Ge{constructor(n,t,i,o){super(n,t),this.urlAfterRedirects=i,this.state=o,this.type=Ce.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},iu=class extends Ge{constructor(n,t,i,o,r){super(n,t),this.urlAfterRedirects=i,this.state=o,this.shouldActivate=r,this.type=Ce.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ru=class extends Ge{constructor(n,t,i,o){super(n,t),this.urlAfterRedirects=i,this.state=o,this.type=Ce.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ou=class extends Ge{constructor(n,t,i,o){super(n,t),this.urlAfterRedirects=i,this.state=o,this.type=Ce.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},su=class{constructor(n){this.route=n,this.type=Ce.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},au=class{constructor(n){this.route=n,this.type=Ce.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},lu=class{constructor(n){this.snapshot=n,this.type=Ce.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cu=class{constructor(n){this.snapshot=n,this.type=Ce.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},uu=class{constructor(n){this.snapshot=n,this.type=Ce.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},du=class{constructor(n){this.snapshot=n,this.type=Ce.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rs=class{constructor(n,t,i){this.routerEvent=n,this.position=t,this.anchor=i,this.type=Ce.Scroll}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Zi=class{},si=class{constructor(n,t){this.url=n,this.navigationBehaviorOptions=t}};function N_(e,n){return e.providers&&!e._injector&&(e._injector=Vo(e.providers,n,`Route: ${e.path}`)),e._injector??n}function Xe(e){return e.outlet||G}function A_(e,n){let t=e.filter(i=>Xe(i)===n);return t.push(...e.filter(i=>Xe(i)!==n)),t}function nr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let n=e.parent;n;n=n.parent){let t=n.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var pu=class{get injector(){return nr(this.route?.snapshot)??this.rootInjector}set injector(n){}constructor(n){this.rootInjector=n,this.outlet=null,this.route=null,this.children=new ir(this.rootInjector),this.attachRef=null}},ir=(()=>{class e{constructor(t){this.rootInjector=t,this.contexts=new Map}onChildOutletCreated(t,i){let o=this.getOrCreateContext(t);o.outlet=i,this.contexts.set(t,o)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new pu(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static{this.\u0275fac=function(i){return new(i||e)($(Fe))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),os=class{constructor(n){this._root=n}get root(){return this._root.value}parent(n){let t=this.pathFromRoot(n);return t.length>1?t[t.length-2]:null}children(n){let t=fu(n,this._root);return t?t.children.map(i=>i.value):[]}firstChild(n){let t=fu(n,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(n){let t=hu(n,this._root);return t.length<2?[]:t[t.length-2].children.map(o=>o.value).filter(o=>o!==n)}pathFromRoot(n){return hu(n,this._root).map(t=>t.value)}};function fu(e,n){if(e===n.value)return n;for(let t of n.children){let i=fu(e,t);if(i)return i}return null}function hu(e,n){if(e===n.value)return[n];for(let t of n.children){let i=hu(e,t);if(i.length)return i.unshift(n),i}return[]}var ke=class{constructor(n,t){this.value=n,this.children=t}toString(){return`TreeNode(${this.value})`}};function Xn(e){let n={};return e&&e.children.forEach(t=>n[t.value.outlet]=t),n}var ss=class extends os{constructor(n,t){super(n),this.snapshot=t,wu(this,n)}toString(){return this.snapshot.toString()}};function dm(e){let n=L_(e),t=new _e([new un("",{})]),i=new _e({}),o=new _e({}),r=new _e({}),l=new _e(""),u=new pn(t,i,r,l,o,G,e,n.root);return u.snapshot=n.root,new ss(new ke(u,[]),n)}function L_(e){let n={},t={},i={},o="",r=new ti([],n,i,o,t,G,e,null,{});return new ls("",new ke(r,[]))}var pn=class{constructor(n,t,i,o,r,l,u,d){this.urlSubject=n,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=o,this.dataSubject=r,this.outlet=l,this.component=u,this._futureSnapshot=d,this.title=this.dataSubject?.pipe(Y(f=>f[er]))??U(void 0),this.url=n,this.params=t,this.queryParams=i,this.fragment=o,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Y(n=>ii(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Y(n=>ii(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function as(e,n,t="emptyOnly"){let i,{routeConfig:o}=e;return n!==null&&(t==="always"||o?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:A(A({},n.params),e.params),data:A(A({},n.data),e.data),resolve:A(A(A(A({},e.data),n.data),o?.data),e._resolvedData)}:i={params:A({},e.params),data:A({},e.data),resolve:A(A({},e.data),e._resolvedData??{})},o&&fm(o)&&(i.resolve[er]=o.title),i}var ti=class{get title(){return this.data?.[er]}constructor(n,t,i,o,r,l,u,d,f){this.url=n,this.params=t,this.queryParams=i,this.fragment=o,this.data=r,this.outlet=l,this.component=u,this.routeConfig=d,this._resolve=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ii(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ii(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${t}')`}},ls=class extends os{constructor(n,t){super(t),this.url=n,wu(this,t)}toString(){return pm(this._root)}};function wu(e,n){n.value._routerState=e,n.children.forEach(t=>wu(e,t))}function pm(e){let n=e.children.length>0?` { ${e.children.map(pm).join(", ")} } `:"";return`${e.value}${n}`}function Yc(e){if(e.snapshot){let n=e.snapshot,t=e._futureSnapshot;e.snapshot=t,lt(n.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),n.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),lt(n.params,t.params)||e.paramsSubject.next(t.params),a_(n.url,t.url)||e.urlSubject.next(t.url),lt(n.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function mu(e,n){let t=lt(e.params,n.params)&&d_(e.url,n.url),i=!e.parent!=!n.parent;return t&&!i&&(!e.parent||mu(e.parent,n.parent))}function fm(e){return typeof e.title=="string"||e.title===null}var Du=(()=>{class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=G,this.activateEvents=new me,this.deactivateEvents=new me,this.attachEvents=new me,this.detachEvents=new me,this.parentContexts=N(ir),this.location=N(Oi),this.changeDetector=N(ln),this.inputBinder=N(ps,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:o}=t.name;if(i)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new R(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new R(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new R(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new R(4013,!1);this._activatedRoute=t;let o=this.location,l=t.snapshot.component,u=this.parentContexts.getOrCreateContext(this.name).children,d=new gu(t,u,o.injector);this.activated=o.createComponent(l,{index:o.length,injector:d,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=we({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[tn]})}}return e})(),gu=class e{__ngOutletInjector(n){return new e(this.route,this.childContexts,n)}constructor(n,t,i){this.route=n,this.childContexts=t,this.parent=i}get(n,t){return n===pn?this.route:n===ir?this.childContexts:this.parent.get(n,t)}},ps=new V(""),$h=(()=>{class e{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,o=yi([i.queryParams,i.params,i.data]).pipe(Be(([r,l,u],d)=>(u=A(A(A({},r),l),u),d===0?U(u):Promise.resolve(u)))).subscribe(r=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let l=_h(i.component);if(!l){this.unsubscribeFromRouteData(t);return}for(let{templateName:u}of l.inputs)t.activatedComponentRef.setInput(u,r[u])});this.outletDataSubscriptions.set(t,o)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})();function F_(e,n,t){let i=Yi(e,n._root,t?t._root:void 0);return new ss(i,n)}function Yi(e,n,t){if(t&&e.shouldReuseRoute(n.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=n.value;let o=R_(e,n,t);return new ke(i,o)}else{if(e.shouldAttach(n.value)){let r=e.retrieve(n.value);if(r!==null){let l=r.route;return l.value._futureSnapshot=n.value,l.children=n.children.map(u=>Yi(e,u)),l}}let i=k_(n.value),o=n.children.map(r=>Yi(e,r));return new ke(i,o)}}function R_(e,n,t){return n.children.map(i=>{for(let o of t.children)if(e.shouldReuseRoute(i.value,o.value.snapshot))return Yi(e,i,o);return Yi(e,i)})}function k_(e){return new pn(new _e(e.url),new _e(e.params),new _e(e.queryParams),new _e(e.fragment),new _e(e.data),e.outlet,e.component,e)}var Qi=class{constructor(n,t){this.redirectTo=n,this.navigationBehaviorOptions=t}},hm="ngNavigationCancelingError";function cs(e,n){let{redirectTo:t,navigationBehaviorOptions:i}=$i(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,o=mm(!1,Ve.Redirect);return o.url=t,o.navigationBehaviorOptions=i,o}function mm(e,n){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[hm]=!0,t.cancellationCode=n,t}function V_(e){return gm(e)&&$i(e.url)}function gm(e){return!!e&&e[hm]}var j_=(e,n,t,i)=>Y(o=>(new yu(n,o.targetRouterState,o.currentRouterState,t,i).activate(e),o)),yu=class{constructor(n,t,i,o,r){this.routeReuseStrategy=n,this.futureState=t,this.currState=i,this.forwardEvent=o,this.inputBindingEnabled=r}activate(n){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,n),Yc(this.futureState.root),this.activateChildRoutes(t,i,n)}deactivateChildRoutes(n,t,i){let o=Xn(t);n.children.forEach(r=>{let l=r.value.outlet;this.deactivateRoutes(r,o[l],i),delete o[l]}),Object.values(o).forEach(r=>{this.deactivateRouteAndItsChildren(r,i)})}deactivateRoutes(n,t,i){let o=n.value,r=t?t.value:null;if(o===r)if(o.component){let l=i.getContext(o.outlet);l&&this.deactivateChildRoutes(n,t,l.children)}else this.deactivateChildRoutes(n,t,i);else r&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(n,t){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,t):this.deactivateRouteAndOutlet(n,t)}detachAndStoreRouteSubtree(n,t){let i=t.getContext(n.value.outlet),o=i&&n.value.component?i.children:t,r=Xn(n);for(let l of Object.values(r))this.deactivateRouteAndItsChildren(l,o);if(i&&i.outlet){let l=i.outlet.detach(),u=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:l,route:n,contexts:u})}}deactivateRouteAndOutlet(n,t){let i=t.getContext(n.value.outlet),o=i&&n.value.component?i.children:t,r=Xn(n);for(let l of Object.values(r))this.deactivateRouteAndItsChildren(l,o);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,t,i){let o=Xn(t);n.children.forEach(r=>{this.activateRoutes(r,o[r.value.outlet],i),this.forwardEvent(new du(r.value.snapshot))}),n.children.length&&this.forwardEvent(new cu(n.value.snapshot))}activateRoutes(n,t,i){let o=n.value,r=t?t.value:null;if(Yc(o),o===r)if(o.component){let l=i.getOrCreateContext(o.outlet);this.activateChildRoutes(n,t,l.children)}else this.activateChildRoutes(n,t,i);else if(o.component){let l=i.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let u=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),l.children.onOutletReAttached(u.contexts),l.attachRef=u.componentRef,l.route=u.route.value,l.outlet&&l.outlet.attach(u.componentRef,u.route.value),Yc(u.route.value),this.activateChildRoutes(n,null,l.children)}else l.attachRef=null,l.route=o,l.outlet&&l.outlet.activateWith(o,l.injector),this.activateChildRoutes(n,null,l.children)}else this.activateChildRoutes(n,null,i)}},us=class{constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ni=class{constructor(n,t){this.component=n,this.route=t}};function B_(e,n,t){let i=e._root,o=n?n._root:null;return Bi(i,o,t,[i.value])}function W_(e){let n=e.routeConfig?e.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:e,guards:n}}function li(e,n){let t=Symbol(),i=n.get(e,t);return i===t?typeof e=="function"&&!pp(e)?e:n.get(e):i}function Bi(e,n,t,i,o={canDeactivateChecks:[],canActivateChecks:[]}){let r=Xn(n);return e.children.forEach(l=>{U_(l,r[l.value.outlet],t,i.concat([l.value]),o),delete r[l.value.outlet]}),Object.entries(r).forEach(([l,u])=>zi(u,t.getContext(l),o)),o}function U_(e,n,t,i,o={canDeactivateChecks:[],canActivateChecks:[]}){let r=e.value,l=n?n.value:null,u=t?t.getContext(e.value.outlet):null;if(l&&r.routeConfig===l.routeConfig){let d=H_(l,r,r.routeConfig.runGuardsAndResolvers);d?o.canActivateChecks.push(new us(i)):(r.data=l.data,r._resolvedData=l._resolvedData),r.component?Bi(e,n,u?u.children:null,i,o):Bi(e,n,t,i,o),d&&u&&u.outlet&&u.outlet.isActivated&&o.canDeactivateChecks.push(new ni(u.outlet.component,l))}else l&&zi(n,u,o),o.canActivateChecks.push(new us(i)),r.component?Bi(e,null,u?u.children:null,i,o):Bi(e,null,t,i,o);return o}function H_(e,n,t){if(typeof t=="function")return t(e,n);switch(t){case"pathParamsChange":return!dn(e.url,n.url);case"pathParamsOrQueryParamsChange":return!dn(e.url,n.url)||!lt(e.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!mu(e,n)||!lt(e.queryParams,n.queryParams);case"paramsChange":default:return!mu(e,n)}}function zi(e,n,t){let i=Xn(e),o=e.value;Object.entries(i).forEach(([r,l])=>{o.component?n?zi(l,n.children.getContext(r),t):zi(l,null,t):zi(l,n,t)}),o.component?n&&n.outlet&&n.outlet.isActivated?t.canDeactivateChecks.push(new ni(n.outlet.component,o)):t.canDeactivateChecks.push(new ni(null,o)):t.canDeactivateChecks.push(new ni(null,o))}function rr(e){return typeof e=="function"}function z_(e){return typeof e=="boolean"}function $_(e){return e&&rr(e.canLoad)}function G_(e){return e&&rr(e.canActivate)}function q_(e){return e&&rr(e.canActivateChild)}function Z_(e){return e&&rr(e.canDeactivate)}function Y_(e){return e&&rr(e.canMatch)}function ym(e){return e instanceof ut||e?.name==="EmptyError"}var Qo=Symbol("INITIAL_VALUE");function ai(){return Be(e=>yi(e.map(n=>n.pipe(dt(1),Ha(Qo)))).pipe(Y(n=>{for(let t of n)if(t!==!0){if(t===Qo)return Qo;if(t===!1||Q_(t))return t}return!0}),je(n=>n!==Qo),dt(1)))}function Q_(e){return $i(e)||e instanceof Qi}function K_(e,n){return he(t=>{let{targetSnapshot:i,currentSnapshot:o,guards:{canActivateChecks:r,canDeactivateChecks:l}}=t;return l.length===0&&r.length===0?U(J(A({},t),{guardsResult:!0})):J_(l,i,o,e).pipe(he(u=>u&&z_(u)?X_(i,r,e,n):U(u)),Y(u=>J(A({},t),{guardsResult:u})))})}function J_(e,n,t,i){return ce(e).pipe(he(o=>rM(o.component,o.route,t,n,i)),et(o=>o!==!0,!0))}function X_(e,n,t,i){return ce(n).pipe(Gt(o=>Dn(tM(o.route.parent,i),eM(o.route,i),iM(e,o.path,t),nM(e,o.route,t))),et(o=>o!==!0,!0))}function eM(e,n){return e!==null&&n&&n(new uu(e)),U(!0)}function tM(e,n){return e!==null&&n&&n(new lu(e)),U(!0)}function nM(e,n,t){let i=n.routeConfig?n.routeConfig.canActivate:null;if(!i||i.length===0)return U(!0);let o=i.map(r=>Wr(()=>{let l=nr(n)??t,u=li(r,l),d=G_(u)?u.canActivate(n,e):st(l,()=>u(n,e));return Ut(d).pipe(et())}));return U(o).pipe(ai())}function iM(e,n,t){let i=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(l=>W_(l)).filter(l=>l!==null).map(l=>Wr(()=>{let u=l.guards.map(d=>{let f=nr(l.node)??t,v=li(d,f),C=q_(v)?v.canActivateChild(i,e):st(f,()=>v(i,e));return Ut(C).pipe(et())});return U(u).pipe(ai())}));return U(r).pipe(ai())}function rM(e,n,t,i,o){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return U(!0);let l=r.map(u=>{let d=nr(n)??o,f=li(u,d),v=Z_(f)?f.canDeactivate(e,n,t,i):st(d,()=>f(e,n,t,i));return Ut(v).pipe(et())});return U(l).pipe(ai())}function oM(e,n,t,i){let o=n.canLoad;if(o===void 0||o.length===0)return U(!0);let r=o.map(l=>{let u=li(l,e),d=$_(u)?u.canLoad(n,t):st(e,()=>u(n,t));return Ut(d)});return U(r).pipe(ai(),vm(i))}function vm(e){return La(Me(n=>{if(typeof n!="boolean")throw cs(e,n)}),Y(n=>n===!0))}function sM(e,n,t,i){let o=n.canMatch;if(!o||o.length===0)return U(!0);let r=o.map(l=>{let u=li(l,e),d=Y_(u)?u.canMatch(n,t):st(e,()=>u(n,t));return Ut(d)});return U(r).pipe(ai(),vm(i))}var Ki=class{constructor(n){this.segmentGroup=n||null}},Ji=class extends Error{constructor(n){super(),this.urlTree=n}};function Jn(e){return Mn(new Ki(e))}function aM(e){return Mn(new R(4e3,!1))}function lM(e){return Mn(mm(!1,Ve.GuardRejected))}var vu=class{constructor(n,t){this.urlSerializer=n,this.urlTree=t}lineralizeSegments(n,t){let i=[],o=t.root;for(;;){if(i=i.concat(o.segments),o.numberOfChildren===0)return U(i);if(o.numberOfChildren>1||!o.children[G])return aM(`${n.redirectTo}`);o=o.children[G]}}applyRedirectCommands(n,t,i,o,r){if(typeof t!="string"){let u=t,{queryParams:d,fragment:f,routeConfig:v,url:C,outlet:O,params:b,data:L,title:Z}=o,ie=st(r,()=>u({params:b,data:L,queryParams:d,fragment:f,routeConfig:v,url:C,outlet:O,title:Z}));if(ie instanceof Dt)throw new Ji(ie);t=ie}let l=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),n,i);if(t[0]==="/")throw new Ji(l);return l}applyRedirectCreateUrlTree(n,t,i,o){let r=this.createSegmentGroup(n,t.root,i,o);return new Dt(r,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(n,t){let i={};return Object.entries(n).forEach(([o,r])=>{if(typeof r=="string"&&r[0]===":"){let u=r.substring(1);i[o]=t[u]}else i[o]=r}),i}createSegmentGroup(n,t,i,o){let r=this.createSegments(n,t.segments,i,o),l={};return Object.entries(t.children).forEach(([u,d])=>{l[u]=this.createSegmentGroup(n,d,i,o)}),new oe(r,l)}createSegments(n,t,i,o){return t.map(r=>r.path[0]===":"?this.findPosParam(n,r,o):this.findOrReturn(r,i))}findPosParam(n,t,i){let o=i[t.path.substring(1)];if(!o)throw new R(4001,!1);return o}findOrReturn(n,t){let i=0;for(let o of t){if(o.path===n.path)return t.splice(i),o;i++}return n}},Cu={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function cM(e,n,t,i,o){let r=Cm(e,n,t);return r.matched?(i=N_(n,i),sM(i,n,t,o).pipe(Y(l=>l===!0?r:A({},Cu)))):U(r)}function Cm(e,n,t){if(n.path==="**")return uM(t);if(n.path==="")return n.pathMatch==="full"&&(e.hasChildren()||t.length>0)?A({},Cu):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let o=(n.matcher||s_)(t,e,n);if(!o)return A({},Cu);let r={};Object.entries(o.posParams??{}).forEach(([u,d])=>{r[u]=d.path});let l=o.consumed.length>0?A(A({},r),o.consumed[o.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:o.consumed,remainingSegments:t.slice(o.consumed.length),parameters:l,positionalParamSegments:o.posParams??{}}}function uM(e){return{matched:!0,parameters:e.length>0?Jh(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Gh(e,n,t,i){return t.length>0&&fM(e,t,i)?{segmentGroup:new oe(n,pM(i,new oe(t,e.children))),slicedSegments:[]}:t.length===0&&hM(e,t,i)?{segmentGroup:new oe(e.segments,dM(e,t,i,e.children)),slicedSegments:t}:{segmentGroup:new oe(e.segments,e.children),slicedSegments:t}}function dM(e,n,t,i){let o={};for(let r of t)if(fs(e,n,r)&&!i[Xe(r)]){let l=new oe([],{});o[Xe(r)]=l}return A(A({},i),o)}function pM(e,n){let t={};t[G]=n;for(let i of e)if(i.path===""&&Xe(i)!==G){let o=new oe([],{});t[Xe(i)]=o}return t}function fM(e,n,t){return t.some(i=>fs(e,n,i)&&Xe(i)!==G)}function hM(e,n,t){return t.some(i=>fs(e,n,i))}function fs(e,n,t){return(e.hasChildren()||n.length>0)&&t.pathMatch==="full"?!1:t.path===""}function mM(e,n,t){return n.length===0&&!e.children[t]}var bu=class{};function gM(e,n,t,i,o,r,l="emptyOnly"){return new _u(e,n,t,i,o,l,r).recognize()}var yM=31,_u=class{constructor(n,t,i,o,r,l,u){this.injector=n,this.configLoader=t,this.rootComponentType=i,this.config=o,this.urlTree=r,this.paramsInheritanceStrategy=l,this.urlSerializer=u,this.applyRedirects=new vu(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(n){return new R(4002,`'${n.segmentGroup}'`)}recognize(){let n=Gh(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(n).pipe(Y(({children:t,rootSnapshot:i})=>{let o=new ke(i,t),r=new ls("",o),l=E_(i,[],this.urlTree.queryParams,this.urlTree.fragment);return l.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(l),{state:r,tree:l}}))}match(n){let t=new ti([],Object.freeze({}),Object.freeze(A({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),G,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,n,G,t).pipe(Y(i=>({children:i,rootSnapshot:t})),xt(i=>{if(i instanceof Ji)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Ki?this.noMatchError(i):i}))}processSegmentGroup(n,t,i,o,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(n,t,i,r):this.processSegment(n,t,i,i.segments,o,!0,r).pipe(Y(l=>l instanceof ke?[l]:[]))}processChildren(n,t,i,o){let r=[];for(let l of Object.keys(i.children))l==="primary"?r.unshift(l):r.push(l);return ce(r).pipe(Gt(l=>{let u=i.children[l],d=A_(t,l);return this.processSegmentGroup(n,d,u,l,o)}),Ua((l,u)=>(l.push(...u),l)),It(null),Wa(),he(l=>{if(l===null)return Jn(i);let u=bm(l);return vM(u),U(u)}))}processSegment(n,t,i,o,r,l,u){return ce(t).pipe(Gt(d=>this.processSegmentAgainstRoute(d._injector??n,t,d,i,o,r,l,u).pipe(xt(f=>{if(f instanceof Ki)return U(null);throw f}))),et(d=>!!d),xt(d=>{if(ym(d))return mM(i,o,r)?U(new bu):Jn(i);throw d}))}processSegmentAgainstRoute(n,t,i,o,r,l,u,d){return Xe(i)!==l&&(l===G||!fs(o,r,i))?Jn(o):i.redirectTo===void 0?this.matchSegmentAgainstRoute(n,o,i,r,l,d):this.allowRedirects&&u?this.expandSegmentAgainstRouteUsingRedirect(n,o,t,i,r,l,d):Jn(o)}expandSegmentAgainstRouteUsingRedirect(n,t,i,o,r,l,u){let{matched:d,parameters:f,consumedSegments:v,positionalParamSegments:C,remainingSegments:O}=Cm(t,o,r);if(!d)return Jn(t);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>yM&&(this.allowRedirects=!1));let b=new ti(r,f,Object.freeze(A({},this.urlTree.queryParams)),this.urlTree.fragment,qh(o),Xe(o),o.component??o._loadedComponent??null,o,Zh(o)),L=as(b,u,this.paramsInheritanceStrategy);b.params=Object.freeze(L.params),b.data=Object.freeze(L.data);let Z=this.applyRedirects.applyRedirectCommands(v,o.redirectTo,C,b,n);return this.applyRedirects.lineralizeSegments(o,Z).pipe(he(ie=>this.processSegment(n,i,t,ie.concat(O),l,!1,u)))}matchSegmentAgainstRoute(n,t,i,o,r,l){let u=cM(t,i,o,n,this.urlSerializer);return i.path==="**"&&(t.children={}),u.pipe(Be(d=>d.matched?(n=i._injector??n,this.getChildConfig(n,i,o).pipe(Be(({routes:f})=>{let v=i._loadedInjector??n,{parameters:C,consumedSegments:O,remainingSegments:b}=d,L=new ti(O,C,Object.freeze(A({},this.urlTree.queryParams)),this.urlTree.fragment,qh(i),Xe(i),i.component??i._loadedComponent??null,i,Zh(i)),Z=as(L,l,this.paramsInheritanceStrategy);L.params=Object.freeze(Z.params),L.data=Object.freeze(Z.data);let{segmentGroup:ie,slicedSegments:ne}=Gh(t,O,b,f);if(ne.length===0&&ie.hasChildren())return this.processChildren(v,f,ie,L).pipe(Y(xe=>new ke(L,xe)));if(f.length===0&&ne.length===0)return U(new ke(L,[]));let Se=Xe(i)===r;return this.processSegment(v,f,ie,ne,Se?G:r,!0,L).pipe(Y(xe=>new ke(L,xe instanceof ke?[xe]:[])))}))):Jn(t)))}getChildConfig(n,t,i){return t.children?U({routes:t.children,injector:n}):t.loadChildren?t._loadedRoutes!==void 0?U({routes:t._loadedRoutes,injector:t._loadedInjector}):oM(n,t,i,this.urlSerializer).pipe(he(o=>o?this.configLoader.loadChildren(n,t).pipe(Me(r=>{t._loadedRoutes=r.routes,t._loadedInjector=r.injector})):lM(t))):U({routes:[],injector:n})}};function vM(e){e.sort((n,t)=>n.value.outlet===G?-1:t.value.outlet===G?1:n.value.outlet.localeCompare(t.value.outlet))}function CM(e){let n=e.value.routeConfig;return n&&n.path===""}function bm(e){let n=[],t=new Set;for(let i of e){if(!CM(i)){n.push(i);continue}let o=n.find(r=>i.value.routeConfig===r.value.routeConfig);o!==void 0?(o.children.push(...i.children),t.add(o)):n.push(i)}for(let i of t){let o=bm(i.children);n.push(new ke(i.value,o))}return n.filter(i=>!t.has(i))}function qh(e){return e.data||{}}function Zh(e){return e.resolve||{}}function bM(e,n,t,i,o,r){return he(l=>gM(e,n,t,i,l.extractedUrl,o,r).pipe(Y(({state:u,tree:d})=>J(A({},l),{targetSnapshot:u,urlAfterRedirects:d}))))}function _M(e,n){return he(t=>{let{targetSnapshot:i,guards:{canActivateChecks:o}}=t;if(!o.length)return U(t);let r=new Set(o.map(d=>d.route)),l=new Set;for(let d of r)if(!l.has(d))for(let f of _m(d))l.add(f);let u=0;return ce(l).pipe(Gt(d=>r.has(d)?MM(d,i,e,n):(d.data=as(d,d.parent,e).resolve,U(void 0))),Me(()=>u++),En(1),he(d=>u===l.size?U(t):Le))})}function _m(e){let n=e.children.map(t=>_m(t)).flat();return[e,...n]}function MM(e,n,t,i){let o=e.routeConfig,r=e._resolve;return o?.title!==void 0&&!fm(o)&&(r[er]=o.title),wM(r,e,n,i).pipe(Y(l=>(e._resolvedData=l,e.data=as(e,e.parent,t).resolve,null)))}function wM(e,n,t,i){let o=Jc(e);if(o.length===0)return U({});let r={};return ce(o).pipe(he(l=>DM(e[l],n,t,i).pipe(et(),Me(u=>{if(u instanceof Qi)throw cs(new ri,u);r[l]=u}))),En(1),Ba(r),xt(l=>ym(l)?Le:Mn(l)))}function DM(e,n,t,i){let o=nr(n)??i,r=li(e,o),l=r.resolve?r.resolve(n,t):st(o,()=>r(n,t));return Ut(l)}function Qc(e){return Be(n=>{let t=e(n);return t?ce(t).pipe(Y(()=>n)):U(n)})}var Mm=(()=>{class e{buildTitle(t){let i,o=t.root;for(;o!==void 0;)i=this.getResolvedTitleForRoute(o)??i,o=o.children.find(r=>r.outlet===G);return i}getResolvedTitleForRoute(t){return t.data[er]}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:()=>N(EM),providedIn:"root"})}}return e})(),EM=(()=>{class e extends Mm{constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static{this.\u0275fac=function(i){return new(i||e)($(Bh))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),or=new V("",{providedIn:"root",factory:()=>({})}),SM=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=M({type:e,selectors:[["ng-component"]],standalone:!0,features:[w],decls:1,vars:0,template:function(i,o){i&1&&le(0,"router-outlet")},dependencies:[Du],encapsulation:2})}}return e})();function Eu(e){let n=e.children&&e.children.map(Eu),t=n?J(A({},e),{children:n}):A({},e);return!t.component&&!t.loadComponent&&(n||t.loadChildren)&&t.outlet&&t.outlet!==G&&(t.component=SM),t}var Xi=new V(""),Su=(()=>{class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=N(zo)}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return U(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Ut(t.loadComponent()).pipe(Y(wm),Me(r=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=r}),vi(()=>{this.componentLoaders.delete(t)})),o=new _n(i,()=>new be).pipe(bn());return this.componentLoaders.set(t,o),o}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return U({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=xM(i,this.compiler,t,this.onLoadEndListener).pipe(vi(()=>{this.childrenLoaders.delete(i)})),l=new _n(r,()=>new be).pipe(bn());return this.childrenLoaders.set(i,l),l}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function xM(e,n,t,i){return Ut(e.loadChildren()).pipe(Y(wm),he(o=>o instanceof Ei||Array.isArray(o)?U(o):ce(n.compileModuleAsync(o))),Y(o=>{i&&i(e);let r,l,u=!1;return Array.isArray(o)?(l=o,u=!0):(r=o.create(t).injector,l=r.get(Xi,[],{optional:!0,self:!0}).flat()),{routes:l.map(Eu),injector:r}}))}function IM(e){return e&&typeof e=="object"&&"default"in e}function wm(e){return IM(e)?e.default:e}var xu=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:()=>N(TM),providedIn:"root"})}}return e})(),TM=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Dm=new V(""),Em=new V("");function PM(e,n,t){let i=e.get(Em),o=e.get(Oe);return e.get(de).runOutsideAngular(()=>{if(!o.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(f=>setTimeout(f));let r,l=new Promise(f=>{r=f}),u=o.startViewTransition(()=>(r(),OM(e))),{onViewTransitionCreated:d}=i;return d&&st(e,()=>d({transition:u,from:n,to:t})),l})}function OM(e){return new Promise(n=>{Ic({read:()=>setTimeout(n)},{injector:e})})}var NM=new V(""),Iu=(()=>{class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new be,this.transitionAbortSubject=new be,this.configLoader=N(Su),this.environmentInjector=N(Fe),this.urlSerializer=N(tr),this.rootContexts=N(ir),this.location=N(Kn),this.inputBindingEnabled=N(ps,{optional:!0})!==null,this.titleStrategy=N(Mm),this.options=N(or,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=N(xu),this.createViewTransition=N(Dm,{optional:!0}),this.navigationErrorHandler=N(NM,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>U(void 0),this.rootComponentType=null;let t=o=>this.events.next(new su(o)),i=o=>this.events.next(new au(o));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(J(A(A({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,o){return this.transitions=new _e({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Hi,restoredState:null,currentSnapshot:o.snapshot,targetSnapshot:null,currentRouterState:o,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(je(r=>r.id!==0),Y(r=>J(A({},r),{extractedUrl:this.urlHandlingStrategy.extract(r.rawUrl)})),Be(r=>{let l=!1,u=!1;return U(r).pipe(Be(d=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",Ve.SupersededByNewNavigation),Le;this.currentTransition=r,this.currentNavigation={id:d.id,initialUrl:d.rawUrl,extractedUrl:d.extractedUrl,targetBrowserUrl:typeof d.extras.browserUrl=="string"?this.urlSerializer.parse(d.extras.browserUrl):d.extras.browserUrl,trigger:d.source,extras:d.extras,previousNavigation:this.lastSuccessfulNavigation?J(A({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let f=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=d.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!f&&v!=="reload"){let C="";return this.events.next(new Bt(d.id,this.urlSerializer.serialize(d.rawUrl),C,ns.IgnoredSameUrlNavigation)),d.resolve(!1),Le}if(this.urlHandlingStrategy.shouldProcessUrl(d.rawUrl))return U(d).pipe(Be(C=>{let O=this.transitions?.getValue();return this.events.next(new oi(C.id,this.urlSerializer.serialize(C.extractedUrl),C.source,C.restoredState)),O!==this.transitions?.getValue()?Le:Promise.resolve(C)}),bM(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Me(C=>{r.targetSnapshot=C.targetSnapshot,r.urlAfterRedirects=C.urlAfterRedirects,this.currentNavigation=J(A({},this.currentNavigation),{finalUrl:C.urlAfterRedirects});let O=new is(C.id,this.urlSerializer.serialize(C.extractedUrl),this.urlSerializer.serialize(C.urlAfterRedirects),C.targetSnapshot);this.events.next(O)}));if(f&&this.urlHandlingStrategy.shouldProcessUrl(d.currentRawUrl)){let{id:C,extractedUrl:O,source:b,restoredState:L,extras:Z}=d,ie=new oi(C,this.urlSerializer.serialize(O),b,L);this.events.next(ie);let ne=dm(this.rootComponentType).snapshot;return this.currentTransition=r=J(A({},d),{targetSnapshot:ne,urlAfterRedirects:O,extras:J(A({},Z),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=O,U(r)}else{let C="";return this.events.next(new Bt(d.id,this.urlSerializer.serialize(d.extractedUrl),C,ns.IgnoredByUrlHandlingStrategy)),d.resolve(!1),Le}}),Me(d=>{let f=new nu(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}),Y(d=>(this.currentTransition=r=J(A({},d),{guards:B_(d.targetSnapshot,d.currentSnapshot,this.rootContexts)}),r)),K_(this.environmentInjector,d=>this.events.next(d)),Me(d=>{if(r.guardsResult=d.guardsResult,d.guardsResult&&typeof d.guardsResult!="boolean")throw cs(this.urlSerializer,d.guardsResult);let f=new iu(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot,!!d.guardsResult);this.events.next(f)}),je(d=>d.guardsResult?!0:(this.cancelNavigationTransition(d,"",Ve.GuardRejected),!1)),Qc(d=>{if(d.guards.canActivateChecks.length)return U(d).pipe(Me(f=>{let v=new ru(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(v)}),Be(f=>{let v=!1;return U(f).pipe(_M(this.paramsInheritanceStrategy,this.environmentInjector),Me({next:()=>v=!0,complete:()=>{v||this.cancelNavigationTransition(f,"",Ve.NoDataFromResolver)}}))}),Me(f=>{let v=new ou(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(v)}))}),Qc(d=>{let f=v=>{let C=[];v.routeConfig?.loadComponent&&!v.routeConfig._loadedComponent&&C.push(this.configLoader.loadComponent(v.routeConfig).pipe(Me(O=>{v.component=O}),Y(()=>{})));for(let O of v.children)C.push(...f(O));return C};return yi(f(d.targetSnapshot.root)).pipe(It(null),dt(1))}),Qc(()=>this.afterPreactivation()),Be(()=>{let{currentSnapshot:d,targetSnapshot:f}=r,v=this.createViewTransition?.(this.environmentInjector,d.root,f.root);return v?ce(v).pipe(Y(()=>r)):U(r)}),Y(d=>{let f=F_(t.routeReuseStrategy,d.targetSnapshot,d.currentRouterState);return this.currentTransition=r=J(A({},d),{targetRouterState:f}),this.currentNavigation.targetRouterState=f,r}),Me(()=>{this.events.next(new Zi)}),j_(this.rootContexts,t.routeReuseStrategy,d=>this.events.next(d),this.inputBindingEnabled),dt(1),Me({next:d=>{l=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Et(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects))),this.titleStrategy?.updateTitle(d.targetRouterState.snapshot),d.resolve(!0)},complete:()=>{l=!0}}),za(this.transitionAbortSubject.pipe(Me(d=>{throw d}))),vi(()=>{!l&&!u&&this.cancelNavigationTransition(r,"",Ve.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation=null,this.currentTransition=null)}),xt(d=>{if(u=!0,gm(d))this.events.next(new wt(r.id,this.urlSerializer.serialize(r.extractedUrl),d.message,d.cancellationCode)),V_(d)?this.events.next(new si(d.url,d.navigationBehaviorOptions)):r.resolve(!1);else{let f=new qi(r.id,this.urlSerializer.serialize(r.extractedUrl),d,r.targetSnapshot??void 0);try{let v=st(this.environmentInjector,()=>this.navigationErrorHandler?.(f));if(v instanceof Qi){let{message:C,cancellationCode:O}=cs(this.urlSerializer,v);this.events.next(new wt(r.id,this.urlSerializer.serialize(r.extractedUrl),C,O)),this.events.next(new si(v.redirectTo,v.navigationBehaviorOptions))}else{this.events.next(f);let C=t.errorHandler(d);r.resolve(!!C)}}catch(v){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(v)}}return Le}))}))}cancelNavigationTransition(t,i,o){let r=new wt(t.id,this.urlSerializer.serialize(t.extractedUrl),i,o);this.events.next(r),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function AM(e){return e!==Hi}var LM=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:()=>N(FM),providedIn:"root"})}}return e})(),Mu=class{shouldDetach(n){return!1}store(n,t){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,t){return n.routeConfig===t.routeConfig}},FM=(()=>{class e extends Mu{static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=nn(e)))(o||e)}})()}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Sm=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:()=>N(RM),providedIn:"root"})}}return e})(),RM=(()=>{class e extends Sm{constructor(){super(...arguments),this.location=N(Kn),this.urlSerializer=N(tr),this.options=N(or,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=N(xu),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Dt,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=dm(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof oi)this.stateMemento=this.createStateMemento();else if(t instanceof Bt)this.rawUrlTree=i.initialUrl;else if(t instanceof is){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??o,i)}}else t instanceof Zi?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof wt&&(t.code===Ve.GuardRejected||t.code===Ve.NoDataFromResolver)?this.restoreHistory(i):t instanceof qi?this.restoreHistory(i,!0):t instanceof Et&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let o=t instanceof Dt?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(o)||i.extras.replaceUrl){let r=this.browserPageId,l=A(A({},i.extras.state),this.generateNgRouterState(i.id,r));this.location.replaceState(o,"",l)}else{let r=A(A({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(o,"",r)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,r=this.currentPageId-o;r!==0?this.location.historyGo(r):this.currentUrlTree===t.finalUrl&&r===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=nn(e)))(o||e)}})()}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Wi=function(e){return e[e.COMPLETE=0]="COMPLETE",e[e.FAILED=1]="FAILED",e[e.REDIRECTING=2]="REDIRECTING",e}(Wi||{});function xm(e,n){e.events.pipe(je(t=>t instanceof Et||t instanceof wt||t instanceof qi||t instanceof Bt),Y(t=>t instanceof Et||t instanceof Bt?Wi.COMPLETE:(t instanceof wt?t.code===Ve.Redirect||t.code===Ve.SupersededByNewNavigation:!1)?Wi.REDIRECTING:Wi.FAILED),je(t=>t!==Wi.REDIRECTING),dt(1)).subscribe(()=>{n()})}function kM(e){throw e}var VM={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},jM={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Wt=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=N(Wo),this.stateManager=N(Sm),this.options=N(or,{optional:!0})||{},this.pendingTasks=N(Gn),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=N(Iu),this.urlSerializer=N(tr),this.location=N(Kn),this.urlHandlingStrategy=N(xu),this._events=new be,this.errorHandler=this.options.errorHandler||kM,this.navigated=!1,this.routeReuseStrategy=N(LM),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=N(Xi,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!N(ps,{optional:!0}),this.eventsSubscription=new pe,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let o=this.navigationTransitions.currentTransition,r=this.navigationTransitions.currentNavigation;if(o!==null&&r!==null){if(this.stateManager.handleRouterEvent(i,r),i instanceof wt&&i.code!==Ve.Redirect&&i.code!==Ve.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Et)this.navigated=!0;else if(i instanceof si){let l=i.navigationBehaviorOptions,u=this.urlHandlingStrategy.merge(i.url,o.currentRawUrl),d=A({browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||AM(o.source)},l);this.scheduleNavigation(u,Hi,null,d,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}WM(i)&&this._events.next(i)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Hi,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,o){let r={replaceUrl:!0},l=o?.navigationId?o:null;if(o){let d=A({},o);delete d.navigationId,delete d.\u0275routerPageId,Object.keys(d).length!==0&&(r.state=d)}let u=this.parseUrl(t);this.scheduleNavigation(u,i,l,r)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Eu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:o,queryParams:r,fragment:l,queryParamsHandling:u,preserveFragment:d}=i,f=d?this.currentUrlTree.fragment:l,v=null;switch(u??this.options.defaultQueryParamsHandling){case"merge":v=A(A({},this.currentUrlTree.queryParams),r);break;case"preserve":v=this.currentUrlTree.queryParams;break;default:v=r||null}v!==null&&(v=this.removeEmptyProps(v));let C;try{let O=o?o.snapshot:this.routerState.snapshot.root;C=am(O)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),C=this.currentUrlTree.root}return lm(C,t,v,f??null)}navigateByUrl(t,i={skipLocationChange:!1}){let o=$i(t)?t:this.parseUrl(t),r=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(r,Hi,null,i)}navigate(t,i={skipLocationChange:!1}){return BM(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let o;if(i===!0?o=A({},VM):i===!1?o=A({},jM):o=i,$i(t))return Wh(this.currentUrlTree,t,o);let r=this.parseUrl(t);return Wh(this.currentUrlTree,r,o)}removeEmptyProps(t){return Object.entries(t).reduce((i,[o,r])=>(r!=null&&(i[o]=r),i),{})}scheduleNavigation(t,i,o,r,l){if(this.disposed)return Promise.resolve(!1);let u,d,f;l?(u=l.resolve,d=l.reject,f=l.promise):f=new Promise((C,O)=>{u=C,d=O});let v=this.pendingTasks.add();return xm(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:r,resolve:u,reject:d,promise:f,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),f.catch(C=>Promise.reject(C))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function BM(e){for(let n=0;n<e.length;n++)if(e[n]==null)throw new R(4008,!1)}function WM(e){return!(e instanceof Zi)&&!(e instanceof si)}var ds=class{};var UM=(()=>{class e{constructor(t,i,o,r,l){this.router=t,this.injector=o,this.preloadingStrategy=r,this.loader=l}setUpPreloading(){this.subscription=this.router.events.pipe(je(t=>t instanceof Et),Gt(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){let o=[];for(let r of i){r.providers&&!r._injector&&(r._injector=Vo(r.providers,t,`Route: ${r.path}`));let l=r._injector??t,u=r._loadedInjector??l;(r.loadChildren&&!r._loadedRoutes&&r.canLoad===void 0||r.loadComponent&&!r._loadedComponent)&&o.push(this.preloadConfig(l,r)),(r.children||r._loadedRoutes)&&o.push(this.processRoutes(u,r.children??r._loadedRoutes))}return ce(o).pipe(wn())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let o;i.loadChildren&&i.canLoad===void 0?o=this.loader.loadChildren(t,i):o=U(null);let r=o.pipe(he(l=>l===null?U(void 0):(i._loadedRoutes=l.routes,i._loadedInjector=l.injector,this.processRoutes(l.injector??t,l.routes))));if(i.loadComponent&&!i._loadedComponent){let l=this.loader.loadComponent(i);return ce([r,l]).pipe(wn())}else return r})}static{this.\u0275fac=function(i){return new(i||e)($(Wt),$(zo),$(Fe),$(ds),$(Su))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Im=new V(""),HM=(()=>{class e{constructor(t,i,o,r,l={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=o,this.zone=r,this.options=l,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},l.scrollPositionRestoration||="disabled",l.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof oi?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Et?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof Bt&&t.code===ns.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof rs&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new rs(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static{this.\u0275fac=function(i){Vf()}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})();function Tm(e,...n){return Eo([{provide:Xi,multi:!0,useValue:e},[],{provide:pn,useFactory:Pm,deps:[Wt]},{provide:Ho,multi:!0,useFactory:Om},n.map(t=>t.\u0275providers)])}function Pm(e){return e.routerState.root}function sr(e,n){return{\u0275kind:e,\u0275providers:n}}function Om(){let e=N(Ke);return n=>{let t=e.get(an);if(n!==t.components[0])return;let i=e.get(Wt),o=e.get(Nm);e.get(Tu)===1&&i.initialNavigation(),e.get(Am,null,q.Optional)?.setUpPreloading(),e.get(Im,null,q.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var Nm=new V("",{factory:()=>new be}),Tu=new V("",{providedIn:"root",factory:()=>1});function zM(){return sr(2,[{provide:Tu,useValue:0},{provide:Uo,multi:!0,deps:[Ke],useFactory:n=>{let t=n.get(xh,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let o=n.get(Wt),r=n.get(Nm);xm(o,()=>{i(!0)}),n.get(Iu).afterPreactivation=()=>(i(!0),r.closed?U(void 0):r),o.initialNavigation()}))}}])}function $M(){return sr(3,[{provide:Uo,multi:!0,useFactory:()=>{let n=N(Wt);return()=>{n.setUpLocationChangeListener()}}},{provide:Tu,useValue:2}])}var Am=new V("");function GM(e){return sr(0,[{provide:Am,useExisting:UM},{provide:ds,useExisting:e}])}function qM(){return sr(8,[$h,{provide:ps,useExisting:$h}])}function ZM(e){let n=[{provide:Dm,useValue:PM},{provide:Em,useValue:A({skipNextTransition:!!e?.skipInitialTransition},e)}];return sr(9,n)}var Yh=new V("ROUTER_FORROOT_GUARD"),YM=[Kn,{provide:tr,useClass:ri},Wt,ir,{provide:pn,useFactory:Pm,deps:[Wt]},Su,[]],Pu=(()=>{class e{constructor(t){}static forRoot(t,i){return{ngModule:e,providers:[YM,[],{provide:Xi,multi:!0,useValue:t},{provide:Yh,useFactory:XM,deps:[[Wt,new Do,new Kl]]},{provide:or,useValue:i||{}},i?.useHash?KM():JM(),QM(),i?.preloadingStrategy?GM(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?ew(i):[],i?.bindToComponentInputs?qM().\u0275providers:[],i?.enableViewTransitions?ZM().\u0275providers:[],tw()]}}static forChild(t){return{ngModule:e,providers:[{provide:Xi,multi:!0,useValue:t}]}}static{this.\u0275fac=function(i){return new(i||e)($(Yh,8))}}static{this.\u0275mod=yt({type:e})}static{this.\u0275inj=gt({})}}return e})();function QM(){return{provide:Im,useFactory:()=>{let e=N(Oh),n=N(de),t=N(or),i=N(Iu),o=N(tr);return t.scrollOffset&&e.setOffset(t.scrollOffset),new HM(o,i,e,n,t)}}}function KM(){return{provide:cn,useClass:Th}}function JM(){return{provide:cn,useClass:kc}}function XM(e){return"guarded"}function ew(e){return[e.initialNavigation==="disabled"?$M().\u0275providers:[],e.initialNavigation==="enabledBlocking"?zM().\u0275providers:[]]}var Qh=new V("");function tw(){return[{provide:Qh,useFactory:Om},{provide:Ho,multi:!0,useExisting:Qh}]}var Um=(()=>{class e{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(i){return new(i||e)(ae(Zn),ae(rn))}}static{this.\u0275dir=we({type:e})}}return e})(),Hm=(()=>{class e extends Um{static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=nn(e)))(o||e)}})()}static{this.\u0275dir=we({type:e,features:[at]})}}return e})(),Nu=new V("");var nw={provide:Nu,useExisting:kt(()=>D),multi:!0};function iw(){let e=Mt()?Mt().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var rw=new V(""),D=(()=>{class e extends Um{constructor(t,i,o){super(t,i),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!iw())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(i){return new(i||e)(ae(Zn),ae(rn),ae(rw,8))}}static{this.\u0275dir=we({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&_("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[Qn([nw]),at]})}}return e})();function ow(e){return e==null||(typeof e=="string"||Array.isArray(e))&&e.length===0}var Au=new V(""),zm=new V("");function sw(e){return ow(e.value)?{required:!0}:null}function Lm(e){return null}function $m(e){return e!=null}function Gm(e){return sn(e)?ce(e):e}function qm(e){let n={};return e.forEach(t=>{n=t!=null?A(A({},n),t):n}),Object.keys(n).length===0?null:n}function Zm(e,n){return n.map(t=>t(e))}function aw(e){return!e.validate}function Ym(e){return e.map(n=>aw(n)?n:t=>n.validate(t))}function lw(e){if(!e)return null;let n=e.filter($m);return n.length==0?null:function(t){return qm(Zm(t,n))}}function Lu(e){return e!=null?lw(Ym(e)):null}function cw(e){if(!e)return null;let n=e.filter($m);return n.length==0?null:function(t){let i=Zm(t,n).map(Gm);return ja(i).pipe(Y(qm))}}function Fu(e){return e!=null?cw(Ym(e)):null}function Fm(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function uw(e){return e._rawValidators}function dw(e){return e._rawAsyncValidators}function Ou(e){return e?Array.isArray(e)?e:[e]:[]}function ms(e,n){return Array.isArray(e)?e.includes(n):e===n}function Rm(e,n){let t=Ou(n);return Ou(e).forEach(o=>{ms(t,o)||t.push(o)}),t}function km(e,n){return Ou(n).filter(t=>!ms(e,t))}var gs=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Lu(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Fu(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},di=class extends gs{get formDirective(){return null}get path(){return null}},pr=class extends gs{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ys=class{constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},pw={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},lO=J(A({},pw),{"[class.ng-submitted]":"isSubmitted"}),T=(()=>{class e extends ys{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||e)(ae(pr,2))}}static{this.\u0275dir=we({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&Bo("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[at]})}}return e})(),_s=(()=>{class e extends ys{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||e)(ae(di,10))}}static{this.\u0275dir=we({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&Bo("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[at]})}}return e})();var ar="VALID",hs="INVALID",ci="PENDING",lr="DISABLED",pi=class{},vs=class extends pi{constructor(n,t){super(),this.value=n,this.source=t}},ur=class extends pi{constructor(n,t){super(),this.pristine=n,this.source=t}},dr=class extends pi{constructor(n,t){super(),this.touched=n,this.source=t}},ui=class extends pi{constructor(n,t){super(),this.status=n,this.source=t}};function Qm(e){return(Ms(e)?e.validators:e)||null}function fw(e){return Array.isArray(e)?Lu(e):e||null}function Km(e,n){return(Ms(n)?n.asyncValidators:e)||null}function hw(e){return Array.isArray(e)?Fu(e):e||null}function Ms(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function mw(e,n,t){let i=e.controls;if(!(n?Object.keys(i):i).length)throw new R(1e3,"");if(!i[t])throw new R(1001,"")}function gw(e,n,t){e._forEachChild((i,o)=>{if(t[o]===void 0)throw new R(1002,"")})}var Cs=class{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=Fi(()=>this.statusReactive()),this.statusReactive=Ni(void 0),this._pristine=Fi(()=>this.pristineReactive()),this.pristineReactive=Ni(!0),this._touched=Fi(()=>this.touchedReactive()),this.touchedReactive=Ni(!1),this._events=new be,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return bt(this.statusReactive)}set status(n){bt(()=>this.statusReactive.set(n))}get valid(){return this.status===ar}get invalid(){return this.status===hs}get pending(){return this.status==ci}get disabled(){return this.status===lr}get enabled(){return this.status!==lr}get pristine(){return bt(this.pristineReactive)}set pristine(n){bt(()=>this.pristineReactive.set(n))}get dirty(){return!this.pristine}get touched(){return bt(this.touchedReactive)}set touched(n){bt(()=>this.touchedReactive.set(n))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Rm(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Rm(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(km(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(km(n,this._rawAsyncValidators))}hasValidator(n){return ms(this._rawValidators,n)}hasAsyncValidator(n){return ms(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(J(A({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new dr(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new dr(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(J(A({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new ur(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new ur(!0,i))}markAsPending(n={}){this.status=ci;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ui(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(J(A({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=lr,this.errors=null,this._forEachChild(o=>{o.disable(J(A({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new vs(this.value,i)),this._events.next(new ui(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(J(A({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=ar,this._forEachChild(i=>{i.enable(J(A({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(J(A({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ar||this.status===ci)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new vs(this.value,t)),this._events.next(new ui(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(J(A({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?lr:ar}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=ci,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Gm(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new ui(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new me,this.statusChanges=new me}_calculateStatus(){return this._allControlsDisabled()?lr:this.errors?hs:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ci)?ci:this._anyControlsHaveStatus(hs)?hs:ar}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),o&&this._events.next(new ur(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new dr(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Ms(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=fw(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=hw(this._rawAsyncValidators)}},bs=class extends Cs{constructor(n,t,i){super(Qm(t),Km(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){gw(this,!0,n),Object.keys(n).forEach(i=>{mw(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(i=>{let o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&n(i,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((o,r)=>{i=t(i,o,r)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Ru=new V("CallSetDisabledState",{providedIn:"root",factory:()=>ku}),ku="always";function yw(e,n){return[...n.path,e]}function Jm(e,n,t=ku){Xm(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),Cw(e,n),_w(e,n),bw(e,n),vw(e,n)}function Vm(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function vw(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Xm(e,n){let t=uw(e);n.validator!==null?e.setValidators(Fm(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=dw(e);n.asyncValidator!==null?e.setAsyncValidators(Fm(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let o=()=>e.updateValueAndValidity();Vm(n._rawValidators,o),Vm(n._rawAsyncValidators,o)}function Cw(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&eg(e,n)})}function bw(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&eg(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function eg(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function _w(e,n){let t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Mw(e,n){e==null,Xm(e,n)}function ww(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function Dw(e){return Object.getPrototypeOf(e.constructor)===Hm}function Ew(e,n){e._syncPendingControls(),n.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Sw(e,n){if(!n)return null;Array.isArray(n);let t,i,o;return n.forEach(r=>{r.constructor===D?t=r:Dw(r)?i=r:o=r}),o||i||t||null}var xw={provide:di,useExisting:kt(()=>fr)},cr=Promise.resolve(),fr=(()=>{class e extends di{get submitted(){return bt(this.submittedReactive)}constructor(t,i,o){super(),this.callSetDisabledState=o,this._submitted=Fi(()=>this.submittedReactive()),this.submittedReactive=Ni(!1),this._directives=new Set,this.ngSubmit=new me,this.form=new bs({},Lu(t),Fu(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){cr.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),Jm(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){cr.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){cr.then(()=>{let i=this._findContainer(t.path),o=new bs({});Mw(o,t),i.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){cr.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){cr.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Ew(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(i){return new(i||e)(ae(Au,10),ae(zm,10),ae(Ru,8))}}static{this.\u0275dir=we({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,o){i&1&&_("submit",function(l){return o.onSubmit(l)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[Qn([xw]),at]})}}return e})();function jm(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function Bm(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Iw=class extends Cs{constructor(n=null,t,i){super(Qm(t),Km(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ms(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Bm(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){jm(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){jm(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Bm(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Tw={provide:pr,useExisting:kt(()=>x)},Wm=Promise.resolve(),x=(()=>{class e extends pr{constructor(t,i,o,r,l,u){super(),this._changeDetectorRef=l,this.callSetDisabledState=u,this.control=new Iw,this._registered=!1,this.name="",this.update=new me,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=Sw(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),ww(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Jm(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Wm.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,o=i!==0&&Li(i);Wm.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?yw(t,this._parent):[t]}static{this.\u0275fac=function(i){return new(i||e)(ae(di,9),ae(Au,10),ae(zm,10),ae(Nu,10),ae(ln,8),ae(Ru,8))}}static{this.\u0275dir=we({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Qn([Tw]),at,tn]})}}return e})(),ws=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=we({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return e})(),Pw={provide:Nu,useExisting:kt(()=>k),multi:!0},k=(()=>{class e extends Hm{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=nn(e)))(o||e)}})()}static{this.\u0275dir=we({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,o){i&1&&_("input",function(l){return o.onChange(l.target.value)})("blur",function(){return o.onTouched()})},features:[Qn([Pw]),at]})}}return e})();var Ow=(()=>{class e{constructor(){this._validator=Lm}ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Lm,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=we({type:e,features:[tn]})}}return e})();var Nw={provide:Au,useExisting:kt(()=>ve),multi:!0};var ve=(()=>{class e extends Ow{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=Li,this.createValidator=t=>sw}enabled(t){return t}static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=nn(e)))(o||e)}})()}static{this.\u0275dir=we({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,o){i&2&&jo("required",o._enabled?"":null)},inputs:{required:"required"},features:[Qn([Nw]),at]})}}return e})();var Aw=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=yt({type:e})}static{this.\u0275inj=gt({})}}return e})();var P=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Ru,useValue:t.callSetDisabledState??ku}]}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=yt({type:e})}static{this.\u0275inj=gt({imports:[Aw]})}}return e})();function Lw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.id),p(2),y(t.name),p(2),y(t.age),p(2),y(t.grade)}}var Ds=class e{students=[];id="";name="";grade="";age=0;addStudent(){this.students.push({id:this.id,name:this.name,grade:this.grade,age:this.age}),this.age=0,this.grade="",this.id="",this.name=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-student-list"]],standalone:!0,features:[w],decls:44,vars:5,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"row","mt-4"],[3,"ngSubmit"],[1,"form-group","row"],["for","id",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["type","number","id","id","name","id","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","name",1,"col-sm-2","col-form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","age",1,"col-sm-2","col-form-label"],["type","number","id","age","name","age","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","grade",1,"col-sm-2","col-form-label"],["type","number","id","grade","name","grade","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary","mt-3"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Student List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"ID"),a(),s(11,"th"),c(12,"Name"),a(),s(13,"th"),c(14,"Age"),a(),s(15,"th"),c(16,"Grade"),a()()(),s(17,"tbody"),E(18,Lw,9,4,"tr",4),a()()()(),s(19,"div",5)(20,"div",2)(21,"form",6),_("ngSubmit",function(){return i.addStudent()}),s(22,"div",7)(23,"label",8),c(24,"ID:"),a(),s(25,"div",9)(26,"input",10),m("ngModelChange",function(r){return g(i.id,r)||(i.id=r),r}),a()()(),s(27,"div",7)(28,"label",11),c(29,"Name:"),a(),s(30,"div",9)(31,"input",12),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()()(),s(32,"div",7)(33,"label",13),c(34,"Age:"),a(),s(35,"div",9)(36,"input",14),m("ngModelChange",function(r){return g(i.age,r)||(i.age=r),r}),a()()(),s(37,"div",7)(38,"label",15),c(39,"Grade:"),a(),s(40,"div",9)(41,"input",16),m("ngModelChange",function(r){return g(i.grade,r)||(i.grade=r),r}),a()()(),s(42,"button",17),c(43," Add Student "),a()()()()()()),t&2&&(p(18),S("ngForOf",i.students),p(8),h("ngModel",i.id),p(5),h("ngModel",i.name),p(5),h("ngModel",i.age),p(5),h("ngModel",i.grade))},dependencies:[I,P,ws,D,k,T,_s,ve,x,fr],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Fw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.id),p(2),y(t.name),p(2),y(t.position),p(2),y(t.age)}}var Es=class e{employees=[];id="";name="";position="";age=0;addEmployee(){this.employees.push({id:this.id,name:this.name,position:this.position,age:this.age}),this.age=0,this.position="",this.id="",this.name=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-employee-list"]],standalone:!0,features:[w],decls:42,vars:5,consts:[[1,"container"],[1,"table-responsive"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],[1,"mt-4"],[3,"ngSubmit"],[1,"form-group","row"],["for","ID",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["type","number","id","id","name","id","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","name",1,"col-sm-2","col-form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","position",1,"col-sm-2","col-form-label"],["type","text","id","position","name","position","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","age",1,"col-sm-2","col-form-label"],["type","number","id","age","name","age","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary","mt-3"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"h1"),c(3,"Employee List"),a(),s(4,"div",1)(5,"table",2)(6,"thead")(7,"tr")(8,"th"),c(9,"ID"),a(),s(10,"th"),c(11,"Name"),a(),s(12,"th"),c(13,"Position"),a(),s(14,"th"),c(15,"Age"),a()()(),s(16,"tbody"),E(17,Fw,9,4,"tr",3),a()()(),s(18,"div",4)(19,"form",5),_("ngSubmit",function(){return i.addEmployee()}),s(20,"div",6)(21,"label",7),c(22,"ID:"),a(),s(23,"div",8)(24,"input",9),m("ngModelChange",function(r){return g(i.id,r)||(i.id=r),r}),a()()(),s(25,"div",6)(26,"label",10),c(27,"Name:"),a(),s(28,"div",8)(29,"input",11),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()()(),s(30,"div",6)(31,"label",12),c(32,"Position:"),a(),s(33,"div",8)(34,"input",13),m("ngModelChange",function(r){return g(i.position,r)||(i.position=r),r}),a()()(),s(35,"div",6)(36,"label",14),c(37,"Age:"),a(),s(38,"div",8)(39,"input",15),m("ngModelChange",function(r){return g(i.age,r)||(i.age=r),r}),a()()(),s(40,"button",16),c(41," Add Employee "),a()()()()()),t&2&&(p(17),S("ngForOf",i.employees),p(7),h("ngModel",i.id),p(5),h("ngModel",i.name),p(5),h("ngModel",i.position),p(5),h("ngModel",i.age))},dependencies:[I,P,ws,D,k,T,_s,ve,x,fr],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Rw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.id),p(2),y(t.name),p(2),y(t.quantity),p(2),y(t.price)}}var Ss=class e{fruits=[];id="";name="";quantity=0;price=0;addFruit(){this.fruits.push({id:this.id,name:this.name,quantity:this.quantity,price:this.price}),this.id="",this.name="",this.quantity=0,this.price=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-fruit-list"]],standalone:!0,features:[w],decls:36,vars:5,consts:[[1,"text-center"],[4,"ngFor","ngForOf"],[1,"add-fruit"],[1,"form-group"],["for","id"],["type","text","id","id","name","ID","required","",3,"ngModelChange","ngModel"],["for","name"],["type","text","id","name","name","name","required","",3,"ngModelChange","ngModel"],["for","quantity"],["type","number","id","quantity","name","quantity","required","",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price","name","price","required","",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1",0),c(2,"Fruit List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"ID"),a(),s(8,"th"),c(9,"Name"),a(),s(10,"th"),c(11,"Quantity"),a(),s(12,"th"),c(13,"Price"),a()()(),s(14,"tbody"),E(15,Rw,9,4,"tr",1),a()(),s(16,"section",2)(17,"div",3)(18,"label",4),c(19,"ID:"),a(),s(20,"input",5),m("ngModelChange",function(r){return g(i.id,r)||(i.id=r),r}),a()(),s(21,"div",3)(22,"label",6),c(23,"Name:"),a(),s(24,"input",7),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(25,"div",3)(26,"label",8),c(27,"Quantity:"),a(),s(28,"input",9),m("ngModelChange",function(r){return g(i.quantity,r)||(i.quantity=r),r}),a()(),s(29,"div",3)(30,"label",10),c(31,"Price:"),a(),s(32,"input",11),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(33,"div",3)(34,"button",12),_("click",function(){return i.addFruit()}),c(35," Add Fruit "),a()()()()),t&2&&(p(15),S("ngForOf",i.fruits),p(5),h("ngModel",i.id),p(4),h("ngModel",i.name),p(4),h("ngModel",i.quantity),p(4),h("ngModel",i.price))},dependencies:[P,D,k,T,ve,x,I],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function kw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.id),p(2),y(t.name),p(2),y(t.professor),p(2),y(t.units)}}var xs=class e{courses=[];id="";name="";teacher="";units=0;professor;addCourse(){this.courses.push({id:this.id,name:this.name,professor:this.professor,units:this.units}),this.id="",this.name="",this.teacher="",this.units=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-course-list"]],standalone:!0,features:[w],decls:34,vars:5,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"text-center"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for",""],["type","text","placeholder","Course ID",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Course Name",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Professor",1,"form-control",3,"ngModelChange","ngModel"],["type","number","placeholder","Units",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),c(5,"Course List"),a(),s(6,"table",4)(7,"thead")(8,"tr")(9,"th"),c(10,"Course ID"),a(),s(11,"th"),c(12,"Course Name"),a(),s(13,"th"),c(14,"Professor"),a(),s(15,"th"),c(16,"Units"),a()()(),s(17,"tbody"),E(18,kw,9,4,"tr",5),a()()()(),s(19,"div"),le(20,"label",6),s(21,"input",7),m("ngModelChange",function(r){return g(i.id,r)||(i.id=r),r}),a()(),s(22,"div"),le(23,"label",6),s(24,"input",8),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(25,"div"),le(26,"label",6),s(27,"input",9),m("ngModelChange",function(r){return g(i.professor,r)||(i.professor=r),r}),a()(),s(28,"div"),le(29,"label",6),s(30,"input",10),m("ngModelChange",function(r){return g(i.units,r)||(i.units=r),r}),a()(),s(31,"div")(32,"button",11),_("click",function(){return i.addCourse()}),c(33,"Add Course"),a()()()()),t&2&&(p(18),S("ngForOf",i.courses),p(3),h("ngModel",i.id),p(3),h("ngModel",i.name),p(3),h("ngModel",i.professor),p(3),h("ngModel",i.units))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Vw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.id),p(2),y(t.name),p(2),y(t.isbn)}}var Is=class e{books=[];id="";name="";isbn="";addBook(){this.books.push({id:this.id,name:this.name,isbn:this.isbn}),this.id="",this.name="",this.isbn=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-book-list"]],standalone:!0,features:[w],decls:29,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"text-center"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for",""],["type","text","placeholder","Book ID",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Book Name",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","ISBN",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),c(5,"Book List"),a(),s(6,"table",4)(7,"thead")(8,"tr")(9,"th"),c(10,"Book ID"),a(),s(11,"th"),c(12,"Book Name"),a(),s(13,"th"),c(14,"ISBN"),a()()(),s(15,"tbody"),E(16,Vw,7,3,"tr",5),a()()()(),s(17,"div"),le(18,"label",6),s(19,"input",7),m("ngModelChange",function(r){return g(i.id,r)||(i.id=r),r}),a()(),s(20,"div"),le(21,"label",6),s(22,"input",8),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(23,"div"),le(24,"label",6),s(25,"input",9),m("ngModelChange",function(r){return g(i.isbn,r)||(i.isbn=r),r}),a()(),s(26,"div")(27,"button",10),_("click",function(){return i.addBook()}),c(28," Add Book "),a()()()()),t&2&&(p(16),S("ngForOf",i.books),p(3),h("ngModel",i.id),p(3),h("ngModel",i.name),p(3),h("ngModel",i.isbn))},dependencies:[P,D,T,x,I],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function jw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.country),p(2),y(t.population)}}var Ts=class e{cities=[];name="";country="";population=0;addCity(){this.cities.push({name:this.name,country:this.country,population:this.population}),this.name="",this.country="",this.population=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-city-list"]],standalone:!0,features:[w],decls:29,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"text-center"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for",""],["type","text","placeholder","City Name",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Country",1,"form-control",3,"ngModelChange","ngModel"],["type","number","placeholder","Population",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),c(5,"City List"),a(),s(6,"table",4)(7,"thead")(8,"tr")(9,"th"),c(10,"City Name"),a(),s(11,"th"),c(12,"Country"),a(),s(13,"th"),c(14,"Population"),a()()(),s(15,"tbody"),E(16,jw,7,3,"tr",5),a()()()(),s(17,"div"),le(18,"label",6),s(19,"input",7),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(20,"div"),le(21,"label",6),s(22,"input",8),m("ngModelChange",function(r){return g(i.country,r)||(i.country=r),r}),a()(),s(23,"div"),le(24,"label",6),s(25,"input",9),m("ngModelChange",function(r){return g(i.population,r)||(i.population=r),r}),a()(),s(26,"div")(27,"button",10),_("click",function(){return i.addCity()}),c(28," Add City "),a()()()()),t&2&&(p(16),S("ngForOf",i.cities),p(3),h("ngModel",i.name),p(3),h("ngModel",i.country),p(3),h("ngModel",i.population))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Bw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.director),p(2),y(t.year),p(2),y(t.rating)}}var Ps=class e{movies=[];name="";director="";year=0;rating=0;addMovie(){this.movies.push({name:this.name,director:this.director,year:this.year,rating:this.rating}),this.name="",this.director="",this.year=0,this.rating=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-movie-list"]],standalone:!0,features:[w],decls:34,vars:5,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"table"],[4,"ngFor","ngForOf"],["for",""],["type","text","placeholder","Movie Name",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Director",1,"form-control",3,"ngModelChange","ngModel"],["type","number","placeholder","Year",1,"form-control",3,"ngModelChange","ngModel"],["type","number","placeholder","Rating",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Movie List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Movie Name"),a(),s(11,"th"),c(12,"Director"),a(),s(13,"th"),c(14,"Year"),a(),s(15,"th"),c(16,"Rating"),a()()(),s(17,"tbody"),E(18,Bw,9,4,"tr",4),a()()()(),s(19,"div"),le(20,"label",5),s(21,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(22,"div"),le(23,"label",5),s(24,"input",7),m("ngModelChange",function(r){return g(i.director,r)||(i.director=r),r}),a()(),s(25,"div"),le(26,"label",5),s(27,"input",8),m("ngModelChange",function(r){return g(i.year,r)||(i.year=r),r}),a()(),s(28,"div"),le(29,"label",5),s(30,"input",9),m("ngModelChange",function(r){return g(i.rating,r)||(i.rating=r),r}),a()(),s(31,"div")(32,"button",10),_("click",function(){return i.addMovie()}),c(33," Add Movie "),a()()()()),t&2&&(p(18),S("ngForOf",i.movies),p(3),h("ngModel",i.name),p(3),h("ngModel",i.director),p(3),h("ngModel",i.year),p(3),h("ngModel",i.rating))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Ww(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.year),p(2),y(t.model),p(2),y(t.price)}}var Os=class e{carModels=[];name="";year=0;model="";price=null;addCarModel(){if(this.name&&this.year&&this.model&&this.price!==null){let n={name:this.name,year:this.year,model:this.model,price:this.price};this.carModels.push(n),this.name="",this.year=0,this.model="",this.price=null}else alert("Please fill in all fields.")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-car-model-list"]],standalone:!0,features:[w],decls:34,vars:5,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name","required","",3,"ngModelChange","ngModel"],["for","year"],["type","text","id","year","name","year","required","",3,"ngModelChange","ngModel"],["for","model"],["type","text","id","model","name","model","required","",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price","name","price","required","",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h2"),c(2,"Car Model List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Year"),a(),s(10,"th"),c(11,"Model"),a(),s(12,"th"),c(13,"Price"),a()()(),s(14,"tbody"),E(15,Ww,9,4,"tr",0),a()(),s(16,"div")(17,"label",1),c(18,"Name:"),a(),s(19,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(20,"div")(21,"label",3),c(22,"Year:"),a(),s(23,"input",4),m("ngModelChange",function(r){return g(i.year,r)||(i.year=r),r}),a()(),s(24,"div")(25,"label",5),c(26,"Model:"),a(),s(27,"input",6),m("ngModelChange",function(r){return g(i.model,r)||(i.model=r),r}),a()(),s(28,"div")(29,"label",7),c(30,"Price:"),a(),s(31,"input",8),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(32,"button",9),_("click",function(){return i.addCarModel()}),c(33,"Add Car Model"),a()()),t&2&&(p(15),S("ngForOf",i.carModels),p(4),h("ngModel",i.name),p(4),h("ngModel",i.year),p(4),h("ngModel",i.model),p(4),h("ngModel",i.price))},dependencies:[I,P,D,k,T,ve,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Uw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.price)}}var Ns=class e{products=[];name="";price=0;addProduct(){this.name&&this.price&&(this.products.push({name:this.name,price:this.price}),this.name="",this.price=0)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-product-list"]],standalone:!0,features:[w],decls:23,vars:3,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price","name","price",3,"ngModelChange","ngModel"],["type","button",1,"btn","btn-primary","mt-3",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Product List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Price"),a()()(),s(10,"tbody"),E(11,Uw,5,2,"tr",0),a()(),s(12,"div")(13,"label",1),c(14,"Name:"),a(),s(15,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(16,"div")(17,"label",3),c(18,"Price:"),a(),s(19,"input",4),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(20,"div")(21,"button",5),_("click",function(){return i.addProduct()}),c(22," Add Product "),a()()()),t&2&&(p(11),S("ngForOf",i.products),p(4),h("ngModel",i.name),p(4),h("ngModel",i.price))},dependencies:[P,D,k,T,x,I],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Hw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a()()),e&2){let t=n.$implicit;p(2),y(t.subject),p(2),y(t.professor)}}var As=class e{addCarModel(){throw new Error("Method not implemented.")}subjects=[];subject="";professor="";addSubject(){this.subjects.push({subject:this.subject,professor:this.professor}),this.subject="",this.professor=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-subject-list"]],standalone:!0,features:[w],decls:22,vars:3,consts:[[4,"ngFor","ngForOf"],["for","subject"],["type","text","id","subject","name","subject","required","",3,"ngModelChange","ngModel"],["for","professor"],["type","text","id","professor","name","professor","required","",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Subject List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Subject"),a(),s(8,"th"),c(9,"Professor"),a()()(),s(10,"tbody"),E(11,Hw,5,2,"tr",0),a()(),s(12,"div")(13,"label",1),c(14,"Subject:"),a(),s(15,"input",2),m("ngModelChange",function(r){return g(i.subject,r)||(i.subject=r),r}),a()(),s(16,"div")(17,"label",3),c(18,"Professor:"),a(),s(19,"input",4),m("ngModelChange",function(r){return g(i.professor,r)||(i.professor=r),r}),a()(),s(20,"button",5),_("click",function(){return i.addSubject()}),c(21,"Add Subject"),a()()),t&2&&(p(11),S("ngForOf",i.subjects),p(4),h("ngModel",i.subject),p(4),h("ngModel",i.professor))},dependencies:[P,D,T,ve,x,I],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function zw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.capital),p(2),y(t.population)}}var Ls=class e{countries=[];name="";capital="";population="";addCountry(){this.countries.push({name:this.name,capital:this.capital,population:Number(this.population)}),this.name="",this.capital="",this.population=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-country-list"]],standalone:!0,features:[w],decls:28,vars:4,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name","required","",3,"ngModelChange","ngModel"],["for","capital"],["type","text","id","capital","name","capital","required","",3,"ngModelChange","ngModel"],["for","population"],["type","number","id","population","name","population","required","",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Country List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Capital"),a(),s(10,"th"),c(11,"Population"),a()()(),s(12,"tbody"),E(13,zw,7,3,"tr",0),a()(),s(14,"div")(15,"label",1),c(16,"Name:"),a(),s(17,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(18,"div")(19,"label",3),c(20,"Capital:"),a(),s(21,"input",4),m("ngModelChange",function(r){return g(i.capital,r)||(i.capital=r),r}),a()(),s(22,"div")(23,"label",5),c(24,"Population:"),a(),s(25,"input",6),m("ngModelChange",function(r){return g(i.population,r)||(i.population=r),r}),a()(),s(26,"button",7),_("click",function(){return i.addCountry()}),c(27,"Add Country"),a()()),t&2&&(p(13),S("ngForOf",i.countries),p(4),h("ngModel",i.name),p(4),h("ngModel",i.capital),p(4),h("ngModel",i.population))},dependencies:[I,P,D,k,T,ve,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function $w(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.team)}}var Fs=class e{sports=[];name="";team="";addSport(){this.sports.push({name:this.name,team:this.team}),this.name="",this.team=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-sports-list"]],standalone:!0,features:[w],decls:22,vars:3,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name","required","",3,"ngModelChange","ngModel"],["for","team"],["type","text","id","team","name","team","required","",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Sports List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Team"),a()()(),s(10,"tbody"),E(11,$w,5,2,"tr",0),a()(),s(12,"div")(13,"label",1),c(14,"Name:"),a(),s(15,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(16,"div")(17,"label",3),c(18,"Team:"),a(),s(19,"input",4),m("ngModelChange",function(r){return g(i.team,r)||(i.team=r),r}),a()(),s(20,"button",5),_("click",function(){return i.addSport()}),c(21,"Add Sport"),a()()),t&2&&(p(11),S("ngForOf",i.sports),p(4),h("ngModel",i.name),p(4),h("ngModel",i.team))},dependencies:[I,P,D,T,ve,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Gw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a()()),e&2){let t=n.$implicit;p(2),y(t.vegetable),p(2),y(t.price)}}var Rs=class e{vegetables=[];vegetable="";price="";addVegetable(){this.vegetables.push({vegetable:this.vegetable,price:Number(this.price)}),this.vegetable="",this.price=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-vegetable-list"]],standalone:!0,features:[w],decls:22,vars:3,consts:[[4,"ngFor","ngForOf"],["for","vegetable"],["type","text","id","vegetable","name","name","required","",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price","name","price","required","",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Vegetables List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Vegetable"),a(),s(8,"th"),c(9,"Price"),a()()(),s(10,"tbody"),E(11,Gw,5,2,"tr",0),a()(),s(12,"div")(13,"label",1),c(14,"Vegetable:"),a(),s(15,"input",2),m("ngModelChange",function(r){return g(i.vegetable,r)||(i.vegetable=r),r}),a()(),s(16,"div")(17,"label",3),c(18,"Price:"),a(),s(19,"input",4),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(20,"button",5),_("click",function(){return i.addVegetable()}),c(21,"Add Vegetable"),a()()),t&2&&(p(11),S("ngForOf",i.vegetables),p(4),h("ngModel",i.vegetable),p(4),h("ngModel",i.price))},dependencies:[I,P,D,k,T,ve,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function qw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a()()),e&2){let t=n.$implicit;p(2),y(t.petname),p(2),y(t.breed)}}var ks=class e{animals=[];petname="";origin="";breed;addAnimal(){this.animals.push({petname:this.petname,breed:this.breed}),this.petname="",this.breed=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-animal-list"]],standalone:!0,features:[w],decls:22,vars:3,consts:[[4,"ngFor","ngForOf"],["for","petname"],["type","text","id","petname","name","name","required","",3,"ngModelChange","ngModel"],["for","breed"],["type","text","id","breed","name","breed","required","",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Animals List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Pet Name"),a(),s(8,"th"),c(9,"Breed"),a()()(),s(10,"tbody"),E(11,qw,5,2,"tr",0),a()(),s(12,"div")(13,"label",1),c(14,"Pet Name:"),a(),s(15,"input",2),m("ngModelChange",function(r){return g(i.petname,r)||(i.petname=r),r}),a()(),s(16,"div")(17,"label",3),c(18,"Breed:"),a(),s(19,"input",4),m("ngModelChange",function(r){return g(i.breed,r)||(i.breed=r),r}),a()(),s(20,"button",5),_("click",function(){return i.addAnimal()}),c(21,"Add Animal"),a()()),t&2&&(p(11),S("ngForOf",i.animals),p(4),h("ngModel",i.petname),p(4),h("ngModel",i.breed))},dependencies:[I,P,D,T,ve,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Zw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.description),p(2),y(t.price),p(2),y(t.quantity)}}var Vs=class e{tools=[];name="";description="";price="";quantity="";addTool(){this.tools.push({name:this.name,description:this.description,price:Number(this.price),quantity:Number(this.quantity)}),this.name="",this.description="",this.price="",this.quantity=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-tool-list"]],standalone:!0,features:[w],decls:38,vars:5,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","name"],["id","name","type","text",1,"form-control",3,"ngModelChange","ngModel"],["for","description"],["id","description","type","text",1,"form-control",3,"ngModelChange","ngModel"],["for","price"],["id","price","type","number",1,"form-control",3,"ngModelChange","ngModel"],["for","quantity"],["id","quantity","type","number",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Tool List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Description"),a(),s(13,"th"),c(14,"Price"),a(),s(15,"th"),c(16,"Quantity"),a()()(),s(17,"tbody"),E(18,Zw,9,4,"tr",4),a()()()(),s(19,"div")(20,"label",5),c(21," Name: "),a(),s(22,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(23,"div")(24,"label",7),c(25," Description: "),a(),s(26,"input",8),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(27,"div")(28,"label",9),c(29," Price: "),a(),s(30,"input",10),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(31,"div")(32,"label",11),c(33," Quantity: "),a(),s(34,"input",12),m("ngModelChange",function(r){return g(i.quantity,r)||(i.quantity=r),r}),a()(),s(35,"div")(36,"button",13),_("click",function(){return i.addTool()}),c(37," Add Tool "),a()()()()),t&2&&(p(18),S("ngForOf",i.tools),p(4),h("ngModel",i.name),p(4),h("ngModel",i.description),p(4),h("ngModel",i.price),p(4),h("ngModel",i.quantity))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Yw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.langugae),p(2),y(t.description),p(2),y(t.origin)}}var js=class e{languages=[];language="";description="";origin="";addLanguage(){this.languages.push({langugae:this.language,description:this.description,origin:this.origin}),this.language="",this.description="",this.origin=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-language-list"]],standalone:!0,features:[w],decls:32,vars:4,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"table"],[4,"ngFor","ngForOf"],["for","language"],["id","language","type","text",1,"form-control",3,"ngModelChange","ngModel"],["for","description"],["id","description","type","text",1,"form-control",3,"ngModelChange","ngModel"],["for","origin"],["id","origin","type","text",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Language List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Language"),a(),s(11,"th"),c(12,"Description"),a(),s(13,"th"),c(14,"Origin"),a()()(),s(15,"tbody"),E(16,Yw,7,3,"tr",4),a()()()(),s(17,"div")(18,"label",5),c(19," Language: "),a(),s(20,"input",6),m("ngModelChange",function(r){return g(i.language,r)||(i.language=r),r}),a()(),s(21,"div")(22,"label",7),c(23," Description: "),a(),s(24,"input",8),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(25,"div")(26,"label",9),c(27," Origin: "),a(),s(28,"input",10),m("ngModelChange",function(r){return g(i.origin,r)||(i.origin=r),r}),a()(),s(29,"div")(30,"button",11),_("click",function(){return i.addLanguage()}),c(31," Add Language "),a()()()()),t&2&&(p(16),S("ngForOf",i.languages),p(4),h("ngModel",i.language),p(4),h("ngModel",i.description),p(4),h("ngModel",i.origin))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Qw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.description),p(2),y(t.platform)}}var Bs=class e{games=[];name="";description="";platform="";game;addGame(){this.games.push({name:this.name,description:this.description,platform:this.platform}),this.name="",this.description="",this.platform=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-game-list"]],standalone:!0,features:[w],decls:32,vars:4,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"table"],[4,"ngFor","ngForOf"],["for","game"],["id","game","type","text",1,"form-control",3,"ngModelChange","ngModel"],["for","description"],["id","description","type","text",1,"form-control",3,"ngModelChange","ngModel"],["for","platform"],["id","platform","type","text",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Game List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Description"),a(),s(13,"th"),c(14,"Platform"),a()()(),s(15,"tbody"),E(16,Qw,7,3,"tr",4),a()()()(),s(17,"div")(18,"label",5),c(19," Game: "),a(),s(20,"input",6),m("ngModelChange",function(r){return g(i.game,r)||(i.game=r),r}),a()(),s(21,"div")(22,"label",7),c(23," Description: "),a(),s(24,"input",8),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(25,"div")(26,"label",9),c(27," Platform: "),a(),s(28,"input",10),m("ngModelChange",function(r){return g(i.platform,r)||(i.platform=r),r}),a()(),s(29,"div")(30,"button",11),_("click",function(){return i.addGame()}),c(31," Add Game "),a()()()()),t&2&&(p(16),S("ngForOf",i.games),p(4),h("ngModel",i.game),p(4),h("ngModel",i.description),p(4),h("ngModel",i.platform))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Kw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.description),p(2),y(t.type)}}var Ws=class e{softwareList=[];name="";description="";platform="";type;addSoftware(){this.softwareList.push({name:this.name,description:this.description,type:this.type}),this.name="",this.description="",this.platform=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-software-list"]],standalone:!0,features:[w],decls:32,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","name"],["id","name","type","text",1,"form-control",3,"ngModelChange","ngModel"],["for","description"],["id","description","type","text",1,"form-control",3,"ngModelChange","ngModel"],["for","type"],["id","type","type","text",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Software List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Description"),a(),s(13,"th"),c(14,"Type of Software"),a()()(),s(15,"tbody"),E(16,Kw,7,3,"tr",4),a()()()(),s(17,"div")(18,"label",5),c(19," Name: "),a(),s(20,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(21,"div")(22,"label",7),c(23," Description: "),a(),s(24,"input",8),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(25,"div")(26,"label",9),c(27," Type of Software: "),a(),s(28,"input",10),m("ngModelChange",function(r){return g(i.type,r)||(i.type=r),r}),a()(),s(29,"div")(30,"button",11),_("click",function(){return i.addSoftware()}),c(31," Add Software "),a()()()()),t&2&&(p(16),S("ngForOf",i.softwareList),p(4),h("ngModel",i.name),p(4),h("ngModel",i.description),p(4),h("ngModel",i.type))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Jw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.email),p(2),y(t.phone)}}var Us=class e{phoneContactList=[];name="";email="";phone="";addPhoneContact(){this.phoneContactList.push({name:this.name,email:this.email,phone:this.phone}),this.name="",this.email="",this.phone=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-phone-contact-list"]],standalone:!0,features:[w],decls:33,vars:4,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"table"],[4,"ngFor","ngForOf"],["for","name"],["id","name","type","text",1,"form-control",3,"ngModelChange","ngModel"],["for","email"],["id","email","type","text",1,"form-control",3,"ngModelChange","ngModel"],["for","phone"],["id","phone","type","text",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Phone Contact List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Email"),a(),s(13,"th"),c(14,"Phone"),a()()(),s(15,"tbody"),E(16,Jw,7,3,"tr",4),a()()()(),s(17,"div")(18,"div")(19,"label",5),c(20," Name: "),a(),s(21,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(22,"div")(23,"label",7),c(24," Email: "),a(),s(25,"input",8),m("ngModelChange",function(r){return g(i.email,r)||(i.email=r),r}),a()(),s(26,"div")(27,"label",9),c(28," Phone: "),a(),s(29,"input",10),m("ngModelChange",function(r){return g(i.phone,r)||(i.phone=r),r}),a()(),s(30,"div")(31,"button",11),_("click",function(){return i.addPhoneContact()}),c(32," Add Phone Contact "),a()()()()()),t&2&&(p(16),S("ngForOf",i.phoneContactList),p(5),h("ngModel",i.name),p(4),h("ngModel",i.email),p(4),h("ngModel",i.phone))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function Xw(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a(),s(11,"td"),c(12),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.artist),p(2),y(t.album),p(2),y(t.duration),p(2),y(t.genre),p(2),y(t.year)}}var Hs=class e{musicPlayList=[];name="";artist="";album="";duration="";genre="";year="";addMusicPlayList(){this.musicPlayList.push({name:this.name,artist:this.artist,album:this.album,duration:this.duration,genre:this.genre,year:this.year}),this.name="",this.artist="",this.album="",this.duration="",this.genre="",this.year=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-music-playlist"]],standalone:!0,features:[w],decls:50,vars:7,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"text-center"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name",3,"ngModelChange","ngModel"],["for","artist"],["type","text","id","artist","name","artist",3,"ngModelChange","ngModel"],["for","album"],["type","text","id","album","name","album",3,"ngModelChange","ngModel"],["for","duration"],["type","text","id","duration","name","duration",3,"ngModelChange","ngModel"],["for","genre"],["type","text","id","genre","name","genre",3,"ngModelChange","ngModel"],["for","year"],["type","text","id","year","name","year",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),c(5,"Music Play List"),a(),s(6,"table",4)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Artist"),a(),s(13,"th"),c(14,"Album"),a(),s(15,"th"),c(16,"Duration"),a(),s(17,"th"),c(18,"Genre"),a(),s(19,"th"),c(20,"Year"),a()()(),s(21,"tbody"),E(22,Xw,13,6,"tr",5),a()()()(),s(23,"div")(24,"label",6),c(25,"Name:"),a(),s(26,"input",7),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(27,"div")(28,"label",8),c(29,"Artist:"),a(),s(30,"input",9),m("ngModelChange",function(r){return g(i.artist,r)||(i.artist=r),r}),a()(),s(31,"div")(32,"label",10),c(33,"Album:"),a(),s(34,"input",11),m("ngModelChange",function(r){return g(i.album,r)||(i.album=r),r}),a()(),s(35,"div")(36,"label",12),c(37,"Duration:"),a(),s(38,"input",13),m("ngModelChange",function(r){return g(i.duration,r)||(i.duration=r),r}),a()(),s(39,"div")(40,"label",14),c(41,"Genre:"),a(),s(42,"input",15),m("ngModelChange",function(r){return g(i.genre,r)||(i.genre=r),r}),a()(),s(43,"div")(44,"label",16),c(45,"Year:"),a(),s(46,"input",17),m("ngModelChange",function(r){return g(i.year,r)||(i.year=r),r}),a()(),s(47,"div")(48,"button",18),_("click",function(){return i.addMusicPlayList()}),c(49,"Add Music"),a()()()()),t&2&&(p(22),S("ngForOf",i.musicPlayList),p(4),h("ngModel",i.name),p(4),h("ngModel",i.artist),p(4),h("ngModel",i.album),p(4),h("ngModel",i.duration),p(4),h("ngModel",i.genre),p(4),h("ngModel",i.year))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function eD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.price),p(2),y(t.description),p(2),y(t.rating)}}var zs=class e{foodMenuList=[];name="";price=0;description="";rating=0;addFoodMenu(){this.foodMenuList.push({name:this.name,price:this.price,description:this.description,rating:this.rating}),this.name="",this.price=0,this.description="",this.rating=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-food-menu"]],standalone:!0,features:[w],decls:32,vars:5,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price","name","price",3,"ngModelChange","ngModel"],["for","description"],["type","text","id","description","name","description",3,"ngModelChange","ngModel"],["for","rating"],["type","number","id","rating","name","rating",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"table")(2,"thead")(3,"tr")(4,"th"),c(5,"Name"),a(),s(6,"th"),c(7,"Price"),a(),s(8,"th"),c(9,"Description"),a(),s(10,"th"),c(11,"Rating"),a()()(),s(12,"tbody"),E(13,eD,9,4,"tr",0),a()(),s(14,"div")(15,"label",1),c(16,"Name:"),a(),s(17,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(18,"div")(19,"label",3),c(20,"Price:"),a(),s(21,"input",4),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(22,"div")(23,"label",5),c(24,"Description:"),a(),s(25,"input",6),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(26,"div")(27,"label",7),c(28,"Rating:"),a(),s(29,"input",8),m("ngModelChange",function(r){return g(i.rating,r)||(i.rating=r),r}),a()(),s(30,"button",9),_("click",function(){return i.addFoodMenu()}),c(31,"Add Food"),a()()),t&2&&(p(13),S("ngForOf",i.foodMenuList),p(4),h("ngModel",i.name),p(4),h("ngModel",i.price),p(4),h("ngModel",i.description),p(4),h("ngModel",i.rating))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function tD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.price),p(2),y(t.description)}}var $s=class e{groceryList=[];name="";price=0;description="";addGrocery(){this.groceryList.push({name:this.name,price:this.price,description:this.description}),this.name="",this.price=0,this.description=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-grocery-list"]],standalone:!0,features:[w],decls:32,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name",3,"ngModelChange","ngModel"],["for","price"],["type","text","id","price","name","price",3,"ngModelChange","ngModel"],["for","description"],["type","text","id","description","name","description",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Grocery List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Price"),a(),s(13,"th"),c(14,"Description"),a()()(),s(15,"tbody"),E(16,tD,7,3,"tr",4),a()()()(),s(17,"div")(18,"label",5),c(19,"Name:"),a(),s(20,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(21,"div")(22,"label",7),c(23,"Price:"),a(),s(24,"input",8),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(25,"div")(26,"label",9),c(27,"Description:"),a(),s(28,"input",10),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(29,"div")(30,"button",11),_("click",function(){return i.addGrocery()}),c(31,"Add Grocery"),a()()()()),t&2&&(p(16),S("ngForOf",i.groceryList),p(4),h("ngModel",i.name),p(4),h("ngModel",i.price),p(4),h("ngModel",i.description))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function nD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.section),p(2),y(t.professor),p(2),y(t.studentCount)}}var Gs=class e{classroomList=[];section="";professor="";studentCount=0;addNewClassroom(){this.classroomList.push({section:this.section,professor:this.professor,studentCount:this.studentCount}),this.section="",this.professor="",this.studentCount=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-classroom-list"]],standalone:!0,features:[w],decls:33,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","section"],["type","text","id","section",3,"ngModelChange","ngModel"],["for","professor"],["type","text","id","professor",3,"ngModelChange","ngModel"],["for","studentCount"],["type","text","id","studentCount",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Classroom List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Section"),a(),s(11,"th"),c(12,"Professor"),a(),s(13,"th"),c(14,"Student Count"),a()()(),s(15,"tbody"),E(16,nD,7,3,"tr",4),a()()()(),s(17,"div")(18,"label",5),c(19,"Section:"),a(),s(20,"input",6),m("ngModelChange",function(r){return g(i.section,r)||(i.section=r),r}),a()(),s(21,"div")(22,"label",7),c(23,"Professor:"),a(),s(24,"input",8),m("ngModelChange",function(r){return g(i.professor,r)||(i.professor=r),r}),a()(),s(25,"div")(26,"label",9),c(27,"Student Count:"),a(),s(28,"input",10),m("ngModelChange",function(r){return g(i.studentCount,r)||(i.studentCount=r),r}),a()(),s(29,"div",1)(30,"div",2)(31,"button",11),_("click",function(){return i.addNewClassroom()}),c(32," Add New Classroom "),a()()()()()),t&2&&(p(16),S("ngForOf",i.classroomList),p(4),h("ngModel",i.section),p(4),h("ngModel",i.professor),p(4),h("ngModel",i.studentCount))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function iD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.id),p(2),y(t.name),p(2),y(t.quantity),p(2),y(t.price)}}var qs=class e{inventoryList=[];id=0;name="";quantity=0;price=0;addNewInventory(){this.inventoryList.push({id:this.id,name:this.name,quantity:this.quantity,price:this.price}),this.id=0,this.name="",this.quantity=0,this.price=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-inventory-list"]],standalone:!0,features:[w],decls:39,vars:5,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","id"],["type","text","id","id",3,"ngModelChange","ngModel"],["for","name"],["type","text","id","name",3,"ngModelChange","ngModel"],["for","quantity"],["type","text","id","quantity",3,"ngModelChange","ngModel"],["for","price"],["type","text","id","price",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Inventory List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"ID"),a(),s(11,"th"),c(12,"Name"),a(),s(13,"th"),c(14,"Quantity"),a(),s(15,"th"),c(16,"Price"),a()()(),s(17,"tbody"),E(18,iD,9,4,"tr",4),a()()()(),s(19,"div")(20,"label",5),c(21,"ID:"),a(),s(22,"input",6),m("ngModelChange",function(r){return g(i.id,r)||(i.id=r),r}),a()(),s(23,"div")(24,"label",7),c(25,"Name:"),a(),s(26,"input",8),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(27,"div")(28,"label",9),c(29,"Quantity:"),a(),s(30,"input",10),m("ngModelChange",function(r){return g(i.quantity,r)||(i.quantity=r),r}),a()(),s(31,"div")(32,"label",11),c(33,"Price:"),a(),s(34,"input",12),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(35,"div",1)(36,"div",2)(37,"button",13),_("click",function(){return i.addNewInventory()}),c(38," Add Inventory "),a()()()()()),t&2&&(p(18),S("ngForOf",i.inventoryList),p(4),h("ngModel",i.id),p(4),h("ngModel",i.name),p(4),h("ngModel",i.quantity),p(4),h("ngModel",i.price))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function rD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.lesson),p(2),y(t.duration),p(2),y(t.instructor)}}var Zs=class e{lectureList=[];lesson="";duration=0;instructor="";addLecture(){this.lectureList.push({lesson:this.lesson,duration:this.duration,instructor:this.instructor}),this.lesson="",this.duration=0,this.instructor=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-lecture-list"]],standalone:!0,features:[w],decls:33,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","lesson"],["type","text","id","lesson",3,"ngModelChange","ngModel"],["for","duration"],["type","text","id","duration",3,"ngModelChange","ngModel"],["for","instructor"],["type","text","id","instructor",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Lecture List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Duration"),a(),s(13,"th"),c(14,"Instructor"),a()()(),s(15,"tbody"),E(16,rD,7,3,"tr",4),a()()()(),s(17,"div")(18,"label",5),c(19,"Lesson:"),a(),s(20,"input",6),m("ngModelChange",function(r){return g(i.lesson,r)||(i.lesson=r),r}),a()(),s(21,"div")(22,"label",7),c(23,"Duration:"),a(),s(24,"input",8),m("ngModelChange",function(r){return g(i.duration,r)||(i.duration=r),r}),a()(),s(25,"div")(26,"label",9),c(27,"Instructor:"),a(),s(28,"input",10),m("ngModelChange",function(r){return g(i.instructor,r)||(i.instructor=r),r}),a()(),s(29,"div",1)(30,"div",2)(31,"button",11),_("click",function(){return i.addLecture()}),c(32," Add Lecture "),a()()()()()),t&2&&(p(16),S("ngForOf",i.lectureList),p(4),h("ngModel",i.lesson),p(4),h("ngModel",i.duration),p(4),h("ngModel",i.instructor))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function oD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.quantity),p(2),y(t.price)}}var Ys=class e{stationeryList=[];name="";quantity=0;price=0;addNewStationery(){this.stationeryList.push({name:this.name,quantity:this.quantity,price:this.price}),this.name="",this.quantity=0,this.price=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-stationery-list"]],standalone:!0,features:[w],decls:33,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name",3,"ngModelChange","ngModel"],["for","quantity"],["type","text","id","quantity",3,"ngModelChange","ngModel"],["for","price"],["type","text","id","price",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Stationery List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Quantity"),a(),s(13,"th"),c(14,"Price"),a()()(),s(15,"tbody"),E(16,oD,7,3,"tr",4),a()()()(),s(17,"div")(18,"label",5),c(19,"Name:"),a(),s(20,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(21,"div")(22,"label",7),c(23,"Quantity:"),a(),s(24,"input",8),m("ngModelChange",function(r){return g(i.quantity,r)||(i.quantity=r),r}),a()(),s(25,"div")(26,"label",9),c(27,"Price:"),a(),s(28,"input",10),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(29,"div",1)(30,"div",2)(31,"button",11),_("click",function(){return i.addNewStationery()}),c(32," Add Stationery "),a()()()()()),t&2&&(p(16),S("ngForOf",i.stationeryList),p(4),h("ngModel",i.name),p(4),h("ngModel",i.quantity),p(4),h("ngModel",i.price))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function sD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.kind),p(2),y(t.price),p(2),y(t.isAvailable),p(2),y(t.quantity)}}var Qs=class e{flowerList=[];name="";kind="";price=0;isAvailable="";quantity=0;addFlower(){this.flowerList.push({name:this.name,kind:this.kind,price:this.price,isAvailable:this.isAvailable,quantity:this.quantity}),this.name="",this.kind="",this.price=0,this.isAvailable="yes",this.quantity=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-flower-list"]],standalone:!0,features:[w],decls:44,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name",3,"ngModelChange","ngModel"],["for","kind"],["type","text","id","kind","name","kind",3,"ngModelChange","ngModel"],["for","price"],["type","text","id","price","name","price",3,"ngModelChange","ngModel"],["for","isAvailable"],["type","text","id","isAvailable","name","isAvailable",3,"ngModelChange","ngModel"],["for","quantity"],["type","text","id","quantity","name","quantity",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Flower List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Description"),a(),s(13,"th"),c(14,"Price"),a(),s(15,"th"),c(16,"Is Available"),a(),s(17,"th"),c(18,"Quantity"),a()()(),s(19,"tbody"),E(20,sD,11,5,"tr",4),a()()()(),s(21,"div")(22,"label",5),c(23,"Name:"),a(),s(24,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(25,"div")(26,"label",7),c(27,"Kind of Flower:"),a(),s(28,"input",8),m("ngModelChange",function(r){return g(i.kind,r)||(i.kind=r),r}),a()(),s(29,"div")(30,"label",9),c(31,"Price:"),a(),s(32,"input",10),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(33,"div")(34,"label",11),c(35,"Is Available:"),a(),s(36,"input",12),m("ngModelChange",function(r){return g(i.isAvailable,r)||(i.isAvailable=r),r}),a()(),s(37,"div")(38,"label",13),c(39,"Quantity:"),a(),s(40,"input",14),m("ngModelChange",function(r){return g(i.quantity,r)||(i.quantity=r),r}),a()(),s(41,"div")(42,"button",15),_("click",function(){return i.addFlower()}),c(43,"Add Flower"),a()()()()),t&2&&(p(20),S("ngForOf",i.flowerList),p(4),h("ngModel",i.name),p(4),h("ngModel",i.kind),p(4),h("ngModel",i.price),p(4),h("ngModel",i.isAvailable),p(4),h("ngModel",i.quantity))},dependencies:[P,D,T,x,I],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function aD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.time),p(2),y(t.location)}}var Ks=class e{destinations=[];name="";time="";location="";addDestination(){this.destinations.push({name:this.name,time:this.time,location:this.location}),this.name="",this.time="",this.location=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-destination-list"]],standalone:!0,features:[w],decls:32,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name",3,"ngModelChange","ngModel"],["for","time"],["type","text","id","time","name","time",3,"ngModelChange","ngModel"],["for","location"],["type","text","id","location","name","location",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Destination List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Time Travel"),a(),s(13,"th"),c(14,"Location"),a()()(),s(15,"tbody"),E(16,aD,7,3,"tr",4),a()()()(),s(17,"div")(18,"label",5),c(19,"Name:"),a(),s(20,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(21,"div")(22,"label",7),c(23,"Time Travel:"),a(),s(24,"input",8),m("ngModelChange",function(r){return g(i.time,r)||(i.time=r),r}),a()(),s(25,"div")(26,"label",9),c(27,"Location:"),a(),s(28,"input",10),m("ngModelChange",function(r){return g(i.location,r)||(i.location=r),r}),a()(),s(29,"div")(30,"button",11),_("click",function(){return i.addDestination()}),c(31,"Add Destination"),a()()()()),t&2&&(p(16),S("ngForOf",i.destinations),p(4),h("ngModel",i.name),p(4),h("ngModel",i.time),p(4),h("ngModel",i.location))},dependencies:[P,D,T,x,I],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function lD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a(),s(11,"td"),c(12),a(),s(13,"td"),c(14),a(),s(15,"td"),c(16),a()()),e&2){let t=n.$implicit;p(2),y(t.model),p(2),y(t.brand),p(2),y(t.price),p(2),y(t.processor),p(2),y(t.ram),p(2),y(t.storage),p(2),y(t.display),p(2),y(t.graphics)}}var Js=class e{laptops=[];id=0;model="";brand="";price=0;processor="";ram="";storage="";display="";graphics="";addLaptop(){this.laptops.push({id:this.id,model:this.model,brand:this.brand,price:this.price,processor:this.processor,ram:this.ram,storage:this.storage,display:this.display,graphics:this.graphics}),this.id=0,this.model="",this.brand="",this.price=0,this.processor="",this.ram="",this.storage="",this.display="",this.graphics=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-laptop-list"]],standalone:!0,features:[w],decls:66,vars:10,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"text-center"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],["for","id"],["type","text","id","id",3,"ngModelChange","ngModel"],["for","model"],["type","text","id","model",3,"ngModelChange","ngModel"],["for","brand"],["type","text","id","brand",3,"ngModelChange","ngModel"],["for","price"],["type","text","id","price",3,"ngModelChange","ngModel"],["for","processor"],["type","text","id","processor",3,"ngModelChange","ngModel"],["for","ram"],["type","text","id","ram",3,"ngModelChange","ngModel"],["for","storage"],["type","text","id","storage",3,"ngModelChange","ngModel"],["for","display"],["type","text","id","display",3,"ngModelChange","ngModel"],["for","graphics"],["type","text","id","graphics",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),c(5,"Laptop List"),a(),s(6,"table",4)(7,"thead")(8,"tr")(9,"th"),c(10,"Model"),a(),s(11,"th"),c(12,"Brand"),a(),s(13,"th"),c(14,"Price"),a(),s(15,"th"),c(16,"Processor"),a(),s(17,"th"),c(18,"RAM"),a(),s(19,"th"),c(20,"Storage"),a(),s(21,"th"),c(22,"Display"),a(),s(23,"th"),c(24,"Graphics"),a()()(),s(25,"tbody"),E(26,lD,17,8,"tr",5),a()()()(),s(27,"div")(28,"label",6),c(29,"ID:"),a(),s(30,"input",7),m("ngModelChange",function(r){return g(i.id,r)||(i.id=r),r}),a()(),s(31,"div")(32,"label",8),c(33,"Model:"),a(),s(34,"input",9),m("ngModelChange",function(r){return g(i.model,r)||(i.model=r),r}),a()(),s(35,"div")(36,"label",10),c(37,"Brand:"),a(),s(38,"input",11),m("ngModelChange",function(r){return g(i.brand,r)||(i.brand=r),r}),a()(),s(39,"div")(40,"label",12),c(41,"Price:"),a(),s(42,"input",13),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(43,"div")(44,"label",14),c(45,"Processor:"),a(),s(46,"input",15),m("ngModelChange",function(r){return g(i.processor,r)||(i.processor=r),r}),a()(),s(47,"div")(48,"label",16),c(49,"RAM:"),a(),s(50,"input",17),m("ngModelChange",function(r){return g(i.ram,r)||(i.ram=r),r}),a()(),s(51,"div")(52,"label",18),c(53,"Storage:"),a(),s(54,"input",19),m("ngModelChange",function(r){return g(i.storage,r)||(i.storage=r),r}),a()(),s(55,"div")(56,"label",20),c(57,"Display:"),a(),s(58,"input",21),m("ngModelChange",function(r){return g(i.display,r)||(i.display=r),r}),a()(),s(59,"div")(60,"label",22),c(61,"Graphics:"),a(),s(62,"input",23),m("ngModelChange",function(r){return g(i.graphics,r)||(i.graphics=r),r}),a()(),s(63,"div")(64,"button",24),_("click",function(){return i.addLaptop()}),c(65,"Add Laptop"),a()()()()),t&2&&(p(26),S("ngForOf",i.laptops),p(4),h("ngModel",i.id),p(4),h("ngModel",i.model),p(4),h("ngModel",i.brand),p(4),h("ngModel",i.price),p(4),h("ngModel",i.processor),p(4),h("ngModel",i.ram),p(4),h("ngModel",i.storage),p(4),h("ngModel",i.display),p(4),h("ngModel",i.graphics))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 
    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 
    }`]})};function cD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a(),s(11,"td"),c(12),a()()),e&2){let t=n.$implicit;p(2),y(t.model),p(2),y(t.specs.processor),p(2),y(t.specs.ram),p(2),y(t.specs.storage),p(2),y(t.specs.display),p(2),y(t.specs.graphics)}}var Xs=class e{laptops=[];model="";processor="";ram="";storage="";display="";graphics="";addLaptop(){this.laptops.push({model:this.model,specs:{processor:this.processor,ram:this.ram,storage:this.storage,display:this.display,graphics:this.graphics}}),this.model="",this.processor="",this.ram="",this.storage="",this.display="",this.graphics=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-laptop-spec-list"]],standalone:!0,features:[w],decls:46,vars:7,consts:[[4,"ngFor","ngForOf"],["for","model"],["type","text","id","model",3,"ngModelChange","ngModel"],["for","processor"],["type","text","id","processor",3,"ngModelChange","ngModel"],["for","ram"],["type","text","id","ram",3,"ngModelChange","ngModel"],["for","storage"],["type","text","id","storage",3,"ngModelChange","ngModel"],["for","display"],["type","text","id","display",3,"ngModelChange","ngModel"],["for","graphics"],["type","text","id","graphics",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Laptop Specification List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Model"),a(),s(8,"th"),c(9,"Processor"),a(),s(10,"th"),c(11,"RAM"),a(),s(12,"th"),c(13,"Storage"),a(),s(14,"th"),c(15,"Display"),a(),s(16,"th"),c(17,"Graphics"),a()()(),s(18,"tbody"),E(19,cD,13,6,"tr",0),a()(),s(20,"div")(21,"label",1),c(22,"Model:"),a(),s(23,"input",2),m("ngModelChange",function(r){return g(i.model,r)||(i.model=r),r}),a()(),s(24,"div")(25,"label",3),c(26,"Processor:"),a(),s(27,"input",4),m("ngModelChange",function(r){return g(i.processor,r)||(i.processor=r),r}),a()(),s(28,"div")(29,"label",5),c(30,"RAM:"),a(),s(31,"input",6),m("ngModelChange",function(r){return g(i.ram,r)||(i.ram=r),r}),a()(),s(32,"div")(33,"label",7),c(34,"Storage:"),a(),s(35,"input",8),m("ngModelChange",function(r){return g(i.storage,r)||(i.storage=r),r}),a()(),s(36,"div")(37,"label",9),c(38,"Display:"),a(),s(39,"input",10),m("ngModelChange",function(r){return g(i.display,r)||(i.display=r),r}),a()(),s(40,"div")(41,"label",11),c(42,"Graphics:"),a(),s(43,"input",12),m("ngModelChange",function(r){return g(i.graphics,r)||(i.graphics=r),r}),a()(),s(44,"button",13),_("click",function(){return i.addLaptop()}),c(45,"Add Laptop"),a()()),t&2&&(p(19),S("ngForOf",i.laptops),p(4),h("ngModel",i.model),p(4),h("ngModel",i.processor),p(4),h("ngModel",i.ram),p(4),h("ngModel",i.storage),p(4),h("ngModel",i.display),p(4),h("ngModel",i.graphics))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function uD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.location),p(2),y(t.type),p(2),y(t.price)}}var ea=class e{computerHardware=[];name="";location="";type="";price=0;addComputerHardware(){this.computerHardware.push({name:this.name,location:this.location,type:this.type,price:this.price}),this.name="",this.location="",this.type="",this.price=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-computer-hardware-list"]],standalone:!0,features:[w],decls:35,vars:5,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name",3,"ngModelChange","ngModel"],["for","location"],["type","text","id","location",3,"ngModelChange","ngModel"],["for","type"],["type","text","id","type",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Computer Hardware List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Location"),a(),s(10,"th"),c(11,"Type"),a(),s(12,"th"),c(13,"Price"),a()()(),s(14,"tbody"),E(15,uD,9,4,"tr",0),a()(),s(16,"div")(17,"label",1),c(18,"Name:"),a(),s(19,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(20,"div")(21,"label",3),c(22,"Location:"),a(),s(23,"input",4),m("ngModelChange",function(r){return g(i.location,r)||(i.location=r),r}),a()(),s(24,"div")(25,"label",5),c(26,"Type:"),a(),s(27,"input",6),m("ngModelChange",function(r){return g(i.type,r)||(i.type=r),r}),a()(),s(28,"div")(29,"label",7),c(30,"Price:"),a(),s(31,"input",8),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(32,"div")(33,"button",9),_("click",function(){return i.addComputerHardware()}),c(34,"Add Computer Hardware"),a()()()),t&2&&(p(15),S("ngForOf",i.computerHardware),p(4),h("ngModel",i.name),p(4),h("ngModel",i.location),p(4),h("ngModel",i.type),p(4),h("ngModel",i.price))},dependencies:[P,D,k,T,x,I],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function dD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),on(" ",t.name," "),p(2),on(" ",t.description," "),p(2),on(" ",t.price," "),p(2),on(" ",t.rating," ")}}var ta=class e{mobileApps=[];name="";description="";price=0;rating=0;addMobileApp(){this.mobileApps.push({name:this.name,description:this.description,price:this.price,rating:this.rating}),this.name="",this.description="",this.price=0,this.rating=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-mobile-app-list"]],standalone:!0,features:[w],decls:35,vars:5,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name",3,"ngModelChange","ngModel"],["for","description"],["type","text","id","description",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price",3,"ngModelChange","ngModel"],["for","rating"],["type","number","id","rating",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Mobile App List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Description"),a(),s(10,"th"),c(11,"Price"),a(),s(12,"th"),c(13,"Rating"),a()()(),s(14,"tbody"),E(15,dD,9,4,"tr",0),a()(),s(16,"div")(17,"label",1),c(18,"Name:"),a(),s(19,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(20,"div")(21,"label",3),c(22,"Description:"),a(),s(23,"input",4),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(24,"div")(25,"label",5),c(26,"Price:"),a(),s(27,"input",6),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(28,"div")(29,"label",7),c(30,"Rating:"),a(),s(31,"input",8),m("ngModelChange",function(r){return g(i.rating,r)||(i.rating=r),r}),a()(),s(32,"div")(33,"button",9),_("click",function(){return i.addMobileApp()}),c(34,"Add Mobile App"),a()()()),t&2&&(p(15),S("ngForOf",i.mobileApps),p(4),h("ngModel",i.name),p(4),h("ngModel",i.description),p(4),h("ngModel",i.price),p(4),h("ngModel",i.rating))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function pD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.description),p(2),y(t.url),p(2),y(t.rating),p(2),y(t.category)}}var na=class e{videoList=[];name="";description="";url="";rating=0;category="";addVideo(){this.videoList.push({name:this.name,description:this.description,url:this.url,rating:this.rating,category:this.category}),this.name="",this.description="",this.url="",this.rating=0,this.category=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-video-list"]],standalone:!0,features:[w],decls:43,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name",3,"ngModelChange","ngModel"],["for","description"],["type","text","id","description","name","description",3,"ngModelChange","ngModel"],["for","url"],["type","text","id","url","name","url",3,"ngModelChange","ngModel"],["for","rating"],["type","number","id","rating","name","rating",3,"ngModelChange","ngModel"],["for","category"],["type","text","id","category","name","category",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Video List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Description"),a(),s(13,"th"),c(14,"URL"),a(),s(15,"th"),c(16,"Rating"),a(),s(17,"th"),c(18,"Category"),a()()(),s(19,"tbody"),E(20,pD,11,5,"tr",4),a()()()(),s(21,"div")(22,"label",5),c(23,"Name:"),a(),s(24,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(25,"div")(26,"label",7),c(27,"Description:"),a(),s(28,"input",8),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(29,"div")(30,"label",9),c(31,"URL:"),a(),s(32,"input",10),m("ngModelChange",function(r){return g(i.url,r)||(i.url=r),r}),a()(),s(33,"div")(34,"label",11),c(35,"Rating:"),a(),s(36,"input",12),m("ngModelChange",function(r){return g(i.rating,r)||(i.rating=r),r}),a()(),s(37,"div")(38,"label",13),c(39,"Category:"),a(),s(40,"input",14),m("ngModelChange",function(r){return g(i.category,r)||(i.category=r),r}),a()(),s(41,"button",15),_("click",function(){return i.addVideo()}),c(42,"Add Video"),a()()()),t&2&&(p(20),S("ngForOf",i.videoList),p(4),h("ngModel",i.name),p(4),h("ngModel",i.description),p(4),h("ngModel",i.url),p(4),h("ngModel",i.rating),p(4),h("ngModel",i.category))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function fD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a()()),e&2){let t=n.$implicit;p(2),y(t.channel),p(2),y(t.description),p(2),y(t.url),p(2),y(t.rating),p(2),y(t.category)}}var ia=class e{tvShowList=[];channel="";description="";url="";rating=0;category="";addTvShow(){this.tvShowList.push({channel:this.channel,description:this.description,url:this.url,rating:this.rating,category:this.category,title:void 0}),this.channel="",this.description="",this.url="",this.rating=0,this.category=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-tv-show-list"]],standalone:!0,features:[w],decls:41,vars:6,consts:[[1,"container"],[4,"ngFor","ngForOf"],["for","channel"],["type","text","id","channel","name","channel",3,"ngModelChange","ngModel"],["for","description"],["type","text","id","description","name","description",3,"ngModelChange","ngModel"],["for","url"],["type","text","id","url","name","url",3,"ngModelChange","ngModel"],["for","rating"],["type","number","id","rating","name","rating",3,"ngModelChange","ngModel"],["for","category"],["type","text","id","category","name","category",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"h1"),c(3,"TV Show List"),a(),s(4,"table")(5,"thead")(6,"tr")(7,"th"),c(8,"Channel"),a(),s(9,"th"),c(10,"Description"),a(),s(11,"th"),c(12,"URL"),a(),s(13,"th"),c(14,"Rating"),a(),s(15,"th"),c(16,"Category"),a()()(),s(17,"tbody"),E(18,fD,11,5,"tr",1),a()()(),s(19,"div")(20,"label",2),c(21,"Channel:"),a(),s(22,"input",3),m("ngModelChange",function(r){return g(i.channel,r)||(i.channel=r),r}),a()(),s(23,"div")(24,"label",4),c(25,"Description:"),a(),s(26,"input",5),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(27,"div")(28,"label",6),c(29,"URL:"),a(),s(30,"input",7),m("ngModelChange",function(r){return g(i.url,r)||(i.url=r),r}),a()(),s(31,"div")(32,"label",8),c(33,"Rating:"),a(),s(34,"input",9),m("ngModelChange",function(r){return g(i.rating,r)||(i.rating=r),r}),a()(),s(35,"div")(36,"label",10),c(37,"Category:"),a(),s(38,"input",11),m("ngModelChange",function(r){return g(i.category,r)||(i.category=r),r}),a()(),s(39,"button",12),_("click",function(){return i.addTvShow()}),c(40,"Add TV Show"),a()()),t&2&&(p(18),S("ngForOf",i.tvShowList),p(4),h("ngModel",i.channel),p(4),h("ngModel",i.description),p(4),h("ngModel",i.url),p(4),h("ngModel",i.rating),p(4),h("ngModel",i.category))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function hD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.description),p(2),y(t.type),p(2),y(t.price),p(2),y(t.category)}}var ra=class e{furnitureList=[];name="";description="";type="";price=0;category="";addFurniture(){this.furnitureList.push({name:this.name,description:this.description,type:this.type,price:this.price,category:this.category}),this.name="",this.description="",this.type="",this.price=0,this.category=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-furniture-list"]],standalone:!0,features:[w],decls:44,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name",3,"ngModelChange","ngModel"],["for","description"],["type","text","id","description","name","description",3,"ngModelChange","ngModel"],["for","type"],["type","text","id","type","name","type",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price","name","price",3,"ngModelChange","ngModel"],["for","category"],["type","text","id","category","name","category",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Furniture List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Description"),a(),s(13,"th"),c(14,"Type"),a(),s(15,"th"),c(16,"Price"),a(),s(17,"th"),c(18,"Category"),a()()(),s(19,"tbody"),E(20,hD,11,5,"tr",4),a()()()(),s(21,"div")(22,"label",5),c(23,"Name:"),a(),s(24,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(25,"div")(26,"label",7),c(27,"Description:"),a(),s(28,"input",8),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(29,"div")(30,"label",9),c(31,"Type:"),a(),s(32,"input",10),m("ngModelChange",function(r){return g(i.type,r)||(i.type=r),r}),a()(),s(33,"div")(34,"label",11),c(35,"Price:"),a(),s(36,"input",12),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(37,"div")(38,"label",13),c(39,"Category:"),a(),s(40,"input",14),m("ngModelChange",function(r){return g(i.category,r)||(i.category=r),r}),a()(),s(41,"div")(42,"button",15),_("click",function(){return i.addFurniture()}),c(43,"Add Furniture"),a()()()()),t&2&&(p(20),S("ngForOf",i.furnitureList),p(4),h("ngModel",i.name),p(4),h("ngModel",i.description),p(4),h("ngModel",i.type),p(4),h("ngModel",i.price),p(4),h("ngModel",i.category))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function mD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.description),p(2),y(t.type),p(2),y(t.price),p(2),y(t.category)}}var oa=class e{accessoryList=[];name="";description="";type="";price=0;category="";addAccessory(){this.accessoryList.push({name:this.name,description:this.description,type:this.type,price:this.price,category:this.category}),this.name="",this.description="",this.type="",this.price=0,this.category=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-accessory-list"]],standalone:!0,features:[w],decls:43,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name",3,"ngModelChange","ngModel"],["for","description"],["type","text","id","description","name","description",3,"ngModelChange","ngModel"],["for","type"],["type","text","id","type","name","type",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price","name","price",3,"ngModelChange","ngModel"],["for","category"],["type","text","id","category","name","category",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Accessory List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Name"),a(),s(11,"th"),c(12,"Description"),a(),s(13,"th"),c(14,"Type"),a(),s(15,"th"),c(16,"Price"),a(),s(17,"th"),c(18,"Category"),a()()(),s(19,"tbody"),E(20,mD,11,5,"tr",4),a()()()(),s(21,"div")(22,"label",5),c(23,"Name:"),a(),s(24,"input",6),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(25,"div")(26,"label",7),c(27,"Description:"),a(),s(28,"input",8),m("ngModelChange",function(r){return g(i.description,r)||(i.description=r),r}),a()(),s(29,"div")(30,"label",9),c(31,"Type:"),a(),s(32,"input",10),m("ngModelChange",function(r){return g(i.type,r)||(i.type=r),r}),a()(),s(33,"div")(34,"label",11),c(35,"Price:"),a(),s(36,"input",12),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(37,"div")(38,"label",13),c(39,"Category:"),a(),s(40,"input",14),m("ngModelChange",function(r){return g(i.category,r)||(i.category=r),r}),a()(),s(41,"button",15),_("click",function(){return i.addAccessory()}),c(42,"Add Accessory"),a()()()),t&2&&(p(20),S("ngForOf",i.accessoryList),p(4),h("ngModel",i.name),p(4),h("ngModel",i.description),p(4),h("ngModel",i.type),p(4),h("ngModel",i.price),p(4),h("ngModel",i.category))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function gD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a()()),e&2){let t=n.$implicit;p(2),y(t.bulding),p(2),y(t.address),p(2),y(t.floors),p(2),y(t.rooms),p(2),y(t.occupants)}}var sa=class e{buildingList=[];building="";address="";floors=0;rooms=0;occupants=0;addBuilding(){this.buildingList.push({bulding:this.building,address:this.address,floors:this.floors,rooms:this.rooms,occupants:this.occupants}),this.building="",this.address="",this.floors=0,this.rooms=0,this.occupants=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-building-list"]],standalone:!0,features:[w],decls:42,vars:6,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","building","name","building",3,"ngModelChange","ngModel"],["for","address"],["type","text","id","address","name","address",3,"ngModelChange","ngModel"],["for","floors"],["type","number","id","floors","name","floors",3,"ngModelChange","ngModel"],["for","rooms"],["type","number","id","rooms","name","rooms",3,"ngModelChange","ngModel"],["for","occupants"],["type","number","id","occupants","name","occupants",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div")(2,"h1"),c(3,"Building List"),a(),s(4,"div")(5,"table")(6,"thead")(7,"tr")(8,"th"),c(9,"Building"),a(),s(10,"th"),c(11,"Address"),a(),s(12,"th"),c(13,"Floors"),a(),s(14,"th"),c(15,"Rooms"),a(),s(16,"th"),c(17,"Occupants"),a()()(),s(18,"tbody"),E(19,gD,11,5,"tr",0),a()()(),s(20,"div")(21,"label",1),c(22,"Building:"),a(),s(23,"input",2),m("ngModelChange",function(r){return g(i.building,r)||(i.building=r),r}),a()(),s(24,"div")(25,"label",3),c(26,"Address:"),a(),s(27,"input",4),m("ngModelChange",function(r){return g(i.address,r)||(i.address=r),r}),a()(),s(28,"div")(29,"label",5),c(30,"Floors:"),a(),s(31,"input",6),m("ngModelChange",function(r){return g(i.floors,r)||(i.floors=r),r}),a()(),s(32,"div")(33,"label",7),c(34,"Rooms:"),a(),s(35,"input",8),m("ngModelChange",function(r){return g(i.rooms,r)||(i.rooms=r),r}),a()(),s(36,"div")(37,"label",9),c(38,"Occupants:"),a(),s(39,"input",10),m("ngModelChange",function(r){return g(i.occupants,r)||(i.occupants=r),r}),a()(),s(40,"button",11),_("click",function(){return i.addBuilding()}),c(41,"Add Building"),a()()()),t&2&&(p(19),S("ngForOf",i.buildingList),p(4),h("ngModel",i.building),p(4),h("ngModel",i.address),p(4),h("ngModel",i.floors),p(4),h("ngModel",i.rooms),p(4),h("ngModel",i.occupants))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function yD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.art),p(2),y(t.artist),p(2),y(t.year),p(2),y(t.price)}}var aa=class e{paintingList=[];art="";artist="";year=0;price=0;addPainting(){this.paintingList.push({art:this.art,artist:this.artist,year:this.year,price:this.price}),this.art="",this.artist="",this.year=0,this.price=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-painting-list"]],standalone:!0,features:[w],decls:35,vars:5,consts:[[4,"ngFor","ngForOf"],["for","art"],["type","text","id","art",3,"ngModelChange","ngModel"],["for","artist"],["type","text","id","artist",3,"ngModelChange","ngModel"],["for","year"],["type","number","id","year",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Painting List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Art"),a(),s(8,"th"),c(9,"Artist"),a(),s(10,"th"),c(11,"Year"),a(),s(12,"th"),c(13,"Price"),a()()(),s(14,"tbody"),E(15,yD,9,4,"tr",0),a()(),s(16,"div")(17,"div")(18,"label",1),c(19,"Art:"),a(),s(20,"input",2),m("ngModelChange",function(r){return g(i.art,r)||(i.art=r),r}),a()(),s(21,"div")(22,"label",3),c(23,"Artist:"),a(),s(24,"input",4),m("ngModelChange",function(r){return g(i.artist,r)||(i.artist=r),r}),a()(),s(25,"div")(26,"label",5),c(27,"Year:"),a(),s(28,"input",6),m("ngModelChange",function(r){return g(i.year,r)||(i.year=r),r}),a()(),s(29,"div")(30,"label",7),c(31,"Price:"),a(),s(32,"input",8),m("ngModelChange",function(r){return g(i.price,r)||(i.price=r),r}),a()(),s(33,"button",9),_("click",function(){return i.addPainting()}),c(34,"Add Painting"),a()()()),t&2&&(p(15),S("ngForOf",i.paintingList),p(5),h("ngModel",i.art),p(4),h("ngModel",i.artist),p(4),h("ngModel",i.year),p(4),h("ngModel",i.price))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function vD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.artist),p(2),y(t.field),p(2),y(t.genre),p(2),y(t.country)}}var la=class e{artistList=[];artist="";field="";genre="";country="";addArtist(){this.artistList.push({artist:this.artist,field:this.field,genre:this.genre,country:this.country,Artist:""}),this.artist="",this.field="",this.genre="",this.country=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-artist-list"]],standalone:!0,features:[w],decls:35,vars:5,consts:[[4,"ngFor","ngForOf"],["for","artist"],["type","text","id","artist",3,"ngModelChange","ngModel"],["for","field"],["type","text","id","field",3,"ngModelChange","ngModel"],["for","genre"],["type","text","id","genre",3,"ngModelChange","ngModel"],["for","country"],["type","text","id","country",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Artist List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Field"),a(),s(10,"th"),c(11,"Genre"),a(),s(12,"th"),c(13,"Country"),a()()(),s(14,"tbody"),E(15,vD,9,4,"tr",0),a()(),s(16,"div")(17,"label",1),c(18,"Artist:"),a(),s(19,"input",2),m("ngModelChange",function(r){return g(i.artist,r)||(i.artist=r),r}),a()(),s(20,"div")(21,"label",3),c(22,"Field:"),a(),s(23,"input",4),m("ngModelChange",function(r){return g(i.field,r)||(i.field=r),r}),a()(),s(24,"div")(25,"label",5),c(26,"Genre:"),a(),s(27,"input",6),m("ngModelChange",function(r){return g(i.genre,r)||(i.genre=r),r}),a()(),s(28,"div")(29,"label",7),c(30,"Country:"),a(),s(31,"input",8),m("ngModelChange",function(r){return g(i.country,r)||(i.country=r),r}),a()(),s(32,"div")(33,"button",9),_("click",function(){return i.addArtist()}),c(34,"Add Artist"),a()()()),t&2&&(p(15),S("ngForOf",i.artistList),p(4),h("ngModel",i.artist),p(4),h("ngModel",i.field),p(4),h("ngModel",i.genre),p(4),h("ngModel",i.country))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function CD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.composer),p(2),y(t.popularSong),p(2),y(t.genre),p(2),y(t.country)}}var ca=class e{composers=[];composer="";popularSong="";genre="";country="";addComposer(){this.composers.push({composer:this.composer,popularSong:this.popularSong,genre:this.genre,country:this.country}),this.composer="",this.popularSong="",this.genre="",this.country=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-composer-list"]],standalone:!0,features:[w],decls:35,vars:5,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","composer",3,"ngModelChange","ngModel"],["for","popularMusic"],["type","text","id","popularSong",3,"ngModelChange","ngModel"],["for","genre"],["type","text","id","genre",3,"ngModelChange","ngModel"],["for","country"],["type","text","id","country",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Composer List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Composer"),a(),s(8,"th"),c(9,"Popular Music"),a(),s(10,"th"),c(11,"Genre"),a(),s(12,"th"),c(13,"Country"),a()()(),s(14,"tbody"),E(15,CD,9,4,"tr",0),a()(),s(16,"div")(17,"label",1),c(18,"Composer:"),a(),s(19,"input",2),m("ngModelChange",function(r){return g(i.composer,r)||(i.composer=r),r}),a()(),s(20,"div")(21,"label",3),c(22,"Popular Song:"),a(),s(23,"input",4),m("ngModelChange",function(r){return g(i.popularSong,r)||(i.popularSong=r),r}),a()(),s(24,"div")(25,"label",5),c(26,"Genre:"),a(),s(27,"input",6),m("ngModelChange",function(r){return g(i.genre,r)||(i.genre=r),r}),a()(),s(28,"div")(29,"label",7),c(30,"Country:"),a(),s(31,"input",8),m("ngModelChange",function(r){return g(i.country,r)||(i.country=r),r}),a()(),s(32,"div")(33,"button",9),_("click",function(){return i.addComposer()}),c(34,"Add Composer"),a()()()),t&2&&(p(15),S("ngForOf",i.composers),p(4),h("ngModel",i.composer),p(4),h("ngModel",i.popularSong),p(4),h("ngModel",i.genre),p(4),h("ngModel",i.country))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function bD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.host),p(2),y(t.genre),p(2),y(t.episodeNumber)}}var ua=class e{podcasts=[];name="";host="";genre="";episodeNumber=0;addPodcast(){this.podcasts.push({name:this.name,host:this.host,genre:this.genre,episodeNumber:this.episodeNumber}),this.name="",this.host="",this.genre="",this.episodeNumber=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-podcast-list"]],standalone:!0,features:[w],decls:35,vars:5,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name",3,"ngModelChange","ngModel"],["for","host"],["type","text","id","host",3,"ngModelChange","ngModel"],["for","genre"],["type","text","id","genre",3,"ngModelChange","ngModel"],["for","episodeNumber"],["type","number","id","episodeNumber",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Podcast List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Host"),a(),s(10,"th"),c(11,"Genre"),a(),s(12,"th"),c(13,"Episode Number"),a()()(),s(14,"tbody"),E(15,bD,9,4,"tr",0),a()(),s(16,"div")(17,"label",1),c(18,"Name:"),a(),s(19,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(20,"div")(21,"label",3),c(22,"Host:"),a(),s(23,"input",4),m("ngModelChange",function(r){return g(i.host,r)||(i.host=r),r}),a()(),s(24,"div")(25,"label",5),c(26,"Genre:"),a(),s(27,"input",6),m("ngModelChange",function(r){return g(i.genre,r)||(i.genre=r),r}),a()(),s(28,"div")(29,"label",7),c(30,"Episode Number:"),a(),s(31,"input",8),m("ngModelChange",function(r){return g(i.episodeNumber,r)||(i.episodeNumber=r),r}),a()(),s(32,"div")(33,"button",9),_("click",function(){return i.addPodcast()}),c(34,"Add Podcast"),a()()()),t&2&&(p(15),S("ngForOf",i.podcasts),p(4),h("ngModel",i.name),p(4),h("ngModel",i.host),p(4),h("ngModel",i.genre),p(4),h("ngModel",i.episodeNumber))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function _D(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.sets),p(2),y(t.reps),p(2),y(t.weight)}}var da=class e{exercises=[];name="";sets=0;reps=0;weight=0;addExercise(){this.exercises.push({name:this.name,sets:this.sets,reps:this.reps,weight:this.weight}),this.name="",this.sets=0,this.reps=0,this.weight=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-exercise-list"]],standalone:!0,features:[w],decls:35,vars:5,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name",3,"ngModelChange","ngModel"],["for","sets"],["type","number","id","sets",3,"ngModelChange","ngModel"],["for","reps"],["type","number","id","reps",3,"ngModelChange","ngModel"],["for","weight"],["type","number","id","weight",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Exercise List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Sets"),a(),s(10,"th"),c(11,"Reps"),a(),s(12,"th"),c(13,"Weight"),a()()(),s(14,"tbody"),E(15,_D,9,4,"tr",0),a()(),s(16,"div")(17,"label",1),c(18,"Name:"),a(),s(19,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(20,"div")(21,"label",3),c(22,"Sets:"),a(),s(23,"input",4),m("ngModelChange",function(r){return g(i.sets,r)||(i.sets=r),r}),a()(),s(24,"div")(25,"label",5),c(26,"Reps:"),a(),s(27,"input",6),m("ngModelChange",function(r){return g(i.reps,r)||(i.reps=r),r}),a()(),s(28,"div")(29,"label",7),c(30,"Weight:"),a(),s(31,"input",8),m("ngModelChange",function(r){return g(i.weight,r)||(i.weight=r),r}),a()(),s(32,"div")(33,"button",9),_("click",function(){return i.addExercise()}),c(34,"Add Exercise"),a()()()),t&2&&(p(15),S("ngForOf",i.exercises),p(4),h("ngModel",i.name),p(4),h("ngModel",i.sets),p(4),h("ngModel",i.reps),p(4),h("ngModel",i.weight))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function MD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a(),s(11,"td"),c(12),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.breakfast),p(2),y(t.lunch),p(2),y(t.dinner),p(2),y(t.snacks),p(2),y(t.drinks)}}var pa=class e{meals=[];name="";breakfast="";lunch="";dinner="";snacks="";drinks="";addMealPlan(){this.meals.push({name:this.name,breakfast:this.breakfast,lunch:this.lunch,dinner:this.dinner,snacks:this.snacks,drinks:this.drinks}),this.name="",this.breakfast="",this.lunch="",this.dinner="",this.snacks="",this.drinks=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-meal-plan-list"]],standalone:!0,features:[w],decls:47,vars:7,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name",3,"ngModelChange","ngModel"],["for","breakfast"],["type","text","id","breakfast",3,"ngModelChange","ngModel"],["for","lunch"],["type","text","id","lunch",3,"ngModelChange","ngModel"],["for","dinner"],["type","text","id","dinner",3,"ngModelChange","ngModel"],["for","snacks"],["type","text","id","snacks",3,"ngModelChange","ngModel"],["for","drink"],["type","text","id","drinks",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Meal Plan List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Breakfast"),a(),s(10,"th"),c(11,"Lunch"),a(),s(12,"th"),c(13,"Dinner"),a(),s(14,"th"),c(15,"Snacks"),a(),s(16,"th"),c(17,"Drinks"),a()()(),s(18,"tbody"),E(19,MD,13,6,"tr",0),a()(),s(20,"div")(21,"label",1),c(22,"Name:"),a(),s(23,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(24,"div")(25,"label",3),c(26,"Breakfast:"),a(),s(27,"input",4),m("ngModelChange",function(r){return g(i.breakfast,r)||(i.breakfast=r),r}),a()(),s(28,"div")(29,"label",5),c(30,"Lunch:"),a(),s(31,"input",6),m("ngModelChange",function(r){return g(i.lunch,r)||(i.lunch=r),r}),a()(),s(32,"div")(33,"label",7),c(34,"Dinner:"),a(),s(35,"input",8),m("ngModelChange",function(r){return g(i.dinner,r)||(i.dinner=r),r}),a()(),s(36,"div")(37,"label",9),c(38,"Snacks:"),a(),s(39,"input",10),m("ngModelChange",function(r){return g(i.snacks,r)||(i.snacks=r),r}),a()(),s(40,"div")(41,"label",11),c(42,"Drinks:"),a(),s(43,"input",12),m("ngModelChange",function(r){return g(i.drinks,r)||(i.drinks=r),r}),a()(),s(44,"div")(45,"button",13),_("click",function(){return i.addMealPlan()}),c(46,"Add Meal Plan"),a()()()),t&2&&(p(19),S("ngForOf",i.meals),p(4),h("ngModel",i.name),p(4),h("ngModel",i.breakfast),p(4),h("ngModel",i.lunch),p(4),h("ngModel",i.dinner),p(4),h("ngModel",i.snacks),p(4),h("ngModel",i.drinks))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function wD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a()()),e&2){let t=n.$implicit;p(2),y(t.project),p(2),y(t.budget),p(2),y(t.status),p(2),y(t.startDate),p(2),y(t.endDate)}}var fa=class e{budgets=[];project="";budget=0;status="";startDate="";endDate="";addBudget(){this.budgets.push({project:this.project,budget:this.budget,status:this.status,startDate:this.startDate,endDate:this.endDate}),this.project="",this.budget=0,this.status="",this.startDate="",this.endDate=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-budget-list"]],standalone:!0,features:[w],decls:40,vars:6,consts:[[4,"ngFor","ngForOf"],[1,"form-group"],["for","project"],["type","text","id","project","name","project",3,"ngModelChange","ngModel"],["for","budget"],["type","number","id","budget","name","budget",3,"ngModelChange","ngModel"],["for","status"],["type","text","id","status","name","status",3,"ngModelChange","ngModel"],["for","startDate"],["type","date","id","startDate","name","startDate",3,"ngModelChange","ngModel"],["for","endDate"],["type","date","id","endDate","name","endDate",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Budget List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Project"),a(),s(8,"th"),c(9,"Budget"),a(),s(10,"th"),c(11,"Status"),a(),s(12,"th"),c(13,"Start Date"),a(),s(14,"th"),c(15,"End Date"),a()()(),s(16,"tbody"),E(17,wD,11,5,"tr",0),a()(),s(18,"div",1)(19,"label",2),c(20,"Project:"),a(),s(21,"input",3),m("ngModelChange",function(r){return g(i.project,r)||(i.project=r),r}),a()(),s(22,"div",1)(23,"label",4),c(24,"Budget:"),a(),s(25,"input",5),m("ngModelChange",function(r){return g(i.budget,r)||(i.budget=r),r}),a()(),s(26,"div",1)(27,"label",6),c(28,"Status:"),a(),s(29,"input",7),m("ngModelChange",function(r){return g(i.status,r)||(i.status=r),r}),a()(),s(30,"div",1)(31,"label",8),c(32,"Start Date:"),a(),s(33,"input",9),m("ngModelChange",function(r){return g(i.startDate,r)||(i.startDate=r),r}),a()(),s(34,"div",1)(35,"label",10),c(36,"End Date:"),a(),s(37,"input",11),m("ngModelChange",function(r){return g(i.endDate,r)||(i.endDate=r),r}),a()(),s(38,"button",12),_("click",function(){return i.addBudget()}),c(39,"Add Budget"),a()()),t&2&&(p(17),S("ngForOf",i.budgets),p(4),h("ngModel",i.project),p(4),h("ngModel",i.budget),p(4),h("ngModel",i.status),p(4),h("ngModel",i.startDate),p(4),h("ngModel",i.endDate))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h1[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%], 
   input[type="date"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 
    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 
    }`]})};function DD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.topic),p(2),y(t.presenter),p(2),y(t.date),p(2),y(t.time)}}var ha=class e{presentations=[];topic="";presenter="";date="";time="";addPresentation(){this.presentations.push({topic:this.topic,presenter:this.presenter,date:this.date,time:this.time}),this.topic="",this.presenter="",this.date="",this.time=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-presentation-list"]],standalone:!0,features:[w],decls:35,vars:5,consts:[[4,"ngFor","ngForOf"],[1,"form-group"],["for","topic"],["type","text","id","topic","name","topic",3,"ngModelChange","ngModel"],["for","presenter"],["type","text","id","presenter","name","presenter",3,"ngModelChange","ngModel"],["for","date"],["type","date","id","date","name","date",3,"ngModelChange","ngModel"],["for","time"],["type","time","id","time","name","time",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Presentation List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Topic"),a(),s(8,"th"),c(9,"Presenter"),a(),s(10,"th"),c(11,"Date"),a(),s(12,"th"),c(13,"Time"),a()()(),s(14,"tbody"),E(15,DD,9,4,"tr",0),a()(),s(16,"div",1)(17,"label",2),c(18,"Topic:"),a(),s(19,"input",3),m("ngModelChange",function(r){return g(i.topic,r)||(i.topic=r),r}),a()(),s(20,"div",1)(21,"label",4),c(22,"Presenter:"),a(),s(23,"input",5),m("ngModelChange",function(r){return g(i.presenter,r)||(i.presenter=r),r}),a()(),s(24,"div",1)(25,"label",6),c(26,"Date:"),a(),s(27,"input",7),m("ngModelChange",function(r){return g(i.date,r)||(i.date=r),r}),a()(),s(28,"div",1)(29,"label",8),c(30,"Time:"),a(),s(31,"input",9),m("ngModelChange",function(r){return g(i.time,r)||(i.time=r),r}),a()(),s(32,"div")(33,"button",10),_("click",function(){return i.addPresentation()}),c(34,"Add Presentation"),a()()()),t&2&&(p(15),S("ngForOf",i.presentations),p(4),h("ngModel",i.topic),p(4),h("ngModel",i.presenter),p(4),h("ngModel",i.date),p(4),h("ngModel",i.time))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h1[_ngcontent-%COMP%] {
        text-align: center; 
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="date"][_ngcontent-%COMP%], 
   input[type="time"][_ngcontent-%COMP%] { 
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 
    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 
    }`]})};function ED(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a()()),e&2){let t=n.$implicit;p(2),y(t.tourDate),p(2),y(t.tourName),p(2),y(t.tourLocation),p(2),y(t.tourPrice),p(2),y(t.tourDuration)}}var ma=class e{tours=[];tourDate="";tourName="";tourLocation="";tourPrice=0;tourDuration="";addTour(){this.tours.push({tourDate:this.tourDate,tourName:this.tourName,tourLocation:this.tourLocation,tourPrice:this.tourPrice,tourDuration:this.tourDuration}),this.tourDate="",this.tourName="",this.tourLocation="",this.tourPrice=0,this.tourDuration=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-tour-list"]],standalone:!0,features:[w],decls:46,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"text-center"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"form-group"],["for","date"],["type","date","id","date",3,"ngModelChange","ngModel"],["for","name"],["type","text","id","name",3,"ngModelChange","ngModel"],["for","location"],["type","text","id","location",3,"ngModelChange","ngModel"],["for","price"],["type","text","id","price",3,"ngModelChange","ngModel"],["for","duration"],["type","text","id","duration",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),c(5,"Tour List"),a()()(),s(6,"div",1)(7,"div",2)(8,"table",4)(9,"thead")(10,"tr")(11,"th",5),c(12,"Date"),a(),s(13,"th",5),c(14,"Name"),a(),s(15,"th",5),c(16,"Location"),a(),s(17,"th",5),c(18,"Price"),a(),s(19,"th",5),c(20,"Duration"),a()()(),s(21,"tbody"),E(22,ED,11,5,"tr",6),a()()()(),s(23,"div",7)(24,"label",8),c(25,"Date"),a(),s(26,"input",9),m("ngModelChange",function(r){return g(i.tourDate,r)||(i.tourDate=r),r}),a()(),s(27,"div",7)(28,"label",10),c(29,"Name:"),a(),s(30,"input",11),m("ngModelChange",function(r){return g(i.tourName,r)||(i.tourName=r),r}),a()(),s(31,"div",7)(32,"label",12),c(33,"Location:"),a(),s(34,"input",13),m("ngModelChange",function(r){return g(i.tourLocation,r)||(i.tourLocation=r),r}),a()(),s(35,"div",7)(36,"label",14),c(37,"Price:"),a(),s(38,"input",15),m("ngModelChange",function(r){return g(i.tourPrice,r)||(i.tourPrice=r),r}),a()(),s(39,"div",7)(40,"label",16),c(41,"Duration:"),a(),s(42,"input",17),m("ngModelChange",function(r){return g(i.tourDuration,r)||(i.tourDuration=r),r}),a()(),s(43,"div")(44,"button",18),_("click",function(){return i.addTour()}),c(45," Add Tour "),a()()()()),t&2&&(p(22),S("ngForOf",i.tours),p(4),h("ngModel",i.tourDate),p(4),h("ngModel",i.tourName),p(4),h("ngModel",i.tourLocation),p(4),h("ngModel",i.tourPrice),p(4),h("ngModel",i.tourDuration))},dependencies:[I,P,D,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h1[_ngcontent-%COMP%] {
        text-align: center; 
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px; 
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px; 
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="date"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 
    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 
    }`]})};function SD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a()()),e&2){let t=n.$implicit;p(2),y(t.eventDate),p(2),y(t.eventName),p(2),y(t.eventLocation),p(2),y(t.eventPrice),p(2),y(t.eventDuration)}}var ga=class e{events=[];eventDate="";eventName="";eventLocation="";eventPrice=0;eventDuration="";addEvent(){this.events.push({eventDate:this.eventDate,eventName:this.eventName,eventLocation:this.eventLocation,eventPrice:this.eventPrice,eventDuration:this.eventDuration}),this.eventDate="",this.eventName="",this.eventLocation="",this.eventPrice=0,this.eventDuration=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-event-list"]],standalone:!0,features:[w],decls:44,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],[1,"form-group"],["for","date"],["type","date","id","date",1,"form-control",3,"ngModelChange","ngModel"],["for","name"],["type","text","id","name",1,"form-control",3,"ngModelChange","ngModel"],["for","location"],["type","text","id","location",1,"form-control",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price",1,"form-control",3,"ngModelChange","ngModel"],["for","duration"],["type","text","id","duration",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Event List"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Event Date"),a(),s(11,"th"),c(12,"Event Name"),a(),s(13,"th"),c(14,"Event Location"),a(),s(15,"th"),c(16,"Event Price"),a(),s(17,"th"),c(18,"Event Duration"),a()()(),s(19,"tbody"),E(20,SD,11,5,"tr",4),a()()()(),s(21,"div",5)(22,"label",6),c(23,"Date:"),a(),s(24,"input",7),m("ngModelChange",function(r){return g(i.eventDate,r)||(i.eventDate=r),r}),a()(),s(25,"div",5)(26,"label",8),c(27,"Name:"),a(),s(28,"input",9),m("ngModelChange",function(r){return g(i.eventName,r)||(i.eventName=r),r}),a()(),s(29,"div",5)(30,"label",10),c(31,"Location:"),a(),s(32,"input",11),m("ngModelChange",function(r){return g(i.eventLocation,r)||(i.eventLocation=r),r}),a()(),s(33,"div",5)(34,"label",12),c(35,"Price:"),a(),s(36,"input",13),m("ngModelChange",function(r){return g(i.eventPrice,r)||(i.eventPrice=r),r}),a()(),s(37,"div",5)(38,"label",14),c(39,"Duration:"),a(),s(40,"input",15),m("ngModelChange",function(r){return g(i.eventDuration,r)||(i.eventDuration=r),r}),a()(),s(41,"div")(42,"button",16),_("click",function(){return i.addEvent()}),c(43," Add Event "),a()()()()),t&2&&(p(20),S("ngForOf",i.events),p(4),h("ngModel",i.eventDate),p(4),h("ngModel",i.eventName),p(4),h("ngModel",i.eventLocation),p(4),h("ngModel",i.eventPrice),p(4),h("ngModel",i.eventDuration))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h1[_ngcontent-%COMP%] { 
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px; 
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px; 
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%], 
   input[type="date"][_ngcontent-%COMP%] { 
        padding: 10px; 
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%; 
        box-sizing: border-box; 
    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 
    }`]})};function xD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a()()),e&2){let t=n.$implicit;p(2),y(t.toolName),p(2),y(t.toolDescription),p(2),y(t.toolPrice)}}var ya=class e{developerTools=[];toolName="";toolDescription="";toolPrice=0;addDeveloperTool(){this.developerTools.push({toolName:this.toolName,toolDescription:this.toolDescription,toolPrice:this.toolPrice}),this.toolName="",this.toolDescription="",this.toolPrice=0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-developer-tools-list"]],standalone:!0,features:[w],decls:32,vars:4,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"table"],[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name",1,"form-control",3,"ngModelChange","ngModel"],["for","description"],["type","text","id","description",1,"form-control",3,"ngModelChange","ngModel"],["for","price"],["type","number","id","price",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1"),c(5,"Developer Tools"),a(),s(6,"table",3)(7,"thead")(8,"tr")(9,"th"),c(10,"Tool Name"),a(),s(11,"th"),c(12,"Tool Description"),a(),s(13,"th"),c(14,"Tool Price"),a()()(),s(15,"tbody"),E(16,xD,7,3,"tr",4),a()()()(),s(17,"div")(18,"label",5),c(19,"Name:"),a(),s(20,"input",6),m("ngModelChange",function(r){return g(i.toolName,r)||(i.toolName=r),r}),a()(),s(21,"div")(22,"label",7),c(23,"Description:"),a(),s(24,"input",8),m("ngModelChange",function(r){return g(i.toolDescription,r)||(i.toolDescription=r),r}),a()(),s(25,"div")(26,"label",9),c(27,"Price:"),a(),s(28,"input",10),m("ngModelChange",function(r){return g(i.toolPrice,r)||(i.toolPrice=r),r}),a()(),s(29,"div")(30,"button",11),_("click",function(){return i.addDeveloperTool()}),c(31," Add Tool "),a()()()()),t&2&&(p(16),S("ngForOf",i.developerTools),p(4),h("ngModel",i.toolName),p(4),h("ngModel",i.toolDescription),p(4),h("ngModel",i.toolPrice))},dependencies:[I,P,D,k,T,x],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};function ID(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a()()),e&2){let t=n.$implicit;p(2),y(t.name),p(2),y(t.developedBy),p(2),y(t.firstRelease),p(2),y(t.latestRelease)}}var va=class e{frameworks=[];name="";developedBy="";firstRelease="";latestRelease="";addFramework(){this.frameworks.push({name:this.name,developedBy:this.developedBy,firstRelease:this.firstRelease,latestRelease:this.latestRelease}),this.name="",this.developedBy="",this.firstRelease="",this.latestRelease=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-framework-list"]],standalone:!0,features:[w],decls:34,vars:5,consts:[[4,"ngFor","ngForOf"],["for","name"],["type","text","id","name","name","name",3,"ngModelChange","ngModel"],["for","developedBy"],["type","text","id","developedBy","name","developedBy",3,"ngModelChange","ngModel"],["for","firstRelease"],["type","text","id","firstRelease","name","firstRelease",3,"ngModelChange","ngModel"],["for","latestRelease"],["type","text","id","latestRelease","name","latestRelease",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Framework List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Name"),a(),s(8,"th"),c(9,"Developed By"),a(),s(10,"th"),c(11,"First Release"),a(),s(12,"th"),c(13,"Latest Release"),a()()(),s(14,"tbody"),E(15,ID,9,4,"tr",0),a()(),s(16,"div")(17,"label",1),c(18,"Name:"),a(),s(19,"input",2),m("ngModelChange",function(r){return g(i.name,r)||(i.name=r),r}),a()(),s(20,"div")(21,"label",3),c(22,"Developed By:"),a(),s(23,"input",4),m("ngModelChange",function(r){return g(i.developedBy,r)||(i.developedBy=r),r}),a()(),s(24,"div")(25,"label",5),c(26,"First Release:"),a(),s(27,"input",6),m("ngModelChange",function(r){return g(i.firstRelease,r)||(i.firstRelease=r),r}),a()(),s(28,"div")(29,"label",7),c(30,"Latest Release:"),a(),s(31,"input",8),m("ngModelChange",function(r){return g(i.latestRelease,r)||(i.latestRelease=r),r}),a()(),s(32,"button",9),_("click",function(){return i.addFramework()}),c(33,"Add Framework:"),a()()),t&2&&(p(15),S("ngForOf",i.frameworks),p(4),h("ngModel",i.name),p(4),h("ngModel",i.developedBy),p(4),h("ngModel",i.firstRelease),p(4),h("ngModel",i.latestRelease))},dependencies:[P,D,T,x,I],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 
    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 
    }`]})};function TD(e,n){if(e&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a()()),e&2){let t=n.$implicit;p(2),y(t.libraryName),p(2),y(t.programmingLanguage),p(2),y(t.developedBy),p(2),y(t.firstRelease),p(2),y(t.latestRelease)}}var Ca=class e{libraries=[];libraryName="";programmingLanguage="";developedBy="";firstRelease="";latestRelease="";addLibrary(){this.libraries.push({libraryName:this.libraryName,programmingLanguage:this.programmingLanguage,developedBy:this.developedBy,firstRelease:this.firstRelease,latestRelease:this.latestRelease}),this.libraryName="",this.programmingLanguage="",this.developedBy="",this.firstRelease="",this.latestRelease=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-library-list"]],standalone:!0,features:[w],decls:40,vars:6,consts:[[4,"ngFor","ngForOf"],["for","libraryName"],["type","text","id","libraryName","name","libraryName",3,"ngModelChange","ngModel"],["for","programmingLanguage"],["type","text","id","programmingLanguage","name","programmingLanguage",3,"ngModelChange","ngModel"],["for","developedBy"],["type","text","id","developedBy","name","developedBy",3,"ngModelChange","ngModel"],["for","firstRelease"],["type","text","id","firstRelease","name","firstRelease",3,"ngModelChange","ngModel"],["for","latestRelease"],["type","text","id","latestRelease","name","latestRelease",3,"ngModelChange","ngModel"],[1,"btn",3,"click"]],template:function(t,i){t&1&&(s(0,"main")(1,"h1"),c(2,"Library List"),a(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Library Name"),a(),s(8,"th"),c(9,"Programming Language"),a(),s(10,"th"),c(11,"Developed By"),a(),s(12,"th"),c(13,"First Release"),a(),s(14,"th"),c(15,"Latest Release"),a()()(),s(16,"tbody"),E(17,TD,11,5,"tr",0),a()(),s(18,"div")(19,"label",1),c(20,"Library Name:"),a(),s(21,"input",2),m("ngModelChange",function(r){return g(i.libraryName,r)||(i.libraryName=r),r}),a()(),s(22,"div")(23,"label",3),c(24,"Programming Language:"),a(),s(25,"input",4),m("ngModelChange",function(r){return g(i.programmingLanguage,r)||(i.programmingLanguage=r),r}),a()(),s(26,"div")(27,"label",5),c(28,"Developed By"),a(),s(29,"input",6),m("ngModelChange",function(r){return g(i.developedBy,r)||(i.developedBy=r),r}),a()(),s(30,"div")(31,"label",7),c(32,"First Release"),a(),s(33,"input",8),m("ngModelChange",function(r){return g(i.firstRelease,r)||(i.firstRelease=r),r}),a()(),s(34,"div")(35,"label",9),c(36,"Latest Release"),a(),s(37,"input",10),m("ngModelChange",function(r){return g(i.latestRelease,r)||(i.latestRelease=r),r}),a()(),s(38,"button",11),_("click",function(){return i.addLibrary()}),c(39,"Add Library"),a()()),t&2&&(p(17),S("ngForOf",i.libraries),p(4),h("ngModel",i.libraryName),p(4),h("ngModel",i.programmingLanguage),p(4),h("ngModel",i.developedBy),p(4),h("ngModel",i.firstRelease),p(4),h("ngModel",i.latestRelease))},dependencies:[P,D,T,x,I],styles:[`main[_ngcontent-%COMP%] {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }

    h2[_ngcontent-%COMP%] {
        text-align: center;
    }

    table[_ngcontent-%COMP%] {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th[_ngcontent-%COMP%] {
        background-color: #f2f2f2;
    }

    .add-fruit[_ngcontent-%COMP%] {
        margin-top: 20px;
    }

    .form-group[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label[_ngcontent-%COMP%] {
        margin-bottom: 5px;
    }

    input[type="text"][_ngcontent-%COMP%], 
   input[type="number"][_ngcontent-%COMP%] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box; 

    }

    .btn[_ngcontent-%COMP%] {
        background-color: #007bff; 

        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn[_ngcontent-%COMP%]:hover {
        background-color: #0056b3; 

    }`]})};var Vu=[{title:"Student List",component:Ds,path:"student-list"},{title:"Employee List",component:Es,path:"employee-list"},{title:"Fruit List",component:Ss,path:"fruit-list"},{title:"Course List",component:xs,path:"course-list"},{title:"Book List",component:Is,path:"book-list"},{title:"City List",component:Ts,path:"city-list"},{title:"Movie List",component:Ps,path:"movie-list"},{title:"Car Model List",component:Os,path:"car-model-list"},{title:"Product List",component:Ns,path:"product-list"},{title:"Subject List",component:As,path:"subject-list"},{title:"Country List",component:Ls,path:"country-list"},{title:"Sports List",component:Fs,path:"sports-list"},{title:"Vegetable List",component:Rs,path:"vegetable-list"},{title:"Animal List",component:ks,path:"animal-list"},{title:"Tool List",component:Vs,path:"tool-list"},{title:"Language List",component:js,path:"language-list"},{title:"Game List",component:Bs,path:"game-list"},{title:"Software List",component:Ws,path:"software-list"},{title:"Phone Contact List",component:Us,path:"phone-contact-list"},{title:"Music Playlist",component:Hs,path:"music-playlist"},{title:"Food Menu",component:zs,path:"food-menu"},{title:"Grocery List",component:$s,path:"grocery-list"},{title:"Classrom List",component:Gs,path:"classroom-list"},{title:"Inventory List",component:qs,path:"inventory-list"},{title:"Lecture List",component:Zs,path:"lecture-list"},{title:"Stationery List",component:Ys,path:"stationery-list"},{title:"Flower List",component:Qs,path:"flower-list"},{title:"Destination List",component:Ks,path:"destination-list"},{title:"Laptop List",component:Js,path:"laptop-list"},{title:"Laptop Specs List",component:Xs,path:"laptop-spec-list"},{title:"Computer Hardware List",component:ea,path:"computer-hardware-list"},{title:"Mobile App List",component:ta,path:"mobile-app-list"},{title:"Video List",component:na,path:"video-list"},{title:"TV Show List",component:ia,path:"tv-show-list"},{title:"Furniture List",component:ra,path:"furniture-list"},{title:"Accessory List",component:oa,path:"accessory-list"},{title:"Building List",component:sa,path:"building-list"},{title:"Painting List",component:aa,path:"painting-list"},{title:"Artist List",component:la,path:"artist-list"},{title:"Composer List",component:ca,path:"composer-list"},{title:"Podcast List",component:ua,path:"podcast-list"},{title:"Exercise List",component:da,path:"exercise-list"},{title:"Meal Plan List",component:pa,path:"meal-plan-list"},{title:"Budget List",component:fa,path:"budget-list"},{title:"Presentation List",component:ha,path:"presentation-list"},{title:"Tour List",component:ma,path:"tour-list"},{title:"Event List",component:ga,path:"event-list"},{title:"Developer Tools List",component:ya,path:"developer-tools-list"},{title:"Framework List",component:va,path:"framework-list"},{title:"Library List",component:Ca,path:"library-list"}],tg=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=yt({type:e});static \u0275inj=gt({imports:[Pu.forRoot(Vu),Pu]})};var ng={providers:[yh({eventCoalescing:!0}),Tm(Vu)]};var ba=class e{title="Activity15-Angular-with-Typescript-and-Data-Structures";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-root"]],standalone:!0,features:[w],decls:159,vars:0,consts:[["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"container"],[1,"sidebar"],["href","/student-list"],["href","/employee-list"],["href","/fruit-list"],["href","/course-list"],["href","/book-list"],["href","/city-list"],["href","/movie-list"],["href","/car-model-list"],["href","/product-list"],["href","/subject-list"],["href","/country-list"],["href","/sports-list"],["href","/vegetable-list"],["href","/animal-list"],["href","/tool-list"],["href","/language-list"],["href","/game-list"],["href","/software-list"],["href","/phone-contact-list"],["href","/music-playlist"],["href","/food-menu"],["href","/grocery-list"],["href","/classroom-list"],["href","/inventory-list"],["href","/lecture-list"],["href","/stationery-list"],["href","/flower-list"],["href","/destination-list"],["href","/laptop-list"],["href","/laptop-spec-list"],["href","/computer-hardware-list"],["href","/mobile-app-list"],["href","/video-list"],["href","/tv-show-list"],["href","/furniture-list"],["href","/accessory-list"],["href","/building-list"],["href","/painting-list"],["href","/artist-list"],["href","/composer-list"],["href","/podcast-list"],["href","/exercise-list"],["href","/meal-plan-list"],["href","/budget-list"],["href","/presentation-list"],["href","/tour-list"],["href","/event-list"],["href","/developer-tools-list"],["href","/framework-list"],["href","/library-list"],[1,"content"]],template:function(t,i){t&1&&(s(0,"head"),le(1,"meta",0)(2,"meta",1),a(),s(3,"body")(4,"div",2)(5,"nav",3)(6,"ul")(7,"li")(8,"a",4),c(9,"Student List"),a()(),s(10,"li")(11,"a",5),c(12,"Employee List"),a()(),s(13,"li")(14,"a",6),c(15,"Fruit List"),a()(),s(16,"li")(17,"a",7),c(18,"Course List"),a()(),s(19,"li")(20,"a",8),c(21,"Book List"),a()(),s(22,"li")(23,"a",9),c(24,"City List"),a()(),s(25,"li")(26,"a",10),c(27,"Movie List"),a()(),s(28,"li")(29,"a",11),c(30,"Car Model List"),a()(),s(31,"li")(32,"a",12),c(33,"Product List"),a()(),s(34,"li")(35,"a",13),c(36,"Subject List"),a()(),s(37,"li")(38,"a",14),c(39,"Country List"),a()(),s(40,"li")(41,"a",15),c(42,"Sports List"),a()(),s(43,"li")(44,"a",16),c(45,"Vegetable List"),a()(),s(46,"li")(47,"a",17),c(48,"Animal List"),a()(),s(49,"li")(50,"a",18),c(51,"Tool List"),a()(),s(52,"li")(53,"a",19),c(54,"Language List"),a()(),s(55,"li")(56,"a",20),c(57,"Game List"),a()(),s(58,"li")(59,"a",21),c(60,"Software List"),a()(),s(61,"li")(62,"a",22),c(63,"Phone Contact List"),a()(),s(64,"li")(65,"a",23),c(66,"Music Playlist"),a()(),s(67,"li")(68,"a",24),c(69,"Food Menu"),a()(),s(70,"li")(71,"a",25),c(72,"Grocery List"),a()(),s(73,"li")(74,"a",26),c(75,"Classroom List"),a()(),s(76,"li")(77,"a",27),c(78,"Inventory List"),a()(),s(79,"li")(80,"a",28),c(81,"Lecture List"),a()(),s(82,"li")(83,"a",29),c(84,"Stationery List"),a()(),s(85,"li")(86,"a",30),c(87,"Flower List"),a()(),s(88,"li")(89,"a",31),c(90,"Destination List"),a()(),s(91,"li")(92,"a",32),c(93,"Laptop List"),a()(),s(94,"li")(95,"a",33),c(96,"Laptop Specifications List"),a()(),s(97,"li")(98,"a",34),c(99,"Computer Hardware List"),a()(),s(100,"li")(101,"a",35),c(102,"Mobile App List"),a()(),s(103,"li")(104,"a",36),c(105,"Video List"),a()(),s(106,"li")(107,"a",37),c(108,"TV Show List"),a()(),s(109,"li")(110,"a",38),c(111,"Furniture List"),a()(),s(112,"li")(113,"a",39),c(114,"Accessory List"),a()(),s(115,"li")(116,"a",40),c(117,"Building List"),a()(),s(118,"li")(119,"a",41),c(120,"Painting List"),a()(),s(121,"li")(122,"a",42),c(123,"Artist List"),a()(),s(124,"li")(125,"a",43),c(126,"Composer List"),a()(),s(127,"li")(128,"a",44),c(129,"Podcast List"),a()(),s(130,"li")(131,"a",45),c(132,"Exercise List"),a()(),s(133,"li")(134,"a",46),c(135,"Meal Plan List"),a()(),s(136,"li")(137,"a",47),c(138,"Budget List"),a()(),s(139,"li")(140,"a",48),c(141,"Presentation List"),a()(),s(142,"li")(143,"a",49),c(144,"Tour List"),a()(),s(145,"li")(146,"a",50),c(147,"Event List"),a()(),s(148,"li")(149,"a",51),c(150,"Developer Tools List"),a()(),s(151,"li")(152,"a",52),c(153,"Framework List"),a()(),s(154,"li")(155,"a",53),c(156," Library List"),a()()()(),s(157,"main",54),le(158,"router-outlet"),a()()())},dependencies:[Du],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f7f9fc}.container[_ngcontent-%COMP%]{display:flex}.sidebar[_ngcontent-%COMP%]{width:250px;background-color:#ffebee;padding:20px}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:15px}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#d81b60;font-weight:700}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#c2185b}.content[_ngcontent-%COMP%]{flex-grow:1;background-color:#e3f2fd;padding:20px}"]})};jh(ba,ng).catch(e=>console.error(e));
