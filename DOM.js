/* 
            <a href="" class="a_teclados">
                <div class="teclados">
                    <div class="imagen">
                        <img src="./keyboards/TOFU60 DZ64 RGB.jpg" alt="" class="img_teclado">
                    </div>

                    <div class="nombre_teclados">
                        <h4>TOFU60 RGB</h4>

                        <span>$12.500</span>

                        <span>STOCK:</span>
                    </div>
                </div>

                <div class="cont_add_cart">
                    <button class="add_cart">AGREGAR AL CARRITO</button>
                </div>

            </a>
*/


//RENDER DE CARRITO


/* 
         <div class="contenedor_productos">
                <div class="img_product">
                    <img src="./keyboards/DZ65RGB HOT-SWAP WOODEN.jpg" alt="">
                </div>

                <span>nombre</span>
                <span>cantidad</span>
                <span>precio</span>

                <button class="botones_carrito">+</button>
                <button class="botones_carrito">-</button>

            </div>
*/



const productList= document.getElementById("cont_teclados");

const productList2= document.getElementById("cont_keycaps");
 
const cartContainer= document.getElementById('cart_items');

const finalPrice= document.getElementById('span_subtotal')

const contenedorContadorCart= document.getElementById('contador_carrito')

const contadorCart= document.getElementById('contador_cart')

//RENDER DE CARRITO

const renderizarCarrito=(carrito)=>{

    if(!carrito.products.length){
        return;
    }

    if(carrito.products.length !==0){
        contenedorContadorCart.classList.add('active_cart')


    }

    while(contadorCart.firstChild){
        contadorCart.removeChild(contadorCart.firstChild);

    }


    
    while(cartContainer.firstChild){
        cartContainer.removeChild(cartContainer.firstChild);

    }

    while(finalPrice.firstChild){
        finalPrice.removeChild(finalPrice.firstChild);

    }


    carrito.products.forEach((product)=>{

        const DataBaseProduct= database.products.find((p)=>p.ID === product.ID);

        const contenedorProductos= document.createElement('div');
        contenedorProductos.classList.add('contenedor_productos')
    
        const contenedorIMG= document.createElement('div');
        contenedorIMG.classList.add('img_product')
        const imagenCarrito= document.createElement('img');
        imagenCarrito.setAttribute('src',DataBaseProduct.image)
        contenedorIMG.appendChild(imagenCarrito);
    
       
    
        const nombreProductos= document.createElement('span');
        const textoNombreProducto= document.createTextNode(DataBaseProduct.name)
        nombreProductos.appendChild(textoNombreProducto)
    
        const cantidadProductos= document.createElement('span');
        const textoCantidadProducto= document.createTextNode(product.quantity)
        cantidadProductos.appendChild(textoCantidadProducto)
    


        const contBotonesCart= document.createElement('div');
        contBotonesCart.classList.add('cont_botones_cart');

        const botonCarritoMas= document.createElement('button');
        botonCarritoMas.classList.add('botones_carrito')
        const textoBotonCarritoMas= document.createTextNode('+');
        botonCarritoMas.appendChild(textoBotonCarritoMas);
        botonCarritoMas.addEventListener('click', (e)=> carrito.addProduct(product.ID));


        const botonCarritoMenos= document.createElement('button');
        botonCarritoMenos.classList.add('botones_carrito');
        const textoBotonCarritoMenos= document.createTextNode('-');
        botonCarritoMenos.appendChild(textoBotonCarritoMenos);
        botonCarritoMenos.addEventListener('click', (e)=> {
            if(product.quantity>=0){
                carrito.removeProduct(product.ID);
                contenedorProductos.innerHTML=''
            }

            if(!product.quantity){
                botonCarritoMenos.setAttribute('disabled', true)
                botonCarritoMenos.classList.toggle('botones_carrito_disble')
            }

            console.log(carrito.products, 'caaaa')
            if(carrito.products.length==0){
                finalPrice.innerHTML=carrito.subtotal
            } 
            

        });


        contBotonesCart.appendChild(botonCarritoMas);
        contBotonesCart.appendChild(botonCarritoMenos);


        contenedorProductos.appendChild(contenedorIMG);
        contenedorProductos.appendChild(nombreProductos);
        contenedorProductos.appendChild(cantidadProductos);


        contenedorProductos.appendChild(contBotonesCart)

        cartContainer.appendChild(contenedorProductos);
    })


    const contadorCartText= document.createTextNode(carrito.products.length)
    contadorCart.appendChild(contadorCartText)


    const finalPriceText= document.createTextNode(`$${carrito.subtotal}`)

    if(carrito.subtotal>0){
        finalPrice.appendChild(finalPriceText)
    }


};




