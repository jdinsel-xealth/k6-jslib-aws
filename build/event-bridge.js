/*! For license information please see event-bridge.js.LICENSE.txt */
(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,a=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function c(e,t,r){return(t=a(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}e.r(t),e.d(t,{AWSConfig:()=>O,EventBridgeClient:()=>Ke,EventBridgeServiceError:()=>He,InvalidAWSConfigError:()=>S,InvalidSignatureError:()=>me});var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_protocol",void 0),c(this,"_hostname",void 0),c(this,"_port",void 0);var r=!t.startsWith("http://")&&!t.startsWith("https://")?"".concat(e.DEFAULT_PROTOCOL,"://").concat(t):t,o=r.match(/^https?:/),i=n(r.replace(/^https?:\/\//,"").split("/"),1)[0];this._protocol=o?o[0].slice(0,-1):e.DEFAULT_PROTOCOL,this._hostname=i.split(":")[0],this._port=i.split(":")[1]?parseInt(i.split(":")[1]):void 0}var t,r,o;return t=e,(r=[{key:"copy",value:function(){return new e(this.href)}},{key:"host",get:function(){return this._port?"".concat(this._hostname,":").concat(this._port):this._hostname},set:function(e){var t=n(e.split(":"),2),r=t[0],o=t[1];this._hostname=r,this._port=o?parseInt(o):void 0}},{key:"hostname",get:function(){return this._hostname},set:function(e){this._hostname=e}},{key:"href",get:function(){return"".concat(this.protocol,"://").concat(this.host)},set:function(t){var r=t.match(/^https?:/),o=n(t.replace(/^https?:\/\//,"").split("/"),1)[0];this._protocol=r?r[0].slice(0,-1):e.DEFAULT_PROTOCOL,this._hostname=o.split(":")[0],this._port=o.split(":")[1]?parseInt(o.split(":")[1]):void 0}},{key:"port",get:function(){return this._port},set:function(e){this._port=e}},{key:"protocol",get:function(){return this._protocol},set:function(e){this._protocol=e}}])&&i(t.prototype,r),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e){var t=y();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function l(e){var t="function"==typeof Map?new Map:void 0;return l=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return p(e,arguments,v(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,e)},l(e)}function p(e,t,r){return p=y()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&h(o,r.prototype),o},p.apply(null,arguments)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function m(e,t,r){return t&&b(e.prototype,t),r&&b(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function g(e,t,r){return(t=w(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}c(u,"DEFAULT_PROTOCOL","https");var O=function(){function e(t){if(d(this,e),g(this,"region",void 0),g(this,"accessKeyId",void 0),g(this,"secretAccessKey",void 0),g(this,"sessionToken",void 0),g(this,"endpoint",void 0),!t.region||""===t.region)throw new S('invalid AWS region; reason: expected a valid AWS region name (e.g. "us-east-1"), got `'.concat(t.region,"`"));if(!t.accessKeyId||""===t.accessKeyId)throw new S("invalid AWS access key ID; reason: expected a non empty string, got `".concat(t.accessKeyId,"`"));if(t.accessKeyId.length<16||t.accessKeyId.length>128)throw new S("invalid AWS access key ID; reason: size should be between 16 and 128 characters, got ".concat(t.accessKeyId.length));if(!t.secretAccessKey||""===t.secretAccessKey)throw new S("invalid AWS secret access key; reason: expected a non empty string, got `".concat(t.secretAccessKey,"`"));if(t.secretAccessKey.length<16||t.secretAccessKey.length>128)throw new S("invalid AWS secret access key; reason: size should be between 16 and 128 characters, got ".concat(t.secretAccessKey.length));this.region=t.region,this.accessKeyId=t.accessKeyId,this.secretAccessKey=t.secretAccessKey,void 0!==t.sessionToken&&(this.sessionToken=t.sessionToken),void 0!==t.endpoint&&("string"==typeof t.endpoint?this.endpoint=new u(t.endpoint):this.endpoint=t.endpoint)}return m(e,null,[{key:"fromEnvironment",value:function(t){return new e({region:__ENV.AWS_REGION,accessKeyId:__ENV.AWS_ACCESS_KEY_ID,secretAccessKey:__ENV.AWS_SECRET_ACCESS_KEY,sessionToken:__ENV.AWS_SESSION_TOKEN,endpoint:null==t?void 0:t.endpoint})}}]),e}(),S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(r,e);var t=f(r);function r(e){return d(this,r),t.call(this,e)}return m(r)}(l(Error));const j=require("k6/http");var _=e.n(j);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,A(n.key),n)}}function k(e,t,r){return(t=A(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e){var t=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===P(t)?t:String(t)}var C=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"awsConfig",void 0),k(this,"serviceName",void 0),k(this,"_endpoint",void 0),this.awsConfig=t,this.serviceName=r,null!=t.endpoint&&(this._endpoint=t.endpoint)}var t,r,n;return t=e,(r=[{key:"endpoint",get:function(){return null==this._endpoint&&(this._endpoint=new u("https://".concat(this.serviceName,".").concat(this.awsConfig.region,".amazonaws.com"))),this._endpoint},set:function(e){this._endpoint=e}}])&&E(t.prototype,r),n&&E(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const T=require("k6/html");function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,z(n.key),n)}}function I(e){var t=N();return function(){var r,n=q(e);if(t){var o=q(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}(this,r)}}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){var t="function"==typeof Map?new Map:void 0;return D=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return K(e,arguments,q(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),H(n,e)},D(e)}function K(e,t,r){return K=N()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&H(o,r.prototype),o},K.apply(null,arguments)}function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},H(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}function z(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===x(t)?t:String(t)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(i,e);var t,r,n,o=I(i);function i(e,t){var r,n,c,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),r=o.call(this,e),n=R(r),a=void 0,(c=z(c="code"))in n?Object.defineProperty(n,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[c]=a,r.name="AWSError",r.code=t,r}return t=i,n=[{key:"parseXML",value:function(e){var t=(0,T.parseHTML)(e);return new i(t.find("Message").text(),t.find("Code").text())}}],(r=null)&&L(t.prototype,r),n&&L(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(D(Error));const B=require("k6/crypto");var M=e.n(B),F="X-Amz-Date",U="X-Amz-Signature",G="X-Amz-Security-Token",X="x-amz-content-sha256",Q=F.toLowerCase(),V=U.toLowerCase(),Y="X-Amz-Target".toLowerCase(),J=G.toLowerCase(),$="authorization",Z=[$,Q,"date"],ee="host",te={authorization:!0,"cache-control":!0,connection:!0,expect:!0,from:!0,"keep-alive":!0,"max-forwards":!0,pragma:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,"x-amzn-trace-id":!0},re="aws4_request",ne="AWS4-HMAC-SHA256";function oe(e){return oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(e)}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ie(e,t)}function ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ae(e);if(t){var o=ae(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===oe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function ae(e){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ae(e)}function ue(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return se(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){ve(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ye(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,de(n.key),n)}}function he(e,t,r){return t&&ye(e.prototype,t),r&&ye(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function ve(e,t,r){return(t=de(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function de(e){var t=function(e,t){if("object"!==oe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===oe(t)?t:String(t)}var be=function(){function e(t){var r=t.service,n=t.region,o=t.credentials,i=t.uriEscapePath,c=t.applyChecksum;pe(this,e),ve(this,"service",void 0),ve(this,"region",void 0),ve(this,"credentials",void 0),ve(this,"uriEscapePath",void 0),ve(this,"applyChecksum",void 0),this.service=r,this.region=n,this.credentials=o,this.uriEscapePath="boolean"!=typeof i||i,this.applyChecksum="boolean"!=typeof c||c}return he(e,[{key:"sign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=le(le({},{signingDate:new Date,unsignableHeaders:new Set,signableHeaders:new Set}),t),n=we(r.signingDate),o=n.longDate,i=n.shortDate,c=r.signingService||this.service,a=r.signingRegion||this.region,u="".concat(i,"/").concat(a,"/").concat(c,"/").concat(re);e.headers[ee]=e.endpoint.hostname;for(var s=0,f=Object.keys(e.headers);s<f.length;s++){var l=f[s];Z.indexOf(l.toLowerCase())>-1&&delete e.headers[l]}e.headers[Q]=o,this.credentials.sessionToken&&(e.headers[J]=this.credentials.sessionToken),ArrayBuffer.isView(e.body)&&(e.body=e.body.buffer),e.body||(e.body="");var p=this.computePayloadHash(e);!function(e,t){e=e.toLowerCase();for(var r=0,n=Object.keys(t);r<n.length;r++)if(e===n[r].toLowerCase())return!0;return!1}(X,e.headers)&&this.applyChecksum&&(e.headers[X]=p);var y=this.computeCanonicalHeaders(e,r.unsignableHeaders,r.signableHeaders),h=this.calculateSignature(o,u,this.deriveSigningKey(this.credentials,c,a,i),this.createCanonicalRequest(e,y,p));e.headers[$]="".concat(ne," ")+"Credential=".concat(this.credentials.accessKeyId,"/").concat(u,", ")+"SignedHeaders=".concat(Object.keys(y).sort().join(";"),", ")+"Signature=".concat(h);var v=e.endpoint.href;return e.path&&(v+=e.path),e.query&&(v+="?".concat(this.serializeQueryParameters(e.query))),le({url:v},e)}},{key:"presign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.signingDate,n=void 0===r?new Date:r,o=t.expiresIn,i=void 0===o?3600:o,c=t.unsignableHeaders,a=t.unhoistableHeaders,u=t.signableHeaders,s=t.signingRegion,f=t.signingService,l=we(n),p=l.longDate,y=l.shortDate,h=s||this.region,v=f||this.service;if(i>604800)throw new me("Signature version 4 presigned URLs can't be valid for more than 7 days");var d="".concat(y,"/").concat(h,"/").concat(v,"/").concat(re),b=this.moveHeadersToQuery(e,{unhoistableHeaders:a});b.headers[ee]=e.endpoint.hostname,this.credentials.sessionToken&&(b.query[G]=this.credentials.sessionToken),b.query["X-Amz-Algorithm"]=ne,b.query["X-Amz-Credential"]="".concat(this.credentials.accessKeyId,"/").concat(d),b.query[F]=p,b.query["X-Amz-Expires"]=i.toString(10);var m=this.computeCanonicalHeaders(b,c,u);b.query["X-Amz-SignedHeaders"]=Object.keys(m).sort().join(";");var g=this.deriveSigningKey(this.credentials,v,h,y),w=this.computePayloadHash(e),O=this.createCanonicalRequest(b,m,w);b.query[U]=this.calculateSignature(p,d,g,O);var S=b.endpoint.href;return b.path&&(S+=b.path),b.query&&(S+="?".concat(this.serializeQueryParameters(b.query))),le({url:S},b)}},{key:"createCanonicalRequest",value:function(e,t,r){var n=Object.keys(t).sort(),o=n.map((function(e){return"".concat(e,":").concat(t[e])})).join("\n"),i=n.join(";");return"".concat(e.method,"\n")+"".concat(this.computeCanonicalURI(e),"\n")+"".concat(this.computeCanonicalQuerystring(e),"\n")+"".concat(o,"\n\n")+"".concat(i,"\n")+"".concat(r)}},{key:"createStringToSign",value:function(e,t,r){var n=M().sha256(r,"hex");return"".concat(ne,"\n")+"".concat(e,"\n")+"".concat(t,"\n")+"".concat(n)}},{key:"calculateSignature",value:function(e,t,r,n){var o=this.createStringToSign(e,t,n);return M().hmac("sha256",r,o,"hex")}},{key:"deriveSigningKey",value:function(e,t,r,n){var o=e.secretAccessKey,i=M().hmac("sha256","AWS4"+o,n,"binary"),c=M().hmac("sha256",i,r,"binary"),a=M().hmac("sha256",c,t,"binary");return M().hmac("sha256",a,"aws4_request","binary")}},{key:"computeCanonicalURI",value:function(e){var t=e.path;if(this.uriEscapePath){var r,n=[],o=ue(t.split("/"));try{for(o.s();!(r=o.n()).done;){var i=r.value;0!==(null==i?void 0:i.length)&&("."!==i&&(".."===i?n.pop():n.push(i)))}}catch(e){o.e(e)}finally{o.f()}var c=null!=t&&t.startsWith("/")?"/":"",a=n.join("/"),u=n.length>0&&null!=t&&t.endsWith("/")?"/":"",s="".concat(c).concat(a).concat(u);return encodeURIComponent(s).replace(/%2F/g,"/")}return t}},{key:"computeCanonicalQuerystring",value:function(e){var t,r=e.query,n=void 0===r?{}:r,o=[],i={},c=function(e){if(e.toLowerCase()===V)return 1;o.push(e);var t=n[e];"string"==typeof t?i[e]="".concat(ge(e),"=").concat(ge(t)):Array.isArray(t)&&(i[e]=t.slice(0).sort().reduce((function(t,r){return t.concat(["".concat(ge(e),"=").concat(ge(r))])}),[]).join("&"))},a=ue(Object.keys(n).sort());try{for(a.s();!(t=a.n()).done;){c(t.value)}}catch(e){a.e(e)}finally{a.f()}return o.map((function(e){return i[e]})).filter((function(e){return e})).join("&")}},{key:"computeCanonicalHeaders",value:function(e,t,r){var n,o=e.headers,i={},c=ue(Object.keys(o).sort());try{for(c.s();!(n=c.n()).done;){var a=n.value;if(null!=o[a]){var u=a.toLowerCase();(u in te||null!=t&&t.has(u))&&(!r||r&&!r.has(u))||(i[u]=o[a].trim().replace(/\s+/g," "))}}}catch(e){c.e(e)}finally{c.f()}return i}},{key:"computePayloadHash",value:function(e){var t,r=e.headers,n=e.body;return r[X]?r[X]:null==n?"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855":"string"==typeof n||(t=n,"function"==typeof ArrayBuffer&&(t instanceof ArrayBuffer||"[object ArrayBuffer]"===Object.prototype.toString.call(t)))?M().sha256(n,"hex").toLowerCase():ArrayBuffer.isView(n)?M().sha256(n.buffer,"hex").toLowerCase():"UNSIGNED-PAYLOAD"}},{key:"moveHeadersToQuery",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=JSON.parse(JSON.stringify(e)),n=r.headers,o=r.query,i=void 0===o?{}:o,c=0,a=Object.keys(n);c<a.length;c++){var u,s=a[c],f=s.toLowerCase();"x-amz-"!==f.slice(0,6)||null!==(u=t.unhoistableHeaders)&&void 0!==u&&u.has(f)||(i[s]=n[s],delete n[s])}return le(le({},r),{},{headers:n,query:i})}},{key:"serializeQueryParameters",value:function(e,t){var r,n=[],o={},i=function(r){if(null!=t&&t.includes(r.toLowerCase()))return 1;n.push(r);var i=e[r];"string"==typeof i?o[r]="".concat(ge(r),"=").concat(ge(i)):Array.isArray(i)&&(o[r]=i.slice(0).sort().reduce((function(e,t){return e.concat(["".concat(ge(r),"=").concat(ge(t))])}),[]).join("&"))},c=ue(Object.keys(e).sort());try{for(c.s();!(r=c.n()).done;){i(r.value)}}catch(e){c.e(e)}finally{c.f()}return n.map((function(e){return o[e]})).filter((function(e){return e})).join("&")}}]),e}(),me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ie(e,t)}(r,e);var t=ce(r);function r(e,n){var o;return pe(this,r),(o=t.call(this,e,n)).name="InvalidSignatureError",o}return he(r)}(W);function ge(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}function we(e){var t,r=(t=e,function(e){return"number"==typeof e?new Date(1e3*e):"string"==typeof e?Number(e)?new Date(1e3*Number(e)):new Date(e):e}(t).toISOString().replace(/\.\d{3}Z$/,"Z")).replace(/[\-:]/g,"");return{longDate:r,shortDate:r.slice(0,8)}}function Oe(e){return Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oe(e)}function Se(){Se=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var i=t&&t.prototype instanceof b?t:b,c=Object.create(i.prototype),a=new T(n||[]);return o(c,"_invoke",{value:E(e,r,a)}),c}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",y="suspendedYield",h="executing",v="completed",d={};function b(){}function m(){}function g(){}var w={};s(w,c,(function(){return this}));var O=Object.getPrototypeOf,S=O&&O(O(x([])));S&&S!==r&&n.call(S,c)&&(w=S);var j=g.prototype=b.prototype=Object.create(w);function _(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function r(o,i,c,a){var u=l(e[o],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==Oe(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,a)}),(function(e){r("throw",e,c,a)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,a)}))}a(u.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function E(t,r,n){var o=p;return function(i,c){if(o===h)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw c;return{value:e,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=k(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var s=l(t,r,n);if("normal"===s.type){if(o=n.done?v:y,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=l(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var c=i.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function x(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(Oe(t)+" is not iterable")}return m.prototype=g,o(j,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=s(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,u,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},_(P.prototype),s(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new P(f(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},_(j),s(j,u,"Generator"),s(j,c,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=x,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:x(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){Re(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Pe(e,t,r,n,o,i,c){try{var a=e[i](c),u=a.value}catch(e){return void r(e)}a.done?t(u):Promise.resolve(u).then(n,o)}function Ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ke(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,De(n.key),n)}}function Ae(e,t,r){return t&&ke(e.prototype,t),r&&ke(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ce(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Te(e,t)}function Te(e,t){return Te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Te(e,t)}function xe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Ie(e);if(t){var o=Ie(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===Oe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Le(e)}(this,r)}}function Le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ie(e){return Ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ie(e)}function Re(e,t,r){return(t=De(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function De(e){var t=function(e,t){if("object"!==Oe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==Oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Oe(t)?t:String(t)}var Ke=function(e){Ce(o,e);var t,r,n=xe(o);function o(e){var t;return Ee(this,o),Re(Le(t=n.call(this,e,"events")),"method",void 0),Re(Le(t),"commonHeaders",void 0),Re(Le(t),"signature",void 0),t.signature=new be({service:t.serviceName,region:t.awsConfig.region,credentials:{accessKeyId:t.awsConfig.accessKeyId,secretAccessKey:t.awsConfig.secretAccessKey,sessionToken:t.awsConfig.sessionToken},uriEscapePath:!0,applyChecksum:!1}),t.method="POST",t.commonHeaders={"Content-Type":"application/x-amz-json-1.1"},t}return Ae(o,[{key:"putEvents",value:(t=Se().mark((function e(t){var r,n,o;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=_e(_e({},t),{},{Entries:t.Entries.map((function(e){return _e(_e({},e),{},{Detail:JSON.stringify(e.Detail)})}))}),n=this.signature.sign({method:this.method,endpoint:this.endpoint,path:"/",headers:_e(_e({},this.commonHeaders),{},Re({},Y,"AWSEvents.PutEvents")),body:JSON.stringify(r)},{}),e.next=4,_().asyncRequest(this.method,n.url,n.body,{headers:n.headers});case 4:o=e.sent,this._handle_error(Ne.PutEvents,o);case 6:case"end":return e.stop()}}),e,this)})),r=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(e){Pe(i,n,o,c,a,"next",e)}function a(e){Pe(i,n,o,c,a,"throw",e)}c(void 0)}))},function(e){return r.apply(this,arguments)})},{key:"_handle_error",value:function(e,t){var r=t.error_code;if(0!==r){var n=t.json();if(r>=1400&&r<=1499){var o=n.Message||n.message||n.__type;if("InvalidSignatureException"===n.__type)throw new me(o,n.__type);throw new He(o,n.__type,e)}if(1500===r)throw new He("An error occured on the server side","InternalServiceError",e)}}}]),o}(C),Ne=function(e){return e.PutEvents="PutEvents",e}(Ne||{}),He=function(e){Ce(r,e);var t=xe(r);function r(e,n,o){var i;return Ee(this,r),Re(Le(i=t.call(this,e,n)),"operation",void 0),i.name="EventBridgeServiceError",i.operation=o,i}return Ae(r)}(W),qe=exports;for(var ze in t)qe[ze]=t[ze];t.__esModule&&Object.defineProperty(qe,"__esModule",{value:!0})})();
//# sourceMappingURL=event-bridge.js.map