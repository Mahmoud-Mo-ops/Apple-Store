const selector=(ele)=>document.querySelector(ele);
selector('.mobile-menu').addEventListener('click',()=>{
    selector('header').classList.toggle('active');
    selector('.nav-list-larger').style.display="block";
    if(selector('header').classList.contains('active')){
       selector('.nav-list-larger').style.opacity='1';
    } else{
        selector('.nav-list-larger').style.opacity='0';
    }
})