"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[2055],{4103:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=n(4848),i=n(8453);const o={},r=void 0,c={id:"gpoa/util/dbus",title:"dbus",description:"ClassDef dbus_runner",source:"@site/docs/gpoa/util/dbus.md",sourceDirName:"gpoa/util",slug:"/gpoa/util/dbus",permalink:"/docs/gpoa/util/dbus",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"config",permalink:"/docs/gpoa/util/config"},next:{title:"exceptions",permalink:"/docs/gpoa/util/exceptions"}},d={},h=[{value:"ClassDef dbus_runner",id:"classdef-dbus_runner",level:2},{value:"FunctionDef <strong>init</strong>(self, username)",id:"functiondef-initself-username",level:3},{value:"FunctionDef check_dbus(self)",id:"functiondef-check_dbusself",level:3},{value:"FunctionDef run(self)",id:"functiondef-runself",level:3},{value:"FunctionDef start_gpupdate_user",id:"functiondef-start_gpupdate_user",level:2},{value:"FunctionDef is_oddjobd_gpupdate_accessible",id:"functiondef-is_oddjobd_gpupdate_accessible",level:2},{value:"FunctionDef print_dbus_result(result)",id:"functiondef-print_dbus_resultresult",level:2},{value:"ClassDef dbus_session",id:"classdef-dbus_session",level:2},{value:"FunctionDef <strong>init</strong>(self)",id:"functiondef-initself",level:3},{value:"FunctionDef get_connection_pid(self, connection)",id:"functiondef-get_connection_pidself-connection",level:3}];function a(e){const s={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"classdef-dbus_runner",children:"ClassDef dbus_runner"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"dbus_runner"}),": The ",(0,t.jsx)(s.code,{children:"dbus_runner"})," class is responsible for running the Red Hat Global Policy Operating Agent (GPOA) via D-Bus, optionally supplying a username to trigger GPOA for a specific user running in a sysadmin context."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"attributes"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"_redhat_bus_name"}),": The Red Hat D-Bus bus name for GPOA."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"_basealt_bus_name"}),": The alternative D-Bus bus name for GPOA."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"_redhat_interface_name"}),": The Red Hat D-Bus interface name for GPOA."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"_basealt_interface_name"}),": The alternative D-Bus interface name for GPOA."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"_object_path"}),": The D-Bus object path for GPOA."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"_synchronous_timeout"}),": The synchronous timeout for D-Bus calls, set to 10 minutes."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"username"}),": The optional username to run GPOA for a specific user."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"system_bus"}),": The D-Bus system bus."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"bus_name"}),": The D-Bus bus name to use for GPOA."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"interface_name"}),": The D-Bus interface name to use for GPOA."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":\nThe ",(0,t.jsx)(s.code,{children:"dbus_runner"})," class initializes with an optional ",(0,t.jsx)(s.code,{children:"username"})," parameter. It creates a D-Bus system bus and sets the initial ",(0,t.jsx)(s.code,{children:"bus_name"})," and ",(0,t.jsx)(s.code,{children:"interface_name"})," to the alternative values. The ",(0,t.jsx)(s.code,{children:"check_dbus"})," method is then called to verify if the D-Bus service is available on the specified bus. If not, it falls back to the Red Hat bus."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"run"})," method is responsible for running GPOA via D-Bus. If a ",(0,t.jsx)(s.code,{children:"username"})," is provided, it checks if the current user is root and calls the ",(0,t.jsx)(s.code,{children:"gpupdatefor"})," method on the D-Bus interface. If not, it calls the ",(0,t.jsx)(s.code,{children:"gpupdate"})," method for the computer. If no ",(0,t.jsx)(s.code,{children:"username"})," is provided, it calls the ",(0,t.jsx)(s.code,{children:"gpupdate_computer"})," method directly."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"dbus_runner"})," class assumes that the D-Bus service is available on the system."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"gpupdatefor"})," method requires superuser privileges."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"gpupdate"})," and ",(0,t.jsx)(s.code,{children:"gpupdate_computer"})," methods are used when the current user is not root."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Output Example"}),":\nThe output of the ",(0,t.jsx)(s.code,{children:"run"})," method would depend on the specific GPOA D-Bus methods' return values. It may include success or error messages, as well as any relevant data returned by the methods."]}),"\n",(0,t.jsxs)(s.h3,{id:"functiondef-initself-username",children:["FunctionDef ",(0,t.jsx)(s.strong,{children:"init"}),"(self, username)"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.strong,{children:"init"})}),": The function of ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.strong,{children:"init"})})," is to initialize the dbus_runner object with an optional username parameter."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"parameters"}),":\n\xb7 ",(0,t.jsx)(s.strong,{children:"username"})," (optional): This parameter is used to specify the username for accessing the D-Bus. If not provided, the default system bus will be used."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"__init__"})," function initializes the dbus_runner object by setting the ",(0,t.jsx)(s.code,{children:"username"})," attribute with the provided parameter or None if not provided. It then creates a ",(0,t.jsx)(s.code,{children:"system_bus"})," object using the ",(0,t.jsx)(s.code,{children:"dbus.SystemBus()"})," method, which represents the system message bus."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"bus_name"})," and ",(0,t.jsx)(s.code,{children:"interface_name"})," attributes are set to the Redhat specific bus and interface names, respectively, using the ",(0,t.jsx)(s.code,{children:"_basealt_bus_name"})," and ",(0,t.jsx)(s.code,{children:"_basealt_interface_name"})," attributes. These attributes are defined elsewhere in the code and are used to specify the bus and interface names required for accessing the D-Bus."]}),"\n",(0,t.jsxs)(s.p,{children:["Finally, the ",(0,t.jsx)(s.code,{children:"check_dbus"})," function is called to ensure that the system bus has the required bus and interface names. If the required bus name is not available on the system bus, the function switches to an alternative privileged operations bus. This is done to ensure that the dbus_runner object has the necessary permissions to access the D-Bus."]}),"\n",(0,t.jsxs)(s.p,{children:["Overall, the ",(0,t.jsx)(s.code,{children:"__init__"})," function initializes the dbus_runner object and sets up the necessary attributes and permissions for accessing the D-Bus."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"check_dbus"})," function may raise a ",(0,t.jsx)(s.code,{children:"DBusException"})," if the specified bus is not available on the system bus. If this exception is not due to the service being unknown, it will be propagated up and can be caught and handled by the calling function."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"username"})," parameter is optional and if not provided, the default system bus will be used."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"functiondef-check_dbusself",children:"FunctionDef check_dbus(self)"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"check_dbus"}),": The function of check_dbus is to check the availability of the specified DBus on the system bus and, if not available, switch to an alternative privileged operations bus."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"The function check_dbus first tries to access the specified bus_name on the system_bus. If the bus is available, it returns without doing anything. If the bus is not available, it raises a DBusException. If the exception is not due to the service being unknown, it is propagated up. If the service is unknown, the function sets the bus_name to the Redhat specific bus name and the interface_name to the Redhat specific interface name. It then tries to access the new bus_name on the system_bus."}),"\n",(0,t.jsxs)(s.p,{children:["This function is used in the ",(0,t.jsx)(s.strong,{children:"gpoa/util/dbus.py/dbus_runner/__init__"})," function to ensure that the system_bus has the required bus_name and interface_name. If the required bus_name is not available on the system_bus, the function switches to an alternative privileged operations bus."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),": None"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Output Example"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"The output of this function is not visible to the user as it does not return any value. However, if the function encounters an exception, it will be propagated up and can be caught and handled by the calling function."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"functiondef-runself",children:"FunctionDef run(self)"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"run"}),": The function of run is to execute a gpupdate command using the D-Bus interface, with different variations depending on whether the current process has root permissions and whether a username is provided."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"parameters"}),":\n\xb7 self: The instance of the dbus_runner class that the method is called on."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"The run function first checks if the username attribute has been set on the instance of the dbus_runner class. If it has, it logs the username and proceeds to check if the current process has root permissions using the is_root() function."}),"\n",(0,t.jsx)(s.p,{children:"If the current process has root permissions, the function calls the gpupdatefor method on the system bus with the provided username as an argument. If the method call is successful, the function prints the result using the print_dbus_result function. If the method call raises a DBusException, the function logs the error message and re-raises the exception."}),"\n",(0,t.jsx)(s.p,{children:"If the current process does not have root permissions, the function calls the gpupdate method on the system bus with no arguments. If the method call is successful, the function prints the result using the print_dbus_result function. If the method call raises a DBusException, the function logs the error message and re-raises the exception."}),"\n",(0,t.jsx)(s.p,{children:"If the username attribute has not been set on the instance of the dbus_runner class, the function calls the gpupdate_computer method on the system bus with no arguments. If the method call is successful, the function prints the result using the print_dbus_result function. If the method call raises a DBusException, the function logs the error message and re-raises the exception."}),"\n",(0,t.jsx)(s.p,{children:"The run function is used to execute a gpupdate command using the D-Bus interface. Depending on the permissions of the current process and the presence of a username attribute, different variations of the gpupdate command are executed. The function is designed to be used as a method of an instance of the dbus_runner class."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The run function relies on the is_root() function to determine if the current process has root permissions."}),"\n",(0,t.jsx)(s.li,{children:"The run function relies on the print_dbus_result function to print the result of the gpupdate command."}),"\n",(0,t.jsx)(s.li,{children:"The run function relies on the dbus library to interact with the system bus and call methods on the oddjobd service."}),"\n",(0,t.jsx)(s.li,{children:"The run function may raise a DBusException if the gpupdate command fails."}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"functiondef-start_gpupdate_user",children:"FunctionDef start_gpupdate_user"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"start_gpupdate_user"}),": The function of start_gpupdate_user is to enable and start the gpupdate-user.service at runtime. This function is necessary to perform user service start in case pam_systemd.so is not present in the PAM stack."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Parameters"}),": This function does not take any parameters."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"The function starts by defining the unit name as 'gpupdate-user.service'. It then creates a session bus object using the dbus.SessionBus() method. This session bus object is used to connect to the systemd user bus."}),"\n",(0,t.jsx)(s.p,{children:"Next, it gets the object for the systemd user bus using the get_object() method of the session bus. The object path for the systemd user bus is '/org/freedesktop/systemd1'. It then gets the interface for the systemd user bus using the dbus_interface parameter set to 'org.freedesktop.systemd1.Manager'."}),"\n",(0,t.jsx)(s.p,{children:"The function then gets the unit object for gpupdate-user.service using the GetUnit() method of the systemd user interface. It also starts the unit using the StartUnit() method of the systemd user interface. The 'replace' argument passed to the StartUnit() method ensures that if the unit is already active, it will be restarted."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"This function should be called when it is necessary to perform user service start in case pam_systemd.so is not present in the PAM stack."}),"\n",(0,t.jsx)(s.li,{children:"This function enables and starts the gpupdate-user.service at runtime, which may have implications for other parts of the system. It is important to ensure that the service is stopped when it is no longer needed."}),"\n",(0,t.jsx)(s.li,{children:"This function uses D-Bus to communicate with the systemd daemon. It is assumed that the systemd daemon is running and that the necessary D-Bus permissions are in place."}),"\n",(0,t.jsx)(s.li,{children:"This function does not return any value. It is designed to perform a specific action, rather than to return a value."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"functiondef-is_oddjobd_gpupdate_accessible",children:"FunctionDef is_oddjobd_gpupdate_accessible"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"is_oddjobd_gpupdate_accessible"}),": The function of is_oddjobd_gpupdate_accessible is to check if the 'oddjobd' service is running via systemd and if the 'oddjobd_gpupdate' interface is accessible through D-Bus. This function returns a boolean value indicating whether 'oddjobd_gpupdate' is accessible or not."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Parameters"}),": This function does not take any parameters."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["The function initializes a boolean variable ",(0,t.jsx)(s.code,{children:"oddjobd_accessible"})," to ",(0,t.jsx)(s.code,{children:"False"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["It then tries to connect to the system D-Bus using the ",(0,t.jsx)(s.code,{children:"dbus.SystemBus()"})," method."]}),"\n",(0,t.jsx)(s.li,{children:"The function gets the object for the systemd manager using the D-Bus API."}),"\n",(0,t.jsxs)(s.li,{children:["It then checks if the 'oddjobd.service' unit is available and running by calling the ",(0,t.jsx)(s.code,{children:"GetUnit()"})," method and checking the ",(0,t.jsx)(s.code,{children:"ActiveState"})," property."]}),"\n",(0,t.jsx)(s.li,{children:"If the 'oddjobd.service' unit is running, the function tries to get the object for the 'oddjobd_gpupdate' interface using the D-Bus API."}),"\n",(0,t.jsxs)(s.li,{children:["If the 'oddjobd_gpupdate' interface object is obtained successfully, the function sets ",(0,t.jsx)(s.code,{children:"oddjobd_accessible"})," to ",(0,t.jsx)(s.code,{children:"True"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"If the 'oddjobd_gpupdate' interface object cannot be obtained using the 'ru.basealt.oddjob_gpupdate' name, the function tries to obtain it using the 'com.redhat.oddjob_gpupdate' name."}),"\n",(0,t.jsxs)(s.li,{children:["Finally, the function returns the value of ",(0,t.jsx)(s.code,{children:"oddjobd_accessible"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["This function uses the D-Bus API to interact with system services. It requires the ",(0,t.jsx)(s.code,{children:"dbus"})," module to be installed and available in the Python environment."]}),"\n",(0,t.jsxs)(s.li,{children:["The function may raise a ",(0,t.jsx)(s.code,{children:"dbus.exceptions.DBusException"})," if there is an error while connecting to the D-Bus or while getting the object for the 'oddjobd.service' unit or the 'oddjobd_gpupdate' interface."]}),"\n",(0,t.jsxs)(s.li,{children:["The function may return ",(0,t.jsx)(s.code,{children:"False"})," even if the 'oddjobd.service' unit is running if the 'oddjobd_gpupdate' interface is not accessible for some reason."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Output Example"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"True"})," if 'oddjobd_gpupdate' is accessible, ",(0,t.jsx)(s.code,{children:"False"})," otherwise."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"functiondef-print_dbus_resultresult",children:"FunctionDef print_dbus_result(result)"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"print_dbus_result"}),"): The function of print_dbus_result is to print lines returned by oddjobd (called via D-Bus) to stdout."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"parameters"}),":\n\xb7 result: The result returned by the oddjobd service via D-Bus."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":"]}),"\n",(0,t.jsxs)(s.p,{children:["The function first extracts the exit code and message from the result returned by the oddjobd service. The exit code is stored in the variable ",(0,t.jsx)(s.code,{children:"exitcode"})," and the message is stored in the variable ",(0,t.jsx)(s.code,{children:"message"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Next, the function creates a dictionary ",(0,t.jsx)(s.code,{children:"logdata"})," with the exit code as the value for the key 'retcode'. This dictionary is then passed as a parameter to the ",(0,t.jsx)(s.code,{children:"log"})," function along with the message code 'D12' to log the exit code."]}),"\n",(0,t.jsx)(s.p,{children:"Finally, the function iterates over each line in the message and prints it to stdout if the line is not empty."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),": This function is used to print the result of a D-Bus call to oddjobd service. It is used to print the lines returned by the service and log the exit code."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Output Example"}),":"]}),"\n",(0,t.jsx)(s.p,{children:'The output of this function will be the lines returned by the oddjobd service printed to stdout. For example, if the service returns the lines "Line 1", "Line 2", and "Line 3", the output of this function will be:'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Line 1\nLine 2\nLine 3\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This function is called by the ",(0,t.jsx)(s.code,{children:"run"})," function in the ",(0,t.jsx)(s.code,{children:"dbus_runner"})," module of the ",(0,t.jsx)(s.code,{children:"dbus.py"})," file. The ",(0,t.jsx)(s.code,{children:"run"})," function passes the result returned by the oddjobd service to this function to print the lines returned by the service and log the exit code."]}),"\n",(0,t.jsx)(s.h2,{id:"classdef-dbus_session",children:"ClassDef dbus_session"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"dbus_session"}),": The function of dbus_session is to establish a connection with the D-Bus session bus and provide methods to interact with the D-Bus system."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"attributes"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"session_bus"}),": A ",(0,t.jsx)(s.code,{children:"dbus.SessionBus()"})," object representing the D-Bus session bus."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"session_dbus"}),": A ",(0,t.jsx)(s.code,{children:"dbus.Object"})," representing the D-Bus session bus object."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"session_iface"}),": A ",(0,t.jsx)(s.code,{children:"dbus.Interface"})," to interact with the D-Bus session bus."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"dbus_session"})," class initializes a connection with the D-Bus session bus upon instantiation. It catches any ",(0,t.jsx)(s.code,{children:"dbus.exceptions.DBusException"})," during the initialization process and raises the exception to notify the user of the failure."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"get_connection_pid"})," method takes a ",(0,t.jsx)(s.code,{children:"connection"})," parameter and returns the process ID (PID) associated with the D-Bus connection. It catches any ",(0,t.jsx)(s.code,{children:"dbus.exceptions.DBusException"})," during the execution of the method and logs the error message. If the exception is not related to the ",(0,t.jsx)(s.code,{children:"org.freedesktop.DBus.Error.NameHasNoOwner"})," error, it raises the exception to notify the user of the failure."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"dbus_session"})," class is used in the ",(0,t.jsx)(s.code,{children:"with_privileges"})," function in the ",(0,t.jsx)(s.code,{children:"gpoa/util/system.py"})," module. The ",(0,t.jsx)(s.code,{children:"with_privileges"})," function drops the privileges of the current user and runs the D-Bus session daemon in order to make D-Bus calls. It then creates an instance of the ",(0,t.jsx)(s.code,{children:"dbus_session"})," class and calls the ",(0,t.jsx)(s.code,{children:"get_connection_pid"})," method to get the PID of the D-Bus connection."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"dbus_session"})," class should only be used after dropping the privileges of the current user and starting the D-Bus session daemon."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"get_connection_pid"})," method may raise a ",(0,t.jsx)(s.code,{children:"dbus.exceptions.DBusException"})," if there is an error interacting with the D-Bus system."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Output Example"}),":"]}),"\n",(0,t.jsxs)(s.p,{children:["Assuming the ",(0,t.jsx)(s.code,{children:"with_privileges"})," function is called with the ",(0,t.jsx)(s.code,{children:"username"})," parameter set to ",(0,t.jsx)(s.code,{children:"'user'"})," and the ",(0,t.jsx)(s.code,{children:"func"})," parameter set to a function that does not raise any exceptions, the ",(0,t.jsx)(s.code,{children:"get_connection_pid"})," method will return the PID of the D-Bus connection. For example, the output may look like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:">>> session = dbus_session()\n>>> session.get_connection_pid('ca.desrt.dconf')\n1234\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Here, ",(0,t.jsx)(s.code,{children:"1234"})," is the PID of the D-Bus connection."]}),"\n",(0,t.jsxs)(s.h3,{id:"functiondef-initself",children:["FunctionDef ",(0,t.jsx)(s.strong,{children:"init"}),"(self)"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.strong,{children:"init"})}),": The function of ",(0,t.jsx)(s.strong,{children:"init"})," is to initialize the dbus_session object and establish a connection to the system message bus using the D-Bus library."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"init"})," function initializes the dbus_session object by establishing a connection to the system message bus using the D-Bus library. It first imports the dbus module and creates a SessionBus object using the dbus.SessionBus() function. This SessionBus object represents a connection to the system message bus."]}),"\n",(0,t.jsx)(s.p,{children:"Next, the function calls the get_object() method on the SessionBus object, passing in the bus name 'org.freedesktop.DBus' and the object path '/org/freedesktop/DBus' as arguments. This returns a proxy object that represents the D-Bus interface of the system message bus."}),"\n",(0,t.jsx)(s.p,{children:"The function then calls the get_interface() method on the proxy object, passing in the interface name 'org.freedesktop.DBus' as an argument. This returns a new object that provides the methods and properties of the 'org.freedesktop.DBus' interface."}),"\n",(0,t.jsx)(s.p,{children:"Finally, the function assigns the SessionBus object, the proxy object, and the interface object to the instance variables self.session_bus, self.session_dbus, and self.session_iface, respectively."}),"\n",(0,t.jsx)(s.p,{children:"The function is enclosed in a try-except block to handle any exceptions that may occur during the initialization process. If a dbus.exceptions.DBusException is raised, the function logs the error message using the log() function and re-raises the exception."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),": It is important to ensure that the D-Bus library is installed and available on the system before using this module. Additionally, the system message bus must be running for the connection to be established successfully. If the initialization process fails, the function will raise a dbus.exceptions.DBusException, which can be caught and handled by the calling code."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"functiondef-get_connection_pidself-connection",children:"FunctionDef get_connection_pid(self, connection)"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"get_connection_pid"}),": The function of get_connection_pid is to retrieve the Unix Process ID (PID) of a given DBus connection."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"parameters"}),":\n\xb7 ",(0,t.jsx)(s.strong,{children:"connection"}),": A DBus connection object."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code Description"}),":"]}),"\n",(0,t.jsxs)(s.p,{children:["The function first initializes a variable ",(0,t.jsx)(s.code,{children:"pid"})," to -1, which will hold the PID of the DBus connection. It then tries to get the PID of the connection using the ",(0,t.jsx)(s.code,{children:"GetConnectionUnixProcessID"})," method of the ",(0,t.jsx)(s.code,{children:"session_iface"})," object, passing the ",(0,t.jsx)(s.code,{children:"connection"})," object as an argument. If the method call is successful, the PID is stored in the ",(0,t.jsx)(s.code,{children:"pid"})," variable and logged using the ",(0,t.jsx)(s.code,{children:"log"})," function with the message code 'D57'. If the method call raises a ",(0,t.jsx)(s.code,{children:"DBusException"}),", the function checks if the exception is due to the name of the connection not having an owner. If the name does not have an owner, the function logs the connection object using the ",(0,t.jsx)(s.code,{children:"log"})," function with the message code 'D58' and returns -1. If the exception is due to any other reason, the function logs the error message using the ",(0,t.jsx)(s.code,{children:"log"})," function with the message code 'E32' and raises the exception."]}),"\n",(0,t.jsxs)(s.p,{children:["The function returns the value of the ",(0,t.jsx)(s.code,{children:"pid"})," variable, which is the PID of the DBus connection if the method call was successful, or -1 if the name of the connection did not have an owner."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The function assumes that the ",(0,t.jsx)(s.code,{children:"session_iface"})," object has been initialized and has the necessary methods and properties to interact with DBus connections."]}),"\n",(0,t.jsxs)(s.li,{children:["The function logs the PID and connection object using the ",(0,t.jsx)(s.code,{children:"log"})," function, which is assumed to be implemented elsewhere in the codebase."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Output Example"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"The output of the function is an integer representing the PID of the DBus connection. For example, if the PID of the connection is 1234, the function will return 1234. If the name of the connection does not have an owner, the function will return -1."}),"\n",(0,t.jsx)(s.hr,{})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var t=n(6540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);