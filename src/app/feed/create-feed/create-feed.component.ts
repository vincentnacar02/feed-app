import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Feed { author: string, message: string, dateposted: string }

@Component({
  selector: 'app-create-feed',
  templateUrl: './create-feed.component.html',
  styleUrls: ['./create-feed.component.css']
})
export class CreateFeedComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Feed>;
  feed: Feed;

  constructor(private afs: AngularFirestore, private router: Router) {
    this.itemsCollection = afs.collection<Feed>('feeds');
  }

  ngOnInit() {
    const feed : Feed = {
      author : '',
      message : '',
      dateposted: new Date().toDateString()
    };
    this.feed = feed;
  }

  submit() {
    const id = this.afs.createId();
    this.itemsCollection.doc(id).set(this.feed);
    this.router.navigate(['/feeds']);
  }

}
