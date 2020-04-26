import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-deaths-details',
  templateUrl: './deaths-details.page.html',
  styleUrls: ['./deaths-details.page.scss'],
})
export class DeathsDetailsPage implements OnInit {

  death: any;
  deathId = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {

    this.deathId = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getDeath(this.deathId).subscribe(res => {
      this.death = res[0];
    });

  }

}
