import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivityService } from '../activity.service';
import { Activity } from '../type';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
activityDetail: Observable<Activity>;
  constructor(activityService: ActivityService,
     activatedRouted: ActivatedRoute) 
     { 

const ACTIVITYID=activatedRouted.snapshot.params["activityId"];
this.activityDetail= activityService.getActivity(ACTIVITYID);

     }

  ngOnInit() {
  }

}
