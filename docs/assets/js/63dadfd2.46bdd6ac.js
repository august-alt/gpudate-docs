"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[1011],{5951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=n(4848),o=n(8453);const s={},r=void 0,l={id:"gpoa/gpt/polfile",title:"polfile",description:"FunctionDef read_polfile(filename)",source:"@site/docs/gpoa/gpt/polfile.md",sourceDirName:"gpoa/gpt",slug:"/gpoa/gpt/polfile",permalink:"/gpupdate-docs/docs/gpoa/gpt/polfile",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"networkshares",permalink:"/gpupdate-docs/docs/gpoa/gpt/networkshares"},next:{title:"printers",permalink:"/gpupdate-docs/docs/gpoa/gpt/printers"}},c={},a=[{value:"FunctionDef read_polfile(filename)",id:"functiondef-read_polfilefilename",level:2},{value:"FunctionDef merge_polfile(storage, sid, policy_objects, policy_name)",id:"functiondef-merge_polfilestorage-sid-policy_objects-policy_name",level:2}];function p(e){const t={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"functiondef-read_polfilefilename",children:"FunctionDef read_polfile(filename)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"read_polfile"}),": The function of read_polfile is to load and return the entries of a policy file (with .xml or other extensions) specified by the filename parameter."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"parameters"}),":"]}),"\n",(0,i.jsx)(t.p,{children:"\xb7 filename (string): The path to the policy file that needs to be loaded."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),":"]}),"\n",(0,i.jsx)(t.p,{children:"The function begins by calling the load_preg function, passing in the filename parameter. The load_preg function checks the file extension of the provided filename. If the file extension is .xml, it calls the load_xml_preg function and returns the preg object. If the file extension is not .xml, it calls the load_pol_preg function and returns the pol object."}),"\n",(0,i.jsx)(t.p,{children:"In this case, the load_preg function returns the pol object, which is an instance of the GPPolParser class. The read_polfile function then calls the preg2entries() function on the pol object, converting the parsed PReg file into a list of entry objects. The resulting list of entry objects is returned by the read_polfile function."}),"\n",(0,i.jsx)(t.p,{children:"The read_polfile function is called by the pref_parsers function in the gpoa/gpt/gpt.py module. The pref_parsers function creates a dictionary of file types and their corresponding parser functions. The read_polfile function is assigned as the parser function for the FileType.PREG file type. This dictionary is used to parse different types of files in the system."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The function assumes that the provided filename is a valid path to a policy file."}),"\n",(0,i.jsx)(t.li,{children:"The function returns a list of entry objects, which can be used for further processing."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,i.jsx)(t.p,{children:"The output of the read_polfile function is a list of entry objects, which can be used for further processing. Here is an example output of the read_polfile function:"}),"\n",(0,i.jsx)(t.p,{children:"[\nentry('entry1', 'value1', 'type1', 'data1'),\nentry('entry2', 'value2', 'type2', 'data2'),\n...\n]"}),"\n",(0,i.jsx)(t.h2,{id:"functiondef-merge_polfilestorage-sid-policy_objects-policy_name",children:"FunctionDef merge_polfile(storage, sid, policy_objects, policy_name)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"merge_polfile"}),": The function of merge_polfile is to merge policy objects into the specified storage with the given policy name and user sid."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"parameters"}),":\n\xb7 storage: An object that has methods to add HKLM or HKCU entries.\n\xb7 sid: A string representing the user's security identifier. If it is empty, HKLM (Local Machine) will be used, otherwise HKCU (Current User) will be used.\n\xb7 policy_objects: A list of policy objects to be merged.\n\xb7 policy_name: A string representing the name of the policy."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),":\nThe function iterates through the given policy_objects and checks the sid parameter. If sid is empty, it calls the add_hklm_entry method of the storage object, otherwise, it calls the add_hkcu_entry method of the storage object. This way, it merges the policy objects into the specified storage with the given policy name and user sid."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),":\nThis function is used in the pref_mergers function of gpoa/gpt/gpt.py, which is a dictionary that maps file types to merger functions. The merge_polfile function is assigned to FileType.PREG. When the pref_mergers function is called, it returns the mergers dictionary, which is then used to merge different types of files. Therefore, the merge_polfile function plays a crucial role in the merging process of the specified files in the project."]}),"\n",(0,i.jsx)(t.p,{children:"It is important to ensure that the storage object has the correct methods (add_hklm_entry and add_hkcu_entry) and that the policy_objects and policy_name parameters are of the correct type and format."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(6540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);