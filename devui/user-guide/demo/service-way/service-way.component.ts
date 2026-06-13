import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IStep, UserGuideService } from 'ng-devui/user-guide';
import { mockSteps } from '../mock-steps';

@Component({
  selector: 'd-user-guide-service-way',
  standalone: false,
  templateUrl: './service-way.component.html',
  styleUrl: './service-way.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ServiceWayComponent implements OnInit {
  steps: Array<IStep> = mockSteps;

  constructor(private userGuideService: UserGuideService) {}

  ngOnInit() {
    this.userGuideService.setSteps(this.steps);
  }

  startTutorial(index: number) {
    this.userGuideService.start(index);
  }

  goStep3() {
    this.userGuideService.start(0);
    this.userGuideService.goStep(2);
  }
}
