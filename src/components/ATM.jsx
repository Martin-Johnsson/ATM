import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withdrawByValue, withdrawByOneHundred, withdrawByTwoHundred, withdrawByFiveHundred, withdrawByOneThousand, depositByValue,depositByOneHundred,depositByTwoHundred,depositByFiveHundred,depositByOneThousand } from '../redux/atmSlice'
const ATM = () => {

    const dispatch = useDispatch()
    const { defaultMoney } = useSelector((state) => state.atm)

    const handleWithdrawByValue = () => {
        const value = document.querySelector("#withdrawValue").value
        console.log(value)
        dispatch(withdrawByValue(value))
}
const HandleDepositByValue = () => {
    const value = +document.querySelector("#depositValue").value
    dispatch(depositByValue(value))
}
  return (
    <>
        <h1>ATM-Komponenten</h1>
        <h2>Current Balance: {defaultMoney} SEK </h2>
        <h2>Withdraw</h2>
        <input type="number" id="withdrawValue" />
        <button onClick={handleWithdrawByValue}>Withdraw inputed value</button>
        <button onClick={() => {
            dispatch(withdrawByOneHundred())
        }}
        >-100kr</button>
        <button onClick={() => {
            dispatch(withdrawByTwoHundred())
        }}>-200 kr</button>
       <button onClick={() => {
            dispatch(withdrawByFiveHundred())
        }}>-500 kr</button>
        <button onClick ={() => {
            dispatch(withdrawByOneThousand())
        }}>-1000 kr</button>
        <h2>Deposit</h2>
        <input type="number" id="depositValue" />
        <button onClick={HandleDepositByValue}>Deposit inputed value</button>
        <button onClick={() => {
            dispatch(depositByOneHundred())
        }}>+100 kr</button>
        <button onClick={()=> {
            dispatch(depositByTwoHundred())
        }}>+200 kr</button>
        <button onClick={() => {
            dispatch(depositByFiveHundred())
        }}>+500 kr</button>
        <button onClick={() => {
            dispatch(depositByOneThousand())
        }}>+1000 kr</button>
        </>
  )
}

export default ATM