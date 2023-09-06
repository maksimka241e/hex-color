let wrapper = document.getElementById("wrapper");
let btn = document.getElementById("btn")
let block1 = document.getElementById("block1")
let block2 = document.getElementById("block2")
let block3 = document.getElementById("block3")
let block4 = document.getElementById("block4")
let block5 = document.getElementById("block5")
let block6 = document.getElementById("block6")
let title = document.getElementById("titles")
let  colors;
let titleColor;

btn.addEventListener("click", ramdomColor)
function ramdomColor(){
    block1.style.background = `${getColor()}`
    block2.style.background = `${getColor()}`
    block3.style.background = `${getColor()}`
    block4.style.background = `${getColor()}`
    block5.style.background = `${getColor()}`
    block6.style.background = `${getColor()}`    
}

function getColor(){
    colors = [
        //red 
        "#CD5C5C","#F08080","#FA8072",
        "#E9967A","#FFA07A","#DC143C",
        "#FF0000","#B22222","#8B0000",
        // green
        "#ADFF2F","#7FFF00","#7CFC00",
        "#00FF00","#32CD32","#98FB98",
        "#90EE90","#00FA9A","#00FF7F",
        "#3CB371","#2E8B57","#228B22",
        "#008000","#006400","#9ACD32",
        // pink
        "#FFC0CB","#FFB6C1","#FF69B4",
        "#FF1493","#C71585","#DB7093",
        // yellow
        "#FFD700","#FFFFE0","#FFFACD",
        "#FAFAD2","#FFFF00","#FFEFD5",
        "#FFE4B5","#FFDAB9","#EEE8AA",
        // blue
        "#00FFFF","#E0FFFF","#AFEEEE",
        "#40E0D0","#7FFFD4","#48D1CC",
        "#00CED1","#5F9EA0","#4682B4",
        "#00BFFF","#1E90FF","#6495ED",
        "#0000FF","#0000CD","#00008B",
        // gray
        "#DCDCDC","#D3D3D3","#D3D3D3",
        "#C0C0C0","#A9A9A9","#808080",
        "#778899","#708090","#2F4F4F",
        // while
        "#F0FFF0","#F5FFFA","#F0F8FF",
        "#F8F8FF","#F5F5F5","#FDF5E6",
        "#FFFAF0","#FAEBD7","#FAF0E6",
        "#FFF0F5","#FFE4E1","#C0C0C0",
     ]
     return colors[Math.floor(Math.random() * colors.length)]
}

