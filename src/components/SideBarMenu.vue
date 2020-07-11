<template>
  <div  class="wrapper">
    <nav id="navhome" class="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
        <div class="container">
            <!-- Brand -->
            <a class="navbar-brand " href="#">
                <img src="gptur.png" alt="Logo GP" width="60"> Grupo GP
            </a>

            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/home">Home</router-link>
                    </li>
                    <li v-if="!user" class="nav-item">
                        <a class="nav-link" href="#sobre">Sobre</a>
                    </li>
                    <li v-if="!user" class="nav-item">
                        <a class="nav-link" href="#turismo">Turismo</a>
                    </li>
                    <li v-if="!user" class="nav-item">
                        <a class="nav-link" href="#contato">Contato</a>
                    </li>
                    <li v-if="!user" class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Sidebar  -->
    <nav v-if="user" id="sidebar" style="margin-top:100px">
      <div class="sidebar-header">
        <h3>GP Turismo</h3>
      </div>

      <ul class="list-unstyled components">
        <p>Menu</p>
        <li>
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Viagens</a>
          <ul class="collapse list-unstyled" id="homeSubmenu">
            <li>
              <router-link to="/MenuViagem">Criar Viagens</router-link>
            </li>
            <li>
              <router-link to="/HistoricoViagem">Histórico das Viagens</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Configuração Viagens</a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Paradas</a>
            </li>
            <li>
              <a href="#">Motoristas</a>
            </li>
            <li>
              <a href="#">Excursão</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#pageConfigmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Configuração do Administrador</a>
          <ul class="collapse list-unstyled" id="pageConfigmenu">
            <li>
              <a href="#">Alterar Email</a>
            </li>
            <li>
              <a href="#">Alterar Senha</a>
            </li>
            <li>
              <a href="#">Alterar Algo</a>
            </li>
          </ul>
        </li>
      </ul>

      <!-- <ul class="list-unstyled CTAs"> -->

      <ul class="list-unstyled components">
        <li>
          <a href="#dropLogin" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
            <i class="fas fa-user mr-1"></i>
            <span v-if="user">{{user}}</span>
            <span v-else>(Não Logado)</span>
          </a>
          <ul class="collapse list-unstyled" id="dropLogin">
            <li>
              <router-link to="/login">Login</router-link>
            </li>
            <li v-if="user">
              <a @click="sair">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Page Content  -->
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarPage",
  props: {
    user: String
  },
  methods: {
    sair() {
      localStorage.removeItem("token")
      this.$parent.mudaUser(null);
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
/*
    DEMO STYLE
*/

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
  font-family: "Poppins", sans-serif;
  background: #fafafa;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

/* Menu e Cor Menu Ativo */
#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -250px;
}

/* GP Turismo Cabeça */
#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

/* Linha Divisória dos componentes para "Outros, Sair" */
#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

/* Letras Menu */
#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

/* Hover dos menu (Fundo e Letras) */
#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

/* Menu com Setinha quando ativo */
#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

/* Submenu Setinha Cor */
ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386d5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}
/* ---------------------------------------------------
    NAVBAR HOME
----------------------------------------------------- */
#navhome {
    box-shadow: 2px 2px 5px #f00;
    opacity: 0.9;
    margin-bottom: 4px;
}

#demo {
    margin-top: 70px;
    margin-bottom: 70px;
    margin-left: 90px;
    margin-right: 90px;
    text-align: center;
}
/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
  
}
</style>