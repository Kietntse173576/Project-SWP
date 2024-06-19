import axiosClient from "./axiosClient";

const OrderAPI = {
  getAllOrders: () => {
    return axiosClient.get("/order/all");
  },
  getOrderById: (id) => {
    return axiosClient.get(`/order/${id}`);
  },
  createOrderWithDetails: (orderData) => {
    return axiosClient.post("/order/createWithDetails", orderData);
  },
  cancelOrder: (id) => {
    return axiosClient.put(`/order/cancel/${id}`);
  },
  getOrdersByDeliveryStaffId: (id) => {
    return axiosClient.get(`/order/delivery/${id}`);
  },
  updateOrderStatusByDelivery: (orderId, status) => {
    return axiosClient.put(`/order/delivery/status/${orderId}`, { status });
  },
};

export default OrderAPI;
