import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ns-form-station',
  styleUrls: ['./text-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <FlexboxLayout class="container-row">
      <Label class="" [text]="tc + '.' + labelText | translate"></Label>
      <TextField class="" editable="false" [text]="model"
                 [hint]="tc + '.' + hintText | translate"></TextField>
    </FlexboxLayout>
  `
})
export class TextFieldComponent {

  @Input() tc: string;
  /*** The show value of the TextField ***/
  @Input() model: string;
  /*** Label of TextField ***/
  @Input() labelText: string;
  /*** Hint text of TextField***/
  @Input() hintText: string;

}
