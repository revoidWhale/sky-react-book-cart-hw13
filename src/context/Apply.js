import { useState, useEffect, useContext, createContext } from 'react'

const UserContext = createContext('')

export default function Apply() {
  // const userName = 'John Dow'
  const [userName, setUserName] = useState('John Dow')
  useEffect(() => {
    setTimeout(() => {
      setUserName('John Mitchel Dow')
    }, 2000)
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={userName}>
        <Layout userName={userName}>Content</Layout>
      </UserContext.Provider>
    </div>
  )
}

function Layout() {
  return (
    <div>
      <Header />
    </div>
  )
}

function Header() {
  return (
    <header>
      <UserInfo />
    </header>
  )
}

function UserInfo() {
  const userName = useContext(UserContext)
  return (
    <div>
      <span>{userName}</span>
    </div>
  )
}
