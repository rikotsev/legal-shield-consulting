/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const services = /* GraphQL */ `
  query Services {
    services {
      id
      title
      description
      options {
        id
        title
        description
        price
        serviceId
      }
    }
  }
`;
export const orders = /* GraphQL */ `
  query Orders {
    orders {
      id
      address
      phone
      vatNumber
      name
      orderOptions {
        id
        orderId
        optionId
      }
    }
  }
`;
export const service = /* GraphQL */ `
  query Service($id: ID!) {
    service(id: $id) {
      id
      title
      description
      options {
        id
        title
        description
        price
        serviceId
      }
    }
  }
`;
export const order = /* GraphQL */ `
  query Order($id: ID!) {
    order(id: $id) {
      id
      address
      phone
      vatNumber
      name
      orderOptions {
        id
        orderId
        optionId
      }
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      id
      title
      description
      options {
        id
        title
        description
        price
        serviceId
      }
    }
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: TableServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      address
      phone
      vatNumber
      name
      orderOptions {
        id
        orderId
        optionId
      }
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: TableOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        phone
        vatNumber
        name
      }
      nextToken
    }
  }
`;
export const getOption = /* GraphQL */ `
  query GetOption($id: ID!, $serviceId: ID!) {
    getOption(id: $id, serviceId: $serviceId) {
      id
      title
      description
      price
      serviceId
    }
  }
`;
export const listOptions = /* GraphQL */ `
  query ListOptions(
    $filter: TableOptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        price
        serviceId
      }
      nextToken
    }
  }
`;
export const getOrderOption = /* GraphQL */ `
  query GetOrderOption($id: ID!, $orderId: ID!, $optionId: ID!) {
    getOrderOption(id: $id, orderId: $orderId, optionId: $optionId) {
      id
      orderId
      optionId
    }
  }
`;
export const listOrderOptions = /* GraphQL */ `
  query ListOrderOptions {
    listOrderOptions {
      id
      orderId
      optionId
    }
  }
`;
