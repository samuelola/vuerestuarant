<template>
	<h2>Login</h2>
	<img class="logo" src="../assets/logo.png" alt="">

<div>
<div class="login">

<div class="container">
	
<div class="row">
<div class="col-md-3"></div>
<div class="col-md-6">
<form @submit.prevent="signIn">
	
<div class="mb-3">

<input type="email" v-model="form.email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required="">
</div>

<div class="mb-3">

<input type="password" v-model="form.password" class="form-control" id="exampleFormControlInput1" required="">
</div>

     <p><button type="submit" class="btn btn-primary">Login</button></p>
</form>
</div>
<div class="col-md-3"></div>

</div>

</div>

	
	
</div>
      <router-link to='/signup'>Register</router-link>
	
</div>



</template>

<script>

import axios from 'axios'


export default{

   name:'my-Login',

   data(){

		return{
            
         form:{
			email:"",
			password:""
            }
			
		}
	},

	methods:{
    signIn(){
    axios.get(`http://localhost:3000/user?email=${this.form.email}&password=${this.form.password}`)
    .then(res=>{
     localStorage.setItem("user-info",JSON.stringify(res.data[0]))

				this.$router.push({name:'Home'})
    })
    .catch()

		} 
	},

	mounted(){

		let user = localStorage.getItem('user-info');

		if(user){

            this.$router.push({name:'Home'})
		}
	}


}
	
</script>

<style scoped>
	.logo{

		width:50px
	}
</style>