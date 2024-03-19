"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[3767],{9256:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const r={},a=void 0,o={id:"gpoa/frontend/appliers/envvar",title:"envvar",description:"ClassDef Envvar",source:"@site/docs/gpoa/frontend/appliers/envvar.md",sourceDirName:"gpoa/frontend/appliers",slug:"/gpoa/frontend/appliers/envvar",permalink:"/gpupdate-docs/docs/gpoa/frontend/appliers/envvar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"control",permalink:"/gpupdate-docs/docs/gpoa/frontend/appliers/control"},next:{title:"file_cp",permalink:"/gpupdate-docs/docs/gpoa/frontend/appliers/file_cp"}},l={},d=[{value:"ClassDef Envvar",id:"classdef-envvar",level:2},{value:"FunctionDef <strong>init</strong>(self, envvars, username)",id:"functiondef-initself-envvars-username",level:3},{value:"FunctionDef _open_envvar_file(self)",id:"functiondef-_open_envvar_fileself",level:3},{value:"FunctionDef _create_action(self, create_dict, envvar_file)",id:"functiondef-_create_actionself-create_dict-envvar_file",level:3},{value:"FunctionDef _delete_action(self, delete_dict, envvar_file)",id:"functiondef-_delete_actionself-delete_dict-envvar_file",level:3},{value:"FunctionDef act(self)",id:"functiondef-actself",level:3}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"classdef-envvar",children:"ClassDef Envvar"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Envvar"}),": The function of Envvar is to manage and update environment variables for a user or root, by reading from and writing to a specified environment file."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"attributes"}),":\n\xb7 envvars: A list of environment variable objects, each containing a name, value, and action (create, delete, update, or replace).\n\xb7 username: A string representing the username of the user for whom environment variables are being managed. Defaults to an empty string.\n\xb7 envvar_file_path: A string representing the file path to the environment file for the specified user."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Description"}),":\nThe Envvar class has an initializer method that sets the username and envvars attributes, and determines the file path for the environment file based on the username. If the username is 'root', the file path is set to '/etc/gpupdate/environment'. Otherwise, the file path is set to the user's home directory followed by '.gpupdate_environment'."]}),"\n",(0,t.jsx)(n.p,{children:"The class also has three methods: _open_envvar_file, _create_action, and _delete_action. The _open_envvar_file method opens the environment file in read-write mode, creating it if it does not exist. The _create_action method creates new environment variables in the file if they do not already exist. The _delete_action method deletes environment variables from the file if they exist."}),"\n",(0,t.jsx)(n.p,{children:"The act method is the primary method of the class, and performs the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Reads the contents of the environment file into a list of strings."}),"\n",(0,t.jsx)(n.li,{children:"Iterates through each environment variable object in the envvars list."}),"\n",(0,t.jsx)(n.li,{children:"Determines the action to be taken based on the action attribute of the environment variable object."}),"\n",(0,t.jsx)(n.li,{children:"Updates the environment file accordingly, either by creating, deleting, or updating environment variables."}),"\n",(0,t.jsx)(n.li,{children:"Writes the updated list of strings back to the environment file."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The Envvar class is called by the apply method in the EnvvarApplier class and the user_context_apply method in the EnvvarApplierUser class. In both cases, an instance of the Envvar class is created, passing in the envvars list and the username. The act method is then called on the instance, updating the environment file as necessary."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Envvar class assumes that the environment file exists and is in the correct location. It does not handle errors that may occur if the file is missing or inaccessible."}),"\n",(0,t.jsx)(n.li,{children:"The Envvar class does not validate the input it receives. It is the responsibility of the calling code to ensure that the envvars list and username attribute are valid."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Output Example"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Assuming the following input:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"envvars = [\n    EnvvarObject('NAME1', 'value1', 'CREATE'),\n    EnvvarObject('NAME2', 'value2', 'UPDATE'),\n    EnvvarObject('NAME3', 'value3', 'DELETE'),\n]\nusername = 'user1'\n"})}),"\n",(0,t.jsx)(n.p,{children:"The Envvar class would update the environment file to contain the following lines:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'NAME1=value1\nNAME2="value2"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note that the second environment variable is surrounded by quotes, as it was updated from a different value. The third environment variable is not present in the file, as it was deleted."}),"\n",(0,t.jsxs)(n.h3,{id:"functiondef-initself-envvars-username",children:["FunctionDef ",(0,t.jsx)(n.strong,{children:"init"}),"(self, envvars, username)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.strong,{children:"init"})}),": The function of the ",(0,t.jsx)(n.strong,{children:"__init__"})," method in the Envvar class is to initialize the object's attributes with the provided parameters and set the path of the environment file based on the username."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"parameters"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["\xb7 ",(0,t.jsx)(n.strong,{children:"envvars"}),": A dictionary containing environment variables."]}),"\n",(0,t.jsxs)(n.p,{children:["\xb7 ",(0,t.jsx)(n.strong,{children:"username"})," (",(0,t.jsx)(n.em,{children:"str"}),", optional): The username for which to retrieve the home directory. The default value is an empty string."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"functiondef-_open_envvar_fileself",children:"FunctionDef _open_envvar_file(self)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"'_open_envvar_file"}),"': This function is responsible for opening the environment variable file specified by the ",(0,t.jsx)(n.code,{children:"envvar_file_path"})," attribute of the Envvar class."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"parameters"}),"\n\xb7 ",(0,t.jsx)(n.code,{children:"self"}),": The instance of the Envvar class. This is a conventional first parameter for instance methods in Python, which allows the method to access and manipulate the data and behavior of the class."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Code Description"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The function initializes a file descriptor ",(0,t.jsx)(n.code,{children:"fd"})," to ",(0,t.jsx)(n.code,{children:"None"}),". This variable will be used to store the file object that results from opening the environment variable file."]}),"\n",(0,t.jsxs)(n.li,{children:["It checks if the environment variable file exists using the ",(0,t.jsx)(n.code,{children:"isfile"})," function.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the file exists, the file is opened in read-write mode using ",(0,t.jsx)(n.code,{children:"open(self.envvar_file_path, 'r+')"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If the file does not exist, the function creates the file by opening it in write mode using ",(0,t.jsx)(n.code,{children:"open(self.envvar_file_path, 'w')"}),", then closes the file and reopens it in read-write mode using ",(0,t.jsx)(n.code,{children:"open(self.envvar_file_path, 'r+')"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The function returns the file object ",(0,t.jsx)(n.code,{children:"fd"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The function ensures that the environment variable file is opened in read-write mode, allowing the Envvar class to read and write to the file."}),"\n",(0,t.jsx)(n.li,{children:"If the environment variable file does not exist, the function creates the file before opening it."}),"\n",(0,t.jsx)(n.li,{children:"The function closes the file and reopens it in read-write mode to ensure that the file pointer is at the beginning of the file."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Output Example"}),"\nAssuming ",(0,t.jsx)(n.code,{children:"self.envvar_file_path"})," is set to ",(0,t.jsx)(n.code,{children:"'/path/to/envvar.txt'"}),", a possible return value of ",(0,t.jsx)(n.code,{children:"_open_envvar_file"})," is a file object representing the environment variable file ",(0,t.jsx)(n.code,{children:"'/path/to/envvar.txt'"}),". The file object has various attributes and methods that can be used to manipulate the file, such as ",(0,t.jsx)(n.code,{children:"fd.read()"})," to read the contents of the file, ",(0,t.jsx)(n.code,{children:"fd.write('new_env_var')"})," to write a new environment variable to the file, and ",(0,t.jsx)(n.code,{children:"fd.close()"})," to close the file."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"functiondef-_create_actionself-create_dict-envvar_file",children:"FunctionDef _create_action(self, create_dict, envvar_file)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"_create_action"}),": The function of ",(0,t.jsx)(n.code,{children:"_create_action"})," is to create and add new environment variables to a given file if they do not already exist."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"parameters"}),":\n\xb7 ",(0,t.jsx)(n.code,{children:"create_dict"}),": A dictionary containing the names and values of the environment variables to be created. The keys in this dictionary represent the names of the environment variables, and the values correspond to the values of these variables.\n\xb7 ",(0,t.jsx)(n.code,{children:"envvar_file"}),": A file object representing the environment variable file where the new variables will be added."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Description"}),":\nThe function begins by reading all the lines from the ",(0,t.jsx)(n.code,{children:"envvar_file"})," using the ",(0,t.jsx)(n.code,{children:"readlines()"})," method and storing them in the ",(0,t.jsx)(n.code,{children:"lines_old"})," list (line 2). It then initializes an empty list called ",(0,t.jsx)(n.code,{children:"lines_new"})," (line 3) to store the new lines containing the environment variables that need to be added."]}),"\n",(0,t.jsxs)(n.p,{children:["For each name in the ",(0,t.jsx)(n.code,{children:"create_dict"}),", the function checks if the name already exists in the ",(0,t.jsx)(n.code,{children:"lines_old"})," list (lines 5-9). If the environment variable is found, the ",(0,t.jsx)(n.code,{children:"exist"})," variable is set to ",(0,t.jsx)(n.code,{children:"True"}),", and the function breaks out of the inner loop. If the environment variable does not exist, the function appends a new line containing the name and value of the environment variable to the ",(0,t.jsx)(n.code,{children:"lines_new"})," list (line 11)."]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, if there are any new lines to be added (i.e., ",(0,t.jsx)(n.code,{children:"len(lines_new) > 0"}),"), the function writes the ",(0,t.jsx)(n.code,{children:"lines_new"})," list to the ",(0,t.jsx)(n.code,{children:"envvar_file"})," using the ",(0,t.jsx)(n.code,{children:"writelines()"})," method (line 14)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"create_dict"})," parameter should only contain the names and values of the environment variables that need to be added. If an environment variable already exists in the ",(0,t.jsx)(n.code,{children:"envvar_file"}),", the function will not modify or overwrite it."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"envvar_file"})," parameter should be an open file object in write mode ('w') or append mode ('a'). If the file does not exist, the function will create it when writing the new lines."]}),"\n",(0,t.jsxs)(n.li,{children:["The function does not handle any exceptions. Therefore, it is recommended to include error handling code to manage scenarios like a missing or unreadable ",(0,t.jsx)(n.code,{children:"envvar_file"})," or an invalid ",(0,t.jsx)(n.code,{children:"create_dict"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The function is case-sensitive when searching for existing environment variables in the ",(0,t.jsx)(n.code,{children:"envvar_file"}),". Make sure to provide the correct case for the environment variable names in the ",(0,t.jsx)(n.code,{children:"create_dict"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"functiondef-_delete_actionself-delete_dict-envvar_file",children:"FunctionDef _delete_action(self, delete_dict, envvar_file)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"_delete_action"}),": The function of ",(0,t.jsx)(n.code,{children:"_delete_action"})," is to remove specified variables from a given environment variable file."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"parameters"}),":\n\xb7 ",(0,t.jsx)(n.code,{children:"delete_dict"}),": A dictionary containing the names of the environment variables to be deleted. The keys are the names of the variables, and the values are not used in this function.\n\xb7 ",(0,t.jsx)(n.code,{children:"envvar_file"}),": A file object representing the environment variable file to be modified."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Description"}),":\nThe function first reads all the lines from the ",(0,t.jsx)(n.code,{children:"envvar_file"})," and stores them in the ",(0,t.jsx)(n.code,{children:"lines"})," list (",(0,t.jsx)(n.code,{children:"lines = envvar_file.readlines()"}),"). It then iterates over the ",(0,t.jsx)(n.code,{children:"delete_dict"})," to find and remove the corresponding lines in the ",(0,t.jsx)(n.code,{children:"lines"})," list. If a line starts with the name of a variable to be deleted (",(0,t.jsx)(n.code,{children:"if line.startswith(name + '=')"}),"), it removes that line from the list (",(0,t.jsx)(n.code,{children:"lines.remove(line)"}),"). After processing all the lines, if any variable has been deleted, it writes the remaining lines back to the ",(0,t.jsx)(n.code,{children:"envvar_file"})," (",(0,t.jsx)(n.code,{children:"envvar_file.writelines(lines)"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The function does not check if the variables provided in the ",(0,t.jsx)(n.code,{children:"delete_dict"})," actually exist in the ",(0,t.jsx)(n.code,{children:"envvar_file"}),". If a variable does not exist, the function will simply not remove any lines."]}),"\n",(0,t.jsxs)(n.li,{children:["The function does not modify the original ",(0,t.jsx)(n.code,{children:"envvar_file"})," in-place. Instead, it reads the entire file into memory, processes the lines, and then writes the modified lines back to the file. This means that if the file is very large, this function may consume a significant amount of memory."]}),"\n",(0,t.jsx)(n.li,{children:"The function does not add any error handling or logging. If an error occurs (e.g., if the file cannot be read or written), the function will raise an exception. In a production environment, you may want to add appropriate error handling and logging to make the function more robust."}),"\n",(0,t.jsxs)(n.li,{children:["The function modifies the ",(0,t.jsx)(n.code,{children:"lines"})," list in-place while iterating over it. This is generally not recommended, as it can lead to unexpected behavior. In this specific case, it works because the ",(0,t.jsx)(n.code,{children:"remove"})," operation reduces the size of the list, so the iteration does not skip any elements. However, as a best practice, consider creating a new list or using a different data structure (e.g., a set) to store the lines and perform the deletions."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"functiondef-actself",children:"FunctionDef act(self)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"act"}),": The function of act is to process and write environment variables to a file based on the given envvars and the action to be performed (CREATE, REPLACE, UPDATE, or DELETE)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"parameters"}),":\n\xb7 self: The Envvar object that calls the method."]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);