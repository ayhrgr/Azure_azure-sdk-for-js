/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Gets all Visual Studio Team Services project resources created in the specified Team Services account.
 *
 * @summary Gets all Visual Studio Team Services project resources created in the specified Team Services account.
 * x-ms-original-file: specification/visualstudio/resource-manager/Microsoft.VisualStudio/preview/2014-04-01-preview/examples/GetProjectResources_List.json
 */
import { VisualStudioResourceProviderClient } from "@azure/arm-visualstudio";
import { DefaultAzureCredential } from "@azure/identity";

async function getAListOfProjectResourcesInTheTeamServicesAccount() {
  const subscriptionId = "0de7f055-dbea-498d-8e9e-da287eedca90";
  const resourceGroupName = "VS-Example-Group";
  const rootResourceName = "ExampleAccount";
  const credential = new DefaultAzureCredential();
  const client = new VisualStudioResourceProviderClient(
    credential,
    subscriptionId
  );
  const result = await client.projects.listByResourceGroup(
    resourceGroupName,
    rootResourceName
  );
  console.log(result);
}

getAListOfProjectResourcesInTheTeamServicesAccount().catch(console.error);
