import React, { useState } from "react";

const AdminPanel = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEdit = (id, field, value) => {
    const updatedProducts = products.map(p =>
      p.id === id ? { ...p, [field]: value } : p
    );
    setProducts(updatedProducts);
  };

  const handleAdd = () => {
    const id = Math.max(...products.map(p => p.id)) + 1;
    setProducts([...products, { ...newProduct, id, price: parseFloat(newProduct.price) }]);
    setNewProduct({ name: "", description: "", price: "", image: "" });
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <h3>Add New Product</h3>
      <input className="form-control" placeholder="Name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input className="form-control" placeholder="Description" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
      <input className="form-control" placeholder="Image URL" value={newProduct.image} onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} />
      <input className="form-control" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
      <button className="btn float-right" onClick={handleAdd}>Add</button>

      <h3>Product List</h3>
      {products.map((p) => (
        <a key={p.id} href="#" className="col-12">
          <div className="row">
            <input className="form-control" value={p.name} onChange={e => handleEdit(p.id, "name", e.target.value)} />
            <input className="form-control" value={p.price} onChange={e => handleEdit(p.id, "price", parseFloat(e.target.value))} />
            <input className="form-control" value={p.description} onChange={e => handleEdit(p.id, "description", e.target.value)} />
            <input className="form-control" value={p.image} onChange={e => handleEdit(p.id, "image", e.target.value)} />
            <button className="float-right btn" onClick={() => handleDelete(p.id)}>Delete</button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default AdminPanel;
