let idade = document.getElementById('ida')
let res = document.getElementById('res')


function descobrir(){
    let i = Number(idade.value)
    res.innerHTML = ''
    if(idade.value.length == 0){
        res.innerHTML += 'Por favor digite uma idade númerica.'
    }else{
        if(i < 16){
            res.innerHTML += 'Você não pode votar.'
        }else{
            if(i < 18){
                res.innerHTML += 'Voto não é obrigatorio.'
            }else{
               if(i <= 65){
                   res.innerHTML += 'Voto obrigatorio.'
               }else{
                   res.innerHTML += 'Voto não é obrigatorio.'
               }
            }
        }
    }
}