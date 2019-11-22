// 业务相关代码
import Cookies from 'js-cookie'

export const setTitle = (title = 'admin') => {
  window.document.title = title
}

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}

export const putFileInFolder = (folderList, fileList) => {
  const folderListCloned = JSON.parse(JSON.stringify(folderList))
  const fileListCloned = JSON.parse(JSON.stringify(fileList))
  return folderListCloned.map(folderItem => {
    const folderId = folderItem.id
    let index = fileListCloned.length
    while (--index >= 0) {
      const fileItem = fileListCloned[index]
      if (fileItem.folder_id === folderId) {
        const file = fileListCloned.splice(index, 1)[0]
        file.title = file.name
        if (folderItem.children) {
          folderItem.children.push(file)
        } else {
          folderItem.children = [file]
        }
      }
    }
    folderItem.type = 'folder'
    return folderItem
  })
}

export const transferFolderToTree = folderList => {
  if (!folderList.length) return []
  const folderListCloned = JSON.parse(JSON.stringify(folderList))
  const handle = id => {
    let arr = []
    folderListCloned.forEach(folder => {
      if (folder.folder_id === id) {
        const children = handle(folder.id)
        if (folder.children) folder.children = [].concat(folder.children, children)
        else folder.children = children
        folder.title = folder.name
        arr.push(folder)
      }
    })
    return arr
  }
  return handle(0)
}

export const expandSpecifiedFolder = (vm, folderTree, id) => {
  return folderTree.map(item => {
    if (item.type === 'folder') {
      if (item.id === id) {
        vm.$set(item, 'expand', true)
      } else {
        if (item.children && item.children.length) {
          item.children = expandSpecifiedFolder(vm, item.children, id)
          if (item.children.some(child => {
            return child.expand === true
          })) {
            vm.$set(item, 'expand', true)
          } else {
            vm.$set(item, 'expand', false)
          }
        }
      }
    }
    return item
  })
}
