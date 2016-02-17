import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from 'angular2/core';

@Component({
  selector: 'question-text',
  template: `
  <p>文本问题控件 - 问题描述： </p>
  <template [ngIf]="isEdit">
    <textarea name="question-tx" id="" cols="30" rows="10" [(ngModel)]="description"></textarea>
    <button type="button" (click)="toSave()" class="btn btn-default">保存</button>
  </template>
  <template [ngIf]="!isEdit">
    <p>{{question.question}}</p>
    <div class="input-field col s12">
      <textarea placeholder="在这里输入你的反馈" id="textarea1" class="materialize-textarea" length="120"></textarea>
    </div>
    <button type="button" (click)="isEdit=true" class="btn btn-default">编辑</button>
  </template>
  `
})
export class QuestionText implements OnInit {
  @Input() question;
  // thread: Thread;
  isEdit: boolean = false;
  // controls: Array[any];
  description: string;

  constructor() {
  }

  toSave() {
    this.isEdit = false;
    this.question.question = this.description;
  }

  ngOnInit(): void {
    this.description = this.question.question //'';//;
    /*this.threadsService.currentThread
      .subscribe( (currentThread: Thread) => {
        this.selected = currentThread &&
          this.thread &&
          (currentThread.id === this.thread.id);
      });*/
  }
}