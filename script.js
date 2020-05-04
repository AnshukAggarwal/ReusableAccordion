function createAccordion(panelHeading=[],panelText=[]){
    var container= document.createElement('div');
    container.setAttribute('id','container');
    //Create Items
    panelHeading.forEach((element,index)=>{
        var item =document.createElement('button');
        item.setAttribute('class','accordion');
        item.textContent=element;
        var div= document.createElement('div');
        div.setAttribute('class','panel');
        var itemText = document.createElement('p');
        itemText.textContent= panelText[index];
        div.appendChild(itemText);
        container.appendChild(div);
        div.parentElement.insertBefore(item,div);
    });
    
    document.body.appendChild(container);
}
createAccordion([],[]);

var containerDiv= document.getElementById('container');
containerDiv.addEventListener('click',function(e){
    var panel = e.target.nextElementSibling;
    panel.classList.toggle('show');
    //var notSelected= document.querySelectorAll('div:not(.show):not(#container)');
    
});



