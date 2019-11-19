<template>
  <div class="folder-wrapper">
    <Tree :data="folderTree" :render="renderFunc"></Tree>
  </div>
</template>

<script type="text/jsx">
import { getFolderList, getFileList } from '../api/data'
import { putFileInFolder, transferFolderToTree } from '../lib/util'

export default {
  name: 'FolderTree',
  data () {
    return {
      folderTree: [],
      renderFunc: (h, { root, node, data }) => {
        return (
          <div class="tree-item">
            {data.type === 'folder' ? <icon type="ios-folder" color="#2d8cf0" style="margin-right: 10px;"/> : ''}
            {data.title}
          </div>
        )
        // if (data.type === 'folder') {
        //   return h('div', {
        //     style: {
        //       display: 'inline-block',
        //       width: 'calc(100% - 50px)',
        //       height: '30px',
        //       lineHeight: '30px'
        //     }
        //   }, [
        //     h('icon', {
        //       props: {
        //         type: 'ios-folder'
        //       },
        //       style: {
        //         marginTop: '10px',
        //         color: '#2d8cf0'
        //       }
        //     }),
        //     data.title
        //   ])
        // } else {
        //   return h('div', {
        //     style: {
        //       display: 'inline-block',
        //       width: 'calc(100% - 50px)',
        //       height: '30px',
        //       lineHeight: '30px'
        //     }
        //   }, data.title)
        // }
      }
    }
  },
  mounted () {
    Promise.all([getFolderList(), getFileList()]).then(res => {
      this.folderTree = transferFolderToTree(putFileInFolder(res[0], res[1]))
    })
  }
}
</script>

<style lang="scss">
  .folder-wrapper {
    width: 300px;
  }

  .tree-item {
    display: inline-block;
    width: calc(100% - 50px);
    height: 30px;
    line-height: 30px;
  }
</style>
