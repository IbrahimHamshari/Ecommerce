import { Order } from "../../models";
import { castToEnum } from "../castToEnum";
import { OrderStatus } from "../../enums/OrderStatusEnum";
import logger from "../logger";
import { OrderDTO } from "../../DTO";

export function orderToOrderDTO(order: Order): OrderDTO {
  const orderJson = order.toJSON();
  const status = castToEnum(OrderStatus, orderJson.status);
  if (!status) {
    logger.error(`Order Status of Id ${orderJson.id} is not supported. Please Check It ASAP.`);
    throw new Error("Order Status Is not Supported")
  }
  const orderDTO: OrderDTO = { ...orderJson, status };
  return orderDTO;
}

export function ordersToOrdersDTO(orders: Order[]): OrderDTO[] {
  const ordersDTO = orders.map((order) => {
    const orderJson = order.toJSON();
    const status = castToEnum(OrderStatus, orderJson.status);
    if (!status) {
      logger.error(`Order Status of Id ${order.id} is not supported. Please Check It ASAP.`);
      throw new Error("Order Status Is not Supported")
    }
    const orderDTO: OrderDTO = { ...orderJson, status };
    return orderDTO;
  })

  return ordersDTO;
}