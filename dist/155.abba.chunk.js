(self.webpackChunkrandom_word_selector=self.webpackChunkrandom_word_selector||[]).push([[155],{155:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>s});var t=r(294),o=r(997),a=r(61),i=r(825),d=r(844);const s=function(){const[e]=(0,i.o)(),[n]=(0,d.d)(),[r,s]=(0,t.useState)([]),[l,m]=(0,t.useState)(!1),{dataSource:u,shouldShowMeaning:w}=n,g=e||o.X,[c,E,h]=(0,t.useMemo)((()=>[r.map(((e,n)=>t.createElement("li",{key:n},e?.word,w?` -> ${e?.meaning}`:""))),r[r.length-1],u!==a.N.API&&r.length===g.length]),[r]);return t.createElement(t.Fragment,null,t.createElement("div",{id:"words-div",style:{width:"100%"}},t.createElement("div",{id:"current-words-div",style:{width:"100%"},align:"center"},t.createElement("button",{onClick:async()=>{const e=u===a.N.API?await(async()=>{m(!0);const e=await async function(){try{const e=await fetch(a.W),[n]=await e.json();return{word:n?.word,meaning:n?.definition}}catch(e){return console.error(e),null}}();return m(!1),e})():(n=g.filter((e=>!r.includes(e))))[Math.floor(Math.random()*n.length)];var n;e?s(r.concat(e)):console.warn("Couldn't select a word for some reason ¯\\_(ツ)_/¯",{source:u})},disabled:h||l},"New Word"),h?t.createElement("h2",null,"ALL OUT OF WORDS!!!"):t.createElement(t.Fragment,null,w&&t.createElement("h2",null,E?.meaning),t.createElement("p",null,E?.word))),t.createElement("div",{id:"past-words-div"},c.length?t.createElement(t.Fragment,null,t.createElement("h2",null,"Past words:"),t.createElement("ol",null,c)):"")))}},997:(e,n,r)=>{"use strict";r.d(n,{X:()=>t,Q:()=>o});const t=[{word:"FLABBERGASTED",meaning:"As if struck dumb with astonishment and surprise"},{word:"ARCANE",meaning:"Requiring secret or mysterious knowledge"},{word:"GLUTTONY",meaning:"Habitual eating to excess"},{word:"EMPATHY",meaning:"Understanding and entering into another s feelings"},{word:"INEPT",meaning:"Generally incompetent and ineffectual"},{word:"IMPECCABLE",meaning:"Without fault or error"},{word:"EMBEZZLE",meaning:"Appropriate fraudulently to one s own use"},{word:"ABERRATION",meaning:"A state or condition markedly different from the norm"},{word:"DEFERENTIAL",meaning:"Showing courteous regard for people s feelings"},{word:"CUMULATIVE",meaning:"Increasing by successive addition"},{word:"INSATIABLE",meaning:"Impossible to satisfy"},{word:"BRUSQUE",meaning:"Rudely abrupt or blunt in speech or manner"},{word:"INHIBIT",meaning:"Limit the range or extent of"},{word:"CANDOR",meaning:"The quality of being honest and straightforward"},{word:"COMPLACENCY",meaning:"The feeling you have when you are satisfied with yourself"},{word:"GRATUITOUS",meaning:"Unnecessary and unwarranted"},{word:"CONFIDANT",meaning:"Someone to whom private matters are told"},{word:"ELATED",meaning:"Exultantly proud and joyful in high spiritsp"},{word:"FABRICATE",meaning:"Make up something artificial or untrue"},{word:"CALLOUS",meaning:"Emotionally hardened"},{word:"INNATE",meaning:"Present at birth but not necessarily hereditary"},{word:"COERCE",meaning:"Cause to do through pressure or necessity"},{word:"BRAZEN",meaning:"Unrestrained by convention or propriety"},{word:"COHERENT",meaning:"Marked by an orderly and consistent relation of parts"},{word:"APPEASE",meaning:"Make peace with"},{word:"HYPOCRISY",meaning:"Pretending to have qualities or beliefs that you do not have"},{word:"ABHOR",meaning:"Find repugnant"},{word:"INFAMY",meaning:"A state of extreme dishonor"},{word:"FORSAKE",meaning:"Leave someone who needs or counts on you leave in the lurch"},{word:"DILIGENT",meaning:"Quietly and steadily persevering in detail or exactness"},{word:"AMIABLE",meaning:"Diffusing warmth and friendliness"},{word:"ELOQUENT",meaning:"Expressing yourself readily clearly effectively"},{word:"ENMITY",meaning:"A state of deep seated ill will"},{word:"IMPERTINENT",meaning:"Improperly forward or bold"},{word:"IMPUDENT",meaning:"Improperly forward or bold"}],o=`Enter words array here...\nEg:-\n${JSON.stringify(t.slice(0,2),null,2)}\n`}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW5kb20td29yZC1zZWxlY3Rvci8uL3NyYy9jb21wb25lbnRzL1dvcmRTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yYW5kb20td29yZC1zZWxlY3Rvci8uL3NyYy9zZXJ2aWNlcy93b3Jkc0FwaS5qcyIsIndlYnBhY2s6Ly9yYW5kb20td29yZC1zZWxlY3Rvci8uL3NyYy91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vcmFuZG9tLXdvcmQtc2VsZWN0b3IvLi9zcmMvZGF0YS5qcyJdLCJuYW1lcyI6WyJjb250ZXh0V29yZHMiLCJ1c2VXb3Jkc1N0YXRlIiwic2V0dGluZ3MiLCJ1c2VTZXR0aW5nc1N0YXRlIiwic2VsZWN0ZWRXb3JkcyIsInNldFNlbGVjdGVkV29yZHMiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImRhdGFTb3VyY2UiLCJzaG91bGRTaG93TWVhbmluZyIsIndvcmRzIiwiREVGQVVMVF9XT1JEUyIsInNlbGVjdGVkTGlzdCIsImxhc3RTZWxlY3RlZFdvcmQiLCJpc0xpc3RFeGhhdXN0ZWQiLCJ1c2VNZW1vIiwibWFwIiwieCIsImlkeCIsImtleSIsIndvcmQiLCJtZWFuaW5nIiwibGVuZ3RoIiwiRGF0YVNvdXJjZXMiLCJpZCIsInN0eWxlIiwid2lkdGgiLCJhbGlnbiIsIm9uQ2xpY2siLCJhc3luYyIsInNlbGVjdGVkV29yZCIsInJlc3VsdCIsImZldGNoIiwiUkFORE9NX1dPUkRfQVBJX1VSTCIsInJlc3BvbnNlIiwianNvbiIsImRlZmluaXRpb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZmV0Y2hSYW5kb21Xb3JkIiwiZmV0Y2hXb3JkRnJvbUFwaSIsImFycmF5IiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25jYXQiLCJ3YXJuIiwic291cmNlIiwiZGlzYWJsZWQiLCJQTEFDRUhPTERFUl9URVhUIiwiSlNPTiIsInN0cmluZ2lmeSIsInNsaWNl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LFFBQVcsK0JBRWYsQ0FDSSxLQUFRLFVBQ1IsUUFBVywrREFFZixDQUNJLEtBQVEsV0FDUixRQUFXLDJEQUVmLENBQ0ksS0FBUSxVQUNSLFFBQVcscUNBRWYsQ0FDSSxLQUFRLFdBQ1IsUUFBVyxtREFFZixDQUNJLEtBQVEsU0FDUixRQUFXLG1DQUVmLENBQ0ksS0FBUSxjQUNSLFFBQVcsOEJBRWYsQ0FDSSxLQUFRLFdBQ1IsUUFBVywrQkFJTnlDLEVBQW9CLG9DQUUvQkMsS0FBS0MsVUFBVTNDLEVBQWM0QyxNQUFNLEVBQUcsR0FBSSxLQUFNIiwiZmlsZSI6IjE1NS5hYmJhLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBERUZBVUxUX1dPUkRTIH0gZnJvbSAnLi4vZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlcyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VXb3Jkc1N0YXRlIH0gZnJvbSAnLi4vY29udGV4dHMvd29yZHMnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5pbXBvcnQgeyBmZXRjaFJhbmRvbVdvcmQgfSBmcm9tICcuLi9zZXJ2aWNlcy93b3Jkc0FwaSc7XG5pbXBvcnQgeyB1c2VTZXR0aW5nc1N0YXRlIH0gZnJvbSAnLi4vY29udGV4dHMvc2V0dGluZ3MnO1xuXG5mdW5jdGlvbiBXb3JkU2VsZWN0b3IoKSB7XG4gIGNvbnN0IFtjb250ZXh0V29yZHNdID0gdXNlV29yZHNTdGF0ZSgpO1xuICBjb25zdCBbc2V0dGluZ3NdID0gdXNlU2V0dGluZ3NTdGF0ZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRXb3Jkcywgc2V0U2VsZWN0ZWRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBkYXRhU291cmNlLCBzaG91bGRTaG93TWVhbmluZyB9ID0gc2V0dGluZ3M7XG5cbiAgY29uc3Qgd29yZHMgPSBjb250ZXh0V29yZHMgfHwgREVGQVVMVF9XT1JEUztcblxuICBjb25zdCBbc2VsZWN0ZWRMaXN0LCBsYXN0U2VsZWN0ZWRXb3JkLCBpc0xpc3RFeGhhdXN0ZWRdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHNlbGVjdGVkV29yZHMubWFwKCh4LCBpZHgpID0+IChcbiAgICAgICAgPGxpIGtleT17aWR4fT5cbiAgICAgICAgICB7eD8ud29yZH1cbiAgICAgICAgICB7c2hvdWxkU2hvd01lYW5pbmcgPyBgIC0+ICR7eD8ubWVhbmluZ31gIDogJyd9XG4gICAgICAgIDwvbGk+XG4gICAgICApKSxcbiAgICAgIHNlbGVjdGVkV29yZHNbc2VsZWN0ZWRXb3Jkcy5sZW5ndGggLSAxXSxcbiAgICAgIGRhdGFTb3VyY2UgIT09IERhdGFTb3VyY2VzLkFQSSAmJiBzZWxlY3RlZFdvcmRzLmxlbmd0aCA9PT0gd29yZHMubGVuZ3RoXG4gICAgXTtcbiAgfSwgW3NlbGVjdGVkV29yZHNdKTtcblxuICBjb25zdCBmZXRjaFdvcmRGcm9tQXBpID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCB3b3JkID0gYXdhaXQgZmV0Y2hSYW5kb21Xb3JkKCk7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcblxuICAgIHJldHVybiB3b3JkO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5ld1dvcmRDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFdvcmQgPVxuICAgICAgZGF0YVNvdXJjZSA9PT0gRGF0YVNvdXJjZXMuQVBJXG4gICAgICAgID8gYXdhaXQgZmV0Y2hXb3JkRnJvbUFwaSgpXG4gICAgICAgIDogZ2V0UmFuZG9tRWxlbWVudCh3b3Jkcy5maWx0ZXIoKHgpID0+ICFzZWxlY3RlZFdvcmRzLmluY2x1ZGVzKHgpKSk7XG5cbiAgICBpZiAoIXNlbGVjdGVkV29yZCkge1xuICAgICAgY29uc29sZS53YXJuKGBDb3VsZG4ndCBzZWxlY3QgYSB3b3JkIGZvciBzb21lIHJlYXNvbiDCr1xcXFxfKOODhClfL8KvYCwgeyBzb3VyY2U6IGRhdGFTb3VyY2UgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZFdvcmRzKHNlbGVjdGVkV29yZHMuY29uY2F0KHNlbGVjdGVkV29yZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgaWQ9XCJ3b3Jkcy1kaXZcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICA8ZGl2IGlkPVwiY3VycmVudC13b3Jkcy1kaXZcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXdXb3JkQ2xpY2t9IGRpc2FibGVkPXtpc0xpc3RFeGhhdXN0ZWQgfHwgaXNMb2FkaW5nfT5cbiAgICAgICAgICAgIE5ldyBXb3JkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2lzTGlzdEV4aGF1c3RlZCA/IChcbiAgICAgICAgICAgIDxoMj5BTEwgT1VUIE9GIFdPUkRTISEhPC9oMj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAge3Nob3VsZFNob3dNZWFuaW5nICYmIDxoMj57bGFzdFNlbGVjdGVkV29yZD8ubWVhbmluZ308L2gyPn1cbiAgICAgICAgICAgICAgPHA+e2xhc3RTZWxlY3RlZFdvcmQ/LndvcmR9PC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwYXN0LXdvcmRzLWRpdlwiPlxuICAgICAgICAgIHtzZWxlY3RlZExpc3QubGVuZ3RoID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGgyPlBhc3Qgd29yZHM6PC9oMj5cbiAgICAgICAgICAgICAgPG9sPntzZWxlY3RlZExpc3R9PC9vbD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRTZWxlY3RvcjtcbiIsImltcG9ydCB7IFJBTkRPTV9XT1JEX0FQSV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEZldGNoZXMgcmFuZG9tIHdvcmQgZnJvbSBhbiBBUEkgc291cmNlLlxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlPHsgd29yZDogc3RyaW5nOyBtZWFuaW5nOiBzdHJpbmc7IH0+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSYW5kb21Xb3JkKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFJBTkRPTV9XT1JEX0FQSV9VUkwpO1xuXG4gICAgY29uc3QgW3Jlc3BvbnNlXSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgd29yZDogcmVzcG9uc2U/LndvcmQsXG4gICAgICBtZWFuaW5nOiByZXNwb25zZT8uZGVmaW5pdGlvblxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBlbGVtZW50IGZyb20gZ2l2ZW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHthbnlbXX0gYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUVsZW1lbnQoYXJyYXkpIHtcbiAgY29uc3QgcmFuZEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcblxuICByZXR1cm4gYXJyYXlbcmFuZEluZGV4XTtcbn1cbiIsImV4cG9ydCBjb25zdCBERUZBVUxUX1dPUkRTID0gW1xuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiRkxBQkJFUkdBU1RFRFwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJBcyBpZiBzdHJ1Y2sgZHVtYiB3aXRoIGFzdG9uaXNobWVudCBhbmQgc3VycHJpc2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJBUkNBTkVcIixcbiAgICAgICAgXCJtZWFuaW5nXCI6IFwiUmVxdWlyaW5nIHNlY3JldCBvciBteXN0ZXJpb3VzIGtub3dsZWRnZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIkdMVVRUT05ZXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIkhhYml0dWFsIGVhdGluZyB0byBleGNlc3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJFTVBBVEhZXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIlVuZGVyc3RhbmRpbmcgYW5kIGVudGVyaW5nIGludG8gYW5vdGhlciBzIGZlZWxpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiSU5FUFRcIixcbiAgICAgICAgXCJtZWFuaW5nXCI6IFwiR2VuZXJhbGx5IGluY29tcGV0ZW50IGFuZCBpbmVmZmVjdHVhbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIklNUEVDQ0FCTEVcIixcbiAgICAgICAgXCJtZWFuaW5nXCI6IFwiV2l0aG91dCBmYXVsdCBvciBlcnJvclwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIkVNQkVaWkxFXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIkFwcHJvcHJpYXRlIGZyYXVkdWxlbnRseSB0byBvbmUgcyBvd24gdXNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiQUJFUlJBVElPTlwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJBIHN0YXRlIG9yIGNvbmRpdGlvbiBtYXJrZWRseSBkaWZmZXJlbnQgZnJvbSB0aGUgbm9ybVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIkRFRkVSRU5USUFMXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIlNob3dpbmcgY291cnRlb3VzIHJlZ2FyZCBmb3IgcGVvcGxlIHMgZmVlbGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJDVU1VTEFUSVZFXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIkluY3JlYXNpbmcgYnkgc3VjY2Vzc2l2ZSBhZGRpdGlvblwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIklOU0FUSUFCTEVcIixcbiAgICAgICAgXCJtZWFuaW5nXCI6IFwiSW1wb3NzaWJsZSB0byBzYXRpc2Z5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiQlJVU1FVRVwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJSdWRlbHkgYWJydXB0IG9yIGJsdW50IGluIHNwZWVjaCBvciBtYW5uZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJJTkhJQklUXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIkxpbWl0IHRoZSByYW5nZSBvciBleHRlbnQgb2ZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJDQU5ET1JcIixcbiAgICAgICAgXCJtZWFuaW5nXCI6IFwiVGhlIHF1YWxpdHkgb2YgYmVpbmcgaG9uZXN0IGFuZCBzdHJhaWdodGZvcndhcmRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJDT01QTEFDRU5DWVwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJUaGUgZmVlbGluZyB5b3UgaGF2ZSB3aGVuIHlvdSBhcmUgc2F0aXNmaWVkIHdpdGggeW91cnNlbGZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJHUkFUVUlUT1VTXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIlVubmVjZXNzYXJ5IGFuZCB1bndhcnJhbnRlZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIkNPTkZJREFOVFwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJTb21lb25lIHRvIHdob20gcHJpdmF0ZSBtYXR0ZXJzIGFyZSB0b2xkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiRUxBVEVEXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIkV4dWx0YW50bHkgcHJvdWQgYW5kIGpveWZ1bCBpbiBoaWdoIHNwaXJpdHNwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiRkFCUklDQVRFXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIk1ha2UgdXAgc29tZXRoaW5nIGFydGlmaWNpYWwgb3IgdW50cnVlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiQ0FMTE9VU1wiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJFbW90aW9uYWxseSBoYXJkZW5lZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIklOTkFURVwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJQcmVzZW50IGF0IGJpcnRoIGJ1dCBub3QgbmVjZXNzYXJpbHkgaGVyZWRpdGFyeVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIkNPRVJDRVwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJDYXVzZSB0byBkbyB0aHJvdWdoIHByZXNzdXJlIG9yIG5lY2Vzc2l0eVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIkJSQVpFTlwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJVbnJlc3RyYWluZWQgYnkgY29udmVudGlvbiBvciBwcm9wcmlldHlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJDT0hFUkVOVFwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJNYXJrZWQgYnkgYW4gb3JkZXJseSBhbmQgY29uc2lzdGVudCByZWxhdGlvbiBvZiBwYXJ0c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIkFQUEVBU0VcIixcbiAgICAgICAgXCJtZWFuaW5nXCI6IFwiTWFrZSBwZWFjZSB3aXRoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiSFlQT0NSSVNZXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIlByZXRlbmRpbmcgdG8gaGF2ZSBxdWFsaXRpZXMgb3IgYmVsaWVmcyB0aGF0IHlvdSBkbyBub3QgaGF2ZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIkFCSE9SXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIkZpbmQgcmVwdWduYW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiSU5GQU1ZXCIsXG4gICAgICAgIFwibWVhbmluZ1wiOiBcIkEgc3RhdGUgb2YgZXh0cmVtZSBkaXNob25vclwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIkZPUlNBS0VcIixcbiAgICAgICAgXCJtZWFuaW5nXCI6IFwiTGVhdmUgc29tZW9uZSB3aG8gbmVlZHMgb3IgY291bnRzIG9uIHlvdSBsZWF2ZSBpbiB0aGUgbHVyY2hcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJESUxJR0VOVFwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJRdWlldGx5IGFuZCBzdGVhZGlseSBwZXJzZXZlcmluZyBpbiBkZXRhaWwgb3IgZXhhY3RuZXNzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiQU1JQUJMRVwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJEaWZmdXNpbmcgd2FybXRoIGFuZCBmcmllbmRsaW5lc3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJFTE9RVUVOVFwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJFeHByZXNzaW5nIHlvdXJzZWxmIHJlYWRpbHkgY2xlYXJseSBlZmZlY3RpdmVseVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwid29yZFwiOiBcIkVOTUlUWVwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJBIHN0YXRlIG9mIGRlZXAgc2VhdGVkIGlsbCB3aWxsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ3b3JkXCI6IFwiSU1QRVJUSU5FTlRcIixcbiAgICAgICAgXCJtZWFuaW5nXCI6IFwiSW1wcm9wZXJseSBmb3J3YXJkIG9yIGJvbGRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIndvcmRcIjogXCJJTVBVREVOVFwiLFxuICAgICAgICBcIm1lYW5pbmdcIjogXCJJbXByb3Blcmx5IGZvcndhcmQgb3IgYm9sZFwiXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IFBMQUNFSE9MREVSX1RFWFQgPSBgRW50ZXIgd29yZHMgYXJyYXkgaGVyZS4uLlxuRWc6LVxuJHtKU09OLnN0cmluZ2lmeShERUZBVUxUX1dPUkRTLnNsaWNlKDAsIDIpLCBudWxsLCAyKX1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9