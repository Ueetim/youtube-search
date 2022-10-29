import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Video } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public videos!: Array<Video>;

  private routeSub!: Subscription;
  private videoSub!: Subscription;

  public preloaderCount: number[] = [];

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    for (let i = 0; i < 50; i++) {
      this.preloaderCount.push(i);
    }
  }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['search-term']) {
        this.searchVideos(params['search-term']);
      } else {
        this.searchVideos('dogs');
      }
    })
    // this.searchVideos("dogs")
  }

  searchVideos(q: string):void {
    this.videoSub = this.httpService.getVideoList(q).subscribe((videoList: APIResponse<Video>) => {
      this.videos = videoList.items;
      console.log(this.videos);
    })
  }

  // get videos from search
  getChildData($event: any) {
    this.videos = $event;
  }

  // openGameDetails(id: string): void {
  //   this.router.navigate(['details', id]);
  // }

  ngOnDestroy():void {
    if (this.videoSub) {
      this.videoSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
