import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

 /*
  * Services
  */
//import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string | undefined;
  album: Object | undefined;

  constructor(private route: ActivatedRoute, private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
    console.log(this.id);
  }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
