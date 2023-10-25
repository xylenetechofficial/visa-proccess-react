import visaIcon from '../../../assets/VisaIcon.png'
import OfficeImage from '../../../assets/Office work _Outline.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GetUser, LogIn, getpermission_ui } from '../repository'
import { useUserAuth } from '../../context/UserAuthContext'
import { SetJwtToken } from '../../../utils/function'
import { navigations } from '../../../navigation'
export default function Login() {
  const navigate = useNavigate()
  const { authUser, authLogIn, authAddNavigation } = useUserAuth();

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onClickLogin = async () => {
    setErrorMessage('')
    const response = await LogIn({ user_name: userName, password: password, email: '', name: '' })

    if (response.code != 200) {
      setErrorMessage(response.message)
      return
    }
    const loginData = response.data as { token: string }

    SetJwtToken(loginData.token)

    const userData = await GetUser()
    const navigationData = await getpermission_ui()
    if (userData) {
      await authLogIn(userData)
      // await authAddNavigation(navigationData)
      await authAddNavigation(navigations)
      
      navigate("/dashboard")
    }
  }

  useEffect(() => {
    if (authUser) {
      navigate("/dashboard")
    }
  }, [])

  return (
    <>
      <section className="flex h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">
        <div className="grid md:h-[85%] md:w-[85%] self-center max-w-screen-xl px-4 py-4 mx-auto bg-white rounded-lg md:rounded-3xl xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex ">
            <img src={OfficeImage} alt="mockup" />
          </div>
          <div className="mx-auto place-self-center lg:col-span-6">

            <div className="w-full max-w-md p-5 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="space-y-6">
                <img src={visaIcon} className='h-[45px] mx-auto' alt="FlowBite Logo" />
                <h5 className="text-2xl font-medium text-center text-gray-900 dark:text-white">Hello Again!</h5>
                <div>
                  <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                  <input
                    onKeyDown={(e) => {
                      if (e.code === "Enter")
                        onClickLogin()
                    }}
                    onChange={(event) => setUserName(event.target.value)}
                    value={userName}
                    type="text" name="user_name" id="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="user name" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyDown={(e) => {
                      if (e.code === "Enter")
                        onClickLogin()
                    }}
                    value={password}
                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>

                <div className='text-sm text-red-600'>
                  {errorMessage != '' ? errorMessage : ''}
                </div>
                <button
                  onClick={onClickLogin}
                  onKeyDown={(e) => {
                    if (e.code === "Enter")
                      onClickLogin()
                  }}
                  type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}