/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the status of the most recent synchronization between the configuration database and the Git repository.
 *
 * @summary Gets the status of the most recent synchronization between the configuration database and the Git repository.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementTenantAccessSyncState.json
 */
async function apiManagementTenantAccessSyncState() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const configurationName = "configuration";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.tenantConfiguration.getSyncState(
    resourceGroupName,
    serviceName,
    configurationName
  );
  console.log(result);
}

apiManagementTenantAccessSyncState().catch(console.error);