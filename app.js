const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/pizza', (req, res) => {
  const pizzas = [
    { id: 1, name: 'Margherita', ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 2, name: 'Pepperoni', ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 3, name: 'Vegetarian', ingredients: ['tomato', 'mozzarella', 'bell peppers', 'onions', 'mushrooms'] },
  ];

  res.json(pizzas);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
