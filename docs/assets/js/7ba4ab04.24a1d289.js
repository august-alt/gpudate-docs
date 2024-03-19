"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[1214],{5834:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=s(4848),i=s(8453);const o={},r=void 0,a={id:"gpoa/frontend/systemd_applier",title:"systemd_applier",description:"ClassDef systemd_applier",source:"@site/docs/gpoa/frontend/systemd_applier.md",sourceDirName:"gpoa/frontend",slug:"/gpoa/frontend/systemd_applier",permalink:"/docs/gpoa/frontend/systemd_applier",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"shortcut_applier",permalink:"/docs/gpoa/frontend/shortcut_applier"},next:{title:"yandex_browser_applier",permalink:"/docs/gpoa/frontend/yandex_browser_applier"}},d={},l=[{value:"ClassDef systemd_applier",id:"classdef-systemd_applier",level:2},{value:"FunctionDef <strong>init</strong>(self, storage)",id:"functiondef-initself-storage",level:3},{value:"FunctionDef run(self)",id:"functiondef-runself",level:3},{value:"FunctionDef apply(self)",id:"functiondef-applyself",level:3},{value:"ClassDef systemd_applier_user",id:"classdef-systemd_applier_user",level:2},{value:"FunctionDef <strong>init</strong>(self, storage, sid, username)",id:"functiondef-initself-storage-sid-username",level:3},{value:"FunctionDef user_context_apply(self)",id:"functiondef-user_context_applyself",level:3},{value:"FunctionDef admin_context_apply(self)",id:"functiondef-admin_context_applyself",level:3}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"classdef-systemd_applier",children:"ClassDef systemd_applier"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"systemd_applier"}),": The function of systemd_applier is to serve as a frontend module for applying Systemd units policies in the gpoa project."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"attributes"}),":\n\xb7 storage: An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms.\n\xb7 systemd_unit_settings: A list of systemd unit settings fetched from the Windows Registry.\n\xb7 units: A list of systemd_unit objects, each representing a systemd unit configuration."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe systemd_applier class is a subclass of applier_frontend, which is the base class for all frontend modules that apply policies in the gpoa project. It contains methods that are intended to be overridden by subclasses to provide the actual policy application logic for Systemd units."]}),"\n",(0,n.jsx)(t.p,{children:"The __init__() method initializes the storage attribute, fetches the systemd unit settings from the Windows Registry, and sets the __module_enabled__ attribute based on the result of a call to check_enabled(). The check_enabled() method checks whether the current module is enabled in the gpoa configuration, and returns True if it is, and False otherwise."}),"\n",(0,n.jsx)(t.p,{children:"The run() method creates a list of systemd_unit objects based on the fetched systemd unit settings, and applies each unit configuration. It logs any exceptions encountered during the creation or application of the systemd unit objects."}),"\n",(0,n.jsx)(t.p,{children:"The apply() method triggers the control facility invocation by calling the run() method if the current module is enabled. Otherwise, it logs a message indicating that the module is not enabled."}),"\n",(0,n.jsx)(t.p,{children:"The systemd_applier class is intended to be used as a part of the gpoa frontend modules that apply policies. It is created and initialized in the _init_machine_appliers() method of the frontend_manager class, which initializes all machine appliers, including the systemd_applier."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nThe systemd_applier class is intended to be used as a part of the gpoa frontend modules that apply policies. Subclasses should not override the __init__() method, but may override the run() method to provide additional logic for applying systemd unit policies. Subclasses should also ensure that the __module_name__, __module_experimental__, and __module_enabled__ attributes are set appropriately."]}),"\n",(0,n.jsxs)(t.h3,{id:"functiondef-initself-storage",children:["FunctionDef ",(0,n.jsx)(t.strong,{children:"init"}),"(self, storage)"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.strong,{children:"init"})}),": The function of ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.strong,{children:"init"})})," is to initialize the systemd applier object with a storage object."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 storage: The storage object that contains the information about the systemd units and their settings."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-runself",children:"FunctionDef run(self)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"run"}),": The function of run is to apply systemd unit settings in a list of ",(0,n.jsx)(t.code,{children:"systemd_unit_settings"})," by creating ",(0,n.jsx)(t.code,{children:"systemd_unit"})," objects and calling their ",(0,n.jsx)(t.code,{children:"apply"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 ",(0,n.jsx)(t.code,{children:"self"}),": The systemd_applier object that calls this method."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(t.code,{children:"run"})," method first iterates over the ",(0,n.jsx)(t.code,{children:"systemd_unit_settings"})," list and creates a ",(0,n.jsx)(t.code,{children:"systemd_unit"})," object for each setting. It extracts the unit name from the setting's ",(0,n.jsx)(t.code,{children:"hive_key"})," attribute and converts it to a string. It then creates the ",(0,n.jsx)(t.code,{children:"systemd_unit"})," object with the unit name and the integer value of the ",(0,n.jsx)(t.code,{children:"data"})," attribute."]}),"\n",(0,n.jsxs)(t.p,{children:["If the creation of the ",(0,n.jsx)(t.code,{children:"systemd_unit"})," object is successful, the method logs an informational message with the unit name. If there is an exception during the creation of the ",(0,n.jsx)(t.code,{children:"systemd_unit"})," object, the method logs an error message with the unit name and the exception."]}),"\n",(0,n.jsxs)(t.p,{children:["After creating all the ",(0,n.jsx)(t.code,{children:"systemd_unit"})," objects, the method iterates over the ",(0,n.jsx)(t.code,{children:"units"})," list and calls the ",(0,n.jsx)(t.code,{children:"apply"})," method of each ",(0,n.jsx)(t.code,{children:"systemd_unit"})," object. If there is an exception during the ",(0,n.jsx)(t.code,{children:"apply"})," method, the method logs an error message with the unit name."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"run"})," method is called by the ",(0,n.jsx)(t.code,{children:"apply"})," method of the ",(0,n.jsx)(t.code,{children:"systemd_applier"})," class in the ",(0,n.jsx)(t.code,{children:"gpoa/frontend/systemd_applier.py/systemd_applier"})," module. The ",(0,n.jsx)(t.code,{children:"apply"})," method checks if the module is enabled and then calls the ",(0,n.jsx)(t.code,{children:"run"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"run"})," method uses the ",(0,n.jsx)(t.code,{children:"systemd_unit"})," class from the ",(0,n.jsx)(t.code,{children:"gpoa/frontend/appliers/systemd.py/systemd_unit"})," module to manage systemd units. The ",(0,n.jsx)(t.code,{children:"systemd_unit"})," class enables the manipulation of the systemd units' state, such as enabling, disabling, starting, or stopping them."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"run"})," method assumes that the ",(0,n.jsx)(t.code,{children:"systemd_unit_settings"})," list contains valid systemd unit settings. If the list contains invalid settings, the method may not work as expected."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"run"})," method logs an error message if there is an exception during the creation of the ",(0,n.jsx)(t.code,{children:"systemd_unit"})," object or the ",(0,n.jsx)(t.code,{children:"apply"})," method. However, it does not raise an exception or return an error code."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"run"})," method is called by the ",(0,n.jsx)(t.code,{children:"apply"})," method of the ",(0,n.jsx)(t.code,{children:"systemd_applier"})," class in the ",(0,n.jsx)(t.code,{children:"gpoa/frontend/systemd_applier.py/systemd_applier"})," module. The ",(0,n.jsx)(t.code,{children:"apply"})," method checks if the module is enabled and then calls the ",(0,n.jsx)(t.code,{children:"run"})," method."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"run"})," method uses the ",(0,n.jsx)(t.code,{children:"systemd_unit"})," class from the ",(0,n.jsx)(t.code,{children:"gpoa/frontend/appliers/systemd.py/systemd_unit"})," module to manage systemd units. The ",(0,n.jsx)(t.code,{children:"systemd_unit"})," class enables the manipulation of the systemd units' state, such as enabling, disabling, starting, or stopping them."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-applyself",children:"FunctionDef apply(self)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"apply"}),": The function of apply is to trigger control facility invocation."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 ",(0,n.jsx)(t.code,{children:"self"}),": The systemd_applier object that calls this method."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"classdef-systemd_applier_user",children:"ClassDef systemd_applier_user"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"systemd_applier_user"}),": The function of systemd_applier_user is to serve as a subclass of applier_frontend and provide the logic for applying Systemd unit policies in the gpoa project."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"attributes"}),":\n\xb7 storage: An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms.\n\xb7 sid: The security identifier (SID) of the user or machine for which policies are being applied.\n\xb7 username: The username for which policies are being applied, if applicable."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe systemd_applier_user class is a subclass of applier_frontend and is used to apply Systemd unit policies in the gpoa project. It overrides the __init__() method to initialize the storage and sid attributes, and sets the __module_enabled__ attribute based on the result of a call to check_enabled()."]}),"\n",(0,n.jsx)(t.p,{children:"The user_context_apply() and admin_context_apply() methods are intended to provide the logic for applying Systemd unit policies in the user and admin contexts, respectively. These methods are called by the gpoa application depending on the context in which policies are being applied."}),"\n",(0,n.jsx)(t.p,{children:"The run() method is intended to provide the actual Systemd unit policy application logic. It is called by the apply() method, which checks whether the current module is enabled before calling run()."}),"\n",(0,n.jsx)(t.p,{children:"The __module_name__, __module_experimental__, and __module_enabled__ attributes are used by the gpoa application to determine whether the current module should be loaded and applied."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nThe systemd_applier_user class is intended to be used as a subclass of applier_frontend to provide the logic for applying Systemd unit policies in the gpoa project. Subclasses should override the user_context_apply() and admin_context_apply() methods to provide the logic for applying Systemd unit policies in the user and admin contexts, respectively, and should override the run() method to provide the actual Systemd unit policy application logic. Subclasses should also set the __module_name__, __module_experimental__, and __module_enabled__ attributes appropriately."]}),"\n",(0,n.jsx)(t.p,{children:"It is important to note that the gpoa project is designed to work with Windows operating systems, which do not natively support Systemd. Therefore, the systemd_applier_user class is intended to be used in conjunction with a compatibility layer or other mechanism for running Systemd units on Windows."}),"\n",(0,n.jsxs)(t.h3,{id:"functiondef-initself-storage-sid-username",children:["FunctionDef ",(0,n.jsx)(t.strong,{children:"init"}),"(self, storage, sid, username)"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.strong,{children:"init"})}),": The function of ",(0,n.jsx)(t.strong,{children:"init"})," is to initialize the systemd_applier_user object with the provided parameters."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 storage: An object that provides an interface to interact with the underlying storage system where the user data will be stored.\n\xb7 sid: A unique identifier for the user in the system.\n\xb7 username: The username that will be used to identify the user in the system."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(t.strong,{children:"init"})," function takes three parameters: storage, sid, and username. The storage parameter is an object that provides an interface to interact with the underlying storage system where the user data will be stored. The sid parameter is a unique identifier for the user in the system, and the username parameter is the username that will be used to identify the user in the system."]}),"\n",(0,n.jsx)(t.p,{children:"Inside the function, the first thing that happens is the self parameter, which is a reference to the current instance of the object, is assigned the storage, sid, and username parameters. This allows the object to have access to these parameters throughout its lifetime."}),"\n",(0,n.jsx)(t.p,{children:"The storage parameter is assigned to the self.storage attribute, which allows the object to interact with the underlying storage system where the user data will be stored."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nIt is important to note that the storage parameter should be an object that provides an interface to interact with the underlying storage system where the user data will be stored. Failing to provide a valid storage object will result in the object not being able to store user data."]}),"\n",(0,n.jsx)(t.p,{children:"Additionally, the sid and username parameters should be unique and valid for the system. Providing an invalid or non-unique sid or username will result in unexpected behavior in the system."}),"\n",(0,n.jsx)(t.p,{children:"It is also important to note that this is a constructor method, it will be called automatically when the object is created, and it is used to initialize the object with the necessary parameters."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-user_context_applyself",children:"FunctionDef user_context_apply(self)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"user_context_apply"}),": The function of user_context_apply is to apply user context."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),':\nThe user_context_apply function is a method of the systemd_applier_user class, which is defined in the systemd_applier.py module. This function does not contain any code implementation, as indicated by the "pass" statement. It is likely that this function is intended to serve as a placeholder for future implementation.']}),"\n",(0,n.jsx)(t.p,{children:"When called, the function does not perform any action, and it does not return any value. Its purpose is to provide a way to apply user context within the systemd_applier_user class."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This function currently does not perform any action, and it should be implemented according to the project's requirements."}),"\n",(0,n.jsx)(t.li,{children:"Developers should ensure that the implementation of this function aligns with the overall design and purpose of the systemd_applier_user class."}),"\n",(0,n.jsx)(t.li,{children:"Proper error handling and testing should be done to ensure that the function works as expected."}),"\n",(0,n.jsx)(t.li,{children:"Documentation should be updated to reflect the actual implementation and functionality of the user_context_apply function."}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-admin_context_applyself",children:"FunctionDef admin_context_apply(self)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"admin_context_apply"}),": The function of admin_context_apply is to apply the admin context."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":"]}),"\n",(0,n.jsx)(t.p,{children:"The admin_context_apply function is a method of a class, as indicated by the self parameter. However, since the function body is empty (pass), it currently does not perform any actions related to applying an admin context. In general, this function would be used to set up the necessary administrative permissions or environment for other operations within the class to execute successfully."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"This function is a placeholder and should be implemented according to the project's requirements."}),"\n",(0,n.jsx)(t.li,{children:"Ensure that the implementation of this function adheres to the project's security policies and practices to prevent unauthorized access or actions."}),"\n",(0,n.jsx)(t.li,{children:"Proper error handling and logging should be included in the function to assist with troubleshooting and debugging."}),"\n",(0,n.jsx)(t.li,{children:"Consider documenting the specific admin context and the purpose of applying it in the function's docstring or separate documentation."}),"\n"]}),"\n",(0,n.jsx)(t.hr,{})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);