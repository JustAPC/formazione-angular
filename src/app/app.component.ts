import { Component } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { DialogExampleComponent } from "./components/dialog-example/dialog-example.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = "formazione-angular";

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog Result: ${result}`);
    });
  }
}
