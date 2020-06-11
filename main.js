!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=[];class l{constructor(e,t,n,o,l,r){this.taskName=e,this.projectFolder=t,this.taskDescription=n,this.dueDate=o,this.priority=l,this.taskNotes=r}addToTaskList(e){return o.push(e),o}deleteFromTaskLIst(e,t){return e.splice(t,1),e}changeTask(e,t){let n=document.getElementById("taskName"),o=document.getElementById("projectFolder"),l=document.getElementById("taskDescription"),r=document.getElementById("dueDate"),a=document.getElementById("priority"),c=document.getElementById("taskNotes");e[t].taskName=n.value,e[t].projectFolder=o.value,e[t].taskDescription=l.value,e[t].dueDate=r.value,e[t].priority=a.value,e[t].taskNotes=c.value}}let r=[];class a{constructor(){this.projectName=document.getElementById("addProjectForm").value,this.projectTasksList=[]}addToProjectList(e){return r.push(e.projectName),console.log(r),r}deleteFromProjectList(e,t){let n=e.indexOf(t.textContent);return e.splice(n,1),console.log(e),e}}let c=document.getElementById("taskName"),d=document.getElementById("projectFolder"),s=document.getElementById("taskDescription"),i=document.getElementById("dueDate"),u=document.getElementById("priority"),m=document.getElementById("taskNotes");const p=()=>({display:function(){document.getElementById("addTaskWindowContainer").style.display="block"},hide:function(){document.getElementById("addTaskWindowContainer").style.display="none"},clearValues:function(){c.value="",s.value="",i.value="",m.value=""},buttonDisplay:function(e){!1===e?(document.getElementById("saveButton").style.display="block",document.getElementById("submitButton").style.display="none"):!0===e&&(document.getElementById("saveButton").style.display="none",document.getElementById("submitButton").style.display="block")}}),y=(e,t)=>({setValues:function(e){c.value=t[e].taskName,d.value=t[e].projectFolder,s.value=t[e].taskDescription,i.value=t[e].dueDate,u.value=t[e].priority,m.value=t[e].taskNotes}});p(),(()=>{let e;const t=document.querySelector("#addProjectButton"),n=document.querySelector("#submitButton"),c=document.querySelector("#saveButton"),d=document.querySelector("#allTasks"),s=document.querySelector("#addTaskButton"),i=document.querySelector("#cancel"),u=p(),m=(()=>{function e(e,t){const o=document.querySelector(".projectList"),l=document.querySelector("#allTasks");o.innerHTML="",o.appendChild(l);for(let l of t){let t=document.createElement("li");t.className="projects",t.id=l,t.textContent=l,o.appendChild(t),n(t,l,e)}}function t(e){const t=document.querySelector("#projectFolder");t.innerHTML="";for(let n of e){let e=document.createElement("option");e.value=n,e.text=n,t.appendChild(e)}}function n(n,o,l){let a=document.createElement("i");a.setAttribute("class","fa fa-close"),a.setAttribute("id","deleteProjButton"),a.setAttribute("value",o),n.appendChild(a),a.addEventListener("click",()=>{l.deleteFromProjectList(r,n),e(l,r),t(r)})}return{renderProjectCard:e,loadProjectListOptions:t}})();function f(){let e=new a;console.log(r),""!==e.projectName&&(r.includes(e.projectName)?alert("Can't Duplicate Project Names"):(e.addToProjectList(e),m.loadProjectListOptions(r),m.renderProjectCard(e,r),document.getElementById("addProjectForm").value=""))}function v(t){const n=document.querySelectorAll(".projects");t.addToTaskList(t);const l=((e,t)=>{const n=document.querySelector("#tbody");function o(e){n.innerHTML="";for(let t in e){let o=document.createElement("tr");o.className="todoItem",o.id=""+t,o.setAttribute("name",e[t].projectFolder+"TableCard");let l=document.createElement("button");l.classList="edit",l.id=""+t,l.textContent="Edit this task";let a=document.createElement("td"),c=document.createElement("input");c.setAttribute("type","checkbox"),o.appendChild(l),a.appendChild(c),o.appendChild(a);for(let n in e[t]){let l=document.createElement("td");l.className=n+"CardDisplay",l.textContent=""+e[t][n],o.appendChild(l),"projectFolderCardDisplay"!==l.className&&"taskDescriptionCardDisplay"!==l.className&&"taskNotesCardDisplay"!==l.className||o.removeChild(l)}r(o,t),n.appendChild(o)}}function l(e){let t=document.getElementsByClassName("todoItem");if(!1===e)for(let e=0;e<t.length;++e)t[e].style.display="none";else if(!0===e)for(let e=0;e<t.length;++e)t[e].style.display="block"}function r(n,l){let r=document.createElement("td"),a=document.createElement("button");a.setAttribute("type","button"),a.setAttribute("id","deleteTask"),a.setAttribute("data-index",""+l),a.textContent="Delete",a.addEventListener("click",()=>{t.deleteFromTaskLIst(e,l),o(e)}),r.appendChild(a),n.appendChild(r)}return{renderAllTasks:o,renderProjectsTasks:function(e,t){l(!1);for(let n in e){let o=document.getElementsByName(e[n].projectFolder+"TableCard");if(e[n].projectFolder===t.id)for(let e=0;e<o.length;++e)o[e].style.display="flex"}},clearOrDisplayTasks:l}})(o,t);u.buttonDisplay(e),l.renderAllTasks(o),function(e){d.addEventListener("click",()=>{e.clearOrDisplayTasks(!0)})}(l),k(o,t,l,e),function(e,t){e.forEach(e=>{e.addEventListener("click",()=>{t.renderProjectsTasks(o,e)})})}(n,l),u.clearValues(),u.hide()}function k(e,t,n,o){let l,r=document.querySelectorAll(".todoItem");r.forEach(a=>{const c=y(0,e);a.addEventListener("click",a=>{l=a.target.id,j(c,u,l),E(l,t,e,n,o,r)})})}function E(e,t,n,o,l,r){console.log(e),c.addEventListener("click",()=>{console.log(e),u.hide()})}function j(t,n,o){e=!1,n.buttonDisplay(e),n.clearValues(),t.setValues(o),n.display()}s.addEventListener("click",()=>{e=!0,u.display(),u.buttonDisplay(e),u.clearValues()}),i.addEventListener("click",()=>{e=!1,u.hide(),u.clearValues()}),t.addEventListener("click",()=>{f()}),n.addEventListener("click",()=>{v(new l(taskName.value,projectFolder.value,taskDescription.value,dueDate.value,priority.value,taskNotes.value)),function(e){let o;document.querySelectorAll(".todoItem").forEach(t=>{console.log("remove");const n=y(0,e);t.removeEventListener("click",e=>{o=e.target.id,j(n,u,o),E(o)})}),t.removeEventListener("click",()=>{f()}),n.removeEventListener("click",()=>{v(new l(taskName.value,projectFolder.value,taskDescription.value,dueDate.value,priority.value,taskNotes.value))})}(o)})})()}]);