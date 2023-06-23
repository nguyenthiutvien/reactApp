import React from "react";
import axios from "axios";
import { ReactDOM } from "react";



class Admin extends React.Component {
  state = {
    products: [],
    id: null,
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: ""
    },
    showAddForm: false,
    showEditForm: false
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    axios
      .get("https://645de9688d08100293f1eb54.mockapi.io/products")
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteProduct = id => {
    axios
      .delete(
        `https://645de9688d08100293f1eb54.mockapi.io/products/${id}`
      )
      .then(response => {
        console.log(response);
        const updatedProducts = this.state.products.filter(
          product => product.id !== id
        );
        this.setState({ products: updatedProducts });
      })
      .catch(error => {
        console.log(error);
      });
  };

  addProduct = () => {
    const {
      title,
      price,
      description,
      category,
      image,
      rating
    } = this.state;
    const product = {
      title,
      price,
      description,
      category,
      image,
      rating: {
        rate: rating.rate,
        count: rating.count
      }
    };

    axios
      .post(
        "https://645de9688d08100293f1eb54.mockapi.io/products",
        product
      )
      .then(response => {
        console.log(response);
        const updatedProducts = [...this.state.products, response.data];
        this.setState({ products: updatedProducts });
      })
      .catch(error => {
        console.log(error);
      });
  };

  editProduct = id => {
    const product = this.state.products.find(item => item.id === id);
    this.setState({
      id: id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating,
      showEditForm: true
    });
  };

  updateProduct = () => {
    const {
      id,
      title,
      price,
      description,
      category,
      image,
      rating
    } = this.state;
    const updatedProduct = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating
    };

    axios
      .put(
        `https://645de9688d08100293f1eb54.mockapi.io/products/${id}`,
        updatedProduct
      )
      .then(response => {
        console.log(response);
        const updatedProducts = this.state.products.map(item => {
          if (item.id === id) {
            return { ...updatedProduct };
          }
          return item;
        });
        this.setState({
          products: updatedProducts,
          showEditForm: false,
          id: null,
          title: "",
          price: "",
          description: "",
          category: "",
          image: "",
          rating: {
            rate: "",
            count: ""
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };



renderAddForm = () => {
  return (
    <div className="form">
      <h2>Add Product</h2>
      <label>Title:</label>
      <input
        type="text"
        value={this.state.title}
        onChange={(e) => this.setState({ title: e.target.value })}
      />
      <label>Price:</label>
      <input
        type="number"
        value={this.state.price}
        onChange={(e) => this.setState({ price: e.target.value })}
      />
      <label>Description:</label>
      <textarea
        value={this.state.description}
        onChange={(e) => this.setState({ description: e.target.value })}
      ></textarea>
      <label>Category:</label>
      <input
        type="text"
        value={this.state.category}
        onChange={(e) => this.setState({ category: e.target.value })}
      />
      <label>Image:</label>
      <input
        type="text"
        value={this.state.image}
        onChange={(e) => this.setState({ image: e.target.value })}
      />
      <label>Rating:</label>
      <input
        type="text"
        value={this.state.rating.rate}
        onChange={(e) =>
          this.setState({
            rating: { ...this.state.rating, rate: e.target.value },
          })
        }
      />
      <label>Rating Count:</label>
      <input
        type="text"
        value={this.state.rating.count}
        onChange={(e) =>
          this.setState({
            rating: { ...this.state.rating, count: e.target.value },
          })
        }
      />
      <button onClick={this.addProduct}>Add</button>
      <button onClick={() => this.setState({ showAddForm: false })}>
        Cancel
      </button>
    </div>
  );
};

renderEditForm = () => {
  const { image } = this.state;
  return (
    <div className="form">
      <h2>Edit Product</h2>
      <label>Title:</label>
      <input
        type="text"
        value={this.state.title}
        onChange={(e) => this.setState({ title: e.target.value })}
      />
      <label>Price:</label>
      <input
        type="number"
        value={this.state.price}
        onChange={(e) => this.setState({ price: e.target.value })}
      />
      <label>Description:</label>
      <textarea
        value={this.state.description}
        onChange={(e) => this.setState({ description: e.target.value })}
      ></textarea>
      <label>Category:</label>
      <input
        type="text"
        value={this.state.category}
        onChange={(e) => this.setState({ category: e.target.value })}
      />
      <label>Image:</label>
      <input
        type="text"
        value={image}
        onChange={(e) => this.setState({ image: e.target.value })}
      />
      {image && <img src={image} alt="Product" className="product-image" />}
      <label>Rating:</label>
      <input
        type="text"
        value={this.state.rating.rate}
        onChange={(e) =>
          this.setState({
            rating: { ...this.state.rating, rate: e.target.value },
          })
        }
      />
      <label>Rating Count:</label>
      <input
        type="text"
        value={this.state.rating.count}
        onChange={(e) =>
          this.setState({
            rating: { ...this.state.rating, count: e.target.value },
          })
        }
      />
      <button onClick={this.updateProduct}>Update</button>
      <button onClick={() => this.setState({ showEditForm: false })}>
        Cancel
      </button>
    </div>
  );
};



render() {
  return (
    <div>
       <button className="add" onClick={() => this.setState({ showAddForm: true })}>Add Product</button>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>
                {product.rating.rate} ({product.rating.count} reviews)
              </td>
              <td>
                <img src={product.image} alt="Product" className="product-image" />
              </td>
              <td>
                <button className="edit" onClick={() => this.editProduct(product.id)}>Edit</button>
                <button className="delete" onClick={() => this.confirmDelete(product.id)}>Delete</button> {/* Gọi hàm confirmDelete khi click */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {this.state.showAddForm ? this.renderAddForm() : null}
      {this.state.showEditForm ? this.renderEditForm() : null}
     
    </div>
  );
}

confirmDelete(productId) {
  if (window.confirm("Are you sure you want to delete this product?")) {
    this.deleteProduct(productId);
  }
}

deleteProduct(productId) {
  // Thực hiện xóa sản phẩm
}

  
}



  
//   ReactDOM.render(<App />, document.getElementById('root'));
  export default Admin;
  