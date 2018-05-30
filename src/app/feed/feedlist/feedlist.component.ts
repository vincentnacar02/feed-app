import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface Feed { author: string, message: string, dateposted: Date }

@Component({
  selector: 'app-feedlist',
  templateUrl: './feedlist.component.html',
  styleUrls: ['./feedlist.component.css']
})
export class FeedlistComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Feed>;
  feeds: Observable<Feed[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Feed>('feeds');
    this.feeds = this.itemsCollection.valueChanges();
  }

  ngOnInit() {

  }

  delete(feed: Feed) {
    alert('coming soon');
  }

}
