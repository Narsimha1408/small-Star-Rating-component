let starContainerEle=document.querySelector(".star-container")
let starElement=document.querySelectorAll(".star")
let ratingCountEle=document.querySelector(".rating-count");
let filledStars=0
starContainerEle.addEventListener("click",function(e){
    currentClickedStars = e.target.dataset.index
    for(i=0;i<filledStars;i++){
        starElement[i].classList.remove("rated-star")
    }
    for(i=0; i<currentClickedStars; i++){
        starElement[i].classList.add("rated-star")
    }
    filledStars=currentClickedStars
    console.log(ratingCountEle)
    ratingCountEle.innerText=currentClickedStars
})