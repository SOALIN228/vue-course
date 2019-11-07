<template>
  <div>
    <!--    <edit-table :columns="columns" v-model="tableDate"></edit-table>-->
    <edit-table-mul :columns="columns" v-model="tableDate"></edit-table-mul>
  </div>
</template>

<script>
import EditTableMul from '../components/edit-table-mul/edit-table-mul'
import { getTableData } from '../api/data'

export default {
  name: 'Table',
  components: {
    EditTableMul
  },
  data () {
    return {
      tableDate: [],
      columns: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true },
        { key: 'email', title: '邮箱', editable: true }
      ]
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableDate = res
    })
  }
}
</script>

<style scoped>

</style>
