//Javascript configured for index page to prevent erros with file path references

//Functions to change the image as the user makes a bun selection
$(document).ready(function(){
   $("#bun-select1").change(function(){
     $("img[name=imageToSwap1]").attr("src",$(this).val());
   });
});
$(document).ready(function(){
   $("#bun-select2").change(function(){
     $("img[name=imageToSwap2]").attr("src",$(this).val());
   });
});
$(document).ready(function(){
   $("#bun-select3").change(function(){
     $("img[name=imageToSwap3]").attr("src",$(this).val());
   });
});


//Helper function for add-to-cart flying animation
function flyToElement(flyer, flyingTo) {
    var $func = $(this);
    var divider = 3;
    var flyerClone = $(flyer).clone();
    $(flyerClone).css({position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000});
    $('body').append($(flyerClone));
    var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width()/divider)/2;
    var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height()/divider)/2;
     
    $(flyerClone).animate({
        opacity: 0.4,
        left: gotoX,
        top: gotoY,
        width: $(flyer).width()/divider,
        height: $(flyer).height()/divider
    }, 1200,
    function () {
        $(flyingTo).fadeOut('fast', function () {
            $(flyingTo).fadeIn('fast', function () {
                $(flyerClone).fadeOut('fast', function () {
                    $(flyerClone).remove();
                });
            });
        });
    });
}

//Global variables
var total = 0;
var removePrice = 0;
var indexCount= 0;

//var order1 = {
//        size: "6 Pack",
//        price: 25,
//        flavor1: "original",
//        flavor2: "strawberry",
//        flavor3: "pumpkin",
//        index: 0,
//    }
//
//var order2 = {
//        size: "12 Pack",
//        price: 40,
//        flavor1: "vanilla",
//        flavor2: "caramel",
//        flavor3: "chocolate",
//        index: 1,
//    }
//    
//var order3 = {
//        size: "Single",
//        price: 6,
//        flavor1: "walnut",
//        flavor2: "pecan",
//        flavor3: "cashew",
//        index: 2,
//    }
//
//var order4 = {
//        size: "Single",
//        price: 6,
//        flavor1: "walnut",
//        flavor2: "pecan",
//        flavor3: "cashew",
//        index: 2,
//    }
//
//var order5 = {
//        size: "Single",
//        price: 6,
//        flavor1: "walnut",
//        flavor2: "pecan",
//        flavor3: "cashew",
//        index: 2,
//    }
//    
//    
//    var cart = [order1,order2,order3,order4,order5];

//Trying to build cart with JSON & LocalStorage;
    var cartItems = JSON.parse(localStorage.getItem("cart"));
    //if nothing in local stoarage, create a new array.
    if (cartItems == null) {
        cartItems = [];
        indexCount = 0;
    } 

// cart = locally created array;
// cartItems = stored array;

