"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[1905],{7681:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=n(4848),r=n(8453);const i={},o=void 0,c={id:"gpoa/util/users",title:"users",description:"FunctionDef is_root",source:"@site/docs/gpoa/util/users.md",sourceDirName:"gpoa/util",slug:"/gpoa/util/users",permalink:"/docs/gpoa/util/users",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"system",permalink:"/docs/gpoa/util/system"},next:{title:"windows",permalink:"/docs/gpoa/util/windows"}},h={},u=[{value:"FunctionDef is_root",id:"functiondef-is_root",level:2},{value:"FunctionDef get_process_user",id:"functiondef-get_process_user",level:2},{value:"FunctionDef username_match_uid(username)",id:"functiondef-username_match_uidusername",level:2}];function a(e){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"functiondef-is_root",children:"FunctionDef is_root"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"is_root"}),": The function of is_root is to check if the current process has root permissions."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),": The is_root function is a simple function that checks the user id of the current process. If the user id is 0, it means the current process has root permissions, and the function returns True. Otherwise, it returns False. This function is implemented using the os.getuid() function, which returns the user id of the current process."]}),"\n",(0,t.jsx)(s.p,{children:"The is_root function is used in various parts of the project to check if the current process has root permissions before performing certain operations. For example, in the frontend_manager.py file, the machine_apply function checks if the current process has root permissions before running global appliers. Similarly, the user_apply function checks if the current process has root permissions before running appliers for users."}),"\n",(0,t.jsx)(s.p,{children:"In the dbus.py file, the run function checks if the current process has root permissions before calling the gpupdatefor method on the system bus. If the current process does not have root permissions, it calls the gpupdate method instead."}),"\n",(0,t.jsx)(s.p,{children:'In the is_root function, there is a comment that says "oddjobd-gpupdate\'s ACL allows access to this method only for superuser." This means that the gpupdatefor method can only be called by a process with root permissions.'}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),": It is important to note that the is_root function should only be used to check if the current process has root permissions before performing certain operations. It should not be used to grant root permissions to a process."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Output Example"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:">>> is_root()\nFalse\n"})}),"\n",(0,t.jsx)(s.p,{children:"In this example, the is_root function returns False, indicating that the current process does not have root permissions."}),"\n",(0,t.jsx)(s.h2,{id:"functiondef-get_process_user",children:"FunctionDef get_process_user"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"get_process_user"}),": The function of get_process_user is to obtain the username of the current process."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":\nThe function first initializes a variable ",(0,t.jsx)(s.code,{children:"username"})," with a value of ",(0,t.jsx)(s.code,{children:"None"}),". It then retrieves the user ID (UID) of the current process using the ",(0,t.jsx)(s.code,{children:"os.getuid()"})," function and uses this UID to get the username by calling ",(0,t.jsx)(s.code,{children:"pwd.getpwuid(uid).pw_name"}),". This username is then assigned to the ",(0,t.jsx)(s.code,{children:"username"})," variable. Finally, the function returns the ",(0,t.jsx)(s.code,{children:"username"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["This function is used in various parts of the project to determine the username of the current process. It is used in the ",(0,t.jsx)(s.code,{children:"determine_username"})," function to check if the specified username is valid or to use the process owner's name if no username is specified. It is also used in the ",(0,t.jsx)(s.code,{children:"__init__"})," method of the ",(0,t.jsx)(s.code,{children:"frontend_manager"})," class to initialize the ",(0,t.jsx)(s.code,{children:"username"})," attribute of the class."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"This function does not take any parameters, so it always returns the username of the current process."}),"\n",(0,t.jsxs)(s.li,{children:["The function assumes that the ",(0,t.jsx)(s.code,{children:"pwd"})," module has been imported before it is called."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Output Example"}),":"]}),"\n",(0,t.jsxs)(s.p,{children:["When called in a process owned by the user ",(0,t.jsx)(s.code,{children:"john"}),", the function will return ",(0,t.jsx)(s.code,{children:"'john'"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"functiondef-username_match_uidusername",children:"FunctionDef username_match_uid(username)"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"username_match_uid"}),": The function of username_match_uid is to check if the passed username matches the user ID (UID) of the current process."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"parameters"}),":\n\xb7 username (str): The username to be checked."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":\nThe function first retrieves the UID of the current process using the ",(0,t.jsx)(s.code,{children:"os.getuid()"})," function. Then, it calls the ",(0,t.jsx)(s.code,{children:"get_process_user()"})," function to obtain the username associated with the UID. If the passed username matches the obtained username, the function returns ",(0,t.jsx)(s.code,{children:"True"}),", indicating a match. Otherwise, it returns ",(0,t.jsx)(s.code,{children:"False"}),", indicating no match."]}),"\n",(0,t.jsxs)(s.p,{children:["This function is used in various parts of the project to ensure that the specified username matches the current process's UID. It is used in the ",(0,t.jsx)(s.code,{children:"determine_username"})," function to check if the specified username is valid or to use the process owner's name if no username is specified."]}),"\n",(0,t.jsxs)(s.p,{children:["The function relies on the ",(0,t.jsx)(s.code,{children:"get_process_user()"})," function to obtain the username associated with the UID of the current process. It assumes that the ",(0,t.jsx)(s.code,{children:"pwd"})," module has been imported before it is called."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The function is case-sensitive, so it differentiates between uppercase and lowercase characters in the passed username."}),"\n",(0,t.jsxs)(s.li,{children:["If the ",(0,t.jsx)(s.code,{children:"get_process_user()"})," function fails to obtain the username associated with the UID, the function may not work as expected."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Output Example"}),":"]}),"\n",(0,t.jsxs)(s.p,{children:["If the current process is owned by the user ",(0,t.jsx)(s.code,{children:"john"}),", and the function is called with the argument ",(0,t.jsx)(s.code,{children:"'john'"}),", it will return ",(0,t.jsx)(s.code,{children:"True"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Raw code:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"def username_match_uid(username):\n    '''\n    Check the passed username matches current process UID.\n    '''\n    uid = os.getuid()\n    process_username = get_process_user()\n\n    if process_username == username:\n        return True\n\n    return False\n"})})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var t=n(6540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);