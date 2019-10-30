
$(document).ready(function () {
    $("#search").submit(function(event){
        event.preventDefault();
        $("#player-list").html("");
        let inputVal = $("#keyword").val();
        $.ajax(`http://localhost:3000/api/player?name=${inputVal}`, {
            type: "GET",
            success: function (data) {
                if (data && data.data) {
                    for (let i=0; i<data.data.length;i++){
                        if (data.data.player[i].name==inputVal){
                            console.log(data);
                        }
                    }
                    
                    // $("#player-list").append(`
                    //     <div class="col-12 mt-3 mb-3">
                    //         <div class="row">
                    //             <div class="col-3">
                    //                 <h3 class="text-success">${data.data[i].name}</h3>
                    //                 <img class="image-placeholder" src=" "></img>
                    //                 // them src img
                    //                 <h4>Background Information</h4>
                    //                 <table>
                    //                     <tr>
                    //                         <th>Team</th>
                    //                         <td>${data.data[i].team}</td>
                    //                     </tr>
                    //                     <tr>
                    //                         <th>Natiionality</th>
                    //                         <td>${data.data[i].nationality}</td>
                    //                     </tr>
                    //             </div>
                    //             <div class="col-9">
                    //                 <h3>Biography</h3>
                    //                 <p>${data.data[i].biography}</p>
                    //             </div>
                    //         </div>
                    //     </div>
                    // `);
                }
            },
            error: function (err) {
                    console.log(err);
                }
            })
        });
});