<script setup></script>

<template>
  <div class="flex justify-between mb-4">
    <h1 class="text-xl font-semibold">Card title!</h1>
    <button class="btn btn-xs btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  </div>
  <div class="my-2">
    <!-- 文件信息 -->
    <div class="text-gray-600 line-clamp-1">测试文档1测试文档1测试文档1测试文档1测试文档1测试文档1测试文档1.pdf</div>
    <div class="text-xs text-gray-400">101029 kb</div>
  </div>
  <div class="my-2">
    <!-- 文件信息 -->
    <div class="text-gray-600">测试文档2.pdf</div>
    <div class="text-xs text-gray-400">101029 kb</div>
  </div>
  <div class="my-2">
    <!-- 文件信息 -->
    <div class="text-gray-600">测试文档3.pdf</div>
    <div class="text-xs text-slate-400">101029 kb</div>
  </div>
</template>
