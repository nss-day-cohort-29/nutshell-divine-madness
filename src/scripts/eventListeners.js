// import domComponents from "./domComponents";

const eventListeners = {
  modalDisplayAnimation(){
        // target  modal
    let modal = document.getElementById("nomadModal");
    // target modal to open modal
    let btn = document.getElementById("modalButton");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    $(".message a").click(function(){
      $("form").animate({height: "toggle", opacity: "toggle"}, "slow")
      })
    }
  }

export default eventListeners