var noti=document.querySelector('h5');
var select=document.querySelector('.pro');
var button=document.querySelector('button');
for(but of button)
{
    but.addEventListner('click',(e)=>{
        var add=Number(noti.getAttribute('data-count')||0);
        noti.setAttribute('data-count',add+1)
        noti.classList.add('zero');

        var parent=e.target.parentNode;
        var clone=parent.cloneNode(true);
        pro.appendChild(clone);
        clone.lastElementChild.innerText="Buy now";
        if(clone){
            noti.onclick=()=>{
                pro.classList.toggle("display")
            }
        }
    } )
}