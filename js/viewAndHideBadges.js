let viewBadges = () => {
    badgeDiv.style.display = "block" ;
    badgeDiv.classList.add("bounceInLeft") ;
    badgeDiv.classList.remove("bounceOutLeft") ;
}

let hideBadges = () =>{
    badgeDiv.classList.add("bounceOutLeft") ;
    badgeDiv.classList.remove("bounceInLeft") ;
    setTimeout(() => {
    badgeDiv.style.display = "none" ;
  } , 1000) 

}
