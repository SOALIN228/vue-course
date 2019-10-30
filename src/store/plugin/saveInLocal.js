export default store => { // store 初始化执行
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => { // 每次提交mutation 时触发
    localStorage.state = JSON.stringify(state)
  })
}
