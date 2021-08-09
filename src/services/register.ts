import { DI } from '@leanup/lib';

import { ItemListService } from './item-list.service';

DI.register('ItemListService', new ItemListService());
