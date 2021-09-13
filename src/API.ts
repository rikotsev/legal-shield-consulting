/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ServiceInput = {
  id: string,
  title: string,
  description: string,
};

export type Service = {
  __typename: "Service",
  id?: string,
  title?: string,
  description?: string,
  options?:  Array<Option | null > | null,
};

export type IService = {
  __typename: "IService",
  id?: string,
  title?: string,
  description?: string,
  options?:  Array<Option | null > | null,
};

export type Option = {
  __typename: "Option",
  id?: string,
  title?: string,
  description?: string,
  price?: number | null,
  serviceId?: string,
};

export type IOption = {
  __typename: "IOption",
  id?: string,
  title?: string,
  description?: string,
  price?: number | null,
  serviceId?: string,
};

export type OrderInput = {
  id: string,
  address: string,
  phone: string,
  vatNumber?: string | null,
  name: string,
};

export type Order = {
  __typename: "Order",
  id?: string,
  address?: string,
  phone?: string,
  vatNumber?: string | null,
  name?: string,
  options?: OrderOptionConnection,
  orderOptions?:  Array<OrderOption | null > | null,
};

export type IOrder = {
  __typename: "IOrder",
  id?: string,
  address?: string,
  phone?: string,
  vatNumber?: string | null,
  name?: string,
  options?: OrderOptionConnection,
  orderOptions?:  Array<OrderOption | null > | null,
};

export type OrderOptionConnection = {
  __typename: "OrderOptionConnection",
  items?:  Array<Option | null > | null,
};

export type OrderOption = {
  __typename: "OrderOption",
  id?: string,
  orderId?: string,
  optionId?: string,
};

export type IOrderOption = {
  __typename: "IOrderOption",
  id?: string,
  orderId?: string,
  optionId?: string,
};

export type CreateServiceInput = {
  title: string,
  description: string,
};

export type UpdateServiceInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteServiceInput = {
  id: string,
};

export type CreateOrderInput = {
  address: string,
  phone: string,
  vatNumber?: string | null,
  name: string,
};

export type UpdateOrderInput = {
  id: string,
  address?: string | null,
  phone?: string | null,
  vatNumber?: string | null,
  name?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateOptionInput = {
  id: string,
  title: string,
  description: string,
  price?: number | null,
  serviceId: string,
};

export type UpdateOptionInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  price?: number | null,
  serviceId: string,
};

export type DeleteOptionInput = {
  id: string,
};

export type CreateOrderOptionInput = {
  orderId: string,
  optionId: string,
};

export type TableServiceFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ServiceConnection = {
  __typename: "ServiceConnection",
  items?:  Array<Service | null > | null,
  nextToken?: string | null,
};

export type TableOrderFilterInput = {
  id?: TableIDFilterInput | null,
  address?: TableStringFilterInput | null,
  phone?: TableStringFilterInput | null,
  vatNumber?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
};

export type OrderConnection = {
  __typename: "OrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
};

export type TableOptionFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  price?: TableFloatFilterInput | null,
  serviceId?: TableIDFilterInput | null,
};

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type OptionConnection = {
  __typename: "OptionConnection",
  items?:  Array<Option | null > | null,
  nextToken?: string | null,
};

export type PutServiceMutationVariables = {
  serviceInput?: ServiceInput | null,
};

export type PutServiceMutation = {
  putService?:  {
    __typename: "Service",
    id: string,
    title: string,
    description: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
  } | null,
};

export type PutOrderMutationVariables = {
  orderInput?: OrderInput | null,
};

export type PutOrderMutation = {
  putOrder?:  {
    __typename: "Order",
    id: string,
    address: string,
    phone: string,
    vatNumber?: string | null,
    name: string,
    orderOptions?:  Array< {
      __typename: "OrderOption",
      id: string,
      orderId: string,
      optionId: string,
    } | null > | null,
  } | null,
};

export type CreateServiceMutationVariables = {
  input?: CreateServiceInput,
};

export type CreateServiceMutation = {
  createService?:  {
    __typename: "Service",
    id: string,
    title: string,
    description: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
  } | null,
};

export type UpdateServiceMutationVariables = {
  input?: UpdateServiceInput,
};

export type UpdateServiceMutation = {
  updateService?:  {
    __typename: "Service",
    id: string,
    title: string,
    description: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
  } | null,
};

