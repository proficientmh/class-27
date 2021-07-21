// when add faq button click
$('.header h3').click(function(){
    $(this).hide();
    $('.mid p:nth-child(2)').hide();
    $('.add_faq').show();
});

// when click cancel/ dont add faq
$('.btn button:nth-child(1)').click(function(){
    $('.header h3').show();
    $('.mid p:nth-child(2)').show();
    $('.add_faq').hide();

    $( ".add_faq input[type=text]" ).val('');
    $( ".add_faq textarea" ).val('');
});

// when click add / add a new faq
$('.btn button:nth-child(2)').click(function(){
    $('.header h3').show();
    $('.add_faq').hide();
    //appendTo( $( ".container" ) )
    var a = $( ".add_faq input[type=text]" ).val();
    var b = $( ".add_faq textarea" ).val();

    // console.log(a);
    // console.log(b);

    $('.acc_container').prepend(`
    <div class="faq_accordian" >
            <div class="faq_acc_con" onclick = "h(event)">
                <h5>${a}</h5>
                <span class = 'up_arrow'><i class="fas fa-angle-down"></i></span>
            </div>
            <div class="expand_con">
                <div class="expand">
                    <input type="text" value = '${a}' onchange = 'changeValue(this.value)'>
                    <textarea cols="30" rows="10">${b}</textarea>
                    <div class="acc_btn">
                        <div class="dlt">
                            <i class="fas fa-times-circle"></i>
                            <h5 onClick = 'remove(event)'>DELETE</5>
                        </div>
                        <div class="up_can">
                            <button onClick = 'hide(event)'>CANCEL</button>
                            <button onClick = 'upgrate(event)'>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
    console.log(a);
    console.log(b);

    $( ".add_faq input[type=text]" ).val('');
    $( ".add_faq textarea" ).val('');


    // $('.faq_acc_con').click(function(){
    //     $('.expand_con').slideToggle();
    //     // $('.extra').append('<h1>hello</h1>');
    //     console.log('1');
    // });

    
      
    
});
// $(".faq_accordian" ).click( handler );
// function handler( event ) {
//     var d = event.currentTarget.nextElementSibling;
//     //children[0].nodeName
//     console.log(d);
//     // d.children().toggle();
//     var target = $( d );
//     //if ( target.is( "h2" ) ) {
//         target.slideToggle();
      
//     //}
//   }

const h = (e) => {
    // var a = document.getElementsByClassName('faq_accordian')[0];
    console.log(e.target.nextElementSibling);

    var d = e.target.parentElement.nextElementSibling;
    //children[0].nodeName
    console.log(e.target.parentElement);
    // d.children().toggle();
    var target = $( d );

    //if ( target.is( "h2" ) ) {
    $(e.target.nextElementSibling).toggleClass('kkk');   
        
        
        target.slideToggle();
    // var a = event.target.parentElement.nextElementSibling;

    // $(a).slideToggle();

}



// when add faq button click
$('.mid p:nth-child(2)').click(function(){
    $(this).hide();
    $('.header h3').hide();
    $('.add_faq').show();

    $('.btn button:nth-child(1)').click(function(){
        $('.header h3').show();
        $('.mid p:nth-child(2)').show();
        $('.add_faq').hide();
    });
});





// function onSubmit(e){
//     var a = $( ".add_faq input[type=text]" ).val();
//     var b = $( ".add_faq textarea" ).val();

//     $( ".add_faq input[type=text]" ).val('');
//     // console.log(a);
//     // console.log(b);
// }

function remove(e){
    var a = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement);

    $(a).remove();
}
function hide(e){
    var a = e.target.parentElement.parentElement.parentElement.parentElement;
    // console.log(e.target.parentElement.parentElement.parentElement.parentElement);
    $(a).slideUp(500);
}
function upgrate(e){
    var val = changeValue()
    // var a = $( ".add_faq input[type=text]" ).val();
    // var b = $( ".add_faq textarea" ).val();
    var inp = e.target.parentElement.parentElement.parentElement.children[0].value;
    var a = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0];
    $(a).text(inp);
    console.log(inp);

    var a = e.target.parentElement.parentElement.parentElement.parentElement;
    // console.log(e.target.parentElement.parentElement.parentElement.parentElement);
    $(a).slideUp(500);
}



function changeValue(e){
    return e;
}