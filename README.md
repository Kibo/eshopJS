# EshopJS
A free and open-source Javascript e-shop that easily integrates with your current websites.

Status: in progress

- no dependencies
- easily integrates ([settings](https://github.com/Kibo/eshopJS/blob/master/project/src/settings.js), [templates](https://github.com/Kibo/eshopJS/tree/master/project/src/templates))

##Example
- [Rastashop](http://kibo.github.io/eshopJS/)

##How to use
All IDs, Classes and atributes you can change in [settings](https://github.com/Kibo/eshopJS/blob/master/project/src/settings.js).

It uses the following *default* IDs:
- **cart**				: A wrapper for schopping cart. It may be on another website too.

It uses the following *default* CSS classes:
- **product** 			: A product wrapper.
- **product-title**		: A title of product.
- **product-variations**: A variations of product.
- **product-price**		: A base price of product.
- **add-to-cart**		: A link to add product to the cart.

It uses the following *default* data attribute:
- **data-base-price** 	: Base price of product

###Example eshop
```
<section class="product">  
      
   <h1 class="product-title">Rasta T-shirt</h1>  

   <select class="product-variations">
   		<option value="0">Size S</option>
   		<option value="2">Size L</option>	
   		<option value="4">Size XXL</option>
   </select>   
   
   <p>
	 <b>Price</b>: $<span class="product-price" data-base-price="12"></span>
   </p>
   
   <a class="add-to-cart" href="#cart">Add to cart</a>
      
</section>  

<section class="product">  
      
   <h1 class="product-title">Rasta Cap</h1>  

   <select class="product-variations">
   		<option value="2">Green</option>
   		<option value="1">Yellow-Red-Green</option>	   		
   </select>   
   
   <p>
	 <b>Price</b>: $<span class="product-price" data-base-price="3"></span>
   </p>
   
   <a class="add-to-cart" href="#cart">Add to cart</a>
      
</section> 

<!-- 
	Wrapper for e-shop cart.
	It may be on another page.
 -->
<div id="cart"></div>

<script src="js/eshop.js"></script>
<script>
window.onload = function(){
	ESHOP_JS.init();				
};			
</script>
```
##It might interest you
- [simpleCart](https://github.com/wojodesign/simplecart-js)
