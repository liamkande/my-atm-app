import React, { useState } from "react"
import "./App.css"

const App: React.FC = () => {
  const [deposit, setDeposit] = useState(0)
  const [totalState, setTotalState] = useState(0)
  const [isDeposit, setIsDeposit] = useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeposit(Number(event.target.value))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (isDeposit) {
      setTotalState(totalState + deposit)
    } else {
      if (deposit > totalState) {
        alert("Insufficient funds")
      } else {
        setTotalState(totalState - deposit)
      }
    }

    setDeposit(0)
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2 id="total">Account Balance $ {totalState}</h2>
      <div className="select-container">
        <label>Select an action below to continue</label>
        <select
          onChange={(e) => setIsDeposit(e.target.value === "Deposit")}
          className="select-field"
        >
          <option id="no-selection" value="" />
          <option id="deposit-selection" value="Deposit">
            Deposit
          </option>
          <option id="cashback-selection" value="Cash Back">
            Cash Back
          </option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="number-input">Amount:</label>
        <input
          id="number-input"
          type="number"
          className="input-field"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="submit"
          className="button"
          value="Submit"
          id="submit-input"
        />
      </div>
    </form>
  )
}

export default App
