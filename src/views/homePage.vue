<template>
  <div class="heart">
    <el-container>
      <el-header>
        <HeaderBlock></HeaderBlock>
      </el-header>
      <el-container>
        <el-aside width="8%"><AsideMenu></AsideMenu></el-aside>
        <el-main style="padding: 0 !important; overflow: inherit">
          <CoreBlock></CoreBlock>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.heart {
  width: 98.77vw;
  height: 1400vh;
  background-color: #1e1e2d;
  overflow: hidden;
}
</style>
