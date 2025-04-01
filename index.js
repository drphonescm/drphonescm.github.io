document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.icon-cart');
    const cartContainer = document.querySelector('.container-cart-products');
    const sortDropdown = document.getElementById('sort');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const priceRange = document.getElementById('priceRange');
    const priceRangeValue = document.getElementById('priceRangeValue');
    const productsContainer = document.getElementById('products-container');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const cartProductsContainer = document.querySelector('.cart-products');
    const totalPriceElement = document.querySelector('.total-pagar');
    const countProductsElement = document.getElementById('contador-productos');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const cerrarCompraButton = document.querySelector('.cart-whatsapp-button');
    const pageNumbersContainer = document.getElementById('page-numbers');
    const productsImages = document.querySelectorAll('.item img');
    
    

    let cart = [];
    let currentPage = 1;
    const productsPerPage = 12;
    let sortOrder = 'relevance';
    let allProducts = [];
    let filteredProducts = [];
    console.log("El script está cargado correctamente");


    // Cargar productos al iniciar
    const loadProducts = () => {
       allProducts = [
        
        { id: 1, name: "Motorola Moto G04s 64 GB", price: 226999, img: "https://drphonescm.github.io/img/CELULARES/G04S.png", features: ["Pantalla: 6.5''", "Almacenamiento: 64 GB", "RAM: 4 GB", "Cámara: 48 MP"] },
        
        { id: 2, name: "Motorola Moto G24 Power 128 GB", price: 286999, img: "https://drphonescm.github.io/img/CELULARES/G24%20POWER.png", features: ["Pantalla: 6.6''", "Almacenamiento: 128 GB", "RAM: 6 GB", "Cámara: 50 MP"] },
        
        { id: 3, name: "Motorola Moto G14 128 GB", price: 264999, img: "https://drphonescm.github.io/img/CELULARES/G14.png", features: ["Pantalla: 6.5''", "Almacenamiento: 128 GB", "RAM: 4 GB", "Cámara: 50 MP"] },
        
        { id: 4, name: "Samsung Galaxy A05 128 GB", price: 293999, img: "https://drphonescm.github.io/img/CELULARES/A05.png", features: ["Pantalla: 6.6''", "Almacenamiento: 128 GB", "RAM: 4 GB", "Cámara: 64 MP"] },
        
        { id: 5, name: "Xiaomi Redmi Note 13 256GB / 8GB", price: 386999, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2013.png", features: ["Pantalla: 6.67''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
        
        { id: 6, name: "Samsung Galaxy A15 128 GB", price: 309999, img: "https://drphonescm.github.io/img/CELULARES/A15.png", features: ["Pantalla: 6.5''", "Almacenamiento: 128 GB", "RAM: 6 GB", "Cámara: 50 MP"] },
        
        { id: 7, name: "Samsung Galaxy A25 5G 128 GB", price: 389999, img: "https://drphonescm.github.io/img/CELULARES/A25.png", features: ["Pantalla: 6.7''", "Almacenamiento: 128 GB", "RAM: 8 GB", "Cámara: 64 MP"] },
        
        { id: 8, name: "Samsung Galaxy A25 5G 256 GB", price: 442999, img: "https://drphonescm.github.io/img/CELULARES/A25%20256GB.png", features: ["Pantalla: 6.7''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 64 MP"] },
        
        { id: 9, name: "Samsung Galaxy A35 5G 128 GB", price: 530999, img: "https://drphonescm.github.io/img/CELULARES/A35.png", features: ["Pantalla: 6.5''", "Almacenamiento: 128 GB", "RAM: 6 GB", "Cámara: 108 MP"] },
        
        { id: 10, name: "Samsung Galaxy A35 5G 256 GB", price: 548999, img: "https://drphonescm.github.io/img/CELULARES/A35%20256.png", features: ["Pantalla: 6.5''", "Almacenamiento: 256 GB", "RAM: 6 GB", "Cámara: 108 MP"] },
        
        { id: 11, name: "Samsung Galaxy A55 5G 128 GB", price: 610999, img: "https://drphonescm.github.io/img/CELULARES/A55.png", features: ["Pantalla: 6.7''", "Almacenamiento: 128 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
        
        { id: 12, name: "Samsung Galaxy A55 5G 256 GB", price: 671999, img: "https://drphonescm.github.io/img/CELULARES/A55%20256.png", features: ["Pantalla: 6.7''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
        
        { id: 13, name: "Samsung S23 ULTRA 256GB / 8GB", price: 1224999, img: "https://drphonescm.github.io/img/CELULARES/S23%20ULTRA.png", features: ["Pantalla: 6.8''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
        
        { id: 14, name: "Samsung S23 ULTRA 512GB / 12GB", price: 1313999, img: "https://drphonescm.github.io/img/CELULARES/S23%20ULTRA%20512.png", features: ["Pantalla: 6.8''", "Almacenamiento: 512 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
        
        { id: 15, name: "Samsung S24 FE 256GB / 8GB", price: 1135999, img: "https://drphonescm.github.io/img/CELULARES/S24%20FE.png", features: ["Pantalla: 6.8''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
        
        { id: 16, name: "Samsung S24 ULTRA 256GB / 12GB", price: 1446999, img: "https://drphonescm.github.io/img/CELULARES/S24%20256.png", features: ["Pantalla: 6.9''", "Almacenamiento: 256 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
        
        { id: 17, name: "Samsung S24 ULTRA 512GB / 12GB", price: 1556999, img: "https://drphonescm.github.io/img/CELULARES/S24%20512.png", features: ["Pantalla: 6.9''", "Almacenamiento: 512 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
        
        { id: 18, name: "Xiaomi Redmi Note 13 PRO 5G 256GB / 8GB", price: 528999, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2013%20PRO.png", features: ["Pantalla: 6.6''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
        
        { id: 19, name: "Xiaomi Redmi Note 13 PRO 5G 512GB / 12GB", price: 607999, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2013%20PRO%20512.png", features: ["Pantalla: 6.6''", "Almacenamiento: 512 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
        
        { id: 20, name: "Xiaomi Redmi Note 13 PRO PLUS 5G 256GB / 12GB", price: 639999, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2013%20PRO%20PLUS.png", features: ["Pantalla: 6.67''", "Almacenamiento: 256 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
        
        { id: 21, name: "Xiaomi Redmi Note 13C 128GB / 4GB", price: 265999, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2013C.png", features: ["Pantalla: 6.5''", "Almacenamiento: 128 GB", "RAM: 4 GB", "Cámara: 50 MP"] },
        
        { id: 22, name: "Xiaomi Redmi Note 14C 128GB / 8GB", price: 291999, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2014C.png", features: ["Pantalla: 6.6''", "Almacenamiento: 128 GB", "RAM: 8 GB", "Cámara: 64 MP"] },
        
        { id: 23, name: "Motorola Moto G14 5G 256 GB", price: 349999, img: "https://drphonescm.github.io/img/CELULARES/G14%20256.png", features: ["Pantalla: 6.5''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 64 MP"] },
        
        { id: 24, name: "Xiaomi Redmi Note 14 PRO 512GB / 12GB", price: 729999, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2014%20PRO.png", features: ["Pantalla: 6.67''", "Almacenamiento: 512 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
        
        { id: 25, name: "Motorola Moto G84 5G 256 GB", price: 520999, img: "https://drphonescm.github.io/img/CELULARES/G84.png", features: ["Pantalla: 6.55''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 50 MP"] }
        
    ];
        filteredProducts = [...allProducts];
        renderProducts(filteredProducts);
        renderPageNumbers(filteredProducts);
    };

          
    window.openModal = function(id) {
      console.log("ID recibido para abrir el modal:", id);
      const product = allProducts.find(p => p.id === id);
  
      if (product) {
          document.getElementById("modal-title").setAttribute('data-id', product.id);
          document.getElementById("modal-img").src = product.img;
          document.getElementById("modal-title").innerText = product.name;
          document.getElementById("modal-price").innerText = `$${product.price.toLocaleString('es-AR')}`;
          document.getElementById("modal-features").innerHTML = product.features
              ? product.features.map(feature => `<li>${feature}</li>`).join("")
              : "<p>No hay características disponibles para este producto.</p>";
          document.getElementById("product-modal").style.display = "flex";
          document.getElementById("modal-overlay").style.display = "block"; // Mostrar el fondo oscuro
          document.body.classList.add('modal-open');
          document.body.style.overflow = "hidden";
      } else {
          console.error("Producto no encontrado. ID:", id);
      }
  };
  
  document.getElementById("modal-img").addEventListener("mousemove", (event) => {
    const img = event.target;
    const lens = document.getElementById("zoom-lens");
    const rect = img.getBoundingClientRect();
    const lensSize = 100; // Tamaño del lente

    // Calcula la posición del lente
    const x = event.clientX - rect.left - lensSize / 2;
    const y = event.clientY - rect.top - lensSize / 2;

    // Restricción de los límites del lente
    if (x >= 0 && x <= rect.width - lensSize && y >= 0 && y <= rect.height - lensSize) {
        lens.style.left = `${x}px`;
        lens.style.top = `${y}px`;
        lens.style.display = "block";

        // Ampliar la imagen
        img.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
        img.style.transform = "scale(1.8)"; // Ajusta el nivel de zoom
    } else {
        lens.style.display = "none";
        img.style.transform = "scale(1)"; // Restablecer la escala
    }
});

document.getElementById("modal-img").addEventListener("mouseleave", () => {
    const lens = document.getElementById("zoom-lens");
    lens.style.display = "none";
    document.getElementById("modal-img").style.transform = "scale(1)"; // Restablecer escala
});

  // Modifica `closeModal` para ocultar el fondo oscuro:
  window.closeModal = function() {
      console.log("Cerrando modal...");
      document.getElementById("product-modal").style.display = "none";
      document.getElementById("modal-overlay").style.display = "none"; // Ocultar el fondo oscuro
      document.body.classList.remove('modal-open');
      document.body.style.overflow = "auto";
  };

// Detectar clic fuera del modal
document.addEventListener('click', (event) => {
  const modal = document.getElementById("product-modal");
  if (modal.style.display === "flex" && !modal.contains(event.target) && !event.target.closest(".item")) {
      closeModal();
  }
});

// Renderizar productos
const renderProducts = (productsToRender) => {
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = productsToRender.slice(start, end);

  productsContainer.innerHTML = '';
  paginatedProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'item';
      productElement.setAttribute('data-product-id', product.id);
      productElement.innerHTML = `
          <figure>
              <img src="${product.img}" alt="${product.name}" />
          </figure>
          <div class="info-product">
              <h2>${product.name}</h2>
              <p class="price">$${product.price.toLocaleString('es-AR')}</p>
              <button class="add-to-cart-button">Añadir al carrito</button>
          </div>
      `;
      productsContainer.appendChild(productElement);

      // Agregar evento de clic a la imagen
      const img = productElement.querySelector('img');
      img.addEventListener('click', () => openModal(product.id));
  });

  document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = parseInt(event.target.closest(".item").getAttribute('data-product-id'), 10);
        const product = allProducts.find(p => p.id === productId);

        if (product) {
            const existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            updateCart(); // Actualiza el carrito
            console.log("Producto añadido al carrito:", product);
            showAddToCartMessage(); // Llama a la función para mostrar el mensaje
        } else {
            console.error("Producto no encontrado al intentar añadir al carrito. ID:", productId);
        }
    });
});

  prevPageButton.disabled = currentPage === 1;
  nextPageButton.disabled = end >= productsToRender.length;
  addEventListenersToCartButtons();
};

function showAddToCartMessage() {
    const message = document.getElementById("add-to-cart-message");

    if (!message) {
        console.error("El contenedor del mensaje no se encuentra.");
        return;
    }

    // Mostrar el mensaje
    message.style.display = "block";
    message.style.opacity = "1";
    message.style.transform = "translateY(0)";

    // Ocultar automáticamente después de 3 segundos
    setTimeout(() => {
        message.style.opacity = "0";
        message.style.transform = "translateY(-20px)";
        setTimeout(() => {
            message.style.display = "none";
        }, 500);
    }, 800);
}
// Botón de "Añadir al carrito" con el mensaje
document.getElementById("add-to-cart-modal-button").addEventListener('click', () => {
    const productId = parseInt(document.getElementById("modal-title").getAttribute('data-id'), 10);
    const product = allProducts.find(p => p.id === productId);

    if (product) {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart(); // Actualiza la visualización del carrito
        console.log("Producto añadido al carrito:", product);
        closeModal(); // Cierra el modal automáticamente
        showAddToCartMessage(); // Muestra el mensaje de confirmación
    } else {
        console.error("Producto no encontrado al intentar añadir al carrito. ID:", productId);
    }
});


    // Renderizar números de páginas
    const renderPageNumbers = (productsToPaginate) => {
        pageNumbersContainer.innerHTML = '';
        const totalPages = Math.ceil(productsToPaginate.length / productsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageNumberElement = document.createElement('span');
            pageNumberElement.className = 'page-number';
            pageNumberElement.innerText = i;
            if (i === currentPage) pageNumberElement.classList.add('active');
            pageNumberElement.addEventListener('click', () => {
                currentPage = i;
                renderProducts(productsToPaginate);
                updatePageNumbers(productsToPaginate);
            });
            pageNumbersContainer.appendChild(pageNumberElement);
        }
    };

    const updatePageNumbers = (productsToPaginate) => {
        const pageNumberElements = document.querySelectorAll('.page-number');
        pageNumberElements.forEach(pageNumber => {
            pageNumber.classList.remove('active');
            if (parseInt(pageNumber.innerText) === currentPage) {
                pageNumber.classList.add('active');
            }
        });
    };

    // Búsqueda de productos
    const searchProducts = () => {
        const searchTerm = searchInput.value.toLowerCase();
        filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        renderProducts(filteredProducts);
        renderPageNumbers(filteredProducts);

        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = '<p>No se encontraron productos.</p>';
        }
    };

    // Aplicar filtros
    const applyFilters = () => {
        filteredProducts = [...allProducts];

        const selectedBrands = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        if (selectedBrands.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                selectedBrands.includes(product.name.split(' ')[0])
            );
        }

        const maxPrice = parseInt(priceRange.value, 10);
        filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);

        currentPage = 1;
        renderProducts(filteredProducts);
        renderPageNumbers(filteredProducts);
    };
    
    // Manejo del carrito
    const toggleCart = () => {
        cartContainer.classList.toggle('hidden-cart');
    };

    const addEventListenersToCartButtons = () => {
        document.querySelectorAll('.add-to-cart-button').forEach(button => {
            button.removeEventListener('click', handleAddToCart); // Elimina eventos duplicados
            button.addEventListener('click', handleAddToCart); // Añade un solo evento
        });
    };

    const handleAddToCart = (event) => {
        event.stopPropagation(); // Evita que el evento se propague a otros elementos
        const productElement = event.target.closest('.item');
        const productId = parseInt(productElement.getAttribute('data-product-id'), 10);
        const product = allProducts.find(p => p.id === productId);
    
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 0;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    };
    const handleRemoveFromCart = (event) => {
        const productId = parseInt(event.target.getAttribute('data-id'), 10);
        cart = cart.filter(product => product.id !== productId);
        updateCart(); // Actualiza la vista del carrito
    };
    
    const addEventListenersToRemoveButtons = () => {
        document.querySelectorAll('.remove-product-button').forEach(button => {
            button.addEventListener('click', handleRemoveFromCart);
        });
    };
    
    const updateCart = () => {
        cartProductsContainer.innerHTML = '';
        let totalPrice = 0;
    
        cart.forEach(product => {
            const productHTML = `
                <div class="cart-product">
                    <span class="cantidad-producto-carrito">${product.quantity}</span>
                    <p class="titulo-producto-carrito">${product.name}</p>
                    <span class="precio-producto-carrito">$${product.price.toLocaleString('es-AR')}</span>
                    <button class="remove-product-button" data-id="${product.id}">Quitar</button>
                </div>
            `;
            cartProductsContainer.insertAdjacentHTML('beforeend', productHTML);
            totalPrice += product.price * product.quantity;
        });
    
        totalPriceElement.innerText = `$${totalPrice.toLocaleString('es-AR')}`;
        countProductsElement.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    
        addEventListenersToRemoveButtons(); // Llama para añadir eventos
    };

    const UpdateCart = () => {
        cartProductsContainer.innerHTML = ''; // Limpia el carrito
        let totalPrice = 0;
    
        cart.forEach(product => {
            const productHTML = `
                <div class="cart-product">
                    <span class="cantidad-producto-carrito">${product.quantity}</span>
                    <p class="titulo-producto-carrito">${product.name}</p>
                    <span class="precio-producto-carrito">$${product.price.toLocaleString('es-AR')}</span>
                    <button class="remove-product-button" data-id="${product.id}">Quitar</button>
                </div>
            `;
            cartProductsContainer.insertAdjacentHTML('beforeend', productHTML);
            totalPrice += product.price * product.quantity;
        });
    
        totalPriceElement.innerText = `$${totalPrice.toLocaleString('es-AR')}`;
        countProductsElement.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    
        addEventListenersToRemoveButtons(); // Asignar eventos a los botones de "Quitar"
    };

    

    const enviarPorWhatsApp = () => {
        const total = totalPriceElement.innerText; // Obtén el total del carrito
        const numeroTelefono = "+54 9 3512 53-6346"; // Número de WhatsApp
        let detalleProductos = "";
    
        // Construir el detalle de productos en el carrito
        cart.forEach(product => {
            detalleProductos += `${product.name} (${product.quantity})\n`;
        });
    
        // Crear el mensaje codificado para WhatsApp
        const mensaje = encodeURIComponent(`Hola, deseo cerrar mi compra. El total es: ${total}. Productos:\n${detalleProductos}`);
    
        // Detectar el dispositivo del usuario
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const url = isMobile 
            ? `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}` // Aplicación móvil
            : `https://web.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`; // Navegador
    
        // Abrir WhatsApp en una nueva pestaña
        window.open(url, "_blank");
    };
    

    // Ordenar productos
    const sortProducts = () => {
        if (sortOrder === 'lowest-price') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'highest-price') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }
        renderProducts(filteredProducts);
    };

    // Inicializar
    cartIcon.addEventListener('click', toggleCart);
    searchButton.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', searchProducts);
    sortDropdown.addEventListener('change', () => {
        sortOrder = sortDropdown.value;
        sortProducts();
    });
    filterCheckboxes.forEach(checkbox => checkbox.addEventListener('change', applyFilters));

    priceRange.addEventListener('input', () => {
        const minPrice = 200000; // Precio mínimo predeterminado
        const maxPrice = priceRange.value; // Precio máximo actual del rango
        priceRangeValue.innerText = `${minPrice.toLocaleString('es-AR')} - ${parseInt(maxPrice, 10).toLocaleString('es-AR')}`;
        applyFilters();
    });

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts(filteredProducts);
            updatePageNumbers(filteredProducts);
        }
    });

    nextPageButton.addEventListener('click', () => {
        if ((currentPage * productsPerPage) < filteredProducts.length) {
            currentPage++;
            renderProducts(filteredProducts);
            updatePageNumbers(filteredProducts);
        }
    });

    if (cerrarCompraButton) {
        cerrarCompraButton.addEventListener('click', enviarPorWhatsApp);
    }
  

    // Inicializar la aplicación
    loadProducts();
});

