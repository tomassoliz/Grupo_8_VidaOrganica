const $ = (id) => document.getElementById(id);

// le pasamos productos y total y ejecutamos en *
const showProductInCart = (products, total) => {
  // si hya productos en length
  if (products.length) {
    // si existe cart-table
    if ($("cart-table")) {
      $("cart-table").innerHTML = null;
      products.forEach(({ id, image, name, price, quantity }) => {
        $("cart-table").innerHTML += `
        <tr>
            <th scope="row">
            <img src="/images/${image}" width="100" alt="" />
            </th>
            <td>${name}</td>
            <td>
              <div class="d-flex gap-2">
                <button onclick="removeItemToCart(${id})" class="btn btn-sm btn-danger ${quantity === 1 && 'disabled'}"><i class="fa-solid fa-minus"></i></button>
                <input type="text" value="${quantity}" style="width:30px;text-align:center"/>
                <button onclick="addItemToCart(1, ${id})" class="btn btn-sm btn-success"><i class="fa-solid fa-plus"></i></button>
              </div>
            </td>
            <td>${price * quantity}</td>
            <td>
              <h3 class="text-danger" onclick="removeAllItem(${id})"><i class="fa fa-trash"></i></h3>
            </td>
        </tr>
        `;
      });
      $("showTotal").innerHTML = total;
      // si es que hay algoo ebn el carrito se remueve el disabled
      $('btn-empty-cart').classList.remove('disabled')
    }
    // si no...
  } else {
    $("cart-body").innerHTML = `
  <div class="alert alert-warning" role="alert">
      No hay productos en el carrito.
  </div>
`;
    // aca lo añadis el disabled
    $('btn-empty-cart').classList.add('disabled')

  }
};

// (**)
const showCountCart = (products) => {
  // esto es para guardar la informacion en localStorage
  sessionStorage.setItem("countCart", products.map((product) => product.quantity).reduce((a, b) => a + b, 0)
  );
  $("show-count-cart").innerHTML = sessionStorage.getItem("countCart");
};

// (***)
// mensaje para darle dinamica
const showMessageInfo = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "info",
    title: message
  });
}

// recibe la cantidad y la id de producto esta en 
const addItemToCart = async (quantity, product) => {
  try {
    // la diferencia de get es que tenes que recibir como segundo parametro el method post
    const response = await fetch("/cart", {
      method: "POST",
      // pasarle un body la informacion que pasamos en la api y despues convertirlo a text
      body: JSON.stringify({
        quantity,
        product: +product,
      }),
      // decirle en el encabezado que tipo de dato estas enviando por el metodo post
      headers: {
        "Content-Type": "application/json",
      },
    });

    const {
      ok,
      cart: { products, total },
      message,
    } = await response.json();

    if (!ok) {
      throw new Error(message);
      // esto es como un return, te corta la ejecucion
    }

    // (*)
    showProductInCart(products, total);
    // (**)
    showCountCart(products);
    // (***)
    showMessageInfo(message)

  } catch (error) {
    Swal.fire({
      title: "Hay un error",
      text: error.message,
      icon: "Error",
    });
  }
};


const removeItemToCart = async (id) => {
  try {

    // pedido asyncronico
    const response = await fetch(`/cart?product=${id}`, {
      // en este caso es el metod delete
      method: "DELETE",
    });

    const {
      ok,
      cart: { products, total },
      message,
    } = await response.json();

    if (!ok) {
      throw new Error(message);
    }

    showProductInCart(products, total);
    showCountCart(products);
    showMessageInfo(message)

  } catch (error) {
    Swal.fire({
      title: "Hay un error",
      text: error.message,
      icon: "Error",
    });
  }
};

// remuieve los productos de una
const removeAllItem = async (id) => {
  try {
    // acordarse que es la ruta recorrida con la clave que es product
    const response = await fetch(`/cart/item-all?product=${id}`, {
      method: "DELETE",
    });
    const {
      ok,
      cart: { products, total },
      message,
    } = await response.json();

    if (!ok) {
      throw new Error(message);
    }

    showProductInCart(products, total);
    showCountCart(products);
    showMessageInfo(message)

  } catch (error) {
    Swal.fire({
      title: "Hay un error",
      text: error.message,
      icon: "Error",
    });
  }
};

// para borrar desde el buton de vaciar carrito
const emptyCart = async () => {
  try {
    const response = await fetch('/cart/all', {
      method: 'delete'
    })

    const {
      ok,
      cart: { products, total },
      message,
    } = await response.json();

    if (!ok) {
      throw new Error(message);
    }

    showProductInCart(products, total);
    showCountCart(products);
    showMessageInfo(message);


  } catch (error) {
    Swal.fire({
      title: "Hay un error",
      text: error.message,
      icon: "Error",
    });
  }
}

window.onload = function () {

  // antes de que se cargue el carrito se usa el sessionStorage, entonces si existe poneme 0 si no...
  sessionStorage.setItem("countCart", sessionStorage.getItem("countCart") || 0);
  // aca le aplicamos al contador estilos
  $("show-count-cart").innerHTML = sessionStorage.getItem("countCart");
  // permanece oculto hasta poner algo en contador
  $("show-count-cart").hidden = false;

  // esto es para ver si existe, antes de iniciar sesion
  $("btn-cart") &&
    $("btn-cart").addEventListener("click", async function (e) {
      try {
        // por fecth "/cart" por que esta creada la ruta de apis
        const response = await fetch("/cart");
        // estructura la misma en la api para poder hacer un desctructuring, si no no se puede
        const { ok, cart, message } = await response.json();

        if (ok) {
          // si products tiene elementos
          if (cart.products.length) {
            $("cart-body").innerHTML = `           
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody id="cart-table">
                
                </tbody>
                  <caption>

                  <div class="d-flex justify-content-end">
                  $ <span id="showTotal"></span> 
                  </div>

                  </caption>
            </table>
            `;
            // aca (*)
            showProductInCart(cart.products, cart.total);

          } else {
            $("cart-body").innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        No hay productos en el carrito.
                    </div>
                  `;
          }
        } else {
          throw new Error(message);
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Hay un error",
          text: message,
          icon: "Error",
        });
      }
    });
};