//14 additional buns to sho

//An array of all the bun images thumbnails
var bunImages = 
["../images/buns/original.jpg",
 "../images/buns/bacon.jpg",
 "../images/buns/birthday.jpg",
 "../images/buns/blackberry.jpg",
 "../images/buns/cranberry.jpg",
 "../images/buns/lemon.jpg",
 "../images/buns/carrot.jpg",
 "../images/buns/mapple.png",
 "../images/buns/pecan.jpg",
 "../images/buns/pumpkin.jpg",
 "../images/buns/strawberry.jpg",
 "../images/buns/walnut.jpg",
 "../images/buns/vegan.jpg",
 "../images/buns/original2.jpg",
 "../images/buns/buttermilk.jpg"
]

//An array of all the bun names
var bunNames = ["Original","Bacon","Birthday","Blackberry","Cranberry","Lemon","Carrot","Maple","Pecan","Pumpkin", "Strawberry", "Walnut", "Vegan", "Gluten Free","Butter Milk"]

var counter = 0;


$(document).ready(function(){
    $("#right-button").click(function(){
        if (counter == 12) {
            $("#image1").attr("src",bunImages[13])
            $("#image2").attr("src",bunImages[14])
            $("#image3").attr("src",bunImages[0])
            $("#label1").text(bunNames[13])
            $("#label2").text(bunNames[14])
            $("#label3").text(bunNames[0])
            counter = counter + 1
        }else if (counter == 13) {
            $("#image1").attr("src",bunImages[14])
            $("#image2").attr("src",bunImages[0])
            $("#image3").attr("src",bunImages[1])
            $("#label1").text(bunNames[14])
            $("#label2").text(bunNames[0])
            $("#label3").text(bunNames[1])
            counter = counter + 1
        }else if (counter == 14) {
            $("#image1").attr("src",bunImages[0])
            $("#image2").attr("src",bunImages[1])
            $("#image3").attr("src",bunImages[2])
            $("#label1").text(bunNames[0])
            $("#label2").text(bunNames[1])
            $("#label3").text(bunNames[2])
            counter = 0
        } else {
            $("#image1").attr("src",bunImages[counter+1])
            $("#image2").attr("src",bunImages[counter+2])
            $("#image3").attr("src",bunImages[counter+3])
            $("#label1").text(bunNames[counter+1])
            $("#label2").text(bunNames[counter+2])
            $("#label3").text(bunNames[counter+3])
            counter = counter + 1;
        }
        console.log(counter);
    });
    
    $("#left-button").click(function(){
        if (counter == 14) {
            $("#image1").attr("src",bunImages[13])
            $("#image2").attr("src",bunImages[14])
            $("#image3").attr("src",bunImages[0])
            $("#label1").text(bunNames[13])
            $("#label2").text(bunNames[14])
            $("#label3").text(bunNames[0])
            counter = counter - 1
        }else if (counter == 0) {
            $("#image1").attr("src",bunImages[14])
            $("#image2").attr("src",bunImages[0])
            $("#image3").attr("src",bunImages[1])
            $("#label1").text(bunNames[14])
            $("#label2").text(bunNames[0])
            $("#label3").text(bunNames[1])
            counter = 14;
        } else {
            $("#image1").attr("src",bunImages[counter-1])
            $("#image2").attr("src",bunImages[counter])
            $("#image3").attr("src",bunImages[counter+1])
            $("#label1").text(bunNames[counter-1])
            $("#label2").text(bunNames[counter])
            $("#label3").text(bunNames[counter+1])
            counter = counter - 1;
        }
        console.log(counter);
    });
});