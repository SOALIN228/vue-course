<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script type="text/jsx">
export default {
  name: 'EditTableMul',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      insideData: [],
      insideColumns: [],
      edittingId: '',
      edittingContent: ''
    }
  },
  watch: {
    columns () {
      this.handleColumns()
    },
    value () {
      this.handleColumns()
    }
  },
  methods: {
    handleClick ({ row, column, index }) {
      let keyIndex = this.insideData[index].edittingKeyArr ? this.insideData[index].edittingKeyArr.indexOf(column.key) : -1
      let rowObj = this.insideData[index]
      if (keyIndex > -1) {
        rowObj.edittingKeyArr.splice(keyIndex, 1)
        this.insideData.splice(index, 1, rowObj)
        this.$emit('input', this.insideData)
        this.$emit('on-edit', { row, column, index, newValue: this.insideData[index][column.key] })
      } else {
        rowObj.edittingKeyArr = (rowObj.edittingKeyArr) ? [...rowObj.edittingKeyArr, column.key] : [column.key]
        this.insideData.splice(index, 1, rowObj)
      }
    },
    handleInput (row, column, index, newValue) {
      this.insideData[index][column.key] = newValue
    },
    handleColumns () {
      this.insideData = JSON.parse(JSON.stringify(this.value))
      const insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, column, index }) => {
            const keyArr = this.insideData[index] ? this.insideData[index].edittingKeyArr : []
            return (
              <div>
                {
                  keyArr && keyArr.indexOf(column.key) > -1
                    ? <i-input value={row[column.key]} style="width: 50px;" on-input={this.handleInput.bind(this, row, column, index)}></i-input>
                    : <span>{row[column.key]}</span>
                }
                <i-button on-click={() => { this.handleClick({ row, column, index }) }}>
                  {keyArr && keyArr.indexOf(column.key) > -1 ? '保存' : '编辑'}
                </i-button>
              </div>
            )
          }
          return item
        } else {
          return item
        }
      })
      this.insideColumns = insideColumns
    }
  },
  mounted () {
    this.handleColumns()
  }
}
</script>

<style scoped>

</style>
