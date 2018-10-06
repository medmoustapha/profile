import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {Router} from '@angular/router';
import {ProfileService} from '../services/profile.service';
import { MessageService } from '../services/message.service';


declare var $: any;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private  router: Router, private profileServiec: ProfileService, private messageService: MessageService) {

  }
  file_src = '../src/assets/images/avatar.png';
  model = new Profile();

  ngOnInit() {}
  imageUpload(file) {
    console.log(this.file_src);
    $('img').hide();

    this.model.photo = this.file_src;
    console.log(this.model.photo);
  }
  imageRemoved(file: any) {
    $('img').show();
  }
 goBack() {
    this.router.navigate(['/home']);
 }
 addProfile(form) {
    console.log(form);
    this.profileServiec.addProfile(form).subscribe(response => { console.log(response);
                                this.messageService.showMessage('div#msg1', 'alert-info', 'Votre Profile est ajouter!', 'glyphicon-pk');
                                                    }, err => {
                                                                                 console.log(err);
                                                             });

 }
}
