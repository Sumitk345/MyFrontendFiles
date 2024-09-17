

let mockReceipes = [
	{
		"id": 2,
		"foodtype": "non veg",
		"receipename": "chicken tikka",
		"details": {
			"cost": "Rs.120",
			"ingridiants": [
				{"id": 1, "title": "chicken", "quantity": "500 grams"},
				{"id": 2, "title": "yogurt", "quantity": "1 cup"},
				{"id": 3, "title": "tikka masala", "quantity": "2 tablespoons"},
				{"id": 4, "title": "lemon juice", "quantity": "1 tablespoon"}
			]
		},
		"foodcategory": "punjabi"
	},
	{
		"id": 3,
		"foodtype": "veg",
		"receipename": "vegetable biryani",
		"details": {
			"cost": "Rs.70",
			"ingridiants": [
				{"id": 1, "title": "basmati rice", "quantity": "1 cup"},
				{"id": 2, "title": "mixed vegetables", "quantity": "1 cup"},
				{"id": 3, "title": "biryani masala", "quantity": "2 tablespoons"},
				{"id": 4, "title": "yogurt", "quantity": "1/2 cup"}
			]
		},
		"foodcategory": "south indian"
	},
	{
		"id": 4,
		"foodtype": "non veg",
		"receipename": "mutton curry",
		"details": {
			"cost": "Rs.180",
			"ingridiants": [
				{"id": 1, "title": "mutton", "quantity": "500 grams"},
				{"id": 2, "title": "onions", "quantity": "2 large"},
				{"id": 3, "title": "tomatoes", "quantity": "2 medium"},
				{"id": 4, "title": "curry powder", "quantity": "2 tablespoons"}
			]
		},
		"foodcategory": "gujarati"
	},
	{
		"id": 5,
		"foodtype": "veg",
		"receipename": "paneer butter masala",
		"details": {
			"cost": "Rs.100",
			"ingridiants": [
				{"id": 1, "title": "paneer", "quantity": "250 grams"},
				{"id": 2, "title": "butter", "quantity": "2 tablespoons"},
				{"id": 3, "title": "tomato puree", "quantity": "1 cup"},
				{"id": 4, "title": "cream", "quantity": "1/4 cup"}
			]
		},
		"foodcategory": "punjabi"
	},
	{
		"id": 6,
		"foodtype": "non veg",
		"receipename": "fish fry",
		"details": {
			"cost": "Rs.90",
			"ingridiants": [
				{"id": 1, "title": "fish fillets", "quantity": "300 grams"},
				{"id": 2, "title": "turmeric powder", "quantity": "1 teaspoon"},
				{"id": 3, "title": "red chili powder", "quantity": "1 teaspoon"},
				{"id": 4, "title": "lemon juice", "quantity": "1 tablespoon"}
			]
		},
		"foodcategory": "south indian"
	},
	{
		"id": 7,
		"foodtype": "veg",
		"receipename": "palak paneer",
		"details": {
			"cost": "Rs.85",
			"ingridiants": [
				{"id": 1, "title": "palak", "quantity": "1 bunch"},
				{"id": 2, "title": "paneer", "quantity": "200 grams"},
				{"id": 3, "title": "onions", "quantity": "2 medium"},
				{"id": 4, "title": "garlic", "quantity": "4 cloves"}
			]
		},
		"foodcategory": "punjabi"
	},
	{
		"id": 8,
		"foodtype": "non veg",
		"receipename": "keema pav",
		"details": {
			"cost": "Rs.110",
			"ingridiants": [
				{"id": 1, "title": "minced meat", "quantity": "300 grams"},
				{"id": 2, "title": "onions", "quantity": "2 large"},
				{"id": 3, "title": "tomato paste", "quantity": "1/2 cup"},
				{"id": 4, "title": "pav bread", "quantity": "4 pieces"}
			]
		},
		"foodcategory": "gujarati"
	},
	{
		"id": 9,
		"foodtype": "veg",
		"receipename": "idli",
		"details": {
			"cost": "Rs.40",
			"ingridiants": [
				{"id": 1, "title": "idli batter", "quantity": "2 cups"},
				{"id": 2, "title": "water", "quantity": "as needed"},
				{"id": 3, "title": "salt", "quantity": "1 teaspoon"}
			]
		},
		"foodcategory": "south indian"
	},
	{
		"id": 10,
		"foodtype": "non veg",
		"receipename": "butter chicken",
		"details": {
			"cost": "Rs.150",
			"ingridiants": [
				{"id": 1, "title": "chicken", "quantity": "500 grams"},
				{"id": 2, "title": "butter", "quantity": "3 tablespoons"},
				{"id": 3, "title": "tomato puree", "quantity": "1 cup"},
				{"id": 4, "title": "cream", "quantity": "1/2 cup"}
			]
		},
		"foodcategory": "punjabi"
	},
	{
		"id": 11,
		"foodtype": "veg",
		"receipename": "dosa",
		"details": {
			"cost": "Rs.50",
			"ingridiants": [
				{"id": 1, "title": "dosa batter", "quantity": "2 cups"},
				{"id": 2, "title": "oil", "quantity": "as needed"},
				{"id": 3, "title": "salt", "quantity": "1 teaspoon"}
			]
		},
		"foodcategory": "south indian"
	},
	{
		"id": 12,
		"foodtype": "non veg",
		"receipename": "lamb kebabs",
		"details": {
			"cost": "Rs.130",
			"ingridiants": [
				{"id": 1, "title": "lamb", "quantity": "400 grams"},
				{"id": 2, "title": "kebab spices", "quantity": "2 tablespoons"},
				{"id": 3, "title": "yogurt", "quantity": "1/2 cup"},
				{"id": 4, "title": "lemon juice", "quantity": "2 tablespoons"}
			]
		},
		"foodcategory": "gujarati"
	},
	{
		"id": 13,
		"foodtype": "veg",
		"receipename": "chole bhature",
		"details": {
			"cost": "Rs.90",
			"ingridiants": [
				{"id": 1, "title": "chickpeas", "quantity": "1 cup"},
				{"id": 2, "title": "bhature flour", "quantity": "2 cups"},
				{"id": 3, "title": "onions", "quantity": "2 medium"},
				{"id": 4, "title": "spices", "quantity": "2 tablespoons"}
			]
		},
		"foodcategory": "punjabi"
	}
];


let retriveUniqueCategories = () => {
	return Array.from(new Set(mockReceipes.map(item=>item.foodcategory)));
}


export{
	mockReceipes,
	retriveUniqueCategories
};
