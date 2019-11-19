# vue-course

## 学习笔记

1. 使用`jsx` 在某些情况下比`render`函数更简洁，更清晰，但是需要在script标签上添加`type="text/jsx"`,而且不能在style标签上添加`scoped`,而`render`函数不受这些影响，但是在逻辑复杂的页面会很乱，代码量很大
2. `Promise.all([getFolderList(), getFileList()])`,根据书写顺序返回，且两个函数都成功才返回

