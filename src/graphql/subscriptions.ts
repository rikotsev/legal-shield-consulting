/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($id: ID, $title: String, $description: String) {
    onCreateService(id: $id, title: $title, description: $description) {
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
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($id: ID, $title: String, $description: String) {
    onUpdateService(id: $id, title: $title, description: $description) {
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
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($id: ID, $title: String, $description: String) {
    onDeleteService(id: $id, title: $title, description: $description) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $id: ID
    $address: String
    $phone: String
    $vatNumber: String
    $name: String
  ) {
    onCreateOrder(
      id: $id
      address: $address
      phone: $phone
      vatNumber: $vatNumber
      name: $name
    ) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $id: ID
    $address: String
    $phone: String
    $vatNumber: String
    $name: String
  ) {
    onUpdateOrder(
      id: $id
      address: $address
      phone: $phone
      vatNumber: $vatNumber
      name: $name
    ) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $id: ID
    $address: String
    $phone: String
    $vatNumber: String
    $name: String
  ) {
    onDeleteOrder(
      id: $id
      address: $address
      phone: $phone
      vatNumber: $vatNumber
      name: $name
    ) {
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
export const onCreateOption = /* GraphQL */ `
  subscription OnCreateOption(
    $id: ID
    $title: String
    $description: String
    $price: Float
    $serviceId: ID
  ) {
    onCreateOption(
      id: $id
      title: $title
      description: $description
      price: $price
      serviceId: $serviceId
    ) {
      id
      title
      description
      price
      serviceId
    }
  }
`;
export const onUpdateOption = /* GraphQL */ `
  subscription OnUpdateOption(
    $id: ID
    $title: String
    $description: String
    $price: Float
    $serviceId: ID
  ) {
    onUpdateOption(
      id: $id
      title: $title
      description: $description
      price: $price
      serviceId: $serviceId
    ) {
      id
      title
      description
      price
      serviceId
    }
  }
`;
export const onDeleteOption = /* GraphQL */ `
  subscription OnDeleteOption(
    $id: ID
    $title: String
    $description: String
    $price: Float
    $serviceId: ID
  ) {
    onDeleteOption(
      id: $id
      title: $title
      description: $description
      price: $price
      serviceId: $serviceId
    ) {
      id
      title
      description
      price
      serviceId
    }
  }
`;
export const onCreateOrderOption = /* GraphQL */ `
  subscription OnCreateOrderOption($id: ID, $orderId: ID, $optionId: ID) {
    onCreateOrderOption(id: $id, orderId: $orderId, optionId: $optionId) {
      id
      orderId
      optionId
    }
  }
`;
export const onDeleteOrderOption = /* GraphQL */ `
  subscription OnDeleteOrderOption($id: ID, $orderId: ID, $optionId: ID) {
    onDeleteOrderOption(id: $id, orderId: $orderId, optionId: $optionId) {
      id
      orderId
      optionId
    }
  }
`;
