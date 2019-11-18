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
      insideData: [],
      insideColumns: [],
      edittingId: ''
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
      if (this.edittingId === `${column.key}_${index}`) {
        this.$emit('input', this.insideData)
        this.$emit('on-edit', { row, column, index, newValue: this.insideData[index][column.key] })
        this.edittingId = ''
      } else {
        this.edittingId = `${column.key}_${index}`
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
            const isEditting = this.edittingId === `${column.key}_${index}`
            return (
              <div>
                {
                  isEditting
                    ? <i-input value={row[column.key]} style="width: 50px;" on-input={this.handleInput.bind(this, row, column, index)}></i-input>
                    : <span>{row[column.key]}</span>
                }
                <i-button on-click={this.handleClick.bind(this, { row, column, index })}>
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
