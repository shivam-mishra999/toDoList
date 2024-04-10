import React, {useState} from 'react';
import styles from "./Todo.module.css";

export default function Todo() {
    const [activity, setActivity] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (event) => {
        setActivity(event.target.value);
    }
    const handleAddActivity = () => {
        // setList([...list, activity])
        // console.log(list);
        setList((list) => {
            const resultList = [...list, activity];
            setActivity("");
            // console.log(resultList);
            return resultList;
        })
    }

    const handleRemove = (i) => {
        const afterRemovedList = list.filter((item, id) => {
            return (i !== id);
        })
        setList(afterRemovedList);
    }

    const handleRemoveAll = () => {
        setList([]);
    }
    
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleAddActivity();
        }
    }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
            TO-DO LIST
        </div>
        <input type="text" placeholder="write to add activity..." value={activity} onChange={handleChange} onKeyPress={handleKeyPress} />
        <button className={styles.addButton} onClick={handleAddActivity}>Add</button>

        <p className={styles.listHeading}>Here is your todo list :{")"}</p>
        {list && list.map((item, idx) => {
            return (
                <>
                    <p className={styles.content} key={idx}>
                        <div className={styles.listData}>{item}</div>
                        <div className={styles.listButton}>
                            <button onClick={()=>handleRemove(idx)}>Remove(-)</button>
                        </div>
                    </p>
                     
                </>
            )
        })}

        {list.length > 1 && 
        <button className={styles.removeAll} onClick={handleRemoveAll}>Remove All</button>}
      </div>
    </>
  )
}
