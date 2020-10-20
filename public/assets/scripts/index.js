$(document).ready(() => {
    $('#place-order').click(placeOrder);
});

function placeOrder() {
    let burgerName = $('#burger-input').val();

    $('.order-list').append(`<li> ${burgerName} <button class="ready-order">Ready</button> </li>`);
}