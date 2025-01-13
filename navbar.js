let bar=document.getElementById("fa-bars");
let sideNavbar=document.getElementById("sideNavbar");
let closeBtn=document.getElementById("closebtn");
let menuitems = document.querySelectorAll("#menuitems  ul");
let icon=document.querySelectorAll('i');
let bodyEle=document.getElementById('bodydiv');
console.log(bodyEle);

bar.addEventListener('click',()=>{
    sideNavbar.style.display='block';
    sideNavbar.style.width='25%';
  });

closeBtn.addEventListener('click',()=>{
    sideNavbar.style.width='0';
    sideNavbar.style.display='none';
    });
 bodyEle.addEventListener('click',(event)=>{
    console.log(event.target.id);
    if (event.target.id=="bodydiv"){
      sideNavbar.style.width='0';
      sideNavbar.style.display='none';
    }
        
      });
    menuitems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          item.style.backgroundColor = 'rgb(38, 168, 248, 0.3)'; 
          item.style.color='rgb(12, 147, 231)';
          // item.style.transform='scale(1.1)';
        });
      
        item.addEventListener('mouseleave', () => {
          item.style.backgroundColor = ''; 
          item.style.color='#000000';
          // item.style.transform='';
        });
      });

      icon.forEach(items => {
        items.addEventListener('mouseenter', () => {
          items.style.color = 'rgb(0,0,0,0.8)';
        });
      
        items.addEventListener('mouseleave', () => {
          items.style.color = '#26a8f8';
        });
      });

