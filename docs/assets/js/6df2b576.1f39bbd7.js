"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[5297],{1897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=a(4848),s=a(8453);const n={},o=void 0,r={id:"gpoa/storage/sqlite_registry_compat",title:"sqlite_registry_compat",description:"ClassDef sqliteregistrycompat",source:"@site/docs/gpoa/storage/sqlite_registry_compat.md",sourceDirName:"gpoa/storage",slug:"/gpoa/storage/sqlite_registry_compat",permalink:"/gpupdate-docs/docs/gpoa/storage/sqlite_registry_compat",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"sqlite_registry",permalink:"/gpupdate-docs/docs/gpoa/storage/sqlite_registry"},next:{title:"test_controls",permalink:"/gpupdate-docs/docs/gpoa/test/frontend/appliers/test_controls"}},c={},d=[{value:"ClassDef sqlite_registry_compat",id:"classdef-sqlite_registry_compat",level:2},{value:"FunctionDef <strong>init</strong>(self, db_cnt)",id:"functiondef-initself-db_cnt",level:3},{value:"FunctionDef metadata(self)",id:"functiondef-metadataself",level:3},{value:"FunctionDef map_imperatively(self, obj, table)",id:"functiondef-map_imperativelyself-obj-table",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"classdef-sqlite_registry_compat",children:"ClassDef sqlite_registry_compat"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"sqlite_registry_compat"}),": The function of sqlite_registry_compat is to provide a compatibility layer for working with SQLite metadata in a more straightforward manner."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"attributes"}),":\n\xb7 db_cnt: A SQLAlchemy connectable object representing a database connection."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),":\nsqlite_registry_compat is a class that simplifies the interaction with SQLite metadata by providing a more straightforward interface. It achieves this by wrapping the SQLAlchemy ORM's metadata object and providing additional functionality."]}),"\n",(0,i.jsx)(t.p,{children:"The __init__ method takes a SQLAlchemy connectable object (db_cnt) and initializes the class's metadata attribute. If the __compat__ global variable is not defined, it creates a new registry and metadata object. Otherwise, it initializes the metadata object with the provided connectable."}),"\n",(0,i.jsx)(t.p,{children:"The metadata method returns the metadata object associated with the class."}),"\n",(0,i.jsx)(t.p,{children:"The map_imperatively method maps a class to a table in the database. If the __compat__ global variable is defined, it uses the mapper function from SQLAlchemy to map the class to the table. Otherwise, it uses the map_imperatively method from the wrapped registry object to map the class to the table."}),"\n",(0,i.jsx)(t.p,{children:"The sqlite_registry_compat class is used in the sqlite_cache and sqlite_registry classes to manage metadata and map classes to tables. By providing a compatibility layer, it allows for easier migration between different versions of the SQLAlchemy ORM."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The __compat__ global variable is used to determine whether to use the compatibility layer or not. If you are using a version of SQLAlchemy that is compatible with the registry object, you can set __compat__ to True to use the more straightforward interface provided by sqlite_registry_compat."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Output Example"}),":\nThe output of the sqlite_registry_compat class is not a direct value but rather an object that simplifies the interaction with SQLite metadata. Here's an example of how it can be used:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from sqlalchemy import create_engine\nfrom sqlite_registry_compat import sqlite_registry_compat\n\n# create a database connection\nengine = create_engine('sqlite:///example.db')\n\n# create a sqlite_registry_compat object\nregistry = sqlite_registry_compat(engine)\n\n# get the metadata object\nmetadata = registry.metadata()\n\n# map a class to a table\nclass Example(object):\n    pass\n\nregistry.map_imperatively(Example, Table('example', metadata))\n\n# use the mapped class\nsession = Session(engine)\nexample = Example()\nsession.add(example)\nsession.commit()\n"})}),"\n",(0,i.jsx)(t.p,{children:"In this example, the sqlite_registry_compat object is used to create a metadata object and map the Example class to the example table. The mapped class can then be used to interact with the database using SQLAlchemy's ORM."}),"\n",(0,i.jsxs)(t.h3,{id:"functiondef-initself-db_cnt",children:["FunctionDef ",(0,i.jsx)(t.strong,{children:"init"}),"(self, db_cnt)"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.strong,{children:"init"})}),": The function of ",(0,i.jsx)(t.strong,{children:"init"})," is to initialize the sqlite_registry_compat object with a database connection."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"parameters"}),":\n\xb7 db_cnt: A connection object to the SQLite database."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),":\nThe __init__ function initializes the sqlite_registry_compat object with a database connection. It first checks if the __compat__ variable is defined. If not, it initializes the __registry and __metadata attributes of the object with new instances of the registry and MetaData classes, respectively. If __compat__ is defined, it initializes the __metadata attribute with a new instance of the MetaData class, passing the db_cnt parameter to it."]}),"\n",(0,i.jsx)(t.p,{children:"The __compat__ variable is likely used to determine whether to use a compatibility layer or not. If it is not defined, the code assumes that it is running in a compatibility mode and initializes the __registry and __metadata attributes accordingly. If __compat__ is defined, it means that the code is running in a non-compatibility mode, and the __metadata attribute is initialized with the db_cnt parameter."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),":\nIt is important to note that the __compat__ variable is not defined in the provided code, so it is assumed to be defined elsewhere in the codebase. Additionally, the registry and MetaData classes are also not defined in the provided code, so it is assumed that they are defined elsewhere in the codebase as well."]}),"\n",(0,i.jsx)(t.p,{children:"When initializing the sqlite_registry_compat object, it is important to pass a valid database connection object to the db_cnt parameter. If __compat__ is not defined, the __registry and __metadata attributes will be initialized with new instances of the registry and MetaData classes, respectively. If __compat__ is defined, the __metadata attribute will be initialized with a new instance of the MetaData class, passing the db_cnt parameter to it."}),"\n",(0,i.jsx)(t.p,{children:"Overall, the __init__ function is an essential part of the sqlite_registry_compat object, as it initializes the object with the necessary attributes and sets up the connection to the SQLite database."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"functiondef-metadataself",children:"FunctionDef metadata(self)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"metadata"}),": The function of metadata is to return the metadata object of the SQLite registry compatibility component."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),": The ",(0,i.jsx)(t.code,{children:"metadata"})," function is a simple method that returns the ",(0,i.jsx)(t.code,{children:"__metadata"})," attribute of the ",(0,i.jsx)(t.code,{children:"sqlite_registry_compat"})," object, which is initialized in the constructor of the ",(0,i.jsx)(t.code,{children:"sqlite_registry_compat"})," class. The ",(0,i.jsx)(t.code,{children:"__metadata"})," attribute is an instance of the ",(0,i.jsx)(t.code,{children:"sqlalchemy.MetaData"})," class, which is used to manage schema metadata for SQLAlchemy ORM."]}),"\n",(0,i.jsxs)(t.p,{children:["In the context of the ",(0,i.jsx)(t.code,{children:"sqlite_registry_compat"})," class, the ",(0,i.jsx)(t.code,{children:"__metadata"})," object is used to define the tables and columns of the SQLite database that stores the registry data. By returning the ",(0,i.jsx)(t.code,{children:"__metadata"})," object, the ",(0,i.jsx)(t.code,{children:"metadata"})," function enables other parts of the code to interact with the schema metadata and define additional tables or columns as needed."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, in the ",(0,i.jsx)(t.code,{children:"gpoa/storage/sqlite_cache.py"})," module, the ",(0,i.jsx)(t.code,{children:"metadata"})," function is called to retrieve the ",(0,i.jsx)(t.code,{children:"__metadata"})," object of the ",(0,i.jsx)(t.code,{children:"sqlite_registry_compat"})," object, which is then used to create the ",(0,i.jsx)(t.code,{children:"cache_table"})," object that stores the cached data. Similarly, in the ",(0,i.jsx)(t.code,{children:"gpoa/storage/sqlite_registry.py"})," module, the ",(0,i.jsx)(t.code,{children:"metadata"})," function is called to retrieve the ",(0,i.jsx)(t.code,{children:"__metadata"})," object, which is then used to define various tables that store registry data."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": It is important to note that the ",(0,i.jsx)(t.code,{children:"metadata"})," function does not modify the ",(0,i.jsx)(t.code,{children:"__metadata"})," object or perform any other side effects. It simply returns the current value of the ",(0,i.jsx)(t.code,{children:"__metadata"})," attribute. Therefore, it can be safely called multiple times without affecting the behavior of the ",(0,i.jsx)(t.code,{children:"sqlite_registry_compat"})," object."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Output Example"}),": Here is an example of what the output of the ",(0,i.jsx)(t.code,{children:"metadata"})," function might look like:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"<sqlalchemy.schema.MetaData at 0x12345678>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This output indicates that the ",(0,i.jsx)(t.code,{children:"metadata"})," function has returned an instance of the ",(0,i.jsx)(t.code,{children:"sqlalchemy.schema.MetaData"})," class, which can be used to define tables and columns for the SQLite database."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"functiondef-map_imperativelyself-obj-table",children:"FunctionDef map_imperatively(self, obj, table)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"map_imperatively"}),": The function of ",(0,i.jsx)(t.code,{children:"map_imperatively"})," is to map an object to a table in a database using a registry-compatible method."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"parameters"}),":\n\xb7 ",(0,i.jsx)(t.code,{children:"obj"}),": The object to be mapped.\n\xb7 ",(0,i.jsx)(t.code,{children:"table"}),": The table in the database to which the object will be mapped."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,i.jsx)(t.code,{children:"map_imperatively"})," function first checks if the ",(0,i.jsx)(t.code,{children:"__compat"})," attribute is available. If it is, then the ",(0,i.jsx)(t.code,{children:"mapper"})," function is called with the ",(0,i.jsx)(t.code,{children:"obj"})," and ",(0,i.jsx)(t.code,{children:"table"})," parameters. Otherwise, the ",(0,i.jsx)(t.code,{children:"map_imperatively"})," method of the ",(0,i.jsx)(t.code,{children:"__registry"})," attribute is called with the same parameters."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"__compat"})," attribute is an instance of the ",(0,i.jsx)(t.code,{children:"sqlite_registry_compat"})," class, which provides a registry-compatible interface for working with SQLite databases. The ",(0,i.jsx)(t.code,{children:"mapper"})," function is a method of this class that maps an object to a table in the database."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"__registry"})," attribute is an instance of the ",(0,i.jsx)(t.code,{children:"sqlite_registry"})," class, which provides a more generic interface for working with SQLite databases. The ",(0,i.jsx)(t.code,{children:"map_imperatively"})," method of this class maps an object to a table in the database using a registry-compatible method."]}),"\n",(0,i.jsxs)(t.p,{children:["By checking for the presence of the ",(0,i.jsx)(t.code,{children:"__compat"})," attribute and using the appropriate method for mapping the object to the table, the ",(0,i.jsx)(t.code,{children:"map_imperatively"})," function provides a flexible and extensible interface for working with SQLite databases in a registry-compatible manner."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),":\nThe ",(0,i.jsx)(t.code,{children:"map_imperatively"})," function is called in the ",(0,i.jsx)(t.code,{children:"__init__"})," method of the ",(0,i.jsx)(t.code,{children:"sqlite_cache"})," and ",(0,i.jsx)(t.code,{children:"sqlite_registry"})," classes. In the ",(0,i.jsx)(t.code,{children:"sqlite_cache"})," class, it is used to map a mapping object to a cache table in the database. In the ",(0,i.jsx)(t.code,{children:"sqlite_registry"})," class, it is used to map various types of registry entries to tables in the database."]}),"\n",(0,i.jsxs)(t.p,{children:["When using the ",(0,i.jsx)(t.code,{children:"map_imperatively"})," function, it is important to ensure that the ",(0,i.jsx)(t.code,{children:"obj"})," parameter is a valid object that can be mapped to a table in the database, and that the ",(0,i.jsx)(t.code,{children:"table"})," parameter is a valid table in the database. Additionally, the ",(0,i.jsx)(t.code,{children:"__compat"})," attribute must be available if the registry-compatible method of mapping the object to the table is to be used."]}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var i=a(6540);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);