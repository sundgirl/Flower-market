class ProductList {
    constructor (productsUrl, renderContainer, cart) {
        this.cart = cart;
        fetch(productsUrl)
            .then(result => result.json() )
            .then(products => {
                this.products = products;
                this.renderProducts(renderContainer, products);
                this.addEventListeners();
            })
    }
    getProductById(id) {
        return this.products.find(el => el.id === id);
    }
    renderProducts(container, products) {
        let productListDomString = ''
        products.forEach(product => {
            productListDomString += 
                `<div class="col-lg-3 col-md-4 col-sm-6 col-12 ">
                  <div class="card product style-card">
                    <img class="card-img-top style-card-img data-toggle="modal"
                        data-target="#cardModalCenter" data-id="${product.id}"" src="img/${product.image}" 
                        alt="${product.title}">
                    <div class="card-body">
                      <h4 class="card-title">${product.title}</h4>
                      
                      <button class="btn btn-info" data-toggle="modal"
                        data-target="#cardModalCenter" data-id="${product.id}">Info
                      </button>
                      <button class="btn btn-primary buy" data-id="${product.id}">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>`;
        });
        container.html(productListDomString);
    }
    addEventListeners() {
        $('#cardModalCenter').on('show.bs.modal', event => {
            const button = $(event.relatedTarget); // Button that triggered the modal
            const id  = String(button.data('id')); // Extract info from data-* attributes
            const product = this.getProductById(id);
            const modal = $('#cardModalCenter');
            modal.find('.modal-body .card-img-top .style-card-img')
                .attr('src', 'img/'+product.image)
                .attr('alt', product.title);
            modal.find('.modal-body .card-title').text(product.title);
            modal.find('.modal-body .card-text').text(product.description);
            modal.find('button.buy')
                .text(`${product.price} - Buy`)
                .data('id', id);
        });
        $('.card.product button.buy, #cardModalCenter button.buy').click( event => {
            const button = $(event.target);
            const id  = button.data('id'); 
            this.cart.addProduct(id);
            window.showAlert('Product added to cart');
        });
    }
}
