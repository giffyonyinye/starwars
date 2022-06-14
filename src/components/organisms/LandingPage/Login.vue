<template>
    <div class="flex" style="height:100vh">
      <div class="w-1/3 md:hidden bg-[#031434] flex justify-center items-center h-full p-10">
          <img src="../../../assets/svg/starwars-logo.svg" alt="starwars">
      </div>
      <div class="w-full">
        <div class="h-full flex items-center justify-center">
          <div class="w-1/2 lg:w-full md:border-0 pl-16 pr-16 border pt-9">
            <div>
              <h3>Login</h3>
              <p class="mt-2 text-[#737373]">Kindly enter your details to log in</p>
            </div>

            <div class="mt-[62px]">
              <div class="mb-3 text-sm text-red-500">
                <p>{{error}}</p>
              </div>
              <div class="relative">
                <label class="absolute bottom-8 left-2 text-[12px] text-[#A4A7B7] bg-white" for="email">Email Address</label>
                <input 
                class="border border-[#A4A7B7] outline-none rounded-md p-2 w-full focus:border-[#0A74DC]" 
                type="email" 
                name="email" 
                id="email"
                v-model="email"
                >
              </div>

              <div class="relative mt-8">
                <label class="absolute bottom-8 left-2 text-[12px] text-[#A4A7B7] bg-white" for="email">Password</label>
                <input 
                class="border border-[#A4A7B7] rounded-md p-2 w-full outline-none focus:border-[#0A74DC]" 
                type="password" 
                name="password" 
                id="password"
                v-model="password"
                >
              </div>
            </div>

            <div class="mt-8">
              <button @click="login" class="bg-[#0A74DC] text-white rounded-md w-full p-2">Login</button>
            </div>
            <div class="mt-6 text-[14px] text-center text-[#0A74DC]">
              <p><a href="#">Forgot your password?</a></p>
            </div>
            <div class="text-[12px]- text-center mt-20 mb-8">
              <p><a class="underline" href="#">Privacy Policy</a> <span class="text-[#B0B9C8]">and</span> <a class="underline" href="#">Terms of services</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: "",
      password: "",
      error: "",
    }
  },

  methods:{
    login() {
      if(!this.email) {
        this.error = "Email must not be empty"
        setTimeout(() => {
          this.error = ""
        }, 3000);
      }else if(!this.password) {
        this.error = "Password must not be empty"
          setTimeout(() => {
          this.error = ""
        }, 3000);
      }else if(this.password.length < 8 || this.password.search(/[0-9]/) < 0) {
        setTimeout(() => {
          this.error = ""
        }, 3000);
        this.error = "Password must include number"
      }
       else {
        this.$router.push("/dashboard")
        
      }
    }
  }
}
</script>