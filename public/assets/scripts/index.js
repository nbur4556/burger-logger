$(document).ready(() => {
    $('#place-order').click(placeOrder);

    // Get all current burgers from database
    $.ajax({
        url: '/api/burgers',
        type: "GET"
    }).then(data => {
        console.log(data);
    });

});

function placeOrder() {
    let burgerName = $('#burger-input').val();

    $('.order-list').append(`<li>${burgerName}</li>`);
}