<template>
    <div class="container-fluid">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Mercury</h1>
        </div>

        <!-- Content Row -->
        <div class="row">
            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <p class=" mb-1">Mercury Kurzinfo Planet</p>
                            </div>
                            <div class="col-auto">
                                <a v-on:click="showSliderWindow" class="btn btn-info btn-icon-split">
                                    <span class="icon text-white-50">
                                        <i class="fas fa-edit"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-danger shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <p class=" mb-1">Fakten</p>
                            </div>
                            <div class="col-auto">
                                <a v-on:click="showFaktenWindow" class="btn btn-info btn-icon-split">
                                    <span class="icon text-white-50">
                                        <i class="fas fa-edit"></i>
                                    </span>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-danger shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <p class=" mb-1">SEO</p>
                            </div>
                            <div class="col-auto">
                                <a  v-on:click="showSeoWindow" class="btn btn-info btn-icon-split">
                                    <span class="icon text-white-50">
                                        <i class="fas fa-edit"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Überschrift</h1>
            <a  v-on:click="showNewWindow"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-plus-circle fa-sm text-white-50"></i> Add new Überschrift</a>
        </div>

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">list of Überschrift</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(heading , index) in headings" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{heading.title}}</td>
                                <td>{{heading.description}}</td>
                                <td>
                                    <a v-on:click="editHeading(heading)" class="btn btn-info btn-circle">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <a v-on:click="deleteHeading(heading)" class="btn btn-danger btn-circle">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- modal for slider kuriznfo -->
        <b-modal ref="sliderWindow" size="lg" hide-footer title="Slider Kurzinfo Planet">     
            <div class="modal-body">
                <form>
                    <div class="row">
                        <div class="col">
                            <input type="text" v-model="slider.name" class="form-control" placeholder="Name">
                            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                        </div>
                        <div class="col">
                            <input type="text" v-model="slider.description" class="form-control" placeholder="Description">
                            <div class="invalid-feedback" v-if="errors.description">{{errors.description[0]}}</div>
                        </div>
                        <div class="col">
                            <input type="number" v-model="slider.order" class="form-control" placeholder="Choose order...">
                            <div class="invalid-feedback" v-if="errors.order">{{errors.order[0]}}</div>
                        </div>
                        <div class="col">
                            <button type="submit" v-on:click.prevent="createSlider" class="btn btn-success mb-2"><i
                                    class="fas fa-plus-square"></i> Add</button>
                        </div>
                    </div>
                </form>
                <br>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(slider, index) in sliders" :key="index">
                            <th scope="row">{{index+1}}</th>
                            <td>{{slider.name}}</td>
                            <td>{{slider.description}}</td>
                            <td>
                                <a v-on:click="editSlider(slider)" class="btn btn-info btn-circle">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a v-on:click="deleteSlider(slider)" class="btn btn-danger btn-circle">
                                    <i class="fas fa-trash"></i>
                                </a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" v-on:click="hideSliderWindow" class="btn btn-secondary">Close</button>
                <button type="submit" v-on:click.prevent="updateSlider" class="btn btn-primary">Update changes</button>
            </div>
        </b-modal>
        <!-- end -->
        
        <!--start fakten window -->
        <b-modal ref="faktenWindow" hide-footer title="Fakten Window...">
            <form>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <input type="text" v-model="fakten.name" class="form-control" placeholder="Name">
                        </div>
                        <div class="col">
                            <input type="text" v-model="fakten.description" class="form-control" placeholder="Description">
                        </div>
                        <div class="col">
                            <input type="number" v-model="fakten.order" class="form-control" placeholder="Choose order">
                        </div>
                        <div class="col">
                            <button type="submit" v-on:click.prevent="createFakten" class="btn btn-success mb-2"><i
                                    class="fas fa-plus-square"></i> Add</button>
                        </div>
                    </div>
                    <br>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(fakten , index) in faktens" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{fakten.name}}</td>
                                <td>{{fakten.description}}</td>
                                <td>
                                    <a v-on:click="editFakten(fakten)" class="btn btn-info btn-circle">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <a v-on:click="deleteFakten(fakten)" class="btn btn-danger btn-circle">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" v-on:click="hideFakterWindow" class="btn btn-secondary">Close</button>
                    <button type="submit" v-on:click.prevent="updateFakten" class="btn btn-primary">Update changes</button>
                </div>
            </form>
        </b-modal>
        <!-- end -->
       
        <!-- new window start -->
        <b-modal ref="newWindow" hide-footer title="Uberschrift...">
            <form v-on:submit.prevent="createHeading">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="">Title</label>
                        <input type="text" v-model="heading.title" class="form-control" aria-describedby="emailHelp" placeholder="Enter Title">
                    </div>
                    <div class="form-group">
                        <label for="marsFile">Video | Image</label>
                        <div v-if="heading.file.name">
							<img src="" id="displayFile" ref="displayFile" class="w-100">
						</div>
                        <img src="" id="" ref="" class="w-100">
                        <input type="file" id="file" ref="heading_file" v-on:change="attachImage" class="form-control-file">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea  v-model="heading.description" class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                <br>
                </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="hideNewWindow" class="btn btn-secondary">Close</button>
                        <button type="submit" class="btn btn-primary">Add Überschrift</button>
                    </div>
            </form>    
        </b-modal>
        <!-- end -->

         <!-- edit new window start -->
        <b-modal ref="editNewWindow" hide-footer title="Edit Uberschrift...">
            <form v-on:submit.prevent="updateHeading">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="">Title</label>
                        <input type="text" v-model="editHeadingData.title" class="form-control" aria-describedby="emailHelp" placeholder="Enter Title">
                    </div>
                    <div class="form-group">
                        <label for="marsFile">Video | Image</label>
                        <div>
							<img :src="`${$store.state.serverPath}/storage/${editHeadingData.file}`" id="heading_file" ref="editHeadingFile" style="width:100%">
						</div>
                        <input id="image" type="file" ref="heading_file" v-on:change="editAttachFile" class="form-control-file">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea  v-model="editHeadingData.description" class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                <br>
                </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="hideEditNewWindow" class="btn btn-secondary">Close</button>
                        <button type="submit" class="btn btn-primary">Update Überschrift</button>
                    </div>
            </form>    
        </b-modal>
        <!-- end -->

        <!-- Seo Window -->
        <b-modal ref="seoWindow" hide-footer title="Seo Window....">
            <form>    
                <div class="modal-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Slug title</label>
                        <input type="text" v-model="seo.title" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter Title">
                        <div class="invalid-feedback" v-if="errors.title">{{errors.title[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">metatags ( e.g sport,football,hockey)</label>
                        <input type="text" v-model="seo.meta_tags" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter Title">
                        <div class="invalid-feedback" v-if="errors.meta_tags">{{errors.meta_tags[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Short Description</label>
                        <textarea class="form-control" v-model="seo.description" id="exampleFormControlTextarea1" rows="6"></textarea>
                        <div class="invalid-feedback" v-if="errors.description">{{errors.description[0]}}</div>
                    </div>
                <br>
                </div>
                <div class="modal-footer">
                    <button type="button" v-on:click="hideSeoWindow" class="btn btn-secondary">Close</button>
                    <button type="submit" v-if="seo.created_at" v-on:click.prevent="updateSeo" class="btn btn-primary">Update Überschrift</button>
                    <button type="submit" v-else v-on:click.prevent="createSeo" class="btn btn-primary">Add Überschrift</button>
                </div>
                <br>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(seo , index) in planet.seo" :key="index">
                            <th scope="row">{{index+1}}</th>
                            <td>{{seo.name}}</td>
                            <td>{{seo.description}}</td>
                            <td>
                                <a v-on:click="editFakten(seo)" class="btn btn-info btn-circle">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a v-on:click="deleteFakten(seo)" class="btn btn-danger btn-circle">
                                    <i class="fas fa-trash"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
         
        </b-modal>
        <!-- end -->
    
    </div>
</template>
<script>
    import * as planetService from '../../../services/planet_service';
    export default {
        name: "Mercury",
        components: {

        },
        data() {
            return {
                slider:{
                    name:'',
                    description:'',
                    order:'',
                    planet:'mercury'
                },
                fakten:{
                    name:'',
                    description:'',
                    order:'',
                    planet:'mercury'
                },
                seo:{
                    title:'',
                    meta_tags:'',
                    description:'',
                    planet:'mercury'
                },
                heading:{
                    title:'',
                    file:'',
                    description:'',
                    planet:'mercury'
                },
                sliders:[],
                faktens:[],
                mars:[],
                headings:[],
                seos:[],
                planet:[],
                editHeadingData:{},
                errors:{}
            }
        },
        beforeRouteEnter: async function (to, from, next) {
            try {
                console.log(to.params.name);
                const response = await planetService.getPlanet(to.params.name);
                if (!response) {
                    next('/404');
                } else {
                    next(vm => {
                        vm.planet = response.data;
                        console.log(vm.planet);
                        
                    });
                }
            } catch (error) {
                next('/404');
            }
        },
        beforeRouteUpdate: async function (to, from, next) {
            try {
                console.log(to.params.name);
                const response = await planetService.getPlanet(to.params.name);
                if (!response) {
                    next('/404');
                } else {
                    next(vm => {
                        vm.planet = response.data;
                        console.log(vm.planet);
                    });
                }
            } catch (error) {
                next('/404');
            }
        },
        mounted() {
        //    this.loadSlider(); 
        //    this.loadFakten();
        //    this.loadHeading();
        //    this.loadSeo();
        },
        methods: {
            loadSeo: async function () {
                try {
                    const response = await planetService.loadSeo();
                    this.seo = response.data;
                    console.log(this.seo);
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            updateSeo: async function (){
                try {
                    alert('mercury');
                    const response = await planetService.updateSeo(this.seo.id, this.seo);
                    this.seo = response.data;
                    this.hideSeoWindow();
                    this.flashMessage.success({
                        message: 'Seo has been updated successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            loadHeading: async function () {
                try {
                    const response = await planetService.loadHeading();
                    this.headings = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            createHeading: async function(){
                 try {
                    const formData = new FormData();
                    formData.append('title', this.heading.title);
                    formData.append('file', this.heading.file);
                    formData.append('description', this.heading.description);
                    formData.append('planet', this.heading.planet);

                    const response = await planetService.createHeading(formData);
                    this.headings.unshift(response.data);
                    this.errors = {};
                    this.heading = {
                        title: '',
                        description: '',
                        file: ''
                    };
                    this.hideNewWindow();
                    this.flashMessage.success({
                        message: 'Heading is created successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                }
            },
            attachImage: function () {
                this.heading.file = this.$refs.heading_file.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.displayFile.src = reader.result;
                }.bind(this), false);
                reader.readAsDataURL(this.heading.file);
            },
            editHeading: async function(heading){
                this.editHeadingData = {...heading};
                this.$refs.editNewWindow.show();
            },
            editAttachFile: function () {
                this.editHeadingData.file = this.$refs.heading_file.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.editHeadingFile.src = reader.result;
                }.bind(this), false);
                reader.readAsDataURL(this.editHeadingData.file);
            },
            updateHeading: async function () {
                let formData = new FormData();
                formData.append('title', this.editHeadingData.title);
                formData.append('file', this.editHeadingData.file);
                formData.append('description', this.editHeadingData.description);
                formData.append('planet', 'mercury');
                formData.append('_method', 'put');
               
                try {
                    const response = await planetService.updateHeading(this.editHeadingData.id, formData);
                    this.$refs.editNewWindow.hide();
                    this.headings.map(heading => {
                        if (heading.id == response.data.id) {
                            for (let key in response.data) {
                                heading[key] = response.data[key];
                            }
                        }
                    });
                    this.flashMessage.success({
                        message: 'Heading has been updated successfully!',
                        time: 5000
                    });
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.flashMessage.info({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: "Some error occurred please try again",
                                time: 5000
                            });
                            break;
                        }
                    }
		    },
            deleteHeading: async function (heading){
                if (
                    !window.confirm(`Are you sure you want to delete ${heading.title}`)
                ) {
                    return;
                }
                try {
                    const response = await planetService.deleteHeading(heading.id);
                    this.headings = this.headings.filter(obj => {
                        return obj.id != heading.id;
                    });
                    this.flashMessage.success({
                        message: "Heading deleted successfuly!",
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred please try again!",
                        time: 5000
                    });
                }
            },
            loadSlider: async function () {
                try {
                    const response = await planetService.loadSlider();
                    this.sliders = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            createSlider: async function (){
                try {
                    const response = await planetService.createSlider(this.slider);
                    this.sliders.unshift(response.data);
                    this.errors = {};
                    this.slider = {
                        name: '',
                        description: '',
                        order: ''
                    };
                    this.hideSliderWindow();
                    this.flashMessage.success({
                        message: 'Slider is created successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                }
            },
            updateSlider: async function (){
                try {
                    const response = await planetService.updateSlider(this.slider.id,this.slider);
                    this.sliders.map(slider => {
                        if (slider.id == response.data.id) {
                            for (let key in response.data) {
                                slider[key] = response.data[key];
                            }
                        }
                    });
                    this.slider = {
                        name:'',
                        description:'',
                        order:''
                    };
                    this.flashMessage.success({
                        message: 'Slider is updated successfully..!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                            message: 'Some error occured, please try again!',
                            time: 5000
                    });
                }
            },
            deleteSlider: async function (slider){
                if (
                    !window.confirm(`Are you sure you want to delete ${slider.name}`)
                ) {
                    return;
                }
                try {
                    const response = await planetService.deleteSlider(slider.id);
                    this.sliders = this.sliders.filter(obj => {
                        return obj.id != slider.id;
                    });
                    this.flashMessage.success({
                        message: "Slider deleted successfuly!",
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred please try again!",
                        time: 5000
                    });
                }
            },
            editSlider: async function(slider){
                this.slider = {...slider};
            },
            loadFakten: async function () {
                try {
                    const response = await planetService.loadFakten();
                    this.faktens = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            createFakten: async function (){
                try {
                    const response = await planetService.createFakten(this.fakten);
                    this.faktens.unshift(response.data);
                    this.errors = {};
                    this.fakten = {
                        name: '',
                        description: '',
                        order: ''
                    };
                    this.hideFakterWindow();
                    this.flashMessage.success({
                        message: 'Fakten is created successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                }
            },
            updateFakten: async function (){
                try {
                    const response = await planetService.updateFakten(this.fakten.id,this.fakten);
                    this.faktens.map(fakten => {
                        if (fakten.id == response.data.id) {
                            for (let key in response.data) {
                                fakten[key] = response.data[key];
                            }
                        }
                    });
                    this.fakten = {
                        name:'',
                        description:'',
                        order:''
                    };
                    this.flashMessage.success({
                        message: 'Fakten is updated successfully..!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                            message: 'Some error occured, please try again!',
                            time: 5000
                    });
                }
            },
            deleteFakten: async function (fakten){
                if (
                    !window.confirm(`Are you sure you want to delete ${fakten.name}`)
                ) {
                    return;
                }
                try {
                    const response = await planetService.deleteFakten(fakten.id);
                    this.faktens = this.faktens.filter(obj => {
                        return obj.id != fakten.id;
                    });
                    this.flashMessage.success({
                        message: "Fakten deleted successfuly!",
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred please try again!",
                        time: 5000
                    });
                }
            },
            editFakten: async function(fakten){
                this.fakten = {...fakten};
            },
            createSeo: async function (){
                try {
                    this.seo.planet = 'mercury';
                    const response = await planetService.createSeo(this.seo);
                    this.loadSeo();
                    this.errors = {};
                    this.seo = {
                        title: '',
                        description: '',
                        meta_tags: ''
                    };
                    this.hideSeoWindow();
                    this.flashMessage.success({
                        message: 'Seo is created successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                }
            },
            showSliderWindow(){
                this.$refs.sliderWindow.show();
            },
            hideSliderWindow(){
                this.$refs.sliderWindow.hide();
            },
            showFaktenWindow(){
                this.$refs.faktenWindow.show();
            },
            hideFakterWindow(){
                this.$refs.faktenWindow.hide();
            },
            showSeoWindow(){
                this.$refs.seoWindow.show();
            },
            hideSeoWindow(){
                this.$refs.seoWindow.hide();
            },
            showNewWindow(){
                this.$refs.newWindow.show();
            },
            hideNewWindow(){
                this.$refs.newWindow.hide();
            },
            hideEditNewWindow(){
                this.$refs.editNewWindow.hide();
            },
        }
    }

</script>