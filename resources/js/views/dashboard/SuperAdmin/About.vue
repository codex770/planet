<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">About</h1>
        </div>

        <div class="card shadow mb-4">
            <div class="card-body">
               <form>
                    <div class="form-group">
                        <label for=""></label>
                        <vue-editor></vue-editor>
                    </div>
               </form>
            </div>
        </div>
    </div>
</template>

<script>
import * as settingService from '../../../services/setting_service';
import { VueEditor } from "vue2-editor";
    export default {
        name: "About",
        components: {
            VueEditor
        },
        data(){
            return{

            }
        },
        mounted(){
           
        },
        methods: {
            
        }
    }

</script>
