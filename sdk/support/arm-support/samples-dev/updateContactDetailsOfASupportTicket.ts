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
 * This sample demonstrates how to This API allows you to update the severity level, ticket status, and your contact information in the support ticket.<br/><br/>Note: The severity levels cannot be changed if a support ticket is actively being worked upon by an Azure support engineer. In such a case, contact your support engineer to request severity update by adding a new communication using the Communications API.<br/><br/>Changing the ticket status to _closed_ is allowed only on an unassigned case. When an engineer is actively working on the ticket, send your ticket closure request by sending a note to your engineer.
 *
 * @summary This API allows you to update the severity level, ticket status, and your contact information in the support ticket.<br/><br/>Note: The severity levels cannot be changed if a support ticket is actively being worked upon by an Azure support engineer. In such a case, contact your support engineer to request severity update by adding a new communication using the Communications API.<br/><br/>Changing the ticket status to _closed_ is allowed only on an unassigned case. When an engineer is actively working on the ticket, send your ticket closure request by sending a note to your engineer.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/stable/2020-04-01/examples/UpdateContactDetailsOfSupportTicketForSubscription.json
 */
import { UpdateSupportTicket, MicrosoftSupport } from "@azure/arm-support";
import { DefaultAzureCredential } from "@azure/identity";

async function updateContactDetailsOfASupportTicket() {
  const subscriptionId = "subid";
  const supportTicketName = "testticket";
  const updateSupportTicket: UpdateSupportTicket = {
    contactDetails: {
      additionalEmailAddresses: ["tname@contoso.com", "teamtest@contoso.com"],
      country: "USA",
      firstName: "first name",
      lastName: "last name",
      phoneNumber: "123-456-7890",
      preferredContactMethod: "email",
      preferredSupportLanguage: "en-US",
      preferredTimeZone: "Pacific Standard Time",
      primaryEmailAddress: "test.name@contoso.com"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const result = await client.supportTickets.update(
    supportTicketName,
    updateSupportTicket
  );
  console.log(result);
}

updateContactDetailsOfASupportTicket().catch(console.error);
