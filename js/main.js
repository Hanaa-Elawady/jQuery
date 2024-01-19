// side nav animation
$('.close').on('click',function(){
    $('.menu').animate({width:'0'}, {margin:'0'} , 2000);
    $('.open').removeClass('d-none');
}); 
$('.open').on('click',function(){
    $('.menu').animate({width:'150px'}, {margin:'100%'} , 2000);
    $('.open').addClass('d-none');
}); 

// section two animation

$('.open-tab').click(function(e){
    $('.tab').not($(e.target).next()).slideUp(500);
    $(e.target).next('.tab').slideToggle(500);
});

// count down 
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let targetDate = new Date(2024, 0, 31, 12, 0, 0);
countdown(targetDate);

function countdown(targetDate) {
    function updateCountdown() {
        let currentDate = new Date();
        let endDate = new Date(targetDate);
        let timeDifference = endDate.getTime() - currentDate.getTime();

        days.innerHTML = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        hours.innerHTML = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes.innerHTML = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        seconds.innerHTML = Math.floor((timeDifference % (1000 * 60)) / 1000);

    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// contact
const message =document.getElementById('message');
const numRemaining =document.getElementById('numRemaining');
const noRemaining = document.getElementById('noRemaining'); 
const submit = document.getElementById('submit'); 

function characterNum(){
    let messagechar = message.value;
    let remain = Math.floor(100 - messagechar.length);
    if(remain>0){
        numRemaining.innerHTML = remain;
    }else{
        noRemaining.innerHTML = "your available character finished";
        noRemaining.classList.add('text-success' , 'fw-bold');
        submit.classList.remove('disabled')
    }
}