const rederizarProductos= (carrito)=>{

    while(productList.firstChild && productList2.firstChild){
        productList.removeChild(productList.firstChild)
        productList2.removeChild(productList2.firstChild)
    }

    database.products.forEach((product)=>{

        if(product.ID<=3){

            const A= document.createElement('a');
            A.classList.add('a_teclados');
    
            const divTeclado= document.createElement('div');
            divTeclado.classList.add('teclados');
            A.appendChild(divTeclado);
    
            const divImagen= document.createElement('div');
            divImagen.classList.add('imagen');
            divTeclado.appendChild(divImagen);
    
            const divNombreTeclado= document.createElement('div');
            divNombreTeclado.classList.add('nombre_teclados');
            divTeclado.appendChild(divNombreTeclado);
    
            
    
    
            const image= document.createElement('img');
            image.classList.add('img_teclado');
            image.setAttribute('src',product.image);
    
            const name= document.createElement('h4');
            const textName= document.createTextNode(product.name);
            name.appendChild(textName);
    
            const price= document.createElement('span');
            const textPrice= document.createTextNode(`$${product.price}`);
            price.appendChild(textPrice);
    
            const stock= document.createElement('span');
            const textStock= document.createTextNode(`STOCK: ${product.stock}`);
            stock.appendChild(textStock);
    
            const divBoton= document.createElement('div');
            divBoton.classList.add('cont_add_cart');
            const button= document.createElement('button');
            const textButton= document.createTextNode('Agregar al carrito');
            if(product.stock===0){
                button.classList.toggle('disabled-button')
                button.setAttribute('disabled', true);
            }
            button.classList.add('add_cart');
            
            button.appendChild(textButton);
            divBoton.appendChild(button);
    
            button.addEventListener('click',(e)=>{
                carrito.addProduct(product.ID,1)

                console.log(carrito)
            })
    
            divImagen.appendChild(image);
    
            divNombreTeclado.appendChild(name);
            divNombreTeclado.appendChild(price);
            divNombreTeclado.appendChild(stock);
            A.appendChild(divBoton)
    
            productList.appendChild(A);


            const searchBar= document.getElementById('search_bar');
            const btnSearch= document.getElementById('btn-search');
            const h2Teclados= document.getElementById('teclados__')
            const iconoRecargar= document.getElementById('recargar')
            btnSearch.addEventListener('click',(e)=>{
                let valorInput= searchBar.value.toLowerCase();
                if(valorInput==='keycaps' || valorInput==='keycap'){
                    productList.removeChild(A)
                    h2Teclados.classList.remove('h2_teclados')
                    h2Teclados.classList.toggle('h2_teclados_off')
                    iconoRecargar.classList.add('fa-arrows-rotate-active')
                }
            })

            iconoRecargar.addEventListener('click', (e)=>{
                productList.appendChild(A)
                h2Teclados.classList.add('h2_teclados')
                h2Teclados.classList.remove('h2_teclados_off')
                iconoRecargar.classList.remove('fa-arrows-rotate-active')
                searchBar.value=''
            })
        }
        else{
            const A= document.createElement('a');
            A.classList.add('a_keycaps');
    
            const divKeycaps= document.createElement('div');
            divKeycaps.classList.add('keycaps');
            A.appendChild(divKeycaps);
    
            const divImagen= document.createElement('div');
            divImagen.classList.add('imagen');
            divKeycaps.appendChild(divImagen);
    
            const divNombreKeycaps= document.createElement('div');
            divNombreKeycaps.classList.add('nombre_keycaps');
            divKeycaps.appendChild(divNombreKeycaps);
    
            
    
    
            const image= document.createElement('img');
            image.classList.add('img_teclado');
            image.setAttribute('src',product.image);
    
            const name= document.createElement('h4');
            const textName= document.createTextNode(product.name);
            name.appendChild(textName);
    
            const price= document.createElement('span');
            const textPrice= document.createTextNode(`$${product.price}`);
            price.appendChild(textPrice);
    
            const stock= document.createElement('span');
            const textStock= document.createTextNode(`STOCK: ${product.stock}`);
            stock.appendChild(textStock);
    
            const divBoton= document.createElement('div');
            divBoton.classList.add('cont_add_cart');
            const button= document.createElement('button');
            const textButton= document.createTextNode('Agregar al carrito');

            if(product.stock===0){
                button.classList.toggle('disabled-button')
                button.setAttribute('disabled', true);
            }
            button.classList.add('add_cart');
            


            button.appendChild(textButton);
            divBoton.appendChild(button);
            
            
            button.addEventListener('click',(e)=>{
                carrito.addProduct(product.ID,1)
    
                console.log(carrito)
            })
    
            

    
            divImagen.appendChild(image);
    
            divNombreKeycaps.appendChild(name);
            divNombreKeycaps.appendChild(price);
            divNombreKeycaps.appendChild(stock);
            A.appendChild(divBoton)
    
            productList2.appendChild(A);

            const searchBar= document.getElementById('search_bar');
            const btnSearch= document.getElementById('btn-search');
            const h2Keycaps= document.getElementById('keycaps__')
            const iconoRecargar= document.getElementById('recargar')
            btnSearch.addEventListener('click',(e)=>{
                let valorInput= searchBar.value.toLowerCase();
                if(valorInput==='teclados' || valorInput==='teclado'){
                    productList2.removeChild(A)
                    h2Keycaps.classList.remove('h2_keycaps')
                    h2Keycaps.classList.toggle('h2_keycaps_off')
                    iconoRecargar.classList.add('fa-arrows-rotate-active')
                }
            })



            iconoRecargar.addEventListener('click', (e)=>{
                productList2.appendChild(A)
                h2Keycaps.classList.add('h2_keycaps')
                h2Keycaps.classList.remove('h2_keycaps_off')
                iconoRecargar.classList.remove('fa-arrows-rotate-active')
                searchBar.value=''
            })
        }

            



    })
}


document.addEventListener('DOMContentLoaded',(e)=>{
    const carritoExistente= localStorage.getItem('cart')
    const carrito= carritoExistente ? new Cart(JSON.parse(carritoExistente)) : new Cart({owner: ''})
    

    localStorage.setItem('cart', JSON.stringify(carrito))

    renderizarCarrito(carrito);
    rederizarProductos(carrito);

})





