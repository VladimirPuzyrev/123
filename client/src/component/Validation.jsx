export const Validation = (field, type) => {
    if(!String(field)
    .match(type)){
        return field
    }else{
        return false
    }
}

export const Invalid = (e, id, validation, label, labelText) => {
    if(e.target.id === id){
        if(!e.target.value == ''){
            if(e.target.value === validation){
                e.currentTarget.classList.add('invalid')
                label.textContent = labelText;

                return false
            }
        }
    }
}
