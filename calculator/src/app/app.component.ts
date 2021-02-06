import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator 1';

  public result = '';
  public history = '';
  private operator = ['-', '+', '*', 'C', 'CE', '%', '/'];

  isNumber(input): boolean {
    return !isNaN(Number(input));
  }

  click(input: string): void {

    // check input is number or no
    if (this.isNumber(input) === true) {
      this.result = this.result + input;
    } else {
      if (input === 'C') {
        this.result = '';
        return;
      }
      if (input === 'CE') {
        this.result = '';
        this.history = '';
        return;
      }
      // check result is empty or not
      if (this.result === '') {
        // check last character is operator or not
        // if is operator replace it with new operator
        if (this.operator.includes(this.history.slice(-1))) {
          this.history = this.history.slice(0, -1) + input;
        }
      } else {
        // append the result to history

        this.history = this.history + this.result + input;
        this.result = '';
      }

    }
  }


}
