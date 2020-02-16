class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    console.log("Hi");
    return React.createElement("tr", null, React.createElement("td", null, product.id), React.createElement("td", null, product.pname), React.createElement("td", null, "$" + product.price), React.createElement("td", null, product.category), React.createElement("td", null, product.image));
  }

}

class ProductTable extends React.Component {
  render() {
    const ProductRows = this.props.products.map(product => React.createElement(ProductRow, {
      key: product.id,
      product: product
    }));
    return React.createElement("table", {
      className: "bordered-table"
    }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "ID"), React.createElement("th", null, "Product Name"), React.createElement("th", null, "Price"), React.createElement("th", null, "Category"), React.createElement("th", null, "Image"))), React.createElement("tbody", null, ProductRows));
  }

}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.ProductAdd;
    const product = {
      category: form.category.value,
      price: form.price.value,
      pname: form.pname.value,
      image: form.image.value
    };
    this.props.createproduct(product);
    form.price.value = "";
    form.pname.value = "";
    form.image.value = "";
  }

  render() {
    return React.createElement("form", {
      name: "ProductAdd",
      onSubmit: this.handleSubmit
    }, React.createElement("select", {
      id: "category"
    }, React.createElement("option", {
      value: "shirts"
    }, "Shirts"), React.createElement("option", {
      value: "jeans"
    }, "Jeans"), React.createElement("option", {
      value: "jackets"
    }, "Jackets"), React.createElement("option", {
      value: "sweaters"
    }, "Sweaters"), React.createElement("option", {
      value: "accessories"
    }, "Accesories")), React.createElement("input", {
      type: "text",
      name: "price",
      placeholder: "Price per Unit"
    }), React.createElement("input", {
      type: "text",
      name: "pname",
      placeholder: "Product Name"
    }), React.createElement("input", {
      type: "text",
      name: "image",
      placeholder: "Image"
    }), React.createElement("button", {
      type: "submit"
    }, " Add "));
  }

}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createproduct = this.createproduct.bind(this);
  }

  createproduct(product) {
    product.id = this.state.products.length + 1;
    const newProductList = this.state.products.slice();
    newProductList.push(product);
    this.setState({
      products: newProductList
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h1", null, "My Company Inventory"), React.createElement("div", null, "Showing all available products"), React.createElement("hr", null), React.createElement(ProductTable, {
      products: this.state.products
    }), React.createElement("hr", null), React.createElement(ProductAdd, {
      createproduct: this.createproduct
    }));
  }

}

const element = React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('myCompInventory'));