import { Component, OnInit } from '@angular/core';
import { Hike } from 'src/app/models/hike';
import { HikeService } from 'src/app/services/hike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Hike Tracker';
  hikes: Hike[] = [];
  newHike = new Hike();
  editHike: Hike | null = null;
  selectedHike: Hike | null = null;
  showForm: boolean = false;
  keyword: string = '';
  selectedDifficulty = 0;
  difficulties = [
    1,
    2,
    3,
    4,
    5
  ]
  constructor(private hikeServ: HikeService) {}

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.hikeServ.index().subscribe({
      next: (result) => {
        this.hikes = result;
      },
      error: (err) => {
        console.error('HikeComponent.reload() error loading hikes: ' + err);
      },
    });
  }
  addHike(hike: Hike): void {
    if (hike.name === '' || hike.name === null || hike.name === ' ') {
      return alert('Please name the hike you want to add.');
    }
    this.hikeServ.create(hike).subscribe({
      next: (result) => {
        this.reload();
        this.showForm = false;
        this.newHike = new Hike();
      },
      error: (err) => {
        console.error('HikeComponent.addHike() error adding hike: ' + err);
      },
    });
  }
  deleteHike(id: number) {
    if (confirm('Are you sure you want to delete this hike?')) {
      this.hikeServ.destroy(id).subscribe({
        next: () => {
          this.reload();
          this.selectedHike = null;
        },
        error: (err) => {
          console.error(
            'HikeComponent.deleteHike() error deleting hike: ' + err
          );
        },
      });
    }
  }

  updateHike(hike : Hike){
    this.hikeServ.update(hike).subscribe({
      next: (result) => {
        this.selectedHike = result;
        this.editHike = null;
        this.reload();
      },
      error: (err) => {
        console.error(
          'HikeComponent.deleteHike() error editing hike: ' + err
        );
      },
    })
  }

  searchByName(){
    this.hikeServ.search(this.keyword).subscribe({
      next: (result) => {
        this.hikes = result;
      },
      error: (err) => {
        console.error(
          'HikeComponent.searchByName() error getting hikes: ' + err
        );
      },
    })
  }
  //////////////////////////////////////////////////// NON DATABASE FUNCTIONS /////////////////////////////////////////
  displayHike(hike: Hike) {
    this.selectedHike = hike;
  }
  displayAllHikes() {
    this.selectedHike = null;
  }
  setEditHike() {
    this.editHike = Object.assign({}, this.selectedHike);
  }
}
