import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {ProfileService} from '../services/profile.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   profiles: any;
  constructor(private profileservice: ProfileService, private router: Router, private messageservice: MessageService) {

      }
  // @ts-ignore
  profiles: any;

  ngOnInit() {
    this.getAllProfile();
  }
  getAllProfile() {
    this.profileservice.showAllProfile().subscribe( response => { this.profiles = response; console.log(this.profiles); });

                }
  deleteProfile(id) {
    let response = confirm('Vouz etes sur de suprimmer ce profile');
    if ( response === true ) {
      this.profileservice.deleteProfile(id).subscribe( response => { console.log(response)
      this.getAllProfile();
        this.messageservice.showMessage('div#msg1', 'alert-info', 'Votre Profile est bien modifier!', 'glyphicon-pk');
      });
    } else {

    }
  }
}
