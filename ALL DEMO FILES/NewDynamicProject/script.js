// Sample clothes data
const clothesData = [
      { "name": "T-shirt", "color": "Red", "size": "M", "type": "Casual" },
      { "name": "Jeans", "color": "Blue", "size": "L", "type": "Denim" },
      { "name": "Jacket", "color": "Green", "size": "S", "type": "Formal" },
      { "name": "Skirt", "color": "Red", "size": "M", "type": "Casual" },
      { "name": "Blouse", "color": "Blue", "size": "S", "type": "Formal" },
      { "name": "Sweater", "color": "Yellow", "size": "L", "type": "Casual" },
      { "name": "Dress", "color": "Black", "size": "M", "type": "Formal" },
      { "name": "Shorts", "color": "White", "size": "L", "type": "Casual" },
      { "name": "Coat", "color": "Gray", "size": "S", "type": "Formal" },
      { "name": "Pants", "color": "Green", "size": "M", "type": "Denim" },
      { "name": "Blazer", "color": "Blue", "size": "M", "type": "Formal" },
      { "name": "Tank Top", "color": "Red", "size": "S", "type": "Casual" }
  ];
  
  // Function to get selected values from the dropdowns
  function getSelectedValues() {
      const color = document.getElementById('color-sort').value;
      const size = document.getElementById('size-sort').value;
      const type = document.getElementById('type-sort').value;
      return { color, size, type };
  }
  
  // Function to filter data based on selected values
  function filterData(data, filters) {
      return data.filter(item => {
          return (!filters.color || item.color === filters.color) &&
                 (!filters.size || item.size === filters.size) &&
                 (!filters.type || item.type === filters.type);
      });
  }
  
  // Function to regenerate cards based on filtered data
  function regenerateCards(filteredData) {
      const container = document.getElementById('cards-container');
      container.innerHTML = ''; // Clear existing cards
  
      filteredData.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
              <h3>${item.name}</h3>
              <p>Color: ${item.color}</p>
              <p>Size: ${item.size}</p>
              <p>Type: ${item.type}</p>
          `;
          container.appendChild(card);
      });
  }
  
  // Function to sort items based on selected filters
  function sortItems() {
      const filters = getSelectedValues();
      const filteredData = filterData(clothesData, filters);
      regenerateCards(filteredData);
  }
  
  // Initial load of cards
  document.addEventListener('DOMContentLoaded', () => {
      regenerateCards(clothesData);
  });
  