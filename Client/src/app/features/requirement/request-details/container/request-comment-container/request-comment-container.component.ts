import {Component, Input, OnInit} from '@angular/core';
import {RequestComment, Request, RequestCommentWrapper} from 'app/core/model/Request';
import {Observable} from 'rxjs';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {UserStoreService} from 'app/core/services/user-store.service';
import {RequestService} from 'app/core/services/request.service';
import {GroupHttpService} from "../../../../../api/group-http.service";
import {Group} from "../../../../../core/model/Group";
import {Store} from "@ngrx/store";
import {RequestState} from "../../../../../core/model/appState.model";
import * as RequestAction from '../../../store/request.action';
import {getRequestById} from "../../../store/request.reducer";

@Component({
    selector: 'app-request-comment-container',
    templateUrl: './request-comment-container.component.html',
    styleUrls: ['./request-comment-container.component.scss']
})
export class RequestCommentContainerComponent implements OnInit {

    @Input() applyZIndex = true;

    showWindowCommentSharing = false;
    clickedGroup = false;
    selectedGroup: Group;
    loggedInUsername: string;

    private sharingComment: RequestComment;

    isGhost$: Observable<boolean>;
    isSolver$: Observable<boolean>;
    request$: Observable<Request>;
    involvedInGroups$: Observable<string[]>;


    constructor(private swallNotification: SwallNotificationService,
                public userStoreService: UserStoreService,
                private requestService: RequestService,
                private groupService: GroupHttpService,
                private store: Store<RequestState>) {
    }

    ngOnInit() {
        this.isGhost$ = this.userStoreService.isGhost();
        this.isSolver$ = this.userStoreService.isSolver();
        this.involvedInGroups$ = this.groupService.getAllGroupNamesForUser();
        this.loggedInUsername = this.userStoreService.user.username;
        this.request$ = this.store.select(getRequestById);
    }

    async editComment(requestComment: RequestComment) {
        const {value: formValues} = await this.swallNotification.editComment(requestComment.comment);
        if (formValues) {
            this.store.dispatch(RequestAction.editComment({requestComment, comment: formValues[0]}));
        }
    }

    deleteComment(requestComment: RequestComment) {
        this.swallNotification.generateDeleteQuestion('komentár', requestComment.comment).then((result) => {
            if (result.value) {
                this.store.dispatch(RequestAction.deleteComment({requestComment}));
            }
        });
    }

    changeCommentPrivacy(requestComment: RequestComment) {
        this.store.dispatch(RequestAction.changeCommentPrivacy({requestComment}));
    }

    changeFrames(requestComment: RequestComment) {
        this.showWindowCommentSharing = !this.showWindowCommentSharing;
        this.sharingComment = requestComment;
    }

    shareWith() {
        this.swallNotification.generateQuestion(`Naozaj chcete vyzdieľať komentár so skupinou : ${this.selectedGroup.name} ?`)
            .then((result) => {
                if (result.value) {
                    this.store.dispatch(RequestAction.shareComment({
                        requestComment: this.sharingComment,
                        groupName: this.selectedGroup.name
                    }));
                }
            });
    }

    getGroupDetails(groupName: string) {
        this.groupService.getGroupDetails(groupName).subscribe(group => {
            this.clickedGroup = true;
            this.selectedGroup = group;
        });
    }

    addComment(requestCommentWrapper: RequestCommentWrapper, request: Request) {
        requestCommentWrapper.requestComment.requestId = request.id;
        this.store.dispatch(RequestAction.addComment({request, requestCommentWrapper}));
    }

}
