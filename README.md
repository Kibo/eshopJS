# EshopJS
A free and open-source Javascript e-shop that easily integrates with your current websites.

**Version**: 1.0.2

- Pure Javascript **without dependencies**.
- Product price may depend on product details. (For example: The larger size can cost more money. )
- Easily integrates: ([settings](https://github.com/Kibo/eshopJS/blob/master/project/src/settings.js), [templates](https://github.com/Kibo/eshopJS/tree/master/project/src/templates)).
- You can embed shopping cart on separate web page.
- Easily extensible code divided into [modules](https://github.com/Kibo/eshopJS/tree/master/project/src/modules).
- [Tested code](https://github.com/Kibo/eshopJS/tree/master/project/test).

##Example
- [Rastashop](http://kibo.github.io/eshopJS/)

##Now available locales
 - en
 - cs
``` 
<script>
	window.onload = function(){
		ESHOP_JS.init("cs");				
	};			
</script>
```
##How to use
All IDs, Classes and atributes you can change in [settings](https://github.com/Kibo/eshopJS/blob/master/project/src/settings.js).

It uses the following *default* IDs:
- **cart**					: A wrapper for schopping cart. It may be on another website too.
- **checkout**				:  A wrapper for summary of purchases and delivery address form. It may be on another website too.

It uses the following *default* CSS classes:
- **product** 				: A product wrapper.
- **product-title**		: A title of product.
- **product-variations**	: A variations of product.
- **product-price**		: A base price of product.
- **product-add-to-cart**: A link to add product to the cart.
- **cart-products-count**: Count of products in shopping cart.

It uses the following *default* data attribute:
- **data-base-price** 	: Base price of product

###Example eshop
```
<section class="product">  
      
   <h1 class="product-title">Rasta T-shirt</h1>  

   <select class="product-variations">      		
   		<!-- 
   			The values are the increment to the base price of the product.  
   		-->
   		<option value="0">Size S</option>
   		<option value="2">Size L</option>	
   		<option value="4">Size XXL</option> 
   </select>   
   
   <p>
   	   <!-- 
   			The attribute 'data-base-price' indicates the base price of product. 
   		-->
	 <b>Price</b>: $<span class="product-price" data-base-price="12"></span>
   </p>
   
   <a class="product-add-to-cart" href="#cart">Add to cart</a>
      
</section>  

<section class="product">  
      
   <h1 class="product-title">Rasta Cap</h1>  

   <select class="product-variations">
   		<!-- 
   			The values are the increment to the base price of the product.  
   		-->
   		<option value="2">Green</option>
   		<option value="1">Yellow-Red-Green</option>	   		
   </select>   
   
   <p>   
   	   <!-- 
   			The attribute 'data-base-price' indicates the base price of product. 
   		-->
	 <b>Price</b>: $<span class="product-price" data-base-price="3"></span>
   </p>
   
   <a class="product-add-to-cart" href="#cart">Add to cart</a>
      
</section> 

<!-- 
	A wrapper for e-shop cart.
	It may be on another page.
 -->
<div id="cart"></div>

<!-- 
	A wrapper for summary of purchases and delivery address form .
	It may be on another page.
 -->
<div id="checkout"></div>

<script src="js/eshop.js"></script>
<script>
	window.onload = function(){
		ESHOP_JS.init();				
	};			
</script>
```
###Implementation details
- Shopping cart uses HTML5 SessionStorage
- It uses HTML5 *data* atributes
- It uses WEP API *querySelector* and *querySelectorAll*

For all this feature you can find appropriate polyfill code.

###It might interest you
- [SimpleCart](https://github.com/wojodesign/simplecart-js)
