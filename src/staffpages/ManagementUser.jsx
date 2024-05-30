import { Table } from "antd";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

const ManagementUser = () => {
  const dataSource = [
    {
      key: "1",
      userName: "John Doe",
    },
    {
      key: "2",
      userName: "Jane Smith",
    },
  ];

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Detail",
      key: "detail",
      render: (record) => (
        <Link to={`/staff/management-user/user-detail/${record.key}`}>
          Detail
        </Link>
      ),
    },
    {
      title: "Order",
      key: "order",
      render: (record) => (
        <Link to={`/staff/management-user/user-orders/${record.key}`}>
          View Order
        </Link>
      ),
    },
  ];

  return (
    <div className="mx-6 p-4 my-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold ml-4">All Customer</h1>
          <Breadcrumb className="text-gray-600 ml-4">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>All Customer</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default ManagementUser;
