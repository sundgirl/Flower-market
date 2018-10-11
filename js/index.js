$('#exampleModal').on('show.bs.modal', function (event) {
  const button = $(event.relatedTarget) // Button that triggered the modal
  const recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  const modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$(document).ready(function () {
  $('.animated-icon1,.animated-icon3,.animated-icon4').click(function () {
    $(this).toggleClass('open');
  });
});

// Works everywhere
$(document).ready(function () {

  // Hide/show animation hamburger function
  $('.navbar-toggler').on('click', function () {

    // Take this line to first hamburger animations
    $('.animated-icon1').toggleClass('open');

    // Take this line to second hamburger animation
    $('.animated-icon3').toggleClass('open');

    // Take this line to third hamburger animation
    $('.animated-icon4').toggleClass('open');
  });

});