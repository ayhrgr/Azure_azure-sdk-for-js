/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  EventChannel,
  EventChannelsListByPartnerNamespaceOptionalParams,
  EventChannelsGetOptionalParams,
  EventChannelsGetResponse,
  EventChannelsCreateOrUpdateOptionalParams,
  EventChannelsCreateOrUpdateResponse,
  EventChannelsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EventChannels. */
export interface EventChannels {
  /**
   * List all the event channels in a partner namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param options The options parameters.
   */
  listByPartnerNamespace(
    resourceGroupName: string,
    partnerNamespaceName: string,
    options?: EventChannelsListByPartnerNamespaceOptionalParams
  ): PagedAsyncIterableIterator<EventChannel>;
  /**
   * Get properties of an event channel.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    partnerNamespaceName: string,
    eventChannelName: string,
    options?: EventChannelsGetOptionalParams
  ): Promise<EventChannelsGetResponse>;
  /**
   * Asynchronously creates a new event channel with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param eventChannelInfo EventChannel information.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    partnerNamespaceName: string,
    eventChannelName: string,
    eventChannelInfo: EventChannel,
    options?: EventChannelsCreateOrUpdateOptionalParams
  ): Promise<EventChannelsCreateOrUpdateResponse>;
  /**
   * Delete existing event channel.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    partnerNamespaceName: string,
    eventChannelName: string,
    options?: EventChannelsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete existing event channel.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    partnerNamespaceName: string,
    eventChannelName: string,
    options?: EventChannelsDeleteOptionalParams
  ): Promise<void>;
}
