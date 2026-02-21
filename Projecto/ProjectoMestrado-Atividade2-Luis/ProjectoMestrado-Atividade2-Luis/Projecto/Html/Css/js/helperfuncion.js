/* Sincronizar contador do carrinho com localStorage */
function syncCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountEl = document.getElementById('cartCount');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCountEl) cartCountEl.textContent = totalItems;
}

/* Limpar carrinho quando está na página Index (home) e faz refresh da página */
function clearCartOnHome() {
    const pageTitle = document.title;
    const isHomePage = pageTitle.includes('Apple Store | Projecto PWD') && !pageTitle.includes('Carrinho') && !pageTitle.includes('Detalhes');
    
    // Verifica se é um reload (F5, Ctrl+R ou botão refresh)
    const isPageReload = performance.navigation.type === 1;
    
    // So limpa carrinho se está na home E fez refresh
    if (isHomePage && isPageReload) {
        localStorage.removeItem('cart');
        syncCartCount();
    }
}

/* Funcao para trocar imagens de produtos usando rounded-cicle|product-main-image */
    document.addEventListener('DOMContentLoaded', function(){
        // Limpar carrinho se está na home
        clearCartOnHome();
        
        // Sincronizar carrinho ao carregar página
        syncCartCount();

        // If product-detail page received `name` and `images` via query params, initialize the page
        const params = new URLSearchParams(window.location.search);
        const imagesParam = params.get('images');
        const nameParam = params.get('name');
        const mainImg = document.querySelector('.product-main-image');

        if (nameParam) {
            // set page and product title when provided
            const h2 = document.querySelector('h2');
            const titleEl = document.querySelector('.section-title');
            if (h2) h2.textContent = decodeURIComponent(nameParam);
            if (titleEl) titleEl.textContent = decodeURIComponent(nameParam);
            document.title = decodeURIComponent(nameParam) + ' - Apple Store | Projecto PWD';
        }

        if (imagesParam && mainImg) {
            const imgs = imagesParam.split('|');
            // set main image to first
            mainImg.src = imgs[0];

            // find the color-dots container (the sibling div after the image)
            let dotsContainer = null;
            const imgParent = mainImg.parentElement;
            if (imgParent) {
                dotsContainer = imgParent.querySelector('.mt-3.d-flex') || imgParent.querySelector('div');
            }

            // remove existing dots and build new ones
            if (dotsContainer) {
                dotsContainer.innerHTML = '';
                const bgClasses = ['bg-secondary','bg-warning','bg-dark','bg-info','bg-light','bg-primary'];
                imgs.forEach((p,i)=>{
                    const span = document.createElement('span');
                    span.className = `color-dot d-inline-block ${bgClasses[i % bgClasses.length]} rounded-circle`;
                    span.setAttribute('data-img', p);
                    span.style.width = '12px';
                    span.style.height = '12px';
                    span.style.cursor = 'pointer';
                    dotsContainer.appendChild(span);
                });
            }
        }

        const dots = document.querySelectorAll('.color-dot');
        let selectedColor = null;
        let selectedColorName = 'Indisponível';
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const img = dot.getAttribute('data-img');
                if(img && mainImg) mainImg.src = img;
                dots.forEach(d=>d.classList.remove('border','border-2','border-primary'));
                dot.classList.add('border','border-2','border-primary');
                
                // Get color from image filename
                const colorMap = {
                    'iphone17pro2.png': 'Laranja Cósmico',
                    'iphone17pro3.png': 'Preto',
                    'iphone17pro.png': 'Cinzento'
                };
                selectedColor = img;
                const fileName = img.split('/').pop();
                selectedColorName = colorMap[fileName] || fileName.split('.')[0];
            });
        });

        // Adicionar qualidade de armazenamento na página de detalhes do produto
        let selectedCapacity = null;
        const capButtons = document.querySelectorAll('.capacity-btn');
        capButtons.forEach(btn=>{
            btn.addEventListener('click', () => {
                capButtons.forEach(b=>b.classList.remove('btn-primary'));
                capButtons.forEach(b=>b.classList.add('btn-outline-secondary'));
                btn.classList.remove('btn-outline-secondary');
                btn.classList.add('btn-primary');
                selectedCapacity = btn.getAttribute('data-cap');
            });
        });

        // adicionar ao carrinho e atualizar contador
        const cartBtn = document.querySelector('#addCartBtn');
        cartBtn && cartBtn.addEventListener('click', () => {
            // Check if capacity/option is selected
            if (!selectedCapacity) {
                alert('Por favor, selecione uma opção antes de adicionar ao carrinho');
                return;
            }

            // Detectar qual página e produto está sendo usado - mac, ipad ou iphone
            const pageTitle = document.title;
            const isMac = pageTitle.includes('Mac') || window.location.pathname.includes('Mac') || window.location.pathname.includes('product-detail-Mac');
            const isIPad = pageTitle.includes('iPad') || window.location.pathname.includes('iPad');
            
            // selecionar o carrinho do localStorage ou criar um novo se não existir
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            // Definir detalhes do produto baseado na página
            let productImage, productName, productPrice;
            
            if (isMac) {
                // MacBook Pro - Detalhes (processador/variações)
                productImage = mainImg ? mainImg.src : '../imagens/Macs/MacBookPro14.png';
                productName = 'MacBook Pro';
                switch (selectedCapacity) {
                    case 'M5':
                        productPrice = '1849.00';
                        break;
                    case 'M4 Pro':
                        productPrice = '2399.00';
                        break;
                    case 'M4 Max':
                        productPrice = '3899.00';
                        break;
                    default:
                        productPrice = '1849.00';
                }
            } else if (isIPad) {
                // iPad Pro - Detalhes
                productImage = mainImg ? mainImg.src : '../imagens/iPads/iPadPro13m5.png';
                productName = 'iPad Pro';
                switch (selectedCapacity) {
                    case '256 GB':
                        productPrice = '1479.00';
                        break;
                    case '512 GB':
                        productPrice = '1729.00';
                        break;
                    case '1 TB':
                        productPrice = '2209.00';
                        break;
                    case '2 TB':
                        productPrice = '2689.00';
                        break;
                    default:
                        productPrice = '1479.00';
                }
            } else {
                // iPhone 17 Pro - Detalhes
                productImage = mainImg ? mainImg.src : '../imagens/iPhones/iPhone17pro/iphone17pro.png';
                productName = 'iPhone 17 pro';
                productPrice = selectedCapacity === '256 GB' ? '1349.00' : selectedCapacity === '512 GB' ? '1599.00' : '1849.00';
            }
            
            // Criar novo item para o carrinho
            const newItem = {
                name: productName,
                image: productImage,
                color: selectedColorName,
                capacity: selectedCapacity,
                price: productPrice,
                quantity: 1
            };
            
            // Verificar se o produto já existe no carrinho com a mesma cor e capacidade
            const existingItem = cart.find(item => 
                item.name === productName && 
                item.color === selectedColorName && 
                item.capacity === selectedCapacity
            );
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(newItem);
            }
            
            // Armazenar carrinho atualizado no localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Atualizar contador do carrinho
            const cartCountEl = document.getElementById('cartCount');
            cartCountEl.textContent = cart.reduce((total, item) => total + item.quantity, 0);
            
            console.log('Adicionado ao carrinho:', newItem);
            alert('Produto adicionado ao carrinho com sucesso!');
        });
        
        // Adicionar destaque ao primeiro ponto de cor por padrão
        if (dots.length > 0) {
            dots[0].classList.add('border','border-2','border-primary');
            selectedColorName = 'Cinzento';
        }
    });

    /*------------------------------------------------------------------------------------- */
    
    /* CART PAGE FUNCTIONS - Funções da página do carrinho */
    
    // Load cart items from localStorage
    function Cart_loadItems() {
        const cartContainer = document.getElementById('cartItemsContainer');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        cartContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartContainer.innerHTML = '<tr><td colspan="4" class="text-center py-4">Carrinho vazio</td></tr>';
            Cart_updateTotals();
            return;
        }
        
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            const unitPrice = parseFloat(item.price) || 1349;
            const itemTotal = unitPrice * item.quantity;
            
            row.innerHTML = `
                <td>
                    <input type="checkbox" class="product-checkbox" checked>
                </td>
                <td>
                    <div class="product-info">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="product-details">
                            <h5>${item.name}</h5>
                            <p>Armazenamento - ${item.capacity}</p>
                            <p>Cor - ${item.color}</p>
                            <p>${unitPrice.toFixed(2).replace('.', ',')} €</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="quantity-selector">
                        <button class="qty-btn" data-index="${index}" data-action="minus">−</button>
                        <input type="number" class="qty-input" value="${item.quantity}" data-index="${index}" min="1">
                        <button class="qty-btn" data-index="${index}" data-action="plus">+</button>
                    </div>
                </td>
                <td>
                    <strong>${itemTotal.toFixed(2).replace('.', ',')} €</strong>
                </td>
            `;
            cartContainer.appendChild(row);
        });
        
        // adicionar listeners para os botões de quantidade e checkboxes(eventos(listeners))
        Cart_attachQuantityListeners();//Carregar os listeners de quantidade
        Cart_attachCheckboxListeners();//Carregar os listeners de checkbox
        Cart_updateTotals();//Atualizar os totais do carrinho
    }
    
    function Cart_attachQuantityListeners() {
        const plusBtns = document.querySelectorAll('.qty-btn[data-action="plus"]');
        const minusBtns = document.querySelectorAll('.qty-btn[data-action="minus"]');
        const inputs = document.querySelectorAll('.qty-input');
        
        plusBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const index = this.dataset.index;
                Cart_updateQuantity(index, 1);
            });
        });
        
        minusBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const index = this.dataset.index;
                Cart_updateQuantity(index, -1);
            });
        });
        
        inputs.forEach(input => {
            input.addEventListener('change', function() {
                const index = this.dataset.index;
                const newQty = parseInt(this.value) || 1;
                Cart_setQuantity(index, newQty);
            });
        });
    }
    
    function Cart_updateQuantity(index, change) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart[index]) {
            cart[index].quantity += change;
            
            // Remove item if quantity reaches 0
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            Cart_loadItems();
            syncCartCount();
        }
    }
    
    function Cart_setQuantity(index, qty) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart[index]) {
            cart[index].quantity = parseInt(qty) || 0;
            
            // Remove item if quantity reaches 0
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            Cart_loadItems();
            syncCartCount();
        }
    }
    
    function Cart_updateTotals() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = 0;
        
        // Get all checkboxes and calculate only selected items
        const checkboxes = document.querySelectorAll('.product-checkbox');
        const rows = document.querySelectorAll('#cartItemsContainer tr');
        
        rows.forEach((row, index) => {
            const checkbox = row.querySelector('.product-checkbox');
            if (checkbox && checkbox.checked && cart[index]) {
                const unitPrice = parseFloat(cart[index].price) || 1349;
                subtotal += unitPrice * cart[index].quantity;
            }
        });
        
        const subtotalElement = document.getElementById('subtotal');
        const totalElement = document.getElementById('totalPrice');
        
        if (subtotalElement) subtotalElement.textContent = subtotal.toFixed(2).replace('.', ',') + ' €';
        if (totalElement) totalElement.textContent = subtotal.toFixed(2).replace('.', ',') + ' €';
    }
    
    function Cart_attachCheckboxListeners() {
        const checkboxes = document.querySelectorAll('.product-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                Cart_updateTotals();
            });
        });
    }
    
    // Initialize cart page on load
    document.addEventListener('DOMContentLoaded', function() {
        if (document.getElementById('cartItemsContainer')) {
            syncCartCount();
            Cart_loadItems();
        }
    });