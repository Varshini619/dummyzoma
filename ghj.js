const quick_enquiry_btn = document.querySelector(".quick_enquiry_btn");
const wrapper = document.querySelector('.wrapper');
const closeBtn = document.querySelector('.btn-close');
quick_enquiry_btn.addEventListener('click',(e)=>{
e.preventDefault();
wrapper.classList.add('change');})
closeBtn.addEventListener('click',()=>
{
wrapper.classList.remove('change');
})