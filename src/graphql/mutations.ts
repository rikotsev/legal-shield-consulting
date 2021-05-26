/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const putService = /* GraphQL */ `
  mutation PutService($serviceInput: ServiceInput) {
    putService(serviceInput: $serviceInput) {
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
export const putOrder = /* GraphQL */ `
  mutation PutOrder($orderInput: OrderInput) {
    putOrder(orderInput: $orderInput) {
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
export const createService = /* GraphQL */ `
  mutation CreateService($input: CreateServiceInput!) {
    createService(input: $input) {
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
export const updateService = /* GraphQL */ `
  mutation UpdateService($input: UpdateServiceInput!) {
    updateService(input: $input) {
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService($input: DeleteServiceInput!) {
    deleteService(input: $input) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder($input: UpdateOrderInput!) {
    updateOrder(input: $input) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder($input: DeleteOrderInput!) {
    deleteOrder(input: $input) {
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
export const createOption = /* GraphQL */ `
  mutation CreateOption($input: CreateOptionInput!) {
    createOption(input: $input) {
      id
      title
      description
      price
      serviceId
    }
  }
`;
export const updateOption = /* GraphQL */ `
  mutation UpdateOption($input: UpdateOptionInput!) {
    updateOption(input: $input) {
      id
      title
      description
      price
      serviceId
    }
  }
`;
export const deleteOption = /* GraphQL */ `
  mutation DeleteOption($input: DeleteOptionInput!) {
    deleteOption(input: $input) {
      id
      title
      description
      price
      serviceId
    }
  }
`;
export const createOrderOption = /* GraphQL */ `
  mutation CreateOrderOption($input: CreateOrderOptionInput) {
    createOrderOption(input: $input) {
      id
      orderId
      optionId
    }
  }
`;
export const deleteOrderOption = /* GraphQL */ `
  mutation DeleteOrderOption($input: DeleteOrderInput) {
    deleteOrderOption(input: $input) {
      id
      orderId
      optionId
    }
  }
`;
