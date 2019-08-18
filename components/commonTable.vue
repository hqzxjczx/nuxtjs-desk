<template>
  <div>
    <el-table :data v-bind="attrs" v-on="listeners">
      <el-table-column v-for="(item, index) in config" :key="index" v-bind="item">
        <template v-if="$scopedSlots.default" #default="{row}">
          <slot :default="row">
          </slot>
        </template>
      </el-table-column>
    </el-table>
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>

export default {
  name: 'commonTable',
  props:{
    defTbProps:{
      type: Object,
    },
    defTbItemProps:{
      type: Object
    },
    defPagesProps:{
      type: Object,
    },
    data:{
      type:Array,
      default:[]
    },
    config:{
      type:[Object, Array],
      default:()=>[]
    }
  },
  computed:{
    attrs(){
      return Object.assign(this.defTbProps, this.$attrs)
    },
    listeners(){
      return 
    }
  }
}
</script>