"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[1884],{7557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>h,metadata:()=>r,toc:()=>c});var s=n(4848),i=n(8453);const h={},o=void 0,r={id:"gpoa/util/paths",title:"paths",description:"FunctionDef getcustompolicy_dir",source:"@site/docs/gpoa/util/paths.md",sourceDirName:"gpoa/util",slug:"/gpoa/util/paths",permalink:"/gpupdate-docs/docs/gpoa/util/paths",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"logging",permalink:"/gpupdate-docs/docs/gpoa/util/logging"},next:{title:"preg",permalink:"/gpupdate-docs/docs/gpoa/util/preg"}},a={},c=[{value:"FunctionDef get_custom_policy_dir",id:"functiondef-get_custom_policy_dir",level:2},{value:"FunctionDef local_policy_path(default_template_name)",id:"functiondef-local_policy_pathdefault_template_name",level:2},{value:"FunctionDef cache_dir",id:"functiondef-cache_dir",level:2},{value:"FunctionDef file_cache_dir",id:"functiondef-file_cache_dir",level:2},{value:"FunctionDef file_cache_path_home(username)",id:"functiondef-file_cache_path_homeusername",level:2},{value:"FunctionDef local_policy_cache",id:"functiondef-local_policy_cache",level:2},{value:"ClassDef UNCPath",id:"classdef-uncpath",level:2},{value:"FunctionDef <strong>init</strong>(self, path)",id:"functiondef-initself-path",level:3},{value:"FunctionDef get_uri(self)",id:"functiondef-get_uriself",level:3},{value:"FunctionDef get_unc(self)",id:"functiondef-get_uncself",level:3},{value:"FunctionDef get_domain(self)",id:"functiondef-get_domainself",level:3},{value:"FunctionDef get_path(self)",id:"functiondef-get_pathself",level:3},{value:"FunctionDef <strong>str</strong>(self)",id:"functiondef-strself",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"functiondef-get_custom_policy_dir",children:"FunctionDef get_custom_policy_dir"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"get_custom_policy_dir"}),"\uff1aThe function of get_custom_policy_dir is to return the path pointing to the Custom Policy directory."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Parameters"}),"\uff1aThis function does not take any parameters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),"\uff1a\nThe function get_custom_policy_dir() is a simple function that returns a string value representing the path to the Custom Policy directory. The path is hard-coded as '/etc/local-policy'. This function does not perform any complex operations and simply returns the path as a string."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),"\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"This function does not take any parameters, so there is no need to pass any arguments while calling this function."}),"\n",(0,s.jsx)(t.li,{children:"The path '/etc/local-policy' is hard-coded in the function, so it cannot be changed during runtime."}),"\n",(0,s.jsx)(t.li,{children:"The function always returns the same path, so it can be used to get the path to the Custom Policy directory in a consistent manner."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),"\uff1a\nThe output of the function get_custom_policy_dir() will be a string value representing the path to the Custom Policy directory. For example, the output can be:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"/etc/local-policy\n"})}),"\n",(0,s.jsx)(t.p,{children:"This indicates that the Custom Policy directory is located at '/etc/local-policy' in the file system."}),"\n",(0,s.jsx)(t.h2,{id:"functiondef-local_policy_pathdefault_template_name",children:"FunctionDef local_policy_path(default_template_name)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"local_policy_path"}),": The function of local_policy_path is to return a pathlib.Path object pointing to the Local Policy template directory."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),":\nThe function starts by defining a default Local Policy directory path ",(0,s.jsx)(t.code,{children:"local_policy_dir"})," as '/usr/share/local-policy'. It then creates an instance of the ",(0,s.jsx)(t.code,{children:"GPConfig"})," class to interact with the configuration file located at '/etc/gpupdate/gpupdate.ini'."]}),"\n",(0,s.jsxs)(t.p,{children:["Next, it calls the ",(0,s.jsx)(t.code,{children:"get_local_policy_template"})," method of the ",(0,s.jsx)(t.code,{children:"GPConfig"})," instance to fetch the name of the chosen Local Policy template from the configuration file. If no Local Policy template name is specified in the configuration file, it returns the default Local Policy template name determined by the ",(0,s.jsx)(t.code,{children:"get_local_policy_template"})," method of the ",(0,s.jsx)(t.code,{children:"GPConfig"})," class."]}),"\n",(0,s.jsxs)(t.p,{children:["The function then constructs the path to the Local Policy template directory by joining the ",(0,s.jsx)(t.code,{children:"local_policy_dir"})," and the Local Policy template name using the ",(0,s.jsx)(t.code,{children:"os.path.join"})," function. It also constructs the path to the default Local Policy template directory by joining the ",(0,s.jsx)(t.code,{children:"local_policy_dir"})," and the default Local Policy template name using the ",(0,s.jsx)(t.code,{children:"os.path.join"})," function."]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, it creates a ",(0,s.jsx)(t.code,{children:"pathlib.Path"})," object for the default Local Policy template directory and assigns it to the ",(0,s.jsx)(t.code,{children:"result_path"})," variable. It then checks if the Local Policy template directory exists. If it does, it updates the ",(0,s.jsx)(t.code,{children:"result_path"})," variable to point to the Local Policy template directory. If the Local Policy template directory does not exist, but the default Local Policy template directory exists, it updates the ",(0,s.jsx)(t.code,{children:"result_path"})," variable to point to the default Local Policy template directory."]}),"\n",(0,s.jsxs)(t.p,{children:["The function returns the ",(0,s.jsx)(t.code,{children:"result_path"})," variable as a ",(0,s.jsx)(t.code,{children:"pathlib.Path"})," object."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Referenced Objects"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The function creates an instance of the ",(0,s.jsx)(t.code,{children:"GPConfig"})," class to interact with the configuration file located at '/etc/gpupdate/gpupdate.ini'."]}),"\n",(0,s.jsxs)(t.li,{children:["The function calls the ",(0,s.jsx)(t.code,{children:"get_local_policy_template"})," method of the ",(0,s.jsx)(t.code,{children:"GPConfig"})," instance to fetch the name of the chosen Local Policy template from the configuration file."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Use Case"}),":\nThe function is used in the ",(0,s.jsx)(t.code,{children:"lp2gpt"})," function in the ",(0,s.jsx)(t.code,{children:"gpoa/gpt/gpt.py/lp2gpt"})," module to construct the path to the Local Policy template directory."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The function assumes that the only possible values for the Local Policy template name are 'workstation', 'ad-domain-controller', and 'server'. If there are other possible values, the function will need to be updated accordingly."}),"\n",(0,s.jsx)(t.li,{children:"The function does not handle exceptions, so any errors that occur while checking for the file or reading its contents will be ignored."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:">>> from gpoa.util.paths import local_policy_path\n>>> local_policy_path()\npathlib.Path('/usr/share/local-policy/workstation')\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This output example shows the function being called without any parameters. The function returns the path to the Local Policy template directory as a ",(0,s.jsx)(t.code,{children:"pathlib.Path"})," object. In this case, the Local Policy template name is 'workstation' because it is specified in the configuration file."]}),"\n",(0,s.jsx)(t.h2,{id:"functiondef-cache_dir",children:"FunctionDef cache_dir"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"cache_dir"}),": The function of cache_dir is to return a path object pointing to gpupdate's cache directory."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),": The function begins by importing the pathlib module, which provides an object-oriented interface to the filesystem. It then defines a function named cache_dir that creates a Path object for the directory '/var/cache/gpupdate'. This Path object is assigned to the variable cachedir."]}),"\n",(0,s.jsx)(t.p,{children:"The function then checks if the directory specified by cachedir exists. If it does not exist, the function creates it using the mkdir method, with the parents parameter set to True to create any necessary parent directories, and the exist_ok parameter set to True to avoid raising a FileExistsError if the directory already exists."}),"\n",(0,s.jsx)(t.p,{children:"Finally, the function returns the cachedir Path object, which can be used to access the gpupdate cache directory."}),"\n",(0,s.jsx)(t.p,{children:"From a functional perspective, this function plays a crucial role in the project by providing a standardized way to access the gpupdate cache directory. It is called by several other objects in the project, including sqlite_cache and sqlite_registry, which use the returned Path object to specify the location of SQLite databases used to store various types of configuration data."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": It is important to note that the function returns a Path object, not a string. When using the returned Path object, it is recommended to use its methods and attributes to interact with the filesystem, rather than converting it to a string and using string methods."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:">>> import pathlib\n>>> def cache_dir():\n...     '''\n...     Returns path pointing to gpupdate's cache directory\n...     '''\n...     cachedir = pathlib.Path('/var/cache/gpupdate')\n...\n...     if not cachedir.exists():\n...         cachedir.mkdir(parents=True, exist_ok=True)\n...\n...     return cachedir\n...\n>>> cache_dir()\n/var/cache/gpupdate\n>>> type(cache_dir())\n<class 'pathlib.PosixPath'>\n>>>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"functiondef-file_cache_dir",children:"FunctionDef file_cache_dir"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"file_cache_dir"}),": The function of file_cache_dir is to return the path of the cache directory used by gpupdate."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),": The function begins by creating a ",(0,s.jsx)(t.code,{children:"pathlib.Path"})," object, ",(0,s.jsx)(t.code,{children:"cachedir"}),", which is set to the path ",(0,s.jsx)(t.code,{children:"'/var/cache/gpupdate_file_cache'"}),". It then checks if this directory exists. If it does not, the function creates the directory and all necessary parent directories using the ",(0,s.jsx)(t.code,{children:"mkdir"})," method with the ",(0,s.jsx)(t.code,{children:"parents"})," and ",(0,s.jsx)(t.code,{children:"exist_ok"})," parameters set to ",(0,s.jsx)(t.code,{children:"True"}),". This ensures that the directory and its parents are created if they do not already exist, and no error is raised if the directory already exists. The function then returns the ",(0,s.jsx)(t.code,{children:"cachedir"})," object, which can be used to access the cache directory."]}),"\n",(0,s.jsxs)(t.p,{children:["From a functional perspective, this function is used to provide a standard cache directory path for use in other parts of the project. This is demonstrated by its use in the ",(0,s.jsx)(t.code,{children:"__init__"})," method of the ",(0,s.jsx)(t.code,{children:"fs_file_cache"})," class in the ",(0,s.jsx)(t.code,{children:"gpoa/storage/fs_file_cache.py"})," file. In this context, the function is called to provide a default cache directory path when a username is not provided, or when the creation of a user-specific cache path fails."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": This function always returns the same cache directory path, regardless of the context in which it is called. Therefore, it should not be used in situations where a unique cache directory path is required for each user or context."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"/var/cache/gpupdate_file_cache\n"})}),"\n",(0,s.jsx)(t.h2,{id:"functiondef-file_cache_path_homeusername",children:"FunctionDef file_cache_path_home(username)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"file_cache_path_home"}),": The function of file_cache_path_home is to return the path pointing to the gpupdate cache directory in the /home directory for a given username."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),":\n\xb7 username (str): The username for which to retrieve the cache directory path."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),":\nThe function ",(0,s.jsx)(t.code,{children:"file_cache_path_home"})," is a simple function that constructs the path to the gpupdate cache directory for a given username. It uses the ",(0,s.jsx)(t.code,{children:"get_homedir"})," function to get the home directory of the user and appends the cache directory path to it. The resulting path is then returned."]}),"\n",(0,s.jsxs)(t.p,{children:["This function is used in the ",(0,s.jsx)(t.code,{children:"fs_file_cache"})," class in ",(0,s.jsx)(t.code,{children:"gpoa/storage/fs_file_cache.py"})," to initialize the ",(0,s.jsx)(t.code,{children:"storage_uri"})," attribute of the class. If a username is provided, the function returns the cache directory path for that user. Otherwise, it returns the default cache directory path."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"get_homedir"})," function, which is called within ",(0,s.jsx)(t.code,{children:"file_cache_path_home"}),", is responsible for querying the password database for the user's home directory. It takes a single argument, ",(0,s.jsx)(t.code,{children:"username"}),", and returns the home directory of the user with that username."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),":\nIt is important to note that the correctness of the returned path depends on the correct configuration and up-to-dateness of the password database. If the password database is not properly configured, this function may return incorrect or incomplete information."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"'/home/user/.cache/gpupdate'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This is an example of the output that this function may return, given a ",(0,s.jsx)(t.code,{children:"username"})," of ",(0,s.jsx)(t.code,{children:"'user'"}),". The actual output will vary depending on the specific user and the configuration of the password database."]}),"\n",(0,s.jsx)(t.h2,{id:"functiondef-local_policy_cache",children:"FunctionDef local_policy_cache"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"local_policy_cache"}),": The function of local_policy_cache is to return a path to the directory where the local policy settings cache transformed into GPT is stored."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),": The function begins by importing the pathlib module, which provides an object-oriented interface to the filesystem. It then defines a function named local_policy_cache that creates a Path object for the directory 'local-policy' inside the cache directory. This Path object is assigned to the variable lpcache."]}),"\n",(0,s.jsx)(t.p,{children:"The function then checks if the directory specified by lpcache exists. If it does not exist, the function creates it using the mkdir method, with the parents parameter set to True to create any necessary parent directories, and the exist_ok parameter set to True to avoid raising a FileExistsError if the directory already exists."}),"\n",(0,s.jsx)(t.p,{children:"Finally, the function returns the lpcache Path object, which can be used to access the local policy settings cache directory."}),"\n",(0,s.jsx)(t.p,{children:"From a functional perspective, this function plays a crucial role in the project by providing a standardized way to access the local policy settings cache directory. It is called by several other objects in the project, including lp2gpt and get_local_gpt, which use the returned Path object to specify the location of the local policy settings cache."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": It is important to note that the function returns a Path object, not a string. When using the returned Path object, it is recommended to use its methods and attributes to interact with the filesystem, rather than converting it to a string and using string methods."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:">>> import pathlib\n>>> def local_policy_cache():\n...     '''\n...     Returns path to directory where lies local policy settings cache\n...     transformed into GPT.\n...     '''\n...     lpcache = pathlib.Path.joinpath(cache_dir(), 'local-policy')\n...\n...     if not lpcache.exists():\n...         lpcache.mkdir(parents=True, exist_ok=True)\n...\n...     return lpcache\n...\n>>> local_policy_cache()\nposixpath.PosixPath('/var/cache/gpupdate/local-policy')\n>>> type(local_policy_cache())\n<class 'pathlib.PosixPath'>\n>>>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, the function ",(0,s.jsx)(t.code,{children:"local_policy_cache()"})," returns a Path object pointing to the directory where the local policy settings cache transformed into GPT is stored. The path is ",(0,s.jsx)(t.code,{children:"/var/cache/gpupdate/local-policy"}),". The type of the returned value is ",(0,s.jsx)(t.code,{children:"pathlib.PosixPath"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"classdef-uncpath",children:"ClassDef UNCPath"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"UNCPath"}),": The function of UNCPath is to handle and manage Uniform Naming Convention (UNC) paths and convert them to URI format or vice versa."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"attributes"}),":\n\xb7 ",(0,s.jsx)(t.code,{children:"path"}),": A string representing the UNC path.\n\xb7 ",(0,s.jsx)(t.code,{children:"type"}),": A string that can take the value of 'uri' or 'unc' based on the path."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),":\nUNCPath is a class that is used to manage and manipulate UNC paths. During initialization, the class checks if the provided path is a UNC path or not. If the path starts with 'smb://', it sets the type to 'uri'. If the path starts with '' or '//', it sets the type to 'unc'. If the path is not a UNC path, it raises a ",(0,s.jsx)(t.code,{children:"NotUNCPathError"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"get_uri"})," method converts a UNC path to a URI format. If the path is already a URI, it returns the path as it is. If the path is a UNC path, it replaces all '' with '/' and adds 'smb://' at the beginning of the path."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"get_unc"})," method converts a URI format path to a UNC path. If the path is already a UNC path, it returns the path as it is. If the path is a URI, it replaces '//' with '' and 'smb:' with ''. It also replaces '/' with ''."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"get_domain"})," method returns the domain name of the UNC path. It uses the ",(0,s.jsx)(t.code,{children:"urlparse"})," method to parse the URI format path and returns the netloc attribute."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"get_path"})," method returns the path of the UNC path. It uses the ",(0,s.jsx)(t.code,{children:"urlparse"})," method to parse the URI format path and returns the path attribute."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"__str__"})," method returns the URI format of the UNC path."]}),"\n",(0,s.jsxs)(t.p,{children:["The UNCPath class is used in various parts of the project to manage UNC paths. It is used in the ",(0,s.jsx)(t.code,{children:"copy_target_file"})," method of the ",(0,s.jsx)(t.code,{children:"Files_cp"})," class to check if the provided path is a UNC path or not. It is also used in the ",(0,s.jsx)(t.code,{children:"store"})," method of the ",(0,s.jsx)(t.code,{children:"fs_file_cache"})," class to manage the storage of files."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),":\nThe UNCPath class assumes that the provided path is either a UNC path or a URI format path. If the path is not in the correct format, it will raise a ",(0,s.jsx)(t.code,{children:"NotUNCPathError"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# Creating an instance of UNCPath with a UNC path\nunc_path = UNCPath('\\\\\\\\server\\\\share\\\\file.txt')\nprint(unc_path.get_uri())  # Output: smb://server/share/file.txt\nprint(unc_path.get_unc())  # Output: \\\\server\\share\\file.txt\nprint(unc_path.get_domain())  # Output: server\nprint(unc_path.get_path())  # Output: /share/file.txt\nprint(unc_path)  # Output: smb://server/share/file.txt\n\n# Creating an instance of UNCPath with a URI format path\nuri_path = UNCPath('smb://server/share/file.txt')\nprint(uri_path.get_uri())  # Output: smb://server/share/file.txt\nprint(uri_path.get_unc())  # Output: \\\\server\\share\\file.txt\nprint(uri_path.get_domain())  # Output: server\nprint(uri_path.get_path())  # Output: /share/file.txt\nprint(uri_path)  # Output: smb://server/share/file.txt\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"functiondef-initself-path",children:["FunctionDef ",(0,s.jsx)(t.strong,{children:"init"}),"(self, path)"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.strong,{children:"init"})}),": The function of the ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.strong,{children:"init"})})," method in the UNCPath class is to initialize a new UNCPath object with a given path and determine the type of the path."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),":\n\xb7 ",(0,s.jsx)(t.strong,{children:"path"}),": The path that is to be checked and stored in the UNCPath object."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.strong,{children:"init"})})," method takes a single parameter, ",(0,s.jsx)(t.strong,{children:"path"}),", which is the path to be checked. The method sets the ",(0,s.jsx)(t.strong,{children:"path"})," attribute to the provided path and initializes the ",(0,s.jsx)(t.strong,{children:"type"})," attribute to None. Then, it checks if the path starts with the UNC path prefix '\\' or '//', in which case it sets the ",(0,s.jsx)(t.strong,{children:"type"})," attribute to 'unc'. If the path starts with the URI prefix 'smb://', it sets the ",(0,s.jsx)(t.strong,{children:"type"})," attribute to 'uri'. If the path does not match any of these patterns, the method raises a ",(0,s.jsx)(t.strong,{children:"NotUNCPathError"})," with the provided path as the argument."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.strong,{children:"init"})})," method is responsible for ensuring that the provided path is a valid UNC path. It uses the ",(0,s.jsx)(t.strong,{children:"NotUNCPathError"})," class to raise an exception if the path is not a UNC path. This allows the UNCPath class to enforce the invariant that all UNCPath objects represent valid UNC paths."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"UNCPath"})," class is used to represent paths that are accessible through the UNC protocol. The ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.strong,{children:"init"})})," method is the primary way of creating new ",(0,s.jsx)(t.strong,{children:"UNCPath"})," objects. It is called automatically when a new object is created, and it is responsible for initializing the object's state."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),":\nIt is important to note that the ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.strong,{children:"init"})})," method does not check if the provided path actually exists. It only checks if the path has the correct format. Therefore, it is possible to create a new ",(0,s.jsx)(t.strong,{children:"UNCPath"})," object with a non-existent path. To check if a UNC path actually exists, you can use the ",(0,s.jsx)(t.strong,{children:"exists"})," method of the ",(0,s.jsx)(t.strong,{children:"UNCPath"})," class."]}),"\n",(0,s.jsxs)(t.p,{children:["Additionally, it is recommended to use the ",(0,s.jsx)(t.strong,{children:"UNCPath"})," class to represent all UNC paths in the application. This ensures that all UNC paths are checked for validity and makes the code more consistent and easier to maintain."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"functiondef-get_uriself",children:"FunctionDef get_uri(self)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"get_uri"}),": The function of get_uri is to convert the UNC path to a URI."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters as it uses the properties of the class it belongs to."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),": The function first assigns the path property of the class to the variable 'path'. It then checks if the type property of the class is 'unc'. If it is, it replaces the single backslashes ('\\') with forward slashes ('/') and then replaces double forward slashes ('//') with 'smb://'. This results in a URI format for the UNC path. If the type is not 'unc', the function does not make any changes to the path. The converted path is then returned."]}),"\n",(0,s.jsx)(t.p,{children:"(Detailed and CERTAIN code analysis and description: The function is a method of the UNCPath class and is used to convert the UNC path to a URI format. It does this by replacing the backslashes with forward slashes and adding 'smb://' at the beginning of the path. This is useful when the UNC path needs to be used in a context where a URI format is required. The function does not modify the path if the type is not 'unc', indicating that it is only meant to handle UNC paths.)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Relationship with its callers in the project"}),": The function is used by the 'get_domain' and 'get_path' methods of the UNCPath class to extract the domain and path components from the URI format of the UNC path. It is also used by the __str__ method of the UNCPath class to provide a string representation of the UNC path in URI format."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": The function assumes that the path property of the class is a valid UNC path if the type property is 'unc'. It is important to ensure that the path property is set correctly before calling this function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),": If the path property of the class is '\\server\\share', and the type property is 'unc', the function will return 'smb://server/share'."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"functiondef-get_uncself",children:"FunctionDef get_unc(self)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"get_unc"}),": The function of get_unc is to convert a given path into a UNC (Universal Naming Convention) path format."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),":\n\xb7 self: The object itself, an instance of the UNCPath class, which contains the path and type attributes."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"functiondef-get_domainself",children:"FunctionDef get_domain(self)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"get_domain"}),": The function of get_domain is to extract and return the network location (netloc) from the URI format of a UNC path."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters as it uses the properties of the class it belongs to."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),": The function first calls the get_uri() method of the UNCPath class to convert the UNC path to a URI format. It then uses the urlparse function from the built-in urllib.parse module to parse the URI and extract the network location (netloc) which is then returned. The network location represents the host or domain name of the URI."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Relationship with its callers in the project"}),": The function is used by the store and get methods of the fs_file_cache class in the gpoa/storage/fs_file_cache.py module to extract the domain component from the URI format of the UNC path. It is also used by the __str__ method of the UNCPath class to provide a string representation of the UNC path in URI format."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": The function assumes that the path property of the class is a valid UNC path if the type property is 'unc'. It is important to ensure that the path property is set correctly before calling this function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),": If the path property of the class is '\\server\\share', and the type property is 'unc', the function will return 'server' as the network location."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"functiondef-get_pathself",children:"FunctionDef get_path(self)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"get_path"}),": The function of get_path is to retrieve the path component from the URI format of a UNC path."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters as it uses the properties of the class it belongs to."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),": The function get_path is a method of the UNCPath class and is used to retrieve the path component from the URI format of a UNC path. It does this by calling the get_uri() function, which converts the UNC path to a URI format, and then returns the path component of the URI. The path component is obtained using the path attribute of the schema_struct object, which is created by parsing the URI using the urlparse function."]}),"\n",(0,s.jsx)(t.p,{children:"The function get_uri() converts the UNC path to a URI format by replacing the backslashes with forward slashes and adding 'smb://' at the beginning of the path. This is useful when the UNC path needs to be used in a context where a URI format is required. The function does not modify the path if the type is not 'unc', indicating that it is only meant to handle UNC paths."}),"\n",(0,s.jsx)(t.p,{children:"The function get_path is used by the 'store' and 'get' methods of the fs_file_cache class in the gpoa/storage/fs_file_cache.py module to extract the path component from the URI format of the UNC path. It is also used by the __str__ method of the UNCPath class to provide a string representation of the UNC path in URI format."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": The function assumes that the path property of the class is a valid UNC path if the type property is 'unc'. It is important to ensure that the path property is set correctly before calling this function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),": If the path property of the class is '\\server\\share', and the type property is 'unc', the function will return '/server/share' as the URI format of the UNC path is 'smb://server/share'."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.h3,{id:"functiondef-strself",children:["FunctionDef ",(0,s.jsx)(t.strong,{children:"str"}),"(self)"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"__str__"})}),": The function of ",(0,s.jsx)(t.code,{children:"__str__"})," is to provide a string representation of the UNC path in URI format."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters as it uses the properties of the class it belongs to."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),": The ",(0,s.jsx)(t.code,{children:"__str__"})," method is a special method in Python that is called when the ",(0,s.jsx)(t.code,{children:"str()"})," function is used on an object. In this case, it is used to convert the UNC path to a URI format. It does this by calling the ",(0,s.jsx)(t.code,{children:"get_uri()"})," method of the class, which replaces the backslashes with forward slashes and adds 'smb://' at the beginning of the path if the type is 'unc'. This results in a URI format for the UNC path. If the type is not 'unc', the ",(0,s.jsx)(t.code,{children:"__str__"})," method does not make any changes to the path. The converted path is then returned as a string."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"__str__"})," method is used by the built-in ",(0,s.jsx)(t.code,{children:"print()"})," function to print the object, and it is also used when the object is converted to a string using the ",(0,s.jsx)(t.code,{children:"str()"})," function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Relationship with its callers in the project"}),": The ",(0,s.jsx)(t.code,{children:"__str__"})," method is used by the ",(0,s.jsx)(t.code,{children:"print()"})," function and the ",(0,s.jsx)(t.code,{children:"str()"})," function to print or convert the UNCPath object to a string. It is also used by the ",(0,s.jsx)(t.code,{children:"get_domain()"})," and ",(0,s.jsx)(t.code,{children:"get_path()"})," methods of the UNCPath class to extract the domain and path components from the URI format of the UNC path."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": The ",(0,s.jsx)(t.code,{children:"__str__"})," method assumes that the ",(0,s.jsx)(t.code,{children:"path"})," property of the class is a valid UNC path if the ",(0,s.jsx)(t.code,{children:"type"})," property is 'unc'. It is important to ensure that the ",(0,s.jsx)(t.code,{children:"path"})," property is set correctly before calling this method."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),": If the ",(0,s.jsx)(t.code,{children:"path"})," property of the class is '",(0,s.jsx)(t.code,{children:"\\\\server\\share"}),"', and the ",(0,s.jsx)(t.code,{children:"type"})," property is 'unc', the ",(0,s.jsx)(t.code,{children:"__str__"})," method will return '",(0,s.jsx)(t.code,{children:"smb://server/share"}),"'."]}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"unc_path = UNCPath('\\\\server\\share', 'unc')\nprint(unc_path)  # Output: smb://server/share\n"})}),"\n",(0,s.jsx)(t.hr,{})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const i={},h=s.createContext(i);function o(e){const t=s.useContext(h);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(h.Provider,{value:t},e.children)}}}]);