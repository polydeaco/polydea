import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  constructor(public auth: AuthService) { }

  pages = [ 
    {
      title: 'Home',
      link: ''
    },
    {
      title: 'Explore',
      link: 'explore'
    },
    {
      title: 'Video',
      link: 'video'
    },
    {
      title: 'Music',
      link: 'music'
    }        
  ];


  ngOnInit() {
  }

}
