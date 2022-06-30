/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SAPDatabaseInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WorkloadsClient } from "../workloadsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SAPDatabaseInstance,
  SAPDatabaseInstancesListNextOptionalParams,
  SAPDatabaseInstancesListOptionalParams,
  SAPDatabaseInstancesGetOptionalParams,
  SAPDatabaseInstancesGetResponse,
  SAPDatabaseInstancesCreateOptionalParams,
  SAPDatabaseInstancesCreateResponse,
  SAPDatabaseInstancesUpdateOptionalParams,
  SAPDatabaseInstancesUpdateResponse,
  SAPDatabaseInstancesDeleteOptionalParams,
  SAPDatabaseInstancesDeleteResponse,
  SAPDatabaseInstancesListResponse,
  SAPDatabaseInstancesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SAPDatabaseInstances operations. */
export class SAPDatabaseInstancesImpl implements SAPDatabaseInstances {
  private readonly client: WorkloadsClient;

  /**
   * Initialize a new instance of the class SAPDatabaseInstances class.
   * @param client Reference to the service client
   */
  constructor(client: WorkloadsClient) {
    this.client = client;
  }

  /**
   * Lists the SAP Database Instances in an SVI.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPDatabaseInstancesListOptionalParams
  ): PagedAsyncIterableIterator<SAPDatabaseInstance> {
    const iter = this.listPagingAll(
      resourceGroupName,
      sapVirtualInstanceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          sapVirtualInstanceName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPDatabaseInstancesListOptionalParams
  ): AsyncIterableIterator<SAPDatabaseInstance[]> {
    let result = await this._list(
      resourceGroupName,
      sapVirtualInstanceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        sapVirtualInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPDatabaseInstancesListOptionalParams
  ): AsyncIterableIterator<SAPDatabaseInstance> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      sapVirtualInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the SAP Database Instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param databaseInstanceName Database Instance string modeled as parameter for auto generation to
   *                             work correctly.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesGetOptionalParams
  ): Promise<SAPDatabaseInstancesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Puts the SAP Database Instance. <br><br>This will be used by service only. PUT by end user will
   * return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param databaseInstanceName Database Instance string modeled as parameter for auto generation to
   *                             work correctly.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SAPDatabaseInstancesCreateResponse>,
      SAPDatabaseInstancesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SAPDatabaseInstancesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Puts the SAP Database Instance. <br><br>This will be used by service only. PUT by end user will
   * return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param databaseInstanceName Database Instance string modeled as parameter for auto generation to
   *                             work correctly.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesCreateOptionalParams
  ): Promise<SAPDatabaseInstancesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      sapVirtualInstanceName,
      databaseInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Puts the SAP Database Instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param databaseInstanceName Database Instance string modeled as parameter for auto generation to
   *                             work correctly.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SAPDatabaseInstancesUpdateResponse>,
      SAPDatabaseInstancesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SAPDatabaseInstancesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Puts the SAP Database Instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param databaseInstanceName Database Instance string modeled as parameter for auto generation to
   *                             work correctly.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesUpdateOptionalParams
  ): Promise<SAPDatabaseInstancesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      sapVirtualInstanceName,
      databaseInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the SAP Database Instance. <br><br>This will be used by service only. Delete by end user
   * will return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param databaseInstanceName Database Instance string modeled as parameter for auto generation to
   *                             work correctly.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SAPDatabaseInstancesDeleteResponse>,
      SAPDatabaseInstancesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SAPDatabaseInstancesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the SAP Database Instance. <br><br>This will be used by service only. Delete by end user
   * will return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param databaseInstanceName Database Instance string modeled as parameter for auto generation to
   *                             work correctly.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesDeleteOptionalParams
  ): Promise<SAPDatabaseInstancesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      sapVirtualInstanceName,
      databaseInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the SAP Database Instances in an SVI.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPDatabaseInstancesListOptionalParams
  ): Promise<SAPDatabaseInstancesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sapVirtualInstanceName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    nextLink: string,
    options?: SAPDatabaseInstancesListNextOptionalParams
  ): Promise<SAPDatabaseInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sapVirtualInstanceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SAPDatabaseInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapVirtualInstanceName,
    Parameters.databaseInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SAPDatabaseInstance
    },
    201: {
      bodyMapper: Mappers.SAPDatabaseInstance
    },
    202: {
      bodyMapper: Mappers.SAPDatabaseInstance
    },
    204: {
      bodyMapper: Mappers.SAPDatabaseInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapVirtualInstanceName,
    Parameters.databaseInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SAPDatabaseInstance
    },
    201: {
      bodyMapper: Mappers.SAPDatabaseInstance
    },
    202: {
      bodyMapper: Mappers.SAPDatabaseInstance
    },
    204: {
      bodyMapper: Mappers.SAPDatabaseInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapVirtualInstanceName,
    Parameters.databaseInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResult
    },
    201: {
      bodyMapper: Mappers.OperationStatusResult
    },
    202: {
      bodyMapper: Mappers.OperationStatusResult
    },
    204: {
      bodyMapper: Mappers.OperationStatusResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapVirtualInstanceName,
    Parameters.databaseInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SAPDatabaseInstanceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapVirtualInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SAPDatabaseInstanceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.sapVirtualInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
