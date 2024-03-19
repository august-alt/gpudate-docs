"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[5602],{7561:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=i(4848),s=i(8453);const o={},l=void 0,r={id:"gpoa/frontend/appliers/polkit",title:"polkit",description:"ClassDef polkit",source:"@site/docs/gpoa/frontend/appliers/polkit.md",sourceDirName:"gpoa/frontend/appliers",slug:"/gpoa/frontend/appliers/polkit",permalink:"/gpupdate-docs/docs/gpoa/frontend/appliers/polkit",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"netshare",permalink:"/gpupdate-docs/docs/gpoa/frontend/appliers/netshare"},next:{title:"systemd",permalink:"/gpupdate-docs/docs/gpoa/frontend/appliers/systemd"}},c={},d=[{value:"ClassDef polkit",id:"classdef-polkit",level:2},{value:"FunctionDef <strong>init</strong>(self, template_name, arglist, username)",id:"functiondef-initself-template_name-arglist-username",level:3},{value:"FunctionDef _is_empty(self)",id:"functiondef-_is_emptyself",level:3},{value:"FunctionDef generate(self)",id:"functiondef-generateself",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"classdef-polkit",children:"ClassDef polkit"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"polkit"}),": The function of polkit is to generate Polkit rules files based on provided templates and arguments."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"attributes"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"template_name"}),": The name of the template file to be used for generating the Polkit rules file."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"arglist"}),": A dictionary of arguments that will be passed to the Jinja2 template engine for rendering the template."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"username"}),": An optional parameter used to specify the username for the generated Polkit rules file. If not provided, the rules file will not be user-specific."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(t.code,{children:"polkit"})," class initializes several attributes, including the template path, policy directory, and a Jinja2 template loader and environment. The ",(0,n.jsx)(t.code,{children:"__init__"})," method sets the class properties based on the provided ",(0,n.jsx)(t.code,{children:"template_name"}),", ",(0,n.jsx)(t.code,{children:"arglist"}),", and ",(0,n.jsx)(t.code,{children:"username"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"_is_empty"})," method checks if the ",(0,n.jsx)(t.code,{children:"arglist"})," is empty or not. If it is empty, the method returns ",(0,n.jsx)(t.code,{children:"True"}),", otherwise ",(0,n.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"generate"})," method checks if the ",(0,n.jsx)(t.code,{children:"arglist"})," is empty. If it is, the method checks if the output file already exists and removes it if it does. If the ",(0,n.jsx)(t.code,{children:"arglist"})," is not empty, the method loads the template using the Jinja2 environment, renders the template with the provided arguments, and writes the output to the specified file. The method also logs data about the generated file and arguments."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Relationship with Callers"}),":\nThe ",(0,n.jsx)(t.code,{children:"polkit"})," class is used by the ",(0,n.jsx)(t.code,{children:"polkit_applier"})," class to generate Polkit rules files based on the contents of a registry storage. The ",(0,n.jsx)(t.code,{children:"polkit_applier"})," class creates instances of the ",(0,n.jsx)(t.code,{children:"polkit"})," class for each template and set of arguments it needs to process."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"username"})," parameter is optional and can be omitted if the Polkit rules file should not be user-specific."]}),"\n",(0,n.jsxs)(t.li,{children:["If the ",(0,n.jsx)(t.code,{children:"arglist"})," is empty, the generated Polkit rules file will be empty as well."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"polkit_instance = polkit('template_name', {'key': 'value'})\npolkit_instance.generate()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will generate a Polkit rules file based on the ",(0,n.jsx)(t.code,{children:"template_name"})," and the provided ",(0,n.jsx)(t.code,{children:"arglist"}),". The output file will be located in ",(0,n.jsx)(t.code,{children:"/etc/polkit-1/rules.d/"})," and will be named ",(0,n.jsx)(t.code,{children:"template_name.rules"})," or ",(0,n.jsx)(t.code,{children:"template_name.username.rules"})," if a ",(0,n.jsx)(t.code,{children:"username"})," was provided."]}),"\n",(0,n.jsxs)(t.h3,{id:"functiondef-initself-template_name-arglist-username",children:["FunctionDef ",(0,n.jsx)(t.strong,{children:"init"}),"(self, template_name, arglist, username)"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.strong,{children:"init"})}),": The function of ",(0,n.jsx)(t.strong,{children:"init"})," is to initialize the polkit object with the given parameters."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 template_name: A string representing the name of the template to be used.\n\xb7 arglist: A list of arguments to be passed to the template.\n\xb7 username: An optional string representing the username for which the policy is being created."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe __init__ function initializes the polkit object by setting the template_name, arglist, and username attributes. The template_name attribute is set to the value of the template_name parameter. The arglist attribute is set to the value of the arglist parameter. The username attribute is set to the value of the username parameter if it is provided, otherwise it is set to None."]}),"\n",(0,n.jsx)(t.p,{children:"The infilename attribute is then set to a string that is the concatenation of the template_name attribute and the string '.rules.j2'. This attribute represents the name of the template file that will be used to generate the policy."}),"\n",(0,n.jsx)(t.p,{children:"The outfile attribute is set based on the value of the username attribute. If the username attribute is not None, the outfile attribute is set to the path of the output file that will contain the generated policy for the specified username. Otherwise, the outfile attribute is set to the path of the output file that will contain the generated policy for all users."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nThe __policy_dir attribute is not defined in this __init__ function. It should be defined in the parent class or set as a class variable. If it is not defined, the __init__ function will raise a NameError."]}),"\n",(0,n.jsx)(t.p,{children:"The arglist parameter should be a list of arguments that can be passed to the template. The contents of this list will depend on the specific template being used."}),"\n",(0,n.jsx)(t.p,{children:"The username parameter is optional and can be omitted if the policy is being created for all users. If the username parameter is provided, the generated policy will only apply to the specified user."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-_is_emptyself",children:"FunctionDef _is_empty(self)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"_is_empty"})}),": The function of ",(0,n.jsx)(t.code,{children:"_is_empty"})," is to check if the ",(0,n.jsx)(t.code,{children:"args"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object is empty or not, excluding the key 'User'."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":"]}),"\n",(0,n.jsxs)(t.p,{children:["\xb7 ",(0,n.jsx)(t.code,{children:"self"}),": The instance of the ",(0,n.jsx)(t.code,{children:"polkit"})," class."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-generateself",children:"FunctionDef generate(self)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"generate"}),": The function of generate is to render and write a policy template to a file if the ",(0,n.jsx)(t.code,{children:"args"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object is not empty."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":"]}),"\n",(0,n.jsxs)(t.p,{children:["\xb7 ",(0,n.jsx)(t.code,{children:"self"}),": The instance of the ",(0,n.jsx)(t.code,{children:"polkit"})," class."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"generate"})," function first checks if the ",(0,n.jsx)(t.code,{children:"args"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object is empty or not, excluding the key 'User' by calling the ",(0,n.jsx)(t.code,{children:"_is_empty"})," function. If it is empty, the function returns without doing anything."]}),"\n",(0,n.jsxs)(t.p,{children:["If the ",(0,n.jsx)(t.code,{children:"args"})," attribute is not empty, the function gets a template using the ",(0,n.jsx)(t.code,{children:"get_template"})," method of the ",(0,n.jsx)(t.code,{children:"TemplateEnvironment"})," object with the ",(0,n.jsx)(t.code,{children:"infilename"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object as the template file name. Then, the function renders the template using the ",(0,n.jsx)(t.code,{children:"render"})," method of the ",(0,n.jsx)(t.code,{children:"Template"})," object with the ",(0,n.jsx)(t.code,{children:"args"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object as the rendering context."]}),"\n",(0,n.jsxs)(t.p,{children:["After that, the function opens the ",(0,n.jsx)(t.code,{children:"outfile"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object in write mode and writes the rendered template to the file."]}),"\n",(0,n.jsxs)(t.p,{children:["Finally, the function creates a dictionary ",(0,n.jsx)(t.code,{children:"logdata"})," containing the ",(0,n.jsx)(t.code,{children:"outfile"})," and ",(0,n.jsx)(t.code,{children:"args"})," attributes of the ",(0,n.jsx)(t.code,{children:"polkit"})," object and calls the ",(0,n.jsx)(t.code,{children:"log"})," function with the string ",(0,n.jsx)(t.code,{children:"'D77'"})," and the ",(0,n.jsx)(t.code,{children:"logdata"})," dictionary as arguments to log the successful generation of the policy file."]}),"\n",(0,n.jsxs)(t.p,{children:["If an exception occurs during the execution of the function, the function creates a dictionary ",(0,n.jsx)(t.code,{children:"logdata"})," containing the ",(0,n.jsx)(t.code,{children:"outfile"})," and ",(0,n.jsx)(t.code,{children:"args"})," attributes of the ",(0,n.jsx)(t.code,{children:"polkit"})," object and calls the ",(0,n.jsx)(t.code,{children:"log"})," function with the string ",(0,n.jsx)(t.code,{children:"'E44'"})," and the ",(0,n.jsx)(t.code,{children:"logdata"})," dictionary as arguments to log the failure of the policy file generation."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"generate"})," function is called by the ",(0,n.jsx)(t.code,{children:"apply"})," function of the ",(0,n.jsx)(t.code,{children:"polkit_applier"})," class and the ",(0,n.jsx)(t.code,{children:"admin_context_apply"})," function of the ",(0,n.jsx)(t.code,{children:"polkit_applier_user"})," class, which are responsible for triggering the control facility invocation."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"generate"})," function assumes that the ",(0,n.jsx)(t.code,{children:"infilename"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object is a valid template file name and the ",(0,n.jsx)(t.code,{children:"outfile"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object is a writable file path."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"generate"})," function does not check if the ",(0,n.jsx)(t.code,{children:"outfile"})," already exists before writing to it. If the ",(0,n.jsx)(t.code,{children:"outfile"})," already exists, it will be overwritten."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"generate"})," function logs the successful or failed generation of the policy file using the ",(0,n.jsx)(t.code,{children:"log"})," function."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,n.jsxs)(t.p,{children:["Assuming the ",(0,n.jsx)(t.code,{children:"args"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object is ",(0,n.jsx)(t.code,{children:"{'User': 'user1', 'Action': 'action1', 'Resource': 'resource1'}"})," and the ",(0,n.jsx)(t.code,{children:"infilename"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object is ",(0,n.jsx)(t.code,{children:"'policy.template'"})," and the ",(0,n.jsx)(t.code,{children:"outfile"})," attribute of the ",(0,n.jsx)(t.code,{children:"polkit"})," object is ",(0,n.jsx)(t.code,{children:"'/etc/polkit/policy.d/local.d/my_policy.conf'"}),", the ",(0,n.jsx)(t.code,{children:"generate"})," function will render the ",(0,n.jsx)(t.code,{children:"policy.template"})," file using the ",(0,n.jsx)(t.code,{children:"args"})," attribute as the rendering context and write the rendered template to ",(0,n.jsx)(t.code,{children:"/etc/polkit/policy.d/local.d/my_policy.conf"}),". The function will also log the successful generation of the policy file using the ",(0,n.jsx)(t.code,{children:"log"})," function."]}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>r});var n=i(6540);const s={},o=n.createContext(s);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);