import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Loading} from "./core/model/appState.model";
import {isLoading} from "./core/store/loading/loader.reducer";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'helpdesk';

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private spinner: NgxSpinnerService,
              private store: Store<Loading>) {
  }

  ngOnInit() {
    this.store.pipe(select(isLoading)).pipe(
      takeUntil(this.destroy$),
    ).subscribe((loading) => {
      if (loading) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


}
