import  { useState } from 'react'

const useAdd = () => {
    const [add, setAdd] = useState({archived: false,category:""})
    const [category, setCategory] = useState("")

    const addNoteInfo = (e,category) => {
        const {name,value} = e.target
        if (name===category) {
            setAdd({
                ...add,
                  category:value
              })
        }
        setAdd({
          ...add,
            [name]:value
        })
    }

    const addCategory = (e) => {
        const {value} = e.target
        setCategory(value)
    }
  return {addNoteInfo,addCategory,category,add}
}

export default useAdd