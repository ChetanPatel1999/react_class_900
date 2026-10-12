import React from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

const App = () => {

  const users = [
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
      para: "I can easily transfer money, pay bills, and check my account balance using this digital banking app. It saves me a lot of time.",
      btnTag: "Satisfied",
      color: "blue"

    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
      para: "The mobile banking app is easy to use, but sometimes transactions take too long to process. Customer support needs improvement.",
      btnTag: "Unsatisfied",
      color: "orange"
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
      para: "I love the instant payment feature. I can send money to friends and family anytime without visiting a bank.",
      btnTag: "Satisfied",
      color: "seagreen"
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
      para: "The app provides useful features like transaction history, balance checking, and secure online payments. It makes banking convenient.",
      btnTag: "Understand",
      color: "black"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
      para: "Digital banking helps me manage my daily expenses, pay utility bills, and receive payment notifications directly on my phone.",
      btnTag: "Satisfied",
      color: "red"
    }
  ];

  return (
    <div>
      <Section1 user={users} />
      <Section2 />
    </div>
  )
}

export default App
