/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters class.
 * @constructor
 * DataLakeAnalytics DataLakeAnalyticsAccount information.
 * @member {string} password Gets or sets the password for the secret to pass
 * in
 * 
 * @member {string} [uri] Gets or sets the URI identifier for the secret in
 * the format <hostname>:<port>
 * 
 */
export interface DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters {
    password: string;
    uri?: string;
}

/**
 * @class
 * Initializes a new instance of the CatalogItem class.
 * @constructor
 * A Data Lake Analytics catalog item.
 * @member {string} [computeAccountName] Gets or sets the name of the Data
 * Lake Analytics account.
 * 
 * @member {uuid} [version] Gets or sets the version of the catalog item.
 * 
 */
export interface CatalogItem {
    computeAccountName?: string;
    version?: string;
}

/**
 * @class
 * Initializes a new instance of the USqlSecret class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL secret item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [name] Gets or sets the name of the secret.
 * 
 * @member {date} [creationTime] Gets or sets the creation time of the
 * credential object. This is the only information returned about a secret
 * from a GET.
 * 
 * @member {string} [uri] Gets or sets the URI identifier for the secret in
 * the format <hostname>:<port>
 * 
 * @member {string} [password] Gets or sets the password for the secret to
 * pass in
 * 
 */
export interface USqlSecret extends CatalogItem {
    databaseName?: string;
    name?: string;
    creationTime?: Date;
    uri?: string;
    password?: string;
}

/**
 * @class
 * Initializes a new instance of the USqlExternalDataSource class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL external datasource item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [name] Gets or sets the name of the external data source.
 * 
 * @member {string} [provider] Gets or sets the name of the provider for the
 * external data source.
 * 
 * @member {string} [providerString] Gets or sets the name of the provider
 * string for the external data source.
 * 
 * @member {array} [pushdownTypes] Gets or sets the list of types to push down
 * from the external data source.
 * 
 */
export interface USqlExternalDataSource extends CatalogItem {
    databaseName?: string;
    name?: string;
    provider?: string;
    providerString?: string;
    pushdownTypes?: string[];
}

/**
 * @class
 * Initializes a new instance of the USqlCredential class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL credential item.
 * @member {string} [databaseName] Gets or sets the name of the database the
 * credential is in.
 * 
 * @member {string} [identity] Gets or sets the name of the secret associated
 * with the credential.
 * 
 * @member {string} [name] Gets or sets the name of the credential.
 * 
 * @member {string} [userName] Gets or sets the user name associated with the
 * credential.
 * 
 */
export interface USqlCredential extends CatalogItem {
    databaseName?: string;
    identity?: string;
    name?: string;
    userName?: string;
}

/**
 * @class
 * Initializes a new instance of the USqlProcedure class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL procedure item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [schemaName] Gets or sets the name of the schema
 * associated with this procedure and database.
 * 
 * @member {string} [name] Gets or sets the name of the procedure.
 * 
 * @member {string} [definition] Gets or sets the defined query of the
 * procedure.
 * 
 */
export interface USqlProcedure extends CatalogItem {
    databaseName?: string;
    schemaName?: string;
    name?: string;
    definition?: string;
}

/**
 * @class
 * Initializes a new instance of the USqlTableColumn class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL table column item.
 * @member {string} [name] Gets or sets the name of the column in the table.
 * 
 * @member {string} [type] Gets or sets the object type of the specified
 * column (such as System.String).
 * 
 */
export interface USqlTableColumn {
    name?: string;
    type?: string;
}

/**
 * @class
 * Initializes a new instance of the USqlDirectedColumn class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL directed column item.
 * @member {string} [name] Gets or sets the name of the index in the table.
 * 
 * @member {boolean} [descending] Gets or sets the switch indicating if the
 * index is descending or not.
 * 
 */
export interface USqlDirectedColumn {
    name?: string;
    descending?: boolean;
}

