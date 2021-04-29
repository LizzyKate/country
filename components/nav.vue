<template>
  <nav class="flex justify-between items-center shadow-lg px-16 py-4">
    <div>
      <h3 class="text-xl font-poppins text-blue-100">Where in the world?</h3>
    </div>
    <div class="flex space-x-4 items-center">
      <div>
        <button class="focus-outline-none">
          <i class="ri-moon-fill"></i>
        </button>

        <button class="focus-outline-none hidden">
          <i class="ri-moon-line"></i>
        </button>
      </div>
      <div>
        <p class="text-base font-inter text-faint">Light Mode</p>
        <p class="text-base font-inter text-white hidden">Dark Mode</p>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped></style>
