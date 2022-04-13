<template>
	<Header/>
	
		
		<h2>Add Restuarant</h2>
    <div class="register">
		<form @submit.prevent="addRestuarant">
			
		<p><label for="">Name</label><input type="text" v-model="form.name" ></p>
		<p><label for="">Contact</label><input type="text" v-model="form.contact"></p>
		<p><label for="">Address</label><input type="text" v-model="form.address"></p>
        <p><button type="submit" class="btn btn-primary">Add restuarant</button></p>
		</form>
		
	</div>   
	
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default{
name:'Add-dash',

data(){

  return{
   
    form:{

    name:"",
	contact:"",
	address:""
	}

  }
	
},

methods:{

   addRestuarant(){

   axios.post('http://localhost:3000/restaurant',this.form)

	.then(res=>{
        
        
		localStorage.setItem("user-info",JSON.stringify(res.data))

		this.$router.push({name:'Home'})
	})

	.catch()
   }
},

components:{
Header
},

mounted(){

		let user = localStorage.getItem('user-info');

		if(!user){

            this.$router.push({name:'Login'})
		}
	}

}
</script>

<style>
	
</style>