export type DeleteServiceMutationVariables = {
  input?: DeleteServiceInput,
};

export type DeleteServiceMutation = {
  deleteService?:  {
    __typename: "Service",
    id: string,
    title: string,
    description: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input?: CreateOrderInput,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    address: string,
    phone: string,
    vatNumber?: string | null,
    name: string,
    orderOptions?:  Array< {
      __typename: "OrderOption",
      id: string,
      orderId: string,
      optionId: string,
    } | null > | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input?: UpdateOrderInput,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    address: string,
    phone: string,
    vatNumber?: string | null,
    name: string,
    orderOptions?:  Array< {
      __typename: "OrderOption",
      id: string,
      orderId: string,
      optionId: string,
    } | null > | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input?: DeleteOrderInput,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    address: string,
    phone: string,
    vatNumber?: string | null,
    name: string,
    orderOptions?:  Array< {
      __typename: "OrderOption",
      id: string,
      orderId: string,
      optionId: string,
    } | null > | null,
  } | null,
};

export type CreateOptionMutationVariables = {
  input?: CreateOptionInput,
};

export type CreateOptionMutation = {
  createOption?:  {
    __typename: "Option",
    id: string,
    title: string,
    description: string,
    price?: number | null,
    serviceId: string,
  } | null,
};

export type UpdateOptionMutationVariables = {
  input?: UpdateOptionInput,
};

export type UpdateOptionMutation = {
  updateOption?:  {
    __typename: "Option",
    id: string,
    title: string,
    description: string,
    price?: number | null,
    serviceId: string,
  } | null,
};

export type DeleteOptionMutationVariables = {
  input?: DeleteOptionInput,
};

export type DeleteOptionMutation = {
  deleteOption?:  {
    __typename: "Option",
    id: string,
    title: string,
    description: string,
    price?: number | null,
    serviceId: string,
  } | null,
};

export type CreateOrderOptionMutationVariables = {
  input?: CreateOrderOptionInput | null,
};

export type CreateOrderOptionMutation = {
  createOrderOption?:  {
    __typename: "OrderOption",
    id: string,
    orderId: string,
    optionId: string,
  } | null,
};

export type DeleteOrderOptionMutationVariables = {
  input?: DeleteOrderInput | null,
};

export type DeleteOrderOptionMutation = {
  deleteOrderOption?:  {
    __typename: "OrderOption",
    id: string,
    orderId: string,
    optionId: string,
  } | null,
};

export type ServicesQuery = {
  services?:  Array< {
    __typename: "Service",
    id: string,
    title: string,
    description: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
  } | null > | null,
};

export type OrdersQuery = {
  orders?:  Array< {
    __typename: "Order",
    id: string,
    address: string,
    phone: string,
    vatNumber?: string | null,
    name: string,
    orderOptions?:  Array< {
      __typename: "OrderOption",
      id: string,
      orderId: string,
      optionId: string,
    } | null > | null,
  } | null > | null,
};

export type ServiceQueryVariables = {
  id?: string,
};

export type ServiceQuery = {
  service?:  {
    __typename: "Service",
    id: string,
    title: string,
    description: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
  } | null,
};

export type OrderQueryVariables = {
  id?: string,
};

export type OrderQuery = {
  order?:  {
    __typename: "Order",
    id: string,
    address: string,
    phone: string,
    vatNumber?: string | null,
    name: string,
    orderOptions?:  Array< {
      __typename: "OrderOption",
      id: string,
      orderId: string,
      optionId: string,
    } | null > | null,
  } | null,
};

export type GetServiceQueryVariables = {
  id?: string,
};

export type GetServiceQuery = {
  getService?:  {
    __typename: "Service",
    id: string,
    title: string,
    description: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
  } | null,
};

