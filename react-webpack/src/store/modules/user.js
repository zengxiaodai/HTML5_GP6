import { makeAutoObservable } from 'mobx'

export default class StudyStore {
  constructor() {
    makeAutoObservable(this)
  }
  token = localStorage.getItem('token')
  login(token) {
    localStorage.setItem('token', token)
    this.token = token
  }
}
