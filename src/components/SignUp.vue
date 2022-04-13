<template>
	<h2>Register</h2>
	<img class="logo" src="../assets/logo.png" alt="">
	
		
		<div class="register">
			<form @submit.prevent="signUp">
				
			<p><input type="text" v-model="form.name" placeholder="Enter your name"></p>
			<p><input type="email" v-model="form.email" placeholder="Enter your email"></p>
			<p><input type="password" v-model="form.password"></p>
            <p><button type="submit" class="btn btn-primary">Register</button></p>
			</form>
			
		</div>
          <router-link to='/signin'>Login</router-link>
	


</template>


<script>

import axios from 'axios'

export default{

	name:'SignUp',

	data(){

		return{
            
            form:{
            name:"",
			email:"",
			password:""
            }
			
		}
	},

	methods:{

		signUp(){

			axios.post('http://localhost:3000/user',this.form)

			.then(res=>{
                
                
				localStorage.setItem("user-info",JSON.stringify(res.data))

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