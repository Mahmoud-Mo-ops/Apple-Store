const selector=(ele)=>document.querySelector(ele);
const selectorAll=(all)=>document.querySelectorAll(all);
selector('.mobile-menu').addEventListener('click',()=>{
    selector('header').classList.toggle('active');
    selector('.nav-list-larger').classList.toggle('open')
    
})

 Array.from(selectorAll('.right')).forEach((arrowRight,indexarrow)=>{
    arrowRight.addEventListener('click',function scrollLeft(){
        let productConatianer=[...selectorAll('.product-container')][indexarrow]
         let productChildren=[...productConatianer.children]
         productChildren.forEach((productChild)=>{
         let productChildWidth=productChild.getBoundingClientRect().width;
             productConatianer.scrollLeft +=  productChildWidth;
         })
           })
   })
   Array.from(selectorAll('.left')).forEach((arrowLeft,indexarrowLeft)=>{
    arrowLeft.addEventListener('click',function scrollRight(){
         let productConatianer=[...selectorAll('.product-container')][indexarrowLeft]
         let productChildren=[...productConatianer.children]
         productChildren.forEach((productChild)=>{
         let productChildWidth=productChild.getBoundingClientRect().width;
             productConatianer.scrollLeft -=  productChildWidth;
         })
            
           })
   })

const clickBtns=[...document.querySelectorAll('.header')]
const dropMenu=[...document.querySelectorAll('.dropdown-content')] 
clickBtns.forEach((Btn)=>{
Btn.addEventListener('click',function(){
    console.log(this.nextElementSibling)
      this.nextElementSibling.classList.toggle('open')
})
})