export type ListServicesQueryVariables = {
  filter?: TableServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesQuery = {
  listServices?:  {
    __typename: "ServiceConnection",
    items?:  Array< {
      __typename: "Service",
      id: string,
      title: string,
      description: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id?: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    address: string,
    phone: string,
    vatNumber?: string | null,
    name: string,
    orderOptions?:  Array< {
      __typename: "OrderOption",
      id: string,
      orderId: string,
      optionId: string,
    } | null > | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: TableOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "OrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      address: string,
      phone: string,
      vatNumber?: string | null,
      name: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOptionQueryVariables = {
  id?: string,
  serviceId?: string,
};

export type GetOptionQuery = {
  getOption?:  {
    __typename: "Option",
    id: string,
    title: string,
    description: string,
    price?: number | null,
    serviceId: string,
  } | null,
};

export type ListOptionsQueryVariables = {
  filter?: TableOptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOptionsQuery = {
  listOptions?:  {
    __typename: "OptionConnection",
    items?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrderOptionQueryVariables = {
  id?: string,
  orderId?: string,
  optionId?: string,
};

export type GetOrderOptionQuery = {
  getOrderOption?:  {
    __typename: "OrderOption",
    id: string,
    orderId: string,
    optionId: string,
  } | null,
};

export type ListOrderOptionsQuery = {
  listOrderOptions?:  Array< {
    __typename: "OrderOption",
    id: string,
    orderId: string,
    optionId: string,
  } | null > | null,
};

export type OnCreateServiceSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateServiceSubscription = {
  onCreateService?:  {
    __typename: "Service",
    id: string,
    title: string,
    description: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
  } | null,
};

export type OnUpdateServiceSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateServiceSubscription = {
  onUpdateService?:  {
    __typename: "Service",
    id: string,
    title: string,
    description: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
  } | null,
};

export type OnDeleteServiceSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteServiceSubscription = {
  onDeleteService?:  {
    __typename: "Service",
    id: string,
    title: string,
    description: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      title: string,
      description: string,
      price?: number | null,
      serviceId: string,
    } | null > | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  id?: string | null,
  address?: string | null,
  phone?: string | null,
  vatNumber?: string | null,
  name?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    address: string,
    phone: string,
    vatNumber?: string | null,
    name: string,
    orderOptions?:  Array< {
      __typename: "OrderOption",
      id: string,
      orderId: string,
      optionId: string,
    } | null > | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  id?: string | null,
  address?: string | null,
  phone?: string | null,
  vatNumber?: string | null,
  name?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    address: string,
    phone: string,
    vatNumber?: string | null,
    name: string,
    orderOptions?:  Array< {
      __typename: "OrderOption",
      id: string,
      orderId: string,
      optionId: string,
    } | null > | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  id?: string | null,
  address?: string | null,
  phone?: string | null,
  vatNumber?: string | null,
  name?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    address: string,
    phone: string,
    vatNumber?: string | null,
    name: string,
    orderOptions?:  Array< {
      __typename: "OrderOption",
      id: string,
      orderId: string,
      optionId: string,
    } | null > | null,
  } | null,
};

export type OnCreateOptionSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  price?: number | null,
  serviceId?: string | null,
};

export type OnCreateOptionSubscription = {
  onCreateOption?:  {
    __typename: "Option",
    id: string,
    title: string,
    description: string,
    price?: number | null,
    serviceId: string,
  } | null,
};

export type OnUpdateOptionSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  price?: number | null,
  serviceId?: string | null,
};

export type OnUpdateOptionSubscription = {
  onUpdateOption?:  {
    __typename: "Option",
    id: string,
    title: string,
    description: string,
    price?: number | null,
    serviceId: string,
  } | null,
};

export type OnDeleteOptionSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  price?: number | null,
  serviceId?: string | null,
};

export type OnDeleteOptionSubscription = {
  onDeleteOption?:  {
    __typename: "Option",
    id: string,
    title: string,
    description: string,
    price?: number | null,
    serviceId: string,
  } | null,
};

export type OnCreateOrderOptionSubscriptionVariables = {
  id?: string | null,
  orderId?: string | null,
  optionId?: string | null,
};

export type OnCreateOrderOptionSubscription = {
  onCreateOrderOption?:  {
    __typename: "OrderOption",
    id: string,
    orderId: string,
    optionId: string,
  } | null,
};

export type OnDeleteOrderOptionSubscriptionVariables = {
  id?: string | null,
  orderId?: string | null,
  optionId?: string | null,
};

export type OnDeleteOrderOptionSubscription = {
  onDeleteOrderOption?:  {
    __typename: "OrderOption",
    id: string,
    orderId: string,
    optionId: string,
  } | null,
};
