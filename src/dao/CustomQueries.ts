export const listServicesWithOptions = /* GraphQL */ `
query listServicesWithOptions {
      listServices {
        items {
          description
          id
          title
          options {
            description
            id
            price
            serviceId
            title
          }
        }
      }
}
    `;

export const createNewService = /* GraphQL */ `
mutation createNewService($title: String!, $description: String!) {
  createService(input: {description: $description, title: $title}) {
    description
    id
    title
  }
}
    `;

export const createNewOption = /* GraphQL */ `
mutation createNewOption($description: String!, $id: ID!, $title: String!, $serviceId: ID!, $price: Float!) {
  createOption(input: {description: $description, id: $id, price: $price, serviceId: $serviceId, title: $title}) {
    description
    id
    price
    serviceId
    title
  }
}
    `;

export const deleteOption = /* GraphQL */ `
mutation deleteOption($id: ID!, $serviceId: ID!) {
  deleteOption(input: {id: $id, serviceId: $serviceId}) {
    id
  }
}
    `;

export const deleteService = /* GraphQL */ `
mutation deleteService($id: ID!) {
  deleteService(input: {id: $id}) {
    id
  }
}
    `;