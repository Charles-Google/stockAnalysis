<template>
  <el-row :gutter="20" class="nav">
    <el-col :span="3"><div class="logo"></div> </el-col>

    <el-col :span="3">
      <div class="headline">数据首页</div>
    </el-col>
    <el-col :span="15"
      ><div class="sousuo">
        <el-input
          v-model="input"
          placeholder="输入股票名称或代码"
          class="search"
        />

        <el-button type="warning" :icon="Search" class="chaxun">查询</el-button>
      </div></el-col
    >
    <el-col :span="3">
      <el-dropdown trigger="click">
        <div class="user">
          <el-avatar class="icon" :icon="UserFilled" />

          <div class="username">点击登录</div>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item> Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
import { UserFilled, Search } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.nav {
  width: 99vw;
  height: 5vw;
  //   background-color: red;
  .logo {
    position: fixed;
    width: 4vw;
    height: 4vw;
    margin-top: 1vw;
    margin-left: 1vw;
    margin-bottom: -0.5vw;
    border-radius: 50%;
    background-image: url(../assets/img/logo.jpg);
    background-size: cover;
  }

  .headline {
    flex-basis: 10%;
    height: 5vw;
    width: 10vw;
    margin-left: -1.5vw;
    color: #d5d5d8;
    display: flex;
    justify-content: space-between;
    width: 11vw;
    line-height: 5vw;
    font-size: 1.9vw;
  }
  .sousuo {
    margin-top: 1.2vw;
    // margin-left: -40vw;
    height: 3vw;
    width: 33vw;
    .search {
      width: 23vw;
      height: 100%;
    }
    .chaxun {
      margin-left: 0.5vw;
      height: 100%;
    }
  }

  .user {
    cursor: pointer;
    margin-top: 1vw;
    transform: translateX(0vw);
    height: 3vw;
    width: 8vw;
    display: flex;
    justify-content: space-between;

    .icon {
      height: 2vw;
      width: 2vw;
    }
    .username {
      font-weight: 600;
      // margin-top: 1vw;
      line-height: 2vw;
      font-size: 1.4vw;
      color: #999b9d;
    }
  }
}
</style>
