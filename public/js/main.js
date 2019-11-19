(function(){

    /*container places | items places*/
    let containerPlacesImages = document.getElementById("container__images"),
        allPlaces = containerPlacesImages.querySelectorAll(".placeImage");

    /*images | items images*/
    let containerImages = document.getElementById("container__places"),
        itemImages = containerImages.querySelectorAll(".itemImages");


    /*
    * verifying if exist element images
    * */
    if(containerImages && allPlaces && itemImages && containerPlacesImages){

        //rotating images
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


            itemImages[img].addEventListener("dragend", function(e){
                e.preventDefault();
                e.target.remove();
            },false);

            /*
            * verifying if item is go of place
            * */
            let counterLeave = 0;
            allPlaces[img].addEventListener("dragleave", function(e){

                    //
                    // counterLeave += 1;
                    // if( !(counterLeave <= 1) ){

                        /*
                        * style
                        * */
                    //     allPlaces[img].style.backgroundColor= "red";
                    //     allPlaces[img].textContent = "Limitado";
                    //     allPlaces[img].innerHTML = "";
                    //
                    //     setInterval(()=>{
                    //         allPlaces[img].innerHTML = "Limitado";
                    //     },1000);
                    // }
                    //
                    // allPlaces[img].classList.remove("background");

            },false);




            /*
                start event
             */
            itemImages[img].addEventListener("dragstart", function(e){

                let dataHtml = "<img src="+ e.target.src +" >";
                e.dataTransfer.setData("Text", dataHtml);

            },false);






            let counterDrop = 0;
            allPlaces[img].addEventListener("drop", function(e){

                let dataHtml = "<img src="+e.target.src+">";

                e.dataTransfer.setData("Text", dataHtml);

                allPlaces[img].innerHTML = e.dataTransfer.getData("Text");

                allPlaces[img].addEventListener("dragstart", function(e){

                    let moveData = "<img src="+ e.target.src +">";
                        e.dataTransfer.setData("Text", moveData);

                    /*
                    * removing img when moved
                    * */
                    setTimeout(()=>{

                        e.target.remove();
                        floatNotificationInfo("new place")

                    },500);

                }, false);

            },false);

            //    end for
        }

    // endif
    }
})();