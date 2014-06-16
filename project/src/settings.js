ESHOP_JS.settings = {
		
	/**
	 * URL to order server
	 * URL where to send the order
	 * @constant
	 * @type {string}
	 */
	URL_TO_ORDER_SERVER:"#",
	
	/**
	 * Type of postages
	 */
	TYPES_OF_POSTAGES:[
		{name: "Personal collection", price: 0},
		{name: "Czech Post", price: 80}
	],
	
	/**
	 * Payment methods
	 */
	PAYMENT_METHODS:[
		{name:"Cash", price:0},
		{name:"Cash on delivery", price:40},
		{name:"Payment in advance", price:0}			
	],

	/**
	 * DOM wrapper for product
	 * @constant
	 * @type {string}
	 */
	PRODUCT_DOM_CLASS: "product",

	/**
	 * DOM wrapper for product title
	 * @constant
	 * @type {string}
	 */
	PRODUCT_TITLE_DOM_CLASS: "product-title",

	/**
	 * DOM wrapper for product price
	 * @constant
	 * @type {string}
	 */
	PRODUCT_PRICE_DOM_CLASS: "product-price",
		
	/**
	 * DOM data atribute for base product price
	 * @constant
	 * @type {string}
	 */
	PRODUCT_BASE_PRICE_DOM_ATTRIBUTE: "data-base-price",
	
	/**
	 * DOM wrapper for product variations
	 * @constant
	 * @type {string}
	 */
	PRODUCT_VARIATIONS_DOM_CLASS: "product-variations",

	/**
	 * Class name for add link button
	 * @constant
	 * @type {string}
	 */
	PRODUCT_LINK_DOM_CLASS: "product-add-to-cart",
	
	/**
	 * Class name for remove from shopping cart link
	 * @constant
	 * @type {string}
	 */
	REMOVE_FROM_CART_DOM_CLASS: "btn-remove",
	
	/**
	 * DOM wrapper for cart
	 * @constant
	 * @type {string}
	 */
	CART_DOM_ID: "cart",
	
	/**
	 * DOM wrapper for checkout
	 * @constant
	 * @type {string}
	 */
	CHECKOUT_DOM_ID: "checkout",
	
	/**
	 * DOM wrapper for count of products in shopping cart
	 * @constant
	 * @type {string}
	 */
	COUNT_OF_PRODUCTS_DOM_CLASS: "cart-products-count",

	/**
	 * Key for cart in storage
	 * @constant
	 * @type {string}
	 */
	CART_STORAGE_KEY: "ESHOP_JS",
	
	/**
	 * Cart change event name
	 * @constant
	 * @type {string}
	 */
	CART_CHANGE_EVENT_NAME: "cartchange"	
}; 