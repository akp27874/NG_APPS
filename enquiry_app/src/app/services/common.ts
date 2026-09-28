import { Service } from '@angular/core';
import { Subject } from 'rxjs';

@Service()
export class Common {
    $userLog: Subject<void> = new Subject<void>();
}
