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
 * This sample demonstrates how to Deletes the storage account credential
 *
 * @summary Deletes the storage account credential
 * x-ms-original-file: specification/storSimple1200Series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/StorageAccountCredentialsDelete.json
 */
const { StorSimpleManagementClient } = require("@azure/arm-storsimple1200series");
const { DefaultAzureCredential } = require("@azure/identity");

async function storageAccountCredentialsDelete() {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const credentialName = "DummySacForSDKTest";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hAzureSDKOperations";
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const result = await client.storageAccountCredentials.beginDeleteAndWait(
    credentialName,
    resourceGroupName,
    managerName
  );
  console.log(result);
}

storageAccountCredentialsDelete().catch(console.error);
