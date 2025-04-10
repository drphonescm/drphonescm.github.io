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

    document.addEventListener('DOMContentLoaded', () => {
        
        const sidebar = document.querySelector('.sidebar');
        const toggleCheckbox = document.querySelector('.toggle-checkbox');
        const toggleLabel = document.querySelector('.toggle-label'); 
    
        
        if (!sidebar || !toggleCheckbox || !toggleLabel) {
            console.error("Error: No se encontraron los elementos necesarios en el DOM.");
            return;
        }
    
        
        const toggleSidebar = () => {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open'); 
                toggleCheckbox.checked = false; 
                console.log("Sidebar cerrada");
            } else {
                sidebar.classList.add('open'); 
                toggleCheckbox.checked = true; 
                console.log("Sidebar abierta");
            }
        };
    
        
        toggleLabel.addEventListener('click', (event) => {
            event.preventDefault(); 
            toggleSidebar(); 
        });
    
        
        document.addEventListener('click', (event) => {
            if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !toggleLabel.contains(event.target)) {
                sidebar.classList.remove('open'); 
                toggleCheckbox.checked = false; 
                console.log("Sidebar cerrada por clic fuera de la barra");
            }
        });
    
        
        sidebar.classList.remove('open'); 
        toggleCheckbox.checked = false; 
        console.log("Configuración inicial: Sidebar cerrada");
    });
    

    
    const loadProducts = () => {
       allProducts = [
        
    { id: 1, name: "Motorola Moto G04s", price: 222019, img: "https://drphonescm.github.io/img/CELULARES/G04S.png", features: ["Pantalla: 6.5''", "Almacenamiento: 128 GB", "RAM: 4 GB", "Cámara: 48 MP"] },
    { id: 2, name: "Motorola Moto G24 Power", price: 237878, img: "https://drphonescm.github.io/img/CELULARES/G24%20POWER.png", features: ["Pantalla: 6.6''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 50 MP"] },
    { id: 3, name: "Motorola Moto G14", price: 222019, img: "https://drphonescm.github.io/img/CELULARES/G14.png", features: ["Pantalla: 6.5''", "Almacenamiento: 128 GB", "RAM: 4 GB", "Cámara: 50 MP"] },
    { id: 4, name: "Samsung Galaxy A05", price: 245807, img: "https://drphonescm.github.io/img/CELULARES/A05.png", features: ["Pantalla: 6.6''", "Almacenamiento: 128 GB", "RAM: 4 GB", "Cámara: 64 MP"] },
    { id: 5, name: "Xiaomi Redmi Note 13", price: 323513, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2013.png", features: ["Pantalla: 6.67''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
    { id: 6, name: "Samsung Galaxy A15", price: 333029, img: "https://drphonescm.github.io/img/CELULARES/A15.png", features: ["Pantalla: 6.5''", "Almacenamiento: 128 GB", "RAM: 6 GB", "Cámara: 50 MP"] },
    { id: 7, name: "Samsung Galaxy A25", price: 348887, img: "https://drphonescm.github.io/img/CELULARES/A25.png", features: ["Pantalla: 6.7''", "Almacenamiento: 128 GB", "RAM: 8 GB", "Cámara: 64 MP"] },
    { id: 8, name: "Samsung Galaxy A25", price: 396463, img: "https://drphonescm.github.io/img/CELULARES/A25%20256GB.png", features: ["Pantalla: 6.7''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 64 MP"] },
    { id: 9, name: "Samsung Galaxy A35", price: 475755, img: "https://drphonescm.github.io/img/CELULARES/A35.png", features: ["Pantalla: 6.5''", "Almacenamiento: 128 GB", "RAM: 6 GB", "Cámara: 108 MP"] },
    { id: 10, name: "Samsung Galaxy A35", price: 594694, img: "https://drphonescm.github.io/img/CELULARES/A35%20256.png", features: ["Pantalla: 6.5''", "Almacenamiento: 256 GB", "RAM: 6 GB", "Cámara: 108 MP"] },
    { id: 11, name: "Samsung Galaxy A55", price: 547118, img: "https://drphonescm.github.io/img/CELULARES/A55.png", features: ["Pantalla: 6.7''", "Almacenamiento: 128 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
    { id: 12, name: "Samsung Galaxy A55", price: 602623, img: "https://drphonescm.github.io/img/CELULARES/A55%20256.png", features: ["Pantalla: 6.7''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
    { id: 13, name: "Samsung S23 ULTRA", price: "in Stock", img: "https://drphonescm.github.io/img/CELULARES/S23%20ULTRA.png", features: ["Pantalla: 6.8''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
    { id: 14, name: "Samsung S23 ULTRA", price: "in Stock", img: "https://drphonescm.github.io/img/CELULARES/S23%20ULTRA%20512.png", features: ["Pantalla: 6.8''", "Almacenamiento: 512 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
    { id: 15, name: "Samsung S24 FE", price: 984999, img: "https://drphonescm.github.io/img/CELULARES/S24%20FE.png", features: ["Pantalla: 6.8''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
    { id: 16, name: "Samsung S24 ULTRA", price: 1245237, img: "https://drphonescm.github.io/img/CELULARES/S24%20256.png", features: ["Pantalla: 6.9''", "Almacenamiento: 256 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
    { id: 17, name: "Samsung S24 ULTRA", price: 1375999, img: "https://drphonescm.github.io/img/CELULARES/S24%20512.png", features: ["Pantalla: 6.9''", "Almacenamiento: 512 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
    { id: 18, name: "Xiaomi Redmi Note 13 PRO", price: 586765, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2013%20PRO.png", features: ["Pantalla: 6.6''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 200 MP"] },
    { id: 19, name: "Xiaomi Redmi Note 13 PRO", price: 650198, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2013%20PRO%20512.png", features: ["Pantalla: 6.6''", "Almacenamiento: 512 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
    { id: 20, name: "Xiaomi Redmi Note 13 PRO PLUS", price: 650199, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2013%20PRO%20PLUS.png", features: ["Pantalla: 6.67''", "Almacenamiento: 256 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
    { id: 21, name: "Xiaomi Redmi Note 13C", price: 222019, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2013C.png", features: ["Pantalla: 6.5''", "Almacenamiento: 128 GB", "RAM: 4 GB", "Cámara: 50 MP"] },
    { id: 22, name: "Xiaomi Redmi Note 14C", price: 222019, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2014C.png", features: ["Pantalla: 6.6''", "Almacenamiento: 128 GB", "RAM: 8 GB", "Cámara: 64 MP"] },
    { id: 23, name: "Motorola Moto G14", price: 293383, img: "https://drphonescm.github.io/img/CELULARES/G14%20256.png", features: ["Pantalla: 6.5''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 64 MP"] },
    { id: 24, name: "Xiaomi Redmi Note 14 PRO PLUS", price: 729999, img: "https://drphonescm.github.io/img/CELULARES/NOTE%2014%20PRO.png", features: ["Pantalla: 6.67''", "Almacenamiento: 512 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
    { id: 25, name: "Motorola Moto G84", price: 329857, img: "https://drphonescm.github.io/img/CELULARES/G84.png", features: ["Pantalla: 6.55''", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 50 MP"] },
    { id: 26, name: "Motorola E14", price: 142726, img: "https://drphonescm.github.io/img/CELULARES/E14.png", features: ["Pantalla: 6.3'' HD+", "Almacenamiento: 64 GB", "RAM: 2 GB", "Cámara: 13 MP"] },
    { id: 27, name: "Motorola G34 5G", price: 293382, img: "https://drphonescm.github.io/img/CELULARES/G34.png", features: ["Pantalla: 6.5'' FHD+", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 50 MP"] },
    { id: 28, name: "Samsung Galaxy A06", price: 207746, img: "https://drphonescm.github.io/img/CELULARES/A06.png", features: ["Pantalla: 6.6'' HD+", "Almacenamiento: 128 GB", "RAM: 4 GB", "Cámara: 48 MP"] },
    { id: 29, name: "Samsung Galaxy A16", price: 272766, img: "https://drphonescm.github.io/img/CELULARES/A16.png", features: ["Pantalla: 6.5'' HD+", "Almacenamiento: 128 GB", "RAM: 4 GB", "Cámara: 50 MP"] },
    { id: 30, name: "Samsung Galaxy A26", price: 491613, img: "https://drphonescm.github.io/img/CELULARES/A26.png", features: ["Pantalla: 6.6'' FHD+", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 64 MP"] },
    { id: 31, name: "Samsung Galaxy A36", price: 650198, img: "https://drphonescm.github.io/img/CELULARES/A36.png", features: ["Pantalla: 6.6'' FHD+", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 108 MP"] },
    { id: 32, name: "Samsung Galaxy A56", price: 713632, img: "https://drphonescm.github.io/img/CELULARES/A56.png", features: ["Pantalla: 6.8'' AMOLED", "Almacenamiento: 128 GB", "RAM: 8 GB", "Cámara: 50 MP"] },
    { id: 33, name: "Samsung Galaxy A56", price: 792925, img: "https://drphonescm.github.io/img/CELULARES/A56256.png", features: ["Pantalla: 6.8'' AMOLED", "Almacenamiento: 256 GB", "RAM: 12 GB", "Cámara: 50 MP"] },
    { id: 34, name: "Samsung Galaxy S25 Ultra", price: 1925773, img: "https://drphonescm.github.io/img/CELULARES/S25ULTRA256.png", features: ["Pantalla: 6.8'' Dynamic AMOLED", "Almacenamiento: 256 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
    { id: 35, name: "Samsung Galaxy S25 Ultra", price: 2099527, img: "https://drphonescm.github.io/img/CELULARES/S25ULTRA.png", features: ["Pantalla: 6.8'' Dynamic AMOLED", "Almacenamiento: 512 GB", "RAM: 12 GB", "Cámara: 200 MP"] },
    { id: 36, name: "Xiaomi Poco C75", price: 218847, img: "https://drphonescm.github.io/img/CELULARES/POCOC75.png", features: ["Pantalla: 6.5'' IPS", "Almacenamiento: 256 GB", "RAM: 8 GB", "Cámara: 50 MP"] },
    { id: 37, name: "Xiaomi 14T Pro", price: 999306, img: "https://drphonescm.github.io/img/CELULARES/14T.png", features: ["Pantalla: 6.67'' AMOLED", "Almacenamiento: 512 GB", "RAM: 12 GB", "Cámara: 50 MP"] }

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
    const lensSize = 100; 

    
    const x = event.clientX - rect.left - lensSize / 2;
    const y = event.clientY - rect.top - lensSize / 2;

    
    if (x >= 0 && x <= rect.width - lensSize && y >= 0 && y <= rect.height - lensSize) {
        lens.style.left = `${x}px`;
        lens.style.top = `${y}px`;
        lens.style.display = "block";

        
        img.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
        img.style.transform = "scale(1.8)"; 
    } else {
        lens.style.display = "none";
        img.style.transform = "scale(1)"; 
    }
});

document.getElementById("modal-img").addEventListener("mouseleave", () => {
    const lens = document.getElementById("zoom-lens");
    lens.style.display = "none";
    document.getElementById("modal-img").style.transform = "scale(1)"; 
});

  
  window.closeModal = function() {
      console.log("Cerrando modal...");
      document.getElementById("product-modal").style.display = "none";
      document.getElementById("modal-overlay").style.display = "none"; 
      document.body.classList.remove('modal-open');
      document.body.style.overflow = "auto";
  };


document.addEventListener('click', (event) => {
  const modal = document.getElementById("product-modal");
  if (modal.style.display === "flex" && !modal.contains(event.target) && !event.target.closest(".item")) {
      closeModal();
  }
});


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
            updateCart(); 
            console.log("Producto añadido al carrito:", product);
            showAddToCartMessage(); 
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

    
    message.style.display = "block";
    message.style.opacity = "1";
    message.style.transform = "translateY(0)";

    
    setTimeout(() => {
        message.style.opacity = "0";
        message.style.transform = "translateY(-20px)";
        setTimeout(() => {
            message.style.display = "none";
        }, 500);
    }, 800);
}

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
        updateCart(); 
        console.log("Producto añadido al carrito:", product);
        closeModal(); 
        showAddToCartMessage(); 
    } else {
        console.error("Producto no encontrado al intentar añadir al carrito. ID:", productId);
    }
});


    
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
    
    const toggleCart = () => {
        const cartContainer = document.querySelector('.container-cart-products');
        cartContainer.classList.toggle('hidden-cart'); 
    };

    const addEventListenersToCartButtons = () => {
        document.querySelectorAll('.add-to-cart-button').forEach(button => {
            button.removeEventListener('click', handleAddToCart); 
            button.addEventListener('click', handleAddToCart); 
        });
    };

    const handleAddToCart = (event) => {
        event.stopPropagation(); 
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
        updateCart(); 
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
    
        addEventListenersToRemoveButtons(); 
    };

    const UpdateCart = () => {
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
    
        addEventListenersToRemoveButtons(); 
    };

    

    const enviarPorWhatsApp = () => {
        const total = totalPriceElement.innerText; 
        const numeroTelefono = "+54 9 3512 53-6346"; 
        let detalleProductos = "";
    
        
        cart.forEach(product => {
            detalleProductos += `${product.name} (${product.quantity})\n`;
        });
    
        
        const mensaje = encodeURIComponent(`Hola, deseo cerrar mi compra. El total es: ${total}. Productos:\n${detalleProductos}`);
    
        
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const url = isMobile 
            ? `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}` // Aplicación móvil
            : `https://web.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`; // Navegador
    
        
        window.open(url, "_blank");
    };
    

   
    const sortProducts = () => {
        if (sortOrder === 'lowest-price') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'highest-price') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }
        renderProducts(filteredProducts);
    };

    
    cartIcon.addEventListener('click', toggleCart);
    searchButton.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', searchProducts);
    sortDropdown.addEventListener('change', () => {
        sortOrder = sortDropdown.value;
        sortProducts();
    });
    filterCheckboxes.forEach(checkbox => checkbox.addEventListener('change', applyFilters));

    priceRange.addEventListener('input', () => {
        const minPrice = 200000; 
        const maxPrice = priceRange.value; 
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
  
    
    
    loadProducts();

});

