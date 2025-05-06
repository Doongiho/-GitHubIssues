import axios from "axios"
import styles from "./App.module.css"
import Header from "./Header"
import ListContainer from "./ListContainer"
import Footer from "./Footer"

function App() {
  async function getData() {
    const data = axios.get("https://api.github.com/repos/facebook/react/issues")
    console.log(data)
  }
  getData()

  return (
    <>
      <div className={styles.nav}>nav</div>
      <Header />
      <ListContainer />
      <Footer />
    </>
  )
}

export default App
