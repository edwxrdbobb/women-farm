document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    const productImage = urlParams.get('image');
    const productPrice = urlParams.get('price');

    document.getElementById('product-name').textContent = productName;
    document.getElementById('product-image').src = productImage;
    document.getElementById('product-image').alt = productName;
    document.getElementById('product-price').textContent = productPrice;

    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const totalPriceElement = document.getElementById('total-price');

    function updateTotalPrice() {
        const quantity = parseInt(quantityInput.value);
        const price = parseFloat(productPrice.replace('Nle', ''));
        const total = (quantity * price).toFixed(2);
        totalPriceElement.textContent = `Total: Nle ${total}`;
    }

    decreaseBtn.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            updateTotalPrice();
        }
    });

    increaseBtn.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotalPrice();
    });

    quantityInput.addEventListener('change', updateTotalPrice);

    updateTotalPrice();

    const checkoutForm = document.getElementById('checkout-form');
    const paymentLogo = document.getElementById('payment-logo');
    const moneyNumberInput = document.getElementById('money-number');
    const formTitle = document.getElementById('form-title');

    function showCheckoutForm(paymentMethod, logoSrc) {
        paymentLogo.src = logoSrc;
        paymentLogo.alt = `${paymentMethod} Logo`;
        formTitle.textContent = `Complete Your ${paymentMethod} Purchase`;
        moneyNumberInput.placeholder = `${paymentMethod} Number`;
        checkoutForm.style.display = 'block';
        // document.getElementById('product-details').style.display = 'none';
    }

    document.getElementById('qmoney-btn').addEventListener('click', () => {
        showCheckoutForm('QMoney', 'assets/images/qmoney.jpg');
    });

    document.getElementById('orange-btn').addEventListener('click', () => {
        showCheckoutForm('Orange Money', 'assets/images/orange-money.png');
    });

    document.getElementById('afrimoney-btn').addEventListener('click', () => {
        showCheckoutForm('AfriMoney', 'assets/images/afri-money.png');
    });

    document.getElementById('submit-payment').addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const pin = document.getElementById('pin').value;
        const moneyNumber = document.getElementById('money-number').value;

        if (name && pin && moneyNumber) {
            checkoutForm.style.display = 'none';
            const successMessage = document.getElementById('success-message');
            successMessage.textContent = 'Payment Successful! Thank you for your purchase.';
            successMessage.style.display = 'block';
            setTimeout(() => {
            successMessage.style.display = 'none';
                
            }, 5000);
        } else {
            alert('Please fill in all fields');
        }
    });
});

