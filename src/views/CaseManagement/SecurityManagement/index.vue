<template>
  <div>
    <div class="mask_test"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mask_test {
  position: relative;
  width: 400px;
  height: 200px;
  background: url(
      https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1877625006,2341162086&fm=26&gp=0.jpg
    )
    no-repeat;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(
      https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2128480768,3645204276&fm=26&gp=0.jpg
    );
    animation: maskRotate 1.2s ease-in-out;
  }
}

@keyframes maskRotate {
    @for $i from 0 through 100 { 
        #{$i*1%} {
            mask: conic-gradient(#000 #{$i - 8 + '%'}, transparent #{$i + '%'}, transparent);
        }
    }
}
</style>
