
function formdata(){
    let form=document.forms['details'];
    let formdetails= new FormData(form);
    return formdetails;
}


document.querySelector('#Submit1').addEventListener('click',function(){
    event.preventDefault();
    student={
        Name:formdata().get('name'),
        RollNO:formdata().get('rollno'),
        Batch:formdata().get('batch'),
        Section:formdata().get('section'),
    }
    
    console.log(student);
    document.querySelector('#Rollno').value='';
    document.querySelector('#Name').value='';
    document.querySelector('#Batch').value='';
    document.querySelector('#Section').value='';
    
    document.querySelector('.details').style.display='none';
    document.querySelector('.quiz').style.display='block';
    
})



function form2data(){
    let form2=document.forms['quizform'];
    let form2details=new FormData(form2);
    return form2details;
    
}


document.querySelector('#Submit2').addEventListener('click',function(){
    
    event.preventDefault();
    
    QuizForm={
        Heading:form2data().get('Heading'),
        Topic:form2data().get('Topic'),
        
        mcq1:form2data().get('mcq1'),
        mcq2:form2data().get('mcq2'),
        mcq3:form2data().get('mcq3'),
        mcq4:form2data().get('mcq4'),
        mcq5:form2data().get('mcq5')
        
    }
    
    document.querySelector('.yone').innerHTML=QuizForm.mcq1;
    document.querySelector('.ytwo').innerHTML=QuizForm.mcq2;
    document.querySelector('.ythree').innerHTML=QuizForm.mcq3;
    document.querySelector('.yfour').innerHTML=QuizForm.mcq4;
    document.querySelector('.yfive').innerHTML=QuizForm.mcq5;

    document.querySelector('.name').innerHTML=student.Name;
    document.querySelector('.batch').innerHTML=student.Batch;
    console.log(QuizForm);
    
    document.querySelector('#heading').value='';
    document.querySelector('#topic').value='';
    document.querySelector('#mcq1').value='';
    document.querySelector('#mcq2').value='';
    document.querySelector('#mcq3').value='';
    document.querySelector('#mcq4').value='';
    document.querySelector('#mcq5').value='';
    
    
    document.querySelector('.result').style.display='block';
    document.querySelector('.quiz').style.display='none';
    
    document.querySelector('.cone').innerHTML=Answer.mcq1;
    document.querySelector('.ctwo').innerHTML=Answer.mcq2;
    document.querySelector('.cthree').innerHTML=Answer.mcq3;
    document.querySelector('.cfour').innerHTML=Answer.mcq4;
    document.querySelector('.cfive').innerHTML=Answer.mcq5;
    
    
    let marks=0;
    if(QuizForm.mcq1==Answer.mcq1){
    marks++;
}
if(QuizForm.mcq2==Answer.mcq2){
    marks++;
}
if(QuizForm.mcq3==Answer.mcq3){
    marks++;
}
if(QuizForm.mcq4==Answer.mcq4){
    marks++;
    }
    if(QuizForm.mcq5==Answer.mcq5){
    marks++;
    }
    console.log(marks)
    
    document.querySelector('.marks').innerHTML=marks;
    document.querySelector('.heading1').innerHTML=QuizForm.Heading;
    document.querySelector('.topic1').innerHTML=QuizForm.Topic;
})




Answer={
    mcq1:'Founder',
    mcq2:'Pakistani',
    mcq3:'14th August',
    mcq4:'Islamabad',
    mcq5:'Paris'

}
