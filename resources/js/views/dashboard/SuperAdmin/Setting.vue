<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <h1 class="h3 mb-4 text-gray-800">Setting</h1>
        <div class="row  mt-md-5 container-fluid">
            <div class="col-12 col-md-2">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                        aria-controls="v-pills-home" aria-selected="true">General</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                        aria-controls="v-pills-profile" aria-selected="false">Social Links</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab"
                        aria-controls="v-pills-messages" aria-selected="false">Seo Tags</a>
                    <!-- <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> -->
                </div>
            </div>
            <div class="col-12 col-md-10">
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade active show" id="v-pills-home" role="tabpanel"
                        aria-labelledby="v-pills-home-tab">
                        <div class="card">
                            <div class="card-body">

                                <form v-on:submit.prevent="updateGeneral">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="exampleFormControlFile1">Choose Favicon</label>
                                            <img :src="`${$store.state.serverPath}/storage/${general.favicon}`" ref="editFaviconDisplay"
                                                alt="favicon" class="w-100">
                                            <input type="file" v-on:change="editAttachFavicon" ref="editFavicon" class="form-control-file" id="exampleFormControlFile1">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="exampleFormControlFile1">Choose logo</label>
                                            <img :src="`${$store.state.serverPath}/storage/${general.logo}`" ref="editLogoDisplay"
                                                alt="logo" class="w-100">
                                            <input type="file" v-on:change="editAttachLogo" ref="editLogo" class="form-control-file" id="exampleFormControlFile1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" v-model="general.address" class="form-control" id="inputAddress"
                                            placeholder="1234 Main St">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress2">Address 2</label>
                                        <input type="text" v-model="general.address2" class="form-control" id="inputAddress2"
                                            placeholder="Apartment, studio, or floor">
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputCity">City</label>
                                            <input type="text" v-model="general.city" class="form-control" id="inputCity">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputState">State</label>
                                            <select v-model="general.state" class="form-control">
                                                <option selected>{{general.state}}</option>
                                                <option value="punjab">punjab</option>
                                                <option value="sindh">sindh</option>
                                                <option value="kpk">kpk</option>
                                                <option value="balochistan">balochistan</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label for="inputZip">Zip</label>
                                            <input type="text" v-model="general.zip" class="form-control" id="inputZip">
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Update</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                        aria-labelledby="v-pills-profile-tab">
                        <div class="card">
                            <div class="card-body">
                                <form v-on:submit.prevent="updateSocialLinks">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Facebook</label>
                                        <input type="text" v-model="socialLink.facebook" class="form-control" id="exampleInputEmail1" placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Instagram</label>
                                        <input type="text" v-model="socialLink.instagram" class="form-control" id="exampleInputPassword1"
                                            placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Twitter</label>
                                        <input type="text" v-model="socialLink.twitter" class="form-control" id="exampleInputPassword1"
                                            placeholder="">
                                    </div>

                                    <!-- Button -->
                                    <button type="submit" class="btn btn-primary">Update</button>
                                </form>

                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                        aria-labelledby="v-pills-messages-tab">
                        <div class="card">
                            <div class="card-body">
                                <form v-on:submit.prevent="updateSeoTags">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Title for main home page</label>
                                        <input type="text" v-model="seoTags.title" class="form-control" id="exampleInputEmail1" placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Meta tags </label>
                                        <input type="text" v-model="seoTags.meta_tags" class="form-control" id="exampleInputPassword1"
                                            placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Meta description</label>
                                        <textarea type="text" v-model="seoTags.meta_description" class="form-control" id="exampleInputPassword1"
                                            placeholder="" row="8"> </textarea>
                                    </div>

                                    <!-- Button -->
                                    <button type="submit" class="btn btn-primary">Update</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                        aria-labelledby="v-pills-settings-tab">...</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as settingService from '../../../services/setting_service';
    export default {
        name: "setting",
        components: {},
        data() {
            return {
                general: {},
                socialLink: {},
                seoTags: {}
            }
        },
        mounted() {
            this.loadGeneral();
            this.loadSocialLinks();
            this.loadSeoTags();
        },
        methods: {
            loadGeneral: async function () {
                try {
                    const response = await settingService.loadGeneral();
                    this.general = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            loadSocialLinks: async function () {
                try {
                    const response = await settingService.loadSocialLinks();
                    this.socialLink = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            loadSeoTags: async function () {
                try {
                    const response = await settingService.loadSeoTags();
                    this.seoTags = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            updateGeneral: async function (){
                 try {
                    const formData = new FormData();
                    formData.append('favicon', this.general.favicon);
                    formData.append('logo', this.general.logo);
                    formData.append('address', this.general.address);
                    formData.append('address2', this.general.address2);
                    formData.append('city', this.general.city);
                    formData.append('state', this.general.state);
                    formData.append('zip', this.general.zip);
                    
                    const response = await settingService.updateGeneral(this.general.id, formData);
                    this.general = response.data;
                    this.flashMessage.success({
                        message: 'General has been updated successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            updateSocialLinks: async function (){
                 try {
                    const response = await settingService.updateSocialLinks(this.socialLink.id, this.socialLink);
                    this.socialLink = response.data;
                    this.flashMessage.success({
                        message: 'Social links has been updated successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            updateSeoTags: async function (){
                 try {
                    const response = await settingService.updateSeoTags(this.seoTags.id, this.seoTags);
                    this.seoTags = response.data;
                    this.flashMessage.success({
                        message: 'Seo Tags has been updated successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            editAttachFavicon() {
                this.general.favicon = this.$refs.editFavicon.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.editFaviconDisplay.src = reader.result;
                }.bind(this), false);
                reader.readAsDataURL(this.general.favicon);
            },
            editAttachLogo() {
                this.general.logo = this.$refs.editLogo.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.editLogoDisplay.src = reader.result;
                }.bind(this), false);
                reader.readAsDataURL(this.general.logo);
            },
        }
    }

</script>