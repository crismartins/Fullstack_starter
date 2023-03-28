<template>
    <div class="overlay">
        <span class="loader"></span>
    </div>
</template>

<style lang="scss" scoped>

.overlay{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: grid;
    place-items: center;
    backdrop-filter: blur(4px);
    background-color: rgba(0,0,0,0.4);
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }
}
    .loader {
    color: #fff;
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 78px;
    opacity: 0.8;
  }
  .loader:before {
    content: "{";
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }
  .loader:after {
    content: "}";
    display: inline-block;
    animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
  }

  @keyframes pulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
      
</style>