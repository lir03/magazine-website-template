<template>
    <nav class="navbar navbar-expand-lg back" v-if="user">
  <div class="container-fluid">
    <div class="col-3"></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="menu" /></span>
    </button>
    <div class="collapse navbar-collapse col-6 cnt" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto navbar-center mb-2 mb-lg-0">
        <li class="nav-item stand">
          <router-link to="/home">
            Home
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            List of Magazine Sections
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/section-1">Section 1</router-link></li>
            <li><router-link class="dropdown-item" to="/section-2">Section 2</router-link></li>
            <li><router-link class="dropdown-item" to="/section-3">Section 3</router-link></li>
            <li><router-link class="dropdown-item" to="/section-4">Section 4</router-link></li>
            <!-- Future Sections-->
            <!--<li><router-link class="dropdown-item" to="/section-5">Section 5</router-link></li>-->
          </ul>
        </li>
        <li class="nav-item stand">
          <router-link to="/about-us">
            About Us
          </router-link>
        </li>
        <li class="nav-item stand">
          <router-link to="/contact-us">
            Contact Us
          </router-link>
        </li>
        <li class="nav-item stand">
          <router-link to="/search-page">
            Search
          </router-link>
        </li>
      </ul>
    </div>
      <button @click="handleClick">Logout</button>
  </div>
</nav>
</template>

<script>
import useLogout from '../../composables/useLogout'
import getUser from '../../composables/getUser'
import { useRouter } from 'vue-router'
/*eslint-disable*/
export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      if (!error.value) {
        await logout()
        if (!error.value) {
          console.log("user logged out")
          router.push({ name: 'WelcomePage' })
        }
      }
    }
    return { handleClick, user }
  }
}

</script>


<style scoped>
nav {
  display: flex;
}

button {
  border: 0;
  border-radius: 20px;
  background-color: rgb(17, 209, 17);
  padding: 10px 20px;
}

.lo {
  margin-top: -0.5%;
}

.back {
  background-color: lavender;
  padding-top: 0.5%;
}

.valentines {
  background-color: rgb(238, 156, 224);
}

.christmas {
  background-image: linear-gradient(to left, red, green);
}

.item {
    cursor: pointer;
}

.login {
  margin-left: 15%;
  margin-bottom: 5px;
  padding-bottom: 5px;
}

.cnt {
  padding-top: 24px;
  padding-left: 10%
}

.navbar-center {
    position: absolute;
    margin-left: 0%;
}

a:hover {
  color: silver;
}

ul {
  background-color: lavender; 
  z-index: 3;
}

a {
  color: black;
  text-decoration: none;
}

.stand {
  margin-top: -2%;
  margin-right: 55px;
}

.dropdown {
  margin-top: -3%;
  margin-right: 55px;
}

.holiday {
  font-size: 100%;
}

@media screen and (width: 3840px) {
  .nav {
    width: 100%;
  }
}

@media screen and (width: 1366px) {
    .navbar-center{
        margin-left: -8%;
    }
}

@media screen and (max-width: 991px) {
  ul {
    padding-left: 2%;
  }

}

</style>