/**
 * @class
 * Initializes a new instance of the USqlDistributionInfo class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL distribution information object.
 * @member {number} [type] Gets or sets the type of this distribution.
 * 
 * @member {array} [keys] Gets or sets the list of directed columns in the
 * distribution
 * 
 * @member {number} [count] Gets or sets the count of indices using this
 * distribution.
 * 
 * @member {number} [dynamicCount] Gets or sets the dynamic count of indices
 * using this distribution.
 * 
 */
export interface USqlDistributionInfo {
    type?: number;
    keys?: USqlDirectedColumn[];
    count?: number;
    dynamicCount?: number;
}

/**
 * @class
 * Initializes a new instance of the USqlIndex class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL table index item.
 * @member {string} [name] Gets or sets the name of the index in the table.
 * 
 * @member {array} [indexKeys] Gets or sets the list of directed columns in
 * the index
 * 
 * @member {array} [columns] Gets or sets the list of columns in the index
 * 
 * @member {object} [distributionInfo] Gets or sets the distributions info of
 * the index
 * 
 * @member {number} [distributionInfo.type] Gets or sets the type of this
 * distribution.
 * 
 * @member {array} [distributionInfo.keys] Gets or sets the list of directed
 * columns in the distribution
 * 
 * @member {number} [distributionInfo.count] Gets or sets the count of indices
 * using this distribution.
 * 
 * @member {number} [distributionInfo.dynamicCount] Gets or sets the dynamic
 * count of indices using this distribution.
 * 
 * @member {uuid} [partitionFunction] Gets or sets partition function ID for
 * the index.
 * 
 * @member {array} [partitionKeyList] Gets or sets the list of partion keys in
 * the index
 * 
 * @member {array} [streamNames] Gets or sets the list of full paths to the
 * streams that contain this index in the DataLake account.
 * 
 * @member {boolean} [isColumnstore] Gets or sets the switch indicating if
 * this index is a columnstore index.
 * 
 * @member {number} [indexId] Gets or sets the ID of this index within the
 * table.
 * 
 * @member {boolean} [isUnique] Gets or sets the switch indicating if this
 * index is a unique index.
 * 
 */
export interface USqlIndex {
    name?: string;
    indexKeys?: USqlDirectedColumn[];
    columns?: string[];
    distributionInfo?: USqlDistributionInfo;
    partitionFunction?: string;
    partitionKeyList?: string[];
    streamNames?: string[];
    isColumnstore?: boolean;
    indexId?: number;
    isUnique?: boolean;
}

/**
 * @class
 * Initializes a new instance of the DdlName class.
 * @constructor
 * A Data Lake Analytics DDL name item.
 * @member {string} [firstPart] Gets or sets the name of the table associated
 * with this database and schema.
 * 
 * @member {string} [secondPart] Gets or sets the name of the table associated
 * with this database and schema.
 * 
 * @member {string} [thirdPart] Gets or sets the name of the table associated
 * with this database and schema.
 * 
 * @member {string} [server] Gets or sets the name of the table associated
 * with this database and schema.
 * 
 */
export interface DdlName {
    firstPart?: string;
    secondPart?: string;
    thirdPart?: string;
    server?: string;
}

/**
 * @class
 * Initializes a new instance of the EntityId class.
 * @constructor
 * A Data Lake Analytics catalog entity identifier object.
 * @member {object} [name] Gets or sets the name of the external table
 * associated with this database, schema and table.
 * 
 * @member {string} [name.firstPart] Gets or sets the name of the table
 * associated with this database and schema.
 * 
 * @member {string} [name.secondPart] Gets or sets the name of the table
 * associated with this database and schema.
 * 
 * @member {string} [name.thirdPart] Gets or sets the name of the table
 * associated with this database and schema.
 * 
 * @member {string} [name.server] Gets or sets the name of the table
 * associated with this database and schema.
 * 
 * @member {uuid} [version] Gets or sets the version of the external data
 * source.
 * 
 */
export interface EntityId {
    name?: DdlName;
    version?: string;
}

