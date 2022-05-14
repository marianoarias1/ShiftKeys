
/* JS PRODUCTS */

class Database{
    constructor({ products = [], users = [] }) {
        this.users = users;
        this.products = products;
      }
    
      addProduct(...products) {
        this.products.push(...products);
        localStorage.setItem('database', JSON.stringify(this));
      }
    
      addUser(user) {
        this.users.push(user);
        localStorage.setItem('database', JSON.stringify(this));
      }
}


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

    addProduct(ID, quantity=1){

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

            
            localStorage.setItem('cart', JSON.stringify(this));
            renderizarCarrito(this);
            rederizarProductos(this);
            localStorage.setItem('database', JSON.stringify(database));
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
            this.products=this.products.filter((product)=>product !==ID)
        }

        localStorage.setItem('cart', JSON.stringify(this));
        localStorage.setItem('database', JSON.stringify(database)); 
        rederizarProductos(this);
        renderizarCarrito(this);


        
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


const dbExistene=localStorage.getItem('database')

const database= dbExistene ? new Database(JSON.parse(dbExistene)) : new Database({});


if (!dbExistene){
    database.addProduct(TOFU60_RGB, TOFU65, DZ65_WOODEN, KABUKI_CHO, GMK_SOPHIE, GMK_KITSUNE)
}


