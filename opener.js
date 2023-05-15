// Get the modal
var modal = document.getElementById("myModal");

// Get the images and insert them inside the modal
var images = document.getElementsByClassName("image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        modalImg.style.maxWidth = "60%";
        modalImg.style.maxHeight = "60%";
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
