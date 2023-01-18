import React from 'react'
import styles from './Tabs.module.css'

function Tabs({setTab}) {
    return (
  <>
  <div className={styles.tabs}>
  <h2 className={styles.label} onClick={()=>setTab('Summary')}>Summary</h2>
  <h2 className={styles.label} onClick={()=>setTab('About')}>About</h2>
  <h2 className={styles.label} onClick={()=>setTab('Review')}>Review</h2>
  <div className={styles.tab}>
    </div>
    </div>
  </>
    )
  }

  export default Tabs