// The juicy part
$(document).ready(function(){
    //Clearing items from my cart
    $('#clear-cart').click(function() {
        console.log("clearing cart");
        localStorage.clear();
        $('#item-container').children().remove();
        total = 0;
        $("#cart-total-value").text("$" + total);
    })
    
    //Function to open and close the side cart
    console.log("ready");
    $('#cart-icon').click(function() {
        console.log("Hello world")
        var x = document.getElementById("side-cart");
        var y = document.getElementById("main-content");

        if (x.style.width === "360px") {
            x.style.width = "0px";
            y.style.marginRight = "0px";
            $('#main-content').animate({ marginLeft: '137px' , opacity: 1 }, 300);
            x.style.border = "0px";
        } else {
            x.style.width = "360px";
            x.style.paddingLeft = "10px";
            $('#main-content').animate({ marginLeft: '-117px' , opacity: 0.5 }, 300);
            x.style.borderLeft = "1px solid #523428";
        }
    })
    
    
//    //for loop for local objects
//    for (var i = 0; i < cart.length; ++i) {
//            var a = 'images/shop/square/' + cart[i].size + '.jpg';
//            var b = cart[i].size;
//            var c = cart[i].price;
//            var d = cart[i].flavor1;
//            var e = cart[i].flavor2;
//            var f = cart[i].flavor3;
//            addItemsToCart(a,b,c,d,e,f)
//        }
    
    //for loop for local storage objects
    for (var i = 0; i < cartItems.length; ++i) {
            var a = 'images/shop/square/' + cartItems[i].size + '.jpg';
            var b = cartItems[i].size;
            var c = cartItems[i].price;
            var d = cartItems[i].flavor1;
            var e = cartItems[i].flavor2;
            var f = cartItems[i].flavor3;
            indexCount = indexCount + 1;
            addItemsToCart(a,b,c,d,e,f,i)
        }
    
    //Adding items to cart
    $('.add-to-cart').click(function(){
    //Animation 
        //Scroll to top if cart icon is hidden on top
        $('html, body').animate({
            'scrollTop' : $(".cart_anchor").position().top
        });
        //Select item image and pass to the function
        var itemImg = $(this).parent().find('img').eq(0);
        flyToElement($(itemImg), $('.cart_anchor'));
    
    //Creating an object
        var localSize = $("#size").text();
        var select1 = $("#bun-select1 :selected").text();
        var select2 = $("#bun-select2 :selected").text();
        var select3 = $("#bun-select3 :selected").text();
        
        //What should the thumbnail img be
        if (localSize === '6 Pack'){
            var tempSize = "6 Pack";
            var tempThumbnail = 'images/shop/square/6pack.jpg';
            var tempPrice = 25;
        } else if (localSize === '12 Pack') {
            var tempSize = "12 Pack";
            var tempThumbnail = 'images/shop/square/12pack.jpg';
            var tempPrice = 40;
        } else {
            var tempSize = "Single";
            var tempThumbnail = 'images/shop/square/single.jpg';
            var tempPrice = 6;
        }
    
        //Using JSON to move to local storage
        console.log("JSONing");
        var order = {
            size: tempSize,
            price: tempPrice,
            flavor1: select1,
            flavor2: select2,
            flavor3: select3,
            index: cartItems.length,
        }
        indexCount = indexCount + 1;
        cartItems.push(order);
        jsonItem = JSON.stringify(cartItems);
        localStorage.setItem("cart", jsonItem);
        
        //Using drawing function to add to html
      addItemsToCart(tempThumbnail, tempSize, tempPrice,select1,select2,select3,indexCount-1);
    });
});

// move prepend and add to cart to a seperate function
function addItemsToCart(a,b,c,d,e,f,index){
    $("#item-container").append(
    "<div class='item'>\
        <img src='" + a + "' id='thumb-image'>\
        <div class='size'>"+b+"</div>\
        <div id='price'>"+'$'+c+"</div>\
        <div class='fla1'>"+"- "+d+"</div>\
        <div class='fla2'>"+"- "+e+"</div>\
        <div class='fla3'>"+"- "+f+"</div>\
        <div data-value="+indexCount+" id='div-item-remove'><a href='#' id='"+indexCount+"' class='item-remove'>Remove</a></div>\
    </div>")
    console.log("printing index of this object = " + index);
    console.log("printing indexCounter of this object = " + indexCount);
    
    //Change total price
    total = total + c;
    console.log(total);
    $("#cart-total-value").text("$" + total);

    //removing the div and updating the price
    $('#' + indexCount +'').click(function() {
            total = total - c;
            $("#cart-total-value").text("$" + total);
            $(this).parent().parent().remove();
            console.log("i just removed something");
            var indToRemove = $(this).parent().data("value") - 1;
            console.log("removing item at index = " + indToRemove);
            cartItems.splice(indToRemove,1);
            jsonItem = JSON.stringify(cartItems);
            localStorage.setItem("cart", jsonItem);
        });
}


    
