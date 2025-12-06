<template>
    <main>
        <div id="wrapper">

            <SideBar />

            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">

                <div id="content">

                    <NavBar />

                    <router-view></router-view>                    

                </div>
                
                <Footer />
            </div>
        </div>
       

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

       
    </main>
</template>

<script>
    import SideBar from '../components/SideBar';
    import NavBar from '../components/NavBar';
    import Footer from '../components/Footer';
    export default {
        components: {
            SideBar,
            NavBar,
            Footer
        },
        mounted(){
            
        }
    }

</script>
