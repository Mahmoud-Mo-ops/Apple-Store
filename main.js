const selector=(ele)=>document.querySelector(ele);
const selectorAll=(all)=>document.querySelectorAll(all);

selector('.mobile-menu').addEventListener('click',()=>{
    selector('header').classList.toggle('active');
    selector('.nav-list-larger').style.display="block";
    if(selector('header').classList.contains('active')){
       selector('.nav-list-larger').style.opacity='1';
    }
     else{
        selector('.nav-list-larger').style.opacity='0';
    }
})
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         selector('.nav-list-larger').style.display="none";
//     } else {
//         selector('.nav-list-larger').style.display="block";
//     }
//   }
//   var x = window.matchMedia("(min-width: 767px)")
//   myFunction(x) // Call listener function at run time
// //   x.addListener(myFunction) // Attach listener function on state changes







// const rightArrow=selectorAll('.right');
// console.log(rightArrow[2].style.color="#000")
// const leftArrow=selector('.left');
// const productsContainer=selector('.product-container');
// const products=selectorAll('.product');
// const products1=selectorAll('.product-container > div');
// console.log(products1)
// const productLength=products.length;
// const lastProduct=products[productLength-1];
// const firstItem=products[0];

// rightArrow.addEventListener('click',()=>{
//     products.forEach((product)=>{
//         let productwidth=product.getBoundingClientRect().width;
//         productsContainer.scrollLeft +=  productwidth;
//         leftArrow.style.display="flex";
//     })
//     if(isInViewport(lastProduct)){
//      rightArrow.style.display="none";
//     }
// })


// leftArrow.addEventListener('click',()=>{
//     products.forEach((product)=>{
//         let productwidth=product.getBoundingClientRect().width;
//         productsContainer.scrollLeft -=  productwidth ;
//         rightArrow.style.display="flex";
//     })
// })
// rightArrow.addEventListener('click',scrollLeft);
// leftArrow.addEventListener('click',scrollRight);

// function scrollLeft(){
//     products.forEach((product)=>{
//         let productwidth=product.getBoundingClientRect().width;
//         productsContainer.scrollLeft +=  productwidth;
//         leftArrow.style.display="flex";
//     })
//     if(isInViewport(lastProduct)){
//      rightArrow.style.display="none";
//     }
// }
// function scrollRight(){
//     products.forEach((product)=>{
//         let productwidth=product.getBoundingClientRect().width;
//         productsContainer.scrollLeft -=  productwidth ;
//         rightArrow.style.display="flex";
//     })
// }

// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)

//     );
// }

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




function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}







const clickBtns=[...document.querySelectorAll('.header')]
const dropMenu=[...document.querySelectorAll('.dropdown-content')] 
clickBtns.forEach((Btn)=>{
Btn.addEventListener('click',function(){
    console.log(this.nextElementSibling)
      this.nextElementSibling.classList.toggle('open')
})
})

