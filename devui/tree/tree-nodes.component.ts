import { Component, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { TreeFactory, TreeNode } from './tree-factory.class';

@Component({
  selector: 'd-tree-nodes',
  standalone: false,
  templateUrl: './tree-nodes.component.html',
  styleUrl: './tree-nodes.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  preserveWhitespaces: false
})
export class TreeNodesComponent {
  @Input() treeList: Array<TreeNode>;
  @Input() treeNodesRef: TemplateRef<any>;
  @Input() treeFactory: TreeFactory;
  @Input() virtualScroll = false;
  trackByFn(index, item) {
    return index;
  }
}