/**
 * @class
 * Initializes a new instance of the ExternalTable class.
 * @constructor
 * A Data Lake Analytics catalog external table item.
 * @member {string} [tableName] Gets or sets the name of the table associated
 * with this database and schema.
 * 
 * @member {object} [dataSource] Gets or sets the data source associated with
 * this external table.
 * 
 * @member {object} [dataSource.name] Gets or sets the name of the external
 * table associated with this database, schema and table.
 * 
 * @member {string} [dataSource.name.firstPart] Gets or sets the name of the
 * table associated with this database and schema.
 * 
 * @member {string} [dataSource.name.secondPart] Gets or sets the name of the
 * table associated with this database and schema.
 * 
 * @member {string} [dataSource.name.thirdPart] Gets or sets the name of the
 * table associated with this database and schema.
 * 
 * @member {string} [dataSource.name.server] Gets or sets the name of the
 * table associated with this database and schema.
 * 
 * @member {uuid} [dataSource.version] Gets or sets the version of the
 * external data source.
 * 
 */
export interface ExternalTable {
    tableName?: string;
    dataSource?: EntityId;
}

/**
 * @class
 * Initializes a new instance of the USqlTable class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL table item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [schemaName] Gets or sets the name of the schema
 * associated with this table and database.
 * 
 * @member {string} [name] Gets or sets the name of the table.
 * 
 * @member {array} [columnList] Gets or sets the list of columns in this table
 * 
 * @member {array} [indexList] Gets or sets the list of indices in this table
 * 
 * @member {array} [partitionKeyList] Gets or sets the list of partition keys
 * in the table
 * 
 * @member {object} [externalTable] Gets or sets the external table associated
 * with the table.
 * 
 * @member {string} [externalTable.tableName] Gets or sets the name of the
 * table associated with this database and schema.
 * 
 * @member {object} [externalTable.dataSource] Gets or sets the data source
 * associated with this external table.
 * 
 * @member {object} [externalTable.dataSource.name] Gets or sets the name of
 * the external table associated with this database, schema and table.
 * 
 * @member {string} [externalTable.dataSource.name.firstPart] Gets or sets the
 * name of the table associated with this database and schema.
 * 
 * @member {string} [externalTable.dataSource.name.secondPart] Gets or sets
 * the name of the table associated with this database and schema.
 * 
 * @member {string} [externalTable.dataSource.name.thirdPart] Gets or sets the
 * name of the table associated with this database and schema.
 * 
 * @member {string} [externalTable.dataSource.name.server] Gets or sets the
 * name of the table associated with this database and schema.
 * 
 * @member {uuid} [externalTable.dataSource.version] Gets or sets the version
 * of the external data source.
 * 
 */
export interface USqlTable extends CatalogItem {
    databaseName?: string;
    schemaName?: string;
    name?: string;
    columnList?: USqlTableColumn[];
    indexList?: USqlIndex[];
    partitionKeyList?: string[];
    externalTable?: ExternalTable;
}

/**
 * @class
 * Initializes a new instance of the USqlView class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL view item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [schemaName] Gets or sets the name of the schema
 * associated with this view and database.
 * 
 * @member {string} [name] Gets or sets the name of the view.
 * 
 * @member {string} [definition] Gets or sets the defined query of the view.
 * 
 */
export interface USqlView extends CatalogItem {
    databaseName?: string;
    schemaName?: string;
    name?: string;
    definition?: string;
}

/**
 * @class
 * Initializes a new instance of the USqlTablePartition class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL table partition item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [schemaName] Gets or sets the name of the schema
 * associated with this table partition and database.
 * 
 * @member {string} [name] Gets or sets the name of the table partition.
 * 
 * @member {number} [indexId] Gets or sets the index ID for this partition.
 * 
 * @member {array} [label] Gets or sets the list of labels associated with
 * this partition.
 * 
 */
export interface USqlTablePartition extends CatalogItem {
    databaseName?: string;
    schemaName?: string;
    name?: string;
    indexId?: number;
    label?: string[];
}

