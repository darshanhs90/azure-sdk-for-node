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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the NamespaceUpdateParameter class.
 * @constructor
 * Parameters supplied to the Patch Namespace operation.
 *
 * @member {object} [tags] Resource tags
 *
 * @member {object} [sku] The sku of the created namespace
 *
 * @member {string} [sku.name] Name of this SKU. Possible values include:
 * 'Basic', 'Standard'
 *
 * @member {string} [sku.tier] The billing tier of this particular SKU.
 * Possible values include: 'Basic', 'Standard', 'Premium'
 *
 * @member {number} [sku.capacity] The EventHubs throughput units.
 *
 */
class NamespaceUpdateParameter {
  constructor() {
  }

  /**
   * Defines the metadata of NamespaceUpdateParameter
   *
   * @returns {object} metadata of NamespaceUpdateParameter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NamespaceUpdateParameter',
      type: {
        name: 'Composite',
        className: 'NamespaceUpdateParameter',
        modelProperties: {
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          }
        }
      }
    };
  }
}

module.exports = NamespaceUpdateParameter;