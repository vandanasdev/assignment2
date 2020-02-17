
class ProductRow extends React.Component
{
    render(){
        const product= this.props.product;
        
        return(
            <tr>
               <td>{product.pname}</td>
               <td>{"$"+product.price}</td>
               <td>{product.category}</td>
               <td><a target="_blank" href={product.imageUrl} >View</a></td>
            </tr>
            
            

        );

    }
}

class ProductTable extends React.Component
{
  
    render()
    {

        const productRows = this.props.products.map(product => <ProductRow key={product.id} product={product} />);

        return(
            <table className="bordered-table" >
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {productRows} 
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
        const priceValue= (form.price.value).slice(1);
        const product={
            category:form.category.value, price: priceValue, pname: form.pname.value, imageUrl: form.imageUrl.value
        }
        this.props.createproduct(product);
        form.price.value="$"; form.pname.value="";form.imageUrl.value=""; form.category.value="";
        
    }
    render()
    {
        return(
            <form name="ProductAdd" onSubmit={this.handleSubmit}>
                <section className="grid-1">
                    <div>
                        <label>Category </label>
                        <select id="category" >
                            <option disabled selected value=""> -- Select a product -- </option>
                            <option value="shirts">Shirts</option>
                            <option value="jeans">Jeans</option>
                            <option value="jackets">Jackets</option>
                            <option value="sweaters">Sweaters</option>
                            <option value="accessories">Accesories</option>
                        </select>
                    </div>
                    <div id="price">
                        <label>Price Per Unit</label>
                        <input type="text" name="price" defaultValue="$" />
                    </div>
                    <div>
                        <label>Product Name </label>
                        <input type="text" name="pname"  />
                    </div>
                    <div>
                        <label>Image URL </label>
                        <input type="text" name="imageUrl"  />
                    </div>
                    <button type="submit" className="butn"> Add Product</button>
                </section>
                
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
                <br />
                <div> Add a new product to the inventory </div>
                <hr />
                <ProductAdd createproduct={this.createproduct}/>
            </React.Fragment>
        );

    }
}

const element = <ProductList />;

ReactDOM.render(element, document.getElementById('myCompInventory'));