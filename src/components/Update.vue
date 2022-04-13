<template>
	<Header/>
	
		
		<h2>Update Restuarant</h2>
        <form @submit.prevent="updateRestuarant">
			
		<p><label for="">Name</label><input type="text" v-model="form.name" ></p>
		<p><label for="">Contact</label><input type="text" v-model="form.contact"></p>
		<p><label for="">Address</label><input type="text" v-model="form.address"></p>
        <p><button type="submit" class="btn btn-primary">Update restuarant</button></p>
		</form>
	
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default{
name:'Update-dash',

data(){

  return{
   
    form:{

    name:"",
	contact:"",
	address:""
	}
	,

	errors:{}

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

		
let id = this.$route.params.id

axios.get('http://localhost:3000/restaurant/'+id)
.then(({data}) => (this.form = data))
.catch(console.log('error'))
},


methods:{

updateRestuarant(){

let id = this.$route.params.id;
axios.patch('http://localhost:3000/restaurant/'+id,this.form)
.then( ()=>{

	this.$router.push({name:'Home'})
})

.catch()

}


}

}
</script>

<style>
	
</style>