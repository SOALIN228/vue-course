<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script type="text/jsx">
export default {
  name: 'EditTable',
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
      insideColumns: [],
      edittingId: '',
      edittingContent: '',
      inputChange: false
    }
  },
  watch: {
    columns () {
      this.handleColumns()
    }
  },
  methods: {
    handleClick ({ row, index, column }) {
      if (this.edittingId === `${column.key}_${index}`) {
        if (this.inputChange) {
          let tableData = JSON.parse(JSON.stringify(this.value))
          tableData[index][column.key] = this.edittingContent
          this.$emit('input', tableData)
          this.$emit('on-edit', { row, index, column, newValue: this.edittingContent })
        }
        this.edittingId = ''
        this.edittingContent = ''
      } else {
        this.edittingId = `${column.key}_${index}`
      }
      this.inputChange = false
    },
    handleInput (newValue) {
      this.inputChange = true
      this.edittingContent = newValue
    },
    handleColumns () {
      const insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            const isEditting = this.edittingId === `${column.key}_${index}`
            return (
              <div>
                {
                  isEditting
                    ? <i-input value={row[column.key]} style="width: 50px;" on-input={this.handleInput}></i-input>
                    : <span>{row[column.key]}</span>
                }
                <i-button on-click={this.handleClick.bind(this, { row, index, column })}>
                  {isEditting ? '保存' : '编辑'}
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
