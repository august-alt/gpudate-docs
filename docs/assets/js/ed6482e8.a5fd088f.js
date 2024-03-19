"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[6031],{7119:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=i(4848),s=i(8453);const l={},o=void 0,r={id:"gpoa/plugin/plugin",title:"plugin",description:"ClassDef plugin",source:"@site/docs/gpoa/plugin/plugin.md",sourceDirName:"gpoa/plugin",slug:"/gpoa/plugin/",permalink:"/gpupdate-docs/docs/gpoa/plugin/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"tasks",permalink:"/gpupdate-docs/docs/gpoa/gpt/tasks"},next:{title:"adp",permalink:"/gpupdate-docs/docs/gpoa/plugin/adp"}},a={},c=[{value:"ClassDef plugin",id:"classdef-plugin",level:2},{value:"FunctionDef <strong>init</strong>(self, plugin_name)",id:"functiondef-initself-plugin_name",level:3},{value:"FunctionDef run(self)",id:"functiondef-runself",level:3}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"classdef-plugin",children:"ClassDef plugin"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"plugin"}),": The function of plugin is to define a basic structure for plugins in the system."]}),"\n",(0,t.jsxs)(n.p,{children:["*",(0,t.jsx)(n.em,{children:"attributes"}),":\n\xb7 plugin_name: (str) The name of the plugin."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Description"}),":\nThe ",(0,t.jsx)(n.code,{children:"plugin"})," class is a basic template for plugins in the system. It takes a ",(0,t.jsx)(n.code,{children:"plugin_name"})," as a parameter during initialization, which is a string representing the name of the plugin."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"run"})," method is defined in the class but is left empty to be implemented by the specific plugin classes. This method is intended to be used as a starting point for the plugin's functionality."]}),"\n",(0,t.jsxs)(n.p,{children:["From a functional perspective, the ",(0,t.jsx)(n.code,{children:"plugin"})," class serves as a base class for all plugins in the system. It provides a consistent interface for plugins, allowing them to be managed and executed in a unified manner."]}),"\n",(0,t.jsxs)(n.p,{children:["In the project, the ",(0,t.jsx)(n.code,{children:"plugin"})," class is used in the ",(0,t.jsx)(n.code,{children:"run"})," method of the ",(0,t.jsx)(n.code,{children:"plugin_manager"})," class. Specifically, it is used to create instances of the ",(0,t.jsx)(n.code,{children:"adp"})," and ",(0,t.jsx)(n.code,{children:"roles"})," plugins, which are then executed by calling their ",(0,t.jsx)(n.code,{children:"run"})," methods."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"run"})," method in the ",(0,t.jsx)(n.code,{children:"plugin"})," class is empty and should be implemented by the specific plugin classes."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"plugin"})," class is intended to be used as a base class for all plugins in the system, providing a consistent interface for plugin management and execution."]}),"\n",(0,t.jsxs)(n.li,{children:["When creating a new plugin, it is recommended to inherit from the ",(0,t.jsx)(n.code,{children:"plugin"})," class and implement the ",(0,t.jsx)(n.code,{children:"run"})," method to provide the plugin's functionality."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"functiondef-initself-plugin_name",children:["FunctionDef ",(0,t.jsx)(n.strong,{children:"init"}),"(self, plugin_name)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.strong,{children:"init"})}),": The function of ",(0,t.jsx)(n.strong,{children:"init"})," is to initialize the plugin object with a given plugin name."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"parameters"}),":\n\xb7 plugin_name: (required) A string that represents the name of the plugin."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Description"}),":\nThe ",(0,t.jsx)(n.strong,{children:"init"})," function is a special method in python classes, called when an object is initialized. In this case, it is used to set up the plugin object by storing the provided plugin_name as an attribute of the object. This allows for easy access and manipulation of the plugin name throughout the lifetime of the object."]}),"\n",(0,t.jsx)(n.p,{children:"Here's a step-by-step breakdown of the code:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"def __init__(self, plugin_name):"})," - This line defines the special ",(0,t.jsx)(n.strong,{children:"init"})," method, which takes two parameters: the instance of the class (",(0,t.jsx)(n.code,{children:"self"}),") and the plugin_name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"self.plugin_name = plugin_name"})," - This line assigns the plugin_name parameter to the plugin_name attribute of the instance (",(0,t.jsx)(n.code,{children:"self"}),"). This creates a new attribute for the instance, allowing you to access and manage the plugin name easily."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The plugin_name parameter must be a string, as it is stored as an attribute of the object without any further type checking or conversion."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"init"})," function is only called when the object is first created. If you need to change the plugin name later, you will have to implement a separate method for that purpose."]}),"\n",(0,t.jsxs)(n.li,{children:["The name of the plugin attribute is case-sensitive and must be accessed using the exact name ",(0,t.jsx)(n.code,{children:"plugin_name"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"functiondef-runself",children:"FunctionDef run(self)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"run"}),": The function of run is to initialize and start the plugin."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Description"}),":\nThe ",(0,t.jsx)(n.code,{children:"run"})," function is a method of the plugin class, which is defined in the plugin.py file. This function does not contain any code implementation, as indicated by the pass statement. Its purpose is to serve as a starting point for the plugin to perform its intended tasks. When this function is called, it will simply pass and move on to the next line of code following the function call."]}),"\n",(0,t.jsx)(n.p,{children:"However, in a typical implementation, this function would contain the necessary code to initialize and start the plugin. This could include setting up connections to external systems, loading configuration files, or performing any other tasks required to get the plugin up and running."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It is important to note that the ",(0,t.jsx)(n.code,{children:"run"})," function is the entry point for the plugin and should contain all the necessary code to initialize and start the plugin."]}),"\n",(0,t.jsx)(n.li,{children:"Developers should ensure that all required tasks are performed within this function to ensure that the plugin operates as intended."}),"\n",(0,t.jsx)(n.li,{children:"Any exceptions or errors that occur during the execution of this function should be handled appropriately to prevent the plugin from crashing or behaving unexpectedly."}),"\n",(0,t.jsxs)(n.li,{children:["Developers should also ensure that the ",(0,t.jsx)(n.code,{children:"run"})," function is called after the plugin object is created to ensure that the plugin is initialized and started correctly."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(6540);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);