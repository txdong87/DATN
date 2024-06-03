import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss'],
})
export class TreeSelectComponent {
  @Input() tree: any[] = [];
  @Input() selectedNodeId: string = '';

  @Output() selectdNodeChange = new EventEmitter<any>();

  objectIdEmpty = '000000000000000000000000';

  constructor() {}

  selectNode(node: any) {
    if (node.id !== this.objectIdEmpty) {
      this.selectedNodeId = node.id;
      this.selectdNodeChange.emit(node);
    }
  }

  expandNode(node: any) {
    if (node.isExpand !== null) {
      node.isExpand = !node.isExpand;
    }
  }

  nodeIdChangeEvent(node: any) {
    this.selectedNodeId = node.id;
    this.selectdNodeChange.emit(node);
  }
}
