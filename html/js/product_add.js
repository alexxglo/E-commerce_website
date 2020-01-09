for(i=0;i<5;i++)
{
if(i==0)
{   var elem_0= document.createElement('div');
    elem_0.classList.add('col-md-4');
    var child_elem_0= document.createElement('a');
    child_elem_0.classList.add('text-reset');
    child_elem_0.classList.add('text-decoration-none');
    elem_0.appendChild(child_elem_0);
}
if(i==1)
{   var elem_1= document.createElement('div');
    elem_1.classList('card');
    elem_1.classList('mb-4');
    elem_1.classList('shadow-sm');
    var child_elem_1= document.createElement('picture');
    child_elem_1.classList('thumbnail');
    child_elem_1.src="#img_path";
    elem_1.appendChild(child_elem_1);
}
if(i==2)
{   var elem_2= document.createElement('div');
    elem_2.classList('card-body');
    var child_elem_2=document.createElement('p');
    child_elem_2.classList('card-text');
    var textNode= document.createElement("#text_id");
    child_elem_2.appendChild("textNode");
    elem_2.appendChild(child_elem_2);
}
if(i==3)
{   var elem_3= document.createElement('div');
    elem_3.classList('d-flex ');
    elem_3.classList('justify-content-between');
    elem_3.classList('align-items-center');
    var elem_4= document.createElement('div');
    elem_4.classList('btn-group');
    var child_3=document.createElement('button');
    child_3.setAttribute("type","button");
    child_3.classList("btn");
    child_3.classList("btn-sm");
    child_3.classList("btn-outline-success");
    elem_4.appendChild(child_3);
    elem_3.appendChild(elem_4);
}
if(i==4)
    {
        elem_2.appendChild(elem_3);
        elem_1.appendChild(elem_2);
        elem_0.appendChild(elem_1);
    }
}


