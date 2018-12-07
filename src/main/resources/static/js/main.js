var acceleration = 4000;

// $(function () {
//     while(true){
//         $(this).delay(1000);
//         if(acceleration !== 100) {
//             acceleration = acceleration - 100;
//         }
//     }
// });

// getAcceleration = $(function () {
//    return acceleration;
// });
//
// setAcceleration = $(function (e) {
//     acceleration = e;
// });

$(function () {
    $("#test").draggable({
        revert: true,
        revertDuration: acceleration
    })
        .bind("dragstart", function (event, ui) {

        });
});