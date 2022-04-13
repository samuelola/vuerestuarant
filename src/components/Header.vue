<template>
	<div class="nav">	
	<router-link id="nowg" to="/">Home</router-link>
    <router-link id="nowg" to="/add">Add Restuarant</router-link>
    <a @click="logout" id="nowg" href="#">Logout</a>
	</div>
</template>

<script>

export default{

name:'Header-dash',

methods:{

	logout(){

		localStorage.clear();
		this.$router.push({name:'Login'})
	}
}

}
	
</script>

<style >
.nav{
background-color:#000;
}

#nowg{
padding:14px 16px;
text-align: center;
text-decoration: none;
font-size: 17px;
margin-right: 5px;
color:#f2f2f2;
}
</style>