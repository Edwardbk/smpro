<template>
  <el-container>
    <el-header style="height: 50px;"></el-header>
    <el-container>
      <el-aside width="220px">
        <el-menu
          default-active="/index/itemadd"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <!-- router： 让选项卡变为类似于超链接，可以跳转HASH地址 -->
          <el-submenu index="/index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/item">商品管理</el-menu-item>
              <el-menu-item index="/index/itemadd">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">账号管理</el-menu-item>
              <el-menu-item index="2-2">添加账号</el-menu-item>
              <el-menu-item index="2-3">密码修改</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>会员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">商品管理</el-menu-item>
              <el-menu-item index="3-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>进货管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">库存管理</el-menu-item>
              <el-menu-item index="4-2">添加库存</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>出货管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">商品管理</el-menu-item>
              <el-menu-item index="5-1">商品管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>统计管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">商品管理</el-menu-item>
              <el-menu-item index="6-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 二级出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-menu {
  border: none;
}
.el-container {
  height: 100%;
}

.el-header {
  width: 100%;
  background-color: #242f41;
}

.el-aside {
  width: 280px;
  height: 100%;
  background-color: #545c64;
}
.el-main {
  flex: 1;
}
</style>