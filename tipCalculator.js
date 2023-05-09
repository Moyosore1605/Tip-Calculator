let total
    const calcTip = (params) =>{
        let varPriceid = document.getElementById('priceId').value
        let varPercentid = document.getElementById('tipPercentId').value
        if (varPriceid != "" && varPercentid != ""){
            total = Number(varPriceid) + Number(varPriceid * varPercentid / 100)
            document.getElementById('displayTotal').innerHTML = total
        }
    }