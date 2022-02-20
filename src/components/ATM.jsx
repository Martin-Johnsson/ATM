import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withdrawnValue, depositedValue, } from '../redux/atmSlice'
const ATM = () => {

    const dispatch = useDispatch()

    const { balance } = useSelector((state) => state.atm)

    const handleWithdrawByValue = () => {
        const value = document.querySelector("#withdrawValue").value
        console.log(value)
        balance >= value ? (dispatch(withdrawnValue(value)))
        : alert("Insufficent funds.")
      
}

const handleWithdraw = (value) => {
     balance >= value ? (
    dispatch(withdrawnValue(value)))
    : 
    alert("Insufficent funds.")
    
}


const HandleDepositByValue = () => {
    const value = +document.querySelector("#depositValue").value
    dispatch(depositedValue(value))
}
const handleDeposit = (value) => {
    dispatch(depositedValue(value))
}

  return (
    <>
        <h1>ATM</h1>
        <h2>Current Balance: {balance} SEK </h2>
        <h2>Withdraw</h2>
        <input type="number" id="withdrawValue" />

        <button onClick={handleWithdrawByValue}>Withdraw inputed value</button>

        <button onClick={() => handleWithdraw(100)}
        >-100kr</button>

        <button onClick={() => {
            dispatch(handleWithdraw(200))
        }}>-200 kr</button>
       <button onClick={() => {
            dispatch(handleWithdraw(200))
        }}>-500 kr</button>
        <button onClick ={() => {
            dispatch(handleWithdraw(1000))
        }}>-1000 kr</button>
        <h2>Deposit</h2>
        <input type="number" id="depositValue" />
        <button onClick=
            {HandleDepositByValue}>Deposit inputed value</button>
        <button onClick=
            {() => {dispatch(handleDeposit(100))}}
        >+100 kr</button>
        <button onClick={()=> {
            dispatch(handleDeposit(200))
        }}>+200 kr</button>
        <button onClick={() => {
            dispatch(handleDeposit(500))
        }}>+500 kr</button>
        <button onClick={() => {
            dispatch(handleDeposit(1000))
        }}>+1000 kr</button>
        </>
  )
}

export default ATM