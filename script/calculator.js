
function insert(num) {
    document.getElementById('textview').value = document.getElementById('textview').value + num
   }
   
   function clean(){
    document.getElementById('textview').value = ""
   }

   function equal() {
    let equ = document.getElementById('textview').value;
    if(equ) {
        document.getElementById('textview').value = eval(equ) // eval=string to number
    }
}

function back() {
    let equ = document.getElementById('textview').value;
    document.getElementById('textview').value = equ.substring(0, equ.length-1)
}