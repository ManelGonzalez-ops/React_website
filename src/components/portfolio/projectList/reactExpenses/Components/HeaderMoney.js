import React, {useEffect, useState} from 'react'


function HeaderMoney(props) {
    const [totalAmount,setTotalAmount] = useState(0)
    const [gastos, setGastos] = useState(0)
    const [income, setIncome] = useState(0)

   

    

    useEffect(() => {
        //we define it here to avoid stupid rerenders
        const checkStorage =()=>{
            const total = props.datos.map(item=> item.amount)
            
            const totalAmountC = total.reduce((total, amount)=> total += parseInt(amount), 0)
            const incomeC = total.reduce((total, amount)=>{
                const amounta = parseInt(amount)
                if(amounta>0){
                    total += amounta
                }
                return total
            }, 0)
            setIncome(incomeC)
            setTotalAmount(totalAmountC)
            setGastos(totalAmount - income)    
            }
        if(props.datos){
            checkStorage()
        }
    }, [props.datos, income, totalAmount])
    
    
    return (
        <div className="headerContainer">
            <div>
                <h3>Your Balance: <span className="balanceTotal">{totalAmount}</span></h3>
            </div>
            <div className="incomeExpenses">
                <div className="caja ingreso">
                    <h5 className="achecicno">Income: </h5>
    <p className="income">{income}</p>
                </div>
                <div className="caja gasto">
                    <h5 className="achecicno">Expenses: </h5>
    <p className="expenses">{gastos}</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderMoney