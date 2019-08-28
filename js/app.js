var question = document.querySelectorAll('p');

class Question {
    constructor(question, option, correctAns, userAns) {
        this.question = question
        this.option = option
        this.correctAns = correctAns
        this.userAns = userAns
    }
    checkAns() {
        if (this.userAns === this.correctAns) {
            return true;
        }
        return false
    }
    generateOption(option1, option2, option3, option4) {

        this.option = [option1, option2, option3, option4]
        return this.option;
    }

    correctAns(correctAns){
      this.correctAns
      return this;
    }
    
    userAns(userAns){
        this.userAns
        return this;
    }
    
}
class QuestionList {
    constructor() {
        this.questArray = [],
        this.postion = 0
    }

    add(questions) {
        this.questArray.push(questions)
        return this;
    }

    generateCurrentQuestion(){
        document.body.innerHTML = ''
        document.body.appendChild(this.formGenerator(this.questArray[this.postion].question, this.questArray[this.postion].option, this.next))
       
    }

    nextQuestion(){
        this.postion++
        return this;
    }
    formGenerator(question, option){
        if(Array.isArray(option)){
            console.log(option)
        }
        var form = document.createElement('form')

        var p = document.createElement('p')
        p.textContent = question;

        var input1 =  document.createElement('input')
        input1.setAttribute('type','radio')
        input1.setAttribute('name','quest')
        input1.setAttribute('id','radio-1')

        var label1 = document.createElement('label')
        label1.setAttribute('for','radio-1')
        label1.textContent = option[0]

        label1.appendChild(input1)

        var input2 =  document.createElement('input')
        input2.setAttribute('type','radio')
        input2.setAttribute('name','quest')
        input2.setAttribute('id','radio-1')

        var label2 = document.createElement('label')
        label2.setAttribute('for','radio-1')
        label2.textContent = option[1]

        label2.appendChild(input2)
        
        var input3 =  document.createElement('input')
        input3.setAttribute('type','radio')
        input3.setAttribute('name','quest')
        input3.setAttribute('id','radio-1')

        var label3 = document.createElement('label')
        label3.setAttribute('for','radio-1')
        label3.textContent = option[2]
        label3.appendChild(input3)
        
        var input4 =  document.createElement('input')
        input4.setAttribute('type','radio')
        input4.setAttribute('name','quest')
        input4.setAttribute('id','radio-1')

        var label4 = document.createElement('label')
        label4.setAttribute('for','radio-1')
        label4.textContent = option[3]
        label4.appendChild(input4)

        var next = document.createElement('next')
        next.setAttribute('type','button')
        next.setAttribute('value','next')
        
        var submit = document.createElement('submit')
        submit.setAttribute('type','button')
        submit.setAttribute('value','submit')

        form.appendChild(p)

        form.appendChild(label1)

        form.appendChild(next)

        form.appendChild(label2)
        form.appendChild(label3)
        form.appendChild(label4)

        form.appendChild(submit)
        return form
    }
}


var questList = new QuestionList()

var quest = new Question('National game of nepal..?', ['vollyball', 'footbal', 'badmiton', 'basketball'], 'vollyball', 'badminton')
var quest1 = new Question('Founder of microsoft', ['elon musk', 'steve jobs', 'bil gates', 'narendra modi'], 'bil gates', 'steve job')

questList.add(quest);
questList.add(quest1);

// Genarete to html

function data(question, option, correctAns, userAns) {

    // p.innerHTML = questList.question;
    // label.innerHTML = quest.option[0];
    p.innerHTML = questList.question;

}

document.querySelectorAll('body')[0].appendChild(form);