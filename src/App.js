import styles from "./App.module.css"
import Header from "./Header"
import Button from "./components/Button"

function App() {
  return (
    <>
      <div className={styles.nav}>nav</div>
      <Header />
      <div className={styles.listContainer}>
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          New Issue
        </Button>
      </div>
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default App
