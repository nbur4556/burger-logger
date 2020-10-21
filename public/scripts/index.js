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
                .append(`<li data-id="${data[i].id}">${data[i].burger_name} ${data[i].is_ready} 
                <button class="update-btn">Update</button>
                <button class="delete-btn">Delete</button> </li>`);
        }

        $('.update-btn').click(setOrderReady);
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
    }).then(data => {
        populateOrders();
    });
}

function setOrderReady() {
    // Set orders to ready
    $.ajax({
        url: 'api/burgers',
        type: 'PUT',
        data: {
            id: $(this).parent('li').data('id'),
            val: 1
        }
    }).then(data => {
        populateOrders();
    });
}

function removeOrder() {
    // Remove burger from database
    $.ajax({
        url: `api/burgers/${$(this).parent('li').data('id')}`,
        type: 'DELETE'
    }).then(data => {
        populateOrders();
    });
}