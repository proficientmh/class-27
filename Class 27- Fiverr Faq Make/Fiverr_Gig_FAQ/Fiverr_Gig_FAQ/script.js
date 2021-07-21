//Show FAQ Form
var faqButton = document.getElementById('addFAQ');
    faqButton.addEventListener('click',function(){
        document.getElementById('addFAQ').style.display="none";      
        document.getElementById('FAQ_Answer').style.display='block';
        document.getElementById('acordian').style.display="none";
        document.querySelector('.FAQ_WHAT').style.display="none";
    
})

//ShowCancel FAQ BUTTON

var faqAnswerCancel= document.getElementById('faqAnswerCancel');
    faqAnswerCancel.addEventListener('click',function(){
        console.log('Cancel button working')
        document.getElementById('FAQ_Answer').style.display='none';
        document.getElementById('addFAQ').style.display="block";
        document.getElementById('addFAQ2').style.display="block";   
    })


//AddAcordeina

var addAcordian = document.getElementById('addQuestion');
    addAcordian.addEventListener('click',function(){
    document.getElementById('FAQ_Answer').style.display="none"; 
    document.getElementById('addFAQ').style.display="block";
    document.getElementById('acordian').style.display="block";

        //set question value
    var question = document.getElementById('question').value;
    document.getElementById('acordian_question').innerText=question;
    //set answer value
    var answer = document.getElementById('answer').value;
    document.querySelector('.editQuestion').value=question;
    document.querySelector('.editAnswer').value=answer;

})

//ShowAcordian button

var acordianHideShow = document.getElementById('acordian_hideQestion');
    acordianHideShow.addEventListener('click',function(){
        var x = document.getElementById("acordian-hidesection");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("iconSHow").style.transform = "rotate(180deg)";
        } else {
          x.style.display = "none";
          document.getElementById("iconSHow").style.transform = "rotate(0deg)";

        }
    })


    var deleteButon = document.getElementById("delete");
    deleteButon.addEventListener('click',function(){
        document.getElementById('acordian').style.display='none';
    });

    
    //DIsplay WHAT FAQ
    var Hover = document.getElementById('addFAQ');
    Hover.addEventListener('mouseover',function(){
        document.querySelector('.FAQ_WHAT').style.display="block";
        
    })

    var mouseOut = document.getElementById('addFAQ');
    Hover.addEventListener('mouseleave',function(){
        document.querySelector('.FAQ_WHAT').style.display="none";
        
    })


