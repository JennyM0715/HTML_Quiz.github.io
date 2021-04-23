/*grabs the list of different choices to choose*/
 var ul = document.getElementById('ul')
 /*grabs the next button*/
 var next_button = document.getElementById('next_btn');

 /*grabs the container where the questions will go*/
 var questions_container = document.getElementById('question_container')

 /*grabs the 4 choices of where the different choices for each question will go to*/
 var choice_1 = document.getElementById('choice_1')
 var choice_2 = document.getElementById('choice_2')
 var choice_3 = document.getElementById('choice_3')
 var choice_4 = document.getElementById('choice_4')
 
 var app={

        /* list of 10 questions, each question with 4 choices and one correct answer*/ 
         questions:[

            /*QUESTION 1*/
             {
                 q:"What does HTML stand for?",
                 choices: ["Hyperytext Module Language", "Hypertext Markup Language", "Hyperlink Markup Language", "None of the Above"],
                 answer:2
             },
             /*QUESTION 2*/
             {
                q:"What does WAN stand for?",
                choices: ["Wide Area Network", "World Animal Net", "Wisconsin Angel Network", "Wireless Area Network"],
                answer:1
            },  
            /*QUESTION 3*/  
            {
                q:"Who is making the Web standards?",
                choices: ["Mozilla", "ICANN", "The World Wide Web Consortium", "Micorsoft"],
                answer:3
            }, 
            /*QUESTION 4*/ 
            {
                q:'What is the correct HTML attribute to attach to an anchor tag for creating a hyperlink?',
                choices: ['href="http://www.w3schools.com"','url="http://www.w3schools.com"','src="http://www.w3schools.com"','name="http://www.w3schools.com"'],
                answer:1
            },
            /*QUESTION 5*/
            {
                q:'What is the correct HTML attribute to attach to an anchor tag to open a link in a new tab/browser window?',
                choices: ['target="_blank" ','target="blank"','target="new_tab"','target="_new"'],
                answer:1
            },
            /*QUESTION 6*/
            {
                q:'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
                choices: ['altimg', 'title', 'alt', 'alt-text'],
                answer:3
            },
            /*QUESTION 7*/
            {
                q:'What is the correct HTML element for playing video files?',
                choices: ['source', 'video', 'movie', 'media'],
                answer:2
            } ,
            /*QUESTION 8*/
            {
                q:'What is the correct HTML element for playing audio files?',
                choices: ['mp3', 'source', 'audio', 'sound'],
                answer:3
            },
            /*QUESTION 9*/
            {
                q:'Graphics defined by SVG is in which format?',
                choices: ['XML', 'XHTML', 'JSON', 'HTML'],
                answer:1
            },
            /*QUESTION 10*/
            {
                q:'Which HTML element is used to display a scalar measurement within a range?',
                choices: ['measure', 'gauge', 'range', 'meter'],
                answer:4
            }   
         ],

         /*load question and their four choices*/ 
         index:0,
         load:function(){
             if(this.index<=this.questions.length-1){
                questions_container.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                 choice_1.innerHTML=this.questions[this.index].choices[0];
                 choice_2.innerHTML=this.questions[this.index].choices[1];
                 choice_3.innerHTML=this.questions[this.index].choices[2];
                 choice_4.innerHTML=this.questions[this.index].choices[3];
             }
             /*once all 10 questions has been answered, the list of choices and 
             the "next" button will disappear, text of "Quiz completed!" will appear
             */ 
             else {
                questions_container.innerHTML="Quiz Completed!";
                 ul.style.display="none";
                 next_button.style.display="none";
             }
         },
         next: function(){
             this.index++;
             this.load();
         },

         /*checks if choice picked is right or wrong*/ 
         check: function(ele){

            /*will check the answers to match the answer inside the "questions" that is inside the variable "apps"*/ 
            /*if right, it will use CSS edits of ".quiz .choices ul li.correct" in the styles.css file*/
             var id=ele.id.split('');
             if(id[id.length-1]==this.questions[this.index].answer){
                 this.button_score_container++;
                 ele.className="correct";
                 this.score_point();  /*add score point*/ 
             }
             /*if wrong then, it will use CSS edits of ".quiz .choices ul li.wrong" in the styles.css file*/
             else{
                 ele.className="wrong";
             }
         },

         /*once one of the four choices is selected for a question, prevent other choices from being clickable*/
         preventClick:function(){
             for(let i=0; i<ul.children.length; i++){
                 ul.children[i].style.pointerEvents="none";
             }
         },
         /*allow different choices to be clicked for each question, otherwise 
         it would get stuck on same choice selected for all questions*/ 
        allowClick:function(){
             for(let i=0; i<ul.children.length; i++){
                 ul.children[i].style.pointerEvents="auto";
                 ul.children[i].className=''
             }
         },
    
         /*start of with 0*/
         /*once a question is answeered correctly, the total number of
         questions on the quiz will be revealed.
         As, you go along the quiz, it will display how many you have gotten right
         out of 10 */  

         /* it will keep track of how many correct questions you have answered*/ 
         button_score_container:0,
         score_point:function(){
            score_point.innerHTML= this.button_score_container + "/" + this.questions.length ;
         }
 }
 
 /*must put javascript file scrip towards end of body, not in <head>*/
 window.load=app.load();
 
 function button(ele){
     app.check(ele);
     app.preventClick();
 }
 
 function next(){
     app.next();
     app.allowClick();
 }
