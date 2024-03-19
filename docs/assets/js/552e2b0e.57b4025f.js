"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[9987],{9379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=n(4848),o=n(8453);const i={},r=void 0,c={id:"gpoa/frontend/appliers/control",title:"control",description:"FunctionDef controlsubst(pregname)",source:"@site/docs/gpoa/frontend/appliers/control.md",sourceDirName:"gpoa/frontend/appliers",slug:"/gpoa/frontend/appliers/control",permalink:"/gpupdate-docs/docs/gpoa/frontend/appliers/control",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"applier_frontend",permalink:"/gpupdate-docs/docs/gpoa/frontend/applier_frontend"},next:{title:"envvar",permalink:"/gpupdate-docs/docs/gpoa/frontend/appliers/envvar"}},l={},h=[{value:"FunctionDef control_subst(preg_name)",id:"functiondef-control_substpreg_name",level:2},{value:"ClassDef control",id:"classdef-control",level:2},{value:"FunctionDef <strong>init</strong>(self, name, value)",id:"functiondef-initself-name-value",level:3},{value:"FunctionDef _query_control_values(self)",id:"functiondef-_query_control_valuesself",level:3},{value:"FunctionDef _map_control_status(self, int_status)",id:"functiondef-_map_control_statusself-int_status",level:3},{value:"FunctionDef get_control_name(self)",id:"functiondef-get_control_nameself",level:3},{value:"FunctionDef get_control_status(self)",id:"functiondef-get_control_statusself",level:3},{value:"FunctionDef set_control_status(self)",id:"functiondef-set_control_statusself",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"functiondef-control_substpreg_name",children:"FunctionDef control_subst(preg_name)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"control_subst"}),": The function of control_subst is to provide a workaround for control names that cannot be used in PReg/ADMX files by replacing them with valid control names."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),":\n\xb7 preg_name: A string representing the name of the control that needs to be replaced."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),":\nThe function initializes an empty dictionary, control_triggers, which maps the invalid control names to their valid counterparts. The keys in the dictionary are the invalid control names, and the values are the valid control names."]}),"\n",(0,s.jsx)(t.p,{children:"The function then checks if the input parameter, preg_name, is present in the control_triggers dictionary. If it is, the function replaces the invalid control name with its valid counterpart by returning the value associated with the key in the control_triggers dictionary. Otherwise, the function returns the original input parameter, preg_name."}),"\n",(0,s.jsxs)(t.p,{children:["This function is used in the ",(0,s.jsx)(t.strong,{children:"gpoa/frontend/appliers/control.py/control"})," package to initialize the control_name attribute of the control class. The control_name attribute is set to the value returned by the control_subst function, which ensures that the control name is valid and can be used in PReg/ADMX files."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),":\nIt is important to note that the control_subst function only replaces specific invalid control names with their valid counterparts. If the input parameter is not one of the invalid control names present in the control_triggers dictionary, the function returns the original input parameter. Therefore, it is essential to ensure that the input parameter is one of the invalid control names present in the dictionary to get the desired output."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":\nIf the input parameter is 'dvd_rw-format', the function returns 'dvd+rw-format'.\nIf the input parameter is 'dvd_rw-mediainfo', the function returns 'dvd+rw-mediainfo'.\nIf the input parameter is 'dvd_rw-booktype', the function returns 'dvd+rw-booktype'.\nIf the input parameter is not present in the control_triggers dictionary, the function returns the original input parameter."]}),"\n",(0,s.jsx)(t.h2,{id:"classdef-control",children:"ClassDef control"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"control"}),": The ",(0,s.jsx)(t.code,{children:"control"})," class is used to interact with system controls, which are configurable entities that can be queried and modified."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"attributes"}),":\n\xb7 ",(0,s.jsx)(t.code,{children:"name"}),": A string representing the name of the control.\n\xb7 ",(0,s.jsx)(t.code,{children:"value"}),": An integer or string representing the value of the control."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,s.jsx)(t.code,{children:"control"})," class initializes with a name and a value, which can be either an integer or a string. It checks the type of the value and raises an exception if it is not an integer or a string. The ",(0,s.jsx)(t.code,{children:"control_name"})," attribute is created by applying a substitution function to the name. The ",(0,s.jsx)(t.code,{children:"possible_values"})," attribute is populated by querying the possible values of the control using the ",(0,s.jsx)(t.code,{children:"_query_control_values"})," method. This method executes a shell command to get the list of possible values."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"_map_control_status"})," method is used to get the string value of a control by its numeric index. It tries to access the index in the ",(0,s.jsx)(t.code,{children:"possible_values"})," list and returns the corresponding string if it exists. Otherwise, it logs an error."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"get_control_name"})," method returns the name of the control. The ",(0,s.jsx)(t.code,{children:"get_control_status"})," method returns the current status of the control by executing a shell command."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"set_control_status"})," method sets the status of the control. If the value is an integer, it tries to get the string value by index using the ",(0,s.jsx)(t.code,{children:"_map_control_status"})," method. If the value is a string, it checks if it is in the ",(0,s.jsx)(t.code,{children:"possible_values"})," list. If the value is valid, it logs the action and executes a shell command to set the status of the control. Otherwise, it logs an error."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"control"})," class is used in the ",(0,s.jsx)(t.code,{children:"run"})," method of the ",(0,s.jsx)(t.code,{children:"control_applier"})," class in the ",(0,s.jsx)(t.code,{children:"control_applier.py"})," module. The ",(0,s.jsx)(t.code,{children:"run"})," method iterates over a list of control settings, creates ",(0,s.jsx)(t.code,{children:"control"})," objects for each setting, and sets the status of each control using the ",(0,s.jsx)(t.code,{children:"set_control_status"})," method."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"control"})," class is also used in the ",(0,s.jsx)(t.code,{children:"test_control_with_int"}),", ",(0,s.jsx)(t.code,{children:"test_control_int_out_of_range"}),", and ",(0,s.jsx)(t.code,{children:"test_control_with_str"})," methods of the ",(0,s.jsx)(t.code,{children:"ControlTestCase"})," class in the ",(0,s.jsx)(t.code,{children:"test_controls.py"})," module. These methods test the behavior of the ",(0,s.jsx)(t.code,{children:"control"})," class with different types of control values."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"control"})," class relies on the ",(0,s.jsx)(t.code,{children:"/usr/sbin/control"})," shell command to query and modify system controls. Make sure this command is available and has the necessary permissions."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"control"})," class assumes that the ",(0,s.jsx)(t.code,{children:"control_subst"})," function is defined and available. Make sure this function is defined and works correctly."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"control"})," class assumes that the ",(0,s.jsx)(t.code,{children:"log"})," function is defined and available. Make sure this function is defined and works correctly."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# Create a control object with name 'sshd-gssapi-auth' and value 1\ntest_control = control('sshd-gssapi-auth', 1)\n\n# Get the name of the control\nprint(test_control.get_control_name())  # Output: 'sshd-gssapi-auth'\n\n# Get the current status of the control\nprint(test_control.get_control_status())  # Output: '1'\n\n# Set the status of the control\ntest_control.set_control_status()\n\n# The actual effect on the system depends on the specific control and its possible values\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"functiondef-initself-name-value",children:["FunctionDef ",(0,s.jsx)(t.strong,{children:"init"}),"(self, name, value)"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.strong,{children:"init"})}),": The function of ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.strong,{children:"init"})})," is to initialize the control object with a name and a value, and to check the validity of the value based on the possible values obtained by querying the control."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),":\n\xb7 ",(0,s.jsx)(t.strong,{children:"name"}),": A string representing the name of the control. This name is used to query the possible values of the control and to replace any invalid control names with valid counterparts using the ",(0,s.jsx)(t.code,{children:"control_subst"})," function.\n\xb7 ",(0,s.jsx)(t.strong,{children:"value"}),": An integer or a string representing the value of the control. This value is checked for validity based on the possible values obtained by querying the control."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,s.jsx)(t.code,{children:"__init__"})," function initializes the control object by first checking the type of the value parameter. If the type is not an integer or a string, an exception is raised."]}),"\n",(0,s.jsxs)(t.p,{children:["Next, the function replaces any invalid control names with valid counterparts by calling the ",(0,s.jsx)(t.code,{children:"control_subst"})," function with the name parameter. The result is stored in the ",(0,s.jsx)(t.code,{children:"control_name"})," attribute of the object."]}),"\n",(0,s.jsxs)(t.p,{children:["The function then sets the ",(0,s.jsx)(t.code,{children:"control_value"})," attribute of the object to the value parameter."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"possible_values"})," attribute of the object is then obtained by calling the ",(0,s.jsx)(t.code,{children:"_query_control_values"})," function with no arguments. This function queries the possible values of the control and returns them as a list. If the function is unable to query the possible values, an exception is raised."]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, the function checks the validity of the ",(0,s.jsx)(t.code,{children:"control_value"})," attribute by checking if it is present in the ",(0,s.jsx)(t.code,{children:"possible_values"})," list. If it is not, an exception is raised."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Relation with Callers"}),":\nThe ",(0,s.jsx)(t.code,{children:"__init__"})," function calls the ",(0,s.jsx)(t.code,{children:"control_subst"})," and ",(0,s.jsx)(t.code,{children:"_query_control_values"})," functions to replace any invalid control names with valid counterparts and to obtain the possible values of the control, respectively. These functions are defined in the same module as the ",(0,s.jsx)(t.code,{children:"__init__"})," function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),":\nIt is important to note that the ",(0,s.jsx)(t.code,{children:"__init__"})," function assumes that the ",(0,s.jsx)(t.code,{children:"control_subst"})," and ",(0,s.jsx)(t.code,{children:"_query_control_values"})," functions are defined and function as expected. Additionally, the function assumes that the control binary is located at ",(0,s.jsx)(t.code,{children:"/usr/sbin/control"})," and that it supports the 'list' command."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"__init__"})," function is called when a new control object is created, and it ensures that the object is initialized with a valid name and value. If any errors occur during initialization, an exception is raised."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"functiondef-_query_control_valuesself",children:"FunctionDef _query_control_values(self)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"_query_control_values"})}),": The function of ",(0,s.jsx)(t.code,{children:"_query_control_values"})," is to query possible values from the control in order to perform a check of the parameter passed to the constructor."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),":\nThe function initializes an empty list ",(0,s.jsx)(t.code,{children:"values"})," to store the possible values of the control. It then creates a list ",(0,s.jsx)(t.code,{children:"popen_call"})," containing the path of the control binary, the name of the control, and the 'list' command. This list is used to call the control binary with the 'list' command using the ",(0,s.jsx)(t.code,{children:"subprocess.Popen"})," function. The ",(0,s.jsx)(t.code,{children:"stdout"})," and ",(0,s.jsx)(t.code,{children:"stderr"})," of the process are set to ",(0,s.jsx)(t.code,{children:"subprocess.PIPE"})," to capture the output and errors respectively."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"proc.stdout.readline().decode('utf-8').split()"})," line reads the first line of the output, decodes it from bytes to string, and splits it into a list of strings which are stored in the ",(0,s.jsx)(t.code,{children:"values"})," list. The first line of the output is expected to contain the possible values of the control."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"proc.stderr.readline().decode('utf-8')"})," line reads the first line of the error output, decodes it from bytes to string. If there is any error, it raises a ",(0,s.jsx)(t.code,{children:"ValueError"})," with the error message."]}),"\n",(0,s.jsxs)(t.p,{children:["The process is then waited to complete using ",(0,s.jsx)(t.code,{children:"proc.wait()"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The function finally returns the ",(0,s.jsx)(t.code,{children:"values"})," list containing the possible values of the control."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Relation with Callers"}),":\nThis function is called in the ",(0,s.jsx)(t.code,{children:"__init__"})," method of the same class to query the possible values of the control. These possible values are then checked against the value passed to the constructor to ensure that the value is valid."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),":\nThis function assumes that the control binary is located at ",(0,s.jsx)(t.code,{children:"/usr/sbin/control"})," and that it supports the 'list' command."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":\nA possible output of this function for a control named 'example' could be ",(0,s.jsx)(t.code,{children:"['value1', 'value2', 'value3']"}),"."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"functiondef-_map_control_statusself-int_status",children:"FunctionDef _map_control_status(self, int_status)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"_map_control_status"})}),": The function of ",(0,s.jsx)(t.code,{children:"_map_control_status"})," is to get the control's string value by providing a numeric index."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),":"]}),"\n",(0,s.jsxs)(t.p,{children:["\xb7 ",(0,s.jsx)(t.code,{children:"self"}),": The instance of the class to which this method belongs."]}),"\n",(0,s.jsxs)(t.p,{children:["\xb7 ",(0,s.jsx)(t.code,{children:"int_status"}),": An integer representing the index of the control's string value."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),":"]}),"\n",(0,s.jsxs)(t.p,{children:["The method ",(0,s.jsx)(t.code,{children:"_map_control_status"})," is defined within the ",(0,s.jsx)(t.code,{children:"control"})," class and is used to retrieve the string value of a control based on the provided numeric index. It first attempts to access the ",(0,s.jsx)(t.code,{children:"possible_values"})," attribute of the class instance using the provided index. If the index is not valid, an ",(0,s.jsx)(t.code,{children:"IndexError"})," exception is raised, and the function logs an error message using the ",(0,s.jsx)(t.code,{children:"log"})," function with the error code 'E41'. If the index is valid, the corresponding string value is returned."]}),"\n",(0,s.jsxs)(t.p,{children:["This function is called by the ",(0,s.jsx)(t.code,{children:"set_control_status"})," method of the same class. The ",(0,s.jsx)(t.code,{children:"set_control_status"})," method checks if the ",(0,s.jsx)(t.code,{children:"control_value"})," attribute of the class instance is an integer. If it is, the method calls ",(0,s.jsx)(t.code,{children:"_map_control_status"})," with the ",(0,s.jsx)(t.code,{children:"control_value"})," as the argument. If the returned value is ",(0,s.jsx)(t.code,{children:"None"}),", an error message is logged using the ",(0,s.jsx)(t.code,{children:"log"})," function with the error code 'E42'."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"possible_values"})," attribute of the class instance should be a list of string values that the control can take."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"int_status"})," parameter should be a valid index for the ",(0,s.jsx)(t.code,{children:"possible_values"})," list."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"_map_control_status"})," method should only be called by the ",(0,s.jsx)(t.code,{children:"set_control_status"})," method."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.code,{children:"possible_values"})," attribute of the class instance is ",(0,s.jsx)(t.code,{children:"['ON', 'OFF']"})," and the ",(0,s.jsx)(t.code,{children:"int_status"})," parameter passed to the ",(0,s.jsx)(t.code,{children:"_map_control_status"})," method is ",(0,s.jsx)(t.code,{children:"0"}),", the method will return ",(0,s.jsx)(t.code,{children:"'ON'"}),". If the ",(0,s.jsx)(t.code,{children:"int_status"})," parameter passed to the ",(0,s.jsx)(t.code,{children:"_map_control_status"})," method is ",(0,s.jsx)(t.code,{children:"2"}),", an ",(0,s.jsx)(t.code,{children:"IndexError"})," exception will be raised, and the ",(0,s.jsx)(t.code,{children:"log"})," function will be called with the error code 'E41'."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"functiondef-get_control_nameself",children:"FunctionDef get_control_name(self)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"get_control_name"}),": The function of get_control_name is to return the name of the control."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),": The function get_control_name is a method of the control class, which can be accessed using an object of this class. It does not require any arguments and returns the attribute control_name of the object on which it is called."]}),"\n",(0,s.jsx)(t.p,{children:"Here's a breakdown of the code:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"def get_control_name(self):"})," defines the function get_control_name with the object on which it is called as the first parameter, denoted by self."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"return self.control_name"})," returns the value of the attribute control_name of the object on which the function is called."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": This function is an accessor method, which is used to retrieve the value of an object's attribute. It is a good practice to use accessor methods to access an object's attributes, rather than accessing them directly, as it allows for better encapsulation and control over the object's state."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),': If an object of the control class has been created with the control_name attribute set to "button", then calling the get_control_name function on that object would return the string "button". For example:']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'control_obj = control()\ncontrol_obj.control_name = "button"\nprint(control_obj.get_control_name())  # Output: button\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"functiondef-get_control_statusself",children:"FunctionDef get_control_status(self)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"get_control_status"}),"\uff1aThe function of get_control_status is to retrieve the current status value of a specified control."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),"\uff1aThis function does not take any parameters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),"\uff1a"]}),"\n",(0,s.jsxs)(t.p,{children:["The function begins by initializing a variable ",(0,s.jsx)(t.code,{children:"line"})," to None, which will later hold the status value of the control."]}),"\n",(0,s.jsxs)(t.p,{children:["Next, it creates a list ",(0,s.jsx)(t.code,{children:"popen_call"})," containing the path to the control utility and the name of the control as arguments. This list will be passed to the ",(0,s.jsx)(t.code,{children:"Popen"})," function to execute the command and capture its output."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Popen"})," function is then called with the ",(0,s.jsx)(t.code,{children:"popen_call"})," list as an argument, and its ",(0,s.jsx)(t.code,{children:"stdout"})," is set to ",(0,s.jsx)(t.code,{children:"subprocess.PIPE"}),". This allows the function to capture the output of the command. The ",(0,s.jsx)(t.code,{children:"with"})," statement is used to ensure that the subprocess is properly cleaned up after it completes."]}),"\n",(0,s.jsxs)(t.p,{children:["Inside the ",(0,s.jsx)(t.code,{children:"with"})," block, the function reads the first line of the output using the ",(0,s.jsx)(t.code,{children:"readline"})," method and decodes it from bytes to a string using the 'utf-8' encoding. The newline characters are then stripped from the string using the ",(0,s.jsx)(t.code,{children:"rstrip"})," method."]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, the function returns the value of the ",(0,s.jsx)(t.code,{children:"line"})," variable, which contains the status value of the control."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),"\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["This function assumes that the control utility is located at '/usr/sbin/control'. If the location of the utility is different on your system, you will need to modify the ",(0,s.jsx)(t.code,{children:"popen_call"})," list accordingly."]}),"\n",(0,s.jsx)(t.li,{children:"The function only reads the first line of the output from the control utility. If the utility outputs multiple lines, only the first line will be captured."}),"\n",(0,s.jsx)(t.li,{children:"The function does not handle any errors that may occur when executing the command. You may want to add error handling code to ensure that the function behaves correctly in all situations."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),"\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:'Assuming the control utility returns the string "ON" as the status value, the function will return:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'"ON"'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"functiondef-set_control_statusself",children:"FunctionDef set_control_status(self)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"set_control_status"}),": The function of ",(0,s.jsx)(t.code,{children:"set_control_status"})," is to set the status of a control based on its value, which can be either an integer or a string."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"parameters"}),":"]}),"\n",(0,s.jsxs)(t.p,{children:["\xb7 ",(0,s.jsx)(t.code,{children:"self"}),": The instance of the class to which this method belongs."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Code Description"}),":"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"set_control_status"})," method is defined within the ",(0,s.jsx)(t.code,{children:"control"})," class and is used to set the status of a control based on its value. It first checks if the ",(0,s.jsx)(t.code,{children:"control_value"})," attribute of the class instance is an integer. If it is, the method calls the ",(0,s.jsx)(t.code,{children:"_map_control_status"})," method with the ",(0,s.jsx)(t.code,{children:"control_value"})," as the argument to get the corresponding string value. If the returned value is ",(0,s.jsx)(t.code,{children:"None"}),", an error message is logged using the ",(0,s.jsx)(t.code,{children:"log"})," function with the error code 'E42'. If the ",(0,s.jsx)(t.code,{children:"control_value"})," attribute is a string, the method checks if it is in the ",(0,s.jsx)(t.code,{children:"possible_values"})," list. If it is not, an error message is logged using the ",(0,s.jsx)(t.code,{children:"log"})," function with the error code 'E59'. If the ",(0,s.jsx)(t.code,{children:"control_value"})," attribute is a valid string, it is used as the status."]}),"\n",(0,s.jsxs)(t.p,{children:["After determining the status, the method logs a message using the ",(0,s.jsx)(t.code,{children:"log"})," function with the error code 'D68' and the control name and status. Then, it attempts to call the ",(0,s.jsx)(t.code,{children:"/usr/sbin/control"})," command with the control name and status as arguments. If the command fails, an error message is logged using the ",(0,s.jsx)(t.code,{children:"log"})," function with the error code 'E43'."]}),"\n",(0,s.jsxs)(t.p,{children:["This method is called by the ",(0,s.jsx)(t.code,{children:"test_control_with_int"}),", ",(0,s.jsx)(t.code,{children:"test_control_int_out_of_range"}),", and ",(0,s.jsx)(t.code,{children:"test_control_with_str"})," methods in the ",(0,s.jsx)(t.code,{children:"ControlTestCase"})," class in the ",(0,s.jsx)(t.code,{children:"test_controls.py"})," file. These methods test the ",(0,s.jsx)(t.code,{children:"set_control_status"})," method with different inputs to ensure it is working correctly."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"control_value"})," attribute of the class instance should be either an integer or a string."]}),"\n",(0,s.jsxs)(t.li,{children:["If the ",(0,s.jsx)(t.code,{children:"control_value"})," attribute is an integer, it should be a valid index for the ",(0,s.jsx)(t.code,{children:"possible_values"})," list."]}),"\n",(0,s.jsxs)(t.li,{children:["If the ",(0,s.jsx)(t.code,{children:"control_value"})," attribute is a string, it should be in the ",(0,s.jsx)(t.code,{children:"possible_values"})," list."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"/usr/sbin/control"})," command should be available and executable on the system."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.code,{children:"possible_values"})," attribute of the class instance is ",(0,s.jsx)(t.code,{children:"['ON', 'OFF']"})," and the ",(0,s.jsx)(t.code,{children:"control_value"})," attribute is ",(0,s.jsx)(t.code,{children:"0"}),", the ",(0,s.jsx)(t.code,{children:"set_control_status"})," method will log a message with the error code 'D68' and the control name and status (e.g., ",(0,s.jsx)(t.code,{children:"{'control': 'control_name', 'status': 'ON'}"}),"). If the ",(0,s.jsx)(t.code,{children:"/usr/sbin/control"})," command is not available or executable, the method will log an error message with the error code 'E43' and the control name and status (e.g., ",(0,s.jsx)(t.code,{children:"{'control': 'control_name', 'status': 'ON'}"}),")."]}),"\n",(0,s.jsx)(t.hr,{})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);