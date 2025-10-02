import styles from "../App.module.css"
let Display=({displauvalue})=>{
    return <>
   
    <input type="text" className={styles.display} value={displauvalue} readOnly/>
    </>
}
export default Display