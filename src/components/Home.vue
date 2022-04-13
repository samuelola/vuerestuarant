<template>
	<Header/>
	
		
		<h2>Home | Welcome {{myname}}</h2>


<div class="container">
<div class="row">
<table class="table table-bordered table-condensed">
<thead>
	<tr>
		<th>Id</th>
		<th>Name</th>
		<th>Contact</th>
		<th>Address</th>
		<th>Action</th>
	</tr>
</thead>
<tbody>
	<tr v-for="item in restaurants" :key="item.id">
		<td>{{item.id}}</td>
		<td>{{item.name}}</td>
		<td>{{item.contact}}</td>
		<td>{{item.address}}</td>
		<td><router-link :to="'/update/'+item.id">Edit</router-link> |
		<a @click="deleteRestuarant(item.id)" href="#">Delete</a></td>

	</tr>
</tbody>
</table>	
</div>	
</div>

       

	
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
name:'Home-dash',

components:{
Header
},

data(){

	return {

		myname:'',
		restaurants:[]
	}
},

methods:{

	allresturant(){

		axios.get('http://localhost:3000/restaurant')
		.then(({data})=>(this.restaurants = data))
		.catch()
	},

	deleteRestuarant(id){

       axios.delete('http://localhost:3000/restaurant/'+id)
       .then(()=>{

           this.loadData();
       })
       .catch()
	},

	loadData(){

		let user = localStorage.getItem('user-info');

		this.myname = JSON.parse(user).name;

		if(!user){

            this.$router.push({name:'Login'})
		}

		this.allresturant();
	}
},

mounted(){

		this.loadData();
	}

}
</script>

<style>
	
</style>