import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  showMessage(selector , mgColor , magText, icon) {
      $(selector).removeClass();
      $(selector).addClass(' alert ' + mgColor + ' alert-dismissible ');
      $(selector).html('<h4><span class= "glyphicon ' + icon + '"  ></span>&nbsp: <b>' + magText + '</b></h4>');
      $(selector)

        .show()
        // .delay(1000).fadIn('slow')
        .delay(1000).fadeOut('slow');
  }
}
