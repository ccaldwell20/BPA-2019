

var arrayLength = mainProducts.length;
var productAmmount = (arrayLength / 7);
console.log(productAmmount);

function parseArrayValues() {

    //Array Index Values:
    var nameVal = 0;
    var descVal = 1;
    var imgVal = 2;
    var widthVal = 3;
    var heightVal = 4;
    var priceVal = 5;
    var adittionalTextVal = 6;
    var i;
    var loopCount = 0;
    for (i = 0; i < productAmmount; i++) {
        if(loopCount == 0){
            var Name = mainProducts[0];
            var Desc = mainProducts[1];
            var Image = mainProducts[2];
            var ImageWidth = mainProducts[3];
            var ImageHeight = mainProducts[4];
            var Price = mainProducts[5];
            var AddTxt = mainProducts[6];
        }else{
            var Name = mainProducts[loopCount*7];
            var Desc = mainProducts[(loopCount*7)+1];
            var Image = mainProducts[(loopCount*7)+2];
            var ImageWidth = mainProducts[(loopCount*7)+3];
            var ImageHeight = mainProducts[(loopCount*7)+4];
            var Price = mainProducts[(loopCount*7)+5];
            var AddTxt = mainProducts[(loopCount*7)+6];
        }

        if (AddTxt == 0) {
            AddTxt = "&nbsp"
        }

        elementMaker(Name, Desc, Image, ImageWidth, ImageHeight, Price, AddTxt);
        nameVal += 6;
        descVal += 6;
        imgVal += 6;
        widthVal += 6;
        heightVal += 6;
        priceVal += 6;
        adittionalTextVal += 6;
        loopCount += 1;
    }
    nameVal = 0;
    descVal = 1;
    imgVal = 2;
    widthVal = 3;
    heightVal = 4;
    priceVal = 5;
    adittionalTextVal = 6;

}

// Name, Description, Image, Image-Width, Image-Height, Price, Additional-Text
function elementMaker(n, d, i, iw, ih, p, at) {
    console.log(n);
    console.log(d);
    console.log(i);
    console.log(iw);
    console.log(ih);
    console.log(p);
    console.log(at);
    var divElement = document.createElement('div');
    divElement.setAttribute("id", "productDiv");
    document.body.appendChild(divElement);

    var nameElement = document.createElement('p');
    nameElement.setAttribute("id", "productName");
    nameElement.innerHTML = n;
    document.body.appendChild(nameElement);

    var descElement = document.createElement('p');
    descElement.setAttribute("id", "productDesc");
    descElement.innerHTML = d;
    document.body.appendChild(descElement);


    var imageElement = document.createElement("img");
    imageElement.id = "productImg";
    imageElement.src = "../../img/productImages/testImage.png";
    imageElement.width = iw;
    imageElement.height = ih;
    document.body.appendChild(imageElement);

    var priceElement = document.createElement('p');
    priceElement.setAttribute("id", "productPrice");
    priceElement.innerHTML = "$" + p;
    document.body.appendChild(priceElement);

    var addTxtElement = document.createElement('p');
    addTxtElement.setAttribute("id", "productAddTxt");
    addTxtElement.innerHTML = at;
    document.body.appendChild(addTxtElement);

}
