import { Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth-guard';
import { Home } from '../features/home/home';
import { Lists } from '../features/lists/lists';
import { MemberDetailed } from '../features/members/member-detailed/member-detailed';
import { MemberList } from '../features/members/member-list/member-list';
import { Messages } from '../features/messages/messages';

export const routes: Routes = [
  { component: Home, path: '' },
  {
    canActivate: [authGuard],
    children: [
      { component: MemberList, path: 'members' },
      { component: MemberDetailed, path: 'members/:id' },
      { component: Lists, path: 'lists' },
      { component: Messages, path: 'messages' },
    ],
    path: '',
    runGuardsAndResolvers: 'always',
  },
  { component: Home, path: '**' },
];
