$(document).ready(() => {
    $('#place-order').click(placeOrder);

    populateOrders();
});

function populateOrders() {
    $('.order-list').empty();

    // Get all current burgers from database
    $.ajax({
        url: '/api/burgers',
        type: "GET"
    }).then(data => {
        // Append all burgers to order list
        for (let i = 0; i < data.length; i++) {
            $('.order-list')
                .append(`<li data-id="${data[i].id}">${data[i].burger_name} <button class="delete-btn">Delete</button> </li>`);
        }

        $('.delete-btn').click(removeOrder);
    });
}

function placeOrder() {
    let burgerName = $('#burger-input').val();

    // Send burger to database
    $.ajax({
        url: 'api/burgers',
        type: 'POST',
        data: {
            burger_name: burgerName
        }
    });

    populateOrders();
}

function removeOrder(e) {
    const burgerListItem = e.currentTarget.parentElement;

    $.ajax({
        url: `api/burgers/${$(burgerListItem).attr("data-id")}`,
        type: 'DELETE'
    });

    populateOrders();
}