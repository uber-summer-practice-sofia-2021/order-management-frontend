import Confetti from "react-confetti";
import Swal from "sweetalert2";

var clickHandler = function(event){
    event.preventDefault();
    success();
}

form.addEventListener('submit',clickHandler);

function success() {
    Swal.fire("Great job!", "You've created an order!", "success");
    return <Confetti/>
}