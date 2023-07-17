import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useUserAuth } from '../../context/UserAuthContext'
import { CustomButton2, CustomNavbarV3 } from '../../../componenets/CustomComponents'
import { CardHeader } from '@mui/material'
import { UserInterface } from '../../context/Model'
import { showMessage_v2 } from '../../../utils/alert'
import { updateUser } from '../repository'

export default function ChangePassword() {
  const navigate = useNavigate()
  const { authUser, authLogOut } = useUserAuth();

  const initValue: UserInterface = {
    id: 0,
    email: '',
    name: '',
    user_name: '',
    role: '',
    password: '',
  }
  const [user, setUser] = useState(initValue)

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    setUser(authUser)
  }, [authUser])

  const onClickUpdate = async () => {
    // check new password
    if (newPassword.trim().length < 4) {
      showMessage_v2({ message: "Password Minimum Length 4", status: 400 });
      return
    }

    if (newPassword.trim() != confirmPassword.trim()) {
      showMessage_v2({ message: "New & Confirm Password Not Match", status: 400 });
      return
    }

    // get user
    const payload = user
    payload.password = confirmPassword.trim()

    const res = await updateUser(payload);

    // if updated then log out user
    if (res.code == 200) {
      authLogOut()
      navigate("")
    }
  }

  return (
    <div >
      <CustomNavbarV3 pageName="Change Password" searchFunction={(query) => ""} />

      <CardHeader>
      </CardHeader>
      <div>
        {/* Old Password: <input type="text" onChange={(event) => setPassword(event.target.value)} /> <br /> */}
        {/* New Password: <input type="text" onChange={(event) => setNewPassword(event.target.value)} /> <br />
        Confirm Password: <input type="text" onChange={(event) => setConfirmPassword(event.target.value)} /> <br />

        <button onClick={onClickUpdate} >change</button> */}
      </div>

      <div className="w-full max-w-md p-5 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6">
          {/* <img src={visaIcon} className='h-[45px] mx-auto' alt="FlowBite Logo" /> */}
          {/* <h5 className="text-2xl font-medium text-center text-gray-900 dark:text-white">Hello Again!</h5> */}
          <div>
            <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
            <input
              onChange={(event) => setNewPassword(event.target.value)}
              value={newPassword}
              type="text" name="new_password" id="new_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="new password" required />
          </div>
          <div>
            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
            <input
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
              type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <button
            onClick={onClickUpdate}
            type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change</button>

        </div>
      </div>
    </div>
  )
}