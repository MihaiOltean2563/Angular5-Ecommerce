import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }
  // @Output will make this event emitter usable from outside this component,e.g to listen to this event from the parent component
  @Output() featureSelected = new EventEmitter<string>();

  ngOnInit() {
  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSaveData(){
    
  }

}
