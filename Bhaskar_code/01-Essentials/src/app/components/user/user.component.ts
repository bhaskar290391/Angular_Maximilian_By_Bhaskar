import { Component, Input, Signal, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

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

  //Using Input  decorator
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedUser() {}
}
