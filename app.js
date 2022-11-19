// Variables declaration
const ratings = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit');
const ratingPage = document.querySelector('#rating-page');
const thankYouPage = document.querySelector('#thank-you-page');
const ratingNumber = document.querySelector('.rating-number');
// initial rate
let rate = 4;

// Add active class to the rating page when the page is loaded
window.addEventListener('DOMContentLoaded' , function(){
    ratingPage.classList.add('active')
    ratings[rate - 1].classList.add('selected');
})

ratings.forEach(function(rating){
    rating.addEventListener('click',function(e){
        e.preventDefault()
        // Get rating
        selectedRate = e.currentTarget.dataset.id;
        // if rate !== selectedRate
        if(rate !== selectedRate){
            ratings[rate-1].classList.remove('selected')
            rate = selectedRate
            e.currentTarget.classList.add('selected');
        }
    })
})

submit.addEventListener('click', function(){
    ratingPage.classList.remove('active');
    thankYouPage.classList.add('active');
    ratingNumber.textContent = rate;
})


