import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {MessageService} from '../services/message.service';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Profile} from '../profile';
declare var $: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public file_src: any = '../src/assets/images/avatar.png';
  profile = new Profile();

  constructor(private profileService: ProfileService, private messageService: MessageService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOnProfile();
  }
  getOnProfile() {
    let id = this.route.snapshot.params['id'];

    this.profileService.showProfile(id).subscribe(resp => { this.profile = resp[0];
                                                               this.profile.id = id ;

                                                                this.file_src = this.profile.photo;
                                                                console.log(this.profile); });
  }
  editProfile(form) {

    this.profileService.editProfile(this.profile).subscribe(response => { console.log(response);
      this.messageService.showMessage('div#msg1', 'alert-info', 'Votre Profile est bien modifier!', 'glyphicon-pk');
    }, err => {
      console.log(err);
    });
  }
  imageUpload(file) {
    console.log(this.file_src);
    $('img').hide();

    this.profile.photo = this.file_src;

  }
  imageRemoved(file: any) {
    $('img').show();
  }
  goBack() {
    this.router.navigate(['/home']);
  }

}
