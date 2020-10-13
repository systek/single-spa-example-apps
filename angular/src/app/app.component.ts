import {Component, OnDestroy, OnInit} from '@angular/core';
import {SingleSpaProps, singleSpaPropsSubject} from '../single-spa/single-spa-props';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  singleSpaProps: SingleSpaProps;
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props),
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
