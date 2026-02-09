import {
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { Users } from './Users.model';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

type User = {
  id: string;
  avatar: string;
  name: string;
};
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() selected!: boolean;

  //traditional way of initializing a property
  /*

  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
    console.log('User is selected');
  }

  */

  // signals way of initializing a property
  /*
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
*/

  /*

  //Using input decorator by decorator
  avatar = input.required();
  name = input.required();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  */

  //Using Input  decorator
  // @Input({ required: true }) id?: String;
  // @Input({ required: true }) avatar?: string;
  // @Input({ required: true }) name?: string;

  //instead of indiviual input we can use object for input
  @Input({ required: true }) user?: Users; //@Output() select = new EventEmitter();

  //Using output emitter
  select = output<any>();

  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }
  onSelectedUser() {
    this.select.emit(this.user?.id);
  }
}
