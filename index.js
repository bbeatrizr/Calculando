function Somar(){
    var tn1 = window.document.getElementById('txts1')
    var tn2 = window.document.getElementById('txts2')
    var res = window.document.getElementById('res')
    var n1 = Number (tn1.value)
    var n2 = Number (tn2.value)
    var s = n1+n2
    res.innerText=`A soma entre ${n1} e ${n2} é igual a:${s}`
}
function sub() {
    var tm1 = window.document.getElementById('txtm1')
    var tm2 = window.document.getElementById('txtm2')
    var resM = window.document.getElementById('resM')
    var v1 = Number (tm1.value)
    var v2 = Number (tm2.value)
    var sub = v1-v2
    resM.innerText=`A subtração entre os valores ${v1} e ${v2} é igual a: ${sub}`
}
function mult(){
    var tx1 = window.document.getElementById('txtx1')
    var tx2 = window.document.getElementById('txtx2')
    var resX = window.document.getElementById('ResX')
    var x1 = Number (txtx1.value)
    var x2 = Number (txtx2.value)
    var x = x1*x2
    resX.innerText=`A multiplicação entre os valores ${x1} e ${x2} é: ${x}`
}
