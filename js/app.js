//SELECTIONS
let addTask = document.querySelector('.submit');
let tableBody = document.querySelector('tbody');
let cancelBtn = document.querySelector('.cancel');
let display = document.querySelector('.full-width');




//FUNCTIONS
// This function showTime is responsible for the clock showing in the header
const showTime = () => {
    let hours = ((new Date().getHours()) %12)
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let time;
    minutes < 10 ? minutes = '0' +  minutes : minutes
    seconds < 10 ? seconds = '0' +  seconds : seconds
    hours < 10? hours = '0' + hours : hours
    // This is the condition for adding AM / PM and the padding
    new Date().getHours() < 12 ? time = `${hours} : ${minutes} : ${seconds} AM`:  
        time = `${hours} : ${minutes} : ${seconds} PM`
        document.getElementById('timer').textContent = time
    setTimeout(showTime,1000)
}
showTime()
// The function get called here 

// This is responsible for the schedule outputs in the tables
const tableTask = (e) => {
    e.preventDefault()
    //SELECTS the subject value / inputs and the subject itself
    let subject = document.querySelector('.subject').value
    let notes = document.querySelector('.notes').value
    let taskTitle = document.querySelector('.subject')
    let notesTitle = document.querySelector('.notes')
    //Prevents empty selection (subject must be provided)
    if(subject) {
        //APPENDS SUBJECT to the table
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.appendChild(document.createTextNode(subject))
        tr.appendChild(td1)
        // COUNTDOWN CLOCK
        let td2 = document.createElement('td')
            const timing = (totalDate) => {
                const repeatTime = () => {
                    let seconds = totalDate
                    // let yearsLeft = Math.floor(seconds/3600/24/365)
                    // let monthsLeft = Math.floor(seconds/3600/24/30)
                    let daysLeft = Math.floor(seconds/3600/24)
                    let newhours = Math.floor(seconds/3600) 
                    console.log(newhours)
                    let newminutes = Math.floor(seconds/60)
                    // let newseconds = Math.floor(seconds )
                    let newtime = 
                    newminutes < 10 ? newminutes = '0' +  newminutes : newminutes
                    // newseconds < 10 ? newseconds = '0' +  newseconds : newseconds
                    newhours < 10? newhours = '0' + newhours : newhours
                    // This is the condition for adding AM / PM and the padding
                    newtime = `Days Left-${daysLeft} : Hour Left-${newhours} : Minutes Left-${newminutes}`
                    td2.textContent = `${newtime}`
                    if(totalDate !== 0) {
                        totalDate--
                        setTimeout(repeatTime, 1000)
                    }
                    //After Schedule Timer ends this runs
                    else{
                        let showText = document.querySelector('.alarm-text');
                        let showNotes = document.querySelector('.displayNotes');
                        display.classList.add('active');
                        showText.textContent = `Reminder:  ${subject}`;
                        showNotes.textContent = `${notes}`;
                    }                         
                }
                repeatTime()
            //APPENDS the clock to the table and calls the function at the end
            }

            let year = document.querySelector('.year').value
            let month = document.querySelector('.schedule').value
            let day = document.querySelector('.day').value
            let hour = document.querySelector('.hour').value
            let minute = document.querySelector('.minute').value
            let seco = document.querySelector('.seco').value
            const date = new Date(year, month, day, hour, minute, seco)
            const today = new Date()
            let totalDate = Math.floor((date.getTime() - today.getTime()) / 1000)
            if(totalDate < 0){
                window.alert('Invalid Date')
            }
            else{
                console.log(totalDate)            
                td2.appendChild(document.createTextNode(totalDate))
                tr.appendChild(td2)
                tableBody.appendChild(tr)
                timing(totalDate)            
                taskTitle.value= ''
                notesTitle.value= ''
            }
        }
        //This runs if subject is not provided
        else {
            window.alert('You must fill in the Subject field')
        }   
}

//EVENTS
addTask.addEventListener('click', tableTask)
cancelBtn.addEventListener('click', function cancel () {
    display.classList.remove('active')
    // tr.removeChild(td1)
    // tr.removeChild(td2)
})