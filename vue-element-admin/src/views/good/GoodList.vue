<template>
  <div class="app-container good-list-container">
    <div class="filter">
      <el-row type="flex" align="middle">
        <el-col :span="2">
          <span>名称:</span>
        </el-col>
        <el-col :span="4">
          <el-input
            v-model="filter.name"
            clearable
            size="small"
            placeholder="商品名称"
            @change="filterChange('name')"
          />
        </el-col>
        <el-col :span="2">
          <span>品类:</span>
        </el-col>
        <el-col :span="4">
          <!-- filterChange('cate') 用于触发调接口 -->
          <CateSelect
            v-model='filter.cate'
            @change="filterChange('cate')"
          />
        </el-col>
      </el-row>
    </div>

    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >

        <el-table-column
          align="center"
          type="selection"
        />

        <el-table-column
          prop="name"
          align="center"
          label="商品"
        >
          <template slot-scope="scope">
            <div class="good">
              <img :src='$img.imgBase+scope.row.img' alt="">
              <div v-text='scope.row.name'></div>
            </div>
          </template>
        </el-table-column>

        <el-table-column
          prop="desc"
          align="center"
          label="描述"
        />

        <el-table-column
          prop="cate"
          align="center"
          label="品类"
          show-overflow-tooltip
        >
          <template slot-scope='scope'>
            <!-- 解决两个组件之间调接口的异步问题 -->
            <div v-cloak>{{cates.length>0 && cates.filter(ele=>ele.cate===scope.row.cate)[0].cate_zh}}</div>
          </template>
        </el-table-column>

        <el-table-column
          prop="price"
          align="center"
          label="价格"
          show-overflow-tooltip
        />

        <el-table-column
          prop="status"
          align="center"
          label="状态"
        >
          <template slot-scope='scope'>
            <div v-cloak>{{scope.row.status?"已上架":"待上架"}}</div>
          </template>
        </el-table-column>

        <el-table-column
          prop="hot"
          align="center"
          label="是否热销"
        >
          <template slot-scope='scope'>
            <div v-cloak>{{scope.row.hot?"是":"否"}}</div>
          </template>
        </el-table-column>

        <el-table-column
          prop="create_time"
          align="center"
          label="时间"
        >
          <template slot-scope='scope'>
            <div v-cloak>{{scope.row.create_time | tableTime('MM月DD')}}</div>
            <div v-cloak>{{scope.row.create_time | tableTime('HH:mm')}}</div>
          </template>
        </el-table-column>

        <el-table-column align="center" label="操作" width='150'>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="rowHandle('edit',scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="rowHandle('del', scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>

      </el-table>
      <div style="margin-top: 10px">
        <el-button size="small" type="danger">删除选中行</el-button>
      </div>
    </div>

    <div class="footer">
      <el-pagination
        :current-page="filter.page"
        :page-sizes="[2, 3, 5, 10]"
        :page-size="filter.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="filterChange(&quot;size&quot;, $event)"
        @current-change="filterChange(&quot;page&quot;, $event)"
      />
    </div>
  </div>
</template>

<script>
import CateSelect from './components/CateSelect.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'GoodList',
  components: { CateSelect },
  data() {
    return {
      // 查询入参
      filter: {
        cate: '',
        name: '',
        page: 1,
        size: 2
      },
      total: 0,
      tableData: []
    }
  },
  computed: {
    ...mapGetters(['cates'])
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$api.getGoodList(this.filter).then(res=>{
        console.log('res商品列表', res)
        this.tableData = res.data.list
        this.total = res.data.total
      })
    },
    handleSelectionChange(e) {
      console.log('select change', e)
    },
    rowHandle(flag, row) {
      if (flag === 'edit') {
        this.$router.push('/good/edit/' + row._id)
      } else {
        console.log('删除', row)
      }
    },
    filterChange(k, v) {
      if (v) this.filter[k] = v
      // 每当表格上方的查询条件发生变化时，都要重置page=1
      if (k!=='page') this.filter.page = 1
      console.log(`k=${k}变化了`, '我要触发调接口')
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
.good-list-container {
  .filter {
    background-color: rgba(245, 247, 250,1);
    padding: 20px 0;
    margin-bottom: 20px;
  }

  .el-col {
    &>span {
      display: block;
      text-align: right;
      padding-right: 8px;
      font-size: 14px;
    }
  }
  .footer {
    margin-top: 20px;
    // text-align: right;
  }
  .good {
    text-align: center;
    img {
      display: block;
      width: 60px;
      height: 60px;
      margin: 0 auto;
    }
  }
}
</style>
