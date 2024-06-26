/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** List of deployment stacks. */
export interface DeploymentStackListResult {
  /** An array of deployment stacks. */
  value?: DeploymentStack[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Entity representing the reference to the template. */
export interface DeploymentStacksTemplateLink {
  /** The URI of the template to deploy. Use either the uri or id property, but not both. */
  uri?: string;
  /** The resource id of a Template Spec. Use either the id or uri property, but not both. */
  id?: string;
  /** The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs */
  relativePath?: string;
  /** The query string (for example, a SAS token) to be used with the templateLink URI. */
  queryString?: string;
  /** If included, must match the ContentVersion in the template. */
  contentVersion?: string;
}

/** Entity representing the reference to the deployment parameters. */
export interface DeploymentStacksParametersLink {
  /** The URI of the parameters file. */
  uri: string;
  /** If included, must match the ContentVersion in the template. */
  contentVersion?: string;
}

/** Defines the behavior of resources that are not managed immediately after the stack is updated. */
export interface DeploymentStackPropertiesActionOnUnmanage {
  /** Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state. */
  resources: DeploymentStacksDeleteDetachEnum;
  /** Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state. */
  resourceGroups?: DeploymentStacksDeleteDetachEnum;
  /** Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state. */
  managementGroups?: DeploymentStacksDeleteDetachEnum;
}

/** The debug setting. */
export interface DeploymentStacksDebugSetting {
  /** Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information that is being passed in during deployment. By logging information about the request or response, sensitive data that is retrieved through the deployment operations could potentially be exposed. */
  detailLevel?: string;
}

/** Defines how resources deployed by the deployment stack are locked. */
export interface DenySettings {
  /** denySettings Mode. */
  mode: DenySettingsMode;
  /** List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted. */
  excludedPrincipals?: string[];
  /** List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted. If the denySetting mode is set to 'denyWriteAndDelete', then the following actions are automatically appended to 'excludedActions': '*\/read' and 'Microsoft.Authorization/locks/delete'. If the denySetting mode is set to 'denyDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will be removed. */
  excludedActions?: string[];
  /** DenySettings will be applied to child scopes. */
  applyToChildScopes?: boolean;
}

/** The resource Id model. */
export interface ResourceReference {
  /**
   * The resourceId of a resource managed by the deployment stack.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** Deployment Stacks error response. */
export interface DeploymentStacksError {
  /** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
  error?: ErrorResponse;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Common properties for all Azure resources. */
export interface AzureResourceBase {
  /**
   * String Id used to locate any resource on Azure.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Type of this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Export Template specific properties of the Stack. */
export interface DeploymentStackTemplateDefinition {
  /** The template content. Use this element to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. */
  template?: Record<string, unknown>;
  /** The URI of the template. Use either the templateLink property or the template property, but not both. */
  templateLink?: DeploymentStacksTemplateLink;
}

/** The resource Id extended model. */
export interface ResourceReferenceExtended
  extends ResourceReference,
    DeploymentStacksError {}

/** The managed resource model. */
export interface ManagedResourceReference extends ResourceReference {
  /** Current management state of the resource in the deployment stack. */
  status?: ResourceStatusMode;
  /** denyAssignment settings applied to the resource. */
  denyStatus?: DenyStatusMode;
}

/** Deployment stack properties. */
export interface DeploymentStackProperties extends DeploymentStacksError {
  /** The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. */
  template?: Record<string, unknown>;
  /** The URI of the template. Use either the templateLink property or the template property, but not both. */
  templateLink?: DeploymentStacksTemplateLink;
  /** Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string. */
  parameters?: Record<string, unknown>;
  /** The URI of parameters file. Use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both. */
  parametersLink?: DeploymentStacksParametersLink;
  /** Defines the behavior of resources that are not managed immediately after the stack is updated. */
  actionOnUnmanage: DeploymentStackPropertiesActionOnUnmanage;
  /** The debug setting of the deployment. */
  debugSetting?: DeploymentStacksDebugSetting;
  /** The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}'). */
  deploymentScope?: string;
  /** Deployment stack description. */
  description?: string;
  /** Defines how resources deployed by the stack are locked. */
  denySettings: DenySettings;
  /**
   * State of the deployment stack.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: DeploymentStackProvisioningState;
  /**
   * An array of resources that were detached during the most recent update.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly detachedResources?: ResourceReference[];
  /**
   * An array of resources that were deleted during the most recent update.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deletedResources?: ResourceReference[];
  /**
   * An array of resources that failed to reach goal state during the most recent update.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly failedResources?: ResourceReferenceExtended[];
  /**
   * An array of resources currently managed by the deployment stack.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resources?: ManagedResourceReference[];
  /**
   * The resourceId of the deployment resource created by the deployment stack.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deploymentId?: string;
  /**
   * The outputs of the underlying deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly outputs?: Record<string, unknown>;
  /**
   * The duration of the deployment stack update.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly duration?: string;
}

/** Deployment stack object. */
export interface DeploymentStack extends AzureResourceBase {
  /** The location of the deployment stack. It cannot be changed after creation. It must be one of the supported Azure locations. */
  location?: string;
  /** Deployment stack resource tags. */
  tags?: { [propertyName: string]: string };
  /** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
  error?: ErrorResponse;
  /** The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. */
  template?: Record<string, unknown>;
  /** The URI of the template. Use either the templateLink property or the template property, but not both. */
  templateLink?: DeploymentStacksTemplateLink;
  /** Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string. */
  parameters?: Record<string, unknown>;
  /** The URI of parameters file. Use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both. */
  parametersLink?: DeploymentStacksParametersLink;
  /** Defines the behavior of resources that are not managed immediately after the stack is updated. */
  actionOnUnmanage?: DeploymentStackPropertiesActionOnUnmanage;
  /** The debug setting of the deployment. */
  debugSetting?: DeploymentStacksDebugSetting;
  /** The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}'). */
  deploymentScope?: string;
  /** Deployment stack description. */
  description?: string;
  /** Defines how resources deployed by the stack are locked. */
  denySettings?: DenySettings;
  /**
   * State of the deployment stack.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: DeploymentStackProvisioningState;
  /**
   * An array of resources that were detached during the most recent update.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly detachedResources?: ResourceReference[];
  /**
   * An array of resources that were deleted during the most recent update.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deletedResources?: ResourceReference[];
  /**
   * An array of resources that failed to reach goal state during the most recent update.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly failedResources?: ResourceReferenceExtended[];
  /**
   * An array of resources currently managed by the deployment stack.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resources?: ManagedResourceReference[];
  /**
   * The resourceId of the deployment resource created by the deployment stack.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deploymentId?: string;
  /**
   * The outputs of the underlying deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly outputs?: Record<string, unknown>;
  /**
   * The duration of the deployment stack update.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly duration?: string;
}

/** Defines headers for DeploymentStacks_deleteAtResourceGroup operation. */
export interface DeploymentStacksDeleteAtResourceGroupHeaders {
  location?: string;
}

/** Defines headers for DeploymentStacks_deleteAtSubscription operation. */
export interface DeploymentStacksDeleteAtSubscriptionHeaders {
  location?: string;
}

/** Defines headers for DeploymentStacks_deleteAtManagementGroup operation. */
export interface DeploymentStacksDeleteAtManagementGroupHeaders {
  location?: string;
}

/** Known values of {@link DeploymentStacksDeleteDetachEnum} that the service accepts. */
export enum KnownDeploymentStacksDeleteDetachEnum {
  /** Delete */
  Delete = "delete",
  /** Detach */
  Detach = "detach"
}

/**
 * Defines values for DeploymentStacksDeleteDetachEnum. \
 * {@link KnownDeploymentStacksDeleteDetachEnum} can be used interchangeably with DeploymentStacksDeleteDetachEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **delete** \
 * **detach**
 */
export type DeploymentStacksDeleteDetachEnum = string;

/** Known values of {@link DenySettingsMode} that the service accepts. */
export enum KnownDenySettingsMode {
  /** Authorized users are able to read and modify the resources, but cannot delete. */
  DenyDelete = "denyDelete",
  /** Authorized users can only read from a resource, but cannot modify or delete it. */
  DenyWriteAndDelete = "denyWriteAndDelete",
  /** No denyAssignments have been applied. */
  None = "none"
}

/**
 * Defines values for DenySettingsMode. \
 * {@link KnownDenySettingsMode} can be used interchangeably with DenySettingsMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **denyDelete**: Authorized users are able to read and modify the resources, but cannot delete. \
 * **denyWriteAndDelete**: Authorized users can only read from a resource, but cannot modify or delete it. \
 * **none**: No denyAssignments have been applied.
 */
export type DenySettingsMode = string;

/** Known values of {@link DeploymentStackProvisioningState} that the service accepts. */
export enum KnownDeploymentStackProvisioningState {
  /** Creating */
  Creating = "Creating",
  /** Validating */
  Validating = "Validating",
  /** Waiting */
  Waiting = "Waiting",
  /** Deploying */
  Deploying = "Deploying",
  /** Canceling */
  Canceling = "Canceling",
  /** Locking */
  Locking = "Locking",
  /** DeletingResources */
  DeletingResources = "DeletingResources",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Deleting */
  Deleting = "Deleting"
}

/**
 * Defines values for DeploymentStackProvisioningState. \
 * {@link KnownDeploymentStackProvisioningState} can be used interchangeably with DeploymentStackProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Validating** \
 * **Waiting** \
 * **Deploying** \
 * **Canceling** \
 * **Locking** \
 * **DeletingResources** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Deleting**
 */
export type DeploymentStackProvisioningState = string;

/** Known values of {@link ResourceStatusMode} that the service accepts. */
export enum KnownResourceStatusMode {
  /** This resource is managed by the deployment stack. */
  Managed = "Managed",
  /** Unable to remove the deny assignment on resource. */
  RemoveDenyFailed = "removeDenyFailed",
  /** Unable to delete the resource from Azure. The delete will be retried on the next stack deployment, or can be deleted manually. */
  DeleteFailed = "deleteFailed",
  /** No denyAssignments have been applied. */
  None = "None"
}

/**
 * Defines values for ResourceStatusMode. \
 * {@link KnownResourceStatusMode} can be used interchangeably with ResourceStatusMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Managed**: This resource is managed by the deployment stack. \
 * **removeDenyFailed**: Unable to remove the deny assignment on resource. \
 * **deleteFailed**: Unable to delete the resource from Azure. The delete will be retried on the next stack deployment, or can be deleted manually. \
 * **None**: No denyAssignments have been applied.
 */
export type ResourceStatusMode = string;

/** Known values of {@link DenyStatusMode} that the service accepts. */
export enum KnownDenyStatusMode {
  /** Authorized users are able to read and modify the resources, but cannot delete. */
  DenyDelete = "denyDelete",
  /** Resource type does not support denyAssignments. */
  NotSupported = "notSupported",
  /** denyAssignments are not supported on resources outside the scope of the deployment stack. */
  Inapplicable = "inapplicable",
  /** Authorized users can only read from a resource, but cannot modify or delete it. */
  DenyWriteAndDelete = "denyWriteAndDelete",
  /** Deny assignment has been removed by Azure due to a resource management change (management group move, etc.) */
  RemovedBySystem = "removedBySystem",
  /** No denyAssignments have been applied. */
  None = "None"
}

/**
 * Defines values for DenyStatusMode. \
 * {@link KnownDenyStatusMode} can be used interchangeably with DenyStatusMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **denyDelete**: Authorized users are able to read and modify the resources, but cannot delete. \
 * **notSupported**: Resource type does not support denyAssignments. \
 * **inapplicable**: denyAssignments are not supported on resources outside the scope of the deployment stack. \
 * **denyWriteAndDelete**: Authorized users can only read from a resource, but cannot modify or delete it. \
 * **removedBySystem**: Deny assignment has been removed by Azure due to a resource management change (management group move, etc.) \
 * **None**: No denyAssignments have been applied.
 */
export type DenyStatusMode = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link UnmanageActionResourceMode} that the service accepts. */
export enum KnownUnmanageActionResourceMode {
  /** Delete */
  Delete = "delete",
  /** Detach */
  Detach = "detach"
}

/**
 * Defines values for UnmanageActionResourceMode. \
 * {@link KnownUnmanageActionResourceMode} can be used interchangeably with UnmanageActionResourceMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **delete** \
 * **detach**
 */
export type UnmanageActionResourceMode = string;

/** Known values of {@link UnmanageActionResourceGroupMode} that the service accepts. */
export enum KnownUnmanageActionResourceGroupMode {
  /** Delete */
  Delete = "delete",
  /** Detach */
  Detach = "detach"
}

/**
 * Defines values for UnmanageActionResourceGroupMode. \
 * {@link KnownUnmanageActionResourceGroupMode} can be used interchangeably with UnmanageActionResourceGroupMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **delete** \
 * **detach**
 */
export type UnmanageActionResourceGroupMode = string;

/** Known values of {@link UnmanageActionManagementGroupMode} that the service accepts. */
export enum KnownUnmanageActionManagementGroupMode {
  /** Delete */
  Delete = "delete",
  /** Detach */
  Detach = "detach"
}

/**
 * Defines values for UnmanageActionManagementGroupMode. \
 * {@link KnownUnmanageActionManagementGroupMode} can be used interchangeably with UnmanageActionManagementGroupMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **delete** \
 * **detach**
 */
export type UnmanageActionManagementGroupMode = string;

/** Optional parameters. */
export interface DeploymentStacksListAtResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAtResourceGroup operation. */
export type DeploymentStacksListAtResourceGroupResponse = DeploymentStackListResult;

/** Optional parameters. */
export interface DeploymentStacksListAtSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAtSubscription operation. */
export type DeploymentStacksListAtSubscriptionResponse = DeploymentStackListResult;

/** Optional parameters. */
export interface DeploymentStacksListAtManagementGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAtManagementGroup operation. */
export type DeploymentStacksListAtManagementGroupResponse = DeploymentStackListResult;

/** Optional parameters. */
export interface DeploymentStacksCreateOrUpdateAtResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtResourceGroup operation. */
export type DeploymentStacksCreateOrUpdateAtResourceGroupResponse = DeploymentStack;

/** Optional parameters. */
export interface DeploymentStacksGetAtResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtResourceGroup operation. */
export type DeploymentStacksGetAtResourceGroupResponse = DeploymentStack;

/** Optional parameters. */
export interface DeploymentStacksDeleteAtResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** Flag to indicate delete rather than detach for the resources. */
  unmanageActionResources?: UnmanageActionResourceMode;
  /** Flag to indicate delete rather than detach for the resource groups. */
  unmanageActionResourceGroups?: UnmanageActionResourceGroupMode;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DeploymentStacksCreateOrUpdateAtSubscriptionOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtSubscription operation. */
export type DeploymentStacksCreateOrUpdateAtSubscriptionResponse = DeploymentStack;

/** Optional parameters. */
export interface DeploymentStacksGetAtSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtSubscription operation. */
export type DeploymentStacksGetAtSubscriptionResponse = DeploymentStack;

/** Optional parameters. */
export interface DeploymentStacksDeleteAtSubscriptionOptionalParams
  extends coreClient.OperationOptions {
  /** Flag to indicate delete rather than detach for the resources. */
  unmanageActionResources?: UnmanageActionResourceMode;
  /** Flag to indicate delete rather than detach for the resource groups. */
  unmanageActionResourceGroups?: UnmanageActionResourceGroupMode;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DeploymentStacksCreateOrUpdateAtManagementGroupOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtManagementGroup operation. */
export type DeploymentStacksCreateOrUpdateAtManagementGroupResponse = DeploymentStack;

/** Optional parameters. */
export interface DeploymentStacksGetAtManagementGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtManagementGroup operation. */
export type DeploymentStacksGetAtManagementGroupResponse = DeploymentStack;

/** Optional parameters. */
export interface DeploymentStacksDeleteAtManagementGroupOptionalParams
  extends coreClient.OperationOptions {
  /** Flag to indicate delete rather than detach for the resources. */
  unmanageActionResources?: UnmanageActionResourceMode;
  /** Flag to indicate delete rather than detach for the resource groups. */
  unmanageActionResourceGroups?: UnmanageActionResourceGroupMode;
  /** Flag to indicate delete rather than detach for the management groups. */
  unmanageActionManagementGroups?: UnmanageActionManagementGroupMode;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DeploymentStacksExportTemplateAtResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exportTemplateAtResourceGroup operation. */
export type DeploymentStacksExportTemplateAtResourceGroupResponse = DeploymentStackTemplateDefinition;

/** Optional parameters. */
export interface DeploymentStacksExportTemplateAtSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exportTemplateAtSubscription operation. */
export type DeploymentStacksExportTemplateAtSubscriptionResponse = DeploymentStackTemplateDefinition;

/** Optional parameters. */
export interface DeploymentStacksExportTemplateAtManagementGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exportTemplateAtManagementGroup operation. */
export type DeploymentStacksExportTemplateAtManagementGroupResponse = DeploymentStackTemplateDefinition;

/** Optional parameters. */
export interface DeploymentStacksListAtResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAtResourceGroupNext operation. */
export type DeploymentStacksListAtResourceGroupNextResponse = DeploymentStackListResult;

/** Optional parameters. */
export interface DeploymentStacksListAtSubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAtSubscriptionNext operation. */
export type DeploymentStacksListAtSubscriptionNextResponse = DeploymentStackListResult;

/** Optional parameters. */
export interface DeploymentStacksListAtManagementGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAtManagementGroupNext operation. */
export type DeploymentStacksListAtManagementGroupNextResponse = DeploymentStackListResult;

/** Optional parameters. */
export interface DeploymentStacksClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
