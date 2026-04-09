const searchInput = document.getElementById('searchInput');
const items = document.querySelectorAll('.product-item');

searchInput.addEventListener('input', function() {
  const searchValue = searchInput.value.toLowerCase();

  items.forEach(item => {
    const title = item.querySelector('h2').textContent.toLowerCase();

    if (title.includes(searchValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});