/**
 * @class
 * Initializes a new instance of the USqlTableStatistics class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL table statistics item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [schemaName] Gets or sets the name of the schema
 * associated with this table and database.
 * 
 * @member {string} [tableName] Gets or sets the name of the table.
 * 
 * @member {string} [name] Gets or sets the name of the table statistics.
 * 
 * @member {string} [userStatName] Gets or sets the name of the user
 * statistics.
 * 
 * @member {string} [statDataPath] Gets or sets the path to the statistics
 * data.
 * 
 * @member {date} [createTime] Gets or sets the creation time of the
 * statistics.
 * 
 * @member {date} [updateTime] Gets or sets the last time the statistics were
 * updated.
 * 
 * @member {boolean} [isUserCreated] Gets or sets the switch indicating if
 * these statistics are user created.
 * 
 * @member {boolean} [isAutoCreated] Gets or sets the switch indicating if
 * these statistics are automatically created.
 * 
 * @member {boolean} [hasFilter] Gets or sets the switch indicating if these
 * statistics have a filter.
 * 
 * @member {string} [filterDefinition] Gets or sets the filter definition for
 * the statistics.
 * 
 * @member {array} [colNames] Gets or sets the list of column names associated
 * with these statistics.
 * 
 */
export interface USqlTableStatistics extends CatalogItem {
    databaseName?: string;
    schemaName?: string;
    tableName?: string;
    name?: string;
    userStatName?: string;
    statDataPath?: string;
    createTime?: Date;
    updateTime?: Date;
    isUserCreated?: boolean;
    isAutoCreated?: boolean;
    hasFilter?: boolean;
    filterDefinition?: string;
    colNames?: string[];
}

/**
 * @class
 * Initializes a new instance of the USqlType class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL type item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [schemaName] Gets or sets the name of the schema
 * associated with this table and database.
 * 
 * @member {string} [name] Gets or sets the name of type for this type.
 * 
 * @member {string} [typeFamily] Gets or sets the type family for this type.
 * 
 * @member {string} [cSharpName] Gets or sets the C# name for this type.
 * 
 * @member {string} [fullCSharpName] Gets or sets the fully qualified C# name
 * for this type.
 * 
 * @member {number} [systemTypeId] Gets or sets the system type ID for this
 * type.
 * 
 * @member {number} [userTypeId] Gets or sets the user type ID for this type.
 * 
 * @member {number} [schemaId] Gets or sets the schema ID for this type.
 * 
 * @member {number} [principalId] Gets or sets the principal ID for this type.
 * 
 * @member {boolean} [isNullable] Gets or sets the the switch indicating if
 * this type is nullable.
 * 
 * @member {boolean} [isUserDefined] Gets or sets the the switch indicating if
 * this type is user defined.
 * 
 * @member {boolean} [isAssemblyType] Gets or sets the the switch indicating
 * if this type is an assembly type.
 * 
 * @member {boolean} [isTableType] Gets or sets the the switch indicating if
 * this type is a table type.
 * 
 * @member {boolean} [isComplexType] Gets or sets the the switch indicating if
 * this type is a complex type.
 * 
 */
export interface USqlType extends CatalogItem {
    databaseName?: string;
    schemaName?: string;
    name?: string;
    typeFamily?: string;
    cSharpName?: string;
    fullCSharpName?: string;
    systemTypeId?: number;
    userTypeId?: number;
    schemaId?: number;
    principalId?: number;
    isNullable?: boolean;
    isUserDefined?: boolean;
    isAssemblyType?: boolean;
    isTableType?: boolean;
    isComplexType?: boolean;
}

/**
 * @class
 * Initializes a new instance of the USqlTableValuedFunction class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL table valued function item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [schemaName] Gets or sets the name of the schema
 * associated with this database.
 * 
 * @member {string} [name] Gets or sets the name of the table valued function.
 * 
 * @member {string} [definition] Gets or sets the definition of the table
 * valued function.
 * 
 */
