"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[1632],{8021:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var s=i(4848),t=i(8453);const r={},o=void 0,a={id:"gpoa/util/sid",title:"sid",description:"FunctionDef wbinfo_getsid(domain, user)",source:"@site/docs/gpoa/util/sid.md",sourceDirName:"gpoa/util",slug:"/gpoa/util/sid",permalink:"/gpupdate-docs/docs/gpoa/util/sid",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"samba",permalink:"/gpupdate-docs/docs/gpoa/util/samba"},next:{title:"signals",permalink:"/gpupdate-docs/docs/gpoa/util/signals"}},d={},h=[{value:"FunctionDef wbinfo_getsid(domain, user)",id:"functiondef-wbinfo_getsiddomain-user",level:2},{value:"FunctionDef get_local_sid_prefix",id:"functiondef-get_local_sid_prefix",level:2},{value:"FunctionDef get_sid(domain, username, is_machine)",id:"functiondef-get_siddomain-username-is_machine",level:2},{value:"ClassDef IssuingAuthority",id:"classdef-issuingauthority",level:2},{value:"ClassDef SidRevision",id:"classdef-sidrevision",level:2},{value:"ClassDef WellKnown21RID",id:"classdef-wellknown21rid",level:2},{value:"ClassDef WellKnown32RID",id:"classdef-wellknown32rid",level:2},{value:"ClassDef FirstSubAuthority",id:"classdef-firstsubauthority",level:2},{value:"ClassDef SecondSubAuthority",id:"classdef-secondsubauthority",level:2},{value:"FunctionDef validate_issuing_authority(ia_num)",id:"functiondef-validate_issuing_authorityia_num",level:2},{value:"FunctionDef validate_sid_revision(revnum)",id:"functiondef-validate_sid_revisionrevnum",level:2},{value:"FunctionDef is_sid(sid)",id:"functiondef-is_sidsid",level:2},{value:"FunctionDef sid2descr(sid)",id:"functiondef-sid2descrsid",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"functiondef-wbinfo_getsiddomain-user",children:"FunctionDef wbinfo_getsid(domain, user)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"wbinfo_getsid"}),": The function of wbinfo_getsid is to obtain the SID (Security Identifier) of a given domain and user using the wbinfo command."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),":\n\xb7 domain: A string representing the name of the domain to which the user belongs.\n\xb7 user: A string representing the name of the user."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe function begins by defining the username using the domain and user parameters. It then checks if the SID can be obtained using the pysss_nss_idmap.getsidbyname() function. If the username is found in the returned dictionary, the SID is returned."]}),"\n",(0,s.jsx)(n.p,{children:"If the SID is not found using pysss_nss_idmap.getsidbyname(), the function proceeds to execute the wbinfo command with the specified username as an argument. The output of the command is then processed to extract the SID, which is returned as the final result."}),"\n",(0,s.jsx)(n.p,{children:"The function is designed to work in two different environments: on a client, where the pysss_nss_idmap.getsidbyname() function is available, and on a DC (Domain Controller), where the wbinfo command is used."}),"\n",(0,s.jsx)(n.p,{children:"From a functional perspective, this function is called by the get_sid function in the same module, which is responsible for looking up the SID of a given domain and username, using wbinfo_getsid or other methods."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The function assumes that the wbinfo command is available on the system and that it is located in the system's PATH."}),"\n",(0,s.jsx)(n.li,{children:"The function may raise a subprocess.CalledProcessError if the wbinfo command fails to execute successfully."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"S-1-5-21-3624017640-2348740512-1234567890-1234\n"})}),"\n",(0,s.jsx)(n.h2,{id:"functiondef-get_local_sid_prefix",children:"FunctionDef get_local_sid_prefix"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"get_local_sid_prefix"}),"): The function of get_local_sid_prefix is to return the local Security Identifier (SID) prefix, which is a constant value used in Windows operating systems to identify a user or group account."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsx)(n.p,{children:"This function does not take any parameters."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Code Description"})}),"\n",(0,s.jsx)(n.p,{children:"The function is defined as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def get_local_sid_prefix():\n    return "S-1-5-21-0-0-0"\n'})}),"\n",(0,s.jsx)(n.p,{children:'The function returns the string "S-1-5-21-0-0-0" which is the local SID prefix. This value is a constant and does not change based on any input or system configuration.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Relationship with its callers in the project"})}),"\n",(0,s.jsxs)(n.p,{children:["This function is called in the ",(0,s.jsx)(n.code,{children:"get_sid"})," function in the same file ",(0,s.jsx)(n.code,{children:"sid.py"}),". The ",(0,s.jsx)(n.code,{children:"get_sid"})," function uses the local SID prefix returned by ",(0,s.jsx)(n.code,{children:"get_local_sid_prefix"})," to construct the full SID for a local user. The local SID prefix is combined with the user's UID (user ID) to create the full SID."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note"})}),"\n",(0,s.jsx)(n.p,{children:"The returned value is a constant and should not be modified. It is used to identify local users in the system."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output Example"})}),"\n",(0,s.jsx)(n.p,{children:'The output of this function will always be the string: "S-1-5-21-0-0-0"'}),"\n",(0,s.jsx)(n.h2,{id:"functiondef-get_siddomain-username-is_machine",children:"FunctionDef get_sid(domain, username, is_machine)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"get_sid"}),": The function of get_sid is to lookup a SID (Security Identifier) for a given domain and username, using both wbinfo_getsid and its own cache."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),":\n\xb7 domain: A string representing the name of the domain to which the user belongs. If not provided, the function assumes the user is a local user.\n\xb7 username: A string representing the name of the user.\n\xb7 is_machine: A boolean value indicating whether the user is a machine or not."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe function first initializes the 'sid' variable to 'local-","'.format(username). This is the SID for a local user."]}),"\n",(0,s.jsx)(n.p,{children:"If the 'domain' parameter is provided, the function tries to get the SID of the user using wbinfo_getsid(domain, username). If this fails, the function logs the exception using the log() function and returns the initialized 'sid' variable."}),"\n",(0,s.jsx)(n.p,{children:"If the 'domain' parameter is not provided, the function gets the UID of the user using pwd.getpwnam(username) if the 'is_machine' parameter is False. If the 'is_machine' parameter is True, the UID is set to 0. The SID for a local user is then created using the UID."}),"\n",(0,s.jsx)(n.p,{children:"The function then logs the 'sid' variable using the log() function and returns it."}),"\n",(0,s.jsx)(n.p,{children:"The function is designed to work in two different environments: on a client, where the pysss_nss_idmap.getsidbyname() function is available, and on a DC (Domain Controller), where the wbinfo command is used."}),"\n",(0,s.jsxs)(n.p,{children:["From a functional perspective, this function is called by the ",(0,s.jsx)(n.strong,{children:"init"})," function in the nodomain_backend and samba_backend modules in the backend package, which is responsible for initializing the backend objects for the system. It is also called by the ",(0,s.jsx)(n.strong,{children:"init"})," function in the frontend_manager module in the frontend package, which is responsible for initializing the frontend manager object for the system."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The function assumes that the wbinfo command is available on the system and that it is located in the system's PATH."}),"\n",(0,s.jsx)(n.li,{children:"The function may raise a subprocess.CalledProcessError if the wbinfo command fails to execute successfully."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"S-1-5-21-3624017640-2348740512-1234567890-1234\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Relationship with its callers in the project"}),":\nThis function is called in the ",(0,s.jsx)(n.code,{children:"__init__"})," function in the ",(0,s.jsx)(n.code,{children:"nodomain_backend"})," and ",(0,s.jsx)(n.code,{children:"samba_backend"})," modules in the ",(0,s.jsx)(n.code,{children:"backend"})," package, which is responsible for initializing the backend objects for the system. It is also called by the ",(0,s.jsx)(n.code,{children:"__init__"})," function in the ",(0,s.jsx)(n.code,{children:"frontend_manager"})," module in the ",(0,s.jsx)(n.code,{children:"frontend"})," package, which is responsible for initializing the frontend manager object for the system."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"nodomain_backend"})," module uses this function to get the SID for the local machine, while the ",(0,s.jsx)(n.code,{children:"samba_backend"})," module uses this function to get the SID for a given domain and username. The ",(0,s.jsx)(n.code,{children:"frontend_manager"})," module uses this function to get the SID for the current user."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Analysis"}),":\nThe function ",(0,s.jsx)(n.code,{children:"get_sid"})," is defined in the ",(0,s.jsx)(n.code,{children:"sid.py"})," module in the ",(0,s.jsx)(n.code,{children:"util"})," package. It takes three parameters: ",(0,s.jsx)(n.code,{children:"domain"}),", ",(0,s.jsx)(n.code,{children:"username"}),", and ",(0,s.jsx)(n.code,{children:"is_machine"}),". The ",(0,s.jsx)(n.code,{children:"domain"})," parameter is a string representing the name of the domain to which the user belongs. If not provided, the function assumes the user is a local user. The ",(0,s.jsx)(n.code,{children:"username"})," parameter is a string representing the name of the user. The ",(0,s.jsx)(n.code,{children:"is_machine"})," parameter is a boolean value indicating whether the user is a machine or not."]}),"\n",(0,s.jsxs)(n.p,{children:["The function first initializes the ",(0,s.jsx)(n.code,{children:"sid"})," variable to ",(0,s.jsx)(n.code,{children:"'local-{}'.format(username)"}),". This is the SID for a local user."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"domain"})," parameter is provided, the function tries to get the SID of the user using ",(0,s.jsx)(n.code,{children:"wbinfo_getsid(domain, username)"}),". If this fails, the function logs the exception using the ",(0,s.jsx)(n.code,{children:"log()"})," function and returns the initialized ",(0,s.jsx)(n.code,{children:"sid"})," variable."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"domain"})," parameter is not provided, the function gets the UID of the user using ",(0,s.jsx)(n.code,{children:"pwd.getpwnam(username)"})," if the ",(0,s.jsx)(n.code,{children:"is_machine"})," parameter is False. If the ",(0,s.jsx)(n.code,{children:"is_machine"})," parameter is True, the UID is set to 0. The SID for a local user is then created"]}),"\n",(0,s.jsx)(n.h2,{id:"classdef-issuingauthority",children:"ClassDef IssuingAuthority"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IssuingAuthority"}),": The function of IssuingAuthority is to define a set of predefined issuing authorities using an enumeration (Enum) in Python."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SECURITY_NULL_SID_AUTHORITY: 0"}),"\n",(0,s.jsx)(n.li,{children:"SECURITY_WORLD_SID_AUTHORITY: 1"}),"\n",(0,s.jsx)(n.li,{children:"SECURITY_LOCAL_SID_AUTHORITY: 2"}),"\n",(0,s.jsx)(n.li,{children:"SECURITY_CREATOR_SID_AUTHORITY: 3"}),"\n",(0,s.jsx)(n.li,{children:"SECURITY_NON_UNIQUE_AUTHORITY: 4"}),"\n",(0,s.jsx)(n.li,{children:"SECURITY_NT_AUTHORITY: 5"}),"\n",(0,s.jsx)(n.li,{children:"SECURITY_RESOURCE_MANAGER_AUTHORITY: 9"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe IssuingAuthority class is a subclass of Enum and defines several predefined issuing authorities. These issuing authorities are used to identify the security context of a principal (user, computer, or group) in a Windows environment. The class does not contain any methods, but it provides a named constant for each issuing authority."]}),"\n",(0,s.jsx)(n.p,{children:"The validate_issuing_authority function in the sid.py module uses the IssuingAuthority class to validate the issuing authority number. It takes an integer value as input and returns the corresponding IssuingAuthority constant. If the input value is not a valid issuing authority number, the function raises a ValueError."}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of how to use the IssuingAuthority class and the validate_issuing_authority function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from gpoa.util.sid import IssuingAuthority, validate_issuing_authority\n\n# Get the IssuingAuthority constant by name\nprint(IssuingAuthority.SECURITY_NT_AUTHORITY)  # Output: <IssuingAuthority.SECURITY_NT_AUTHORITY: 5>\n\n# Validate and get the IssuingAuthority constant by number\nprint(validate_issuing_authority(5))  # Output: <IssuingAuthority.SECURITY_NT_AUTHORITY: 5>\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Always use the predefined constants from the IssuingAuthority class instead of hardcoding the issuing authority numbers in your code. This approach improves code readability and maintainability."}),"\n",(0,s.jsx)(n.li,{children:"The validate_issuing_authority function is used to ensure that the input issuing authority number is valid. Use this function to validate the input before using it in your code."}),"\n",(0,s.jsx)(n.li,{children:"The IssuingAuthority class and the validate_issuing_authority function are part of the gpoa.util.sid module, which provides utilities for working with security identifiers (SIDs) in a Windows environment. Make sure to import the necessary modules and classes when using these components in your code."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"classdef-sidrevision",children:"ClassDef SidRevision"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SidRevision"}),": The function of SidRevision is to define a enumerated type for SID revision numbers."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"FIRST: The first SID revision number, assigned a value of 1."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe SidRevision class is a enumerated type that defines a set of symbolic names for possible SID revision numbers. It currently only defines one revision number, FIRST, which is assigned a value of 1. This class can be used to create a revision number by specifying its corresponding symbolic name, and it can also be used to validate whether a given revision number is valid."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"validate_sid_revision"})," function in the ",(0,s.jsx)(n.code,{children:"sid.py"})," module uses the SidRevision class to validate a given revision number. It takes a revision number as input, converts it to an instance of the SidRevision class using the ",(0,s.jsx)(n.code,{children:"int"})," function, and returns the resulting instance. If the input revision number is not a valid symbolic name in the SidRevision class, the ",(0,s.jsx)(n.code,{children:"int"})," function will raise a ",(0,s.jsx)(n.code,{children:"ValueError"})," exception. Therefore, this function can be used to validate whether a given revision number is valid."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The SidRevision class is an enumerated type, and its attributes are the only valid revision numbers. Any other revision number is not valid."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"validate_sid_revision"})," function can be used to validate a given revision number and raise a ",(0,s.jsx)(n.code,{children:"ValueError"})," exception if the revision number is not valid."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"classdef-wellknown21rid",children:"ClassDef WellKnown21RID"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WellKnown21RID"}),"\n: The WellKnown2"]}),"\n",(0,s.jsx)(n.h2,{id:"classdef-wellknown32rid",children:"ClassDef WellKnown32RID"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WellKnown32RID"}),"\n: The WellKnown32RID class is an enumeration that defines various security identifiers (SIDs) for well-known security principals in Windows systems. Each SID is represented by a constant with a descriptive name and a value that corresponds to the RID (Relative Identifier) of the SID."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Attributes"})}),"\n",(0,s.jsx)(n.p,{children:"\xb7 BUILTIN_ADMINISTRATORS: 544\n\xb7 BUILTIN_USERS: 545\n\xb7 BUILTIN_GUESTS:"}),"\n",(0,s.jsx)(n.h2,{id:"classdef-firstsubauthority",children:"ClassDef FirstSubAuthority"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FirstSubAuthority"}),"\n: The function of FirstSubAuthority is to define a set of enumerated constants that are used to represent various well-known security identifiers (SIDs) in a Windows operating system."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attributes"}),"\n\xb7 SECURITY_DIALUP_RID: Integer constant with value 1, representing the SID for Dialup users.\n\xb7 SECURITY_NETWORK_RID: Integer constant with value 2, representing the SID for Network users.\n\xb7 SECURITY_BATCH_RID: Integer constant with value 3, representing the SID for Batch users.\n\xb7 SECURITY_INTERACTIVE_RID: Integer constant with value 4, representing the SID for Interactive users.\n\xb7 SECURITY_LOGON_IDS_RID: Integer constant with value 5, representing the SID for Logon IDs.\n\xb7 SECURITY_SERVICE_RID: Integer constant with value 6, representing the SID for Service users.\n\xb7 SECURITY_ANONYMOUS_LOGON_RID: Integer constant with value 7, representing the SID for Anonymous users.\n\xb7 SECURITY_PROXY_RID: Integer constant with value 8, representing the SID for Proxy users.\n\xb7 SECURITY_ENTERPRISE_CONTROLLERS_RID: Integer constant with value 9, representing the SID for Enterprise Controllers.\n\xb7 SECURITY_PRINCIPAL_SELF_RID: Integer constant with value 10, representing the SID for the Principal Self.\n\xb7 SECURITY_AUTHENTICATED_USER_RID: Integer constant with value 11, representing the SID for Authenticated Users.\n\xb7 SECURITY_RESTRICTED_CODE_RID: Integer constant with value 12, representing the SID for Restricted Codes.\n\xb7 SECURITY_TERMINAL_SERVER_RID: Integer constant with value 13, representing the SID for Terminal Server users.\n\xb7 SECURITY_LOCAL_SYSTEM_RID: Integer constant with value 18, representing the SID for Local System.\n\xb7 SECURITY_NT_NON_UNIQUE: Integer constant with value 21, representing the SID for NT Non-Unique.\n\xb7 SECURITY_BUILTIN_DOMAIN_RID: Integer constant with value 32, representing the SID for the Built-in Domain.\n\xb7 SECURITY_WRITE_RESTRICTED_CODE_RID: Integer constant with value 33, representing the SID for Write Restricted Codes."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),"\nThe FirstSubAuthority class is an enumeration that defines a set of constants used to represent various well-known security identifiers (SIDs) in a Windows operating system. Each constant is assigned a unique integer value that corresponds to a specific SID. These SIDs are used to control access to resources and objects within the operating system."]}),"\n",(0,s.jsx)(n.p,{children:"The enumeration includes constants for various types of users, such as Dialup, Network, Batch, Interactive, Logon IDs, Service, Anonymous, Proxy, Enterprise Controllers, Principal Self, Authenticated Users, Restricted Codes, Terminal Server, Local System, NT Non-Unique, Built-in Domain, and Write Restricted Codes."}),"\n",(0,s.jsx)(n.p,{children:"Each constant is defined using the Enum class, which allows for the creation of enumerated types in Python. The integer value associated with each constant is defined using the equal sign (=) followed by the integer value."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),"\nWhen using the FirstSubAuthority enumeration, it is important to note that the enumeration is case-sensitive. Therefore, it is recommended to use uppercase letters when referencing the enumeration constants."]}),"\n",(0,s.jsx)(n.p,{children:"Additionally, it is important to note that the enumeration constants are integers and can be used in mathematical operations. However, it is recommended to use the enumeration constants instead of the integer values to improve code readability and maintainability."}),"\n",(0,s.jsx)(n.p,{children:"Finally, it is important to note that the enumeration constants are specific to the Windows operating system and may not be applicable to other operating systems."}),"\n",(0,s.jsx)(n.h2,{id:"classdef-secondsubauthority",children:"ClassDef SecondSubAuthority"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SecondSubAuthority"}),"\n: The function of SecondSubAuthority is to define a enumerated type for various security identifiers (SIDs) related to secondary sub-authorities in a Windows domain."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attributes"}),"\n\xb7 DOMAIN_ALIAS_RID_ADMINS: This attribute represents the relative identifier (RID) for the built-in administrators group in a Windows domain."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),"\nThe ",(0,s.jsx)(n.code,{children:"SecondSubAuthority"})," class is a subclass of ",(0,s.jsx)(n.code,{children:"Enum"})," from the built-in ",(0,s.jsx)(n.code,{children:"enum"})," module in Python. It is used to define a set of named constants for various security identifiers (SIDs) related to secondary sub-authorities in a Windows domain."]}),"\n",(0,s.jsxs)(n.p,{children:["In this specific implementation, the ",(0,s.jsx)(n.code,{children:"SecondSubAuthority"})," class has only one attribute, ",(0,s.jsx)(n.code,{children:"DOMAIN_ALIAS_RID_ADMINS"}),", which is assigned the value ",(0,s.jsx)(n.code,{children:"544"}),". This value corresponds to the RID for the built-in administrators group in a Windows domain, which is a well-known security principal."]}),"\n",(0,s.jsx)(n.p,{children:"By defining these SID-related constants as enumerated types, the code promotes readability, maintainability, and self-documentation. It reduces the likelihood of errors due to hard-coded magic numbers and makes it easier to modify or extend the SID values in the future."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Be cautious when defining new attributes for the ",(0,s.jsx)(n.code,{children:"SecondSubAuthority"})," class, as they should correspond to valid RIDs for secondary sub-authorities in a Windows domain."]}),"\n",(0,s.jsxs)(n.li,{children:["Always refer to the ",(0,s.jsx)(n.code,{children:"DOMAIN_ALIAS_RID_ADMINS"})," attribute by its name rather than its value (",(0,s.jsx)(n.code,{children:"544"}),") to ensure code readability and maintainability."]}),"\n",(0,s.jsx)(n.li,{children:"When working with SIDs and security principles in a Windows domain, consult the official Microsoft documentation to ensure compatibility and correctness."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"functiondef-validate_issuing_authorityia_num",children:"FunctionDef validate_issuing_authority(ia_num)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"validate_issuing_authority"}),": The function of validate_issuing_authority is to validate the issuing authority number for a security identifier (SID) in a Windows environment. It checks if the input integer value matches any of the predefined issuing authority constants provided by the IssuingAuthority class."]}),"\n",(0,s.jsx)(n.h2,{id:"functiondef-validate_sid_revisionrevnum",children:"FunctionDef validate_sid_revision(revnum)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"validate_sid_revision"}),": The function of validate_sid_revision is to validate a given SID revision number by converting it to an instance of the SidRevision enumerated type."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),":\n\xb7 revnum: The revision number to be validated, specified as an integer."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe validate_sid_revision function takes a revision number as input, which is expected to be an integer. It then converts this input to an instance of the SidRevision enumerated type using the int() function. This enumerated type is defined in the SidRevision class, and it currently only includes one revision number, FIRST, which is assigned a value of 1."]}),"\n",(0,s.jsx)(n.p,{children:"The SidRevision class is used to define a set of symbolic names for possible SID revision numbers, and it can be used to validate whether a given revision number is valid. If the input revision number is not a valid symbolic name in the SidRevision class, the int() function will raise a ValueError exception. Therefore, this function can be used to validate whether a given revision number is valid."}),"\n",(0,s.jsx)(n.p,{children:"The validate_sid_revision function is called by the is_sid() function in the sid.py module to validate the revision version of a given SID. The is_sid() function checks whether the SID is a valid SID by validating its format, revision version, and issuing authority. The validate_sid_revision() function is used to validate the revision version of the SID."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The SidRevision class is an enumerated type, and its attributes are the only valid revision numbers. Any other revision number is not valid."}),"\n",(0,s.jsx)(n.li,{children:"The validate_sid_revision() function can be used to validate a given revision number and raise a ValueError exception if the revision number is not valid."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"functiondef-is_sidsid",children:"FunctionDef is_sid(sid)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"is_sid"}),": The function of is_sid is to determine if a given string represents a valid Security Identifier (SID) in a Windows environment."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),":\n\xb7 sid: A string representing a SID to be validated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe is_sid function validates the format, revision version, and issuing authority of a given SID. It first checks if the SID starts with the letter 'S', which is the format required for a SID. Then, it validates the revision version of the SID by calling the validate_sid_revision function and passing the revision number as an integer. The validate_sid_revision function converts the revision number to an instance of the SidRevision enumerated type, which is used to validate the revision number."]}),"\n",(0,s.jsx)(n.p,{children:"After validating the revision version, the is_sid function validates the issuing authority of the SID by calling the validate_issuing_authority function and passing the issuing authority number as an integer. The validate_issuing_authority function checks if the input integer value matches any of the predefined issuing authority constants provided by the IssuingAuthority class."}),"\n",(0,s.jsx)(n.p,{children:"If the SID passes all these validations, the is_sid function returns True, indicating that the SID is valid. Otherwise, it returns False, indicating that the SID is invalid."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The is_sid function only validates SIDs in a Windows environment."}),"\n",(0,s.jsx)(n.li,{children:"The validate_sid_revision function and validate_issuing_authority function are called by the is_sid function to validate the revision version and issuing authority of the SID, respectively."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output Example"}),":\nIf the input SID is 'S-1-5-21-1234567890-1234567890-1234567890-12345', the is_sid function will return True, indicating that the SID is valid. If the input SID is 'S-1-5-21-1234567890-1234567890-1234567890-1234', the is_sid function will return False, indicating that the SID is invalid."]}),"\n",(0,s.jsx)(n.h2,{id:"functiondef-sid2descrsid",children:"FunctionDef sid2descr(sid)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sid2descr"}),": The function of sid2descr is to convert a Security Identifier (SID) to a description."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),":\n\xb7 sid: A string representing a SID."]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);