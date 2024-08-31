import{u as w,r as h,i as k,j as z,c as i,a as t,t as _,k as V,w as C,v as A,d as m,n as f,F as B,l as M,h as u,o as r,m as D}from"./index-2IYxyBar.js";const F={id:"todoListPage",class:"bg-half"},I=t("h1",null,[t("a",{href:"#"},"ONLINE TODO LIST")],-1),N={class:"todo_sm"},O={href:"#"},U={class:"conatiner todoListPage vhContainer"},E={class:"todoList_Content"},P={class:"inputBox"},R=t("i",{class:"fa fa-plus"},"+",-1),q=[R],G={key:0,class:"fs-1"},H={key:1,class:"todoList_list"},J={class:"todoList_tab"},K={class:"todoList_items"},Q={class:"todoList_label"},W=["onUpdate:modelValue","onClick"],X=["onClick"],Y=t("i",{class:"fa fa-times"},"x",-1),Z=[Y],tt={class:"todoList_statistics"},p="https://todolist-api.hexschool.io",ot={__name:"TodoListView",setup(et){const L=w(),g=e=>sessionStorage.getItem(e),c=g("token"),$=g("username"),x=()=>{sessionStorage.clear(),L.push("/")},l=h([]),n=h(""),a=h("all"),y=()=>{if(n.value===""){alert("請輸入代辦事項");return}u.post(`${p}/todos`,{content:n.value},{headers:{Authorization:c,"Content-Type":"application/json"}}).then(e=>{e.status===201&&(alert("新增成功"),d(),n.value="")}).catch(e=>{alert(e.response.data.message)})},T=e=>{u.delete(`${p}/todos/${e}`,{headers:{Authorization:c,"Content-Type":"application/json"}}).then(s=>{s.status===200?(alert("刪除成功"),d()):alert(err.response.data.message)}).catch(s=>{alert(s.response.data.message)})},d=()=>{u.get(`${p}/todos`,{headers:{Authorization:c,"Content-Type":"application/json"}}).then(e=>{l.value=e.data.data}).catch(e=>{alert(e.response.data.message)})},b=e=>{u.patch(`${p}/todos/${e}/toggle`,{},{headers:{Authorization:c,"Content-Type":"application/json"}}).then(s=>{s.status===200?(alert("切換狀態成功"),d()):alert(err.response.data.message)}).catch(s=>{alert(s.response.data.message)})},S=k(()=>a.value==="completed"?l.value.filter(e=>e.status):a.value==="active"?l.value.filter(e=>!e.status):l.value),j=k(()=>l.value.filter(e=>!e.status));return z(()=>{d()}),(e,s)=>(r(),i("div",F,[t("nav",null,[I,t("ul",null,[t("li",N,[t("a",O,[t("span",null,_(V($))+"的代辦",1)])]),t("li",null,[t("a",{onClick:x},"登出")])])]),t("div",U,[t("div",E,[t("div",P,[C(t("input",{type:"text",placeholder:"請輸入待辦事項","onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o)},null,512),[[A,n.value]]),t("a",{href:"#",onClick:s[1]||(s[1]=m(o=>y(),["prevent"]))},q)]),l.value.length===0?(r(),i("p",G,"目前尚無待辦事項")):(r(),i("div",H,[t("ul",J,[t("li",null,[t("a",{onClick:s[2]||(s[2]=o=>a.value="all"),class:f({active:a.value==="all"})},"全部",2)]),t("li",null,[t("a",{onClick:s[3]||(s[3]=o=>a.value="active"),class:f({active:a.value==="active"})},"待完成",2)]),t("li",null,[t("a",{onClick:s[4]||(s[4]=o=>a.value="completed"),class:f({active:a.value==="completed"})},"已完成",2)])]),t("div",K,[(r(!0),i(B,null,M(S.value,o=>(r(),i("ul",{class:"todoList_item",key:o.id},[t("li",null,[t("label",Q,[C(t("input",{class:"todoList_input",type:"checkbox",value:"true","onUpdate:modelValue":v=>o.status=v,onClick:m(v=>b(o.id),["prevent"])},null,8,W),[[D,o.status]]),t("span",null,_(o.content),1)]),t("a",{href:"#",onClick:m(v=>T(o.id),["prevent"])},Z,8,X)])]))),128)),t("div",tt,[t("p",null,_(j.value.length)+" 個未完成項目",1)])])]))])])]))}};export{ot as default};
