
/* JS PRODUCTS */

class Database{
    constructor(){
        this.users=[]
        this.products=[]
    }

    addProduct(...products){
        this.products.push(...products);
    }

    addUser(user){
        this.users.push(user);
    }
}

const database= new Database();

class Cart{
    constructor({
        
        ID=Date.now().toString(36) + Math.random().toString(36).substring(2),
        owner,

        products=[],
        subtotal=0,
    }){

        this.ID=ID
        this.owner=owner

        this.products=products;
        this.subtotal=subtotal;
    }

    addProduct(ID, quantity){

        const product= database.products.find((product)=>product.ID===ID)

        if(!product){
            return alert("El producto que estas intentando agregar no existe!")
        }




        
        if(product.stock>=quantity){
            const price= quantity * product.price;

            this.subtotal=this.subtotal + price

            product.stock-= quantity

            const productInCart= this.products.find((producto)=>producto.ID===ID);

            if(productInCart){
                productInCart.quantity+=quantity;
            }else{

                this.products.push({ID, quantity})

            }
            renderizarCarrito(this);
            rederizarProductos(this);
            
        }
        else{

            alert('No hay mas Stock :c')
        }

        
    }

    removeProduct(ID){

        const product= this.products.find((product)=>product.ID===ID)

        const productdb= database.products.find((product)=>(product.ID===ID))
    
        
        if(!product){
            return alert("El producto que estas intentando eliminar no existe en tu carrito!")
        }

        productdb.stock++;
        this.subtotal= this.subtotal - productdb.price

        if(product.quantity>1){
            product.quantity--;
        }else{
            this.products=this.products.filter((products)=>product!==ID)
        }
        
    }
}

class Product{

    static currentID=1;

    constructor({price, name, stock=0, image}){
        this.ID=Product.currentID;
        this.price=price;
        this.name=name;
        this.stock=stock;
        this.image=image

        Product.currentID+=1
    }


       
    // updateStock(operator, amount){
       
    //     const stock= eval(`${this.stock} ${operator} ${amount}`);

    //     this.stock= stock >= this.stock ? stock : 0;

    //     return this.stock;
    // }


    update({price, stock, name= this.name,image=this.image}){
        this.price= price ?? this.price;
        this.stock=stock ?? this.stock;
        this.name=name;
        this.image=image;
    }
}

/* TECLADOS */

const TOFU60_RGB= new Product({

    price: 12500,
    name: 'TOFU60 RGB',
    stock: 15,
    image: src="./keyboards/TOFU60 DZ64 RGB.jpg"
})

const TOFU65= new Product({
    price: 12500,
    name: 'TOFU65',
    stock: 15,
    image: src="./keyboards/TOFU65 HOT-SWAP.jpg"
})

const DZ65_WOODEN= new Product({
    price: 12500,
    name: 'DZ65 WOODEN',
    stock: 20,
    image: src="./keyboards/DZ65RGB HOT-SWAP WOODEN.jpg"
})


/* KEYCAPS */

const KABUKI_CHO= new Product({
    price: 12500,
    name: 'KABUKI-CHO',
    stock: 20,
    image: src="./Keycaps/KABUKI-CHO.jpg"
})

const GMK_SOPHIE= new Product({
    price: 12500,
    name: 'GMK SOPHIE',
    stock: 20,
    image: src="./Keycaps/GMK SOPHIE.jpg"
})

const GMK_KITSUNE= new Product({
    price: 12500,
    name: 'GMK KITSUNE',
    stock: 20,
    image: src="./Keycaps/GMK KITSUNE.jpg"
})



database.addProduct(TOFU60_RGB, TOFU65, DZ65_WOODEN, KABUKI_CHO, GMK_SOPHIE, GMK_KITSUNE)
