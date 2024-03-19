"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[7949],{2573:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=i(4848),s=i(8453);const r={},o=void 0,a={id:"gpoa/storage/fs_file_cache",title:"fs_file_cache",description:"ClassDef fsfilecache",source:"@site/docs/gpoa/storage/fs_file_cache.md",sourceDirName:"gpoa/storage",slug:"/gpoa/storage/fs_file_cache",permalink:"/gpupdate-docs/docs/gpoa/storage/fs_file_cache",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"cache",permalink:"/gpupdate-docs/docs/gpoa/storage/cache"},next:{title:"record_types",permalink:"/gpupdate-docs/docs/gpoa/storage/record_types"}},c={},h=[{value:"ClassDef fs_file_cache",id:"classdef-fs_file_cache",level:2},{value:"FunctionDef <strong>init</strong>(self, cache_name, username)",id:"functiondef-initself-cache_name-username",level:3},{value:"FunctionDef store(self, uri, destfile)",id:"functiondef-storeself-uri-destfile",level:3},{value:"FunctionDef get(self, uri)",id:"functiondef-getself-uri",level:3},{value:"FunctionDef get_ls_smbdir(self, uri)",id:"functiondef-get_ls_smbdirself-uri",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"classdef-fs_file_cache",children:"ClassDef fs_file_cache"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"fs_file_cache"}),": The ",(0,n.jsx)(t.code,{children:"fs_file_cache"})," class provides functionality to cache files in a specific directory for a given cache name and username. It handles the creation, storage, and retrieval of cached files."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Attributes"}),":\n\xb7 ",(0,n.jsx)(t.code,{children:"cache_name"}),": A string representing the name of the cache.\n\xb7 ",(0,n.jsx)(t.code,{children:"username"}),": An optional string representing the username for which the cache is created. If not provided, the cache is created for the current user.\n\xb7 ",(0,n.jsx)(t.code,{children:"storage_uri"}),": A string representing the path to the cache directory.\n\xb7 ",(0,n.jsx)(t.code,{children:"samba_context"}),": An instance of ",(0,n.jsx)(t.code,{children:"smbc.Context"})," used for handling SMB (Server Message Block) connections."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(t.code,{children:"__init__"})," method initializes the class with a given cache name and an optional username. It determines the storage URI based on the username or sets it to the default cache directory if the username is not provided. It also initializes a Samba context for handling SMB connections."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"store"})," method takes a URI and an optional destination file and stores the file in the cache directory. It creates a temporary file, reads data from the source file in blocks, and writes the data to the temporary file. Once all data has been written, it renames the temporary file to the destination file and sets its permissions to 0o644."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"get"})," method takes a URI and returns the path to the cached file. It first checks if the URI is a valid UNC path and then constructs the path to the cached file based on the URI. If the URI is not a valid UNC path, it raises a ",(0,n.jsx)(t.code,{children:"NotUNCPathError"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"get_ls_smbdir"})," method lists the files in a given SMB directory. It takes a URI and returns a list of file names in the directory. If the URI does not exist or an exception occurs, it returns ",(0,n.jsx)(t.code,{children:"None"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Relationship with Callers"}),":\nThe ",(0,n.jsx)(t.code,{children:"fs_file_cache"})," class is used in the ",(0,n.jsx)(t.code,{children:"gpoa/frontend/frontend_manager.py"})," module to cache files for a specific user or machine. The ",(0,n.jsx)(t.code,{children:"frontend_manager"})," class initializes an instance of ",(0,n.jsx)(t.code,{children:"fs_file_cache"})," with a given cache name and username and uses it to store and retrieve cached files."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"store"})," method creates a temporary file using ",(0,n.jsx)(t.code,{children:"tempfile.mkstemp"})," and does not explicitly close the file descriptor. It is recommended to close the file descriptor to free up system resources."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"get"})," method assumes that the URI is a valid UNC path and does not handle other types of paths."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"cache = fs_file_cache('my_cache', 'user1')\nuri = '\\\\server\\share\\file.txt'\ndestfile = cache.store(uri)\ncached_file = cache.get(uri)\nprint(cached_file)  # Output: /path/to/cache/user1/domain/server/share/file.txt\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"functiondef-initself-cache_name-username",children:["FunctionDef ",(0,n.jsx)(t.strong,{children:"init"}),"(self, cache_name, username)"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.strong,{children:"init"})}),": The function of ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.strong,{children:"init"})})," is to initialize the ",(0,n.jsx)(t.code,{children:"fs_file_cache"})," object with a given ",(0,n.jsx)(t.code,{children:"cache_name"})," and an optional ",(0,n.jsx)(t.code,{children:"username"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 ",(0,n.jsx)(t.code,{children:"cache_name"})," (str): The name of the file cache. This is a required parameter.\n\xb7 ",(0,n.jsx)(t.code,{children:"username"})," (str, optional): The username for which to retrieve the cache directory path. If provided, the cache directory path will be specific to this user. If not provided, the default cache directory path will be used."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(t.code,{children:"__init__"})," method initializes the ",(0,n.jsx)(t.code,{children:"fs_file_cache"})," object by setting the ",(0,n.jsx)(t.code,{children:"cache_name"})," attribute to the given ",(0,n.jsx)(t.code,{children:"cache_name"})," parameter."]}),"\n",(0,n.jsxs)(t.p,{children:["If a ",(0,n.jsx)(t.code,{children:"username"})," is provided, the method attempts to retrieve the cache directory path for that user by calling the ",(0,n.jsx)(t.code,{children:"file_cache_path_home"})," function with the ",(0,n.jsx)(t.code,{children:"username"})," parameter. If this function call fails (for example, if the user does not exist), the method falls back to calling the ",(0,n.jsx)(t.code,{children:"file_cache_dir"})," function to retrieve the default cache directory path."]}),"\n",(0,n.jsxs)(t.p,{children:["If no ",(0,n.jsx)(t.code,{children:"username"})," is provided, the method simply calls the ",(0,n.jsx)(t.code,{children:"file_cache_dir"})," function to retrieve the default cache directory path."]}),"\n",(0,n.jsxs)(t.p,{children:["The method then logs the cache directory path using the ",(0,n.jsx)(t.code,{children:"log"})," function with a log message indicating the cache file path."]}),"\n",(0,n.jsxs)(t.p,{children:["Finally, the method initializes the ",(0,n.jsx)(t.code,{children:"samba_context"})," attribute with a new ",(0,n.jsx)(t.code,{children:"smbc.Context"})," object with the ",(0,n.jsx)(t.code,{children:"use_kerberos"})," parameter set to ",(0,n.jsx)(t.code,{children:"1"}),". This is used for accessing SMB/CIFS resources using Kerberos authentication."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nIt is important to note that the correctness of the returned cache directory path depends on the correct configuration and up-to-dateness of the password database. If the password database is not properly configured, this method may return incorrect or incomplete information."]}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, the ",(0,n.jsx)(t.code,{children:"samba_context"})," attribute is initialized with the ",(0,n.jsx)(t.code,{children:"use_kerberos"})," parameter set to ",(0,n.jsx)(t.code,{children:"1"}),", which means that Kerberos authentication will be used for accessing SMB/CIFS resources. This may require additional configuration and setup, such as setting up a Kerberos realm and enabling Kerberos authentication on the SMB/CIFS server."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-storeself-uri-destfile",children:"FunctionDef store(self, uri, destfile)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"store"}),": The function of store is to save a file from a UNC path to a destination directory or file."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 uri: A string representing the UNC path of the file to be stored.\n\xb7 destfile (optional): A Path object representing the destination file or directory for the stored file. If not provided, the function will use the original file name and create a new directory based on the file's domain and path."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe store function first checks if the provided path is a UNC path or not by creating an instance of the UNCPath class. If the path is not a UNC path, it raises a NotUNCPathError."]}),"\n",(0,n.jsxs)(t.p,{children:["If the destfile parameter is not provided, the function extracts the file name and directory path from the UNC path using the UNCPath's get_path method. It then creates a new destination directory using the Path object's parent attribute and the format '","/","/","'.format(self.storage_uri, uri_path.get_domain(), file_path). If the destination directory does not exist, it creates the directory using the mkdir method with the parents and exist_ok parameters set to True."]}),"\n",(0,n.jsx)(t.p,{children:"The function then creates a new file path by combining the storage_uri, domain, and original file path. It opens the file in write-binary mode using the open method and the os.O_RDONLY flag. It then creates a temporary file using the tempfile.mkstemp method and writes the contents of the original file to the temporary file in write-binary mode using a file handler. Once the file is written, it renames the temporary file to the final destination file path using the os.rename method and sets the file permissions to 0o644 using the os.chmod method."}),"\n",(0,n.jsx)(t.p,{children:"If an exception occurs during the file storage process, the function logs the exception using the log method and re-raises the exception."}),"\n",(0,n.jsx)(t.p,{children:"The store function is used in various parts of the project to manage the storage of files. It is used in the copy_target_file method of the Files_cp class to store a file from a UNC path to a local file path. It is also used in the update_file_cache method of the gsettings_applier class to store a file from a UNC path to a local cache directory. Additionally, it is used in the admin_context_apply method of the gsettings_applier_user class to store a file from a UNC path to a local cache directory. Finally, it is used in the apply_for_wallpaper function to store a file from a UNC path to a local configuration file."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nThe store function assumes that the provided path is a UNC path. It is important to ensure that the path is a UNC path before calling this function. Additionally, if the destfile parameter is not provided, the function will create a new directory based on the file's domain and path. It is important to ensure that the storage_uri attribute is set correctly before calling this function."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-getself-uri",children:"FunctionDef get(self, uri)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"get"}),": The function of get is to retrieve the file path in URI format based on the input UNC path."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 uri: A string representing the UNC path."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(t.code,{children:"get"})," function is a method of the ",(0,n.jsx)(t.code,{children:"fs_file_cache"})," class and is used to retrieve the file path in URI format based on the input UNC path. It takes a single parameter, ",(0,n.jsx)(t.code,{children:"uri"}),", which is the UNC path to be converted to URI format."]}),"\n",(0,n.jsxs)(t.p,{children:["The function first initializes the ",(0,n.jsx)(t.code,{children:"destfile"})," variable to the input ",(0,n.jsx)(t.code,{children:"uri"}),". It then creates an instance of the ",(0,n.jsx)(t.code,{children:"UNCPath"})," class with the input ",(0,n.jsx)(t.code,{children:"uri"})," as the argument. If the ",(0,n.jsx)(t.code,{children:"uri"})," is not a UNC path, a ",(0,n.jsx)(t.code,{children:"NotUNCPathError"})," is raised."]}),"\n",(0,n.jsxs)(t.p,{children:["The function then extracts the file name and directory path from the ",(0,n.jsx)(t.code,{children:"UNCPath"})," instance using the ",(0,n.jsx)(t.code,{children:"os.path.basename"})," and ",(0,n.jsx)(t.code,{children:"os.path.dirname"})," functions, respectively. It then constructs the ",(0,n.jsx)(t.code,{children:"destfile"})," variable with the storage URI, domain, and path components."]}),"\n",(0,n.jsxs)(t.p,{children:["If the ",(0,n.jsx)(t.code,{children:"uri"})," is not a UNC path, a ",(0,n.jsx)(t.code,{children:"NotUNCPathError"})," is raised. If any other exception occurs during the execution of the function, it is caught and logged using the ",(0,n.jsx)(t.code,{children:"log"})," function."]}),"\n",(0,n.jsxs)(t.p,{children:["The function returns the ",(0,n.jsx)(t.code,{children:"destfile"})," variable in string format."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Relationship with its callers in the project"}),":\nThe ",(0,n.jsx)(t.code,{children:"get"})," function is called by the ",(0,n.jsx)(t.code,{children:"uri_fetch"})," function in the ",(0,n.jsx)(t.code,{children:"gsettings_applier.py"})," module to retrieve the URI format of the file path based on the input UNC path. It is also called by the ",(0,n.jsx)(t.code,{children:"apply_for_wallpaper"})," function in the ",(0,n.jsx)(t.code,{children:"kde_applier.py"})," module to retrieve the URI format of the file path based on the input UNC path."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nThis function assumes that the input ",(0,n.jsx)(t.code,{children:"uri"})," is a valid UNC path. It is important to ensure that the ",(0,n.jsx)(t.code,{children:"uri"})," is a UNC path before calling this function."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"uri = '\\\\\\\\server\\\\share\\\\file.txt'\ncache = fs_file_cache()\nuri_fetch('schema', uri, cache)\n# Output: 'smb://server/share/file.txt'\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In this example, the ",(0,n.jsx)(t.code,{children:"uri_fetch"})," function calls the ",(0,n.jsx)(t.code,{children:"get"})," function with the input UNC path ",(0,n.jsx)(t.code,{children:"'\\\\server\\share\\file.txt'"}),". The ",(0,n.jsx)(t.code,{children:"get"})," function converts the UNC path to URI format and returns the result, which is then printed to the console."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-get_ls_smbdirself-uri",children:"FunctionDef get_ls_smbdir(self, uri)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"get_ls_smbdir"}),": The function of get_ls_smbdir is to list the files in a given SMB directory."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 uri (str): The SMB directory to list the files from."]}),"\n",(0,n.jsx)(t.hr,{})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(6540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);