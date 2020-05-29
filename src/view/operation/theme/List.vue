<template>
  <div v-if="!switchComponent" class="lin-container">
    <div class="lin-title">主题列表</div>
    <div class="button-container">
      <!-- 指定button类型 -->
      <el-button type="primary" @click="handleAdd">新增</el-button>
    </div>
    <div class="table-container">
      <el-table v-loading="loading" :data="themeList">
        <el-table-column type="index" label="序号" width="80" />
        <el-table-column prop="name" label="主题名称" width="250" />
        <el-table-column prop="description" label="主题介绍" width="300" />
        <el-table-column label="主题图片" width="250">
          <template slot-scope="scope">
            <img class="theme-img" :src="scope.row.topic_img.url" />
          </template>
        </el-table-column>
        <el-table-column label="详情页头图" width="350">
          <template slot-scope="scope">
            <img class="theme-img" :src="scope.row.head_img.url" />
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" min-width="150">
          <template slot-scope="scope">
            <el-button plain size="mini" type="primary" @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button plain size="mini" type="danger" @click="handleDel(scope.row.id)"
              >删除
              <!--                        <el-button plain size="mini" type="danger" @click="handleDel(scope.row.id)" v-auth="'删除主题'">删除-->
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <component v-else :is="targetComponent" :themeId="id" @back="handleBack" />
</template>

<script>
import ThemeModel from '../../../model/theme'
import Add from './Add'
import Edit from './Edit'

export default {
  name: 'List',
  data() {
    return {
      switchComponent: false,
      targetComponent: '',
      loading: false,
      themeList: [],
      id: null,
    }
  },
  created() {
    this.getThemes()
  },

  components: {
    Add,
    Edit,
  },

  methods: {
    /**
     * 获取精选主题列表
     */
    async getThemes() {
      try {
        this.loading = true
        this.themeList = await ThemeModel.getThemes()
        this.loading = false
      } catch (e) {
        this.$message.error('精选主题列表加载失败')
        this.loading = false
      }
    },

    /*
     * 新增按钮点击事件
     */
    handleAdd() {
      this.switchComponent = true
      this.targetComponent = 'Add'
    },

    /** 编辑按钮点击事件 */
    handleEdit(id) {
      this.switchComponent = true
      this.targetComponent = 'Edit'
      this.id = id
    },

    /** 删除按钮点击事件 */
    async handleDel(id) {
      this.loading = true
      const ids = [id]
      try {
        const res = await ThemeModel.delTheme(ids)
        this.$message.success(res.msg)
        this.loading = false
        this.getThemes()
      } catch (e) {
        this.loading = false
      }
    },

    /**
     * 监听子组件的返回按钮事件
     */
    handleBack() {
      this.switchComponent = false
      this.targetComponent = ''
      this.getThemes()
    },
  },
}
</script>

<style lang="scss" scoped>
.button-container {
  margin-top: 30px;
  padding-left: 30px;
}

.table-container {
  margin-top: 30px;
  padding-left: 30px;
  padding-right: 30px;

  .theme-img {
    height: 120px;
    width: auto;
  }
}
</style>
