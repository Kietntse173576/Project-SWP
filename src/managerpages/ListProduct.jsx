import { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
// import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import ProductAPI from "../api/ProductAPI";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
    console.log(products)
  useEffect(() => {
    (async ()=>{
      const response = await ProductAPI.products();
      if(response.data.success){
        const data = response.data;
        setProducts(data.data);
      }
    })()
  }, []);

  const [sortedInfo, setSortedInfo] = useState({});
  const [isAddProductModalVisible, setIsAddProductModalVisible] =
    useState(false);
  const [isUpdateProductModalVisible, setIsUpdateProductModalVisible] =
    useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "image",
      render: (image) => <div className="w-20 h-auto">{image}</div>,
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Stock",
      dataIndex: "status",
      key: "stock",
      sorter: (a, b) => a.stock - b.stock,
      sortOrder: sortedInfo.columnKey === "stock" && sortedInfo.order,
    },
    {
      title: "Action",
      key: "action",
      render: (_, product) => (
        <Button type="link" onClick={() => handleUpdateProduct(product)}>
          <MoreVertIcon className="h-6 w-6 " />
        </Button>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  const showAddProductModal = () => {
    setIsAddProductModalVisible(true);
  };

  const handleAddProductCancel = () => {
    setIsAddProductModalVisible(false);
  };

  const handleUpdateProduct = (product) => {
    setSelectedProduct(product);
    setIsUpdateProductModalVisible(true);
  };

  const handleUpdateProductCancel = () => {
    setIsUpdateProductModalVisible(false);
    setSelectedProduct(null);
  };

  const handleCreateProduct = (product) => {
    (async ()=>{
      const response = await ProductAPI.addProduct(product);
      console.log("response",response);
      setProducts([
        ...products,
        {
          ...product,
          id: products.length + 1,
          image: <img src={product.image} alt="Product" />,
        },
      ]);
    })()
    setIsAddProductModalVisible(false);
  };

  const handleUpdateExistingProduct = (updatedProduct) => {
    (async()=>{
      const response = await ProductAPI.updateProduct(updatedProduct);
      console.log("response",response);
    })()
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsUpdateProductModalVisible(false);
  };

  const handleDeleteProduct = (productId) => {
    (async()=>{
      const response = await ProductAPI.deleteProduct(productId);
      console.log("response",response);
    })()
    setProducts(products.filter((product) => product.id !== productId));
    setIsUpdateProductModalVisible(false);
  };

  return (
    <div className="mx-6 p-4 my-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold ml-4">All Products</h1>
        </div>
        <Button
          type="primary"
          className="bg-black text-white mr-2"
          onClick={showAddProductModal}
        >
          + ADD NEW PRODUCT
        </Button>
      </div>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={products}
        rowKey="id"
        onChange={handleChange}
      />
      <Modal
        title="Add New Product"
        visible={isAddProductModalVisible}
        footer={null}
        onCancel={handleAddProductCancel}
        width={1800}
      >
        <AddProduct onCreate={handleCreateProduct} />
      </Modal>
      <Modal
        title="Update Product"
        visible={isUpdateProductModalVisible}
        footer={null}
        onCancel={handleUpdateProductCancel}
        width={1800}
      >
        <UpdateProduct
          product={selectedProduct}
          onUpdate={handleUpdateExistingProduct}
          onDelete={handleDeleteProduct}
        />
      </Modal>
    </div>
  );
};

export default ListProduct;
