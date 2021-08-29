import React from 'react'

function Home() {
  return (
    <div className='jumbotron text-center'>
    <h1 className='display-4'>
      Note Taker{' '}
      <span role='img' aria-label='Memo'>
        📝
      </span>
    </h1>
    <h4 className='mt-4'>Take notes with Express</h4>
    <a className='btn btn-dark btn-lg mt-4' href='/notes' role='button'>
      Get Started
    </a>
  </div>
  )
}

export default Home
