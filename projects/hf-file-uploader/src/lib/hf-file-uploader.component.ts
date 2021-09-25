import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hf-file-uploader',
  templateUrl: './hf-file-uploader.component.html',
  styleUrls: ['./hf-file-uploader.component.css']
})
export class HfFileUploaderComponent implements OnInit {
  @Input() text: string;
  @Input() format: string;
  @Output() file = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList): void {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.file.emit(fileReader.result.toString());
    };
    fileReader.readAsText(files.item(0));
  }
}
