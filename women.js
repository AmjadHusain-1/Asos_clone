


let productDiv =document.getElementById("product")


// function for display the product form data json and give divin html file
function displayProduct(data){
    data.forEach((obj) => {
        let div=document.createElement("div");
        
        let img=document.createElement("img");
        img.src=obj.Image;
        img.style.height="200px"

        let comName=document.createElement("h5");
        // comName.innerText=obj.company;

        let prodName=document.createElement("p");
        prodName.innerText=obj.Product;

        let rate=document.createElement("p");
        rate.innerText=`★★★☆ ${obj.Rating}`;

        let price=document.createElement("p");
        price.innerText=`$ ${obj.Price}`


        div.append(img,comName,prodName,rate,price)
        productDiv.append(div)
    });
}

fetch("./women.json")
    .then((res)=>res.json())
    .then((data)=>displayProduct(data))
    .catch((err)=>console.log(err))


    function sortPrice(){

        let sortBy =document.getElementById("chooseRate").value
    
        
        let a=sortBy.toString()
    
        if(a==1){
            
            sortPriceLowToHigh()
    
        }else if(a==2){
            
            sortPriceHighToLow()
        }
    
        
    }
    
        
        function sortPriceLowToHigh(){
            
            // sorting data according to price
            fetch("./women.json")
            .then((res)=>res.json())
            .then((data)=>{
                data.sort(function(a,b){
                    return a.Price - b.Price
                })
                // privius data will null
                productDiv.innerHTML=null
                displayProduct(data)
            })
            .catch((err)=>console.log(err))
        
        }
    
    
        function sortPriceHighToLow(){
            
            // sorting data according to price
            fetch("./women.json")
            .then((res)=>res.json())
            .then((data)=>{
                data.sort(function(a,b){
                    return b.Price - a.Price
                })
                // privius data will null
                productDiv.innerHTML=null
                displayProduct(data)
            })
            .catch((err)=>console.log(err))
        

}
// next filter//

function sortRating(){

    let sortBy =document.getElementById("chooseRating").value
    let a=sortBy.toString()
    
    if(a==1){
            
        sortRatingLowToHigh()
    
    }else if(a==2){
            
        sortRatingHighToLow()
    }
}
    
    // sort low to high
function sortRatingLowToHigh(){
            
    // sorting data according to Rating
    mainData.sort(function(a,b){
        return a.Rating - b.Rating
    })
    // privius data will null
    productDiv.innerHTML=null
    displayProduct(mainData)
        
}
    
// sort high to low
function sortRatingHighToLow(){
            
    // sorting data according to Rating
    mainData.sort(function(a,b){
        return b.Rating - a.Rating
    })
    // privius data will null
    productDiv.innerHTML=null
    displayProduct(mainData)
        
}
