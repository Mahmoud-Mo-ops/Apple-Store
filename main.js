const selector=(ele)=>document.querySelector(ele);
const selectorAll=(all)=>document.querySelectorAll(all);

selector('.mobile-menu').addEventListener('click',()=>{
    selector('header').classList.toggle('active');
    selector('.nav-list-larger').style.display="block";
    if(selector('header').classList.contains('active')){
       selector('.nav-list-larger').style.opacity='1';
    } else{
        selector('.nav-list-larger').style.opacity='0';
    }
})
const rightArrow=selector('.right');
const leftArrow=selector('.left');
const productsContainer=selector('.product-container');
const products=selectorAll('.product');
const productLength=products.length;
const lastProduct=products[productLength-1];
const firstItem=products[0]

rightArrow.addEventListener('click',()=>{
    products.forEach((product)=>{
        let productwidth=product.getBoundingClientRect().width;
        productsContainer.scrollLeft +=  productwidth ;
        leftArrow.style.display="flex"
       
    })
    if(isInViewport(lastProduct)){
     rightArrow.style.display="none"
    }
})

leftArrow.addEventListener('click',()=>{
    products.forEach((product)=>{
        let productwidth=product.getBoundingClientRect().width;
        productsContainer.scrollLeft -=  productwidth ;
        rightArrow.style.display="flex"
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

clickBtns.forEach((Btn,index)=>{
Btn.addEventListener('click',function(){
    console.log(this.nextElementSibling)
      this.nextElementSibling.classList.toggle('open')
})
})

