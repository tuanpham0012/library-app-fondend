<template>
  <div class="container">
    <div class="loader">Loading...</div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: calc(100% - 1px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e9e1e18e;
  position: absolute;
  z-index: 1;
}

/* .sidebar-mini .container {
        width: calc(100% - 1px);
    } */
@property --a {
  initial-value: 0deg;
  inherits: false;
  syntax: "<angle>";
}
@property --h {
  initial-value: 0;
  inherits: false;
  syntax: "<number>";
}
.loader {
  padding: 2rem 4rem;
  font-family: monospace;
  font-weight: bold;
  color: rgb(28, 6, 105);
    margin-bottom: 25rem;
  border-style: solid;
  border-width: 1vmin;
  font-size: 2rem;
  --charge: hsl(var(--h, 0), 80%, 50%);
  -o-border-image: conic-gradient(
      var(--charge) var(--a),
      transparent calc(var(--a) + 0.5deg)
    )
    30;
  border-image: conic-gradient(
      var(--charge) var(--a),
      transparent calc(var(--a) + 0.5deg)
    )
    30;
  -webkit-animation: load 2s infinite ease-in-out;
  animation: load 2s infinite ease-in-out;
}
@-webkit-keyframes load {
  0%,
  10% {
    --a: 0deg;
    --h: 0;
  }
  100% {
    --a: 360deg;
    --h: 100;
  }
}
@keyframes load {
  0%,
  10% {
    --a: 0deg;
    --h: 0;
  }
  100% {
    --a: 360deg;
    --h: 100;
  }
}
</style>
