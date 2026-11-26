const products = [
    'Арбуз',
    'Книга',
    'Кофе',
    'Макароны',
    'Молоко',
    'Сахар',
    'Яблоки',
];

const productList = document.querySelector('#productList');
const addButton = document.querySelector('#addProduct');

function renderProducts() {
    productList.innerHTML = '';

    const sortedProducts = [...products].sort(
        (a, b) => a.localeCompare(b, 'ru')
    );

    sortedProducts.forEach((product) => {
        const li = document.createElement('li');
        li.textContent = product;
        productList.appendChild(li);
    });
}

function addProduct() {
    const product = prompt('Введите название товара');

    if (!product || !product.trim()) {
        alert('Название товара не введено!');
        return;
    }

    products.push(product.trim());
    renderProducts();
}

addButton.addEventListener('click', addProduct);

renderProducts();