<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Contact Management</h1>
        </div>

        <div class="align-items-center justify-content-between mb-4 text-right">
            <button v-on:click="showUpdateContactWindow" class="btn btn-primary">Update Email Contact</button>
        </div>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">list of User</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(contact, index) in contacts" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{contact.name}}</td>
                                <td>{{contact.email}}</td>
                                <td>
                                    <a v-on:click="showContact(contact)"
                                        class="btn btn-info btn-circle">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                    <a v-on:click="deleteContact(contact)"
                                        class="btn btn-danger btn-circle">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- /.container-fluid -->
        <div class="modal fade" id="addUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered  modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Create an Account!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-10">
                                <div class="p-5">
                                    <div class="text-center">
                                        <p class="h4 text-gray-900 mb-4">User Will get Email with password</p>
                                    </div>
                                    <form class="user">
                                        <div class="form-group row">
                                            <div class="col-sm-12 mb-3 mb-sm-0">
                                                <input type="text" class="form-control form-control-user"
                                                    id="exampleFirstName" placeholder="User Name">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" placeholder="Email Address">
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" class="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password">
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Repeat Password">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <br>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Add User</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- update conatct modal -->
        <b-modal ref="updateContactModal" hide-footer title="Update Contact...">
            <form v-on:submit.prevent="updateContact">
                <div class="form-group">
                    <label for="">Contact</label>
                    <input type="email" v-model="contact.email" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary">Update Email Contact</button>
            </form>
        </b-modal>
        <!-- end -->

        <!-- view Contact Modal -->
        <b-modal ref="viewContactModal" hide-footer title="View Contact">
            <p>Name: {{viewContact.name}}</p>
            <p>Email: {{viewContact.email}}</p>
            <p v-if="viewContact.phone">Phone: {{viewContact.phone}}</p>
            <p>Message: {{viewContact.message}}</p>
        </b-modal>
    </div>
</template>

<script>
import * as settingService from '../../../services/setting_service';
    export default {
        name: "Contact",
        data(){
            return{
                contact:{
                    email:''
                },
                contacts:[],
                viewContact:{}
            }
        },
        mounted(){
            this.loadAdminContact();
            this.loadAllContact();
        },
        methods: {
            loadAdminContact: async function(){
                try {
                    const response = await settingService.loadAdminContact();
                    this.contact = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            loadAllContact: async function(){
                try {
                    const response = await settingService.loadAllContact();
                    this.contacts = response.data;
                    console.log(this.contacts);
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            updateContact: async function (){
                try {
                    const response = await settingService.updateContact(this.contact.id, this.contact);
                    this.contact = response.data;
                    this.hideUpdateContactWindow();
                    this.flashMessage.success({
                        message: 'Contact has been updated successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            showUpdateContactWindow() {
                this.$refs.updateContactModal.show();
            },
            hideUpdateContactWindow() {
                this.$refs.updateContactModal.hide();
            },
            showContact(contact){
                this.viewContact = contact;
                this.$refs.viewContactModal.show();
            },
            deleteContact: async function (contact){
                if (
                    !window.confirm(`Are you sure you want to delete ${contact.name}`)
                ) {
                    return;
                }
                try {
                    const response = await settingService.deleteContact(contact.id);
                    this.contacts = this.contacts.filter(obj => {
                        return obj.id != contact.id;
                    });
                    this.flashMessage.success({
                        message: "Contact deleted successfuly!",
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred please try again!",
                        time: 5000
                    });
                }
            },
        }
    }

</script>
