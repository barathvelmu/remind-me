import { useState } from 'react'
import { FaBullseye } from 'react-icons/fa'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault() //prevent default behaviour

        if (!text) {
            alert('Please add task')
            return
        }

        onAdd( { text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control'> 
                <label>Reminder</label>
                <input type='text' placeholder='Add Reminder' value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className='form-control form-control-check'> 
                <label>Occurance</label>
                <input type='text' placeholder='Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className='form-control'> 
                <label>Prioritize (double click)</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
