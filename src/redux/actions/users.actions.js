import { UserService } from '../../services/users.service'
import { types } from '../types'
import { loadEmployeerJobsThunk, loadEmployeeJobsThunk, loadJobsThunk, cleanJobs } from './jobs.actions'

export const signInThunk = (email, password, setLoading, setError) => {
  return async (dispatch) => {
    setLoading(true)
    try {
      const credentials = await UserService.signIn(email, password)
      dispatch(signIn(credentials))
      if (credentials.role === 'employeer') {
        dispatch(loadEmployeerJobsThunk(credentials._id, credentials.token))
      } else {
        dispatch(loadJobsThunk(credentials.token))
        dispatch(loadEmployeeJobsThunk(credentials._id, credentials.token))
      }
      setLoading(false)
      
    } catch (err) {
      setError('Email o contraseña incorrecta')
      setLoading(false)
    }
  }
}

export const signUpThunk = (user, role, setLoading, setError) => {
  return async (dispatch) => {
    setLoading(true)
    try {
      const credentials = await UserService.signUp(user, role)
      dispatch(signUp(credentials))
      dispatch(loadJobsThunk(credentials.token))
      setLoading(false)
    } catch (err) {
      setError('El usuario ya existe')
      setLoading(false)
    }
  }
}

export const logoutThunk = () => {
  return async (dispatch) => {
    dispatch(logout())
    dispatch(cleanJobs())
  }
}

export const signIn = (credentials) => ({
  type: types.SIGNIN,
  payload: credentials,
})

export const signUp = (credentials) => ({
  type: types.SIGNUP,
  payload: credentials,
})

export const logout = () => ({
  type: types.LOGOUT,
})