export interface USqlTableValuedFunction extends CatalogItem {
    databaseName?: string;
    schemaName?: string;
    name?: string;
    definition?: string;
}

/**
 * @class
 * Initializes a new instance of the USqlAssemblyFileInfo class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL assembly file information item.
 * @member {string} [type] Gets or sets the assembly file type. Possible
 * values include: 'Assembly', 'Resource'
 * 
 * @member {string} [originalPath] Gets or sets the the original path to the
 * assembly file.
 * 
 * @member {string} [contentPath] Gets or sets the the content path to the
 * assembly file.
 * 
 */
export interface USqlAssemblyFileInfo {
    type?: string;
    originalPath?: string;
    contentPath?: string;
}

/**
 * @class
 * Initializes a new instance of the USqlAssemblyDependencyInfo class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL dependency information item.
 * @member {object} [entityId] Gets or sets the EntityId of the dependency.
 * 
 * @member {object} [entityId.name] Gets or sets the name of the external
 * table associated with this database, schema and table.
 * 
 * @member {string} [entityId.name.firstPart] Gets or sets the name of the
 * table associated with this database and schema.
 * 
 * @member {string} [entityId.name.secondPart] Gets or sets the name of the
 * table associated with this database and schema.
 * 
 * @member {string} [entityId.name.thirdPart] Gets or sets the name of the
 * table associated with this database and schema.
 * 
 * @member {string} [entityId.name.server] Gets or sets the name of the table
 * associated with this database and schema.
 * 
 * @member {uuid} [entityId.version] Gets or sets the version of the external
 * data source.
 * 
 */
export interface USqlAssemblyDependencyInfo {
    entityId?: EntityId;
}

/**
 * @class
 * Initializes a new instance of the USqlAssembly class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL Assembly.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [name] Gets or sets the name of the assembly.
 * 
 * @member {string} [clrName] Gets or sets the name of the CLR.
 * 
 * @member {boolean} [isVisible] Gets or sets the switch indicating if this
 * assembly is visible or not.
 * 
 * @member {boolean} [isUserDefined] Gets or sets the switch indicating if
 * this assembly is user defined or not.
 * 
 * @member {array} [files] Gets or sets the list of files associated with the
 * assembly
 * 
 * @member {array} [dependencies] Gets or sets the list of dependencies
 * associated with the assembly
 * 
 */
export interface USqlAssembly extends CatalogItem {
    databaseName?: string;
    name?: string;
    clrName?: string;
    isVisible?: boolean;
    isUserDefined?: boolean;
    files?: USqlAssemblyFileInfo[];
    dependencies?: USqlAssemblyDependencyInfo[];
}

/**
 * @class
 * Initializes a new instance of the USqlAssemblyClr class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL assembly CLR item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [name] Gets or sets the name of the assembly.
 * 
 * @member {string} [clrName] Gets or sets the name of the CLR.
 * 
 */
export interface USqlAssemblyClr extends CatalogItem {
    databaseName?: string;
    name?: string;
    clrName?: string;
}

/**
 * @class
 * Initializes a new instance of the USqlSchema class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL schema item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [name] Gets or sets the name of the schema.
 * 
 */
export interface USqlSchema extends CatalogItem {
    databaseName?: string;
    name?: string;
}

/**
 * @class
 * Initializes a new instance of the USqlDatabase class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL database item.
 * @member {string} [name] Gets or sets the name of the database.
 * 
 */
export interface USqlDatabase extends CatalogItem {
    name?: string;
}

/**
 * @class
 * Initializes a new instance of the CatalogItemList class.
 * @constructor
 * A Data Lake Analytics catalog item list.
 * @member {number} [count] Gets or sets the count of items in the list.
 * 
 * @member {string} [nextLink] Gets or sets the link to the next page of
 * results.
 * 
 */
export interface CatalogItemList {
    count?: number;
    nextLink?: string;
}