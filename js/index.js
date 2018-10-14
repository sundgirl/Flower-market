const cart = new Cart($('#cartModal'));
const productList = new ProductList('products.json', $('.products-container'), cart);

$('#exampleModal').on('show.bs.modal', function (event) {
  const button = $(event.relatedTarget) // Button that triggered the modal
  const recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  const modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

document.querySelector('.flower-card').addEventListener('mouseover', hoverImgOver);
function hoverImgOver(){
  document.querySelector('.flower-card').style.backgroundColor="rgba(229, 229, 229, 0.7)";
  document.querySelector('.flower-card').style.cursor="pointer";
}

document.querySelector('.flower-card').addEventListener('mouseout', hoverImgOut);
function hoverImgOut(){
  document.querySelector('.flower-card').style.backgroundColor="transparent";
  document.querySelector('.flower-card').style.cursor="default";
}

