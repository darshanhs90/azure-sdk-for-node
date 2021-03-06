/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AADObject class.
 * @constructor
 * The properties of an Active Directory object.
 *
 * @member {string} [objectId] The ID of the object.
 *
 * @member {string} [objectType] The type of AAD object.
 *
 * @member {string} [displayName] The display name of the object.
 *
 * @member {string} [userPrincipalName] The principal name of the object.
 *
 * @member {string} [mail] The primary email address of the object.
 *
 * @member {boolean} [mailEnabled] Whether the AAD object is mail-enabled.
 *
 * @member {boolean} [securityEnabled] Whether the AAD object is
 * security-enabled.
 *
 * @member {string} [signInName] The sign-in name of the object.
 *
 * @member {array} [servicePrincipalNames] A collection of service principal
 * names associated with the object.
 *
 * @member {string} [userType] The user type of the object.
 *
 */
class AADObject {
  constructor() {
  }

  /**
   * Defines the metadata of AADObject
   *
   * @returns {object} metadata of AADObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AADObject',
      type: {
        name: 'Composite',
        className: 'AADObject',
        modelProperties: {
          objectId: {
            required: false,
            serializedName: 'objectId',
            type: {
              name: 'String'
            }
          },
          objectType: {
            required: false,
            serializedName: 'objectType',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          userPrincipalName: {
            required: false,
            serializedName: 'userPrincipalName',
            type: {
              name: 'String'
            }
          },
          mail: {
            required: false,
            serializedName: 'mail',
            type: {
              name: 'String'
            }
          },
          mailEnabled: {
            required: false,
            serializedName: 'mailEnabled',
            type: {
              name: 'Boolean'
            }
          },
          securityEnabled: {
            required: false,
            serializedName: 'securityEnabled',
            type: {
              name: 'Boolean'
            }
          },
          signInName: {
            required: false,
            serializedName: 'signInName',
            type: {
              name: 'String'
            }
          },
          servicePrincipalNames: {
            required: false,
            serializedName: 'servicePrincipalNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          userType: {
            required: false,
            serializedName: 'userType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AADObject;
