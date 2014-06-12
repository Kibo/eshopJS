# One page e-shop
A free and open-source javascript e-shop that easily integrates with your current website.

Status: in progress

##Example
- [Rastashop](#)

##How to use
All IDs, Classes and atributes you can change in [settings](#).

It uses the following *default* IDs:
- **cart**				: A wrapper for schopping cart. It may be on another website too.

It uses the following *default* CSS classes:
- **product** 			: A product wrapper.
- **product-title**		: A title of product.
- **product-variations**: A variations of product.
- **product-price**		: A base price of product.
- **add-to-cart**		: A link to add product to the cart.

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
	 <b>Price</b>: $<span class="product-price" data-base="12"></span>
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
	 <b>Price</b>: $<span class="product-price" data-base="3"></span>
   </p>
   
   <a class="add-to-cart" href="#cart">Add to cart</a>
      
</section> 

<!-- Wrapper for e-shop cart -->
<div id="cart"></div>

<script src="js/eshop.js"></script>
```
##It might interest you
- [simpleCart](https://github.com/wojodesign/simplecart-js)