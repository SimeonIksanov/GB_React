import { useSelector, useDispatch } from 'react-redux'
import { swap } from './checkboxSlice'

function Profile()
{
    const value = useSelector(state => state.checkbox.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Profile</h1>
            <span>
                this is The Checkbox:
                <input
                    type="checkbox"
                    checked={value}
                    onChange={()=>dispatch(swap())}
                />
            </span>
        </div>
    )
}

export default Profile;