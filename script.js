// Create a button and  assign it Access the Ul element
const button = document.querySelector('#button').children;

// grab all the boxes that are holding the images and store them in item
var items = document.querySelector(".grid-image").children;

// loop trough the children of the button and listen for a click event.
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {

        //first remove the active class
        for (let j = 0; j < button.length; j++) {
            button[j].classList.remove("active");
        }
        this.classList.add("active");

        // assign the clicked item attribute to target
        const target = this.getAttribute("data-target");

        //loop through all the boxes that are holding images and give theme a display of none
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";

            //if the box holding the image's attribute is == to the target display it
            if (items[k].getAttribute("data-id") == target) {
                items[k].style.display = "block";
            }

            if (target == "all") {
                items[k].style.display = "block";
            }
        }

    })
}