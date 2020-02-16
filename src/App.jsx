
class ProductRow extends React.Component
{
    render(){
        const product= this.props.product;
        
        console.log("Hi");
        return(
            <tr>
               <td>{product.id}</td>
               <td>{product.pname}</td>
               <td>{"$"+product.price}</td>
               <td>{product.category}</td>
               <td>{product.image}</td>
            </tr>
            
            

        );

    }
}

class ProductTable extends React.Component
{
  
    render()
    {

        const ProductRows = this.props.products.map(product => <ProductRow key={product.id} product={product} />);

        return(
            <table className="bordered-table" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {ProductRows} 
                </tbody>
            
            </table>
        );
        
    }
}

class ProductAdd extends React.Component
{
    constructor()
    {
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }

    handleSubmit(e){
        e.preventDefault();
        const form= document.forms.ProductAdd;
        const product={
            category:form.category.value, price: form.price.value, pname: form.pname.value, image: form.image.value
        }
        this.props.createproduct(product);
        form.price.value=""; form.pname.value="";form.image.value="";
    }
    render()
    {
        return(
            <form name="ProductAdd" onSubmit={this.handleSubmit}>
                <select id="category">
                    <option value="shirts">Shirts</option>
                    <option value="jeans">Jeans</option>
                    <option value="jackets">Jackets</option>
                    <option value="sweaters">Sweaters</option>
                    <option value="accessories">Accesories</option>
                </select>
                <input type="text" name="price" placeholder="Price per Unit" />
                <input type="text" name="pname" placeholder="Product Name" />
                <input type="text" name="image" placeholder="Image" />
                <button type="submit" > Add </button>
            </form>
        );
       
    }
}



class ProductList extends React.Component
{
    constructor()
    {
        super();
        this.state= {products: []};
        this.createproduct= this.createproduct.bind(this);
    }

    createproduct(product){
        product.id= this.state.products.length + 1;
        const newProductList = this.state.products.slice();
        newProductList.push(product);
        this.setState({products: newProductList});
    }

    

    render(){

        return(
            <React.Fragment>
                <h1>My Company Inventory</h1>
                <div>Showing all available products</div>
                <hr />
                <ProductTable products={this.state.products}/>
                <hr />
                <ProductAdd createproduct={this.createproduct}/>
            </React.Fragment>
        );

    }
}

const element = <ProductList />;

ReactDOM.render(element, document.getElementById('myCompInventory'));