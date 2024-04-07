let inputDate = document.querySelector("input")
let btn = document.querySelector("button")
let res = document.querySelector(".result")

let currentDate = new Date();

let cd = currentDate.getDay();
let cm = currentDate.getMonth()+1;
let cy = currentDate.getFullYear()

console.log(cd,cm,cy);

btn.addEventListener("click",()=>{
    let birthDate = new Date(inputDate.value)
    
    let bd = birthDate.getDay();
    let bm = birthDate.getMonth()+1;
    let by = birthDate.getFullYear()

    let nd,nm,ny;

    ny = cy-by;

    if(cm>=bm){
        nm = cm-bm
    }

    else{
        ny--;
        nm = 12+cm - bm;
    }

    if(cd>=bd){
        nd = cd-bd
    }

    else{
        nm--
        nd = getDaysInMonth(by,bm) + cd-bd;
    }
    if(nm<0){
        nm=11;
        ny--;
    }


    console.log(nd,nm,ny);

    res.textContent=""

    let ans = document.createElement("span");
    ans.textContent = ny + " Year " + nm + " Month " + nd + " Day "
    ans.classList.add("ans")
    res.appendChild(ans)

})

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}


console.log(inputDate.value);