import styles from "./App.module.css"
import Header from "./Header"
import ListContainer from "./ListContainer"

function App() {
  return (
    <>
      <div className={styles.nav}>nav</div>
      <Header />
      <ListContainer />
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default App
