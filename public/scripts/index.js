$(document).ready(() => {
    $('#place-order').click(placeOrder);
    populateOrders();
});

function populateOrders() {
    const orderList = $('.order-list');
    const readyList = $('.ready-list');

    // Clear lists
    orderList.empty();
    readyList.empty();

    // Get all burgers from database
    $.ajax({
        url: '/api/burgers',
        type: "GET"
    }).then(data => {
        for (let i = 0; i < data.length; i++) {
            // Create burger item
            let burgerButton = $(`<button data-id=${data[i].id}>`);
            burgerButton.addClass('list-group-item list-group-item-action');
            burgerButton.text(data[i].burger_name);

            if (data[i].is_ready === 0) {
                // Append burgers to order list
                burgerButton.addClass('update-btn');
                orderList.append(burgerButton);
            }
            else {
                // Append burgers to ready list
                burgerButton.addClass('delete-btn');
                readyList.append(burgerButton);
            }
        }

        // Add button listeners
        $('.update-btn').click(setOrderReady);
        $('.delete-btn').click(removeOrder);
    });
}

function placeOrder() {
    let burgerName = $('#burger-input').val();

    // Clear burger input text box
    $('#burger-input').val("");

    // Send burger to database
    $.ajax({
        url: 'api/burgers',
        type: 'POST',
        data: {
            burger_name: burgerName
        }
    }).then(data => {
        // Re-render lists
        populateOrders();
    });
}

function setOrderReady() {
    // Set orders to ready
    $.ajax({
        url: 'api/burgers',
        type: 'PUT',
        data: {
            id: $(this).data('id'),
            val: 1
        }
    }).then(data => {
        // Re-render lists
        populateOrders();
    });
}

function removeOrder() {
    // Remove burger from database
    $.ajax({
        url: `api/burgers/${$(this).data('id')}`,
        type: 'DELETE'
    }).then(data => {
        // Re-render lists
        populateOrders();
    });
}