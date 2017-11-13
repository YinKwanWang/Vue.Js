<template>
  <div id="about">
    <div class="container" style="background:#fff;">
     <h5 class="mt-2 pt-3">关于自己</h5>
     <hr>
     <h5 class="text-center" style="opacity:0.3;background:lightpink">个人简介</h5>
     <div class="px-5 text-center">
       <div class="col-img2 pt-2">
         <img src="../img/1.jpg" alt="">
         <p class="mt-3">小赞</p>
         <p class="mt-3" style="color:#a3a3a3;">人生百态，笑口常开，秉承自我，谨慎独行。静觅，静静寻觅生活的美好。</p>

         <h5 class="text-center" style="opacity:0.3;background:lightpink">我的技能树</h5>
         <div class="container w-75">
           <p class=" mt-4">HTML/CSS/JS</p>
           <div class="progress">

            <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="25">85%</div>
          </div>
          <p class=" mt-4">PHP</p>
          <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          <p class=" mt-4">MYSQL</p>
          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
          </div>
          <p class=" mt-4">BS</p>
          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>  
          <p class=" mt-4">Vue</p>
          <div class="progress">
            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          <p class=" mt-4">Agular</p>
          <div class="progress">
            <div class="progress-bar bg-secondary" role="progressbar" style="width: 75%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          <router-link to="/" class="mt-4 btn btn-info">了解更多</router-link>
          <br>
          <router-link to="/" class="mt-4 mb-5 btn btn-success">申请友链</router-link>

        </div>

      </div>
    </div>
    <h5 class="text-center mb-4" style="opacity:0.3;background:lightpink">与我联系</h5>
  </div>
  </div>
</template>

<script>
  
  export default {
    name:'about'
    
  }
</script>

<style>
.col-img2 img{border-radius: 50%;height: 100px;width: 100px;}
.col-img2 p{font-size: 20px;font-weight: bold;}
</style>
