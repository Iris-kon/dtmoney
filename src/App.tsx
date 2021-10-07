import { useState } from "react"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"
import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global"
import { TransactionContext, TrasactionsProvider } from "./TransactionsContext"

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTrasactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }
  return (
    <TrasactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal} />

      <Dashboard />
      
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />     

      <GlobalStyle />
    </TrasactionsProvider>
  );
}