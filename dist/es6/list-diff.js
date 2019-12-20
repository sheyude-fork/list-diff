/**
     * @wangdahoo/list-diff
     * @version 0.1.3 | 2019-12-20 12:58:37
     * @author  wangdahoo
     * @license MIT
     */
    !function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).ListDiff=e()}}(function(){var e,t={};Object.defineProperty(t,"__esModule",{value:!0}),(e=t.PatchType||(t.PatchType={})).ADD="ADD",e.DELETE="DELETE",e.REPOSITION="REPOSITION";var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.difference=((e,t)=>e.reduce((e,i,n)=>e.concat(-1===t.indexOf(i)?[{value:i,index:n}]:[]),[]));var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.listDiff=((e,n)=>{const f=[],p=i.difference(e,n),r=i.difference(n,e),l=[],o=(e,t)=>{const i=p.filter(e=>e.index<=t).length,n=r.filter(e=>e.index<=t).length,f=l.filter(i=>i.from<e&&i.to>t).length,o=l.filter(i=>i.from>t&&i.to<e).length;return t-e+i-n+f-o},c=e=>l.filter(t=>t.id===e).length>0;return function e(i,n,s,d){if(n===i.length){const e=r.map(e=>e.value),i=s.slice(d),n=i.filter(t=>e.indexOf(t)>-1);return void f.push(...n.reduce((e,n)=>{const f=i.indexOf(n),p=0===f?d>0?s[d-1]:"":i[f-1];return e.concat([{type:t.PatchType.ADD,id:n,after:p}])},[]))}if(d===s.length){const e=p.map(e=>e.value);return void f.push(...i.slice(n).filter(t=>e.indexOf(t)>-1).map(e=>({type:t.PatchType.DELETE,id:e})))}const a=i[n],u=s[d];if(a!==u){const e=s.indexOf(a);-1===e&&f.push({type:t.PatchType.DELETE,id:a});const p=i.indexOf(u);-1===p&&f.push({type:t.PatchType.ADD,id:u,after:d>0?s[d-1]:""});const r=[];if(e>-1&&!c(a)){const i={id:a,from:n,to:e},f=o(n,e);0!==f&&(r.push({type:t.PatchType.REPOSITION,id:a,moves:f}),l.push(i))}if(p>-1&&!c(u)){const e={id:u,from:p,to:d},i=o(p,d);0!==i&&(r.push({type:t.PatchType.REPOSITION,id:u,moves:i}),l.push(e))}f.push(...r)}e(i,n+1,s,d+1)}(e,0,n,0),f});var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.applyPatches=((e,i,n)=>{let f=e;for(let p=0;p<i.length;p++){const e=i[p];switch(e.type){case t.PatchType.ADD:f=n.applyAdditon(f,e);break;case t.PatchType.DELETE:f=n.applyDeletion(f,e);break;case t.PatchType.REPOSITION:f=n.applyRepostion(f,e)}}return f});var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.SimpleTinker=class{applyAdditon(e,i){if(i.type!==t.PatchType.ADD)return e;const{id:n,after:f}=i;if("string"!=typeof f){let t=-1;for(let i=f.length-1;i>0&&!((t=e.indexOf(f[i]))>-1);i--);return[...e.slice(0,t+1),n,...e.slice(t+1)]}if(""===f)return[n,...e];const p=e.indexOf(f);return[...e.slice(0,p+1),n,...e.slice(p+1)]}applyDeletion(e,i){if(i.type!==t.PatchType.DELETE)return e;const{id:n}=i,f=e.indexOf(n);return[...e.slice(0,f),...e.slice(f+1)]}applyRepostion(e,i){if(i.type!==t.PatchType.REPOSITION)return e;const{id:n,moves:f}=i,p=e.indexOf(n),r=p+f;return e.splice(p,1),[...e.slice(0,r),n,...e.slice(r)]}};var r={};return Object.defineProperty(r,"__esModule",{value:!0}),r.PatchType=t.PatchType,r.listDiff=n.listDiff,r.applyPatches=f.applyPatches,r.SimpleTinker=p.SimpleTinker,r});
//# sourceMappingURL=list-diff.js.map