import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { APIResponse, Video } from 'src/app/models';


@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() bgColor: string = '';

  videoSub: any;

  videos!: any;

  @Output() dataEvent = new EventEmitter<any>();

  constructor(
    private router: Router,
    private httpService: HttpService) { }

  ngOnInit(): void {
  }

  // onSubmit(search: any) {
  //   search.blur();
  //   this.videoSub = this.httpService.getVideoList(search.value).subscribe((videoList: APIResponse<Video>) => {
  //     this.videos = videoList.items;
  //     this.dataEvent.emit(this.videos);
  //     console.log(this.videos);
  //   })
  // }

  onSubmit(form: NgForm, search: any) {
    if (search.value.trim()) {
      this.router.navigate(['search', form.value.search.trim()]);
      search.value = "";
    }
  }


}
