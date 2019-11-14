/*container places | items places*/
let containerPlacesImages = document.getElementById("container__images");
let allPlaces = containerPlacesImages.querySelectorAll(".placeImage");

/*images | items images*/
let containerImages = document.getElementById("container__places");
let itemImages = containerImages.querySelectorAll(".itemImages");



/*
* verifying if exist element images
* */
if(containerImages && allPlaces && itemImages && containerPlacesImages){

    for(let img = 0; img < itemImages.length; img++){




        allPlaces[img].addEventListener("dragenter", function(e){
            e.preventDefault();

            //setter class
            allPlaces[img].classList.add("background");
            setTimeout(()=>{
                allPlaces[img].classList.remove("background");
            },1000);


        },false);



        allPlaces[img].addEventListener("dragover", function(e){
            e.preventDefault();
        },false);


        allPlaces[img].addEventListener("dragend", function(e){
            e.preventDefault();
        },false);

        //start event
        itemImages[img].addEventListener("dragstart", function(e){

            let dataHtml = "<img src="+ e.target.src +" >";
            e.dataTransfer.setData("Text", dataHtml);

        },false);

        let counterDrop = 0;
        allPlaces[img].addEventListener("drop", function(e){
            counterDrop+=1;

            if(counterDrop <= 1){
                allPlaces[img].innerHTML = e.dataTransfer.getData("Text");
            }
            else{
                floatNotificationError("Imposible reemplazar")
            }

        },false);



        //    end for
    }


}
