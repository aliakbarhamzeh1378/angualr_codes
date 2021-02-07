import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator 1';

  public number = '';
  public result = '';

  clickNumber(input: string): void {
    // Do Not Allow . more than once
    if (input === '.') {
      if (this.number !== '') {

        if (this.number.indexOf('.') >= 0) {
          return;
        }
      }
    }
    if (input === '0') {
      if (this.number === '') {
        return;
      }
      const PrevKey = this.number[this.number.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+') {
        return;
      }
    }
    this.number = this.number + input;
    this.clickCalculate();

  }

  clickOperator(input: string): void {
    // Do not allow operators more than once
    const lastKey = this.number[this.number.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      return;
    }

    this.number = this.number + input;
  }

  clickClear(): void {
    this.number = '';
  }

  clickClearAll(): void {
    this.number = '';
    this.result = '';
  }

  removeItem(): void {
    this.number = this.number.substr(0, this.number.length - 1);
  }

  clickCalculate(): void {
    let formula = this.number;

    let lastKey = formula[formula.length - 1];

    if (lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }

    lastKey = formula[formula.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }

    // tslint:disable-next-line:no-eval
    this.result = eval(formula);
  }


}
