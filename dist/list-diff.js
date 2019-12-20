/**
     * @wangdahoo/list-diff
     * @version 0.1.3 | 2019-12-20 12:58:34
     * @author  wangdahoo
     * @license MIT
     */
    !function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).ListDiff=e()}}(function(){var e,t={};Object.defineProperty(t,"__esModule",{value:!0}),(e=t.PatchType||(t.PatchType={})).ADD="ADD",e.DELETE="DELETE",e.REPOSITION="REPOSITION";var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.difference=function(e,t){return e.reduce(function(e,n,r){return e.concat(-1===t.indexOf(n)?[{value:n,index:r}]:[])},[])};var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.listDiff=function(e,r){var i=[],f=n.difference(e,r),p=n.difference(r,e),o=[],u=function(e,t){var n=f.filter(function(e){return e.index<=t}).length,r=p.filter(function(e){return e.index<=t}).length,i=o.filter(function(n){return n.from<e&&n.to>t}).length,u=o.filter(function(n){return n.from>t&&n.to<e}).length;return t-e+n-r+i-u},a=function(e){return o.filter(function(t){return t.id===e}).length>0};return function e(n,r,c,l){if(r!==n.length)if(l!==c.length){var d=n[r],s=c[l];if(d!==s){var y=c.indexOf(d);-1===y&&i.push({type:t.PatchType.DELETE,id:d});var h=n.indexOf(s);-1===h&&i.push({type:t.PatchType.ADD,id:s,after:l>0?c[l-1]:""});var v,P=[];if(y>-1&&!a(d)){var T={id:d,from:r,to:y};0!==(v=u(r,y))&&(P.push({type:t.PatchType.REPOSITION,id:d,moves:v}),o.push(T))}h>-1&&!a(s)&&(T={id:s,from:h,to:l},0!==(v=u(h,l))&&(P.push({type:t.PatchType.REPOSITION,id:s,moves:v}),o.push(T))),i.push.apply(i,P)}e(n,r+1,c,l+1)}else{var O=f.map(function(e){return e.value});i.push.apply(i,n.slice(r).filter(function(e){return O.indexOf(e)>-1}).map(function(e){return{type:t.PatchType.DELETE,id:e}}))}else{var D=p.map(function(e){return e.value}),E=c.slice(l),m=E.filter(function(e){return D.indexOf(e)>-1});i.push.apply(i,m.reduce(function(e,n){var r=E.indexOf(n),i=0===r?l>0?c[l-1]:"":E[r-1];return e.concat([{type:t.PatchType.ADD,id:n,after:i}])},[]))}}(e,0,r,0),i};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.applyPatches=function(e,n,r){for(var i=e,f=0;f<n.length;f++){var p=n[f];switch(p.type){case t.PatchType.ADD:i=r.applyAdditon(i,p);break;case t.PatchType.DELETE:i=r.applyDeletion(i,p);break;case t.PatchType.REPOSITION:i=r.applyRepostion(i,p)}}return i};var f={},p=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var f=arguments[t],p=0,o=f.length;p<o;p++,i++)r[i]=f[p];return r};Object.defineProperty(f,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.applyAdditon=function(e,n){if(n.type!==t.PatchType.ADD)return e;var r=n.id,i=n.after;if("string"!=typeof i){for(var f=-1,o=i.length-1;o>0&&!((f=e.indexOf(i[o]))>-1);o--);return p(e.slice(0,f+1),[r],e.slice(f+1))}if(""===i)return p([r],e);var u=e.indexOf(i);return p(e.slice(0,u+1),[r],e.slice(u+1))},e.prototype.applyDeletion=function(e,n){if(n.type!==t.PatchType.DELETE)return e;var r=n.id,i=e.indexOf(r);return p(e.slice(0,i),e.slice(i+1))},e.prototype.applyRepostion=function(e,n){if(n.type!==t.PatchType.REPOSITION)return e;var r=n.id,i=n.moves,f=e.indexOf(r),o=f+i;return e.splice(f,1),p(e.slice(0,o),[r],e.slice(o))},e}();f.SimpleTinker=o;var u={};return Object.defineProperty(u,"__esModule",{value:!0}),u.PatchType=t.PatchType,u.listDiff=r.listDiff,u.applyPatches=i.applyPatches,u.SimpleTinker=f.SimpleTinker,u});
//# sourceMappingURL=list-diff.js.map